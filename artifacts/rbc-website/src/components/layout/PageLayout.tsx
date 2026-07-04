import { ReactNode, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
}

export function PageLayout({ children, title }: PageLayoutProps) {
  const [location] = useLocation();

  useEffect(() => {
    document.title = `${title} | RBC GmbH`;
    window.scrollTo(0, 0);
  }, [title, location]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1a1a1a] overflow-x-hidden font-sans">
      <Header />
      <motion.main
        key={location}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
