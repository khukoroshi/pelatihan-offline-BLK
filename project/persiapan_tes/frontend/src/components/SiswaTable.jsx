const SiswaTable = ({ siswaList, handleEdit, handDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Kelas</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {siswaList.length > 0 ? (
          siswaList.map((siswa) => (
            <tr key={siswa.id}>
              <td>{siswa.id}</td>
              <td>{siswa.nama}</td>
              <td>{siswa.email}</td>
              <td>{siswa.kelas}</td>
              <td>
                <button class="btn-warning" onClick={() => handleEdit(siswa)}>
                  Edit
                </button>
                <button class="btn-danger" onClick={() => handDelete(siswa.id)}>
                  Hapus
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              tidak ada data
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default SiswaTable;
