// Conversion label from Google Ads email (Dec 5, 2025)
const CONTACT_CONVERSION_LABEL = 'hhYVCILQzMMbEMuX-IVC';

/**
 * Track a conversion event
 * @param {string} conversionLabel
 * @param {object} options
 */
export const trackConversion = (conversionLabel, options = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
            'send_to': `AW-17729194955/${conversionLabel}`,
            ...options
        });
        console.log('✅ Conversion tracked:', conversionLabel, options);
    } else {
        console.warn('⚠️ Google Tag (gtag) not loaded');
    }
};

/**
 * Track page view conversion
 * @param {string} pageName - Name of the page being viewed
 */
export const trackPageView = (pageName) => {
    if (typeof window !== 'undefined' && window.gtag) {
        // Track page view
        window.gtag('event', 'page_view', {
            page_title: pageName,
            page_location: window.location.href,
            page_path: window.location.pathname
        });

        console.log('📄 Page view tracked:', pageName);
    }
};

/**
 * Track phone number click (call conversion)
 * @param {string} phoneNumber - The phone number that was clicked
 */
export const trackPhoneClick = (phoneNumber) => {
    if (typeof window !== 'undefined' && window.gtag) {
        // Track as a general event
        window.gtag('event', 'phone_click', {
            event_category: 'Contact',
            event_label: phoneNumber,
            value: phoneNumber
        });

        // Track as Google Ads conversion
        trackConversion(CONTACT_CONVERSION_LABEL, {
            event_category: 'Contact',
            event_label: `Phone: ${phoneNumber}`
        });

        console.log('📞 Phone click tracked:', phoneNumber);
    }
};

/**
 * Track WhatsApp link click
 * @param {string} message - The pre-filled message in the WhatsApp link
 */
export const trackWhatsAppClick = (message) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'whatsapp_click', {
            event_category: 'Contact',
            event_label: message,
            value: message
        });

        // Track as Google Ads conversion
        trackConversion(CONTACT_CONVERSION_LABEL, {
            event_category: 'Contact',
            event_label: `WhatsApp: ${message}`
        });

        console.log('💬 WhatsApp click tracked:', message);
    }
};

/**
 * Track form submission
 * @param {string} formName
 * @param {object} formData
 */
export const trackFormSubmission = (formName, formData = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submission', {
            event_category: 'Form',
            event_label: formName,
            ...formData
        });

        // Track as Google Ads conversion
        trackConversion(CONTACT_CONVERSION_LABEL, {
            event_category: 'Form',
            event_label: `Form: ${formName}`,
            ...formData
        });

        console.log('📝 Form submission tracked:', formName, formData);
    }
};

/**
 * Track button click
 * @param {string} buttonName - Name/label of the button clicked
 * @param {string} buttonLocation - Where the button is located (e.g., 'hero', 'footer')
 */
export const trackButtonClick = (buttonName, buttonLocation = '') => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'button_click', {
            event_category: 'Engagement',
            event_label: buttonName,
            button_location: buttonLocation
        });

        console.log('🔘 Button click tracked:', buttonName, buttonLocation);
    }
};

/**
 * Track center page visit
 * @param {string} centerName - Name of the center (e.g., 'Gurugram', 'Dehradun')
 */
export const trackCenterPageView = (centerName) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'center_page_view', {
            event_category: 'Centers',
            event_label: centerName,
            page_location: window.location.href
        });

        // console.log('🏢 Center page view tracked:', centerName);
    }
};

/**
 * Track session booking attempt
 * @param {string} source - Where the booking was initiated from
 */
export const trackSessionBooking = (source = '') => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'session_booking', {
            event_category: 'Conversion',
            event_label: source,
            value: 1
        });

        // Track as Google Ads conversion
        trackConversion(CONTACT_CONVERSION_LABEL, {
            event_category: 'Conversion',
            event_label: `Booking: ${source}`,
            value: 1
        });

        console.log('📅 Session booking tracked from:', source);
    }
};

export default {
    trackConversion,
    trackPageView,
    trackPhoneClick,
    trackWhatsAppClick,
    trackFormSubmission,
    trackButtonClick,
    trackCenterPageView,
    trackSessionBooking
};
