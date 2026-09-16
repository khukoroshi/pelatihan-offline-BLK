import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SiswaForm from "../components/SiswaForm";

const API_URL = "http://localhost:3000/api/siswa";

const AddStudent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    nama: "",
    email: "",
    kelas: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const method = isEditing ? "PUT" : "POST";
      // const url = isEditing ? `${API_URL}/${formData.id}` : API_URL;

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Member berhasil ditambahkan");
        navigate("/");
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert(`Terjadi kesalahan pada server: ${error}`);
    }
  };
  return (
    <div>
      <button className="btn-secondary btn-back" onClick={() => navigate("/")}>
        &larr; Kembali ke Daftar
      </button>
      <SiswaForm
        formData={formData}
        isEditing={false}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddStudent;
