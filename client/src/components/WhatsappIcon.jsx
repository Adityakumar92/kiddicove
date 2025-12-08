import whatsappIcon from "@/assets/whatsapp.jpeg";
import { trackWhatsAppClick } from "@/utils/trackConversion";

export default function WhatsappIcon() {
  return (
    <a
      href="https://wa.me/918595078224"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        trackWhatsAppClick("User clicked WhatsApp floating icon");
      }}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-xl 
                flex items-center justify-center bg-green z-50 
                hover:scale-110 transition-transform"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-18 h-18 object-contain rounded-full"
      />
    </a>

  );
}