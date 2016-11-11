CREATE TABLE IF NOT EXISTS PROJECT (
    n_proj int(10) unsigned NOT NULL AUTO_INCREMENT,
    name_proj varchar(50) NOT NULL,
    budget_proj int(10) NOT NULL,
    PRIMARY KEY (n_proj),
    UNIQUE KEY proj_name_unique (name_proj)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;