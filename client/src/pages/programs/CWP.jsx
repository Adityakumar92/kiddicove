import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import { BookOpen, Globe, Users, Star, Zap, Check, Home, MinusCircle, CheckCircle, RefreshCw, User, BarChart2, Settings, Clock, Sparkles, Quote, ChevronDown } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
// import { ContactModal } from "@/components/ContactModal";
import vaishaliImg from "@/assets/Vaishali.png";
import kapilImg from "@/assets/Kapil.png";
import vanditaImg from "@/assets/vandita.png";
import WhatsappIcon from "../../components/WhatsappIcon";
import ConsultUs from "../../components/ConsultUs";
import Modal from "../../components/Modal";
import { trackCenterPageView, trackPhoneClick, trackWhatsAppClick, trackSessionBooking } from "@/utils/trackConversion";


const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("MAP");

  useEffect(() => {
    trackCenterPageView('CWP program');
  }, []);

  // Mock data for the program cards
  const programs = [
    {
      icon: <BookOpen size={24} />,
      title: 'Academic Excellence',
      description: 'Our curriculum is designed to challenge and inspire students to reach their full potential.',
    },
    {
      icon: <Globe size={24} />,
      title: 'Global Citizenship',
      description: 'We foster a global perspective, preparing students to be active and compassionate members of the world.',
    },
    {
      icon: <Users size={24} />,
      title: 'Community Engagement',
      description: 'Students participate in service projects and build connections within their local and global communities.',
    },
  ];

  // Mock data for testimonials
  const testimonials = [
    {
      quote: "The CWP Home Program has been an incredible journey for our family. The support and resources are exceptional.",
      author: "Jane Doe, Parent",
      image: "https://placehold.co/100x100/A0B2C0/fff?text=J",
    },
    {
      quote: "I never thought learning from home could be so engaging. The teachers are fantastic and the materials are top-notch.",
      author: "Alex Smith, Student",
      image: "https://placehold.co/100x100/C0B2A0/fff?text=A",
    },
  ];

  // Data for the "The Challenge Parents Face" section cards
  const challengeCards = [
    {
      title: 'Missed Sessions',
      description: 'Every missed clinic appointment means slower progress and lost momentum in your child’s development journey.',
    },
    {
      title: 'Clinic Dependence',
      description: 'Relying solely on clinic visits creates anxiety when sessions can’t happen and limits therapeutic opportunities.',
    },
    {
      title: 'Deficit-Only Focus',
      description: 'Traditional approaches often focus on deficits, leaving strengths and other developmental domains underdeveloped.',
    },
    {
      title: 'Outdated Regimes',
      description: 'Many programs lack proper measurement and tracking, making it hard to see real progress and adjust approaches.',
    },
    {
      title: 'Inconsistent Routines',
      description: 'Lack of daily therapeutic activities breaks the momentum that’s so crucial for meaningful development.',
    },
    {
      title: 'Parent Uncertainty',
      description: 'Without proper guidance, parents feel uncertain about how to support their child’s growth at home.',
    },
  ];

  // Data for the "What is CWP?" section cards
  const cwpCards = [
    {
      icon: <Zap size={20} />,
      title: 'Top-Up Therapy',
      description: 'Enhance existing therapy sessions with daily reinforcement at home for accelerated progress and better outcomes.',
    },
    {
      icon: <Check size={20} />,
      title: 'Fill Gaps',
      description: 'Maintain therapeutic momentum when clinic sessions are missed or unavailable, ensuring continuous development.',
    },
    {
      icon: <Home size={20} />,
      title: 'Stand Alone',
      description: 'Complete home-based therapy solution when clinic access is limited, providing comprehensive developmental support.',
    },
  ];

  // Data for the "Real-Life Outcomes" section
  const outcomeData = {
    forChildren: [
      {
        title: 'Faster Results',
        description: 'Through multiple mini-sessions throughout the day, children see accelerated progress.',
      },
      {
        title: 'Improved Focus & Regulation',
        description: 'Better emotional regulation and sustained attention in daily activities.',
      },
      // {
      //   title: 'Greater Independence',
      //   description: 'Enhanced daily life skills and increased confidence in self-care activities.',
      // },
      {
        title: 'Balanced Development',
        description: 'Growth across all developmental domains, not just deficit areas.',
      },
      {
        title: 'Better Social Interactions',
        description: 'Improved communication and stronger connections with family and peers.',
      },
      // {
      //   title: 'Fewer Meltdowns',
      //   description: 'Reduced behavioral challenges through consistent therapeutic support.',
      // },
    ],
    forParents: [
      {
        title: 'Peace of Mind',
        description: 'Confidence knowing that therapy never stops, even when clinic sessions are missed.',
      },
      {
        title: 'Anytime Confidence',
        description: 'Skills and tools to provide therapeutic support whenever and wherever needed.',
      },
      // {
      //   title: 'Reduced Stress',
      //   description: 'Less anxiety about lost progress when regular clinic visits aren’t possible.',
      // },
      {
        title: 'Clear Progress Tracking',
        description: 'Measurable checkpoints and visible evidence of your child’s development.',
      },
      {
        title: 'Whole-Child Approach',
        description: 'Focus on building strengths and supporting comprehensive development.',
      },
    ],
  };

  // Data for the "Why Choose CWP?" section
  const whyChooseCWP = [
    {
      icon: <RefreshCw size={24} />,
      title: 'Unlimited Top-Ups',
      description: 'Reinforce clinic therapy with unlimited daily sessions at home for accelerated progress.',
    },
    {
      icon: <User size={24} />,
      title: 'Parent Empowerment',
      description: 'Comprehensive training and ongoing support to help parents become confident therapeutic partners.',
    },
    {
      icon: <BarChart2 size={24} />,
      title: 'Balanced Development',
      description: 'Focus on growth across all developmental domains, building strengths alongside addressing challenges.',
    },
    {
      icon: <Settings size={24} />,
      title: 'Technology-Enabled',
      description: 'Expert-guided, tech-enabled personalization ensures therapy plans stay current with best practices.',
    },
    {
      icon: <Clock size={24} />,
      title: 'Continuous Tracking',
      description: 'Real-time progress monitoring through comprehensive dashboards and measurable checkpoints.',
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Multidisciplinary Expertise',
      description: 'Comprehensive team of specialists guiding every aspect of your child\'s developmental journey.',
    },
  ];

  // Data for the "How It Works" section
  const howItWorks = [
    {
      step: 1,
      title: 'Assessment',
      description: 'Comprehensive evaluation of your child’s current developmental status and specific needs.',
    },
    {
      step: 2,
      title: 'Custom Plan',
      description: 'Personalized therapy plan designed by specialists for your child’s unique requirements.',
    },
    {
      step: 3,
      title: 'Parent Training',
      description: 'Comprehensive training to empower parents with skills and confidence for home therapy.',
    },
    {
      step: 4,
      title: 'Daily Sessions',
      description: 'Guided mini-sessions integrated into daily routines for consistent therapeutic support.',
    },
    {
      step: 5,
      title: 'Regular Checkpoints',
      description: 'Ongoing plan updates with therapist and tech insights to ensure continued progress.',
    },
  ];

  // Data for the "Long-Term Multidisciplinary Plan" section
  const longTermPlan = [
    {
      months: '3 Months',
      title: 'Short-Term Goals',
      description: 'Initial skill development, routine establishment, and early measurable improvements in focus and daily activities.',
    },
    {
      months: '6 Months',
      title: 'Medium-Term Checkpoints',
      description: 'Skill consolidation, expanded independence, and integration of therapeutic gains into diverse environments.',
    },
    {
      months: '12+ Months',
      title: 'Long-Term Independence',
      description: 'Sustained independence milestones, comprehensive skill mastery, and parent-evident effectiveness across all domains.',
    },
  ];

  // Data for the "Technology That Makes the Difference" section cards
  const techCards = [
    {
      icon: <RefreshCw size={24} />,
      title: 'Current Best Practices',
      description: 'Plans stay updated with the latest therapeutic approaches and evidence-based interventions.',
    },
    {
      icon: <BarChart2 size={24} />,
      title: 'Progress Dashboards',
      description: 'Real-time tracking and visualization of your child’s development across all domains.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Adaptive Plans',
      description: 'Regular adjustments based on progress data ensure optimal therapeutic outcomes.',
    },
  ];

  // Data for the "Parent Stories" section
  const parentStories = [
    {
      quote: "Focus improved within weeks because we could reinforce therapy daily at home. The structured mini-sessions made such a difference in my child's attention span.",
      author: "Ritu",
      role: "Parent",
    },
    {
      quote: "No anxiety when clinic sessions are missed—steady progress with the home plan. Having a structured approach at home gave us so much peace of mind.",
      author: "Anil",
      role: "Parent",
    },
  ];

  // Data for the "Frequently Asked Questions" section
  const faqItems = [
    {
      question: 'Do I need medical training to participate?',
      answer: 'No medical training is required. Our comprehensive parent training program equips you with all the skills and confidence needed to support your child’s development at home. We provide step-by-step guidance and ongoing support throughout your journey.',
    },
    {
      question: 'Does CWP replace therapists?',
      answer: 'CWP does not replace therapists but complements them. Our program works alongside your existing therapy team to reinforce and extend therapeutic benefits into your daily life. We enhance clinic-based therapy with consistent home support.',
    },
    {
      question: 'How much time is required daily?',
      answer: 'The program requires 20-40 minutes daily, seamlessly built into your existing routines. Our mini-sessions are designed to integrate naturally with daily activities like meals, play time, and bedtime, making therapy a natural part of your day.',
    },
    {
      question: 'Can CWP help with Virtual Autism from screen time?',
      answer: 'Yes, CWP supports recovery from Virtual Autism caused by excess screen time by bringing back speech, attention, and social engagement through structured therapeutic activities. Our approach helps restore natural developmental patterns and reduces screen dependency.',
    },
  ];

  const handleFaqToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
      {/* Header/Navbar */}
      <Header />

      {/* Hero Section - Updated */}
      <section className="bg-gradient-to-b from-blue-50 to-white  py-16 md:py-24 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Pill tags */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            <span className="px-4 py-2 text-sm md:text-base font-medium text-teal-800 bg-teal-100 rounded-full">Therapist-guided</span>
            <span className="px-4 py-2 text-sm md:text-base font-medium text-teal-800 bg-teal-100 rounded-full">Parent-led</span>
            <span className="px-4 py-2 text-sm md:text-base font-medium text-teal-800 bg-teal-100 rounded-full">Progress tracking</span>
            <span className="px-4 py-2 text-sm md:text-base font-medium text-teal-800 bg-teal-100 rounded-full">Whole-child focus</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Bring Therapy Home
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-700 font-semibold max-w-3xl mx-auto">
            Empower Your Child Every Day—Anytime, Anywhere
          </p>
          <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto">
            The Continuous Wellbeing Program (CWP) is a therapist-guided, parent-led home therapy solution for Autism, ADHD, Virtual Autism, and other neurodevelopmental challenges that turns everyday moments into therapeutic opportunities.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 transition flex items-center justify-center"
              onClick={() => { setIsConsultOpen(true); setSelectedProgram("CWP"); }}
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* The Challenge Parents Face Section */}
      <section className="py-16 md:py-24 text-center bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            The Challenge Parents Face
          </h2>

          {/* Cards grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challengeCards.map((card, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is CWP? Section */}
      <section className="py-16 md:py-24 text-center bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            What is CWP?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
            CWP is a therapist-guided, parent-led program that helps Top-Up Therapy for faster results, Fill Gaps when sessions are missed, and Stand Alone when clinics aren’t accessible, empowering parents as partners in growth.
          </p>

          {/* Cards grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {cwpCards.map((card, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-Life Outcomes Section */}
      <section className="py-16 md:py-24 text-center bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Real-Life Outcomes
          </h2>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            {/* For Children */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left">For Children</h3>
              <div className="space-y-6">
                {outcomeData.forChildren.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="flex-shrink-0 mt-1 text-green-500" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Parents */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left">For Parents</h3>
              <div className="space-y-6">
                {outcomeData.forParents.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    {/* Using CheckCircle for consistency with the design provided */}
                    <CheckCircle className="flex-shrink-0 mt-1 text-green-500" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CWP? Section */}
      <section className="py-16 md:py-24 text-center bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Why Choose CWP?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
            Our program empowers parents and provides comprehensive support for every stage of a child’s developmental journey.
          </p>

          {/* Cards grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseCWP.map((card, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                {/* Reduced size from w-20 h-20 to w-12 h-12 */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white">
                  {card.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-gray-600 flex-grow">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 text-center bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            How It Works
          </h2>
          <div className="mt-12 flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-12 lg:space-y-0">
            {howItWorks.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center lg:w-1/5">
                {/* Reduced size from w-16 h-16 to w-12 h-12 */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-Term Multidisciplinary Plan Section */}
      <section className="py-16 md:py-24 text-center bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-8">
            Long-Term Multidisciplinary Plan
          </h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 h-full top-0"></div>
            {longTermPlan.map((milestone, index) => (
              <div key={index} className={`relative flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} items-center lg:items-start w-full my-12`}>
                {/* Milestone Card */}
                <div className={`p-8 rounded-2xl shadow-lg border border-gray-200 lg:w-5/12 text-left bg-gray-50 lg:bg-white relative`}>
                  <p className="text-lg font-bold text-blue-500 mb-1">{milestone.months}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                  {/* Connectors for mobile */}
                  <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 w-px h-12 bg-gray-300 -bottom-12"></div>
                </div>
                {/* Timeline Circle */}
                <div className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white z-10 mx-6"></div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-gray-600 max-w-4xl mx-auto">
            Every milestone is designed to be parent-evident with clear, measurable progress indicators
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg h-[393px]">
              <h3 className="text-xl font-bold text-black mb-4 flex justify-between items-center">
                Personalized Therapy Plan
                <span className="text-sm text-white bg-green-500 px-2 py-1 rounded-full">Active</span>
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-800">Speech Therapy</p>
                    <p className="text-gray-500">3x/week</p>
                  </div>
                  <div className="text-right">
                    <p className="text-blue-600 font-bold">78%</p>
                    <p className="text-gray-500">Progress</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-800">Occupational Therapy</p>
                    <p className="text-gray-500">2x/week</p>
                  </div>
                  <div className="text-right">
                    <p className="text-blue-600 font-bold">85%</p>
                    <p className="text-gray-500">Progress</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-800">Behavioral Support</p>
                    <p className="text-gray-500">Daily</p>
                  </div>
                  <div className="text-right">
                    <p className="text-blue-600 font-bold">72%</p>
                    <p className="text-gray-500">Progress</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start lg:items-end">
              <h2 className="text-4xl font-bold text-black mb-4">Smarter, Multidisciplinary Therapy Plans</h2>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive, age-appropriate, research-backed interventions delivered through our EHR-based care platform, across speech, occupational, behavioral, and physical therapies.
              </p>
              <div className="space-y-6 w-full">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" x2="8" y1="13" y2="13" />
                      <line x1="16" x2="8" y1="17" y2="17" />
                      <line x1="10" x2="8" y1="9" y2="9" />
                    </svg>
                  </div>
                  <div className="text-gray-600">
                    <p className="font-semibold text-black">Maintained and updated by expert clinicians</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a10 10 0 0 1 7.07 2.93l-2.83 2.83A6 6 0 0 0 12 6V2z" />
                      <path d="M22 12a10 10 0 0 1-2.93 7.07l-2.83-2.83A6 6 0 0 0 18 12h4z" />
                    </svg>
                  </div>
                  <div className="text-gray-600">
                    <p className="font-semibold text-black">Personalized protocols with measurable goals</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="text-gray-600">
                    <p className="font-semibold text-black">Care team and caregiver collaboration tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology That Makes the Difference Section */}
      <section className="py-16 md:py-24 text-center bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Technology That Makes the Difference
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
            Therapy plans are always updated with best practices, measured via dashboards, and adjusted regularly based on progress. Our expert-led, tech-enabled approach ensures responsible, personalized care that grows with your child.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {techCards.map((card, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                {/* Updated icon container with red background and white icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white">
                  {React.cloneElement(card.icon, { className: 'w-8 h-8' })}
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-gray-600 flex-grow">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Stories Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Real Stories, Real Success
            </h2>
            <p className="text-xl text-gray-600">
              Real stories of growth, confidence, and success through Deep
              Connection's expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vaishali Testimonial */}
            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={vaishaliImg}
                    alt="Vaishali"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-black">Vaishali</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "My son finally opened up — it's been life-changing"
                </p>
              </CardContent>
            </Card>

            {/* Kapil Bisht Testimonial */}
            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={kapilImg}
                    alt="Kapil Bisht"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-black">Kapil Bisht</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Tailored support that truly understood my daughter."
                </p>
              </CardContent>
            </Card>

            {/* Vandita Kaul Testimonial */}
            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={vanditaImg}
                    alt="Vandita Kaul"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-black">Vandita Kaul</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Deep Connection helped me truly see my child."
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12"></div>
        </div>
      </section>

      {/* <section className="py-16 md:py-24 text-center bg-gray-50">
  <div className="container mx-auto px-6 max-w-6xl">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
      Parent Stories
    </h2>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-left relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="absolute top-4 left-4 text-blue-500 opacity-20 w-14 h-14">
          <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H320c-35.3 0-64-28.7-64-64V216z"/>
        </svg>
        <p className="text-lg text-gray-700 mt-6 mb-4">"Focus improved within weeks because we could reinforce therapy daily at home. The structured mini-sessions made such a difference in my child’s attention span."</p>
        <div className="flex items-center space-x-4 mt-6">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 font-extrabold text-xl">
            R
          </div>
          <div>
            <p className="font-semibold text-gray-900">Ritu</p>
            <p className="text-sm text-gray-600">Parent</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-left relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="absolute top-4 left-4 text-blue-500 opacity-20 w-14 h-14">
          <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H320c-35.3 0-64-28.7-64-64V216z"/>
        </svg>
        <p className="text-lg text-gray-700 mt-6 mb-4">"No anxiety when clinic sessions are missed—steady progress with the home plan. Having a structured approach at home gave us so much peace of mind."</p>
        <div className="flex items-center space-x-4 mt-6">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 font-extrabold text-xl">
            A
          </div>
          <div>
            <p className="font-semibold text-gray-900">Anil</p>
            <p className="text-sm text-gray-600">Parent</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

      {/* Frequently Asked Questions Section */}
      <section className="py-16 md:py-24 text-center bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="mt-12 space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => handleFaqToggle(index)}
                  className="flex justify-between items-center w-full text-left p-6 text-lg font-semibold text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : 'rotate-0'}`}
                    size={24}
                  />
                </button>
                {openFaq === index && (
                  <div className="p-6 text-gray-600 text-left border-t border-gray-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhatsappIcon />

      <Modal isOpen={isConsultOpen} onClose={() => setIsConsultOpen(false)}>
        <ConsultUs onClose={() => setIsConsultOpen(false)}
          ourProgram={selectedProgram} />
      </Modal>
      <Footer />
    </div>
  );
};

export default App;