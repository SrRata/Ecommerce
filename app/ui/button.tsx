import React from 'react';

interface ButtonProps {
    style?: 'default' | 'outline' | 'outlineBlack' | 'white'; //Decide el estilo de boton, por defecto es default. 
    size?: 'normal' | 'small'; //Decide que verion usar entre la normal y small, por defecto esta en normal.
    children: React.ReactNode;  //Valor que tiene el button.
}

const getClassName = (style: string, size: string) => {
    let base = "capitalize rounded-sm text-medium";
    let bg = "";
    let text = "";
    let border = "";
    let padding = size === 'small' ? "py-2.5 px-5" : "py-2.5 px-6";

    switch (style) {
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

export default function Button({ style = 'default', size = 'normal', children }: ButtonProps) {
    return (
        <button className={getClassName(style, size)}>
            {children}
        </button>
    );
}
