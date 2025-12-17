import { createContext, useContext, useState } from "react";

const OutdoorCateringContext = createContext();

export const OutdoorCateringProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const [guestRange, setGuestRange] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);

    const toggleItem = (item) => {
        setSelectedItems((prev) =>
            prev.find((i) => i.id === item.id)
                ? prev.filter((i) => i.id !== item.id)
                : [...prev, item]
        );
    };

    const removeItem = (id) => {
        setSelectedItems((prev) => prev.filter((i) => i.id !== id));
    };

    const resetAll = () => {
        setStep(1);
        setGuestRange(null);
        setSelectedItems([]);
    };

    return (
        <OutdoorCateringContext.Provider
            value={{
                step,
                setStep,
                guestRange,
                setGuestRange,
                selectedItems,
                toggleItem,
                removeItem,
                resetAll,
            }}
        >
            {children}
        </OutdoorCateringContext.Provider>
    );
};

export const useOutdoorCatering = () =>
    useContext(OutdoorCateringContext);
