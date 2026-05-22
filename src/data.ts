import {
  BarChart3,
  Bot,
  BrainCircuit,
  ClipboardCheck,
  FileSearch,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react'

export type Opportunity = {
  id: string
  rank: string
  title: string
  shortTitle: string
  tagline: string
  score: number
  confidence: string
  bestFor: string
  timeToFirstSale: string
  setupPrice: string
  monthlyPrice: string
  initialCost: string
  Icon: LucideIcon
  objective: string
  mainIdea: string
  whyNow: string[]
  idealCustomers: string[]
  leadSignals: string[]
  offer: string[]
  marketing: {
    positioning: string
    leadMagnet: string
    outreach: string
    proof: string
    metrics: string[]
  }
  developmentPlan: {
    phase: string
    duration: string
    tasks: string[]
    deliverable: string
  }[]
  stack: {
    label: string
    items: string[]
  }[]
  costs: {
    item: string
    range: string
    note: string
  }[]
  risks: string[]
  firstExperiment: string
  implementationGuide?: {
    title: string
    summary: string
    easiestPath: string[]
    credentials: {
      name: string
      where: string
      use: string
      productionNote: string
    }[]
    steps: {
      phase: string
      title: string
      objective: string
      tasks: string[]
      links: string[]
    }[]
    links: {
      label: string
      url: string
      note: string
    }[]
    pitfalls: string[]
    followUpChecklist: string[]
  }
}

export const opportunities: Opportunity[] = [
  {
    id: 'whatsapp-agent',
    rank: '01',
    title: 'Agente de WhatsApp + mini-CRM para serviços locais',
    shortTitle: 'WhatsApp + CRM',
    tagline:
      'Atendimento, qualificação de contatos, agendamento, follow-up e resumo comercial para o dono.',
    score: 94,
    confidence: 'Melhor início',
    bestFor: 'Clínicas, estética, cursos, imobiliárias e assistência técnica',
    timeToFirstSale: '7 a 21 dias',
    setupPrice: 'R$ 3.000 a R$ 8.000',
    monthlyPrice: 'R$ 700 a R$ 2.500',
    initialCost: 'R$ 250 a R$ 900 no primeiro mês',
    Icon: MessageCircle,
    objective:
      'Aumentar conversão de contatos em vendas ou agendamentos sem depender de resposta manual o dia inteiro.',
    mainIdea:
      'Conectar WhatsApp oficial, uma base simples de clientes e uma IA com regras de atendimento. O sistema responde dúvidas frequentes, coleta dados, identifica intenção de compra, agenda quando possível e passa casos sensíveis para uma pessoa.',
    whyNow: [
      'O WhatsApp é o principal canal de comunicação para mais de 80% dos pequenos negócios de serviço no Brasil.',
      'Quase metade dos pequenos negócios brasileiros já usa alguma ferramenta de IA, mas ainda falta implementação orientada a processo.',
      'Muitos negócios têm demanda no WhatsApp, mas não têm histórico, funil, CRM leve ou follow-up estruturado.',
    ],
    idealCustomers: [
      'Clínicas odontológicas, estética, fisioterapia e psicologia com alta procura por agenda.',
      'Cursos livres, escolas de idioma e preparatórios que recebem perguntas repetidas.',
      'Imobiliárias e prestadores de serviço que perdem orçamento por demora no primeiro contato.',
    ],
    leadSignals: [
      'Dono reclama que responde WhatsApp fora do expediente.',
      'Equipe usa etiquetas manuais, caderno, planilha ou memória para lembrar follow-up.',
      'Existem mensagens sem resposta, orçamento esquecido ou lead que some depois do preço.',
      'A empresa já anuncia no Instagram ou Google, mas não mede atendimento até venda.',
    ],
    offer: [
      'Diagnóstico do funil do WhatsApp em uma hora, com mapa de perda de contatos.',
      'Piloto de 7 dias em uma linha de serviço, sem trocar todo o sistema atual.',
      'Dashboard com conversas, status do contato, próximos retornos e resumo diário.',
      'Handoff humano obrigatório para reclamações, dados sensíveis, negociação e exceções.',
    ],
    marketing: {
      positioning:
        '“Eu organizo seu WhatsApp para transformar contato perdido em agenda, orçamento e retorno automático.”',
      leadMagnet:
        'Auditoria gratuita de 10 conversas recentes: tempo de resposta, perguntas repetidas e pontos de perda.',
      outreach:
        'Mensagem curta para donos no Instagram/Google Maps: cite um gargalo visível e ofereça o diagnóstico.',
      proof:
        'Antes e depois com tempo médio de resposta, contatos classificados e número de follow-ups executados.',
      metrics: [
        'Tempo de primeira resposta',
        'Taxa de contato qualificado',
        'Agendamentos criados',
        'No-shows evitados',
        'Receita atribuída ao funil',
      ],
    },
    developmentPlan: [
      {
        phase: 'Semana 1',
        duration: 'MVP vendável',
        tasks: [
          'Criar fluxo de conversa para um nicho e 15 perguntas frequentes.',
          'Salvar contatos, intenção, origem, status e próximo passo.',
          'Gerar resumo diário por e-mail, WhatsApp interno ou dashboard.',
        ],
        deliverable: 'Demo com conversas simuladas e painel de leads.',
      },
      {
        phase: 'Semana 2',
        duration: 'Piloto real',
        tasks: [
          'Integrar WhatsApp Cloud API ou provedor oficial.',
          'Adicionar agenda via Google Calendar ou Calendly.',
          'Criar handoff humano com motivo da transferência.',
        ],
        deliverable: 'Piloto com uma empresa e relatório de conversão.',
      },
      {
        phase: 'Semanas 3 e 4',
        duration: 'Produto recorrente',
        tasks: [
          'Adicionar CRM leve, templates e histórico de conversas.',
          'Criar painel de métricas e alertas de leads parados.',
          'Padronizar onboarding para repetir em outros clientes do nicho.',
        ],
        deliverable: 'Oferta replicável com setup e mensalidade.',
      },
    ],
    stack: [
      {
        label: 'Backend',
        items: ['Python', 'FastAPI', 'PostgreSQL', 'Redis/RQ', 'SQLAlchemy'],
      },
      {
        label: 'IA',
        items: ['OpenAI ou Anthropic', 'RAG simples', 'guardrails', 'avaliação de respostas'],
      },
      {
        label: 'Canais',
        items: ['WhatsApp Cloud API', 'Google Calendar', 'webhooks', 'e-mail transacional'],
      },
      {
        label: 'Frontend',
        items: ['React', 'dashboard responsivo', 'linha do tempo do contato'],
      },
    ],
    costs: [
      {
        item: 'Domínio e landing page',
        range: 'R$ 50 a R$ 150',
        note: 'Pode começar com página simples e formulário.',
      },
      {
        item: 'Hospedagem e banco',
        range: 'R$ 0 a R$ 150/mês',
        note: 'Vercel/Render/Fly.io/Supabase resolvem o piloto.',
      },
      {
        item: 'WhatsApp oficial',
        range: 'R$ 0 a R$ 300+',
        note: 'Varia por provedor, volume e conversas cobradas pela Meta.',
      },
      {
        item: 'LLM e observabilidade',
        range: 'R$ 50 a R$ 300',
        note: 'Controle com limite por cliente e cache de perguntas frequentes.',
      },
    ],
    risks: [
      'Prometer atendimento 100% autônomo antes de validar casos reais.',
      'Usar integração não oficial de WhatsApp e perder estabilidade.',
      'Deixar a IA decidir preço, condição comercial ou assunto sensível sem regra humana.',
    ],
    firstExperiment:
      'Monte uma demo para clínica de estética com 20 perguntas frequentes, agenda falsa e relatório de leads. Mostre para 10 donos e tente vender 2 pilotos pagos.',
    implementationGuide: {
      title: 'Caminho mais fácil para implementar com WhatsApp Cloud API',
      summary:
        'Comece pelo Cloud API oficial da Meta. Use o número de teste e token temporário para provar envio/recebimento, depois gere um token de System User, conecte um número real e só então cobre o piloto.',
      easiestPath: [
        'Não comece por BSP pago nem por automação não oficial de WhatsApp Web. O caminho mais limpo para o MVP é Cloud API direto pela Meta.',
        'Primeiro objetivo técnico: enviar uma mensagem de teste via endpoint `/messages` e receber uma mensagem no webhook HTTPS.',
        'Primeiro objetivo comercial: rodar um fluxo pequeno de triagem, agenda e handoff humano para um nicho, sem prometer atendimento autônomo total.',
      ],
      credentials: [
        {
          name: 'Temporary access token',
          where: 'Meta Developers > seu App > WhatsApp > API Setup ou Quickstart.',
          use: 'Serve para testar o primeiro envio com o número de teste da Meta.',
          productionNote:
            'Expira e não deve ir para produção. Troque por token de System User antes do piloto real.',
        },
        {
          name: 'Phone Number ID',
          where: 'Meta Developers > WhatsApp > API Setup, junto do número de teste ou número real.',
          use: 'Entra na URL `https://graph.facebook.com/vXX.X/{PHONE_NUMBER_ID}/messages`.',
          productionNote:
            'Cada número real tem seu próprio ID. Não confunda com o telefone em formato +55.',
        },
        {
          name: 'WhatsApp Business Account ID (WABA ID)',
          where: 'Meta Developers > WhatsApp > API Setup ou WhatsApp Manager.',
          use: 'Usado para gerenciar números, templates e ativos da conta WhatsApp Business.',
          productionNote:
            'Guarde junto do Business Manager correto, principalmente se atender mais de um cliente.',
        },
        {
          name: 'System User access token',
          where: 'Meta Business Settings > Users > System Users > Generate token.',
          use: 'Token estável para backend, com permissões `whatsapp_business_messaging` e `whatsapp_business_management`.',
          productionNote:
            'Use em variável de ambiente, nunca no frontend. Revogue e regenere se vazar.',
        },
        {
          name: 'Webhook verify token e App Secret',
          where: 'Você define o verify token no backend; o App Secret fica em Meta Developers > App Settings.',
          use: 'O verify token valida a configuração inicial do webhook; o App Secret ajuda a verificar assinatura de eventos.',
          productionNote:
            'Webhook precisa estar em HTTPS público. Para dev local, use túnel como ngrok ou Cloudflare Tunnel.',
        },
      ],
      steps: [
        {
          phase: 'Passo 1',
          title: 'Criar App e habilitar WhatsApp',
          objective:
            'Ter um app Business no Meta Developers com produto WhatsApp ativo e acesso ao painel API Setup.',
          tasks: [
            'Entrar em Meta for Developers e criar um app do tipo Business.',
            'Adicionar o produto WhatsApp ao app.',
            'Criar ou selecionar uma Meta Business Account para vincular ao app.',
            'Abrir WhatsApp > API Setup/Quickstart e localizar token temporário, Phone Number ID e WABA ID.',
          ],
          links: ['Meta Developers Apps', 'Cloud API Get Started'],
        },
        {
          phase: 'Passo 2',
          title: 'Enviar a primeira mensagem',
          objective:
            'Provar que o token, o Phone Number ID e o número de destino estão corretos antes de construir o bot.',
          tasks: [
            'Adicionar seu telefone como destinatário de teste no painel da Meta.',
            'Enviar uma mensagem `hello_world` ou texto de teste para seu número.',
            'Guardar no `.env` apenas do backend: `WHATSAPP_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID`, `WHATSAPP_WABA_ID` e `WHATSAPP_GRAPH_VERSION`.',
            'Implementar uma função backend simples `sendWhatsAppMessage(to, body)` usando `POST /{PHONE_NUMBER_ID}/messages`.',
          ],
          links: ['Send Messages Guide', 'Meta Postman Collection'],
        },
        {
          phase: 'Passo 3',
          title: 'Criar webhook de entrada',
          objective:
            'Receber mensagens de clientes e status de entrega para alimentar CRM, IA e handoff humano.',
          tasks: [
            'Criar endpoint público `GET /webhooks/whatsapp` para validação do verify token.',
            'Criar endpoint `POST /webhooks/whatsapp` para receber eventos de mensagens e status.',
            'Configurar a URL HTTPS no painel WhatsApp > Configuration.',
            'Assinar o campo `messages` para receber mensagens inbound e atualizações.',
            'Salvar payload bruto, telefone do contato, texto, timestamp e `wamid` antes de chamar a IA.',
          ],
          links: ['Cloud API Webhooks', 'ngrok Facebook Webhooks'],
        },
        {
          phase: 'Passo 4',
          title: 'Trocar teste por produção',
          objective:
            'Sair do token temporário e preparar um piloto real sem depender de credencial pessoal.',
          tasks: [
            'Criar System User no Business Settings e gerar token com `whatsapp_business_messaging` e `whatsapp_business_management`.',
            'Adicionar um número real no WhatsApp Manager ou registrar um número dedicado ao cliente.',
            'Configurar forma de pagamento e checar pricing por país/categoria antes de rodar volume.',
            'Validar nome de exibição, Business Manager, permissões e acesso do app ao WABA.',
          ],
          links: ['Business Settings', 'WhatsApp Manager', 'Platform Pricing'],
        },
        {
          phase: 'Passo 5',
          title: 'Templates, janela de 24h e piloto',
          objective:
            'Evitar bloqueio de mensagens e deixar claro quando pode responder livremente ou quando precisa de template aprovado.',
          tasks: [
            'Usar mensagem livre apenas dentro da janela de atendimento de 24h aberta pelo cliente.',
            'Criar templates de utilidade para confirmação de agenda, lembrete e retorno de orçamento.',
            'Adicionar opt-in claro no formulário, landing page ou conversa inicial.',
            'No MVP, limitar IA a FAQ, triagem e coleta de dados; transferir preço, reclamação e exceção para humano.',
          ],
          links: ['Message Templates', 'Platform Pricing'],
        },
      ],
      links: [
        {
          label: 'Cloud API Get Started',
          url: 'https://developers.facebook.com/docs/whatsapp/cloud-api/get-started',
          note: 'Primeiro setup: app, WhatsApp, token temporário, número de teste e IDs.',
        },
        {
          label: 'Cloud API Overview',
          url: 'https://developers.facebook.com/docs/whatsapp/cloud-api/',
          note: 'Visão geral oficial da Cloud API, WABA, número de telefone e webhooks.',
        },
        {
          label: 'Send Messages Guide',
          url: 'https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-messages',
          note: 'Referência prática para enviar texto, templates, mídia e mensagens interativas.',
        },
        {
          label: 'Cloud API Webhooks',
          url: 'https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks',
          note: 'Configuração do endpoint HTTPS e eventos recebidos pelo backend.',
        },
        {
          label: 'Message Templates',
          url: 'https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates',
          note: 'Criação e gestão de templates para mensagens fora da janela de 24h.',
        },
        {
          label: 'WhatsApp Platform Pricing',
          url: 'https://whatsappbusiness.com/products/platform-pricing/',
          note: 'Preço por mensagem entregue, categoria e país. Recalcular antes de proposta.',
        },
        {
          label: 'Meta Developers Apps',
          url: 'https://developers.facebook.com/apps/',
          note: 'Painel para criar app, adicionar WhatsApp e acessar API Setup.',
        },
        {
          label: 'Business Settings',
          url: 'https://business.facebook.com/settings/',
          note: 'Onde criar System User, gerar token permanente e gerenciar permissões.',
        },
        {
          label: 'WhatsApp Manager',
          url: 'https://business.facebook.com/wa/manage/',
          note: 'Gerenciar número, nome de exibição, templates e conta WhatsApp Business.',
        },
        {
          label: 'Meta Postman Collection',
          url: 'https://www.postman.com/meta/whatsapp-business-platform/overview',
          note: 'Coleção útil para testar chamadas antes de escrever código.',
        },
        {
          label: 'ngrok Facebook Webhooks',
          url: 'https://ngrok.com/docs/integrations/webhooks/facebook-webhooks/',
          note: 'Atalho para testar webhook local com HTTPS público.',
        },
      ],
      pitfalls: [
        'O token temporário do Quickstart é bom para teste, mas quebra piloto real quando expira.',
        'Phone Number ID não é o número de telefone; usar o valor errado gera erro no endpoint.',
        'Número já usado no WhatsApp pessoal ou Business App pode exigir migração/coexistência antes de usar Cloud API.',
        'Mensagens iniciadas pela empresa fora da janela de 24h precisam de template aprovado.',
        'Nunca coloque token, App Secret ou WABA ID sensível no React; tudo fica no backend.',
      ],
      followUpChecklist: [
        'Criar app Business na Meta e abrir WhatsApp > API Setup.',
        'Enviar primeira mensagem para seu próprio número usando token temporário.',
        'Subir endpoint HTTPS de webhook e assinar `messages`.',
        'Criar System User token para produção e salvar em secret manager ou `.env` do backend.',
        'Desenhar 3 fluxos do piloto: qualificação, agendamento e handoff humano.',
        'Criar 2 templates utilitários aprováveis: confirmação de agenda e follow-up de orçamento.',
        'Medir no piloto: primeira resposta, leads qualificados, agendamentos e handoffs.',
      ],
    },
  },
  {
    id: 'document-automation',
    rank: '02',
    title: 'Automação de documentos e backoffice com IA',
    shortTitle: 'Documentos + backoffice',
    tagline:
      'Extração, conferência e lançamento assistido de dados de PDFs, contratos, notas, recibos e comprovantes.',
    score: 88,
    confidence: 'Ticket mais alto',
    bestFor: 'Contabilidade, financeiro, jurídico, imobiliárias e RH',
    timeToFirstSale: '14 a 30 dias',
    setupPrice: 'R$ 5.000 a R$ 15.000',
    monthlyPrice: 'R$ 1.000 a R$ 4.000',
    initialCost: 'R$ 300 a R$ 1.200 no primeiro mês',
    Icon: FileSearch,
    objective:
      'Reduzir digitação manual, erro operacional e tempo de fechamento em áreas administrativas.',
    mainIdea:
      'Criar um extrator que recebe documentos, classifica o tipo, extrai campos estruturados, calcula confiança, destaca divergências e entrega uma tela de revisão antes de exportar para planilha, ERP ou API.',
    whyNow: [
      'Backoffice financeiro, fiscal e contábil ainda usa IA de forma limitada, apesar de interesse crescente.',
      'Empresas médias e grandes brasileiras estão priorizando automação de processos, dados e IA generativa.',
      'A dor é mensurável: horas gastas com copiar e colar, retrabalho e fechamento atrasado.',
    ],
    idealCustomers: [
      'Escritórios de contabilidade com alto volume de documentos de clientes.',
      'Administradoras de imóveis que processam contratos, boletos, comprovantes e repasses.',
      'Financeiros que recebem PDFs por e-mail e lançam dados manualmente em ERP.',
      'Jurídicos e RHs que conferem contratos, documentos pessoais e comprovantes.',
    ],
    leadSignals: [
      'Equipe tem caixas de e-mail com anexos e planilhas de controle.',
      'Há retrabalho por erro de digitação, documento faltante ou campo divergente.',
      'O cliente já paga por BPO, ERP ou contabilidade, mas ainda usa muita conferência manual.',
      'O gestor consegue estimar horas gastas por mês no processo.',
    ],
    offer: [
      'Mapeamento de 3 tipos de documento e volume mensal.',
      'Piloto com 100 documentos históricos e relatório de acurácia por campo.',
      'Tela de revisão humana com confiança, justificativa e exportação em CSV/Excel/API.',
      'Cobrança por implantação mais volume mensal processado.',
    ],
    marketing: {
      positioning:
        '“Eu tiro sua equipe do copiar e colar de PDF e entrego dados conferidos para o sistema.”',
      leadMagnet:
        'Teste com 20 documentos do cliente: tempo manual estimado versus tempo com conferência assistida.',
      outreach:
        'Prospectar gestores financeiros, BPOs e contabilidades com pergunta direta sobre volume mensal de documentos.',
      proof:
        'Relatório com campos extraídos, taxa de revisão, erros evitados e horas poupadas no mês.',
      metrics: [
        'Minutos por documento',
        'Acurácia por campo',
        'Taxa de revisão humana',
        'Documentos processados por dia',
        'Horas poupadas no fechamento',
      ],
    },
    developmentPlan: [
      {
        phase: 'Semana 1',
        duration: 'Extrator vertical',
        tasks: [
          'Escolher um documento específico e mapear os campos obrigatórios.',
          'Criar parser com OCR/PDF, prompt estruturado e validação Pydantic.',
          'Salvar documento, campos, confiança e erros de validação.',
        ],
        deliverable: 'CLI ou upload simples que gera JSON validado.',
      },
      {
        phase: 'Semana 2',
        duration: 'Revisão humana',
        tasks: [
          'Criar UI para comparar documento e campos extraídos.',
          'Adicionar correção manual e trilha de auditoria.',
          'Exportar CSV/Excel no formato esperado pelo cliente.',
        ],
        deliverable: 'Tela de revisão com lote de documentos reais.',
      },
      {
        phase: 'Semanas 3 e 4',
        duration: 'Operação repetível',
        tasks: [
          'Adicionar filas, processamento assíncrono e alertas.',
          'Medir custo por documento e acurácia por tipo.',
          'Criar onboarding de novos layouts sem reescrever o sistema.',
        ],
        deliverable: 'Serviço com cobrança por volume e painel de qualidade.',
      },
    ],
    stack: [
      {
        label: 'Backend',
        items: ['Python', 'FastAPI', 'Pydantic', 'PostgreSQL', 'object storage'],
      },
      {
        label: 'Documentos',
        items: ['PyMuPDF', 'Docling', 'Tesseract/PaddleOCR', 'Textract ou Vision API'],
      },
      {
        label: 'IA',
        items: ['extração estruturada', 'validação por schema', 'classificação de documentos'],
      },
      {
        label: 'Frontend',
        items: ['React', 'fila de revisão', 'comparador documento-campo', 'exportação'],
      },
    ],
    costs: [
      {
        item: 'OCR/API de documentos',
        range: 'R$ 0 a R$ 500',
        note: 'Comece com baixo volume; cobre por lote para proteger margem.',
      },
      {
        item: 'LLM',
        range: 'R$ 100 a R$ 500',
        note: 'Use modelos menores quando o schema e a validação forem bons.',
      },
      {
        item: 'Storage e banco',
        range: 'R$ 50 a R$ 200',
        note: 'Criptografia, retenção e exclusão precisam estar no plano.',
      },
      {
        item: 'Amostra comercial',
        range: 'R$ 0 a R$ 200',
        note: 'O maior custo é tempo de análise dos documentos do cliente.',
      },
    ],
    risks: [
      'Vender acurácia genérica sem medir campo por campo.',
      'Ignorar LGPD, retenção de arquivo e permissão de acesso.',
      'Aceitar muitos layouts no início e perder foco do MVP.',
    ],
    firstExperiment:
      'Escolha um documento comum, como contrato de locação ou comprovante financeiro. Colete 50 exemplos, defina 12 campos e venda um piloto de conferência assistida para uma administradora ou escritório.',
  },
  {
    id: 'data-copilot',
    rank: '03',
    title: 'Copiloto de dados e relatórios em português',
    shortTitle: 'Dados + RAG',
    tagline:
      'Perguntas em linguagem natural sobre planilhas, bancos SQL e documentos internos, com respostas auditáveis.',
    score: 82,
    confidence: 'Maior diferenciação técnica',
    bestFor: 'SaaS B2B, saúde, educação, logística, consultorias e gestão pública',
    timeToFirstSale: '21 a 45 dias',
    setupPrice: 'R$ 8.000 a R$ 25.000',
    monthlyPrice: 'R$ 1.500 a R$ 6.000',
    initialCost: 'R$ 400 a R$ 1.500 no primeiro mês',
    Icon: BarChart3,
    objective:
      'Transformar dados espalhados em respostas úteis para gestores, sem depender de um analista para cada pergunta.',
    mainIdea:
      'Criar um copiloto que conecta banco SQL, planilhas e documentos. Ele entende a pergunta, escolhe fonte, executa consulta controlada, explica a resposta e mostra evidência, limitações e próximos passos.',
    whyNow: [
      'Empresas brasileiras estão priorizando transformar dados em decisões estratégicas com IA.',
      'Adoção de IA cresce, mas muitas empresas ainda não têm inventário de dados e governança claros.',
      'Você já tem experiência próxima: RAG, avaliação, txt2sql, DuckDB, FastAPI e pipelines de dados.',
    ],
    idealCustomers: [
      'Empresas com muitas planilhas e relatórios manuais recorrentes.',
      'SaaS B2B que quer oferecer busca inteligente ou analytics no produto.',
      'Consultorias que entregam relatórios mensais repetitivos para clientes.',
      'Áreas de saúde, educação ou logística com dados operacionais e perguntas frequentes.',
    ],
    leadSignals: [
      'Gestores pedem o mesmo relatório toda semana.',
      'Dados ficam em planilhas diferentes, banco interno e PDFs.',
      'Analistas gastam tempo respondendo perguntas simples, não investigando problemas.',
      'A empresa quer usar IA, mas tem medo de resposta sem fonte ou SQL errado.',
    ],
    offer: [
      'Diagnóstico de fontes de dados, perguntas recorrentes e riscos de acesso.',
      'MVP com 30 perguntas validadas e respostas com fonte.',
      'Camada de permissões, logs, avaliação de resposta e lista de consultas aprovadas.',
      'Treinamento para equipe usar e revisar respostas sem depender do desenvolvedor.',
    ],
    marketing: {
      positioning:
        '“Eu transformo seus relatórios e planilhas em um copiloto que responde com fonte, limite e cálculo auditável.”',
      leadMagnet:
        'Workshop pago ou gratuito: 30 perguntas que seu time faz todo mês e quanto tempo elas consomem.',
      outreach:
        'Abordar gestores que publicam vagas de BI, operações ou customer success e oferecem relatórios recorrentes.',
      proof:
        'Comparar tempo para responder perguntas antes/depois e taxa de respostas aceitas sem retrabalho.',
      metrics: [
        'Perguntas respondidas',
        'Tempo economizado por relatório',
        'Taxa de resposta com evidência',
        'Erros de SQL bloqueados',
        'Adoção semanal por usuário',
      ],
    },
    developmentPlan: [
      {
        phase: 'Semana 1',
        duration: 'Base controlada',
        tasks: [
          'Escolher uma fonte principal e congelar 30 perguntas de negócio.',
          'Criar camada de consulta segura com templates ou SQL validado.',
          'Registrar pergunta, consulta, resposta, custo e evidência.',
        ],
        deliverable: 'Copiloto restrito a perguntas aprovadas.',
      },
      {
        phase: 'Semana 2',
        duration: 'RAG e avaliação',
        tasks: [
          'Adicionar documentos internos e busca semântica.',
          'Criar avaliação manual de resposta correta, parcial ou errada.',
          'Exibir fontes, limitações e quando encaminhar para humano.',
        ],
        deliverable: 'Painel com respostas auditáveis e feedback.',
      },
      {
        phase: 'Semanas 3 a 6',
        duration: 'Produto interno',
        tasks: [
          'Adicionar permissões por perfil e logs de auditoria.',
          'Criar dashboards dos temas mais perguntados.',
          'Medir custo por resposta e automatizar testes de regressão.',
        ],
        deliverable: 'Copiloto com governança mínima para produção.',
      },
    ],
    stack: [
      {
        label: 'Dados',
        items: ['DuckDB', 'PostgreSQL', 'dbt opcional', 'connectores CSV/Sheets'],
      },
      {
        label: 'IA',
        items: ['LlamaIndex ou LangGraph', 'RAG', 'txt2sql controlado', 'avaliação'],
      },
      {
        label: 'Backend',
        items: ['Python', 'FastAPI', 'SQLGlot', 'pytest', 'MLflow opcional'],
      },
      {
        label: 'Frontend',
        items: ['React', 'chat com fontes', 'painel de métricas', 'histórico'],
      },
    ],
    costs: [
      {
        item: 'Hospedagem e banco',
        range: 'R$ 100 a R$ 300',
        note: 'Pode começar local ou em VPS até validar.',
      },
      {
        item: 'LLM/embeddings',
        range: 'R$ 150 a R$ 700',
        note: 'Depende do volume de perguntas e tamanho dos documentos.',
      },
      {
        item: 'Infra de dados',
        range: 'R$ 0 a R$ 300',
        note: 'DuckDB e Postgres reduzem custo no piloto.',
      },
      {
        item: 'Segurança e compliance',
        range: 'R$ 150 a R$ 500',
        note: 'Inclui backups, logs, controle de acesso e revisão de dados pessoais.',
      },
    ],
    risks: [
      'Responder livremente sobre dados sem controle de permissão.',
      'Confundir demo bonita com confiabilidade operacional.',
      'Não medir qualidade das respostas e perder confiança do gestor.',
    ],
    firstExperiment:
      'Use uma base pública ou planilha de cliente fictício, crie 30 perguntas de gestor e entregue um demo onde cada resposta mostra fonte, consulta e nível de confiança.',
  },
]

export const glossary = [
  {
    term: 'Lead',
    Icon: Bot,
    definition:
      'Contato que demonstrou interesse e pode virar cliente. Exemplo: pessoa que pediu orçamento no WhatsApp.',
  },
  {
    term: 'MQL',
    Icon: ClipboardCheck,
    definition:
      'Lead qualificado pelo marketing. Ainda está avaliando, mas combina com o público que você quer vender.',
  },
  {
    term: 'SQL',
    Icon: ClipboardCheck,
    definition:
      'Lead qualificado para vendas. Tem dor, perfil e momento para receber proposta ou diagnóstico.',
  },
  {
    term: 'ICP',
    Icon: BrainCircuit,
    definition:
      'Perfil de cliente ideal. Define nicho, tamanho, dor, urgência, orçamento e facilidade de acesso.',
  },
  {
    term: 'Ticket',
    Icon: BarChart3,
    definition:
      'Valor pago pelo cliente. Pode ser implantação, mensalidade ou cobrança por volume processado.',
  },
]

export const sources = [
  {
    label: 'Sebrae: IA em pequenos negócios',
    url: 'https://rr.agenciasebrae.com.br/dados/uso-de-ia-nos-pequenos-negocios-alcanca-quase-metade-das-empresas-e-aumenta-a-produtividade-e-a-competitividade/',
  },
  {
    label: 'Sebrae: WhatsApp em negócios de serviço',
    url: 'https://agenciasebrae.com.br/cultura-empreendedora/whatsapp-e-o-principal-meio-de-comunicacao-para-80-dos-negocios-de-servico/',
  },
  {
    label: 'ABES/IDC: IA em empresas brasileiras',
    url: 'https://abes.org.br/ia-ja-e-realidade-em-quase-todas-as-grandes-empresas-brasileiras-mostra-estudo-inedito-da-abes-2/',
  },
  {
    label: 'InfoMoney/Qive: IA em backoffice',
    url: 'https://www.infomoney.com.br/business/backoffice-sofre-na-adocao-de-ia-so-33-usaram-diariamente-em-2025-diz-pesquisa/',
  },
  {
    label: 'HubSpot: definição de lead',
    url: 'https://br.hubspot.com/glossary/sales-lead',
  },
  {
    label: 'Câmara: regulação de IA no Brasil',
    url: 'https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/ccom/noticias/comissao-aprova-criacao-do-marco-regulatorio-da-inteligencia-artificial-no-brasil',
  },
]
