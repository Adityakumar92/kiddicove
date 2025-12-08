/* Full updated code for About page with enlarged icon sizes and consistent UI */
import Header from "@/components/Header";
import aboutImg from "@/assets/about.png";
import Footer from "@/components/Footer";
import {
  Hand, Heart, Sprout, UserCheck, Users, Star, Compass,
  Lightbulb,
  Target,
} from "lucide-react";
import ConsultUs from "../components/ConsultUs";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import WhatsappIcon from "@/components/WhatsappIcon";
import { Helmet } from "react-helmet-async";
import { trackCenterPageView, trackPhoneClick, trackWhatsAppClick, trackSessionBooking } from "@/utils/trackConversion";


export default function About() {
  // Set page-specific metadata
  <Helmet>
    <title>About Us | KiddiCove</title>
    <meta property="og:title" content="About Us | KiddiCove" />
  </Helmet>

  useEffect(() => {
    trackCenterPageView('About');
  }, []);

  const [isConsultOpen, setIsConsultOpen] = useState(false);
  var whatsbfs = "https://api.whatsapp.com/send?phone=919650450094&text=Consult%20Us%20FREE%20Now";
  var whatssycj = "https://api.whatsapp.com/send?phone=919650450094&text=Start%20your's%20Child%20Journey";
  var approachItems = [
    {
      title: "Personalized Care",
      icon: UserCheck,
      hoverText: "Tailored therapies based on age, assessments, and needs.",
    },
    {
      title: "Multidisciplinary Team",
      icon: Users,
      hoverText: "Therapists, psychologists, educators, and nutritionists.",
    },
    {
      title: "Parental Involvement",
      icon: Hand,
      hoverText: "We walk this journey with you.",
    },
    {
      title: "Holistic Health",
      icon: Heart,
      hoverText: "Focus on Mind, Body & Gut.",
    },
    {
      title: "Safe & Happy Spaces",
      icon: Sprout,
      hoverText: "Child-first environments full of play, learning, and discovery.",
    },
    {
      title: "Early Detection & Intervention",
      icon: Lightbulb,
      hoverText: "Timely identification and support for stronger outcomes.",
    },
  ];
  return (<>
    <Header />

    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-200 via-pink-100 to-blue-100 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-kiddi-gray leading-tight mb-6">
            Nurturing Potential,{" "}
            <span className="text-kiddi-blue">One Child at a Time</span>
          </h1>
          <p className="text-lg md:text-xl text-kiddi-text mb-8 leading-relaxed max-w-3xl mx-auto">
            Kiddicove by Deep Connection is more than just a center—it’s a
            movement toward guilt-free parenting and holistic child
            development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <a
              href={whatssycj}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 transition flex items-center justify-center"
            >
              Start Your Child’s Journey
            </a>
            <a
              href={whatsbfs}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-300 text-blue-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-300 transition flex items-center justify-center"
            >
              Consult Us Now!
            </a> */}
            {/* <a
              onClick={() => setIsConsultOpen(true)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 transition flex items-center justify-center"
            >
              Start Your Child’s Journey
            </a> */}
            <a
              onClick={() => setIsConsultOpen(true)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 transition flex items-center justify-center"
            >
              Consult Us Now!
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
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-kiddi-gray mb-6">
              Our Story
            </h2>
            <p className="text-lg text-kiddi-text leading-relaxed mb-4">
              Kiddicove was founded with a powerful mission—to support
              children in realizing their fullest developmental potential
              while guiding parents with empathy and expertise.
            </p>
            <p className="text-lg text-kiddi-text leading-relaxed mb-4">
              Born out of Deep Connection Innovation Pvt. Ltd., our journey
              began with the vision to bridge critical gaps in early childhood
              care through a holistic, research-backed approach. We brought
              together therapists, educators, and child psychologists under
              one roof to offer individualized therapies tailored to every
              child’s unique needs.
            </p>
            <p className="text-lg text-kiddi-text leading-relaxed">
              Our centers are joyful, inclusive spaces where children feel
              safe to express, explore, and grow. Whether it’s speech support,
              emotional guidance, or sensory integration, we walk alongside
              families to ensure each child is not just supported—but truly
              celebrated.
            </p>
            <div className="mt-8">
              <a
                onClick={() => setIsConsultOpen(true)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 transition flex items-center justify-center"
              >
                Start Your Child’s Journey
              </a>
            </div>
          </div>
          <div className="relative">
            <img src={aboutImg} alt="Kiddicove center" className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
            {/* You can add a subtle overlay or badge here if desired, similar to the Home page's "Happy Families" */}
          </div>
        </div>
      </section>

      {/* What We Stand For (Mission, Vision, Values) */}

      <section className="py-20 bg-gradient-to-br from-orange-100 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-kiddi-gray mb-16">
            <span className="text-kiddi-gray">What We </span>
            <span className="text-kiddi-blue">Stand For</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Compass, // Lucide icon for Mission
                title: "Mission",
                description: "To ensure every child gets access to timely, customized, and loving developmental care.",
                bgColor: "bg-kiddi-blue",
              },
              {
                icon: Star, // Lucide icon for Vision
                title: "Vision",
                description: "To become India's most trusted brand in early childhood therapy and developmental care.",
                bgColor: "bg-kiddi-pink",
              },
              {
                icon: Heart, // Lucide icon for Core Values
                title: "Core Values",
                description: (
                  // Removed <ul> and <li>, and text-left, pl-5. Added text-center here for explicit centering.
                  <p className="text-kiddi-text text-center space-y-1">
                    <span>Empathy</span><br />
                    <span>Expertise</span><br />
                    <span>Individualization</span><br />
                    <span>Collaboration</span><br />
                    <span>Joy</span>
                  </p>
                ),
                bgColor: "bg-kiddi-blue",
              },
            ].map(function (item, index) {
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-sky-300 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-2"
                >
                  <div className={`${item.bgColor} rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6`}>
                    <item.icon className="text-white" size={36} />
                  </div>
                  <h3 className="text-xl font-semibold text-kiddi-gray mb-4">
                    {item.title}
                  </h3>
                  {/* The description for core values is now handled by the <p> tag with text-center */}
                  {item.description}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-kiddi-gray mb-2">
            <span className="text-kiddi-gray">Our </span>
            <span className="text-kiddi-blue">Approach</span>
          </h2>
          <p className="text-lg text-kiddi-text mb-12">Science Meets Heart</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approachItems.map(function (item, i) {
              return (
                <div key={i}
                  className="bg-white border-2 border-sky-300 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 flex flex-col items-center justify-center group relative overflow-hidden"
                  style={{ minHeight: "180px" }} // INCREASED MIN-HEIGHT HERE
                >
                  {/* Front Face (Always visible, but content changes on hover) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-kiddi-gray transition-opacity duration-300 group-hover:opacity-0">
                    <div className="bg-white p-4 rounded-full mb-4 shadow">
                      <item.icon className="text-kiddi-blue" size={36} />
                    </div>
                    <span className="text-xl font-semibold text-kiddi-gray text-center">
                      {item.title}
                    </span>
                  </div>

                  {/* Back Face (Visible on hover) */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 bg-kiddi-blue text-white rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-lg text-center">{item.hoverText}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-kiddi-blue text-white relative">
        {" "}
        {/* Reduced py-20 to py-12 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            {" "}
            {/* Reduced mb-12 to mb-8 */}
            <div className="text-left mb-4 md:mb-0">
              {" "}
              {/* Reduced mb-6 to mb-4 */}
              <h2 className="text-2xl md:text-3xl font-bold mb-1">
                {" "}
                {/* Reduced text-3xl/4xl to 2xl/3xl, mb-2 to mb-1 */}
                Our Impact
              </h2>
              <p className="text-base">Changing Lives Across Cities</p>{" "}
              {/* Reduced text-lg to text-base */}
            </div>
            <a onClick={() => setIsConsultOpen(true)} target="_blank" rel="noopener noreferrer" className="bg-white text-kiddi-blue font-semibold px-4 py-2 rounded-full hover:bg-blue-100 transition-colors duration-200 flex items-center justify-center shadow-lg text-sm" // Reduced px-6/py-3 to px-4/py-2, added text-sm
            >
              <Target className="mr-1" size={16} /> Consult Us Now{" "}
              {/* Reduced mr-2 to mr-1, size={20} to size={16} */}
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {" "}
            {/* Reduced gap-8 to gap-6 */}
            <div className="p-3 bg-white bg-opacity-20 rounded-lg shadow-md">
              {" "}
              {/* Reduced p-4 to p-3 */}
              <p className="text-2xl md:text-3xl font-bold mb-1">
                5000+
              </p>{" "}
              {/* Reduced text-3xl/4xl to 2xl/3xl, mb-2 to mb-1 */}
              <p className="text-sm font-medium">
                {" "}
                {/* Reduced text-sm/base to text-sm */}
                Happy Children Supported
              </p>
            </div>
            <div className="p-3 bg-white bg-opacity-20 rounded-lg shadow-md">
              {" "}
              {/* Reduced p-4 to p-3 */}
              <p className="text-2xl md:text-3xl font-bold mb-1">
                2+ Cities
              </p>{" "}
              {/* Reduced text-3xl/4xl to 2xl/3xl, mb-2 to mb-1 */}
              <p className="text-sm font-medium">
                {" "}
                {/* Reduced text-sm/base to text-sm */}
                Presence in 2+ cities and expanding
              </p>
            </div>
            <div className="p-3 bg-white bg-opacity-20 rounded-lg shadow-md">
              {" "}
              {/* Reduced p-4 to p-3 */}
              <p className="text-2xl md:text-3xl font-bold mb-1">200+</p>{" "}
              {/* Reduced text-3xl/4xl to 2xl/3xl, mb-2 to mb-1 */}
              <p className="text-sm font-medium">
                {" "}
                {/* Reduced text-sm/base to text-sm */}
                Expert Professionals
              </p>
            </div>
            <div className="p-3 bg-white bg-opacity-20 rounded-lg shadow-md">
              {" "}
              {/* Reduced p-4 to p-3 */}
              <p className="text-2xl md:text-3xl font-bold mb-1">
                {" "}
                {/* Reduced text-3xl/4xl to 2xl/3xl, mb-2 to mb-1 */}
                50+ schools
              </p>
              <p className="text-sm font-medium">
                {" "}
                {/* Reduced text-sm/base to text-sm */}
                Partnered with 50+ schools for early screening & intervention
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhatsappIcon />
    </div>

    <Modal isOpen={isConsultOpen} onClose={() => setIsConsultOpen(false)}>
      <ConsultUs onClose={() => setIsConsultOpen(false)} />
    </Modal>

    <Footer />
  </>);
}
