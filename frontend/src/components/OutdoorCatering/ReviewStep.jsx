import { useOutdoorCatering } from "../../context/OutdoorCateringContext";
import { CheckCircle } from "lucide-react";

const ReviewStep = () => {
    const {
        guestRange,
        selectedItems,
        removeItem,
        setStep,
        resetAll,
    } = useOutdoorCatering();

    const HOTEL_WHATSAPP_NUMBER = "917499661725"; 

    const handleWhatsAppEnquiry = () => {
        let message = `Hello Maple Banquet Team 👋\n\n`;

        message += `I would like to enquire about your Outdoor Catering services. Please find the details below:\n\n`;

        message += `Guest Count:\n${guestRange}\n\n`;

        message += `Selected Menu Items:\n`;
        selectedItems.forEach((item, index) => {
            message += `${index + 1}. ${item.name}\n`;
        });

        message += `\nKindly share availability and further details.\n\nThank you!`;

        const encodedMessage = encodeURIComponent(message);

        window.open(
            `https://wa.me/${HOTEL_WHATSAPP_NUMBER}?text=${encodedMessage}`,
            "_blank"
        );
    };

    return (
        <section className="bg-[#FFFFFF] py-20 px-4">
            <div className="max-w-5xl mx-auto text-center">

          
                <div className="flex justify-center mb-4">
                    <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="text-green-600" size={28} />
                    </div>
                </div>

             
                <h2 className="text-3xl font-serif mb-10">
                    Your Selection is Ready!
                </h2>

              
                <div className="bg-white rounded-2xl shadow-lg px-6 py-8 max-w-3xl mx-auto">

                
                    <div className="flex justify-between text-sm mb-6">
                        <span className="text-gray-600">Guests</span>
                        <span className="font-medium">{guestRange}</span>
                    </div>

                    
                    <div className="border-t border-b py-4 mb-6 max-h-64 overflow-y-auto text-left space-y-3">
                        {selectedItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center text-sm"
                            >
                                <span>{item.name}</span>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-red-500 hover:underline text-xs"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                   
                    <button
                        onClick={handleWhatsAppEnquiry}
                        disabled={!guestRange || selectedItems.length === 0}
                        className="w-full bg-[#d29922] py-3 rounded-lg font-medium mb-4 disabled:opacity-50"
                    >
                        Enquire on WhatsApp
                    </button>

                   
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={() => setStep(2)}
                            className="w-full border py-2 rounded-lg text-sm"
                        >
                            Modify Menu
                        </button>
                        <button
                            onClick={resetAll}
                            className="w-full border py-2 rounded-lg text-sm"
                        >
                            Start Over
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ReviewStep;
