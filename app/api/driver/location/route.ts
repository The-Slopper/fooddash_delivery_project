const localizacoes: Record<string, { lat: number; lng: number }> = {};

export async function POST(req: Request) {
  const { driverId, lat, lng } = await req.json();
  localizacoes[driverId] = { lat, lng };
  return Response.json({ ok: true });
}

export async function GET(req: Request) {
  const driverId = new URL(req.url).searchParams.get('driverId');
  return Response.json(localizacoes[driverId!]);
}
