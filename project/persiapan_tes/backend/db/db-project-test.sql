CREATE DATABASE sekolah_db;

USE sekolah_db;

CREATE TABLE siswa (
	id INT auto_increment primary key,
    nama varchar(100) not null,
    email varchar(100) not null unique,
    kelas varchar(50) not null,
    tanggal_daftar timestamp default current_timestamp
);

-- INSERT siswa values ();