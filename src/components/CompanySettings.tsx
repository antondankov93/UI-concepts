import { useState } from "react";
import { useCompanyName } from "../hooks/useCompanyName";
import { Save, X } from "lucide-react";

interface CompanySettingsProps {
  onClose?: () => void;
}

export default function CompanySettings({ onClose }: CompanySettingsProps) {
  const { companyName, setCompanyName } = useCompanyName();
  const [inputValue, setInputValue] = useState(companyName);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setCompanyName(inputValue);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    setInputValue("LAER");
    setCompanyName("LAER");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 relative">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="space-y-4">
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-bold uppercase tracking-wide mb-2"
            >
              Company Name
            </label>
            <input
              id="companyName"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter company name"
              className="w-full px-4 py-2 border-2 border-gray-300 focus:border-orange-500 outline-none transition-colors font-medium"
              maxLength={50}
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="flex-1 bg-black text-white px-4 py-2 font-bold uppercase text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              {saved ? "Saved!" : "Save"}
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 border-2 border-gray-300 font-bold uppercase text-sm hover:bg-gray-100 transition-colors"
            >
              Reset
            </button>
          </div>

          {saved && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-2 text-sm font-medium">
              Company name updated successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
