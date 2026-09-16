import { useState, useEffect } from "react";
import "./App.css";

import SiswaForm from "./components/SiswaForm";
import SiswaTable from "./components/SiswaTable";
import SearchBar from "./components/SearchBar";

const API_URL = "http://localhost:3000/api/siswa";

function App() {
  const [siswaList, setSiswaList] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    nama: "",
    email: "",
    kelas: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [refreshTriger, setRefreshTriger] = useState(0);

  useEffect(() => {
    const fetchSemuaData = async () => {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json();
          setSiswaList(data);
        }
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };
    fetchSemuaData();
  }, [refreshTriger]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = isEditing ? "PUT" : "POST";
      const url = isEditing ? `${API_URL}/${formData.id}` : API_URL;

      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama: formData.nama,
          email: formData.email,
          kelas: formData.kelas,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        resetForm();
        setRefreshTriger((prev) => prev + 1);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert(`Terjadi kesalahan pada server: ${error}`);
    }
  };

  const handDelete = async (id) => {
    if (window.confirm("Apakah anda yakin ingin menghapus siswa ini?")) {
      try {
        const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

        const result = await response.json();

        if (response.ok) {
          alert(result.message);
          setRefreshTriger((prev) => prev + 1);
        } else {
          alert(`Error: ${result.message}`);
        }
      } catch (error) {
        console.error("Gagal Menghapus", error);
      }
    }
  };

  const handleSearch = async () => {
    if (!searchInput) {
      setRefreshTriger((prev) => prev + 1);
      return;
    }
    try {
      const response = await fetch(`${API_URL}/${searchInput}`);
      if (response.ok) {
        const data = await response.json();
        setSiswaList(data);
      } else {
        setSiswaList([]);
        alert("Siswa tidak ditemukan");
      }
    } catch (error) {
      console.error("Gagal mencari data:", error);
    }
  };
  const handleResetSearch = () => {
    setSearchInput("");
    setRefreshTriger((prev) => prev + 1);
  };
  const handleEdit = (siswa) => {
    setFormData(siswa);
    setIsEditing(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const resetForm = () => {
    setFormData({ id: "", nama: "", email: "", kelas: "" });
    setIsEditing(false);
  };
  return (
    <div className="container">
      <h1>Sistem Manajemen Siswa</h1>
      <SiswaForm
        formData={formData}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        resetForm={resetForm}
      />
      <div className="card">
        <h2>Daftar Siswa</h2>
        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleReset={handleResetSearch}
          handleSearch={handleSearch}
        />
        <SiswaTable
          siswaList={siswaList}
          handDelete={handDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
