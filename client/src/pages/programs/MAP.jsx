import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dcHomeImg from "@/assets/deep1.png";
import Footer from "@/components/Footer";
import WhatsappIcon from "../../components/WhatsappIcon";
import ConsultUs from "../../components/ConsultUs";
import Modal from "../../components/Modal";
// import HomeAgeCart  from "@/components/HomeAgeCart";
import { trackCenterPageView, trackPhoneClick, trackWhatsAppClick, trackSessionBooking } from "@/utils/trackConversion";

import {
  Rocket,
  Brain,
  Heart,
  Users,
  Target,
  Trophy,
  Star,
  CheckCircle,
  Layers,
  ClipboardCheck,
  Handshake
} from "lucide-react";

export default function MAP() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("MAP");
  useEffect(() => {
    trackCenterPageView('MAP program');
  }, []);

  const developmentAreas = [
    {
      icon: Brain,
      title: "Brain Development",
      description:
        "Boost timely brain development and cognitive skills for enhanced memory, reasoning, and problem-solving abilities.",
    },
    {
      icon: Target,
      title: "Motor Skills",
      description:
        "Develop both fine and gross motor skills through targeted activities and exercises.",
    },
    {
      icon: Heart,
      title: "Emotional Intelligence",
      description:
        "Build confidence, self-esteem, and emotional intelligence for better life outcomes.",
    },
    {
      icon: Users,
      title: "Social Skills",
      description:
        "Enhance social interaction abilities and communication skills for stronger relationships.",
    },
  ];
  const ages = Array.from({ length: 18 }, (_, i) => i + 1);

  const handleOpenPdf = (age) => {
    // Path to the PDF file in the public directory
    const pdfPath = `/pdfs/milestones-${age}.pdf`;

    // Open the PDF in a new tab
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
  };
  const outcomes = [
    "Enhanced cognitive abilities and academic performance",
    "Improved physical coordination and motor skills",
    "Stronger emotional regulation and self-confidence",
    "Better social interaction and communication",
    "Advanced problem-solving capabilities",
    "Increased creativity and innovation",
    "Better preparation for future challenges",
    "Holistic personality development",
  ];
  function handleChildJurney() {
    // Additional logic can be added here if needed when the button is clicked
    navigate("/child-jurney");
  }

  return (
    <div>
      <Header />
      {/* Hero Section */}
      <style>
        {`
              @keyframes float {
                0%, 100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-8px);
                }
              }
              
              .float-animation {
                animation: float 3s ease-in-out infinite;
              }
              `}
      </style>
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white mt-[67px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Left: Text */}
          <div className="text-center lg:text-left w-full lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4 leading-snug">
              Catch Child Developmental Delays Early{" "}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              Every child deserves the chance to grow to their fullest potential. At Deep Connection, we use advanced AI to help parents and clinicians detect developmental concerns earlier, personalize support for every child, and ensure timely, effective interventions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-left lg:justify-start mt-6">
              <Button
                size="lg"
                className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 transition flex items-center justify-center"
                onClick={() => { setIsConsultOpen(true); setSelectedProgram("MAP"); }}
              >
                Start Assessment
              </Button>

            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <img
              src={dcHomeImg}
              alt="Happy child with growth graph"
              className="w-[560px] h-[360px] rounded-xl object-cover shadow-lg"
            />

            {/* Top Right Icon */}
            <div
              className="absolute -top-3 -right-3 rounded-full p-2 shadow-md float-animation flex items-center justify-center"
              style={{ backgroundColor: "#2ec2b3", width: "48px", height: "48px" }}
            >
              <Brain className="h-6 w-6 text-white" />
            </div>
            {/* Bottom Left Icon */}
            <div
              className="absolute -bottom-3 -left-3 rounded-full p-2 shadow-md float-animation flex items-center justify-center"
              style={{ backgroundColor: "#17a24f", width: "48px", height: "48px" }}
            >
              <Users className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Comprehensive Development Program
            </Badge>
            {/* <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4 leading-snug">
                      Catch Child Developmental Delays Early{" "}
                    </h1> */}
            <h1 className="text-3xl font-bold text-black mb-6">
              Milestone Accelerator Program
            </h1>
            <p className="text-2xl deep-red font-semibold mb-6">(MAP)</p>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Give your child the head start they deserve with Deep Connection's
              Milestone Accelerator Program
            </p>
            {/* <Button 
              size="lg" 
             className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 transition flex items-center justify-center"
              onClick={() => setIsContactModalOpen(true)}
            >
              Book your  Consultation Today!
            </Button> */}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-gray-100 font-sans md:-mt-[119px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4 text-black">
              Why Deep Connection?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-[99px]">
            {/* Card 1 */}
            <div className="flex items-center space-x-6 bg-white h-[138px] border border-blue-500 rounded-2xl p-5 
        transform transition-all duration-300 hover:scale-105 hover:shadow-2xl 
        hover:border-blue-500  hover:shadow-gray-300">
              <div className="flex-shrink-0 bg-blue-500 rounded-full p-2">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-black">Whole-child view</h3>
                <p className="text-sm text-black">Holistic screening, not just milestones or a single checklist.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center space-x-6 bg-white h-[138px] border border-blue-500 rounded-2xl p-5 
        transform transition-all duration-300 hover:scale-105 hover:shadow-2xl 
        hover:border-blue-500 hover:shadow-gray-300">
              <div className="flex-shrink-0 bg-blue-500 rounded-full p-2">
                <ClipboardCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-black">Action to care</h3>
                <p className="text-sm text-black">Immediate home activities plus a report designed for clinicians.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center space-x-6 bg-white h-[138px] border border-blue-500 rounded-2xl p-5 
        transform transition-all duration-300 hover:scale-105 hover:shadow-2xl 
        hover:border-blue-500 hover:shadow-gray-300">
              <div className="flex-shrink-0 bg-blue-500 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="feather feather-heart text-white">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 
              5.67l-1.06-1.06a5.5 5.5 0 
              00-7.78 7.78l1.06 1.06L12 
              21.23l7.78-7.78 1.06-1.06a5.5 
              5.5 0 000-7.78z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-black">Human support</h3>
                <p className="text-sm text-black">Optional coach/clinician review of your results.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex items-center space-x-6 bg-white h-[138px] border border-blue-500 rounded-2xl p-5 
        transform transition-all duration-300 hover:scale-105 hover:shadow-2xl 
        hover:border-blue-500 hover:shadow-gray-300">
              <div className="flex-shrink-0 bg-blue-500 rounded-full p-2">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-black">Built with families and clinicians</h3>
                <p className="text-sm text-black">Parent-friendly language, evidence-aligned approach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Unlock Your Child's Unlimited Potential
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Your child is remarkable. At Deep Connection we believe that
                they come with unlimited potential and wait for opportunities to
                start developing great capabilities. Give your child the head
                start they deserve with Deep Connection's Milestone Accelerator
                Program—designed to boost timely brain development, physical
                fine and gross motor skills, cognitive skills, build confidence,
                self esteem, social skills, emotional intelligence and pave the
                way for a successful future.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Personalized assessment and development plans ensure that each
                child receives exactly what they need to reach their full
                potential at every stage of their growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Areas */}
      <section className="py-20 bg-white -mt-[112px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Key Development Areas
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive approach to your child's growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developmentAreas.map((area, index) => (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <area.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-3">
                        {area.title}
                      </h3>
                      <p className="text-gray-600">{area.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Expected Outcomes
            </h2>
            <p className="text-xl text-gray-600">
              What you can expect from the MAP program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
              >
                <CheckCircle
                  className="w-6 h-6 flex-shrink-0 text-green-500"
                // style={{ color: "#DB143C" }}
                />
                <span className="text-gray-700">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*Age Chart*/}
      {/* <HomeAgeCart/> */}
      <section className="py-20 bg-[#FFF6F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black">Explore</h2>
          <h3 className="text-3xl font-bold text-blue-500 my-2">
            Milestones By Age
          </h3>
          <p className="text-lg text-gray-600 mb-10">
            Select Your Child&apos;s Age To View Developmental Milestones
          </p>

          <div className="bg-white shadow-lg rounded-lg border border-blue-500 p-6">
            <div className="flex flex-wrap justify-center gap-4">
              {ages.map((age) => (
                <button
                  key={age}
                  onClick={() => handleOpenPdf(age)}
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold text-lg shadow-md hover:bg-blue-500 transition duration-300 flex-shrink-0"
                >
                  {age}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Accelerate Your Child's Development?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of families who have seen remarkable improvements in
            their children's development.
          </p>
          {/* <Button 
            size="lg" 
            className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 transition flex items-center justify-center"
            onClick={() => setIsContactModalOpen(true)}
          >
            Get Started Today
          </Button> */}
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
}