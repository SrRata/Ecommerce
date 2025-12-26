import React from "react";

interface InputProps {
    type?: 'default' | 'error';
    inputType?: 'text' | 'email' | 'password' | 'number';
    placeholder?: string;
}

const getClassName = (type: string) => {
    let base = "border rounded-md text-black-900 text-medium outline-none py-2.5 px-3.75";
    let borderColor = type === 'error' ? 'border-red-900' : 'border-black-100';

    return `${base} ${borderColor}`;
}

export default function Input({type = 'default', inputType = 'text', placeholder = 'Placeholder'}: InputProps ) {
    return (
        <input type={inputType} placeholder={placeholder} className={getClassName(type)}/>
    )
}
