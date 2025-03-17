'use client';

export default function DownloadMagazine() {
    const handleDownloadPDF = () => {
        // Ruta del PDF en la carpeta public
        const pdfPath = '/nombre-del-archivo.pdf';

        // Crear un enlace temporal
        const link = document.createElement('a');
        link.href = pdfPath;

        // Establecer el nombre de archivo para la descarga
        link.download = 'revista-separemos-las-aguas.pdf';

        // Agregar el enlace al body
        document.body.appendChild(link);

        // Disparar el clic del enlace
        link.click();

        // Remover el enlace del body
        document.body.removeChild(link);
    };

    return (
        <>
            <button
                className="bg-yellow font-barlow text-skyblue hover:bg-yellow/90 cursor-pointer rounded-[30px] px-[32px] py-[8px] text-[20px] font-bold uppercase"
                onClick={handleDownloadPDF}
            >
                Descargar
            </button>
        </>
    );
}
