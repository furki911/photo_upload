import { Viewer, Worker } from "@react-pdf-viewer/core";
import "./style.css";

const PdfView = ({ file }) => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div
        className="PdfViewer"
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
          height: "750px",
          overflow: "hidden",
        }}
      >
        <Viewer fileUrl={file} />
      </div>
    </Worker>
  );
};

export default PdfView;
