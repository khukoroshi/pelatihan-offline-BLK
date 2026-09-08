USE book1;

ALTER TABLE users2
	ADD COLUMN id_user TINYINT FIRST;

UPDATE users2
	SET id_user = 1
    WHERE nama = 'Irfan';
UPDATE users2
	SET id_user = 2
    WHERE nama = 'Riyan';
UPDATE users2
	SET id_user = 3
    WHERE nama = 'Rio';
UPDATE users2
	SET id_user = 4
    WHERE nama = 'Nida';
UPDATE users2
	SET id_user = 5
    WHERE nama = 'Ghefira';
UPDATE users2
	SET id_user = 6
    WHERE nama = 'Salsabila';

ALTER TABLE users2
	ADD PRIMARY KEY (id_user);

ALTER TABLE users2
	DROP COLUMN id_user;
    
ALTER TABLE users2
	DROP PRIMARY KEY;
    
ALTER TABLE users2
	MODIFY id_user TINYINT KEY AUTO_INCREMENT FIRST;

INSERT users2 (nama, jk, status) VALUES
('Fuad', 'l', 'cerai'),
('Nita', 'p', 'sendiri');


SELECT * FROM users2;
/*
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
*/