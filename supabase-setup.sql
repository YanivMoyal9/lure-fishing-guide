-- Lure suggestions from the website form.
-- Run once in Supabase: SQL Editor -> New query -> paste -> Run.

create table if not exists public.lure_suggestions (
  id           bigint generated always as identity primary key,
  created_at   timestamptz not null default now(),
  kind         text not null check (kind in ('new','fix')),
  existing_lure text check (char_length(existing_lure) <= 120),
  name         text not null check (char_length(name) between 2 and 120),
  size         text check (char_length(size) <= 60),
  lure_type    text check (char_length(lure_type) <= 40),
  method       text not null check (char_length(method) between 3 and 1500),
  fish         text[] check (cardinality(fish) <= 30),
  months       smallint[] check (months <@ array[1,2,3,4,5,6,7,8,9,10,11,12]::smallint[]),
  all_year     boolean not null default false,
  zone         text check (char_length(zone) <= 120),
  notes        text check (char_length(notes) <= 1500),
  submitted_by text check (char_length(submitted_by) <= 80),
  status       text not null default 'new' check (status in ('new','approved','rejected','done'))
);

-- Visitors may only ADD a suggestion. Nobody can read, edit or delete through the public key;
-- you review them in the Supabase dashboard (Table Editor -> lure_suggestions).
alter table public.lure_suggestions enable row level security;

drop policy if exists "anyone can submit" on public.lure_suggestions;
create policy "anyone can submit"
  on public.lure_suggestions
  for insert
  to anon
  with check (status = 'new');

grant insert on public.lure_suggestions to anon;
