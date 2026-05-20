<script setup>
const eventKinds = [
  { label: 'general', color: 'var(--color-tertiary)' },
  { label: 'personalActivity', color: '#2E7D32' },
  { label: 'personalGoal', color: '#7B1FA2' },
  { label: 'classEvent', color: '#1565C0' },
  { label: 'task', color: '#EF6C00' },
  { label: 'project', color: 'var(--color-primary)' },
]

const benefits = [
  {
    title: 'Todo en una sola vista',
    description:
      'Agenda, tareas, proyectos y metas viven en un mismo tablero para que organices tu día sin saltar entre pantallas.',
  },
  {
    title: 'Prioridades visibles',
    description:
      'El color, el estado y el tipo de evento te ayudan a entender al instante qué requiere atención primero.',
  },
  {
    title: 'Rutina con contexto',
    description:
      'Cada bloque te muestra cuándo, qué y por qué. Así planificas con claridad y reduces fricción al arrancar.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Captura rápido',
    description:
      'Agrega actividades, clases, tareas o metas sin pelear con formularios largos. La captura es directa y limpia.',
  },
  {
    number: '02',
    title: 'Clasifica con color',
    description:
      'Cada tipo de evento sigue un código visual fijo para que tu agenda se entienda de un vistazo.',
  },
  {
    number: '03',
    title: 'Ordena tu semana',
    description:
      'Mueve tus prioridades entre días, detecta cargas de trabajo y ajusta tu ritmo sin perder el hilo.',
  },
  {
    number: '04',
    title: 'Avanza sin ruido',
    description:
      'Toma decisiones más rápido con una interfaz sobria, clara y enfocada en hacer que la organización sea sostenible.',
  },
]

const highlights = [
  { value: '01', label: 'tablero central para todo tu flujo' },
  { value: '02', label: 'mapeo de colores coherente con el sistema' },
  { value: '03', label: 'experiencia limpia para planear sin distracciones' },
]
</script>

<template>
  <div class="page-shell">
    <header class="topbar">
      <div class="brand-mark">
        <span class="brand-badge">O</span>
        <div>
          <p>Organizate</p>
          <span>Planifica con intención</span>
        </div>
      </div>

      <nav class="nav-links" aria-label="Navegación principal">
        <a href="#beneficios">Beneficios</a>
        <a href="#como-funciona">Cómo funciona</a>
        <a href="#eventos">Tipos de eventos</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a class="button button--ghost" href="#contacto">Pedir demo</a>
    </header>

    <main>
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Landing estática para tu app de organización</p>
          <h1>Organiza tu vida con una vista clara, serena y enfocada.</h1>
          <p class="hero-text">
            Organizate reúne tareas, metas, clases, proyectos y actividades personales en una
            experiencia visual pensada para ordenar sin saturarte. Una landing limpia, elegante y
            lista para sumar imágenes más adelante.
          </p>

          <div class="hero-actions">
            <a class="button button--primary" href="#contacto">Empezar ahora</a>
            <a class="button button--secondary" href="#beneficios">Ver beneficios</a>
          </div>

          <div class="hero-stats" aria-label="Resumen del producto">
            <article>
              <strong>1 tablero</strong>
              <span>para agenda, metas y pendientes</span>
            </article>
            <article>
              <strong>5 colores</strong>
              <span>alineados al sistema visual de eventos</span>
            </article>
            <article>
              <strong>0 distracciones</strong>
              <span>en una interfaz limpia y enfocada</span>
            </article>
          </div>
        </div>

        <aside class="hero-panel" aria-label="Vista previa de la interfaz">
          <div class="panel-top">
            <span>Semana en foco</span>
            <strong>Mar 20</strong>
          </div>

          <div class="calendar-grid" aria-hidden="true">
            <span v-for="day in ['L', 'M', 'X', 'J', 'V', 'S', 'D']" :key="day">{{ day }}</span>
            <button class="calendar-pill calendar-pill--primary">09:00</button>
            <button class="calendar-pill">10:30</button>
            <button class="calendar-pill calendar-pill--project">12:00</button>
            <button class="calendar-pill">14:00</button>
            <button class="calendar-pill calendar-pill--task">16:30</button>
            <button class="calendar-pill calendar-pill--goal">18:00</button>
          </div>

          <div class="preview-stack">
            <article>
              <span>Hoy</span>
              <strong>3 tareas clave</strong>
              <p>Separadas por prioridad y tipo de evento.</p>
            </article>
            <article>
              <span>Proyecto</span>
              <strong>Avance 68%</strong>
              <p>Seguimiento visible en un solo vistazo.</p>
            </article>
          </div>
        </aside>
      </section>

      <section class="ticker">
        <div class="ticker-track">
          <span v-for="item in highlights" :key="item.value">
            <strong>{{ item.value }}</strong>
            {{ item.label }}
          </span>
        </div>
      </section>

      <section id="beneficios" class="section-block section-block--split">
        <div class="section-intro">
          <p class="section-label">Pensada para mantener el foco</p>
          <h2>Beneficios claros para una organización sin fricción.</h2>
        </div>

        <div class="benefit-grid">
          <article v-for="benefit in benefits" :key="benefit.title" class="benefit-card">
            <span class="benefit-number"></span>
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </article>
        </div>
      </section>

      <section id="como-funciona" class="section-block section-block--steps">
        <div class="section-intro">
          <p class="section-label">Cómo funciona</p>
          <h2>Un flujo simple para pasar de idea dispersa a plan claro.</h2>
        </div>

        <div class="steps-grid">
          <article v-for="step in steps" :key="step.number" class="step-card">
            <span>{{ step.number }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </article>
        </div>
      </section>

      <section id="eventos" class="section-block event-section">
        <div class="section-intro">
          <p class="section-label">Tipos de evento</p>
          <h2>Colores consistentes para leer la agenda sin esfuerzo.</h2>
          <p>
            Cada tipo de evento sigue un código visual fijo para que tu agenda se entienda de un
            vistazo. La consistencia en el uso del color ayuda a identificar rápidamente tus
            prioridades y el contexto de cada actividad.
          </p>
        </div>

        <div class="kind-grid">
          <article v-for="kind in eventKinds" :key="kind.label" class="kind-card">
            <span class="kind-dot" :style="{ backgroundColor: kind.color }"></span>
            <div>
              <p>{{ kind.label }}</p>
              <strong>{{ kind.color }}</strong>
            </div>
          </article>
        </div>
      </section>

      <section class="cta-band">
        <div>
          <p class="section-label">Listo para crecer</p>
        </div>

        <div class="cta-actions">
          <a class="button button--primary" href="#contacto">Pedir demo</a>
          <a class="button button--secondary" href="#beneficios">Ver beneficios</a>
        </div>
      </section>

      <section id="contacto" class="footer-card">
        <div>
          <p class="section-label">Contacto</p>
          <h2>
            Organizate está preparada para presentar tu app con una imagen clara y profesional.
          </h2>
        </div>

        <div class="contact-grid">
          <article>
            <span>Primary</span>
            <strong>#C21807</strong>
          </article>
          <article>
            <span>Surface</span>
            <strong>#FFFFFF / #121212</strong>
          </article>
          <article>
            <span>Fuente</span>
            <strong>Mona Sans</strong>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mona+Sans:wght@400;500;600;700&display=swap');

:global(*) {
  box-sizing: border-box;
}

:global(html) {
  scroll-behavior: smooth;
}

:global(body) {
  margin: 0;
  min-width: 320px;
  background:
    radial-gradient(circle at top left, rgba(194, 24, 7, 0.14), transparent 30%),
    radial-gradient(circle at 80% 10%, rgba(0, 0, 0, 0.06), transparent 24%), var(--color-surface);
  color: var(--color-on-surface);
  font-family: 'Mona Sans', system-ui, sans-serif;
}

:global(:root) {
  color-scheme: light;
  --color-primary: #c21807;
  --color-on-primary: #ffffff;
  --color-primary-container: #ffd8d2;
  --color-on-primary-container: #5c120a;
  --color-secondary: #6f6f6f;
  --color-on-secondary: #ffffff;
  --color-secondary-container: #e5e5e5;
  --color-on-secondary-container: #1e1e1e;
  --color-tertiary: #000000;
  --color-on-tertiary: #ffffff;
  --color-tertiary-container: #e5e5e5;
  --color-on-tertiary-container: #1e1e1e;
  --color-error: #b3261e;
  --color-on-error: #ffffff;
  --color-error-container: #f9dedc;
  --color-on-error-container: #410e0b;
  --color-surface: #ffffff;
  --color-on-surface: #000000;
  --color-surface-container-highest: #e5e5e5;
  --color-on-surface-variant: #6f6f6f;
  --color-outline: #9d9d9d;
  --color-outline-variant: #d0d0d0;
  --color-shadow: #000000;
  --color-inverse-surface: #1b1b1b;
  --color-on-inverse-surface: #ffffff;
  --color-inverse-primary: #ff8b7d;
  --color-surface-tint: #c21807;
  --container-max: 1180px;
}

@media (prefers-color-scheme: dark) {
  :global(:root) {
    color-scheme: dark;
    --color-primary: #ff5b4a;
    --color-on-primary: #ffffff;
    --color-primary-container: #5a1b15;
    --color-on-primary-container: #ffd8d2;
    --color-secondary: #c8c8c8;
    --color-on-secondary: #ffffff;
    --color-secondary-container: #313131;
    --color-on-secondary-container: #f0f0f0;
    --color-tertiary: #eaeaea;
    --color-on-tertiary: #ffffff;
    --color-tertiary-container: #323232;
    --color-on-tertiary-container: #f0f0f0;
    --color-error: #f2b8b5;
    --color-on-error: #601410;
    --color-error-container: #8c1d18;
    --color-on-error-container: #f9dedc;
    --color-surface: #121212;
    --color-on-surface: #f2f2f2;
    --color-surface-container-highest: #2a2a2a;
    --color-on-surface-variant: #c0c0c0;
    --color-outline: #7a7a7a;
    --color-outline-variant: #444444;
    --color-shadow: #000000;
    --color-inverse-surface: #f2f2f2;
    --color-on-inverse-surface: #121212;
    --color-inverse-primary: #c21807;
    --color-surface-tint: #ff5b4a;
  }
}

.page-shell {
  width: min(100%, 1440px);
  margin: 0 auto;
  padding: 24px;
}

.topbar,
.hero,
.section-block,
.cta-band,
.footer-card {
  border: 1px solid color-mix(in srgb, var(--color-outline) 38%, transparent);
  background: color-mix(in srgb, var(--color-surface) 86%, transparent);
  backdrop-filter: blur(10px);
  box-shadow: 0 24px 60px color-mix(in srgb, var(--color-shadow) 10%, transparent);
}

.topbar {
  position: sticky;
  top: 16px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 20px;
  border-radius: 24px;
  margin-bottom: 22px;
}

.brand-mark {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark p,
.brand-mark span,
.section-label,
.eyebrow,
.hero-text,
.section-intro p,
.benefit-card p,
.step-card p,
.kind-card strong,
.preview-stack p,
.contact-grid span {
  color: var(--color-on-surface-variant);
}

.brand-mark p,
.brand-mark strong,
.hero h1,
.section-intro h2,
.cta-band h2,
.footer-card h2 {
  margin: 0;
}

.brand-mark p {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-on-surface);
}

.brand-mark span {
  display: block;
  font-size: 0.84rem;
}

.brand-badge {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 16px;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    color-mix(in srgb, var(--color-primary) 60%, black)
  );
  color: var(--color-on-primary);
  font-weight: 700;
  box-shadow: 0 12px 30px color-mix(in srgb, var(--color-primary) 35%, transparent);
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
}

.nav-links a {
  color: var(--color-on-surface-variant);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
}

.nav-links a:hover,
.nav-links a:focus-visible {
  color: var(--color-on-surface);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  padding: 0 18px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    background-color 160ms ease,
    color 160ms ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-1px);
}

.button--primary {
  background: var(--color-primary);
  color: var(--color-on-primary);
  box-shadow: 0 16px 32px color-mix(in srgb, var(--color-primary) 32%, transparent);
}

.button--secondary {
  background: var(--color-secondary-container);
  color: var(--color-on-secondary-container);
}

.button--ghost {
  border: 1px solid var(--color-outline-variant);
  color: var(--color-on-surface);
  background: color-mix(in srgb, var(--color-surface) 72%, transparent);
}

main {
  display: grid;
  gap: 22px;
}

.hero {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 24px;
  padding: 28px;
  border-radius: 34px;
}

.hero-copy {
  display: grid;
  align-content: center;
  gap: 18px;
}

.eyebrow,
.section-label {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.78rem;
  font-weight: 700;
}

.hero h1 {
  font-size: clamp(3rem, 5vw, 5.25rem);
  line-height: 0.96;
  letter-spacing: -0.04em;
  max-width: 11ch;
}

.hero-text,
.section-intro p,
.benefit-card p,
.step-card p,
.preview-stack p,
.cta-band p,
.footer-card p {
  font-size: 1rem;
  line-height: 1.7;
  max-width: 62ch;
}

.hero-actions,
.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 8px;
}

.hero-stats article,
.benefit-card,
.step-card,
.kind-card,
.preview-stack article,
.contact-grid article {
  border: 1px solid color-mix(in srgb, var(--color-outline-variant) 72%, transparent);
  background: color-mix(in srgb, var(--color-surface-container-highest) 34%, transparent);
  border-radius: 24px;
}

.hero-stats article {
  padding: 18px;
}

.hero-stats strong,
.preview-stack strong,
.contact-grid strong,
.step-card span,
.kind-card p,
.panel-top strong {
  display: block;
  color: var(--color-on-surface);
}

.hero-stats strong {
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.hero-panel {
  display: grid;
  gap: 16px;
  padding: 22px;
  border-radius: 28px;
  background:
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--color-primary-container) 55%, transparent),
      transparent 42%
    ),
    color-mix(in srgb, var(--color-surface) 92%, transparent);
}

.panel-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--color-on-surface-variant);
  font-size: 0.92rem;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 10px;
}

.calendar-grid span {
  text-align: center;
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--color-on-surface-variant);
  text-transform: uppercase;
}

.calendar-pill {
  grid-column: span 2;
  min-height: 64px;
  border: 1px solid transparent;
  border-radius: 18px;
  background: var(--color-secondary-container);
  color: var(--color-on-secondary-container);
  font-family: inherit;
  font-weight: 700;
  text-align: left;
  padding: 14px 16px;
}

.calendar-pill--primary {
  background: var(--color-primary);
  color: var(--color-on-primary);
}

.calendar-pill--project {
  background: color-mix(in srgb, var(--color-primary-container) 80%, var(--color-primary));
  color: var(--color-on-primary-container);
}

.calendar-pill--task {
  background: color-mix(in srgb, #ef6c00 24%, var(--color-surface));
  color: var(--color-on-surface);
}

.calendar-pill--goal {
  background: color-mix(in srgb, #7b1fa2 24%, var(--color-surface));
  color: var(--color-on-surface);
}

.preview-stack {
  display: grid;
  gap: 12px;
}

.preview-stack article {
  padding: 16px;
}

.preview-stack span,
.kind-card strong,
.contact-grid span {
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.preview-stack strong {
  margin: 6px 0 4px;
  font-size: 1.05rem;
}

.ticker {
  overflow: hidden;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--color-outline-variant) 50%, transparent);
  background: color-mix(in srgb, var(--color-surface) 92%, var(--color-primary-container));
}

.ticker-track {
  display: flex;
  align-items: center;
  gap: 42px;
  padding: 16px 24px;
  white-space: nowrap;
  overflow-x: auto;
}

.ticker-track span {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--color-on-surface-variant);
  font-size: 0.95rem;
}

.ticker-track strong {
  color: var(--color-primary);
  font-size: 1rem;
}

.section-block,
.cta-band,
.footer-card {
  padding: 28px;
  border-radius: 32px;
}

.section-block--split,
.section-block--steps,
.event-section,
.footer-card {
  display: grid;
  gap: 24px;
}

.section-intro {
  display: grid;
  gap: 14px;
}

.section-intro h2,
.cta-band h2,
.footer-card h2 {
  font-size: clamp(2rem, 3.2vw, 3.4rem);
  line-height: 1.02;
  letter-spacing: -0.03em;
  max-width: 14ch;
}

.benefit-grid,
.steps-grid,
.kind-grid,
.contact-grid {
  display: grid;
  gap: 16px;
}

.benefit-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.benefit-card,
.step-card,
.kind-card,
.contact-grid article {
  padding: 22px;
}

.benefit-card h3,
.step-card h3 {
  margin: 0 0 12px;
  font-size: 1.15rem;
}

.benefit-number {
  display: block;
  width: 42px;
  height: 42px;
  margin-bottom: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-container));
}

.steps-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.step-card span {
  margin-bottom: 16px;
  font-size: 0.8rem;
  font-weight: 800;
  color: var(--color-primary);
}

.event-section {
  grid-template-columns: 1fr;
}

.kind-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.kind-card {
  display: flex;
  align-items: center;
  gap: 16px;
}

.kind-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  flex: none;
  box-shadow: 0 0 0 8px color-mix(in srgb, currentColor 8%, transparent);
}

.kind-card p {
  margin: 0 0 6px;
  font-weight: 700;
}

.cta-band {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background:
    linear-gradient(
      135deg,
      color-mix(in srgb, var(--color-primary-container) 52%, transparent),
      transparent
    ),
    color-mix(in srgb, var(--color-surface) 88%, transparent);
}

.footer-card {
  align-items: start;
}

.contact-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.contact-grid strong {
  margin-top: 8px;
  font-size: 1.05rem;
}

@media (max-width: 1080px) {
  .hero,
  .benefit-grid,
  .steps-grid,
  .kind-grid,
  .contact-grid,
  .cta-band {
    grid-template-columns: 1fr;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-links {
    order: 3;
    width: 100%;
  }
}

@media (max-width: 720px) {
  .page-shell {
    padding: 14px;
  }

  .hero,
  .section-block,
  .cta-band,
  .footer-card {
    padding: 20px;
    border-radius: 24px;
  }

  .hero h1 {
    max-width: 100%;
    font-size: clamp(2.5rem, 14vw, 4rem);
  }

  .hero-actions,
  .cta-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .button {
    width: 100%;
  }

  .calendar-grid {
    gap: 8px;
  }

  .calendar-pill {
    min-height: 56px;
    padding: 12px 14px;
  }
}
</style>
