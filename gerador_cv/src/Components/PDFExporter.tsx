import { useCallback } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface PDFExporterProps {
  elementRef: React.RefObject<HTMLDivElement | null>;
  fileName: string;
}

export default function PDFExporter({ elementRef, fileName }: PDFExporterProps) {
  const handleExport = useCallback(async () => {
    if (!elementRef.current) {
      console.error("Ref inválido.");
      return;
    }

    const element = elementRef.current;

    try {
      const canvas = await html2canvas(element, {
        scale: 1.5,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * pageWidth) / canvas.width;

      let heightLeft = imgHeight;
      let y = 0;

      while (heightLeft > 0) {
        pdf.addImage(imgData, "PNG", 0, y, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        y -= pageHeight;
        if (heightLeft > 0) pdf.addPage();
      }

      pdf.save(fileName);
      console.log("PDF exportado com sucesso!");
    } catch (err) {
      console.error("Erro ao gerar PDF:", err);
    }
  }, [elementRef, fileName]);

  return (
    <button
      onClick={handleExport}
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: "#2563eb",
        color: "#ffffff",
        borderRadius: "0.5rem",
        border: "none",
        cursor: "pointer",
      }}
    >
      Exportar PDF
    </button>
  );
}
