import React, { useState } from "react";
import { TextInput } from "./component/TextInput";
import { DollarSign } from "lucide-react";
import "./App.css";

function App() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [allValid, setAllValid] = useState({
    amount: false,
    password: false,
    readOnly: true, // No validation required for read-only field
    disabled: true, // No validation required for disabled field
  });

  const handleValidationChange = (field, isValid) => {
    setAllValid((prev) => ({ ...prev, [field]: isValid }));
  };

  const handleSubmit = () => {
    if (Object.values(allValid).every((isValid) => isValid)) {
      setIsFormValid(true);
      alert("Form submitted successfully! ✅");
    } else {
      setIsFormValid(false);
      alert("Please fix the errors before submitting ❌");
    }
  };

  return (
    <div className="main">
      <h1>Components</h1>
      <br />
      <TextInput
        picture={<DollarSign />}
        label="Enter your amount:"
        isNumber={true}
        onValidationChange={(isValid) => handleValidationChange("amount", isValid)}
      />
      <br />
      <TextInput
        label="Enter your password:"
        isPassword={true}
        onValidationChange={(isValid) => handleValidationChange("password", isValid)}
      />
      <br />
      <TextInput
        label="This is a read-only field..."
        readOnly={true}
      />
      <br />
      <TextInput
        label="This field is disabled..."
        disabled={true}
      />
      <br />
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
      {!isFormValid && <p className="error-message">Please fix the errors above!</p>}
    </div>
  );
}

export default App;
