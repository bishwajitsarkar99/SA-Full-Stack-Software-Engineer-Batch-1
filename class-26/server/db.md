

Table users {
  id integer [primary key]
  username varchar
  name varchr
  email varchar
  phone varchar
  role varchar
  created_at timestamp
}

Table doctors {
  id integer [primary key]
  name varchar
  title varchar
  experience varchar
  location varchar
  image varchar
  working_time varchar
  bio varchar
}

Table appointments {
  id integer [primary key]
  date date
  time time
  email varchar
  phone varchar
  doctorId integer
}

Table services {
id integer [primary key]
name varchar
description varchar
}




Ref: "doctors"."id" < "services"."id"

Ref: "users"."id" < "appointments"."id"



Ref: "appointments"."doctorId" < "doctors"."id"