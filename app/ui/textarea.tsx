interface TextAreaProps {
    state?: 'default' | 'error'

    label?: string
    name?: string
    placeholder?: string

    rows?: number
    maxLength?: number

    resize?: 'none' | 'content'
    width?: string
}

export default function TextArea({state = 'default', label, placeholder = 'Placeholder', width = 'w-full', name, rows = 1, maxLength, resize = 'none'} : TextAreaProps) {
    return (
        <div className="flex flex-col gap-1">
            {label && <label htmlFor={name} className="text-medium text-black-600">{label}</label>}

            <textarea 
            name={name} 
            id={name} 
            placeholder={placeholder} 
            rows={rows} 
            maxLength={maxLength} 
            className={`${width && width} ${resize == 'none' ? 'resize-none' : 'field-sizing-content'} outline-none py-2.5 px-3.75 rounded-md text-medium text-black-900 border ${state === 'error' ? 'border-red-900' : 'border-black-100'}`}>
            </textarea>

            {state === 'error' && <span className="text-red-900 text-regular">Invalid value</span> }
        </div>
    )
}



