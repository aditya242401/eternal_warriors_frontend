import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { useTheme } from "./store/useTheme";
import Dashboard from "./pages/Dashboard";
import AccountSettings from "./pages/AccountSettings";

export default function App() {
  const { theme, setTheme } = useTheme();

  // Effect to load the theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme == 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    console.log(theme);
    if (theme == 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/account-settings" element={<AccountSettings />} />
    </Routes>
  )
}