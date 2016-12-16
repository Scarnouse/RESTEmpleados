CREATE TABLE IF NOT EXISTS WORKS_ON (
    n_proj int(10) unsigned NOT NULL,
    n_empl int(10) unsigned NOT NULL,
    start_date_proj date NOT NULL DEFAULT '0000-00-00',
    task varchar(50) NOT NULL,
    PRIMARY KEY (n_proj, n_empl),
    FOREIGN KEY (n_proj) REFERENCES PROJECT(n_proj) ON DELETE CASCADE,
    FOREIGN KEY (n_empl) REFERENCES EMPLOYEE(n_empl) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;