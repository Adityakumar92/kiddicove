import { useState, useEffect } from "react";

/**
 * Booking.jsx
 * - Final step after form completion
 * - Asks user details: name, email, phone
 * - Pre-fills "child issue" and "program" based on formData
 */

export default function Booking({ formData, onBack, onSubmit }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    childIssue: "",
    program: "",
  });

  const [valid, setValid] = useState(false);

  // Prefill childIssue + program from previous form data
  useEffect(() => {
    let issue = "";
    let program = "";

    // Determine child issue summary
    if (formData.hasDiagnosis === "yes") {
      issue = "Neurodivergent Support Needs";
      program = "CWP"; // Clinical Wellness Program
    } else {
      const deeperCount = formData.deeper?.length || 0;
      const commonCount = formData.exploratory?.length || 0;

      if (deeperCount > commonCount) {
        issue = "Possible Neurodivergent Traits";
        program = "CWP";
      } else {
        issue = "General Stress / Daily Support Needs";
        program = "MAP"; // Mindfulness & Adaptation Program
      }
    }

    setDetails((prev) => ({
      ...prev,
      childIssue: issue,
      program: program,
    }));
  }, [formData]);

  // Validation check
  useEffect(() => {
    const isValid =
      details.name.trim() !== "" &&
      details.email.trim() !== "" &&
      details.phone.trim() !== "" &&
      details.phone.length >= 10;

    setValid(isValid);
  }, [details]);

  const handleChange = (field, value) => {
    setDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleFinalSubmit = () => {
    if (!valid) return;

    // Pass data back to parent (you integrate API)
    onSubmit(details);
  };

  return (
    <div className="w-full max-w-md mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Final Step: Book Your Consult
      </h2>

      {/* Child Issue Preview */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow mb-4">
        <h3 className="font-medium text-lg mb-2">Your Support Path</h3>
        <p className="text-sm text-gray-700 mb-1">
          <span className="font-semibold">Identified Issue:</span> {details.childIssue}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Recommended Program:</span>{" "}
          {details.program}
        </p>
      </div>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            value={details.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Enter full name"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={details.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="example@email.com"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            maxLength={10}
            value={details.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="Enter 10-digit number"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={onBack}
          className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl"
        >
          Back
        </button>

        <button
          onClick={handleFinalSubmit}
          className={`px-6 py-3 rounded-xl text-white font-medium transition 
          ${
            valid
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-300 cursor-not-allowed"
          }`}
          disabled={!valid}
        >
          Book Consult
        </button>
      </div>
    </div>
  );
}
