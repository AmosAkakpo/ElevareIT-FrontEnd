import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";

function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-bold text-tealCustom mb-4">404</h1>
      <p className="text-2xl text-gray-300 mb-8">Page not found</p>
      <a
        href="/"
        className="bg-tealCustom text-white px-6 py-3 rounded-md font-medium hover:bg-tealCustom/80 transition-colors"
      >
        Back to Home
      </a>
    </div>
  );
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}