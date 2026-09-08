CREATE DATABASE latihan2;
USE latihan2;
CREATE TABLE pns (NIP int PRIMARY KEY, Nama varchar(50));

ALTER TABLE pns
	MODIFY NIP varchar(20) FIRST;

INSERT pns(NIP, Nama) VALUES
(197309172005011002, 'Mohamad Septiawan'),
(198201312021012006, 'Damayanti'),
(200901202023071003, 'Mohamad Naufal Dzakiy'),
(201406142024111002, 'Mohamad Tsaniy Atila Dzaka'),
(201511142025082002, 'Nabila Tsalsa Nuraisyah');

SELECT * FROM pns;

SET lc_time_names = 'id_ID';


-- 1973-09-17
-- 2005-01-10
-- 02
SELECT *, 
DATE_FORMAT(
	STR_TO_DATE(
		LEFT(NIP, 8),
        '%Y%m%d'
    ),
    '%W, %d %M %Y'
) 
as tanggal_lahir,
DATE_FORMAT(
	STR_TO_DATE(
		SUBSTRING(NIP, 9, 8),
        '%Y%m%d'
    ),
    '%M %Y'
) 
as tanggal_pns, 
RIGHT(NIP,2) as no_urut
FROM pns;

