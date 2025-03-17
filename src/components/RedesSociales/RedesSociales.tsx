import Link from 'next/link';
import Image from 'next/image';

export default function RedesSociales() {
    const instagram: string = '/icon-instagram.svg';
    const facebook: string = '/icon-facebook.svg';
    const threads: string = '/icon-threads.svg';

    return (
        <>
            <div className="container mx-auto flex items-center justify-center">
                <ul className="flex flex-row">
                    <li className="px-[4px] py-[2px]">
                        <Link href="">
                            <Image
                                src={instagram}
                                alt="Instagram"
                                width={64}
                                height={64}
                                className="h-[50px] w-[50px] md:h-[38px] md:w-[38px]"
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
                                className="h-[50px] w-[50px] md:h-[38px] md:w-[38px]"
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
                                className="h-[50px] w-[50px] md:h-[38px] md:w-[38px]"
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
