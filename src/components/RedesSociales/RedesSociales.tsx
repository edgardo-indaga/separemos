'use client';

import Image from 'next/image';

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from 'react-share';

export default function RedesSociales() {
    const facebook: string = '/icon-facebook.svg';
    const x: string = '/icon-x.svg';
    const whatsapp: string = '/icon-whatsapp.svg';
    const linkedin: string = '/icon-linkedin.svg';

    const shareUrl = 'https://www.separemoslasaguas.cl/';
    const title = 'Separemos las aguas';

    return (
        <>
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h6 className="font-barlow text-denimblue mb-[20px] text-center text-[24px] leading-[34px] font-bold uppercase">
                    ¡Compártelas!
                </h6>
                <ul className="flex flex-row">
                    <li className="px-[4px] py-[2px]">
                        <FacebookShareButton url={shareUrl} title={title}>
                            <Image
                                src={facebook}
                                alt="Facebook"
                                width={64}
                                height={64}
                                className="h-[50px] w-[50px] md:h-[38px] md:w-[38px]"
                            />
                        </FacebookShareButton>
                    </li>
                    <li className="px-[4px] py-[2px]">
                        <TwitterShareButton url={shareUrl} title={title}>
                            <Image
                                src={x}
                                alt="X"
                                width={64}
                                height={64}
                                className="h-[50px] w-[50px] md:h-[38px] md:w-[38px]"
                            />
                        </TwitterShareButton>
                    </li>

                    <li className="px-[4px] py-[2px]">
                        <WhatsappShareButton url={shareUrl} title={title}>
                            <Image
                                src={whatsapp}
                                alt="Whatsapp"
                                width={64}
                                height={64}
                                className="h-[50px] w-[50px] md:h-[38px] md:w-[38px]"
                            />
                        </WhatsappShareButton>
                    </li>

                    <li className="px-[4px] py-[2px]">
                        <LinkedinShareButton url={shareUrl} title={title}>
                            <Image
                                src={linkedin}
                                alt="Whatsapp"
                                width={64}
                                height={64}
                                className="h-[50px] w-[50px] md:h-[38px] md:w-[38px]"
                            />
                        </LinkedinShareButton>
                    </li>
                </ul>
            </div>
        </>
    );
}
