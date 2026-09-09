CREATE DATABASE kalkulator;
USE kalkulator;

DELIMITER //

CREATE FUNCTION operasiMTK (
	in_operasi varchar(6),
    in_bill1 tinyint,
    in_bill2 tinyint
) returns tinyint DETERMINISTIC
BEGIN
	return CASE in_operasi
		WHEN 'tambah' THEN in_bill1 + in_bill2
		WHEN 'bagi' THEN in_bill1 / in_bill2
		WHEN 'kali' THEN in_bill1 * in_bill2
		WHEN 'kurang' THEN in_bill1 - in_bill2
        END;
END//

DELIMITER ;

SELECT operasiMTK('tambah', 20, 13) as hasil;