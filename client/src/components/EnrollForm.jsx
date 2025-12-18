import { useState } from "react";
import { Link } from "wouter";

export default function EnrollForm({ onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        college: "",
        course: "",
        year: "",
        duration: "",
        terms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.terms) {
            alert("Please accept Terms & Conditions");
            return;
        }

        try {
            const res = await fetch(
                "https://cdc.deepconnection.life/enroll.php",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                }
            );

            const result = await res.json();

            if (result.status === "success") {
                alert("Enrollment submitted successfully!");
                onClose();
            } else {
                alert(result.message || "Something went wrong");
            }
        } catch (err) {
            alert("Server error. Try again later.");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            <h2 className="text-3xl font-bold text-center mb-6">
                Enroll Now
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input name="name" placeholder="Full Name" className="form-input" onChange={handleChange} />
                <input name="email" type="email" placeholder="Email" className="form-input" onChange={handleChange} />
                <input name="mobile" placeholder="Mobile Number" className="form-input" onChange={handleChange} />
                <input name="college" placeholder="College / University" className="form-input" onChange={handleChange} />
                <input name="course" placeholder="Course" className="form-input" onChange={handleChange} />
                <input name="year" placeholder="Year" className="form-input" onChange={handleChange} />

                <select name="duration" className="form-input md:col-span-2" onChange={handleChange}>
                    <option value="">Select Program Duration</option>
                    <option value="60">60 Hours</option>
                    <option value="120">120 Hours</option>
                    <option value="180">180 Hours</option>
                </select>
            </div>


            <div className="flex items-start space-x-2">
                <input type="checkbox" name="terms" className="mt-1" onChange={handleChange} />
               <p className="text-sm text-gray-600">
    I accept the{" "}
    <Link
      to="/T&C"
      className="text-blue-500 underline hover:text-blue-600"
      target="_blank"
    >
      Terms & Conditions
    </Link>
  </p>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-4 text-lg rounded-full hover:bg-blue-400 transition"
            >
                Submit Enrollment
            </button>
        </form>

    );
}
