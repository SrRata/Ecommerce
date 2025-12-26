import React from "react";

interface InputProps {
    state?: 'default' | 'error';
    type?: 'text' | 'email' | 'password' | 'number';
    placeholder?: string;
    label?: string;
    icon?: string; // path to icon, if provided, show it
    textarea?: boolean;
}

const getClassName = (state: string) => {
    let base = "border rounded-md text-black-900 text-medium outline-none py-2.5 px-3.75";
    let borderColor = state === 'error' ? 'border-red-900' : 'border-black-100';

    return `${base} ${borderColor}`;
}

export default function Input({ state = 'default', type = 'text', placeholder = 'Placeholder', label, icon, textarea = false }: InputProps) {
    const className = getClassName(state);

    if (textarea) {
        return (
            <div className="relative flex flex-col">
                {label && <label htmlFor="">{label}</label>}
                {icon && <img src={icon} className="absolute bottom-3.5 left-2" />}
                <textarea placeholder={placeholder} className={className} />
            </div>
        );
    }

    return (
        <div className="relative flex flex-col">
            {label && <label htmlFor="">{label}</label>}
            {icon && <img src={icon} className='absolute left-2 top-1/2 -translate-y-1/2'/>}
            <input type={type} placeholder={placeholder} className={`${className} ${icon? 'pl-10' : ''}`}/>
        </div>
    );
}

