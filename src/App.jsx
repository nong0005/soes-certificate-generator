import { useState } from "react";
import CertificateForm from "./components/CertificateForm";
import CertificatePreview from "./components/CertificatePreview";
import Footer from "./components/Footer";

const ADMIN_PASSKEY = "SOES@2025";

function App() {
  const [auth, setAuth] = useState(false);
  const [passkey, setPasskey] = useState("");
  const [error, setError] = useState("");

  const [data, setData] = useState({
    fullName: "",
    parentName: "",
    address: "",
    className: "",
    section: "",
    rollNo: "",
    position: "",
    examName: "",
    academicYear: "",
    issueDate: "",
    issuer1Name: "",
    issuer1Role: "",
    issuer1Signature: "",
    issuer2Name: "",
    issuer2Role: "",
    issuer2Signature: ""
  });

  const login = () => {
    if (passkey === ADMIN_PASSKEY) {
      setAuth(true);
      setError("");
    } else {
      setError("Invalid passkey");
    }
  };

  return (
    <>
      {!auth && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Admin Access</h2>
            <p>Enter passkey to generate certificates</p>
            <input
              type="password"
              placeholder="Admin Passkey"
              value={passkey}
              onChange={(e) => setPasskey(e.target.value)}
            />
            {error && <p className="error-text">{error}</p>}
            <button className="primary-btn" onClick={login}>
              Verify
            </button>
          </div>
        </div>
      )}

      {auth && (
        <>
          <div className="app-container">
            <CertificateForm data={data} setData={setData} />
            <CertificatePreview data={data} />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;