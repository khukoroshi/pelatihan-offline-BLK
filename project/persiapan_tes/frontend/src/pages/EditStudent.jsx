import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import SiswaForm from "../components/SiswaForm";

const API_URL = "http://localhost:3000/api/siswa";

const EditStudent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const siswaData = location.state?.siswa || {
    id: "",
    nama: "",
    email: "",
    kelas: "",
  };

  const [formData, setFormData] = useState(siswaData);

  useEffect(() => {
    if (!formData.id) navigate("/");
  }, [formData, navigate]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Data berhasil di perbarui!");
      } else {
        const result = await response.json();
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert(`Terjadi kesalahan pada server: ${error}`);
    }
  };
  return (
    <div>
      <button className="btn-secondary btn-back" onClick={() => navigate("/")}>
        &larr; Batal & Kembali
      </button>
      <SiswaForm
        formData={formData}
        isEditing={true}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditStudent;
