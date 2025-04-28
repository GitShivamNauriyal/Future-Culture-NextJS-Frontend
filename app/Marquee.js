import React, { useEffect, useRef } from "react";

// ✌️ Marquee Component with JS control for dynamic speed and movement
const Marquee = ({ contentObj }) => {
    const contentArray = Object.values(contentObj); // Extract values from the object
    const marqueeRef = useRef(null);

    useEffect(() => {
        if (marqueeRef.current) {
            const marqueeWidth = marqueeRef.current.scrollWidth; // Get total width of content
            const containerWidth = marqueeRef.current.parentElement.offsetWidth; // Get container width

            // If content is larger than the container, enable animation
            if (marqueeWidth > containerWidth) {
                marqueeRef.current.style.animationDuration = `${
                    marqueeWidth / 50
                }s`; // Dynamic speed based on content width
            } else {
                marqueeRef.current.style.animationDuration = "0s"; // No movement if content fits
            }
        }
    }, [contentObj]); // Recalculate when content changes

    return (
        <div className="w-full overflow-hidden bg-gray-100 py-2">
            <div
                ref={marqueeRef}
                className="inline-flex animate-marquee"
                style={{ whiteSpace: "nowrap" }}
            >
                {contentArray.map((item, index) => (
                    <span key={index} className="mx-4 text-gray-700 text-sm">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
