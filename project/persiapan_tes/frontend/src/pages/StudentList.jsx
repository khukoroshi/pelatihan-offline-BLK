import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import SiswaTable from "../components/SiswaTable";

const API_URL = "http://localhost:3000/api/siswa";

const StudentList = () => {
  const [siswaList, setSiswaList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [refreshTriger, setRefreshTriger] = useState(0);

  const navigate = useNavigate();

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

  const handleSearch = async () => {
    if (!searchInput) {
      return setRefreshTriger((prev) => prev + 1);
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

  const goToEdit = (siswa) =>
    navigate(`/edit/${siswa.id}`, { state: { siswa } });

  const goToDelete = (siswa) =>
    navigate(`/delete/${siswa.id}`, { state: { siswa } });
  return (
    <div className="card">
      <div className="header-flex">
        <h2>Daftar Siswa</h2>
        <button className="btn-primary" onClick={() => navigate("/add")}>
          + Tambah Siswa Baru
        </button>
      </div>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleReset={handleResetSearch}
        handleSearch={handleSearch}
      />
      <SiswaTable
        siswaList={siswaList}
        handDelete={goToDelete}
        handleEdit={goToEdit}
      />
    </div>
  );
};

export default StudentList;
