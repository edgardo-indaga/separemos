import Image from 'next/image';

export default function RedesSociales() {
    const instagram: string = '/icon-instagram.svg';
    const facebook: string = '/icon-facebook.svg';
    const youtube: string = '/icon-youtube.svg';
    const x: string = '/icon-x.svg';

    return (
        <>
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h6 className="font-barlow text-denimblue mb-[20px] text-center text-[24px] leading-[34px] font-bold uppercase">
                    ¡Compártelas!
                </h6>
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
                                alt="Youtube"
                                width={64}
                                height={64}
                                className="h-[50px] w-[50px] md:h-[38px] md:w-[38px]"
                            />
                        </a>
                    </li>
                    <li className="px-[4px] py-[2px]">
                        <a href="https://x.com/SuralisTeAyuda" target="_blank">
                            <Image
                                src={x}
                                alt="X"
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
