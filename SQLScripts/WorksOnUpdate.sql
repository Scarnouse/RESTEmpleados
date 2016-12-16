DROP PROCEDURE IF EXISTS WORKS_ON_UPDATE;
DELIMITER //

CREATE PROCEDURE WORKS_ON_UPDATE(new_n_proj int(10), new_n_empl int(10) unsigned, new_start_date_proj date, new_task varchar(50))
BEGIN
IF NOT EXISTS(SELECT * FROM WORKS_ON WHERE n_proj = new_n_proj AND n_empl = new_n_empl)
THEN INSERT INTO WORKS_ON(n_proj, n_empl, start_date_proj, task)
VALUES (new_n_proj, new_n_empl, new_start_date_proj, new_task);
SELECT "201" AS code;
ELSE UPDATE WORKS_ON SET start_date_proj = new_start_date_proj, task = new_task
WHERE n_proj = new_n_proj AND n_empl = new_n_empl;
SELECT "200" AS code;
END IF;
END//

DELIMITER ;