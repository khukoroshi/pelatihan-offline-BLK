const SiswaForm = ({
  formData,
  isEditing,
  handleInputChange,
  handleSubmit,
  resetForm,
}) => {
  return (
    <div className="card">
      <h2>{isEditing ? "Edit Data Siswa" : "Tambah Siswa Baru"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="nama">Nama Lengkap</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleInputChange}
            required
            placeholder="Masukkan nama"
          />
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Masukkan email"
          />
        </div>
        <div className="form-group">
          <label for="kelas">Kelas Lengkap</label>
          <input
            type="text"
            name="kelas"
            value={formData.kelas}
            onChange={handleInputChange}
            required
            placeholder="Contoh: 10 IPA 1"
          />
        </div>
        <button type="submit" className="btn-primary">
          {isEditing ? "Update Data" : "Simpan Data"}
        </button>
        {isEditing && (
          <button type="button" onClick={resetForm} className="btn-secondary">
            Batal
          </button>
        )}
      </form>
    </div>
  );
};

export default SiswaForm;
