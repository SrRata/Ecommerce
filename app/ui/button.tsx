interface ButtonProps {
    style?: 'default' | 'outline' | 'outlineBlack' | 'white'
    type?: 'button' | 'submit' | 'reset'
    content?: string
}

const getClassName = (style: string) => {
    let base = "cursor-pointer capitalize rounded-sm text-medium py-2.5 px-6";
    let bg = "";
    let text = "";
    let border = "";

    switch (style) {
        case 'default':
            bg = "bg-black-900";
            text = "text-white-900";
            border = "border border-black-900";
            break;
        case 'outline':
            bg = "";
            text = "text-black-500";
            border = "border border-black-200";
            break;
        case 'outlineBlack':
            bg = "";
            text = "text-black-900";
            border = "border border-black-900";
            break;
        case 'white':
            bg = "";
            text = "text-black-900";
            border = "";
            break;
    }

    return `${base} ${bg} ${text} ${border}`;
};

export default function Button({style = 'default', content = 'button', type = 'button'} : ButtonProps) {
    return (
        <button className={getClassName(style)} type={type}>{content}</button>
    )
}