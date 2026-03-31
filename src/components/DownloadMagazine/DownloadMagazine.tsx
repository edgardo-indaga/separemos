'use client';

export default function DownloadMagazine() {
    const pdfUrl: string =
        '/revista.pdf';

    return (
        <>
            <a
                className="bg-yellow font-barlow text-skyblue hover:bg-yellow/90 cursor-pointer rounded-[30px] px-8 py-2 text-[20px] font-bold uppercase"
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
