'use client';

export default function DownloadMagazine() {
    const pdfUrl: string =
        'https://rmp0hr1dqiabvbul.public.blob.vercel-storage.com/archive/revista-0mPLCJdlyrm7u9pvkwiaPyKvQxqDhc.pdf';

    return (
        <>
            <a
                className="bg-yellow font-barlow text-skyblue hover:bg-yellow/90 cursor-pointer rounded-[30px] px-[32px] py-[8px] text-[20px] font-bold uppercase"
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
            >
                Descargar
            </a>
        </>
    );
}
