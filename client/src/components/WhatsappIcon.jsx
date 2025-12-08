import whatsappIcon from "@/assets/whatsapp.jpeg";

export default function WhatsappIcon() {
  return (
   <a
     href="https://wa.me/919650450094"   // add your WhatsApp number
     target="_blank"
     rel="noopener noreferrer"
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