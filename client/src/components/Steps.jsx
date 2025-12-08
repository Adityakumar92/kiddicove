import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import OptionButton from "./OptionButton";
import Booking from "./Booking";

/**
 * Steps.jsx
 * - Single-file multi-step form
 * - One question displayed at a time within each step (sub-question flow)
 * - Validation: Continue disabled until required answer provided
 * - Tailwind CSS classes (assumes Tailwind configured)
 * - Uses a local uploaded image as header illustration: /mnt/data/c31dafd0-2568-4835-ac33-3b84b036715b.png
 */

export default function Steps() {
    const [step, setStep] = useState(1);
    // controls which question inside the current step is shown (0-based)
    const [subQ, setSubQ] = useState(0);

    const [formData, setFormData] = useState({
        whoFor: "",
        anyConcerns: "",
        hasDiagnosis: "",
        exploratory: [],
        deeper: [],
        pastSupports: [],
        effectiveness: ""
    });

    // UI / icon helpers
    const IconPerson = ({ className = "h-6 w-6" }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 20a8 8 0 0116 0" />
        </svg>
    );

    const IconChild = ({ className = "h-6 w-6" }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 3v4" />
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M6 7v2a6 6 0 0012 0V7" />
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 21h14" />
        </svg>
    );

    const IconConcern = ({ className = "h-6 w-6" }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 9v4" />
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 17h.01" />
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );

    // Lists
    const commonList = [
        "Frequent screen use",
        "Mild anxiety",
        "Resistance to rules",
        "Stress-related mood changes",
    ];

    const deeperList = [
        "Persistent inattention",
        "Social challenges",
        "Sensory sensitivities",
        "Need for sameness",
        "Learning difficulties",
        "Intense emotional responses",
        "Motor coordination issues",
    ];

    const supports = [
        "None",
        "Occupational therapy (OT)",
        "Speech or language therapy",
        "Behavioral therapy (ABA or CBT)",
        "ADHD medication",
        "School supports (IEP, 504, tutoring)",
        "Sensory integration therapy",
    ];

    const effectivenessList = [
        "Very effective",
        "Somewhat effective",
        "Neutral",
        "Not effective",
    ];

    // helpers to update state
    const updateField = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const toggleItem = (field, item) => {
        setFormData(prev => {
            const arr = prev[field] || [];
            const next = arr.includes(item) ? arr.filter(i => i !== item) : [...arr, item];
            return { ...prev, [field]: next };
        });
    };

    // navigation: when moving step, reset subQ appropriately
    const goNextStep = () => {
        // final step guard
        if (step >= 4) return;
        setStep(s => s + 1);
        setSubQ(0);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const goBackStep = () => {
        if (step <= 1) return;
        setStep(s => s - 1);
        setSubQ(0);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Validation rules per step + subQ
    // Returns boolean: is current sub-question answered (so Continue button can enable)
    const isSubAnswered = () => {
        if (step === 1) {
            // step1 has 2 subquestions: whoFor (subQ 0) and anyConcerns (subQ 1)
            if (subQ === 0) return !!formData.whoFor;
            if (subQ === 1) return !!formData.anyConcerns;
        }

        if (step === 2) {
            // diagnosis question (single): hasDiagnosis
            return !!formData.hasDiagnosis;
        }

        if (step === 3) {
            // step3 subflow depends on diagnosis
            if (formData.hasDiagnosis === "no") {
                // Exploratory: we show common items first (subQ 0), then deeper items (subQ 1), then summary (subQ 2)
                if (subQ === 0) {
                    // no strict requirement to check commonList; allow 0 selected but we let user continue.
                    return true; // allow continue to go to next sub-question
                }
                if (subQ === 1) {
                    // allow continue to next sub-question
                    return true;
                }
                if (subQ === 2) {
                    // final subQ: require at least one selection in either exploratory or deeper to mark "noticed patterns".
                    return formData.exploratory.length > 0 || formData.deeper.length > 0;
                }
            } else {
                // Neurodivergent path: pastSupports list (subQ 0) then effectiveness (subQ 1)
                if (subQ === 0) {
                    // require at least one selection (or "None")
                    return formData.pastSupports.length > 0;
                }
                if (subQ === 1) {
                    // require effectiveness selection
                    // if the only selected support is "None", effectiveness is optional -> allow continue
                    if (formData.pastSupports.length === 1 && formData.pastSupports[0] === "None") return true;
                    return !!formData.effectiveness;
                }
            }
        }

        if (step === 4) {
            // summary step: nothing required to "Continue" (Submit button handles)
            return true;
        }

        return false;
    };

    // Move to next sub-question within same step or step+1 if subQ last
    const handleContinue = () => {
        // if current sub is not answered, prevent
        if (!isSubAnswered()) return;

        if (step === 1) {
            if (subQ < 1) {
                setSubQ(s => s + 1);
                return;
            } else {
                // finished step 1
                goNextStep();
                return;
            }
        }

        if (step === 2) {
            // Only one question in step 2 -> go to step 3
            goNextStep();
            return;
        }

        if (step === 3) {
            if (formData.hasDiagnosis === "no") {
                if (subQ < 2) {
                    setSubQ(s => s + 1);
                    return;
                } else {
                    // finished exploratory final subQ -> go to summary (step 4)
                    goNextStep();
                    return;
                }
            } else {
                // neurodivergent path has 2 subQs
                if (subQ < 1) {
                    setSubQ(s => s + 1);
                    return;
                } else {
                    goNextStep();
                    return;
                }
            }
        }

        if (step === 4) {
            // final - submit action - you can integrate API here
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        // Simple submit stub: replace with API call
        // Basic final validation: ensure required final things are present
        // For production, replace with fetch/axios and proper error handling
        console.log("Submitting formData:", formData);
        alert("Form submitted (check console).");
    };

    // Helper UI: question counter label
    const QuestionCounter = ({ current, total }) => (
        <div className="text-xs text-gray-500 mb-2">
            Question {current} / {total}
        </div>
    );

    // Header image path (uploaded file). Using exact path you uploaded.
    const headerImage = "/mnt/data/c31dafd0-2568-4835-ac33-3b84b036715b.png";

    // Accessibility: when a sub-question changes, focus the main heading
    useEffect(() => {
        const h = document.getElementById("main-question-heading");
        if (h) h.focus();
    }, [step, subQ]);

    return (
        <div className="w-full max-w-md mx-auto py-8 px-4">
            {/* header visual */}
            <div className="flex items-center gap-4 mb-6">
                <div>
                    <h1 className="text-xl font-semibold">Support Pathway</h1>
                    <p className="text-sm text-gray-500">Answer one question at a time — it's quick.</p>
                </div>
            </div>

            <ProgressBar step={step} />

            <div className="bg-transparent">
                {/* ---------------- STEP 1 ---------------- */}
                {step === 1 && (
                    <div>
                        <QuestionCounter current={subQ + 1} total={2} />

                        {subQ === 0 && (
                            <div>
                                <h2
                                    id="main-question-heading"
                                    tabIndex="-1"
                                    className="text-2xl font-semibold mb-4"
                                >
                                    Who is this for?
                                </h2>

                                <div className="space-y-3">
                                    <button
                                        onClick={() => updateField("whoFor", "myself")}
                                        className={`w-full text-left px-6 py-4 rounded-xl flex items-center gap-4 transition-shadow
                      ${formData.whoFor === "myself" ? "bg-blue-600 text-white shadow-md" : "bg-white border border-gray-200"}`}
                                        aria-pressed={formData.whoFor === "myself"}
                                    >
                                        <IconPerson className={formData.whoFor === "myself" ? "h-6 w-6 text-white" : "h-6 w-6 text-gray-600"} />
                                        <div>
                                            <div className="font-medium">Myself (adult or teen)</div>
                                            <div className="text-sm text-gray-500">Self-referral</div>
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => updateField("whoFor", "child")}
                                        className={`w-full text-left px-6 py-4 rounded-xl flex items-center gap-4 transition-shadow
                      ${formData.whoFor === "child" ? "bg-blue-600 text-white shadow-md" : "bg-white border border-gray-200"}`}
                                        aria-pressed={formData.whoFor === "child"}
                                    >
                                        <IconChild className={formData.whoFor === "child" ? "h-6 w-6 text-white" : "h-6 w-6 text-gray-600"} />
                                        <div>
                                            <div className="font-medium">My child (parent or caregiver)</div>
                                            <div className="text-sm text-gray-500">Parent or caregiver completing</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        )}

                        {subQ === 1 && (
                            <div>
                                <h2 id="main-question-heading" tabIndex="-1" className="text-2xl font-semibold mb-4">
                                    Do you have any concerns?
                                </h2>

                                <div className="space-y-3">
                                    <button
                                        onClick={() => updateField("anyConcerns", "yes")}
                                        className={`w-full text-left px-6 py-4 rounded-xl flex items-center gap-4 transition-shadow
                      ${formData.anyConcerns === "yes" ? "bg-blue-600 text-white shadow-md" : "bg-white border border-gray-200"}`}
                                    >
                                        <IconConcern className={formData.anyConcerns === "yes" ? "h-6 w-6 text-white" : "h-6 w-6 text-gray-600"} />
                                        <div>
                                            <div className="font-medium">Yes</div>
                                            <div className="text-sm text-gray-500">I have concerns I want to explore</div>
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => updateField("anyConcerns", "no")}
                                        className={`w-full text-left px-6 py-4 rounded-xl flex items-center gap-4 transition-shadow
                      ${formData.anyConcerns === "no" ? "bg-blue-600 text-white shadow-md" : "bg-white border border-gray-200"}`}
                                    >
                                        <IconConcern className={formData.anyConcerns === "no" ? "h-6 w-6 text-white" : "h-6 w-6 text-gray-600"} />
                                        <div>
                                            <div className="font-medium">No</div>
                                            <div className="text-sm text-gray-500">No major concerns right now</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* nav */}
                        <div className="flex items-center justify-between mt-6">
                            <button
                                onClick={goBackStep}
                                className="px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
                                disabled={step === 1}
                            >
                                Back
                            </button>

                            <button
                                onClick={handleContinue}
                                className={`px-6 py-3 rounded-lg text-white font-medium transition
                  ${isSubAnswered() ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-300 cursor-not-allowed"}`}
                                aria-disabled={!isSubAnswered()}
                            >
                                {subQ < 1 ? "Next" : "Continue"}
                            </button>
                        </div>
                    </div>
                )}

                {/* ---------------- STEP 2 ---------------- */}
                {step === 2 && (
                    <div>
                        <QuestionCounter current={1} total={1} />
                        <h2 id="main-question-heading" tabIndex="-1" className="text-2xl font-semibold mb-4">
                            Does the person have a formal diagnosis?
                        </h2>

                        <div className="space-y-3">
                            <button
                                onClick={() => updateField("hasDiagnosis", "yes")}
                                className={`w-full text-left px-6 py-4 rounded-xl flex items-center gap-4 transition-shadow
                  ${formData.hasDiagnosis === "yes" ? "bg-blue-600 text-white shadow-md" : "bg-white border border-gray-200"}`}
                            >
                                <div className="text-lg font-medium">Yes</div>
                                <div className="ml-auto text-sm text-gray-400">Go to past supports</div>
                            </button>

                            <button
                                onClick={() => updateField("hasDiagnosis", "no")}
                                className={`w-full text-left px-6 py-4 rounded-xl flex items-center gap-4 transition-shadow
                  ${formData.hasDiagnosis === "no" ? "bg-blue-600 text-white shadow-md" : "bg-white border border-gray-200"}`}
                            >
                                <div className="text-lg font-medium">No</div>
                                <div className="ml-auto text-sm text-gray-400">Use checklist</div>
                            </button>
                        </div>

                        <div className="flex items-center justify-between mt-6">
                            <button
                                onClick={goBackStep}
                                className="px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
                            >
                                Back
                            </button>

                            <button
                                onClick={handleContinue}
                                className={`px-6 py-3 rounded-lg text-white font-medium transition
                  ${isSubAnswered() ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-300 cursor-not-allowed"}`}
                                aria-disabled={!isSubAnswered()}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                )}

                {/* ---------------- STEP 3A Exploratory ---------------- */}
                {step === 3 && formData.hasDiagnosis === "no" && (
                    <div>
                        <QuestionCounter current={subQ + 1} total={3} />

                        {subQ === 0 && (
                            <>
                                <h2 id="main-question-heading" tabIndex="-1" className="text-2xl font-semibold mb-4">
                                    Common Daily Patterns
                                </h2>
                                <p className="text-sm text-gray-500 mb-4">Check items that occur regularly. It's normal to relate to some.</p>

                                <div className="space-y-2">
                                    {commonList.map(item => (
                                        <label key={item} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 mb-2 shadow-sm">
                                            <input
                                                type="checkbox"
                                                checked={formData.exploratory.includes(item)}
                                                onChange={() => toggleItem("exploratory", item)}
                                                className="h-5 w-5 mt-1 accent-blue-600"
                                                aria-label={item}
                                            />
                                            <div>
                                                <div className="font-medium">{item}</div>
                                                <div className="text-sm text-gray-500">Often linked to daily stress</div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </>
                        )}

                        {subQ === 1 && (
                            <>
                                <h2 id="main-question-heading" tabIndex="-1" className="text-2xl font-semibold mb-4">Patterns That May Suggest Deeper Needs</h2>
                                <p className="text-sm text-gray-500 mb-4">Check items that happen most days or significantly affect functioning.</p>

                                <div className="space-y-2">
                                    {deeperList.map(item => (
                                        <label key={item} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 mb-2 shadow-sm">
                                            <input
                                                type="checkbox"
                                                checked={formData.deeper.includes(item)}
                                                onChange={() => toggleItem("deeper", item)}
                                                className="h-5 w-5 mt-1 accent-blue-600"
                                                aria-label={item}
                                            />
                                            <div>
                                                <div className="font-medium">{item}</div>
                                                <div className="text-sm text-gray-500">May suggest evaluation or supports</div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </>
                        )}

                        {subQ === 2 && (
                            <>
                                <h2 id="main-question-heading" tabIndex="-1" className="text-2xl font-semibold mb-4">Summary of Patterns</h2>

                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-4">
                                    <div className="text-sm text-gray-600 mb-2">Common patterns selected: <span className="font-medium">{formData.exploratory.length}</span></div>
                                    <div className="text-sm text-gray-600 mb-2">Deeper patterns selected: <span className="font-medium">{formData.deeper.length}</span></div>
                                    <p className="text-sm text-gray-500 mt-2">If you selected several deeper patterns, consider scheduling a screening.</p>
                                </div>
                            </>
                        )}

                        {/* nav */}
                        <div className="flex items-center justify-between mt-6">
                            <button onClick={() => {
                                if (subQ > 0) setSubQ(s => s - 1);
                                else goBackStep();
                            }} className="px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100">Back</button>

                            <button
                                onClick={handleContinue}
                                className={`px-6 py-3 rounded-lg text-white font-medium transition
                  ${isSubAnswered() ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-300 cursor-not-allowed"}`}
                                aria-disabled={!isSubAnswered()}
                            >
                                {subQ < 2 ? "Next" : "Continue"}
                            </button>
                        </div>
                    </div>
                )}

                {/* ---------------- STEP 3B Neurodivergent ---------------- */}
                {step === 3 && formData.hasDiagnosis === "yes" && (
                    <div>
                        <QuestionCounter current={subQ + 1} total={2} />

                        {subQ === 0 && (
                            <>
                                <h2 id="main-question-heading" tabIndex="-1" className="text-2xl font-semibold mb-4">Past Supports (select all that apply)</h2>

                                <div className="space-y-2">
                                    {supports.map(item => (
                                        <label key={item} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 mb-2 shadow-sm">
                                            <input
                                                type="checkbox"
                                                checked={formData.pastSupports.includes(item)}
                                                onChange={() => {
                                                    // if user selects "None", clear others and set only None
                                                    if (item === "None") {
                                                        setFormData(prev => ({ ...prev, pastSupports: ["None"] }));
                                                    } else {
                                                        setFormData(prev => {
                                                            let arr = prev.pastSupports || [];
                                                            // if "None" exists remove it before toggling
                                                            arr = arr.filter(i => i !== "None");
                                                            if (arr.includes(item)) arr = arr.filter(i => i !== item);
                                                            else arr = [...arr, item];
                                                            return { ...prev, pastSupports: arr };
                                                        });
                                                    }
                                                }}
                                                className="h-5 w-5 mt-1 accent-blue-600"
                                                aria-label={item}
                                            />
                                            <div>
                                                <div className="font-medium">{item}</div>
                                                <div className="text-sm text-gray-500">{item === "None" ? "No supports used" : "Support type"}</div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </>
                        )}

                        {subQ === 1 && (
                            <>
                                <h2 id="main-question-heading" tabIndex="-1" className="text-2xl font-semibold mb-4">If any supports were used, how effective were they?</h2>

                                <div className="space-y-2">
                                    {effectivenessList.map(item => (
                                        <label key={item} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200 mb-2 shadow-sm">
                                            <input
                                                type="radio"
                                                name="effectiveness"
                                                checked={formData.effectiveness === item}
                                                onChange={() => updateField("effectiveness", item)}
                                                className="h-5 w-5 accent-blue-600"
                                                aria-label={item}
                                            />
                                            <div>
                                                <div className="font-medium">{item}</div>
                                                <div className="text-sm text-gray-500">{item === "Very effective" ? "Clear improvements" : "Effect level"}</div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </>
                        )}

                        {/* nav */}
                        <div className="flex items-center justify-between mt-6">
                            <button onClick={() => {
                                if (subQ > 0) setSubQ(s => s - 1);
                                else goBackStep();
                            }} className="px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100">Back</button>

                            <button
                                onClick={handleContinue}
                                className={`px-6 py-3 rounded-lg text-white font-medium transition
                  ${isSubAnswered() ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-300 cursor-not-allowed"}`}
                                aria-disabled={!isSubAnswered()}
                            >
                                {subQ < 1 ? "Next" : "Continue"}
                            </button>
                        </div>
                    </div>
                )}

                {/* ---------------- STEP 4 Summary ---------------- */}
                {step === 4 && (
                    <Booking
                        formData={formData}
                        onBack={goBackStep}
                        onSubmit={async (bookingDetails) => {
                            try {
                                
                                const payload = {
                                    ...formData,
                                    ...bookingDetails
                                };

                                console.log("Sending payload:", payload);

                                const response = await fetch(
                                    "http://localhost/kiddicove-website/kiddicove-backend/booking_details.php",
                                    {
                                        method: "POST",
                                        headers: { 
                                            "Content-Type": "application/json",
                                            "Accept": "application/json"
                                        },
                                        body: JSON.stringify(payload)
                                    }
                                );

                                console.log('API Response status:', response);

                                if (!response.ok) {
                                    const errorText = await response.text();
                                    console.error('Server error:', errorText);
                                    throw new Error(`HTTP error! status: ${response.status}`);
                                }

                                const result = await response.json().catch(error => {
                                    console.error('Error parsing JSON:', error);
                                    throw new Error('Invalid JSON response from server');
                                });

                                console.log('API Response:', result);

                                if (result.status === "success") {
                                    alert("Booking submitted successfully!");
                                    // Reset form or navigate away
                                } else {
                                    throw new Error(result.message || "Unknown error occurred");
                                }
                            } catch (error) {
                                console.error('Error submitting booking:', error);
                                alert(`Error: ${error.message}`);
                            }
                        }}
                    />
                )}


            </div>
        </div>
    );
}
