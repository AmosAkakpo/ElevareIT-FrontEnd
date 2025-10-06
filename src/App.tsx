import React, { useState, createContext, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";

// Language context
export const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {}
});

export function App() {
  const [language, setLanguage] = useState("en");

  // Load saved language on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("app-language");
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  // Save whenever language changes
  useEffect(() => {
    localStorage.setItem("app-language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "fr" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div className="font-apple w-full min-h-screen bg-white">
        <Navbar />
        <main>
          <Outlet /> {/* 👈 each page will load here */}
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
