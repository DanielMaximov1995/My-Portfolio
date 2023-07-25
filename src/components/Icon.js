
import { useEffect, useState } from "react";

const Icon = (props) => {
    const { icon } = props;
    const [iconData, setIconData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(icon);
                if (!response.ok) {
                    throw new Error("Failed to fetch SVG data");
                }
                const svgString = await response.text();
                setIconData(svgString);
            } catch (error) {
                console.error('Error fetching SVG data:', error);
            }
        };

        fetchData();
    }, [icon]);

    useEffect(() => {
            const svg = new DOMParser().parseFromString(iconData, 'image/svg+xml').querySelector('svg');
            if (svg) {
                svg.classList.add('fill-white', 'hover:fill-accent' , 'duration-300' , 'transition-all' , 'h-7' , 'w-7' , 'cursor-pointer');
                setIconData(new XMLSerializer().serializeToString(svg));
            }
    }, [iconData]);

    return <div
        dangerouslySetInnerHTML={{ __html: iconData }}
    />
};

export default Icon;
