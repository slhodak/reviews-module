CREATE TABLE review (
  id          serial,
  restaurant  int,
  user        int,
  text        varchar(1000),
  date        smalldatetime NOT NULL,
  overall     tinyint,
  food        tinyint,
  service     tinyint,
  ambience    tinyint,
  wouldRecommend  bit
)

CREATE TABLE user (
  id            serial,
  firstname     varchar(20),
  lastname      varchar(20),
  totalReviews  int
)

CREATE TABLE restaurant (
  id                serial,
  location          varchar(30), 
  restaurant        int,
  noise             varchar(10),
  recommendPercent  int
  value             numeric,
  averageOverall    numeric 
)