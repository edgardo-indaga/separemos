'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface HeaderMenu {
    id: number;
    name: string;
    link: string;
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const instagram = '/icon-instagram.svg';
    const facebook = '/icon-facebook.svg';
    const threads = '/icon-threads.svg';

    const items: HeaderMenu[] = [
        {
            id: 1,
            name: 'Inicio',
            link: '/',
        },
    ];

    return (
        <>
            <header className="fixed z-50 mt-[20px] flex w-screen">
                <div className="container mx-auto">
                    <nav className="flex h-[66px] items-center justify-end px-[20px]">
                        <div className="flex">
                            <button
                                onClick={toggleMenu}
                                className="bg-skyblue rounded-[50%] p-[5px]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    data-slot="icon"
                                    className="h-9 w-9 cursor-pointer text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                                    />
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>

                <div
                    className={
                        menuOpen
                            ? 'menu-mobile'
                            : 'fixed top-0 left-[-100%] h-screen p-10 duration-500 ease-in-out'
                    }
                >
                    <div className="flex w-full items-center justify-end">
                        <button onClick={toggleMenu}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="black"
                                data-slot="icon"
                                className="h-8 w-8 cursor-pointer"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col items-center py-4 pt-15">
                        <ul className="flex flex-col items-center">
                            {items.map((item) => (
                                <li
                                    key={item.id}
                                    className="my-[13px]"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <Link href={item.link} className="linksMobile">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <ul className="mt-[100px] flex flex-row">
                            <li className="px-[4px] py-[2px]">
                                <Link href="">
                                    <Image
                                        src={instagram}
                                        alt="Instagram"
                                        width={64}
                                        height={64}
                                        className="md:h-[38px] md:w-[38px]"
                                    />
                                </Link>
                            </li>
                            <li className="px-[4px] py-[2px]">
                                <Link href="">
                                    <Image
                                        src={facebook}
                                        alt="Facebook"
                                        width={64}
                                        height={64}
                                        className="md:h-[38px] md:w-[38px]"
                                    />
                                </Link>
                            </li>
                            <li className="px-[4px] py-[2px]">
                                <Link href="">
                                    <Image
                                        src={threads}
                                        alt="Threads"
                                        width={64}
                                        height={64}
                                        className="md:h-[38px] md:w-[38px]"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}
