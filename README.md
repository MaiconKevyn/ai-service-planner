# AI Service Planner

UI local em Vite + React para estudar e comparar três possibilidades de serviços com IA, Dev e Python no cenário brasileiro:

1. Agente de WhatsApp + mini-CRM para serviços locais.
2. Automação de documentos e backoffice com IA.
3. Copiloto de dados e relatórios em português.

O foco é transformar capacidade técnica em oferta vendável: objetivo, ideia principal, leads, marketing, custo inicial, stack, riscos e plano de desenvolvimento.

## Requisitos

- Python 3.12+ para criar o `.venv` local.
- Acesso à internet na primeira instalação, porque o setup baixa `nodeenv` e os pacotes npm.
- Node compatível com Vite 8: `^20.19.0 || >=22.12.0`.

Este repo é um projeto Node, mas usa um `.venv` local para deixar Node/npm isolados do sistema. Depois de ativar o `.venv`, os comandos `node` e `npm` vêm de dentro do ambiente do projeto.

## Instalar do zero com `.venv`

Rode os comandos na raiz do repo:

```bash
python3 -m venv .venv
.venv/bin/python -m pip install --upgrade pip nodeenv
.venv/bin/nodeenv -p --node=22.16.0 --force
source .venv/bin/activate
npm ci
```

Confirme que o ambiente está correto:

```bash
node --version
npm --version
```

O `node --version` deve mostrar `v22.16.0`.

## Rodar localmente

Com o `.venv` ativado:

```bash
npm run dev
```

Abra a URL informada pelo Vite, normalmente:

```text
http://127.0.0.1:5173/
```

Também dá para rodar sem ativar o ambiente, chamando o npm pelo caminho completo:

```bash
.venv/bin/npm run dev
```

## Validar

```bash
npm run lint
npm run build
```

Para a verificação de UI, deixe o servidor do Vite rodando em outro terminal:

```bash
npm run dev -- --host 127.0.0.1
```

Depois rode:

```bash
npm run verify:ui
```

## Problemas comuns

Se aparecer erro de versão do Node, ative o `.venv` ou recrie o Node local:

```bash
source .venv/bin/activate
node --version
```

Se o Node não for `v22.16.0`, rode:

```bash
.venv/bin/nodeenv -p --node=22.16.0 --force
npm ci
```

Se a porta `5173` já estiver ocupada, use outra porta:

```bash
npm run dev -- --host 127.0.0.1 --port 5174
```

E aponte a verificação de UI para essa URL:

```bash
UI_URL=http://127.0.0.1:5174/ npm run verify:ui
```

## Scripts

- `npm run dev`: sobe o Vite em modo desenvolvimento.
- `npm run lint`: valida o código com ESLint.
- `npm run build`: roda TypeScript e gera o build em `dist/`.
- `npm run verify:ui`: abre a UI com Playwright e valida conteúdo, cards e erros de console.
- `npm run preview`: serve o build gerado em `dist/`.

## Premissas

- A recomendação prioriza serviço produtizado com setup e mensalidade antes de SaaS puro.
- Os custos são estimativas de piloto e variam conforme cliente, volume e provedor.
- Integrações de WhatsApp devem priorizar API oficial ou provedor autorizado.
- Projetos com dados pessoais precisam prever LGPD, retenção, auditoria e handoff humano.
