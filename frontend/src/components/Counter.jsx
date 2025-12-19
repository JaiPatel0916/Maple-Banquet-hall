import { useEffect, useState } from "react";

const Counter = ({ end, suffix = "", duration = 1500 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration / 16); // ~60fps
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end, duration]);

    return (
        <h3 className="text-3xl font-bold">
            {count}
            {suffix}
        </h3>
    );
};

export default Counter;
