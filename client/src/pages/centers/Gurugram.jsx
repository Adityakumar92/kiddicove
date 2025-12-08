import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Brain, Hand, Zap, Users, Mic, Apple, Calendar, MapPin, Phone, Clock } from "lucide-react";
import { trackCenterPageView, trackPhoneClick, trackWhatsAppClick, trackSessionBooking } from "@/utils/trackConversion";

export default function Gurugram() {
  // Track page view on component mount
  useEffect(() => {
    trackCenterPageView('Gurugram');
  }, []);

  var services = [
    { name: "Best Speech Therapy in Gurgaon", icon: MessageCircle },
    { name: "Best Occupational Therapy in Gurgaon", icon: Hand },
    { name: "Applied Behaviour Analysis (ABA)", icon: Brain },
    { name: "Early Intervention Therapy", icon: Zap },
    {
      name: "Language and Voice Development for Future Singers and Public Speakers",
      icon: Mic,
    },
    { name: "After School Activities", icon: Users },
    { name: "Nutrition and Diet Consultation for Gut health", icon: Apple },
  ];

  var assessments = [
    "IQ Assessment",
    "EQ Assessment",
    "Personality Assessment",
    "VAK - Multiple Intelligence Assessment for Career Guidance",
    "Strength Based Development Assessment",
    "ADHD Assessments",
    "Autism Screening",
    "SLD Assessments",
  ];

  var teamHighlights = [
    {
      title: "Best Child Psychologists",
      description: "Experts in child development helping families navigate behavioral and emotional challenges.",
    },
    {
      title: "Ayurveda Specialists",
      description: "Holistic health experts supporting gut health and natural wellness routines.",
    },
    {
      title: "Speech Therapists",
      description: "Certified professionals for speech clarity, voice modulation, and communication goals.",
    },
  ];

  var whatsappLink = "https://api.whatsapp.com/send?phone=919650450094&text=Book%20Your%20FREE%20Session";

  return (<>
    <Header />

    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-kiddi-peach to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            {/* Changed lg:grid-cols-2 to lg:grid-cols-1 */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-kiddi-gray mb-6">
                Gurugram Center
              </h1>
              <p className="text-xl text-kiddi-text mb-8 leading-relaxed">
                Kiddicove Gurgaon is a warm, imaginative space designed to
                nurture young minds in the heart of the city. With a focus on
                creativity, emotional growth, and joyful learning, it provides
                a safe and stimulating environment where children are free to
                explore, discover, and thrive every day.
              </p>
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2 text-kiddi-text">
                  <MapPin size={20} />
                  <span>512, Ocus Quantum, Sector 51, Gurugram</span>
                </div>
                <div className="flex items-center space-x-2 text-kiddi-text">
                  <Phone size={20} />
                  <a
                    href="tel:+919650450094"
                    onClick={() => trackPhoneClick('+91 9650450094')}
                    className="hover:text-kiddi-blue transition-colors cursor-pointer"
                  >
                    +91 9650450094
                  </a>
                </div>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick('Book Your FREE Session - Hero');
                  trackSessionBooking('Gurugram Hero Section');
                }}
                className="bg-kiddi-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
              >
                <Calendar size={20} className="inline mr-2" />
                Book Your FREE Session
              </a>
            </div>
            {/* The image div has been removed from here */}
          </div>
        </div>
      </section>


      {/* Center Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kiddi-gray mb-6">
              Gurugram Child Development Center
            </h2>
            <p className="text-lg text-kiddi-text max-w-4xl mx-auto leading-relaxed">
              Kiddicove Gurgaon provides new age comprehensive support to
              parents in ensuring complete development of their child.
              Kiddicove is a great place for parents who are looking to give
              their children the best upbringing and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-kiddi-peach to-orange-100 rounded-2xl p-8 text-center">
              <div className="bg-kiddi-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-kiddi-gray mb-4">
                Creative Learning
              </h3>
              <p className="text-kiddi-text">
                Fostering imagination and artistic expression in a nurturing
                environment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-kiddi-peach to-orange-100 rounded-2xl p-8 text-center">
              <div className="bg-kiddi-pink rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">💖</span>
              </div>
              <h3 className="text-xl font-semibold text-kiddi-gray mb-4">
                Emotional Growth
              </h3>
              <p className="text-kiddi-text">
                Helping children build emotional intelligence and resilience
                through play and therapy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-kiddi-peach to-orange-100 rounded-2xl p-8 text-center">
              <div className="bg-kiddi-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-kiddi-gray mb-4">
                Joyful Exploration
              </h3>
              <p className="text-kiddi-text">
                Creating a safe space where every child is encouraged to
                explore and thrive joyfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-kiddi-peach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kiddi-gray mb-6">
              Services Offered
            </h2>
            <p className="text-lg text-kiddi-text max-w-3xl mx-auto">
              Our Gurugram center provides the same comprehensive range of
              therapeutic services with the added benefit of modern facilities
              and cutting-edge approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(function (service, index) {
              return (<div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 text-center">
                <div className="bg-kiddi-blue rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-kiddi-gray">
                  {service.name}
                </h3>
              </div>);
            })}
          </div>
        </div>
      </section>

      {/* Assessments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kiddi-gray mb-6">
              Comprehensive Assessments
            </h2>
            <p className="text-lg text-kiddi-text max-w-3xl mx-auto">
              Our Gurugram center offers the same comprehensive range of
              standardized assessments, enhanced with modern testing
              environments and digital tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assessments.map(function (assessment, index) {
              return (<div key={index} className="bg-gradient-to-br from-kiddi-peach to-orange-100 rounded-xl p-6 text-center shadow-lg">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-kiddi-blue font-bold">✓</span>
                </div>
                <h3 className="text-sm font-semibold text-kiddi-gray">
                  {assessment}
                </h3>
              </div>);
            })}
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-20 bg-kiddi-peach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kiddi-gray mb-6">
              Our Expert Team
            </h2>
            <p className="text-lg text-kiddi-text max-w-3xl mx-auto">
              Our Gurugram center is staffed with the same caliber of
              dedicated professionals, bringing expertise and compassion to
              every interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamHighlights.map(function (team, index) {
              return (<div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="bg-gradient-to-br from-kiddi-pink to-pink-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">👩‍⚕️</span>
                </div>
                <h3 className="text-xl font-semibold text-kiddi-gray mb-4">
                  {team.title}
                </h3>
                <p className="text-kiddi-text">{team.description}</p>
              </div>);
            })}
          </div>
        </div>
      </section>

      {/* Facility Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-kiddi-gray mb-6">
                Facility Details
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-kiddi-blue rounded-full p-2 flex-shrink-0">
                    <MapPin className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-kiddi-gray">Address</h4>
                    <p className="text-kiddi-text">
                      512, Ocus Quantum, Sector 51, Gurugram
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-kiddi-pink rounded-full p-2 flex-shrink-0">
                    <Clock className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-kiddi-gray">Hours</h4>
                    <p className="text-kiddi-text">
                      Monday - Saturday: 10:00 AM - 8:00 PM
                    </p>
                    <p className="text-kiddi-text">Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-kiddi-blue rounded-full p-2 flex-shrink-0">
                    <Phone className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-kiddi-gray">Contact</h4>
                    <p className="text-kiddi-text">
                      Phone: <a
                        href="tel:+919650450094"
                        onClick={() => trackPhoneClick('+91 9650450094')}
                        className="hover:text-kiddi-blue transition-colors cursor-pointer"
                      >
                        +91 9650450094
                      </a>
                    </p>
                    <p className="text-kiddi-text">
                      Email: <a
                        href="mailto:admin@deepconnection.life"
                        className="hover:text-kiddi-blue transition-colors"
                      >
                        admin@deepconnection.life
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg w-full h-80">
              <iframe title="Gurugram Map" src="https://www.google.com/maps?q=Ocus+Quantum,+Sector+51,+Gurugram,+Haryana,+122003&output=embed" className="w-full h-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Visit Our Gurugram Center?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Experience our modern approach to child development in the heart
            of Gurugram. Book your FREE consultation session today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsAppClick('Book Your FREE Session - CTA');
                trackSessionBooking('Gurugram CTA Section');
              }}
              className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 transition-colors duration-200 shadow-lg transform hover:scale-105 inline-flex items-center justify-center"
            >
              <Calendar size={20} className="inline mr-2" />
              Book Your FREE Session
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsAppClick('Schedule a Tour');
                trackSessionBooking('Gurugram Tour Request');
              }}
              className="border-2 border-blue-300 text-blue-100 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-300 hover:text-blue-800 transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Schedule a Tour
            </a>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </>);
}
