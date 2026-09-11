use latihan2;

/*menambahkan data menggunakan procedure untuk 
insert --> call ins_pns_baru('nip','nama','kode_agm')
update --> call upd_baru('nip', 'kode_agm')
delete --> call del_pns_baru('nip')
select --> call tampil_pns() */

DELIMITER //

CREATE PROCEDURE ins_pns_baru(
	IN in_nip char(18),
    IN in_nama varchar(50),
    IN in_kode_agm char(1)
)
BEGIN
	INSERT pns(NIP, Nama, kode_agm)
    VALUES (in_nip, in_nama, in_kode_agm);
END//

CREATE PROCEDURE upd_pns_agama(
	IN in_nip char(18),
    IN in_kode_agm char(1)
)
BEGIN
	UPDATE pns 
    SET kode_agm = in_kode_agm
    WHERE NIP = in_nip;
END//

CREATE PROCEDURE del_pns (
	IN in_nip char(18)
)
BEGIN
	DELETE FROM pns 
    WHERE NIP = in_nip;
END//

CREATE PROCEDURE tampil_pns()
BEGIN
	SELECT 	p.NIP, 
			p.Nama, 
            p.kode_agm as kode_agama,
			a.nm_agama
	FROM 	pns as p, 
			agama as a
	WHERE	p.kode_agm = a.kd_agama;
END//

CREATE PROCEDURE tampilan_lengkap_pns()
BEGIN
	SELECT 	p.NIP, 
			p.Nama, 
			DATE_FORMAT(
				LEFT(p.NIP, 8),
				'%W, %d %M %Y'
			) 
			as tanggal_lahir,
			DATE_FORMAT(
				CONCAT(MID(p.NIP, 9, 6),'28'),
				'%M %Y'
			) 
			as tanggal_pns, 
			IF(MID(p.NIP, 15,1) = '1', 'Pria','Wanita') as jenis_kelamin,
			RIGHT(p.NIP,3) as no_urut,
			p.kode_agm as kode_agama,
			a.nm_agama
	FROM 	pns as p, 
			agama as a
	WHERE	p.kode_agm = a.kd_agama;
END//


DELIMITER ;

DROP PROCEDURE tampil_pns;

CALL ins_pns_baru('196210112006121005','Thomas Jorgi','3');
CALL ins_pns_baru('198503022017012003','Queen Latifa','2');
CALL ins_pns_baru('201211271018071001','I Nyoman Kribo','6');
CALL ins_pns_baru('198905142005122002','Maylani Kusuma','5');
CALL ins_pns_baru('201310242020082003','Wei Ma Song','4');

-- testing CALL
-- CALL ins_pns_baru('anomali', 'tung tung sahur', '1');
-- CALL upd_pns_agama('anomali','2');
-- CALL del_pns('anomali');


CALL tampil_pns();

CALL tampilan_lengkap_pns();




