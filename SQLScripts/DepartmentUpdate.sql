DROP PROCEDURE IF EXISTS DEPARTMENT_UPDATE;
DELIMITER //

CREATE PROCEDURE DEPARTMENT_UPDATE(new_n_dept int(10) unsigned, new_name_dept varchar(50))
BEGIN
IF NOT EXISTS(SELECT * FROM DEPARTMENT where n_dept = new_n_dept)
THEN INSERT INTO DEPARTMENT(n_dept, name_dept)
VALUES (new_n_dept, new_name_dept);
ELSE UPDATE DEPARTMENT SET name_dept = new_name_dept
WHERE n_dept = new_n_dept;
END IF;
END//

DELIMITER ;