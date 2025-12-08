import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/** Reusable Input Component */
const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
}) => (
  <div>
    <label className="block mb-1 font-medium">{label}</label>
    <input
      type={type}
      name={name}
      className="w-full p-2 border rounded"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

const ConsultUs = ({ onClose }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    preferredTime: "",
    concerns: [],
    otherConcern: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  /** Toggle multi-select checkbox */
  const toggleConcern = (value) => {
    setFormData((prev) => {
      let updated = [...prev.concerns];

      if (updated.includes(value)) {
        updated = updated.filter((c) => c !== value);
      } else {
        updated.push(value);
      }
      return { ...prev, concerns: updated };
    });
  };

  /** Generic input change */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  /** Validation */
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits";

    if (!formData.childAge) newErrors.childAge = "Child age is required";
    else if (Number(formData.childAge) <= 0)
      newErrors.childAge = "Age must be positive";

    if (formData.concerns.length === 0)
      newErrors.concerns = "Select at least one concern";

    if (
      formData.concerns.includes("other") &&
      !formData.otherConcern.trim()
    )
      newErrors.otherConcern = "Please specify your concern";

    if (!formData.preferredTime)
      newErrors.preferredTime = "Select a time";

    if (!formData.agree)
      newErrors.agree = "You must accept the Terms & Conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /** Submit form */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const finalConcerns = [...formData.concerns];
    if (formData.concerns.includes("other")) {
      finalConcerns.push(formData.otherConcern);
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      childAge: formData.childAge,
      preferredTime: formData.preferredTime,
      concerns: finalConcerns,
    };

    try {
      const response = await fetch(
        "http://localhost/kiddicove-website/kiddicove-backend/booking.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        alert("Submitted!");
        onClose();
      } else {
        throw new Error(result.message || "Unknown error");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const concernOptions = [
    "Autism",
    "ADHD",
    "Screen Addiction",
    "Speech Delay",
    "Aggression",
    "Learning Difficulties",
    "other",
  ];

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg relative">
      <h2 className="text-2xl font-bold mb-5 text-center">Consult Us</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <InputField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          error={errors.name}
        />

        {/* Email */}
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
          error={errors.email}
        />

        {/* PHONE — numeric only, max 10 digits */}
        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            maxLength={10}
            className="w-full p-2 border rounded"
            placeholder="10-digit mobile number"
            value={formData.phone}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ""); // only numbers
              if (value.length <= 10) {
                setFormData({ ...formData, phone: value });
              }
            }}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        {/* CHILD AGE — numeric only, max 3 digits, positive */}
        <div>
          <label className="block mb-1 font-medium">Child Age</label>
          <input
            type="text"
            name="childAge"
            maxLength={3}
            className="w-full p-2 border rounded"
            placeholder="Enter child age"
            value={formData.childAge}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ""); // only digits
              if (value.length <= 3) {
                setFormData({ ...formData, childAge: value });
              }
            }}
          />
          {errors.childAge && (
            <p className="text-red-500 text-sm">{errors.childAge}</p>
          )}
        </div>

        {/* Preferred Time */}
        <div>
          <label className="block mb-1 font-medium">Preferred Time</label>
          <select
            name="preferredTime"
            className="w-full p-2 border rounded"
            value={formData.preferredTime}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
          {errors.preferredTime && (
            <p className="text-red-500 text-sm">
              {errors.preferredTime}
            </p>
          )}
        </div>

        {/* Concerns */}
        <div>
          <label className="block mb-1 font-medium">Your Concerns</label>

          <div className="grid grid-cols-1 gap-2">
            {concernOptions.map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.concerns.includes(item)}
                  onChange={() => toggleConcern(item)}
                />
                <span>
                  {item === "other" ? "Other (Specify)" : item}
                </span>
              </label>
            ))}
          </div>

          {errors.concerns && (
            <p className="text-red-500 text-sm">{errors.concerns}</p>
          )}
        </div>

        {/* OTHER Concern Field */}
        {formData.concerns.includes("other") && (
          <InputField
            label="Please describe your concern"
            name="otherConcern"
            value={formData.otherConcern}
            onChange={handleChange}
            placeholder="Write here..."
            error={errors.otherConcern}
          />
        )}

        {/* Terms */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <span>
            I agree to the{" "}
            <a href="/T&C" className="text-blue-600 underline">
              Terms & Conditions
            </a>
          </span>
        </div>
        {errors.agree && (
          <p className="text-red-500 text-sm">{errors.agree}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className={`w-full bg-blue-600 text-white p-3 rounded mt-2 ${
            !formData.agree
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          }`}
          disabled={!formData.agree}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ConsultUs;
