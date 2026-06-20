import { supabase } from '../../../../lib/supabase';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { data } = await supabase.from('pedidos').select('*').eq('id', params.id).single();
  return Response.json(data);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { status } = await req.json();
  await supabase.from('pedidos').update({ status }).eq('id', params.id);
  return Response.json({ ok: true });
}
