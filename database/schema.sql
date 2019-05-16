CREATE TABLE restaurants (
  id                serial primary key unique,
  name              varchar(20),
  location          varchar(30), 
  noise             varchar(10),
  recommendpercent  int,
  valuerating       numeric,
  averageoverall    numeric
);

CREATE TABLE diners (
  id            serial primary key unique,
  firstname     varchar(20),
  lastname      varchar(20),
  city          varchar(20),
  totalreviews  int
);

CREATE TABLE reviews (
  id              serial primary key unique,
  restaurant      int,
  diner           int,
  text            varchar(1000),
  date            int,
  overall         int,
  food            int,
  service         int,
  ambience        int,
  wouldrecommend  boolean,
  -- a string of csv to filter reviews by, often null
  tags            varchar(100),
  foreign key (diner) references diners(id),
  foreign key (restaurant) references restaurants(id)
);