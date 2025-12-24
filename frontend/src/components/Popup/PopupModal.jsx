import { X } from "lucide-react";

const PopupModal = ({ image, onClose }) => {
    return (
        <div className="fixed inset-0 z-[999] bg-black/60 flex items-start md:items-center justify-center px-4 pt-24 md:pt-0">
            <div className="relative bg-white rounded-xl max-w-xl w-full overflow-hidden">

            
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-10 bg-white rounded-full p-1 shadow hover:scale-105 transition"
                >
                    <X size={18} />
                </button>

        
                <img
                    src={image}
                    alt="popup"
                    className="w-full max-h-[70vh] md:max-h-[80vh] object-contain"
                />
            </div>
        </div>
    );
};

export default PopupModal;
