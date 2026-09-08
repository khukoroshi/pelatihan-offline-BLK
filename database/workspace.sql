-- DROP DATABASE book;
CREATE DATABASE IF NOT EXISTS book1;
USE book1;

CREATE TABLE users2 (
	nama varchar(10),
    jk char(1),
    status varchar(10)
);

INSERT users2(nama, jk, status) VALUES
('Irfan', 'l', 'sendiri'),
('Riyan', 'l', 'kawin'),
('Rio', 'l', 'cerai'),
('Nida', 'p', 'sendiri'),
('Ghefira', 'p', 'kawin'),
('Salsabila', 'p', 'cerai');


SELECT *, 
IF(jk = 'l',
	IF(Status = 'sendiri', 'Bujang', IF(Status = 'cerai', 'Duda', 'Menikah')),
	IF(Status = 'sendiri', 'Perawan', IF(Status = 'cerai', 'Janda', 'Menikah'))
) as ket_IF,
CASE Status
	WHEN 'sendiri' 
		THEN CASE jk
			WHEN 'l' THEN 'Bujang' 
            ELSE 'Perawan' END
	WHEN 'cerai' 
		THEN CASE jk
			WHEN 'l' THEN 'Duda' 
            ELSE 'Janda' END
	ELSE 'Menikah' END
as ket_CASE,
CASE status
	WHEN 'sendiri' 
		THEN IF(jk = 'l', 'Bujang', 'Perawan')
	WHEN 'cerai' 
		THEN IF(jk = 'l', 'Duda', 'Janda')
	ELSE 'Menikah' END
as ket_CASE_IF
FROM users2;