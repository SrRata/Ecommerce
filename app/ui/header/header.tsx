import Input from "../input";

export default function Header(){

    const navLinks = [
        { name: 'Home', url: '#' },
        { name: 'Categories', url: '#' },
        { name: 'About', url: '#' },
        { name: 'Contact', url: '#' },
    ];

    return (
        
        <header>

            <section className="mx-auto max-w-container flex items-center justify-between px-3 h-header-h">

                <nav className="flex gap-25 items-center text-black-500">

                <a href="#" className="flex gap-3 items-center">
                    <img src="/icons/Header-logo.svg" alt="brand logo" className="h-10"/>
                </a>

                <ul className="flex gap-8 items-center text-medium">
                    {navLinks.map(link => (
                        <li key={link.name}><a href={link.url}>{link.name}</a></li>
                    ))}
                </ul>

                </nav>

                <nav className="flex gap-8 items-center text-black-500 text-medium">

                <Input placeholder="Search products" icon="/icons/Search.svg"/>

                <img src="/icons/Cart.svg" alt="Cart icon" className="cursor-pointer"/>
                <img src="/icons/User.svg" alt="User icon" className="cursor-pointer"/>

                </nav>

            </section>

    </header>

    )
}