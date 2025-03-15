import Image from 'next/image';

export default function Home() {
    const logo: string = '/logo-principal.svg';
    const bgInicio: string = '/bg-inicio.jpg';
    const items01: string = '/items-01.png';
    const itemPopo: string = '/item-popo.png';
    const itemClick: string = '/item-click.png';
    const itemTapa: string = '/item-tapa.png';

    return (
        <>
            <section className="h-[100vh]">
                <Image
                    alt="Background Inicio"
                    src={bgInicio}
                    //placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                />
                <div className="container mx-auto flex justify-center">
                    <Image
                        alt="Logo"
                        src={logo}
                        width={640}
                        height={280}
                        className="z-10 mt-[120px] xl:h-[260px] xl:w-[720px]"
                    />
                </div>
            </section>

            <section className="bg-skyblue pt-[100px]">
                <div className="container mx-auto flex flex-col items-center justify-center">
                    <div className="xl:w-[890px]">
                        <h6 className="font-barlow text-center text-[24px] leading-[34px] text-white">
                            Todos los días abrimos la llave y el agua sale limpia, como por arte de
                            magia. Nos duchamos, lavamos la ropa, tiramos la cadena y, sin pensarlo,
                            el agua desaparece por el desagüe. Cuando llueve, el agua corre por las
                            calles y se escurre bajo tierra.
                        </h6>
                    </div>
                    <Image
                        alt="Items 01"
                        src={items01}
                        width={1090}
                        height={800}
                        className="z-10 mt-[30px] xl:h-[661px] xl:w-[900px]"
                    />
                </div>
            </section>

            <section className="bg-purple xl:pt-[50px]">
                <div className="container mx-auto grid items-end justify-center xl:grid-cols-8">
                    <div className="xl:col-span-2">
                        <Image src={itemPopo} alt="Item Popo" width={546} height={545} />
                    </div>
                    <div className="flex flex-col items-center justify-center xl:col-span-4">
                        <h6 className="font-barlow text-center text-[24px] leading-[34px] text-white">
                            No toda el agua es igual ni sigue el mismo camino. El agua potable, las
                            aguas servidas y las aguas lluvias tienen recorridos distintos y
                            mezclarlas puede causar grandes problemas.
                        </h6>
                        <Image
                            src={itemTapa}
                            alt="Item Tapa"
                            width={730}
                            height={300}
                            className="xl:w-[500px]"
                        />
                    </div>
                    <div className="xl:col-span-2">
                        <Image
                            src={itemClick}
                            alt="Item Click"
                            width={610}
                            height={605}
                            className="xl:h-[400px] xl:w-[403px]"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-yellow xl:pt-[50px]">
                <div className="md container mx-auto grid grid-cols-8 items-end justify-center">
                    <div className="xl:col-span-2"></div>
                    <div className="xl:col-span-2"></div>
                    <div className="xl:col-span-2"></div>
                    <div className="xl:col-span-2"></div>
                </div>
            </section>
        </>
    );
}
