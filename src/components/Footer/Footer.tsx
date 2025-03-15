import Image from 'next/image';

export default function Footer() {
    const suralis = '/logo-suralis.svg';
    const guardianes = '/logo-guardianes.svg';
    return (
        <>
            <footer className="h-auto bg-white md:h-auto md:py-[20px]">
                <div className="container mx-auto flex flex-row items-center justify-center">
                    <p className="text-skyblue mx-[15px] text-[16px]">
                        Separemos las aguas es una campaña de
                    </p>
                    <a href="/https://www.suralis.cl/inicio" target="_blank">
                        <Image
                            src={suralis}
                            alt="Logo Suralis"
                            width={201}
                            height={63}
                            className="md:w-[160px]"
                        />
                    </a>

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
                            className="md:w-[120px]"
                        />
                    </a>
                </div>
            </footer>
        </>
    );
}
