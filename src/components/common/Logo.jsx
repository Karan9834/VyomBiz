import React from "react";

const Logo = ({ className = "" }) => {
    return (
        <div className={`flex items-center cursor-pointer shrink-0 ${className}`}>
            <img
                src="/logo/vyombiz-logo-png.png"
                alt="VyomBiz Logo"
                className="h-10 md:h-12 w-auto object-contain"
            />
        </div>
    );
};

export default Logo;
