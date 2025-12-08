export default function ServiceCard({ icon: Icon, title, description, bgColor }) {
  return (
    <div className="
        bg-white rounded-3xl shadow-lg p-8 
        flex flex-col h-full 
        transition-all duration-300 
        hover:shadow-2xl hover:-translate-y-2
      "
    >
      {/* ICON */}
      <div className="flex justify-center mb-6">
        <div className={`${bgColor} w-20 h-20 rounded-full flex items-center justify-center`}>
          <Icon size={36} className="text-white" />
        </div>
      </div>

      {/* TITLE + DESCRIPTION WRAPPER */}
      <div className="flex flex-col flex-grow text-center">
        <h3 className="text-xl font-semibold text-kiddi-gray mb-3">
          {title}
        </h3>

        <p className="text-kiddi-text leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
}






// import { LucideIcon } from "lucide-react";

// interface ServiceCardProps {
//   icon: LucideIcon;
//   title: string;
//   description: string;
//   bgColor?: string;
// }

// export default function ServiceCard({
//   icon: Icon,
//   title,
//   description,
//   bgColor = "bg-kiddi-blue",
// }: ServiceCardProps) {
//   return (
//     <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200 text-center">
//       <div
//         className={`${bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}
//       >
//         <Icon className="text-2xl text-white" size={24} />
//       </div>
//       <h3 className="text-xl font-semibold text-kiddi-gray mb-4">{title}</h3>
//       <p className="text-kiddi-text mb-6">{description}</p>
//     </div>
//   );
// }
