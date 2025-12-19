import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Mail } from "lucide-react";
import ConsultUs from "../components/ConsultUs";
import Modal from "../components/Modal";
import WhatsappIcon from "@/components/WhatsappIcon";
import { Link } from "react-router-dom";
import { trackCenterPageView, trackPhoneClick, trackWhatsAppClick, trackSessionBooking } from "@/utils/trackConversion";

export default function Contact() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  useEffect(() => {
    trackCenterPageView('Contact');
  }, []);

  const whatsappLink =
    "https://api.whatsapp.com/send?phone=919650450094&text=Book%20Your%20FREE%20Session";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('form data:', formData);
    setStatus(null);

    try {

      const response = await fetch("https://cdc.deepconnection.life/contact.php", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });


      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server responded with error:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json().catch(error => {
        console.error('Error parsing JSON:', error);
        throw new Error('Invalid JSON response from server');
      });

      console.log('API Response:', result);

      if (response.ok && result.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: "Failed to send message: " + (result?.error || "Unknown error"),
        });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Error connecting to server." });
    }
  };

  return (
    <>
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-kiddi-peach to-white text-center">
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-kiddi-gray mb-6">
              We’d Love to Hear From You!
            </h1>
            <p className="text-xl text-kiddi-text leading-relaxed mb-8">
              Whether you’re a parent, educator, or therapist—reach out and let’s talk child development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                onClick={() => setIsConsultOpen(true)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 transition flex items-center justify-center"
              >
                Consult Us Now!
              </a>
              {/* <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-300 text-blue-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-300 transition flex items-center justify-center"
              >
                Consult Us Now!
              </a> */}
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-kiddi-peach rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-kiddi-gray mb-6">Send us a message</h3>
                {status && (
                  <div
                    className={`mb-4 px-4 py-3 rounded-lg font-semibold ${status.type === "success"
                      ? "bg-green-100 text-green-800 border border-green-300"
                      : "bg-red-100 text-red-800 border border-red-300"
                      }`}
                  >
                    {status.message}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-kiddi-gray mb-2">
                      Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium text-kiddi-gray mb-2">
                      Contact Number
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your contact number"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-kiddi-gray mb-2">
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium text-kiddi-gray mb-2">
                      Your Child’s Issue
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Share your concerns..."
                      required
                      className="w-full"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-kiddi-blue text-white py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Submit
                  </Button>
                </form>
              </div>

              {/* Contact Info with Icons and Links */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border h-fit space-y-10">
                {/* Contact Info */}
                <div>
                  <h3 className="text-2xl font-semibold text-kiddi-gray mb-6">Contact</h3>
                  <div className="space-y-4 text-kiddi-text text-base">
                    <div className="flex items-center gap-3">
                      <Phone className="text-blue-600 w-5 h-5" />
                      <a
                        href="https://api.whatsapp.com/send?phone=919650450094&text=Book%20Your%20FREE%20Session"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +91 9650450094
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="text-blue-600 w-5 h-5" />
                      <a href="mailto:admin@deepconnection.life">admin@deepconnection.life</a>
                    </div>
                  </div>
                </div>

                {/* Locations Info */}
                <div>
                  <h3 className="text-2xl font-semibold text-kiddi-gray mb-6">Locations</h3>
                  <div className="space-y-4 text-kiddi-text text-base">
                    <div className="flex items-center gap-3">
                      <MapPin className="text-blue-600 w-5 h-5" />
                      <a href="/centers/gurugram">Gurugram</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="text-blue-600 w-5 h-5" />
                      <a href="/centers/dehradun">Dehradun</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
      <WhatsappIcon />

      <Modal isOpen={isConsultOpen} onClose={() => setIsConsultOpen(false)}>
        <ConsultUs onClose={() => setIsConsultOpen(false)} />
      </Modal>
      <Footer />
    </>
  );
}
