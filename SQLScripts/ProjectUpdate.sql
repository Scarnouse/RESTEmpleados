DROP PROCEDURE IF EXISTS PROJECT_UPDATE;
DELIMITER //

CREATE PROCEDURE PROJECT_UPDATE(new_n_proj int(10) unsigned, new_name_proj varchar(50), new_budget_proj int(10))
BEGIN
IF NOT EXISTS(SELECT * FROM PROJECT where n_proj = new_n_proj)
THEN INSERT INTO PROJECT(n_proj, name_proj, budget_proj)
VALUES (new_n_proj, new_name_proj, new_budget_proj);
ELSE UPDATE PROJECT SET name_proj = new_name_proj, budget_proj = new_budget_proj
WHERE n_proj = new_n_proj;
END IF;
END//

DELIMITER ;