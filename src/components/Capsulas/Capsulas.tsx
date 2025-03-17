import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';

interface CapsulasProps {
    number: string;
    title: string;
    description: string;
    descriptionBold?: string;
    idVideo: string;
}

export default function Capsulas({
    number,
    title,
    description,
    descriptionBold,
    idVideo,
}: CapsulasProps) {
    return (
        <div className="mb-[60px] grid grid-cols-7 xl:grid xl:grid-cols-9">
            <div className="col-span-1 mr-[10px] flex md:justify-end">
                <p className="bg-denimblue font-barlow inline-block h-[30px] w-[30px] rounded-[50%] text-center text-[20px] font-medium text-white">
                    {number}
                </p>
            </div>
            <div className="col-span-6 xl:col-span-3">
                <h4 className="font-barlow mb-[15px] text-[20px] leading-[26px] font-bold text-black">
                    {title}
                </h4>
                <p className="text-denimblue font-barlow xl:pr-[20px] xl:text-[16px] xl:leading-[26px]">
                    {description}
                </p>
                <p className="text-denimblue font-barlow mt-[10px] font-bold xl:pr-[20px] xl:text-[16px] xl:leading-[26px]">
                    {descriptionBold}
                </p>
            </div>
            <div className="col-span-7 mt-[20px] flex justify-center xl:col-span-5 xl:mt-[0px] xl:ml-[40px]">
                <VideoPlayer videoId={idVideo} />
            </div>
        </div>
    );
}
