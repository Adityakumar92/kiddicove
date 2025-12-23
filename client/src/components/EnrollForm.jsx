import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function EnrollForm({ onClose, selectedDuration }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        college: "",
        course: "",
        year: "",
        duration: selectedDuration || "",
        terms: false,
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    /* ---------------- VALIDATION ---------------- */

    useEffect(() => {
        if (selectedDuration) {
            setFormData((prev) => ({
                ...prev,
                duration: selectedDuration,
            }));
        }
    }, [selectedDuration]);

    const validate = () => {
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }

        if (!formData.mobile.trim()) {
            newErrors.mobile = "Mobile number is required";
        } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
            newErrors.mobile = "Mobile number must be 10 digits";
        }

        if (!formData.college.trim())
            newErrors.college = "College is required";

        if (!formData.course.trim())
            newErrors.course = "Course is required";

        if (!formData.year.trim())
            newErrors.year = "Year is required";

        if (!formData.duration)
            newErrors.duration = "Please select program duration";

        if (!formData.terms)
            newErrors.terms = "You must accept Terms & Conditions";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /* ---------------- CHANGE HANDLER ---------------- */
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });

        // Clear error when user types
        setErrors({ ...errors, [name]: "" });
    };

    /* ---------------- SUBMIT ---------------- */
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            setLoading(true);
            const res = await fetch("https://cdc.deepconnection.life/enroll.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await res.json();

            if (result.status === "success") {
                alert("Enrollment submitted successfully!");
                onClose();
            } else {
                alert(result.message || "Something went wrong");
            }
        } catch {
            alert("Server error. Try again later.");
        } finally {
            setLoading(false);
        }
    };

    /* ---------------- UI ---------------- */
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl font-bold text-center mb-6">
                Enroll Now
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <input name="name" placeholder="Full Name" className="form-input" onChange={handleChange} />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div>
                    <input name="email" type="email" placeholder="Email" className="form-input" onChange={handleChange} />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div>
                    <input name="mobile" placeholder="Mobile Number" className="form-input" onChange={handleChange} />
                    {errors.mobile && <p className="error">{errors.mobile}</p>}
                </div>

                <div>
                    <input name="college" placeholder="College / University" className="form-input" onChange={handleChange} />
                    {errors.college && <p className="error">{errors.college}</p>}
                </div>

                <div>
                    <input name="course" placeholder="Course" className="form-input" onChange={handleChange} />
                    {errors.course && <p className="error">{errors.course}</p>}
                </div>

                <div>
                    <input name="year" placeholder="Year" className="form-input" onChange={handleChange} />
                    {errors.year && <p className="error">{errors.year}</p>}
                </div>

                <div className="md:col-span-2">
                    <select name="duration"
                        className="form-input"
                        value={formData.duration}
                        onChange={handleChange}>
                        <option value="">Select Program Duration</option>
                        <option value="60">60 Hours</option>
                        <option value="120">120 Hours</option>
                        <option value="180">180 Hours</option>
                        <option value="240">240 Hours</option>
                    </select>
                    {errors.duration && <p className="error">{errors.duration}</p>}
                </div>
            </div>

            <div className="flex items-start space-x-2">
                <input type="checkbox" name="terms" className="mt-1" onChange={handleChange} />
                <p className="text-sm text-gray-600">
                    I accept the{" "}
                    <Link to="/T&C" className="text-blue-500 underline" target="_blank">
                        Terms & Conditions
                    </Link>
                </p>
            </div>
            {errors.terms && <p className="error">{errors.terms}</p>}

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 text-white py-4 text-lg rounded-full hover:bg-blue-400 transition disabled:opacity-50"
            >
                {loading ? "Submitting..." : "Submit Enrollment"}
            </button>
        </form>
    );
}
