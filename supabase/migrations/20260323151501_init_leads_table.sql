create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact text not null,
  service_interest text,
  message text,
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

create policy "allow insert leads anon"
on public.leads
for insert
to anon
with check (true);

create policy "allow select leads authenticated"
on public.leads
for select
to authenticated
using (true);
