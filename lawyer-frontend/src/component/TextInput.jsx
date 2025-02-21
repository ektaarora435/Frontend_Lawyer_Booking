import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./style.css";

export const TextInput = ({
  picture = null,
  disabled = false,
  readOnly = false,
  label = "",
  isPassword = false,
  isNumber = false,
  onValidationChange = () => {},
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Validation logic
  const validateInput = (value) => {
    let message = "";

    if (!readOnly) {
      if (!value) {
        message = "This field cannot be empty.";
      } else if (isNumber && !/^\d+$/.test(value)) {
        message = "Please enter only numbers.";
      } else if (isPassword) {
        if (value.length < 6) {
          message = "Password must be at least 6 characters.";
        } else if (value.length > 20) {
          message = "Password cannot exceed 20 characters.";
        }
      }
    }

    setValidationMessage(message);
    onValidationChange(message === "");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleBlur = () => {
    validateInput(inputValue);
  };

  return (
    <div className="text-input-container">
      <div className="text-input-wrapper">
        {picture && <span className="text-input-icon">{picture}</span>}
        <input
          type={
            isPassword && !showPassword
              ? "password"
              : isNumber
              ? "text"
              : "text"
          }
          className={`text-input-field ${picture ? "with-icon" : ""}`}
          placeholder={label}
          disabled={disabled}
          readOnly={readOnly}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        {isPassword && (
          <span
            className="text-input-icon toggle-password"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        )}
      </div>
      {validationMessage && (
        <p className="text-input-validation">{validationMessage}</p>
      )}
    </div>
  );
};
