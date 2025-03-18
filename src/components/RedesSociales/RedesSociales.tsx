import Image from 'next/image';

export default function RedesSociales() {
    const instagram: string = '/icon-instagram.svg';
    const facebook: string = '/icon-facebook.svg';
    const youtube: string = '/icon-youtube.svg';

    return (
        <>
            <div className="container mx-auto flex items-center justify-center">
                <ul className="flex flex-row">
                    <li className="px-[4px] py-[2px]">
                        <a href="https://www.instagram.com/suraliscontigo/" target="_blank">
                            <Image
                                src={instagram}
                                alt="Instagram"
                                width={64}
                                height={64}
                                className="h-[50px] w-[50px] md:h-[38px] md:w-[38px]"
                            />
                        </a>
                    </li>
                    <li className="px-[4px] py-[2px]">
                        <a href="https://www.facebook.com/SuralisContigo/" target="_blank">
                            <Image
                                src={facebook}
                                alt="Facebook"
                                width={64}
                                height={64}
                                className="h-[50px] w-[50px] md:h-[38px] md:w-[38px]"
                            />
                        </a>
                    </li>
                    <li className="px-[4px] py-[2px]">
                        <a href="https://www.youtube.com/@Separemoslasaguas" target="_blank">
                            <Image
                                src={youtube}
                                alt="Threads"
                                width={64}
                                height={64}
                                className="h-[50px] w-[50px] md:h-[38px] md:w-[38px]"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
