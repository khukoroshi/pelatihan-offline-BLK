import { useNavigate, useLocation, useParams } from "react-router-dom";

const API_URL = "http://localhost:3000/api/siswa";

const DeleteStudent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const siswa = location.state?.siswa;
  if (!siswa) {
    navigate("/");
    return null;
  }
  const handDelete = async () => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

      if (response.ok) {
        alert("Member dikick secara permanen");
        navigate("/");
      } else {
        const result = await response.json();
        alert(`Gagal Menghapus: ${result.message}`);
      }
    } catch (error) {
      console.error("Terjadi Kesalahan pada server", error);
    }
  };
  return (
    <div className="card card-danger">
      <h2 className="text-danger-title">Verifikasi Penghapusan Data</h2>
      <p>Apakah Anda yakin ingin menghapus data siswa berikut?</p>
      <div className="data-box">
        <p>
          <strong>ID:</strong> {siswa.id}
        </p>
        <p>
          <strong>Nama:</strong> {siswa.nama}
        </p>
        <p>
          <strong>Email:</strong> {siswa.email}
        </p>
        <p>
          <strong>Kelas:</strong> {siswa.kelas}
        </p>
      </div>
      <p className="text-danger-bold">Tindakan ini tidak dapat dibatalkan!</p>
      <div className="button-group-center">
        <button className="btn-secondary" onClick={() => navigate("/")}>
          Batal
        </button>
        <button className="btn-danger" onClick={handDelete}>
          Ya, Hapus Permanen
        </button>
      </div>
    </div>
  );
};

export default DeleteStudent;
