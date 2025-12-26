import LinkFooter from "./link-footer"

export default function Footer() {
    return (
        <footer className="bg-white-100">
            <section className="max-w-container mx-auto px-3 grid grid-cols-7 gap-10 py-20">

                <div className="flex flex-col gap-6 col-span-2 items-start">
                    <img src="/icons/Footer-logo.svg" alt="brand logo" className="h-11"/>

                    <p className="text-black-500 text-regular">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur exercitationem facilis aperiam maiores nesciunt.</p>

                    <div className="flex gap-6">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/Github.svg" alt="Github icon" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/Instagram.svg" alt="Instagram icon" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/Youtube.svg" alt="Youtube icon" />
                        </a>
                    </div>
                </div>

                <LinkFooter links={[ {name: 'FAQ', url: '#'}, {name: 'Terms of use', url: '#'}, {name: 'Privacy Policy', url: '#'}]}>
                Support
                </LinkFooter>

                <LinkFooter links={[ {name: 'About us', url: '#'}, {name: 'Contact', url: '#'}, {name: 'Careers', url: '#'}]}>
                Company
                </LinkFooter>

                <LinkFooter links={[ {name: 'My Account', url: '#'}, {name: 'Checkout', url: '#'}, {name: 'Cart', url: '#'} ]}>
                    Shop
                </LinkFooter>

                <div className="flex flex-col gap-10 col-span-2">
                    <span className="uppercase text-medium text-black-300">Accepted payments</span>
                    <div className="flex gap-8">
                        <a href="https://www.mastercard.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/Mastercard.svg" alt="logo"/>
                        </a>
                        <a href="https://www.americanexpress.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/Amex.svg" alt="logo"/>
                        </a>
                        <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/Visa.svg" alt="logo"/>
                        </a>
                    </div>
                </div>

            </section>

            <div className="border-t border-white-200 py-6.75">
                <p className="text-center text-black-500 text-regular">© 2025 DonRata.</p>
            </div>
        </footer>
    )
}