CREATE DATABASE latihan2;
USE latihan2;
CREATE TABLE pns (NIP int PRIMARY KEY, Nama varchar(50));
-- perbaikan structure kolom di NIP menjadi char
ALTER TABLE pns  
	MODIFY NIP char(18) FIRST;

INSERT pns(NIP, Nama) VALUES
(197309172005011002, 'Mohamad Septiawan'),
(198201312021012006, 'Damayanti'),
(200901202023071003, 'Mohamad Naufal Dzakiy'),
(201406142024111002, 'Mohamad Tsaniy Atila Dzaka'),
(201511142025082002, 'Nabila Tsalsa Nuraisyah');

SELECT * FROM pns;

SET lc_time_names = 'id_ID';


-- 1973-09-17 tgl_lahir
-- 2005-01 tgl_pns
-- 1 jk
-- 002 no_urut
CREATE VIEW vw_pns as
SELECT *, 
DATE_FORMAT(
	LEFT(NIP, 8),
    '%W, %d %M %Y'
) 
as tanggal_lahir,
DATE_FORMAT(
	CONCAT(MID(NIP, 9, 6),'28'),
    '%M %Y'
) 
as tanggal_pns, 
IF(MID(NIP, 15,1) = '1', 'Pria','Wanita') as jenis_kelamin,
RIGHT(NIP,3) as no_urut
FROM pns;

SELECT * FROM vw_pns;


CREATE TABLE agama(
	kd_agama char(1),
    nm_agama varchar(10),
    PRIMARY KEY(kd_agama)
);

ALTER TABLE agama
	MODIFY nm_agama varchar(12);

DROP PROCEDURE inputAgama;

DELIMITER //

CREATE PROCEDURE inputAgama (
    IN in_kd_agama CHAR(1),
    IN in_nm_agama VARCHAR(12)
)
BEGIN
    INSERT agama (kd_agama, nm_agama) 
    VALUES (in_kd_agama, in_nm_agama);
END//

DELIMITER ;

CALL inputAgama ('1', 'Islam');
CALL inputAgama ('2', 'Katholik');
CALL inputAgama ('3', 'Protestan');
CALL inputAgama ('4', 'Konghuchu');
CALL inputAgama ('5', 'Hindu');
CALL inputAgama ('6', 'Budha');
CALL inputAgama ('7', 'Kepercayaan');

-- Error Code: 1406. Data too long for column 'in_nm_agama' at row 1

CREATE VIEW vw_agama as
SELECT * FROM agama;

-- --- ---- ----- ------

SELECT * FROM vw_agama;

SELECT * FROM pns;

SELECT * FROM pns 
	WHERE Nama like '%D_%';

ALTER TABLE pns
	ADD kode_agm CHAR(1);

UPDATE pns 
SET kode_agm = '1' 
WHERE Nama LIKE 'D%';

ALTER TABLE pns 
	ADD CONSTRAINT fk_pns2agama FOREIGN KEY (kode_agm)
	REFERENCES agama(kd_agama);
    
SELECT 	p.NIP, 
		p.Nama, 
        a.nm_agama
FROM 	pns as p, 
		agama as a
WHERE	p.kode_agm = a.kd_agama;


