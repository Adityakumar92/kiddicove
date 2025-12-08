// Example: How to add tracking to Gurugram.jsx
// This file shows the specific changes needed

// ============================================
// STEP 1: Add imports at the top of the file
// ============================================
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Brain, Hand, Zap, Users, Mic, Apple, Calendar, MapPin, Phone, Clock } from "lucide-react";
// ADD THIS LINE:
import { trackCenterPageView, trackPhoneClick, trackWhatsAppClick, trackSessionBooking } from "@/utils/trackConversion";

// ============================================
// STEP 2: Add useEffect to track page view
// ============================================
export default function Gurugram() {
    // ADD THESE LINES after function declaration:
    useEffect(() => {
        trackCenterPageView('Gurugram');
    }, []);

    var services = [
        // ... rest of the code
    ];

    // ============================================
    // STEP 3: Make phone numbers clickable with tracking
    // ============================================

    // FIND THIS CODE (around line 67-70):
    /*
    <div className="flex items-center space-x-2 text-kiddi-text">
      <Phone size={20}/>
      <span>+91 9650450094</span>
    </div>
    */

    // REPLACE WITH:
    /*
    <div className="flex items-center space-x-2 text-kiddi-text">
      <Phone size={20}/>
      <a 
        href="tel:+919650450094" 
        onClick={() => trackPhoneClick('+91 9650450094')}
        className="hover:text-kiddi-blue transition-colors cursor-pointer"
      >
        +91 9650450094
      </a>
    </div>
    */

    // ============================================
    // STEP 4: Add tracking to WhatsApp buttons
    // ============================================

    // FIND THIS CODE (around line 72-75):
    /*
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-kiddi-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center">
      <Calendar size={20} className="inline mr-2"/>
      Book Your FREE Session
    </a>
    */

    // REPLACE WITH:
    /*
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
      <Calendar size={20} className="inline mr-2"/>
      Book Your FREE Session
    </a>
    */

    // ============================================
    // STEP 5: Update phone number in contact section
    // ============================================

    // FIND THIS CODE (around line 261):
    /*
    <p className="text-kiddi-text">Phone: +91 9650450094</p>
    */

    // REPLACE WITH:
    /*
    <p className="text-kiddi-text">
      Phone: <a 
        href="tel:+919650450094" 
        onClick={() => trackPhoneClick('+91 9650450094')}
        className="hover:text-kiddi-blue transition-colors cursor-pointer"
      >
        +91 9650450094
      </a>
    </p>
    */

    // ============================================
    // STEP 6: Add tracking to CTA section buttons
    // ============================================

    // FIND THIS CODE (around line 287-293):
    /*
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 transition-colors duration-200 shadow-lg transform hover:scale-105 inline-flex items-center justify-center">
      <Calendar size={20} className="inline mr-2"/>
      Book Your FREE Session
    </a>
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="border-2 border-blue-300 text-blue-100 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-300 hover:text-blue-800 transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center">
      Schedule a Tour
    </a>
    */

    // REPLACE WITH:
    /*
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
      <Calendar size={20} className="inline mr-2"/>
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
    */
}

// ============================================
// TESTING
// ============================================
/*
After making these changes:

1. Open the browser console (F12)
2. Navigate to the Gurugram page
3. You should see: "Center page view tracked: Gurugram"
4. Click on a phone number - you should see: "Phone click tracked: +91 9650450094"
5. Click on a WhatsApp button - you should see:
   - "WhatsApp click tracked: Book Your FREE Session - Hero"
   - "Session booking tracked from: Gurugram Hero Section"

All tracking events will also be sent to Google Analytics and Google Ads (once conversion labels are configured).
*/
