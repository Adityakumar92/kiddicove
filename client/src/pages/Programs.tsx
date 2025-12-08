import { Link } from "react-router-dom"; // Changed from "wouter"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Trophy, Shield, Heart, Users, Brain } from "lucide-react";
// import { ContactModal } from "@/components/ContactModal";
import { useState } from "react";

export default function Programs() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openContactModal = (service: string = "") => {
    setSelectedService(service);
    setIsContactModalOpen(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-black mb-6">Our Programs</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Programs Designed for Your Child's Growth and Development
          </p>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Rocket className="text-white" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-black">
                    Milestone Accelerator Program (MAP)
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Your child is remarkable. At Deep Connection we believe that
                  they come with unlimited potential and wait for opportunities
                  to start developing great capabilities. Give your child the
                  head start they deserve with Deep Connection's Milestone
                  Accelerator Program—designed to boost timely brain
                  development, physical fine and gross motor skills, cognitive
                  skills, build confidence, self esteem, social skills,
                  emotional intelligence and pave the way for a successful
                  future.
                </p>
                <div className="flex gap-4 items-center">
                  <Button asChild variant="outline">
                    <Link to="/programs/map">Learn More</Link>
                  </Button>
                  {/* Removed Book Now Button */}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Trophy className="text-white" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-black">FitQuest</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Ignite your child's passion for fitness and well-being with
                  Deep Connection's FitQuest—a fun, interactive program that
                  promotes physical, cognitive, social and emotional health and
                  builds lasting healthy habits. If you want to get your child
                  to realise their full potential, this quest is for your child!
                  FitQuest makes it easy and exciting for kids to stay active
                  and set fitness goals while developing their strengths and
                  confidence.
                </p>
                <div className="flex gap-4 items-center">
                  <Button asChild variant="outline">
                    <Link to="/programs/fitquest">Learn More</Link>
                  </Button>
                  {/* Removed Book Now Button */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialized Programs */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Specialized Programs
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our Programs which fits best for your child
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                to: "/programs/zenfuse",
                icon: <Shield className="text-white" size={24} />,
                title: "ZenFuse",
                tagline: "by Deep Connection",
                desc: "Troubled by how much time your child is spending on screens?",
              },
              {
                to: "/programs/resilikids",
                icon: <Heart className="text-white" size={24} />,
                title: "ResiliKids",
                tagline: "by Deep Connection",
                desc: "Is your child too shy? Does your child give up easily?",
              },
              {
                to: "/programs/nurturearc",
                icon: <Users className="text-white" size={24} />,
                title: "NurtureArc",
                tagline: "by Deep Connection",
                desc: "What if you could know each week what your child needs to develop holistically?",
              },
              {
                to: "/programs/gradeboost",
                icon: <Brain className="text-white" size={24} />,
                title: "GradeBoost",
                tagline: "by Deep Connection",
                desc: "Noticing a consistently low academic performance or a sudden drop in interest?",
              },
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <div>
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-black mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-6">
                      {item.tagline}
                    </p>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">{item.desc}</p>
                  <div className="flex gap-2 justify-center">
                    <Button asChild variant="outline" size="sm">
                      <Link to={item.to}>Learn More</Link>
                    </Button>
                    {/* Removed Book Now Button 
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
    {/*   <section className="bg-gray-900 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Book a free consultation to find the perfect program for your child
          </p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 rounded-full"
            onClick={() => openContactModal("consultation")}
          >
            Book FREE Consultation
          </Button>
        </div>
      </section>*/}

      {/* Contact Modal */}
      {/* <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        defaultService={selectedService}
      /> */}
    </div>
  );
}