import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div
                className="absolute inset-0"
                onClick={onClose}
            />

            {/* Centered modal */}
            <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-xl mx-auto 
                            max-h-[90vh] overflow-y-auto p-6">
                
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                >
                    <X size={20} />
                </button>

                {children}
            </div>
        </div>
    );
}