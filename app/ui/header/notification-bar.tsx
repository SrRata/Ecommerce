interface NotificationBarProps {
    text: string;
}

export default function NotificationBar({text}: NotificationBarProps) {
    return (
        <div className="flex justify-center items-center gap-2.25 bg-black-900 py-3 text-white-900">
            <p className="text-regular">{text}</p>
            <a href="#" className="text-medium hover:underline ">Order Now</a>
        </div>
    )
}