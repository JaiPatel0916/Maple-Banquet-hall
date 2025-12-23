import { X } from "lucide-react";

const PopupModal = ({ image, onClose }) => {
    return (
        <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center px-4">
            <div className="relative bg-white rounded-xl max-w-xl w-full overflow-hidden">

                {/* CLOSE BUTTON */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 bg-white rounded-full p-1 shadow"
                >
                    <X size={18} />
                </button>

                {/* IMAGE */}
                <img
                    src={image}
                    alt="popup"
                    className="w-full h-auto object-contain"
                />
            </div>
        </div>
    );
};

export default PopupModal;
