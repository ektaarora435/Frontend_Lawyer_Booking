import React, { useState } from "react";

const TextInput = ({
  label,
  type = "text",
  isDisabled = false,
  readOnly = false,
  placeholder = "",
  value,
  onChange,
  validation,
  icon,
  inputClass = "",
  variant = "standard", // standard, filled, outline
  isCurrency = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (validation) {
      const validationError = validation(e.target.value);
      setError(validationError);
    }
    onChange && onChange(e);
  };

  return (
    <div className={`w-full ${variant} mb-4`}>
      {label && <label className="block text-sm font-medium mb-2">{label}</label>}
      <div className="relative flex items-center">
        {/* Left Icon (Currency or Custom Icon) */}
        {isCurrency && (
          <span className="absolute left-3 text-gray-500">
            {/* Dollar Sign Icon (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 1 1 0 7H6" />
            </svg>
          </span>
        )}
        {icon && !isCurrency && <span className="absolute left-3 text-gray-500">{icon}</span>}
       
        {/* Input Field */}
        <input
          type={type === "password" && showPassword ? "text" : type}
          disabled={isDisabled}
          readOnly={readOnly}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary transition-all text-gray-900
            ${variant === "filled" ? "bg-gray-100 border-gray-300" : ""}
            ${variant === "outline" ? "border-gray-400" : "border-b border-gray-400"}
            ${icon || isCurrency ? "pl-10" : ""}
            ${inputClass}
          `}
        />

        {/* Right Icon (Password Toggle) */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 text-gray-500 focus:outline-none"
          >
            {showPassword ? (
              // Eye-Off Icon (SVG)
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.05 10.05 0 0 1 12 20c-5 0-9.27-3.11-11-7.5 1-2.41 2.76-4.5 5-5.74" />
                <path d="M9.88 9.88A3 3 0 0 1 14 14M3 3l18 18" />
                <path d="M10.73 5.08A9.32 9.32 0 0 1 12 5c5 0 9.27 3.11 11 7.5a10.66 10.66 0 0 1-1.5 2.5M14.12 14.12A3 3 0 0 1 10 10" />
              </svg>
            ) : (
              // Eye Icon (SVG)
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Validation Error Message */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TextInput;
