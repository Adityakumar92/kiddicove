# Conversion Tracking Implementation Guide

## Overview
This guide explains how to implement Google Ads conversion tracking across the Kiddicove website using the `trackConversion` utility.

## Tracking Utility Location
`client/src/utils/trackConversion.js`

## Available Tracking Functions

### 1. `trackPageView(pageName)`
Tracks when a user views a specific page.

**Usage:**
```javascript
import { trackPageView } from "@/utils/trackConversion";
import { useEffect } from "react";

export default function MyPage() {
  useEffect(() => {
    trackPageView('Page Name');
  }, []);
  
  return <div>...</div>;
}
```

### 2. `trackPhoneClick(phoneNumber)`
Tracks when a user clicks on a phone number to call.

**Usage:**
```javascript
import { trackPhoneClick } from "@/utils/trackConversion";

<a 
  href="tel:+919650450094" 
  onClick={() => trackPhoneClick('+91 9650450094')}
  className="hover:text-kiddi-blue transition-colors"
>
  +91 9650450094
</a>
```

### 3. `trackWhatsAppClick(message)`
Tracks when a user clicks on a WhatsApp link.

**Usage:**
```javascript
import { trackWhatsAppClick } from "@/utils/trackConversion";

<a 
  href={whatsappLink} 
  target="_blank" 
  rel="noopener noreferrer" 
  onClick={() => trackWhatsAppClick('Book Your FREE Session')}
>
  Contact on WhatsApp
</a>
```

### 4. `trackSessionBooking(source)`
Tracks when a user attempts to book a session.

**Usage:**
```javascript
import { trackSessionBooking } from "@/utils/trackConversion";

<a 
  href={whatsappLink} 
  target="_blank" 
  rel="noopener noreferrer" 
  onClick={() => {
    trackWhatsAppClick('Book Your FREE Session');
    trackSessionBooking('Hero Section');
  }}
>
  Book Your FREE Session
</a>
```

### 5. `trackCenterPageView(centerName)`
Tracks when a user views a specific center page.

**Usage:**
```javascript
import { trackCenterPageView } from "@/utils/trackConversion";
import { useEffect } from "react";

export default function GurugramCenter() {
  useEffect(() => {
    trackCenterPageView('Gurugram');
  }, []);
  
  return <div>...</div>;
}
```

### 6. `trackFormSubmission(formName, formData)`
Tracks when a user submits a form.

**Usage:**
```javascript
import { trackFormSubmission } from "@/utils/trackConversion";

const handleSubmit = (e) => {
  e.preventDefault();
  
  trackFormSubmission('Contact Form', {
    name: formData.name,
    email: formData.email
  });
  
  // Submit form...
};
```

### 7. `trackButtonClick(buttonName, buttonLocation)`
Tracks when a user clicks a button.

**Usage:**
```javascript
import { trackButtonClick } from "@/utils/trackConversion";

<button 
  onClick={() => {
    trackButtonClick('Learn More', 'Services Section');
    // Other logic...
  }}
>
  Learn More
</button>
```

## Implementation Example for Gurugram.jsx

Here's how to implement tracking in the Gurugram center page:

### Step 1: Add Imports
```javascript
import { useEffect } from "react";
import { trackCenterPageView, trackPhoneClick, trackWhatsAppClick, trackSessionBooking } from "@/utils/trackConversion";
```

### Step 2: Track Page View
```javascript
export default function Gurugram() {
    // Track page view on component mount
    useEffect(() => {
        trackCenterPageView('Gurugram');
    }, []);
    
    // Rest of component...
}
```

### Step 3: Track Phone Clicks
Replace static phone numbers with clickable tracked links:

**Before:**
```javascript
<span>+91 9650450094</span>
```

**After:**
```javascript
<a 
  href="tel:+919650450094" 
  onClick={() => trackPhoneClick('+91 9650450094')}
  className="hover:text-kiddi-blue transition-colors"
>
  +91 9650450094
</a>
```

### Step 4: Track WhatsApp & Session Booking Clicks
Add tracking to WhatsApp buttons:

**Before:**
```javascript
<a href={whatsappLink} target="_blank" rel="noopener noreferrer">
  Book Your FREE Session
</a>
```

**After:**
```javascript
<a 
  href={whatsappLink} 
  target="_blank" 
  rel="noopener noreferrer" 
  onClick={() => {
    trackWhatsAppClick('Book Your FREE Session - Hero');
    trackSessionBooking('Gurugram Hero Section');
  }}
>
  Book Your FREE Session
</a>
```

## Setting Up Google Ads Conversion Labels

The tracking utility includes placeholders for Google Ads conversion labels. To enable actual conversion tracking in Google Ads:

1. Go to your Google Ads account
2. Navigate to Tools & Settings > Conversions
3. Create a new conversion action for each type:
   - Phone Calls
   - WhatsApp Clicks
   - Session Bookings
   - Form Submissions
   - Page Views (if needed)

4. Copy the conversion label for each action

5. Update `trackConversion.js` to uncomment and add your conversion labels:

```javascript
export const trackPhoneClick = (phoneNumber) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_click', {
      event_category: 'Contact',
      event_label: phoneNumber,
      value: phoneNumber
    });
    
    // Replace 'YOUR_PHONE_CLICK_LABEL' with actual label from Google Ads
    trackConversion('YOUR_PHONE_CLICK_LABEL', {
      phone_number: phoneNumber
    });
    
    console.log('Phone click tracked:', phoneNumber);
  }
};
```

## Testing Tracking

### 1. Check Browser Console
All tracking events are logged to the console. Open DevTools (F12) and check the Console tab for messages like:
- "Page view tracked: Gurugram"
- "Phone click tracked: +91 9650450094"
- "WhatsApp click tracked: Book Your FREE Session"

### 2. Check Google Tag Assistant
1. Install the [Google Tag Assistant Chrome Extension](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Navigate to your website
3. Click the extension icon to see all Google tags firing
4. Verify that gtag events are being sent

### 3. Check Google Analytics Real-Time Reports
1. Go to Google Analytics
2. Navigate to Real-Time > Events
3. Perform actions on your website (click phone numbers, WhatsApp links, etc.)
4. Verify events appear in real-time

### 4. Check Google Ads Conversions
1. Go to Google Ads
2. Navigate to Tools & Settings > Conversions
3. Check the "Recent conversions" column
4. Note: It may take 24-48 hours for conversions to appear

## Pages to Implement Tracking

### High Priority
1. ✅ **Gurugram.jsx** - Center page with contact info
2. **Dehradun.jsx** - Center page with contact info
3. **Centers.jsx** - Main centers listing page
4. **Home.jsx** - Homepage with main CTA
5. **Contact.jsx** - Contact page with form

### Medium Priority
6. **About.jsx** - About page
7. **Programs.jsx** - Programs listing
8. **CWP.jsx** - Child Wellness Program
9. **MAP.jsx** - MAP Program

### Components to Track
- **Header.jsx** - Phone number in header
- **Footer.jsx** - Contact info in footer
- **ConsultUs.jsx** - Consultation form
- **WhatsappIcon.jsx** - Floating WhatsApp button

## Best Practices

1. **Be Descriptive**: Use clear, descriptive names for tracking events
   - Good: `trackSessionBooking('Gurugram Hero Section')`
   - Bad: `trackSessionBooking('button1')`

2. **Track User Intent**: Track actions that indicate user interest
   - Phone clicks
   - WhatsApp clicks
   - Form submissions
   - Session booking attempts

3. **Don't Over-Track**: Avoid tracking every single click
   - Focus on conversion-related actions
   - Track meaningful user interactions

4. **Test Thoroughly**: Always test tracking in development before deploying
   - Check console logs
   - Verify with Google Tag Assistant
   - Test in different browsers

5. **Privacy Compliance**: Ensure tracking complies with privacy laws
   - Don't track personally identifiable information (PII)
   - Implement cookie consent if required
   - Follow GDPR/CCPA guidelines

## Troubleshooting

### Events not showing in console
- Check if `trackConversion.js` is imported correctly
- Verify the import path is correct (`@/utils/trackConversion`)
- Check for JavaScript errors in console

### Events showing in console but not in Google Ads
- Verify Google Tag is loaded (check `window.gtag` exists)
- Check Google Ads conversion labels are configured
- Wait 24-48 hours for data to appear in Google Ads
- Verify the Google Ads ID matches (`AW-17729194955`)

### TypeScript errors
- If using TypeScript, you may need to add type definitions
- Create `trackConversion.d.ts` for type safety

## Next Steps

1. Implement tracking in all center pages (Gurugram, Dehradun)
2. Add tracking to the Home page
3. Implement form submission tracking in Contact and ConsultUs components
4. Set up conversion labels in Google Ads
5. Test all tracking events
6. Monitor conversion data in Google Ads

## Support

For questions or issues with tracking implementation, refer to:
- [Google Ads Conversion Tracking Documentation](https://support.google.com/google-ads/answer/1722022)
- [Google Tag Manager Documentation](https://developers.google.com/tag-platform/gtagjs)
- [Google Analytics 4 Events](https://developers.google.com/analytics/devguides/collection/ga4/events)
