import React from 'react';

interface LinkFooterProps {
    links: { name: string; url: string }[];
    children: React.ReactNode;
}

export default function LinkFooter({ links, children }: LinkFooterProps) {
    return (
        <nav className="flex flex-col gap-10">
            <span className="uppercase text-medium text-black-300">{children}</span>
            <ul className="flex flex-col gap-4 text-black-500 text-medium">
                {links.map(link => (
                    <li key={link.name}><a href={link.url} className="text-medium hover:underline">{link.name}</a></li>
                ))}
            </ul>
        </nav>
    )
}