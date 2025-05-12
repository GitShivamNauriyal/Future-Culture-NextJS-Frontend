import Marquee from "react-fast-marquee";

const MarqueeSection = ({ contentObj }) => {
    const contentArray = Object.values(contentObj);

    return (
        <Marquee gradient={false} speed={40}>
            {contentArray.map((item, index) => (
                <span key={index} className="mx-4 text-sm text-gray-700">
                    {item}
                </span>
            ))}
        </Marquee>
    );
};

export default MarqueeSection;
