create table if not exists admins (
  id serial primary key,
  login text not null unique,
  password text not null
);

create table if not exists call_requests (
  id serial primary key,
  phone text not null,
  created_at timestamp with time zone default timezone('utc', now()) not null,
  processed boolean default false not null
);

create index if not exists idx_call_requests_processed on call_requests(processed);
