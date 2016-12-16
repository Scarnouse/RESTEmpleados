CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'usuario';

GRANT DELETE, INSERT, SELECT, UPDATE ON EMPLOYEES.* TO 'usuario'@'localhost';
GRANT EXECUTE ON PROCEDURE EMPLOYEES.DEPARTMENT_UPDATE TO 'usuario'@'localhost';
GRANT EXECUTE ON PROCEDURE EMPLOYEES.EMPLOYEE_UPDATE TO 'usuario'@'localhost';
GRANT EXECUTE ON PROCEDURE EMPLOYEES.PROJECT_UPDATE TO 'usuario'@'localhost';
GRANT EXECUTE ON PROCEDURE EMPLOYEES.WORKS_ON_UPDATE TO 'usuario'@'localhost';

FLUSH PRIVILEGES;