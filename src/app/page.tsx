import Image from 'next/image';
import Capsulas from '@/components/Capsulas/Capsulas';
import RedesSociales from '@/components/RedesSociales/RedesSociales';
import DownloadMagazine from '@/components/DownloadMagazine/DownloadMagazine';

export default function Home() {
    const logo: string = '/logo-principal.svg';
    const bgInicio: string = '/bg-inicio.jpg';
    const items02: string = '/item-02.png';
    const items03: string = '/item-03.png';
    const itemPopo: string = '/item-popo.png';
    const itemClick: string = '/item-click.png';
    const itemTapa: string = '/item-tapa.png';
    const carton: string = '/item-carton.png';
    const compost: string = '/item-compost.png';
    const mono: string = '/item-mono.png';
    const mundo: string = '/item-mundo.png';
    const tapa: string = '/tapa-revista.jpg';
    const mobileTapa: string = '/item-tapa-monos.png';
    const monoMobile: string = '/item-mono-mobile.png';
    const cartonMobile: string = '/item-carton-mobile.png';

    return (
        <>
            <section className="relative h-[100vh]" id="inicio">
                <Image
                    alt="Background Inicio"
                    src={bgInicio}
                    quality={100}
                    fill
                    sizes="100vw"
                    className="h-full w-full object-cover"
                />
                <div className="container mx-auto flex justify-center px-[10px] xl:px-[0px]">
                    <Image
                        alt="Logo"
                        src={logo}
                        width={640}
                        height={280}
                        className="z-10 mt-[160px] xl:mt-[120px] xl:h-[260px] xl:w-[720px]"
                    />
                </div>
            </section>

            <section className="bg-skyblue px-[10px] pt-[100px] xl:px-[0px]" id="separemos">
                <div className="container mx-auto flex flex-col items-center justify-center">
                    <div className="xl:w-[890px]">
                        <h6 className="font-barlow text-center text-[24px] leading-[34px] text-white">
                            Todos los días abrimos la llave y el agua sale limpia, como por arte de
                            magia. Nos duchamos, lavamos la ropa, tiramos la cadena y, sin pensarlo,
                            el agua desaparece por el desagüe. Cuando llueve, el agua corre por las
                            calles y se escurre bajo tierra.
                        </h6>
                    </div>
                    <div className="mt-[30px] flex">
                        <Image
                            alt="Items 01"
                            src={items02}
                            width={1905}
                            height={2781}
                            className="mt-[30px] w-[160px] xl:w-[450px]"
                        />
                        <Image
                            alt="Items 01"
                            src={items03}
                            width={2417}
                            height={2781}
                            className="mt-[30px] w-[180px] xl:w-[500px]"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-purple pt-[100px]">
                <div className="container mx-auto items-end justify-center xl:grid xl:grid-cols-8">
                    <div className="hidden xl:col-span-2 xl:block">
                        <Image
                            src={itemPopo}
                            alt="Item Popo"
                            width={546}
                            height={545}
                            className="float-end xl:w-[340px]"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center px-[10px] xl:col-span-4 xl:px-[0px]">
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
                            className="hidden xl:block xl:w-[500px]"
                        />
                        <Image
                            src={mobileTapa}
                            alt="Item Tapa"
                            width={300}
                            height={730}
                            className="mt-[20px] w-[450px] xl:hidden"
                        />
                    </div>
                    <div className="hidden xl:col-span-2 xl:block">
                        <Image
                            src={itemClick}
                            alt="Item Click"
                            width={2480}
                            height={2453}
                            className="xl:w-[350px]"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-yellow px-[10px] pt-[70px] xl:px-[0px] xl:pt-[100px]">
                <div className="container mx-auto grid grid-cols-2 items-center justify-center xl:flex xl:items-end">
                    <Image
                        src={compost}
                        alt="Item Compost"
                        width={680}
                        height={720}
                        className="w-[200px] xl:w-[400px]"
                    />
                    <Image
                        src={mono}
                        alt="Item Mono"
                        width={518}
                        height={566}
                        className="hidden xl:ml-[-80px] xl:block xl:w-[300px]"
                    />
                    <Image
                        src={monoMobile}
                        alt="Item Mono"
                        width={300}
                        height={518}
                        className="w-[140px] xl:hidden"
                    />
                    <Image
                        src={carton}
                        alt="Item Carton"
                        width={466}
                        height={660}
                        className="hidden xl:ml-[-20px] xl:block xl:w-[280px]"
                    />
                    <Image
                        src={cartonMobile}
                        alt="Item Carton"
                        width={575}
                        height={485}
                        className="xl:hidden"
                    />
                    <Image
                        src={mundo}
                        alt="Item Mundo"
                        width={575}
                        height={485}
                        className="xl:mb-[-25px] xl:ml-[-40px] xl:w-[360px]"
                    />
                </div>
            </section>

            <section className="bg-white py-[70px] xl:py-[100px]" id="capsulas">
                <div className="container mx-auto mb-[40px] flex flex-col items-center justify-center xl:mb-[100px]">
                    <h6 className="font-barlow text-denimblue text-center text-[24px] leading-[34px] font-bold">
                        CÁPSULAS EDUCATIVAS
                    </h6>
                </div>
                <div className="container mx-auto px-[10px] xl:px-[0px]">
                    <Capsulas
                        number="1"
                        title="Requetepotoble"
                        description="Cuando los Guardianes encaran a Lulo porque no sabe de dónde viene el agua que sale de la llave, se dan cuenta de que ellos tampoco conocen la respuesta."
                        idVideo="YYa3dXILdis"
                    />

                    <Capsulas
                        number="2"
                        title="Los misterios del desagüe"
                        description="Una voz misteriosa invita a los Guardianes a conocer dónde llega el agua usada cuando se la traga el desagüe."
                        descriptionBold="¿Te atreves a acompañarlos en este oloroso recorrido?"
                        idVideo="PrYNT8lG6x8"
                    />

                    <Capsulas
                        number="3"
                        title="Arrastrados por la lluvia"
                        description="Durante una lluvia, Lulo y Mascarilla son arrastrados al alcantarillado y descubren los riesgos de mezclar aguas lluvias y servidas. Un trabajador les enseña por qué es clave separarlas y cuidar el sistema."
                        descriptionBold="¿Quieres saber dónde irán a parar?"
                        idVideo="vurzX4O2ZXY"
                    />
                </div>

                <div className="xl:mt-[80px]">
                    <RedesSociales />
                </div>
            </section>

            <section
                className="bg-skyblue px-[10px] py-[70px] xl:px-[0px] xl:py-[100px]"
                id="revista"
            >
                <div className="container mx-auto mb-[40px] flex flex-col items-center justify-center xl:mb-[60px]">
                    <h6 className="font-barlow text-yellow text-center text-[24px] leading-[34px] font-bold">
                        REVISTA SEPAREMOS LAS AGUAS
                    </h6>
                </div>
                <div className="container mx-auto mb-[40px] flex flex-col items-center justify-center xl:mb-[60px]">
                    <Image
                        src={tapa}
                        alt="Tapa Revista"
                        width={790}
                        height={985}
                        className="w-[350px] xl:w-[500px]"
                    />
                </div>
                <div className="container mx-auto flex flex-col items-center justify-center">
                    <DownloadMagazine />
                </div>
            </section>
        </>
    );
}
