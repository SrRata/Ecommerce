import React from 'react';

interface ButtonProps {
    type?: 'default' | 'outline' | 'outlineBlack' | 'white';
    size?: 'normal' | 'small';
    children: React.ReactNode;
}

const getClassName = (type: string, size: string) => {
    let base = "capitalize rounded-sm text-medium";
    let bg = "";
    let text = "";
    let border = "";
    let padding = size === 'small' ? "py-3 px-5" : "py-3 px-6";

    switch (type) {
        case 'default':
            bg = "bg-black-900";
            text = "text-white-900";
            border = "border border-black-900";
            break;
        case 'outline':
            bg = "bg-white-900";
            text = "text-black-500";
            border = "border border-black-200";
            break;
        case 'outlineBlack':
            bg = "bg-white-900";
            text = "text-black-900";
            border = "border border-black-900";
            break;
        case 'white':
            bg = "bg-white-900";
            text = "text-black-900";
            border = "border border-white-900";
            break;
    }

    return `${base} ${bg} ${padding} ${text} ${border}`;
};

export default function Button({ type = 'default', size = 'normal', children }: ButtonProps) {
    return (
        <button className={getClassName(type, size)}>
            {children}
        </button>
    );
}