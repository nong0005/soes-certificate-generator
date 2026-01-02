const CertificateForm = ({ data, setData }) => {
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
  
    const resetForm = () => {
      setData({
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
    };
  
    return (
      <div className="form-container">
        <h3>Student Details</h3>
  
        <input name="fullName" placeholder="Student Full Name" value={data.fullName} onChange={handleChange} />
        <input name="parentName" placeholder="Son / Daughter of" value={data.parentName} onChange={handleChange} />
        <input name="address" placeholder="Student Address" value={data.address} onChange={handleChange} />
  
        <div className="row">
          <input name="className" placeholder="Class" value={data.className} onChange={handleChange} />
          <input name="section" placeholder="Section (Optional)" value={data.section} onChange={handleChange} />
        </div>
  
        <div className="row">
          <input name="rollNo" placeholder="Roll Number" value={data.rollNo} onChange={handleChange} />
          <input name="position" placeholder="Secured Position" value={data.position} onChange={handleChange} />
        </div>
  
        <input name="examName" placeholder="Exam Name" value={data.examName} onChange={handleChange} />
        <input name="academicYear" placeholder="Academic Year" value={data.academicYear} onChange={handleChange} />
        <input type="date" name="issueDate" value={data.issueDate} onChange={handleChange} />
  
        <h3>Issuers</h3>
  
        <input name="issuer1Name" placeholder="Issuer 1 Name" value={data.issuer1Name} onChange={handleChange} />
        <input name="issuer1Role" placeholder="Issuer 1 Role" value={data.issuer1Role} onChange={handleChange} />
        <input name="issuer1Signature" placeholder="Issuer 1 Signature Name" value={data.issuer1Signature} onChange={handleChange} />
  
        <input name="issuer2Name" placeholder="Issuer 2 Name" value={data.issuer2Name} onChange={handleChange} />
        <input name="issuer2Role" placeholder="Issuer 2 Role" value={data.issuer2Role} onChange={handleChange} />
        <input name="issuer2Signature" placeholder="Issuer 2 Signature Name" value={data.issuer2Signature} onChange={handleChange} />
  
        <button className="secondary-btn" onClick={resetForm}>Reset Form</button>
      </div>
    );
  };
  
  export default CertificateForm;