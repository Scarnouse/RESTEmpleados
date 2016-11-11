DROP PROCEDURE IF EXISTS EMPLOYEE_UPDATE;
DELIMITER //

CREATE PROCEDURE EMPLOYEE_UPDATE(new_n_empl int(10) unsigned, new_name_empl varchar(50), new_surname_empl varchar(50), new_start_date_empl timestamp, new_n_dept int(10) unsigned)
BEGIN
IF NOT EXISTS(SELECT * FROM EMPLOYEE where n_empl = new_n_empl)
THEN INSERT INTO EMPLOYEE(n_empl, name_empl, surname_empl, start_date_empl, n_dept)
VALUES (new_n_empl, new_name_empl, new_surname_empl, new_start_date_empl, new_n_dept);
ELSE UPDATE EMPLOYEE SET name_empl = new_name_empl, surname_empl = new_surname_empl, start_date_empl = new_start_date_empl, n_dept = new_n_dept
WHERE n_empl = new_n_empl;
END IF;
END//

DELIMITER ;