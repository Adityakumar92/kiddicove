# Quick Reference: Conversion Tracking

## Import Statement
```javascript
import { useEffect } from "react";
import { trackCenterPageView, trackPhoneClick, trackWhatsAppClick, trackSessionBooking } from "@/utils/trackConversion";
```

## Track Page View
```javascript
useEffect(() => {
    trackCenterPageView('Gurugram'); // or 'Dehradun', 'Home', etc.
}, []);
```

## Track Phone Click
```javascript
<a 
  href="tel:+919650450094" 
  onClick={() => trackPhoneClick('+91 9650450094')}
>
  +91 9650450094
</a>
```

## Track WhatsApp Click
```javascript
<a 
  href={whatsappLink}
  onClick={() => trackWhatsAppClick('Book Your FREE Session')}
>
  Contact on WhatsApp
</a>
```

## Track Session Booking
```javascript
<a 
  href={whatsappLink}
  onClick={() => {
    trackWhatsAppClick('Book Your FREE Session');
    trackSessionBooking('Hero Section');
  }}
>
  Book Your FREE Session
</a>
```

## Testing Checklist
- [ ] Open browser console (F12)
- [ ] Navigate to page
- [ ] Check for "Page view tracked" message
- [ ] Click phone number
- [ ] Check for "Phone click tracked" message
- [ ] Click WhatsApp button
- [ ] Check for "WhatsApp click tracked" message
- [ ] Check for "Session booking tracked" message

## Common Locations to Add Tracking

### Phone Numbers
- Hero section contact info
- Footer contact section
- Facility details section
- Header (if phone number is displayed)

### WhatsApp Buttons
- Hero section CTA
- CTA section at bottom of page
- Floating WhatsApp icon
- Contact forms

### Session Booking
- "Book Your FREE Session" buttons
- "Schedule a Tour" buttons
- "Consult Us Now" buttons
- Any booking-related CTAs

## Files to Update
1. `client/src/pages/centers/Gurugram.jsx`
2. `client/src/pages/centers/Dehradun.jsx`
3. `client/src/pages/Home.jsx`
4. `client/src/pages/Contact.jsx`
5. `client/src/components/Header.jsx`
6. `client/src/components/Footer.jsx`
7. `client/src/components/WhatsappIcon.jsx`
8. `client/src/components/ConsultUs.jsx`
