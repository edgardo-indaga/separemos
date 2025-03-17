import Image from 'next/image';

export default function Footer() {
    const suralis = '/logo-suralis.svg';
    const guardianes = '/logo-guardianes.svg';

    return (
        <>
            <footer className="h-auto bg-white px-[10px] py-[30px] md:h-auto md:py-[20px] xl:px-[0px]">
                <div className="container mx-auto grid grid-cols-2 items-center justify-center xl:flex xl:flex-row">
                    <div className="col-span-2 flex items-center justify-center">
                        <p className="text-skyblue mx-[15px] text-[16px]">
                            Separemos las aguas es una campaña de
                        </p>
                        <a href="/https://www.suralis.cl/inicio" target="_blank">
                            <Image
                                src={suralis}
                                alt="Logo Suralis"
                                width={201}
                                height={63}
                                className="w-[120px] md:w-[160px]"
                            />
                        </a>
                    </div>

                    <div className="col-span-2 flex items-center justify-between md:justify-center">
                        <p className="text-skyblue mx-[15px] text-[16px]">Con la colaboración de</p>
                        <a
                            href="https://www.instagram.com/guardianesdelacuenca.serie/?hl=es"
                            target="_blank"
                        >
                            <Image
                                src={guardianes}
                                alt="Logo Guardianes"
                                width={174}
                                height={94}
                                className="w-[100px] md:w-[120px]"
                            />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
