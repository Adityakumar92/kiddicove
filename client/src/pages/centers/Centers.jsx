import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Phone, Calendar } from "lucide-react";
import ConsultUs from "../../components/ConsultUs";
import Modal from "../../components/Modal";
import { useEffect, useState } from "react";
import WhatsappIcon from "@/components/WhatsappIcon";
import { trackCenterPageView, trackPhoneClick, trackWhatsAppClick, trackSessionBooking } from "@/utils/trackConversion";


export default function Centers() {
  // var whatsappLink = "https://api.whatsapp.com/send?phone=919650450094&text=Book%20Your%20FREE%20Session";
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  useEffect(() => {
    trackCenterPageView('Centers');
  }, []);

  return (<>
    <Header />

    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-20 pb-10 bg-gradient-to-br from-kiddi-peach to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-kiddi-gray mb-4">
              Our Centers
            </h1>
            <p className="text-xl text-kiddi-text max-w-3xl mx-auto leading-relaxed">
              Find the nearest Kiddicove center and start your child's
              development journey with us.
            </p>
          </div>
        </div>
      </section>

      {/* Centers Overview */}
      <section className="pt-10 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Dehradun Center (without image) */}
            <div className="bg-gradient-to-br from-kiddi-peach to-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h2 className="text-3xl font-bold text-kiddi-gray mb-4">
                Dehradun Center
              </h2>
              <p className="text-kiddi-text mb-6 leading-relaxed">
                Kiddicove Dehradun is a vibrant and nurturing space where
                childhood is celebrated through care, creativity, and
                curiosity. It offers a safe and joyful environment where
                little minds are encouraged to explore, express, and grow with
                confidence.
              </p>

              <div className="mb-6">
                <h3 className="font-semibold text-kiddi-gray mb-3">
                  Address:
                </h3>
                <p className="text-kiddi-text text-sm">
                  Vishnupuram Lane 1, Mothrowala, Banjarawala, Dehradun,
                  Uttarakhand
                </p>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-kiddi-text">
                  <Phone size={16} />
                  <span className="text-sm">+91 9650450094</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/centers/dehradun" className="flex-1">
                  <button className="w-full bg-kiddi-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200">
                    Learn More
                  </button>
                </Link>
                <a onClick={() => setIsConsultOpen(true)} target="_blank" rel="noopener noreferrer" className="flex-1 border-2 border-kiddi-blue text-kiddi-blue px-6 py-3 rounded-full font-semibold hover:bg-kiddi-blue hover:text-white transition-all duration-200 flex items-center justify-center">
                  <Calendar size={16} className="inline mr-2" />
                  Book Session
                </a>
              </div>
            </div>

            {/* Gurugram Center (without image) */}
            <div className="bg-gradient-to-br from-kiddi-peach to-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h2 className="text-3xl font-bold text-kiddi-gray mb-4">
                Gurugram Center
              </h2>
              <p className="text-kiddi-text mb-6 leading-relaxed">
                Kiddicove Gurgaon is a warm, imaginative space designed to
                nurture young minds in the heart of the city. It provides a
                safe and stimulating environment where children are free to
                explore, discover, and thrive every day.
              </p>

              <div className="mb-6">
                <h3 className="font-semibold text-kiddi-gray mb-3">
                  Address:
                </h3>
                <p className="text-kiddi-text text-sm">
                  512, Ocus Quantum, Sector 51, Gurugram, Haryana, 122003
                </p>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-kiddi-text">
                  <Phone size={16} />
                  <span className="text-sm">+91 9650450094</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/centers/gurugram" className="flex-1">
                  <button className="w-full bg-kiddi-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200">
                    Learn More
                  </button>
                </Link>
                <a onClick={() => setIsConsultOpen(true)} target="_blank" rel="noopener noreferrer" className="flex-1 border-2 border-kiddi-blue text-kiddi-blue px-6 py-3 rounded-full font-semibold hover:bg-kiddi-blue hover:text-white transition-all duration-200 flex items-center justify-center">
                  <Calendar size={16} className="inline mr-2" />
                  Book Session
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Child’s Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            One joyful session can spark a lifetime of growth. Join us today
            and take the first step toward a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 transition-colors duration-200 shadow-lg transform hover:scale-105 text-center">
              Schedule a Tour
            </a> */}
            <a
              onClick={() => setIsConsultOpen(true)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 transition flex items-center justify-center"
            >
              Schedule a Tour
            </a>
            <Link href="/contact">
              <button className="border-2 border-blue-300 text-blue-100 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-300 hover:text-blue-800 transition-all duration-200 transform hover:scale-105">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <WhatsappIcon />

      <Modal isOpen={isConsultOpen} onClose={() => setIsConsultOpen(false)}>
        <ConsultUs onClose={() => setIsConsultOpen(false)} />
      </Modal>
    </div>

    <Footer />
  </>);
}
