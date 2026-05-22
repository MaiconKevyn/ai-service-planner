import { type CSSProperties, useMemo, useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  Code2,
  ExternalLink,
  KeyRound,
  Lightbulb,
  Link2,
  ListChecks,
  Megaphone,
  Route,
  ShieldAlert,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import './App.css'
import { glossary, opportunities, sources } from './data'

function App() {
  const [selectedId, setSelectedId] = useState(opportunities[0].id)
  const selected = useMemo(
    () => opportunities.find((item) => item.id === selectedId) ?? opportunities[0],
    [selectedId],
  )

  const totalLow = 'R$ 250'
  const totalHigh = 'R$ 1.500'

  return (
    <main className="app-shell">
      <section className="decision-header" aria-labelledby="page-title">
        <div className="header-copy">
          <p className="eyebrow">Mapa local de monetização com IA</p>
          <h1 id="page-title">Top 3 oportunidades de serviço com IA, Dev e Python no Brasil</h1>
          <p className="header-lede">
            Uma UI de estudo e decisão para transformar habilidade técnica em oferta vendável: nicho,
            leads, marketing, custos iniciais, stack e plano de execução.
          </p>
        </div>

        <div className="market-board" aria-label="Resumo do cenário">
          <div>
            <span className="board-label">Faixa inicial de bolso</span>
            <strong>{totalLow} a {totalHigh}</strong>
            <small>por piloto, sem contar seu tempo</small>
          </div>
          <div>
            <span className="board-label">Modelo recomendado</span>
            <strong>setup + mensalidade</strong>
            <small>serviço produtizado antes de SaaS puro</small>
          </div>
          <div>
            <span className="board-label">Critério principal</span>
            <strong>dor mensurável</strong>
            <small>tempo, venda perdida, erro ou retrabalho</small>
          </div>
        </div>
      </section>

      <section className="workspace" aria-label="Comparador de oportunidades">
        <aside className="opportunity-rail" aria-label="Top 3 possibilidades">
          <div className="rail-heading">
            <Target size={20} aria-hidden="true" />
            <div>
              <h2>Escolha uma rota</h2>
              <p>Clique para abrir o plano completo.</p>
            </div>
          </div>

          <div className="opportunity-list" role="list">
            {opportunities.map((item) => {
              const Icon = item.Icon
              const isSelected = item.id === selected.id

              return (
                <button
                  className={isSelected ? 'opportunity-card active' : 'opportunity-card'}
                  key={item.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedId(item.id)}
                >
                  <span className="rank">{item.rank}</span>
                  <span className="opportunity-icon">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <span className="card-text">
                    <strong>{item.shortTitle}</strong>
                    <small>{item.confidence}</small>
                  </span>
                  <span className="score">{item.score}</span>
                </button>
              )
            })}
          </div>

          <div className="learning-note">
            <Lightbulb size={18} aria-hidden="true" />
            <p>
              Comece vendendo implantação e aprendizado. Só transforme em SaaS quando o mesmo fluxo se
              repetir em vários clientes.
            </p>
          </div>
        </aside>

        <section className="detail-panel" aria-live="polite">
          <div className="detail-hero">
            <div>
              <p className="eyebrow">Oportunidade {selected.rank}</p>
              <h2>{selected.title}</h2>
              <p>{selected.tagline}</p>
            </div>
            <div
              className="score-gauge"
              style={{ '--score': `${selected.score}%` } as CSSProperties}
              aria-label={`Pontuação ${selected.score} de 100`}
            >
              <span>{selected.score}</span>
              <small>/100</small>
            </div>
          </div>

          <div className="quick-grid" aria-label="Resumo comercial">
            <Metric label="Melhor cliente inicial" value={selected.bestFor} />
            <Metric label="Tempo até primeira venda" value={selected.timeToFirstSale} />
            <Metric label="Implantação" value={selected.setupPrice} />
            <Metric label="Mensalidade" value={selected.monthlyPrice} />
            <Metric label="Custo inicial" value={selected.initialCost} />
          </div>

          <div className="two-column">
            <InfoBlock icon={Target} title="Objetivo" items={[selected.objective]} />
            <InfoBlock icon={Lightbulb} title="Ideia principal" items={[selected.mainIdea]} />
          </div>

          <InfoBlock icon={CheckCircle2} title="Por que faz sentido agora" items={selected.whyNow} />

          <section className="content-band" aria-labelledby="lead-title">
            <div className="section-heading">
              <Users size={22} aria-hidden="true" />
              <div>
                <h3 id="lead-title">Leads e clientes ideais</h3>
                <p>
                  Lead é o contato interessado. Aqui o foco é achar sinais de dor antes de oferecer IA.
                </p>
              </div>
            </div>
            <div className="split-list">
              <ListGroup title="Quem prospectar" items={selected.idealCustomers} />
              <ListGroup title="Sinais de compra" items={selected.leadSignals} />
            </div>
          </section>

          <section className="content-band" aria-labelledby="marketing-title">
            <div className="section-heading">
              <Megaphone size={22} aria-hidden="true" />
              <div>
                <h3 id="marketing-title">Plano de marketing</h3>
                <p>Posicionamento claro, prova pequena e métrica de negócio.</p>
              </div>
            </div>
            <div className="marketing-grid">
              <MarketingTile label="Posicionamento" value={selected.marketing.positioning} />
              <MarketingTile label="Isca de entrada" value={selected.marketing.leadMagnet} />
              <MarketingTile label="Prospecção" value={selected.marketing.outreach} />
              <MarketingTile label="Prova" value={selected.marketing.proof} />
            </div>
            <div className="metric-strip">
              {selected.marketing.metrics.map((metric) => (
                <span key={metric}>{metric}</span>
              ))}
            </div>
          </section>

          <section className="content-band" aria-labelledby="plan-title">
            <div className="section-heading">
              <Route size={22} aria-hidden="true" />
              <div>
                <h3 id="plan-title">Plano de desenvolvimento</h3>
                <p>Sequência pensada para vender cedo e aprender com cliente real.</p>
              </div>
            </div>
            <div className="timeline">
              {selected.developmentPlan.map((phase) => (
                <article className="timeline-item" key={`${selected.id}-${phase.phase}`}>
                  <div className="timeline-marker" aria-hidden="true" />
                  <div>
                    <div className="timeline-head">
                      <strong>{phase.phase}</strong>
                      <span>{phase.duration}</span>
                    </div>
                    <ul>
                      {phase.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                    <p className="deliverable">
                      <span>Entrega:</span> {phase.deliverable}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="two-column">
            <section className="content-band" aria-labelledby="stack-title">
              <div className="section-heading compact">
                <Code2 size={21} aria-hidden="true" />
                <h3 id="stack-title">Stack</h3>
              </div>
              <div className="stack-list">
                {selected.stack.map((group) => (
                  <div className="stack-row" key={group.label}>
                    <strong>{group.label}</strong>
                    <span>{group.items.join(' · ')}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="content-band" aria-labelledby="cost-title">
              <div className="section-heading compact">
                <CircleDollarSign size={21} aria-hidden="true" />
                <h3 id="cost-title">Custo estimado do bolso</h3>
              </div>
              <div className="cost-table">
                {selected.costs.map((cost) => (
                  <div className="cost-row" key={cost.item}>
                    <strong>{cost.item}</strong>
                    <span>{cost.range}</span>
                    <small>{cost.note}</small>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="content-band caution" aria-labelledby="risk-title">
            <div className="section-heading">
              <ShieldAlert size={22} aria-hidden="true" />
              <div>
                <h3 id="risk-title">Riscos para não vender errado</h3>
                <p>O plano funciona melhor quando a IA é assistiva, medida e limitada por regra.</p>
              </div>
            </div>
            <ul className="risk-list">
              {selected.risks.map((risk) => (
                <li key={risk}>{risk}</li>
              ))}
            </ul>
          </section>

          <section className="experiment-band" aria-labelledby="experiment-title">
            <div>
              <p className="eyebrow">Primeiro experimento</p>
              <h3 id="experiment-title">{selected.firstExperiment}</h3>
            </div>
            <ArrowRight size={28} aria-hidden="true" />
          </section>

          {selected.implementationGuide ? (
            <ImplementationGuide guide={selected.implementationGuide} />
          ) : null}
        </section>
      </section>

      <section className="glossary-section" aria-labelledby="glossary-title">
        <div className="section-heading">
          <BrainIcon />
          <div>
            <h2 id="glossary-title">Glossário de marketing para devs</h2>
            <p>Termos que aparecem quando você começa a vender projeto, não só construir código.</p>
          </div>
        </div>
        <div className="glossary-grid">
          {glossary.map((entry) => {
            const Icon = entry.Icon
            return (
              <article className="glossary-card" key={entry.term}>
                <Icon size={20} aria-hidden="true" />
                <h3>{entry.term}</h3>
                <p>{entry.definition}</p>
              </article>
            )
          })}
        </div>
      </section>

      <footer className="source-footer">
        <div>
          <h2>Fontes e premissas</h2>
          <p>
            Conteúdo compilado para estudo em maio de 2026. Os valores são estimativas de piloto e devem
            ser recalculados por cliente, volume e provedor.
          </p>
        </div>
        <div className="source-links">
          {sources.map((source) => (
            <a href={source.url} key={source.url} target="_blank" rel="noreferrer">
              {source.label}
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      </footer>
    </main>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function InfoBlock({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Target
  title: string
  items: string[]
}) {
  return (
    <section className="content-band">
      <div className="section-heading compact">
        <Icon size={21} aria-hidden="true" />
        <h3>{title}</h3>
      </div>
      {items.length === 1 ? (
        <p>{items[0]}</p>
      ) : (
        <ul className="check-list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  )
}

function ListGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4>{title}</h4>
      <ul className="check-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function MarketingTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="marketing-tile">
      <span>{label}</span>
      <p>{value}</p>
    </div>
  )
}

function ImplementationGuide({
  guide,
}: {
  guide: NonNullable<(typeof opportunities)[number]['implementationGuide']>
}) {
  const [activeTab, setActiveTab] = useState<'guide' | 'usecase'>('guide')
  const linkByLabel = new Map(guide.links.map((link) => [link.label, link]))
  const hasUseCase = Boolean(guide.realUseCase)

  return (
    <section className="implementation-guide" aria-labelledby="implementation-title">
      <div className="implementation-hero">
        <div>
          <p className="eyebrow">Implementação prática</p>
          <h3 id="implementation-title">{guide.title}</h3>
          <p>{guide.summary}</p>
        </div>
        <ListChecks size={32} aria-hidden="true" />
      </div>

      {hasUseCase ? (
        <div className="implementation-tabs" role="tablist" aria-label="Seções do plano WhatsApp">
          <button
            className={activeTab === 'guide' ? 'active' : ''}
            type="button"
            role="tab"
            aria-selected={activeTab === 'guide'}
            aria-controls="technical-guide-panel"
            id="technical-guide-tab"
            onClick={() => setActiveTab('guide')}
          >
            <ListChecks size={17} aria-hidden="true" />
            Guia técnico
          </button>
          <button
            className={activeTab === 'usecase' ? 'active' : ''}
            type="button"
            role="tab"
            aria-selected={activeTab === 'usecase'}
            aria-controls="real-usecase-panel"
            id="real-usecase-tab"
            onClick={() => setActiveTab('usecase')}
          >
            <Sparkles size={17} aria-hidden="true" />
            Use case real
          </button>
        </div>
      ) : null}

      {activeTab === 'guide' ? (
        <TechnicalGuidePanel guide={guide} linkByLabel={linkByLabel} />
      ) : guide.realUseCase ? (
        <RealUseCasePanel useCase={guide.realUseCase} />
      ) : null}
    </section>
  )
}

function TechnicalGuidePanel({
  guide,
  linkByLabel,
}: {
  guide: NonNullable<(typeof opportunities)[number]['implementationGuide']>
  linkByLabel: Map<string, (typeof guide.links)[number]>
}) {
  return (
    <div
      className="tab-panel-stack"
      id="technical-guide-panel"
      role="tabpanel"
      aria-labelledby="technical-guide-tab"
    >
      <div className="implementation-grid">
        {guide.easiestPath.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

      <section className="content-band" aria-labelledby="credentials-title">
        <div className="section-heading">
          <KeyRound size={22} aria-hidden="true" />
          <div>
            <h3 id="credentials-title">Credenciais que você realmente precisa</h3>
            <p>
              Não é uma API key única. A Cloud API usa token de acesso, IDs do WhatsApp Business e
              webhook verificado no backend.
            </p>
          </div>
        </div>
        <div className="credential-grid">
          {guide.credentials.map((credential) => (
            <article className="credential-card" key={credential.name}>
              <h4>{credential.name}</h4>
              <dl>
                <div>
                  <dt>Onde pegar</dt>
                  <dd>{credential.where}</dd>
                </div>
                <div>
                  <dt>Uso</dt>
                  <dd>{credential.use}</dd>
                </div>
                <div>
                  <dt>Produção</dt>
                  <dd>{credential.productionNote}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band" aria-labelledby="whatsapp-step-title">
        <div className="section-heading">
          <Route size={22} aria-hidden="true" />
          <div>
            <h3 id="whatsapp-step-title">Step by step técnico</h3>
            <p>Ordem recomendada para sair do painel da Meta e chegar em um piloto vendável.</p>
          </div>
        </div>
        <div className="implementation-steps">
          {guide.steps.map((step) => (
            <article className="implementation-step" key={step.phase}>
              <div className="step-kicker">{step.phase}</div>
              <div>
                <h4>{step.title}</h4>
                <p>{step.objective}</p>
                <ul className="check-list">
                  {step.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
                <div className="inline-links" aria-label={`Links para ${step.title}`}>
                  {step.links.map((label) => {
                    const link = linkByLabel.get(label)
                    if (!link) return null
                    return (
                      <a href={link.url} key={label} target="_blank" rel="noreferrer">
                        {label}
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="two-column">
        <section className="content-band" aria-labelledby="pitfalls-title">
          <div className="section-heading compact">
            <ShieldAlert size={21} aria-hidden="true" />
            <h3 id="pitfalls-title">Erros que travam o follow-up</h3>
          </div>
          <ul className="risk-list">
            {guide.pitfalls.map((pitfall) => (
              <li key={pitfall}>{pitfall}</li>
            ))}
          </ul>
        </section>

        <section className="content-band" aria-labelledby="checklist-title">
          <div className="section-heading compact">
            <CheckCircle2 size={21} aria-hidden="true" />
            <h3 id="checklist-title">Checklist do próximo follow-up</h3>
          </div>
          <ul className="check-list">
            {guide.followUpChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="content-band" aria-labelledby="docs-title">
        <div className="section-heading">
          <Link2 size={22} aria-hidden="true" />
          <div>
            <h3 id="docs-title">Documentação e tutoriais para abrir depois</h3>
            <p>Links oficiais e atalhos práticos para configurar, testar e precificar o piloto.</p>
          </div>
        </div>
        <div className="doc-link-grid">
          {guide.links.map((link) => (
            <a href={link.url} key={link.url} target="_blank" rel="noreferrer">
              <strong>
                {link.label}
                <ExternalLink size={14} aria-hidden="true" />
              </strong>
              <span>{link.note}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

function RealUseCasePanel({
  useCase,
}: {
  useCase: NonNullable<
    NonNullable<(typeof opportunities)[number]['implementationGuide']>['realUseCase']
  >
}) {
  return (
    <div
      className="tab-panel-stack"
      id="real-usecase-panel"
      role="tabpanel"
      aria-labelledby="real-usecase-tab"
    >
      <section className="usecase-hero" aria-labelledby="usecase-title">
        <div>
          <p className="eyebrow">{useCase.label}</p>
          <h3 id="usecase-title">{useCase.title}</h3>
          <p>{useCase.scenario}</p>
        </div>
        <aside>{useCase.disclaimer}</aside>
      </section>

      <section className="content-band" aria-labelledby="business-title">
        <div className="section-heading">
          <Users size={22} aria-hidden="true" />
          <div>
            <h3 id="business-title">Contexto da empresa simulada</h3>
            <p>Cliente inventado para mostrar como o Plano 1 vira implantação vendável.</p>
          </div>
        </div>
        <div className="business-profile">
          <ProfileItem label="Empresa" value={useCase.business.name} />
          <ProfileItem label="Nicho" value={useCase.business.niche} />
          <ProfileItem label="Local" value={useCase.business.location} />
          <ProfileItem label="Time" value={useCase.business.team} />
          <ProfileItem label="Canais" value={useCase.business.channels} />
        </div>
        <div className="baseline-grid">
          {useCase.baseline.map((item) => (
            <article className="baseline-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="two-column">
        <section className="content-band" aria-labelledby="problem-title">
          <div className="section-heading compact">
            <ShieldAlert size={21} aria-hidden="true" />
            <h3 id="problem-title">Problema encontrado</h3>
          </div>
          <ul className="risk-list">
            {useCase.problem.map((problem) => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>
        </section>

        <section className="content-band" aria-labelledby="architecture-title">
          <div className="section-heading compact">
            <Code2 size={21} aria-hidden="true" />
            <h3 id="architecture-title">Como foi montado</h3>
          </div>
          <div className="stack-list">
            {useCase.architecture.map((item) => (
              <div className="stack-row" key={item.layer}>
                <strong>{item.layer}</strong>
                <span>{item.detail}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="content-band" aria-labelledby="done-title">
        <div className="section-heading">
          <CheckCircle2 size={22} aria-hidden="true" />
          <div>
            <h3 id="done-title">O que foi feito, por que e como</h3>
            <p>Decisões práticas para ligar atendimento, CRM, agenda e operação humana.</p>
          </div>
        </div>
        <div className="done-grid">
          {useCase.whatWasDone.map((item) => (
            <article className="done-card" key={item.title}>
              <h4>{item.title}</h4>
              <dl>
                <div>
                  <dt>Por que</dt>
                  <dd>{item.why}</dd>
                </div>
                <div>
                  <dt>Como</dt>
                  <dd>{item.how}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band" aria-labelledby="usecase-step-title">
        <div className="section-heading">
          <Route size={22} aria-hidden="true" />
          <div>
            <h3 id="usecase-step-title">Step by step do piloto</h3>
            <p>Sequência de 14 dias para sair da auditoria e chegar em métricas comerciais.</p>
          </div>
        </div>
        <div className="implementation-steps">
          {useCase.stepByStep.map((step) => (
            <article className="implementation-step usecase-step" key={step.step}>
              <div className="step-kicker">{step.step}</div>
              <div>
                <h4>{step.title}</h4>
                <ul className="check-list">
                  {step.actions.map((action) => (
                    <li key={action}>{action}</li>
                  ))}
                </ul>
                <p className="deliverable">
                  <span>Entrega:</span> {step.deliverable}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band" aria-labelledby="flow-title">
        <div className="section-heading">
          <Megaphone size={22} aria-hidden="true" />
          <div>
            <h3 id="flow-title">Fluxo de conversa usado na simulação</h3>
            <p>Exemplos para deixar claro onde a IA ajuda e onde o humano assume.</p>
          </div>
        </div>
        <div className="conversation-grid">
          {useCase.conversationFlow.map((flow) => (
            <article className="conversation-card" key={flow.customer}>
              <span>Cliente</span>
              <p>{flow.customer}</p>
              <span>Sistema</span>
              <p>{flow.system}</p>
              <span>Regra humana</span>
              <p>{flow.humanRule}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band" aria-labelledby="result-title">
        <div className="section-heading">
          <CircleDollarSign size={22} aria-hidden="true" />
          <div>
            <h3 id="result-title">Resultado simulado do piloto</h3>
            <p>Métricas plausíveis para explicar a proposta, não promessa de resultado garantido.</p>
          </div>
        </div>
        <div className="result-table">
          <div className="result-row result-head">
            <strong>Métrica</strong>
            <span>Antes</span>
            <span>Depois</span>
          </div>
          {useCase.results.map((result) => (
            <div className="result-row" key={result.label}>
              <strong>{result.label}</strong>
              <span>{result.before}</span>
              <span>{result.after}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="content-band" aria-labelledby="iteration-title">
        <div className="section-heading compact">
          <Sparkles size={21} aria-hidden="true" />
          <h3 id="iteration-title">Iteração depois do piloto</h3>
        </div>
        <ul className="check-list">
          {useCase.nextIteration.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function ProfileItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function BrainIcon() {
  return (
    <span className="brain-icon" aria-hidden="true">
      IA
    </span>
  )
}

export default App
