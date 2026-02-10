import { useState, useEffect } from "react";

const COMPANY_NAME_KEY = "companyName";
const DEFAULT_COMPANY_NAME = "LAER";

export function useCompanyName() {
  const [companyName, setCompanyNameState] = useState<string>(() => {
    try {
      const stored = localStorage.getItem(COMPANY_NAME_KEY);
      return stored || DEFAULT_COMPANY_NAME;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return DEFAULT_COMPANY_NAME;
    }
  });

  const setCompanyName = (name: string) => {
    try {
      const trimmedName = name.trim() || DEFAULT_COMPANY_NAME;
      localStorage.setItem(COMPANY_NAME_KEY, trimmedName);
      setCompanyNameState(trimmedName);
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  };

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === COMPANY_NAME_KEY) {
        setCompanyNameState(e.newValue || DEFAULT_COMPANY_NAME);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return { companyName, setCompanyName };
}
