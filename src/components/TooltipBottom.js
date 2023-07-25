'use client'

import {useState} from "react";

const TooltipBottom = (props) => {
    const { title, position , children } = props
    const [showTooltip, setShowTooltip] = useState(false);
    return (
        <div
            className="group flex relative z-50"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
      <span className="text-2xl xl:text-3xl w-1/3 hover:text-accent transition-all duration-300">
          {children}
      </span>
            {showTooltip && (
                <span
                    className={`xl:opacity-100 z-50 transition-opacity bg-white px-2 text-sm text-primary ${
                        position === "top" ? "-top-16" : 'top-2'
                    } rounded-sm absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto inline-block min-w-max`}
                >
          {title}
        </span>
            )}
        </div>
    );
};

export default TooltipBottom;
