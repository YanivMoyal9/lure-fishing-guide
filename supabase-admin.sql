-- Admin access: only the admin email can read, update and delete suggestions.
-- Visitors (anon) keep insert-only access.
drop policy if exists "admin can read" on public.lure_suggestions;
create policy "admin can read" on public.lure_suggestions
  for select to authenticated
  using ((auth.jwt() ->> 'email') = 'moyalyaniv9@gmail.com');

drop policy if exists "admin can update" on public.lure_suggestions;
create policy "admin can update" on public.lure_suggestions
  for update to authenticated
  using ((auth.jwt() ->> 'email') = 'moyalyaniv9@gmail.com')
  with check ((auth.jwt() ->> 'email') = 'moyalyaniv9@gmail.com');

drop policy if exists "admin can delete" on public.lure_suggestions;
create policy "admin can delete" on public.lure_suggestions
  for delete to authenticated
  using ((auth.jwt() ->> 'email') = 'moyalyaniv9@gmail.com');

grant select, update, delete on public.lure_suggestions to authenticated;
