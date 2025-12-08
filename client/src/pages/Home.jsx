/* Full updated code with enlarged icon sizes + animations */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import girl from "@/assets/child.png";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";

import {
    Brain,
    MessageCircle,
    Hand,
    GraduationCap,
    Heart,
    Sprout,
    UserCheck,
    Puzzle,
    Users,
    Star,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import ConsultUs from "../components/ConsultUs";
import Modal from "../components/Modal";
import { useState } from "react";
import WhatsappIcon from "@/components/WhatsappIcon";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { trackCenterPageView, trackPhoneClick, trackWhatsAppClick, trackSessionBooking } from "@/utils/trackConversion";



export default function Home() {
    // Set page-specific metadata
    <Helmet>
        <title>KiddiCove-home page</title>
        <meta name="description" content="KiddiCove - Premium childcare and early education centers" />
        <meta name="keywords" content="childcare, daycare, preschool, early education, kids" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KiddiCove" />
        <meta name="twitter:card" content="summary_large_image" />
    </Helmet>

    useEffect(() => {
        trackCenterPageView('Home');
    }, []);

    // const navigate = useNavigate();
    const [isConsultOpen, setIsConsultOpen] = useState(false);

    // WhatsApp links
    const whatsbfs =
        "https://api.whatsapp.com/send?phone=919650450094&text=Consult%20Us%20FREE%20Now";

    const whatssycj =
        "https://api.whatsapp.com/send?phone=919650450094&text=Start%20your's%20Child%20Journey";

    // Services
    const services = [
        {
            icon: Brain,
            title: "Behavioral Therapy (ABA)",
            description:
                "Behavioural interventions and therapy for children when they develop unhealthy habits. Motivate and reinforce for better future.",
            bgColor: "bg-kiddi-blue",
        },
        {
            icon: MessageCircle,
            title: "Speech Therapy",
            description:
                "Treat speech delays, improve voice, language and communication skills.",
            bgColor: "bg-[#DA2643]",
        },
        {
            icon: Hand,
            title: "Occupational Therapy",
            description: "Improve motor skills and daily living abilities.",
            bgColor: "bg-kiddi-blue",
        },
        {
            icon: GraduationCap,
            title: "Special Education",
            description:
                "Remedial education, bridge programs, and special learning support for autistic, ADHD & LD children.",
            bgColor: "bg-[#DA2643]",
        },
        {
            icon: Heart,
            title: "Counselling for Kids and Teenagers",
            description:
                "Emotional wellness, confidence, stress relief & better relationships for children and teens.",
            bgColor: "bg-kiddi-blue",
        },
        {
            icon: Sprout,
            title: "Early Intervention Therapy",
            description:
                "Developmental programs for infants and toddlers to address delays early.",
            bgColor: "bg-[#DA2643]",
        },
    ];

    // Features
    const features = [
        {
            icon: UserCheck,
            title: "Expert Team",
            description:
                "Highly qualified therapists and specialists. Best child experts in your city.",
            bgColor: "bg-kiddi-blue",
        },
        {
            icon: Puzzle,
            title: "Holistic Approach",
            description: "Integrating therapy with education and family support.",
            bgColor: "bg-[#DA2643]",
        },
        {
            icon: Users,
            title: "Personalized Care",
            description: "Tailored programs for each child’s specific needs.",
            bgColor: "bg-kiddi-blue",
        },
        {
            icon: Users,
            title: "Community Engagement",
            description:
                "Active involvement in communities to promote awareness and child development.",
            bgColor: "bg-[#DA2643]",
        },
    ];

    // function handleChildJurney() {
    //     navigate("/child-jurney");
    // }

    return (
        <>
            <Header />

            {/* HERO SECTION */}
            <section
                className="relative overflow-hidden bg-gradient-to-br from-orange-200 via-pink-100 to-blue-100"
                style={{ minHeight: "96vh" }}
            >
                {/* Soft Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] pointer-events-none" />

                {/* Floating Gradient Blobs */}
                <div className="absolute -top-20 -left-28 w-72 h-72 bg-blue-300/40 rounded-full blur-[100px] animate-pulseSlow" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300/40 rounded-full blur-[130px] animate-pulseSlow delay-300" />

                {/* White floating balls */}
                <div className="absolute top-24 left-[18%] w-10 h-10 bg-white/40 rounded-full blur-md animate-floatingSlow" />
                <div className="absolute bottom-24 left-10 w-7 h-7 bg-white/30 rounded-full blur-sm animate-floatingDelay" />
                <div className="absolute top-40 right-40 w-8 h-8 bg-white/50 rounded-full blur-sm animate-floatingReverse" />

                <div className="relative z-10 max-w-7xl mx-auto h-full px-6 lg:px-12 py-32 lg:py-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 h-full">

                        {/* LEFT TEXT */}
                        <div className="flex flex-col space-y-6">
                            <Reveal>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-kiddi-gray leading-tight">
                                    A Child <span className="text-kiddi-blue">Development</span>{" "}
                                    Center
                                </h1>
                            </Reveal>

                            <Reveal>
                                <p className="text-lg sm:text-xl text-kiddi-text max-w-lg leading-relaxed">
                                    At Kiddicove, we provide therapies and parental guidance for child
                                    development, addressing Autism (ASD), ADHD, Dyslexia, Down Syndrome,
                                    and other neurodevelopmental challenges with multi-disciplinary care.
                                </p>
                            </Reveal>

                            <Reveal>
                                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                    {/* <button
                                        onClick={handleChildJurney}
                                        className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold 
                                text-lg hover:bg-blue-500 shadow-xl hover:shadow-2xl transition-all duration-300
                                hover:-translate-y-1 active:scale-95"
                                    >
                                        Start Your Child’s Journey
                                    </button>

                                    <a
                                        href={whatsbfs}
                                        target="_blank"
                                        className="border-2 border-blue-400 text-blue-700 px-8 py-4 rounded-full 
                               font-semibold text-lg hover:bg-blue-200 shadow-md hover:shadow-xl 
                               transition-all duration-300 hover:-translate-y-1 active:scale-95"
                                    >
                                        Consult Us Now!
                                    </a> */}

                                    <a
                                        onClick={() => setIsConsultOpen(true)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 transition flex items-center justify-center"
                                    >
                                        Start Your Child’s Journey
                                    </a>
                                    {/* <a
                                        onClick={() => setIsConsultOpen(true)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-2 border-blue-300 text-blue-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-300 transition flex items-center justify-center cursor-pointer"
                                    >
                                        Consult Us Now!
                                    </a> */}
                                </div>
                            </Reveal>
                        </div>

                        {/* RIGHT IMAGE - Only on Desktop */}
                        <div className="hidden xl:flex items-center justify-center relative">

                            {/* Glow Behind Image */}
                            <div className="absolute -top-10 -right-10 w-[140%] h-[140%] bg-blue-300/20 rounded-full 
                    blur-[110px] animate-pulseGlow" />

                            {/* Image with tilt */}
                            <img
                                src={girl}
                                alt="Child smiling"
                                className="relative z-10 w-[80%] max-w-xl drop-shadow-2xl 
                        transition-transform duration-500 hover:scale-[1.03] hover:rotate-1"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* ABOUT SECTION */}
            <section className="py-20 bg-white">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-kiddi-gray mb-6">
                            About Kiddicove
                        </h2>
                        <p className="text-lg text-kiddi-text max-w-3xl mx-auto leading-relaxed">
                            Kiddicove by Deep Connection supports children with diverse learning
                            and developmental needs through evidence-based therapies.
                        </p>
                    </div>
                </Reveal>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Reveal>
                        <div className="text-center p-6 hover:scale-[1.03] transition-all duration-300">
                            <div className="bg-[#DA2643] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <Heart className="text-white" size={36} />
                            </div>
                            <h3 className="text-xl font-semibold text-kiddi-gray mb-3">
                                Our Mission
                            </h3>
                            <p className="text-kiddi-text">
                                Empowering children and families through developmental support.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="text-center p-6 hover:scale-[1.03] transition-all duration-300">
                            <div className="bg-[#DA2643] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <Star className="text-white" size={36} />
                            </div>
                            <h3 className="text-xl font-semibold text-kiddi-gray mb-3">
                                Our Values
                            </h3>
                            <p className="text-kiddi-text">
                                Compassion, innovation, excellence & respect.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="text-center p-6 hover:scale-[1.03] transition-all duration-300">
                            <div className="bg-[#DA2643] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <Users className="text-white" size={36} />
                            </div>
                            <h3 className="text-xl font-semibold text-kiddi-gray mb-3">
                                Our Approach
                            </h3>
                            <p className="text-kiddi-text">
                                Holistic and evidence-based intervention strategies.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* SERVICES */}
            <section className="py-20 bg-gradient-to-br from-orange-100 via-pink-50 to-blue-50">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-kiddi-gray mb-6">
                            Our Services
                        </h2>
                        <p className="text-lg text-kiddi-text max-w-3xl mx-auto">
                            Personalized developmental programs tailored for your child.
                        </p>
                    </div>
                </Reveal>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Reveal key={index}>
                            <ServiceCard
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                bgColor={service.bgColor}
                            />
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* PILLARS */}
            <section className="py-20 bg-white">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-kiddi-gray mb-6">
                            Three Pillars of Great Health
                        </h2>
                    </div>
                </Reveal>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <Reveal>
                        <div className="text-center hover:scale-[1.03] transition-transform duration-300">
                            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 mb-6 shadow-xl h-full">
                                <Brain className="w-24 h-24 text-white mb-6 mx-auto" />
                                <h3 className="text-2xl font-bold text-white mb-4">Mind</h3>
                                <p className="text-blue-50">
                                    Self-awareness, confidence, peace, growth mindset.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="text-center hover:scale-[1.03] transition-transform duration-300">
                            <div className="bg-[#DA2643] rounded-3xl p-8 mb-6 shadow-xl h-full">
                                <Heart className="w-24 h-24 text-white mb-6 mx-auto" />
                                <h3 className="text-2xl font-bold text-white mb-4">Body</h3>
                                <p className="text-white">
                                    Physical health, strength, fitness, long-term wellness.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="text-center hover:scale-[1.03] transition-transform duration-300">
                            <div className="bg-sky-500 rounded-3xl p-8 mb-6 shadow-xl h-full">
                                <Sprout className="w-24 h-24 text-white mb-6 mx-auto" />
                                <h3 className="text-2xl font-bold text-white mb-4">Gut</h3>
                                <p className="text-white">
                                    Digestive health, nutrition, behavioral improvements.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-20 bg-gradient-to-br from-orange-100 to-pink-100">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-kiddi-gray mb-6">
                            Why Choose Kiddicove?
                        </h2>
                    </div>
                </Reveal>

                <div className="
        max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
        gap-8 items-stretch
      "
                >
                    {features.map((feature, index) => (
                        <Reveal key={index}>
                            <div
                                className="
            bg-white rounded-2xl p-8 text-center shadow-lg 
            hover:shadow-2xl hover:-translate-y-3 
            transition-all duration-300 
            flex flex-col h-full
            "
                            >
                                {/* ICON */}
                                <div className="flex justify-center mb-6">
                                    <div
                                        className={`${feature.bgColor} w-24 h-24 rounded-full flex items-center justify-center`}
                                    >
                                        <feature.icon className="text-white" size={36} />
                                    </div>
                                </div>

                                {/* TITLE & DESCRIPTION */}
                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-xl font-semibold text-kiddi-gray mb-4">
                                        {feature.title}
                                    </h3>

                                    <p className="text-kiddi-text flex-grow leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>
            <WhatsappIcon />

            <Modal isOpen={isConsultOpen} onClose={() => setIsConsultOpen(false)}>
                <ConsultUs onClose={() => setIsConsultOpen(false)} />
            </Modal>


            <Footer />
        </>
    );
}
