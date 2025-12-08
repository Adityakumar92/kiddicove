import React, { useState } from 'react';
import {
  Heart,
  User,
  Star,
  BookOpen,
  ClipboardList,
  ChevronDown,
  ChevronUp,
  Award,
  Users,
  Brain,
  MessageSquare,
  Sparkles,
  Zap,
  Globe,
  CircleCheck,
  CalendarCheck,
} from 'lucide-react';
import girl from "@/assets/child.png";

// Mock Data for the website sections
const STATS_DATA = [
  { value: '4.7', label: 'Client Rating', icon: Star, color: 'text-yellow-600' },
  { value: '1000+', label: 'Happy Families', icon: Users, color: 'text-red-600' },
  { value: '300+', label: 'Sessions Daily', icon: CalendarCheck, color: 'text-green-600' },
  { value: '30', label: 'Years of Experience', icon: Award, color: 'text-blue-600' },
];

const DOCTORS = [
  {
    name: 'Dr. Priya Grover',
    title: 'Consultant Pediatrician',
    specialization: 'Developmental Paediatrics, Autism',
    imagePlaceholder: 'https://placehold.co/100x100/ADD8E6/000?text=Dr',
    link: '#book-dr-priya'
  },
  {
    name: 'Dr. Utkarsh Narula',
    title: 'Developmental Therapist',
    specialization: 'Clinical Psychology, ADHD, CP',
    imagePlaceholder: 'https://placehold.co/100x100/F08080/000?text=Dr',
    link: '#book-dr-utkarsh'
  },
];

const THERAPIES = [
  {
    id: 'aba',
    name: 'ABA Therapy',
    description: 'Applied Behavior Analysis (ABA) is a science-based approach focusing on improving specific behaviors, such as social skills, communication, and learning, through positive reinforcement. It is highly effective for children on the Autism Spectrum.',
    keywords: 'Learning, Communication, Behavior Management',
    imagePlaceholder: 'https://placehold.co/300x200/90EE90/000?text=ABA+Therapy',
  },
  {
    id: 'ot',
    name: 'Occupational Therapy',
    description: 'OT helps children develop the skills needed for daily living activities, including fine motor skills (writing, cutting), self-care (dressing, feeding), and sensory processing. This therapy enhances independence and participation in school and play.',
    keywords: 'Motor Skills, Sensory Processing, Self-Care',
    imagePlaceholder: 'https://placehold.co/300x200/ADD8E6/000?text=OT+Therapy',
  },
  {
    id: 'speech',
    name: 'Speech Therapy',
    description: 'Speech-Language Pathology addresses challenges in communication, including speech production, language comprehension, and social communication skills. It helps children articulate sounds correctly and express themselves effectively.',
    keywords: 'Articulation, Language, Social Communication',
    imagePlaceholder: 'https://placehold.co/300x200/FFB6C1/000?text=Speech+Therapy',
  },
  {
    id: 'special',
    name: 'Special Education',
    description: 'Tailored instruction designed for students with special needs to address individual differences and disabilities. It involves modified content, teaching methodologies, and delivery to meet specific learning goals.',
    keywords: 'Individualized Learning, Curriculum Adaptation, Support',
    imagePlaceholder: 'https://placehold.co/300x200/F0E68C/000?text=Special+Ed',
  },
];

const CONDITIONS = [
  'Autism Spectrum Disorder (ASD)',
  'Attention Deficit Hyperactivity Disorder (ADHD)',
  'Global Developmental Delay (GDD)',
  'Cerebral Palsy (CP)',
  'Learning Disabilities',
  'Speech & Language Delays',
];

const OFFERS = [
  { icon: Heart, title: 'Personalized Approach', description: 'Tailored plans for every child\'s unique needs.' },
  { icon: Sparkles, title: 'Positive & Fun Environment', description: 'Learning through engaging and playful activities.' },
  { icon: Users, title: 'Expert Team', description: 'Certified professionals with decades of experience.' },
  { icon: Zap, title: 'Holistic Development', description: 'Focus on physical, cognitive, and social growth.' },
  { icon: Brain, title: 'Early Intervention', description: 'Proactive support for best long-term outcomes.' },
  { icon: BookOpen, title: 'Evidence-Based Programs', description: 'Therapies rooted in proven scientific methods.' },
];

const FAQS = [
  {
    q: 'What age group do you cater to?',
    a: 'We specialize in early intervention and cater primarily to children from 18 months up to 12 years of age.',
  },
  {
    q: 'How long are the therapy sessions?',
    a: 'Sessions typically range from 45 minutes to 1 hour, depending on the child\'s personalized plan and tolerance.',
  },
  {
    q: 'Do you offer a free initial consultation?',
    a: 'We offer a detailed paid assessment to understand your child\'s profile completely before starting any program.',
  },
  {
    q: 'Is parent involvement required?',
    a: 'Yes, parent training and active involvement are crucial for the success and generalization of skills learned in therapy.',
  },
];


// Utility for API Calls (Mock Implementation)
const makeApiCall = async (payload, endpoint, method = 'POST') => {
  // Mock function for the mandatory API call structure
  const apiKey = "";
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

  // This is a placeholder for actual LLM interaction.
  // We will simply return a mock success for UI purposes.
  console.log(`Mock API call to: ${endpoint} with method: ${method}`, payload);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        text: "Appointment booked successfully! We will contact you soon.",
        sources: []
      });
    }, 1500); // Simulate network latency
  });
};


// Main Application Component
const App = () => {
  const [activeTherapy, setActiveTherapy] = useState(THERAPIES[0].id);
  const [openFaq, setOpenFaq] = useState(null);
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', city: '', concern: '' });
  const [bookingStatus, setBookingStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const activeTherapyDetails = THERAPIES.find(t => t.id === activeTherapy);

  const handleFaqToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setBookingStatus(null);
    
    // Simulate API call for booking confirmation
    try {
      // In a real app, you would send this to your backend/Firestore or use LLM for processing
      // Mocking the call structure as required by instructions
      const systemPrompt = "Process this new appointment booking request for a pediatric therapy center.";
      const userQuery = `New booking request details: ${JSON.stringify(formState)}`;

      const apiResponse = await makeApiCall({
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
      }, 'bookAppointment');

      setBookingStatus(apiResponse.text);

    } catch (error) {
      setBookingStatus("Booking failed. Please try again later.");
      console.error("Booking error:", error);
    } finally {
      setIsLoading(false);
      // setFormState({ name: '', email: '', phone: '', city: '', concern: '' }); // Optionally clear form
    }
  };

  const HeroSection = () => (
    <div className="relative bg-blue-50/70 pt-20 lg:pt-0">
      {/* Background Image/Shape */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ 
        backgroundImage: "url('https://placehold.co/1920x500/E6F7FF/26789C?text=Child+Development+Center+Banner+Image')" 
      }}>
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20 flex flex-col lg:flex-row items-center">
        
        {/* Left Side: Child Image and Main Title (Placeholder) */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-md">
            Empowering Every Child's Potential
          </h1>
          <p className="text-lg text-blue-800 mb-8">
            Expert Developmental, Behavioral, and Rehabilitation Services for Children.
          </p>
          <div className="hidden lg:block">
            {/* Placeholder for the large child image on desktop */}
             <img 
                src={girl} 
                alt="Happy child smiling" 
                className="w-full h-auto rounded-xl shadow-2xl object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/93c5fd/000?text=Happy+Child+Hero+Image" }}
            />
          </div>
        </div>

        {/* Right Side: Booking Form */}
        <div className="lg:w-1/2 w-full lg:pl-10 mt-8 lg:mt-0">
          <form onSubmit={handleBookingSubmit} className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl border border-blue-200">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b pb-2">Book your Appointment</h2>
            
            <div className="space-y-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Child's Full Name *" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                value={formState.name}
                onChange={handleChange}
              />
              <div className="flex space-x-4">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Parent's Email *" 
                  required 
                  className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Contact Phone *" 
                  required 
                  className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  value={formState.phone}
                  onChange={handleChange}
                />
              </div>
              <input 
                type="text" 
                name="city" 
                placeholder="City / Area" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                value={formState.city}
                onChange={handleChange}
              />
              <select 
                name="concern" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                value={formState.concern}
                onChange={handleChange}
              >
                <option value="" disabled>Select Primary Concern *</option>
                <option value="speech">Speech Delay</option>
                <option value="autism">Autism Related</option>
                <option value="adhd">ADHD / Behavior</option>
                <option value="ot">Motor/Sensory Issues</option>
                <option value="other">Other Developmental Issue</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.01] flex items-center justify-center disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Booking...
                </>
              ) : 'Confirm and Book'}
            </button>
            
            {bookingStatus && (
              <p className={`mt-4 text-center font-medium ${bookingStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                {bookingStatus}
              </p>
            )}
            <p className="text-xs text-gray-500 mt-3 text-center">Your privacy is important to us. Read our <a href="#" className="underline">Privacy Policy.</a></p>
          </form>
        </div>
      </div>
    </div>
  );

  const StatsBar = () => (
    <div className="bg-red-500/90 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {STATS_DATA.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-2">
              <p className="text-3xl sm:text-4xl font-extrabold text-white">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-white/90 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const DoctorsSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 border-b-4 border-orange-400 inline-block pb-1">
          Our Doctors
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {DOCTORS.map((doctor, index) => (
            <div 
              key={index} 
              className="bg-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 w-full max-w-sm"
            >
              <img 
                src={doctor.imagePlaceholder} 
                alt={doctor.name} 
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-400 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src=doctor.imagePlaceholder }}
              />
              <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{doctor.title}</p>
              <div className="text-sm text-gray-600 space-y-1">
                <p><span className="font-semibold">Specializations:</span></p>
                <p className="text-xs">{doctor.specialization}</p>
              </div>
              <a href={doctor.link} className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-md">
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const TherapiesSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 border-b-4 border-orange-400 inline-block pb-1">
          Therapies we provide
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Side: Therapy Tabs */}
          <div className="lg:w-1/3 w-full bg-blue-50 p-4 rounded-xl shadow-md">
            {THERAPIES.map((therapy) => (
              <button
                key={therapy.id}
                onClick={() => setActiveTherapy(therapy.id)}
                className={`w-full text-left p-3 my-2 rounded-lg transition duration-200 font-medium ${
                  activeTherapy === therapy.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-100'
                }`}
              >
                {therapy.name}
              </button>
            ))}
          </div>
          
          {/* Right Side: Therapy Details */}
          <div className="lg:w-2/3 w-full bg-white p-6 rounded-xl shadow-xl border border-blue-200">
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <img 
                src={activeTherapyDetails.imagePlaceholder} 
                alt={activeTherapyDetails.name} 
                className="w-full sm:w-1/2 h-auto rounded-xl shadow-lg object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src=activeTherapyDetails.imagePlaceholder }}
              />
              <div className="sm:w-1/2 text-left">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">{activeTherapyDetails.name}</h3>
                <p className="text-gray-700 mb-4">{activeTherapyDetails.description}</p>
                <p className="text-sm text-gray-500 font-medium">
                  Focus: {activeTherapyDetails.keywords}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

//   const WhyChooseUsSection = () => (
//     <section className="py-16 bg-blue-50/70">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h3 className="text-xl font-semibold text-gray-600 mb-2">Why Choose Us</h3>
//         <h2 className="text-3xl font-bold text-gray-800 mb-10">
//           What We Offer
//         </h2>
        
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
//           {OFFERS.map((item, index) => (
//             <div key={index} className="flex flex-col items-center p-4">
//               <item.icon className={`w-10 h-10 ${index % 2 === 0 ? 'text-orange-500' : 'text-blue-600'} mb-3`} />
//               <p className="font-semibold text-lg text-gray-800 mb-1">{item.title}</p>
//               <p className="text-sm text-gray-500">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
  
  const TestimonialAndFAQSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
        
        {/* Left Side: Testimonial */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-orange-400 inline-block pb-1">
            What Our Patients Say
          </h2>
          <div className="bg-blue-50 p-6 rounded-xl shadow-lg border-l-4 border-blue-500 relative">
            <p className="text-sm font-semibold text-blue-700 mb-2">Smitha (Mother)</p>
            <div className="flex text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />)}
            </div>
            <p className="text-lg italic text-gray-700 leading-relaxed">
              "We have seen remarkable changes in our son's communication and behavior since starting therapy here. The personalized attention and supportive environment make all the difference. Highly recommend to any family seeking developmental support."
            </p>
            <div className="absolute left-0 bottom-0 transform translate-x-4 translate-y-2 text-blue-500">
                <MessageSquare className="w-8 h-8 fill-blue-500 stroke-0" />
            </div>
          </div>
          
          <div className="mt-8 flex justify-center space-x-4">
              <Globe className="w-8 h-8 text-blue-500 hover:text-blue-700 transition cursor-pointer" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png" alt="Google" className="w-8 h-8 opacity-70 hover:opacity-100 transition cursor-pointer" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Facebook_icon_2017.svg/2048px-Facebook_icon_2017.svg.png" alt="Facebook" className="w-8 h-8 opacity-70 hover:opacity-100 transition cursor-pointer" />
          </div>

        </div>

        {/* Right Side: FAQ */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-orange-400 inline-block pb-1">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200">
                <button
                  className="w-full p-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => handleFaqToggle(index)}
                >
                  <span className="text-base font-semibold text-gray-800">{`${index + 1}. ${faq.q}`}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-4 pt-0 text-gray-600 border-t border-gray-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );

  const ConditionsTreatedSection = () => (
    <div className="bg-blue-100/70 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-8">Conditions we treat</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CONDITIONS.map((condition, index) => (
            <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200 border border-blue-200">
              <CircleCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <p className="text-gray-700 font-medium">{condition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  const Footer = () => (
    <footer className="bg-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Child Development Center. All rights reserved.</p>
        <p className="mt-2">Designed for the future of every child.</p>
      </div>
    </footer>
  );


  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <style>{`
        /* Load Inter font (best practice for Tailwind/modern design) */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      
      {/* 1. Hero Section (Image and Booking Form) */}
      <HeroSection />

      {/* 2. Stats Bar */}
      <StatsBar />

      {/* 3. Doctors Section */}
      {/* <DoctorsSection /> */}

      {/* 4. Therapies Section */}
      <TherapiesSection />
      
      {/* 5. Conditions Treated Section (Lower Banner Area) */}
      <ConditionsTreatedSection />

      {/* 6. Why Choose Us / What We Offer */}
      {/* <WhyChooseUsSection /> */}

      {/* 7 & 8. Testimonials and FAQ */}
      <TestimonialAndFAQSection />
      
      {/* 9. Footer */}
      <Footer />
    </div>
  );
};

export default App;