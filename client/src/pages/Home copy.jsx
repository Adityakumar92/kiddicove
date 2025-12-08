/* Full updated code with enlarged icon sizes */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import girl from "@/assets/child.png";
import ServiceCard from "@/components/ServiceCard";
// import { Link } from "wouter"; // No longer needed for external links, but keeping for other potential internal links if they existed elsewhere
import { Brain, MessageCircle, Hand, GraduationCap, Heart, Sprout, UserCheck, Puzzle, Users, Star, } from "lucide-react";


export default function Home() {
    
    // Define the WhatsApp link
    var whatsbfs = "https://api.whatsapp.com/send?phone=919650450094&text=Consult%20Us%20FREE%20Now";
    var whatssycj = "https://api.whatsapp.com/send?phone=919650450094&text=Start%20your's%20Child%20Journey";
    var services = [
        {
            icon: Brain,
            title: "Behavioral Therapy (ABA)",
            description: "Behavioural Interventions and therapy for children when they develop unhealthy habits. Motivate and reinforce for better future.",
            bgColor: "bg-kiddi-blue",
        },
        {
            icon: MessageCircle,
            title: "Speech Therapy",
            description: "Treat speech delays, improve voice, language and communication skills",
            bgColor: "bg-[#DA2643]", // Changed to #DA2643
        },
        {
            icon: Hand,
            title: "Occupational Therapy",
            description: "Improve motor skills and daily living abilities",
            bgColor: "bg-kiddi-blue",
        },
        {
            icon: GraduationCap,
            title: "Special Education",
            description: "Personal attention to specially abled kids. Speech, remedial education, bridge courses to integrate them into schooling system, special support for autistic, learning disorders and ADHD children.",
            bgColor: "bg-[#DA2643]", // Changed to #DA2643
        },
        {
            icon: Heart,
            title: "Counselling for Kids and Teenagers",
            description: "Sometimes we need support to express our thoughts and emotions, get guidance and let children explore the world. Our experts enable a healthier mind and body for children and teenagers improving their bond with parents and society.",
            bgColor: "bg-kiddi-blue",
        },
        {
            icon: Sprout,
            title: "Early Intervention Therapy",
            description: "Programs for infants and toddlers to address developmental delays early",
            bgColor: "bg-[#DA2643]", // Changed to #DA2643
        },
    ];
    var features = [
        {
            icon: UserCheck,
            title: "Expert Team",
            description: "Highly qualified therapists and specialists. Best child experts in your city.",
            bgColor: "bg-kiddi-blue",
        },
        {
            icon: Puzzle,
            title: "Holistic Approach",
            description: "Integrating therapy with education and family support.",
            bgColor: "bg-[#DA2643]", // Changed to #DA2643
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
            description: "Actively involved in local communities to promote awareness and support for child development.",
            bgColor: "bg-[#DA2643]", // Changed to #DA2643
        },
    ];

    return (<>
      <Header />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-200 via-pink-100 to-blue-100 min-h-screen flex items-center">
        {/* Decorative bubbles */}
        <div className="absolute top-8 left-1/4 w-10 h-10 bg-white/50 rounded-full blur-sm animate-pulse"/>
        <div className="absolute bottom-16 left-16 w-6 h-6 bg-white/30 rounded-full blur-[2px] animate-bounce"/>
        <div className="absolute top-32 right-32 w-8 h-8 bg-white/40 rounded-full blur-[1px] animate-ping"/>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Text */}
            <div className="z-20 mt-[30px]">
              <h1 className="text-4xl font-bold mb-4">
                A Child <span className="text-kiddi-blue">Development</span>{" "}
                Center
              </h1>
              <p className="text-lg md:text-xl text-kiddi-text mb-8 leading-relaxed">
                Your Partner in Supporting Development Needs of Your Child
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-left">
              <a
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
              </a>
            </div>
            </div>

            {/* Image with blob + badge */}
            <div className="relative w-full max-w-md mx-auto z-10 flex items-end h-full">
              {/* Blob background */}
              <div className="absolute -top-12 -right-8 w-[130%] h-[130%] bg-kiddi-pink/10 rounded-full blur-2xl z-0"/>
              <img src={girl} alt="Indian children playing" className="w-full h-full object-bottom object-contain relative z-10 drop-shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kiddi-gray mb-6">
              About Kiddicove
            </h2>
            <p className="text-lg text-kiddi-text max-w-3xl mx-auto leading-relaxed">
              Kiddicove by Deep Connection is a premier child development center
              dedicated to supporting children with diverse learning and
              developmental needs. Our multidisciplinary approach combines
              evidence-based therapies with compassionate care to help every
              child reach their full potential.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#DA2643] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={36} />
               </div>

              <h3 className="text-xl font-semibold text-kiddi-gray mb-3">
                Our Mission
              </h3>
              <p className="text-kiddi-text">
                Empowering children and families through comprehensive
                developmental support and personalized care plans.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#DA2643] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Star className="text-white" size={36}/>
              </div>
              <h3 className="text-xl font-semibold text-kiddi-gray mb-3">
                Our Values
              </h3>
              <p className="text-kiddi-text">
                Compassion, excellence, innovation, and respect guide everything
                we do in supporting child development.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#DA2643] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={36}/>
              </div>
              <h3 className="text-xl font-semibold text-kiddi-gray mb-3">
                Our Approach
              </h3>
              <p className="text-kiddi-text">
                Holistic, evidence-based interventions that address mind, body,
                and overall well-being of each child.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-100 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kiddi-gray mb-6">
              Our Services
            </h2>
            <p className="text-lg text-kiddi-text max-w-3xl mx-auto">
              We offer comprehensive developmental services tailored to meet
              each child's unique needs and support their growth journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(function (service, index) { return (<ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} bgColor={service.bgColor}/>); })}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kiddi-gray mb-6">
              Three Pillars of Great Health
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 mb-6 shadow-xl h-full">
                <Brain className="w-24 h-24 text-white mb-6 mx-auto"/>
                <h3 className="text-2xl font-bold text-white mb-4">Mind</h3>
                <p className="text-blue-50">
                  Brain development, self awareness, inner strength, happiness,
                  peace of mind, strong self esteem and confidence
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-[#DA2643] rounded-3xl p-8 mb-6 shadow-xl h-full"> {/* Changed to #DA2643 */}
                <Heart className="w-24 h-24 text-white mb-6 mx-auto"/>
                <h3 className="text-2xl font-bold text-white mb-4">Body</h3>
                <p className="text-white"> {/* Changed text color for contrast */}
                  Comprehensive physical development for life long success in
                  sports, attaining fitness and developing habits for healthy
                  lifestyle
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-sky-500 rounded-3xl p-8 mb-6 shadow-xl h-full"> {/* Changed to bg-sky-500 */}
                <Sprout className="w-24 h-24 text-white mb-6 mx-auto"/>
                <h3 className="text-2xl font-bold text-white mb-4">Gut</h3>
                <p className="text-white"> {/* Changed text color for contrast */}
                  Gut is crucial for health. Behavioural and nutritional
                  guidance of recovery of gut health in children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-orange-100 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kiddi-gray mb-6">
              Why Choose Kiddicove?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(function (feature, index) { return (<div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-2">
                <div className={"".concat(feature.bgColor, " rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6")}>
                  <feature.icon className="text-white" size={36}/>
                </div>
                <h3 className="text-xl font-semibold text-kiddi-gray mb-4">
                  {feature.title}
                </h3>
                <p className="text-kiddi-text">{feature.description}</p>
              </div>); })}
          </div>
        </div>
      </section>

      <Footer />
    </>);
}