interface InputProps {
    state?: 'default' | 'error'
    type?: string
    
    label?: string
    name?: string
    placeholder?: string

    icon?: string
    width?: string
}

export default function Input({state = 'default', label, type = 'text', placeholder = 'placeholder', icon, width, name} : InputProps) {
    return (
        <div className="flex flex-col gap-1">
            {label && <label htmlFor={name} className="text-medium text-black-600">{label}</label>}

            <div className="relative">
                {icon && <img src={icon} className='absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer'/>}
                <input 
                name={name} 
                id={name} 
                type={type} 
                placeholder={placeholder} 
                className={`${width && width} outline-none py-2.5 px-3.75 rounded-md text-medium text-black-900 border ${state === 'error' ? 'border-red-900' : 'border-black-100'} ${icon && 'pl-10'}`} />
            </div>

            {state === 'error' && <span className="text-red-900 text-regular">Invalid value</span> }
        </div>
    )
}

