import React, { useState } from 'react';
import {
    Users,
    GraduationCap,
    Clock,
    CheckCircle,
    Award,
    Briefcase,
    BookOpen,
    Video,
    Clipboard,
    ArrowRight,
    ShieldCheck,
    Star,
    Layers,
    HelpCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnrollForm from "../components/EnrollForm";
import Modal from "../components/Modal";


const Internship = () => {
    const [activeTab, setActiveTab] = useState('120');
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);


    const durations = {
        '60': {
            sessions: '4 hours',
            mocksessions: '30 hours',
            doubts: '6 hours',
            fieldwork: '20 hours',
            cases: 'N/A'
        },
        '120': {
            sessions: '8 hours',
            mocksessions: '50 hours',
            doubts: '12 hours',
            fieldwork: '40 hours',
            cases: '10 hours'
        },
        '180': {
            sessions: '12 hours',
            mocksessions: '70 hours',
            doubts: '18 hours',
            fieldwork: '60 hours',
            cases: '20 hours'
        },
        '240': {
            sessions: '16 hours',
            mocksessions: '90 hours',
            doubts: '24 hours',
            fieldwork: '80 hours',
            cases: '30 hours'
        }
    };


    return (
        <>
            <Header />
            <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100">

                {/* Hero Section */}
                {/* 1. Reduced pb-24 to pb-16 to pull the button up */}
                <section className="relative overflow-hidden pt-12 pb-16 lg:pt-24 lg:pb-32 bg-white">

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
                        <div className="absolute top-[-10%] right-[-10%] w-72 h-72 md:w-96 md:h-96 bg-blue-200 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                            NEP-Aligned Training Programs
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 leading-tight tracking-tight">
                            Supervision & Skill-Focused <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                                Internship Programs
                            </span>
                        </h1>

                        {/* Subtext */}
                        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Bridge the gap between academic learning and real-world psychological practice.
                            Learn, Observe, Practice, and Grow with expert supervision.
                        </p>

                        {/* Statistics Grid - Reduced mb-16 to mb-10 */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl mx-auto mb-10">
                            <div className="p-4 border-r border-slate-100 last:border-0 md:last:border-r-0">
                                <div className="text-3xl md:text-4xl font-bold text-slate-800">4+</div>
                                <div className="text-sm font-medium text-slate-500 mt-1">Specialized Tracks</div>
                            </div>
                            <div className="p-4 md:border-r border-slate-100">
                                <div className="text-3xl md:text-4xl font-bold text-slate-800">100+</div>
                                <div className="text-sm font-medium text-slate-500 mt-1">Learners Trained</div>
                            </div>
                            <div className="p-4 border-r border-slate-100 md:last:border-0">
                                <div className="text-3xl md:text-4xl font-bold text-slate-800">93%+</div>
                                <div className="text-sm font-medium text-slate-500 mt-1">Satisfaction Rate</div>
                            </div>
                            <div className="p-4">
                                <div className="text-3xl md:text-4xl font-bold text-slate-800">25</div>
                                <div className="text-sm font-medium text-slate-500 mt-1">Seats Per Batch</div>
                            </div>
                        </div>

                        {/* Primary Action Button */}
                        <button
                            onClick={() => {
                                const target = document.getElementById('programs');
                                if (target) {
                                    target.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="px-10 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200/50 transition-all active:scale-95 cursor-pointer"
                        >
                            Explore Programs
                        </button>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section id="why" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Our Program?</h2>
                            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Users className="w-6 h-6 text-blue-600" />,
                                    title: "Expert Supervision",
                                    desc: "Structured guidance by experienced mental health professionals throughout your journey."
                                },
                                {
                                    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
                                    title: "Clinical Standards",
                                    desc: "Practical exposure meticulously aligned with current academic and clinical standards."
                                },
                                {
                                    icon: <Layers className="w-6 h-6 text-blue-600" />,
                                    title: "Case-Based Learning",
                                    desc: "From complete session planning, execution, assessment report,observations to post session management."
                                },
                                {
                                    icon: <Award className="w-6 h-6 text-blue-600" />,
                                    title: "Certification",
                                    desc: "Valuable certificates and LORs supporting your academic and professional growth."
                                },
                                {
                                    icon: <Video className="w-6 h-6 text-blue-600" />,
                                    title: "Live Interactions",
                                    desc: "Daily interactive sessions with industry experts for deep concept clarification."
                                },
                                {
                                    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
                                    title: "Career Growth",
                                    desc: "Opportunity to join our team in the future as a full-time employee."
                                }
                            ].map((feature, idx) => (
                                <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6  group-hover:text-white transition-colors">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Program Durations / Pricing Style */}
                <section id="programs" className="py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Available Durations</h2>
                            <p className="text-slate-600">Choose the depth of exposure that suits your current goals</p>
                        </div>

                        <div className="flex flex-col items-center">
                            {/* Tab Selector */}
                            {/* <div className="flex p-1 bg-slate-200 rounded-xl mb-12">
                                {['60', '120', '180', '240'].map(d => (
                                    <button
                                        key={d}
                                        onClick={() => setActiveTab(d)}
                                        className={`px-8 py-3 rounded-lg font-bold transition-all ${activeTab === d ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                                    >
                                        {d} Hours
                                    </button>
                                ))}
                            </div> */}

                            <div className="bg-slate-200 p-1 rounded-xl mb-12">
                                <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2">
                                    {['60', '120', '180', '240'].map((d) => (
                                        <button
                                            key={d}
                                            onClick={() => setActiveTab(d)}
                                            className={`
          flex-1 px-4 py-3 rounded-lg font-bold transition-all text-center
          ${activeTab === d
                                                    ? 'bg-white text-blue-600 shadow-sm'
                                                    : 'text-slate-600 hover:text-slate-900'}
        `}
                                        >
                                            {d} Hours
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                                <div className="grid md:grid-cols-2">
                                    <div className="p-8 md:p-12 bg-blue-600 text-white">
                                        <h3 className="text-2xl font-bold mb-6">Program Highlights</h3>
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="mt-1 bg-blue-500/50 p-1.5 rounded-lg"><Clock className="w-5 h-5" /></div>
                                                <div>
                                                    <p className="font-semibold">{durations[activeTab].sessions}</p>
                                                    <p className="text-sm text-blue-100 italic">Live Interactive Sessions</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="mt-1 bg-blue-500/50 p-1.5 rounded-lg"><CheckCircle className="w-5 h-5" /></div>
                                                <div>
                                                    <p className="font-semibold">{durations[activeTab].mocksessions}</p>
                                                    <p className="text-sm text-blue-100 italic">mock sessions</p>
                                                </div>
                                            </div>
                                            {durations[activeTab].cases !== 'N/A' && (
                                                <div className="flex items-start gap-4">
                                                    <div className="mt-1 bg-blue-500/50 p-1.5 rounded-lg"><BookOpen className="w-5 h-5" /></div>
                                                    <div>
                                                        <p className="font-semibold">{durations[activeTab].cases}</p>
                                                        <p className="text-sm text-blue-100 italic">Case Study Training</p>
                                                    </div>
                                                </div>
                                            )}
                                            <div className="flex items-start gap-4">
                                                <div className="mt-1 bg-blue-500/50 p-1.5 rounded-lg">< HelpCircle className="w-5 h-5" /></div>
                                                <div>
                                                    <p className="font-semibold">{durations[activeTab].doubts}</p>
                                                    <p className="text-sm text-blue-100 italic">Doubts and Quiz</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="mt-1 bg-blue-500/50 p-1.5 rounded-lg"><Users className="w-5 h-5" /></div>
                                                <div>
                                                    <p className="font-semibold">{durations[activeTab].fieldwork}</p>
                                                    <p className="text-sm text-blue-100 italic">Reading Material and Self Paced Learning</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-8 md:p-12">
                                        <h4 className="font-bold text-slate-800 mb-6 uppercase tracking-wider text-sm">What's Included</h4>
                                        <ul className="space-y-4 mb-10">
                                            {[
                                                "Completion Certificate",
                                                "Letter of Recommendation",
                                                "Mock Therapy Sessions",
                                                "Assessment Training",
                                                "Report Writing Practice",
                                                "Doubt Clearing Sessions"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-slate-600">
                                                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        {/* <button
                                            onClick={() => setIsEnrollOpen(true)}
                                            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors">
                                            Enroll for {activeTab} Hours
                                        </button> */}
                                      <div className="w-full flex flex-col items-center gap-2">
  <a
    href="https://rzp.io/rzp/PWmbtZDH"
    className="
      w-full max-w-sm
      text-center
      py-4
      rounded-2xl
      bg-gradient-to-r from-blue-600 to-blue-500
      text-white
      font-bold
      text-lg
      shadow-lg
      hover:shadow-xl
      hover:scale-[1.02]
      active:scale-95
      transition-all
      duration-300
    "
  >
    Enroll for {activeTab} Hours
  </a>

  <p className="text-sm text-slate-500">
    Limited to <span className="font-semibold">25 interns</span> per batch
  </p>
</div>
</div>

                                       
                         </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Curriculum / Learning Components */}
                <section id="curriculum" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Core Academic & Practical Training</h2>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Our curriculum is designed to provide a 360-degree view of the psychological landscape,
                                    blending theoretical concepts with intensive practical application.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Psychological Assessments",
                                        "Report Writing Mastery",
                                        "Session Planning",
                                        "Case Study Analysis",
                                        "Role-Play Demonstrations",
                                        "Activity Planning",
                                        "CDC (Child Development Center) ",
                                        "School Visits"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                            <span className="font-medium text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-3xl blur-2xl opacity-50"></div>
                                <div className="relative bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                                            <Clipboard className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold">Training Roadmap</h3>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="flex gap-4">
                                            <div className="flex flex-col items-center">
                                                <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold">1</div>
                                                <div className="w-0.5 h-full bg-slate-100"></div>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-800">Learn</h4>
                                                <p className="text-sm text-slate-500">Live concept-based teaching and interactives.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex flex-col items-center">
                                                <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold">2</div>
                                                <div className="w-0.5 h-full bg-slate-100"></div>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-800">Observe</h4>
                                                <p className="text-sm text-slate-500">Watch real-life clinical examples and demos.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex flex-col items-center">
                                                <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold">3</div>
                                                <div className="w-0.5 h-full bg-slate-100"></div>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-800">Practice</h4>
                                                <p className="text-sm text-slate-500">Mock sessions and role-plays with feedback.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex flex-col items-center">
                                                <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold">4</div>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-800">Grow</h4>
                                                <p className="text-sm text-slate-500">Get certified and ready for professional practice.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Eligibility */}
                <section className="py-24 bg-slate-900 text-white overflow-hidden">
                    <div className="max-w-4xl mx-auto px-4 text-center">

                        <h2 className="text-3xl font-bold mb-10 italic">
                            Who Can Apply?
                        </h2>

                        <div className="space-y-4 flex flex-col items-center">

                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 w-full max-w-md">
                                <CheckCircle className="text-blue-400 shrink-0" />
                                <span className="text-left">
                                    Bachelor’s & Master’s students (any year)
                                </span>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 w-full max-w-md">
                                <CheckCircle className="text-blue-400 shrink-0" />
                                <span className="text-left">
                                    Psychology & allied field students
                                </span>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 w-full max-w-md">
                                <CheckCircle className="text-blue-400 shrink-0" />
                                <span className="text-left">
                                    Freshers seeking practical clinical exposure
                                </span>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
            <Modal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)}>
                <EnrollForm onClose={() => setIsEnrollOpen(false)}
                    selectedDuration={activeTab} />
            </Modal>

            <Footer />
        </>
    );
};

export default Internship;