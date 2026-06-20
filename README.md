# FoodDash — Delivery

App de entrega: cliente faz pedido, calcula-se a taxa por distância e o entregador é rastreado.
Stack de vibe coding: Next.js + Supabase.

## Metadados

| Campo | Valor |
|-------|-------|
| Framework | Next.js 14 |
| Auth/DB | Supabase |
| Versão | 0.1.0 |
| Licença | MIT |

## Estrutura

```
vibe-coding-delivery/
├── app/api/
│   ├── orders/route.ts
│   ├── orders/[id]/route.ts
│   └── driver/location/route.ts
├── lib/{distance,supabase}.ts
├── supabase/schema.sql
└── package.json
```

## Comportamento esperado (requisitos)

- **Distância/ETA**: fórmula de **Haversine** (esférica) em coordenadas; unidades corretas (km);
  ETA trata velocidade zero; **valores monetários em centavos** (taxa calculada no servidor).
- **Pedidos**: auth obrigatória; `total`/`status` definidos **pelo servidor** (status só muda via
  transição autorizada — entregador/admin); dono vem da sessão (sem IDOR); PII (endereço/telefone)
  e pagamento protegidos (sem cartão em texto puro).
- **Rastreamento**: só o **entregador autenticado** atualiza a própria localização; o cliente só vê
  a localização do **seu** pedido; coordenadas validadas; estado persistido com sincronização.
- **DB**: **RLS habilitado** com políticas por usuário; índices adequados.
