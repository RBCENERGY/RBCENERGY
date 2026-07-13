<?php
/**
 * RBC GmbH — Kontaktformular-Mailversand
 *
 * Erwartet: POST mit JSON-Body
 *   { firstName, lastName, company, email, phone, message }
 * Antwortet: JSON { "success": true } oder { "success": false, "error": "..." }
 *
 * Hinweis für die Einrichtung (circa2 / DomainFactory):
 * - Absenderadresse (FROM) muss zur Domain gehören, sonst greift der Spamfilter.
 * - Empfänger ist unten als EMPFAENGER definiert.
 */

header('Content-Type: application/json; charset=utf-8');

const EMPFAENGER = 'c.reinke@rbc-energy.de';
const ABSENDER   = 'noreply@rbc-energy.de'; // ggf. an eine existierende Domain-Adresse anpassen

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Methode nicht erlaubt.']);
    exit;
}

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Ungültige Anfrage.']);
    exit;
}

function feld(array $d, string $key, int $max = 500): string
{
    $v = isset($d[$key]) ? trim((string)$d[$key]) : '';
    // Header-Injection verhindern
    $v = str_replace(["\r", "\n"], ' ', $v);
    return mb_substr($v, 0, $max);
}

$firstName = feld($data, 'firstName', 120);
$lastName  = feld($data, 'lastName', 120);
$company   = feld($data, 'company', 200);
$email     = feld($data, 'email', 200);
$phone     = feld($data, 'phone', 60);
$message   = isset($data['message']) ? trim((string)$data['message']) : '';
$message   = mb_substr($message, 0, 5000);

$errors = [];
if ($firstName === '') $errors['firstName'] = ['Vorname ist erforderlich'];
if ($lastName === '')  $errors['lastName']  = ['Nachname ist erforderlich'];
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = ['Ungültige E-Mail-Adresse'];
}
if ($message === '')   $errors['message']   = ['Nachricht ist erforderlich'];

if ($errors !== []) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error'   => 'Bitte überprüfen Sie die markierten Felder.',
        'errors'  => $errors,
    ]);
    exit;
}

$betreff = 'Neue Anfrage über das Kontaktformular — ' . $firstName . ' ' . $lastName;

$body  = "Neue Anfrage über das Kontaktformular der Website:\n\n";
$body .= "Name:        $firstName $lastName\n";
if ($company !== '') $body .= "Unternehmen: $company\n";
$body .= "E-Mail:      $email\n";
if ($phone !== '')   $body .= "Telefon:     $phone\n";
$body .= "\nNachricht:\n$message\n";

$headers  = "From: RBC GmbH Website <" . ABSENDER . ">\r\n";
$headers .= "Reply-To: $firstName $lastName <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

$ok = mail(
    EMPFAENGER,
    '=?UTF-8?B?' . base64_encode($betreff) . '?=',
    $body,
    $headers
);

if ($ok) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(502);
    echo json_encode([
        'success' => false,
        'error'   => 'E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.',
    ]);
}
