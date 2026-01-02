import html2pdf from "html2pdf.js";
import logo from "../assets/soes-emblem.png";

const CertificatePreview = ({ data }) => {
  const downloadPDF = () => {
    html2pdf()
      .set({
        margin: 0,
        filename: "Certificate_of_Appreciation.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 4 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(document.getElementById("certificate"))
      .save();
  };

  return (
    <div className="certificate-wrapper">
      <div id="certificate" className="certificate">
        {/* HEADER */}
        <div>
          <img src={logo} alt="School Logo" className="school-logo" />
          <h2 className="school-name">SANATOMBI ORIENTAL ENGLISH SCHOOL</h2>
          <p className="school-address">
            Kumbi Eshingchaiba Leikai, Bishnupur District, Manipur - 795133
          </p>
          <p className="date">Date of issue: {data.issueDate}</p>
          <h1>CERTIFICATE OF APPRECIATION</h1>
        </div>

        {/* BODY */}
        <div>
          <p className="body-text">
            This is to certify that <strong>{data.fullName}</strong>, son/daughter of <strong>{data.parentName}</strong>, residing at <strong>{data.address}</strong>, studying in <strong>Class {data.className}</strong>
            {data.section && <> , <strong>Section {data.section}</strong></>}, <strong>Roll Number {data.rollNo}</strong>, has secured <strong>{data.position}</strong> in the <strong>{data.examName}</strong> for the <strong>Academic Year {data.academicYear}</strong>.
          </p>

          <p className="body-text">
            This certificate is awarded in recognition of the student’s dedication and outstanding academic performance.
          </p>

          <p className="body-text">
            We congratulate <strong>{data.fullName}</strong> on this achievement and encourage continued excellence in all academic and personal pursuits.
          </p>

          <p className="yours">With best wishes,</p>
        </div>

        {/* SIGNATURES */}
        <div className="signatures">
          <div>
            <p className="signature">{data.issuer1Signature}</p>
            <p><strong>{data.issuer1Name}</strong></p>
            <p>{data.issuer1Role}</p>
          </div>

          <div>
            <p className="signature">{data.issuer2Signature}</p>
            <p><strong>{data.issuer2Name}</strong></p>
            <p>{data.issuer2Role}</p>
          </div>
        </div>
      </div>

      {/* DOWNLOAD BUTTON */}
      <button className="primary-btn download" onClick={downloadPDF}>
        Download Certificate (PDF)
      </button>
    </div>
  );
};

export default CertificatePreview;