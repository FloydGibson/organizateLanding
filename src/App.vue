<script setup>
const eventKinds = [
  {
    label: 'GENERAL',
    color: 'var(--color-tertiary)',
    description: 'Notas, anuncios y eventos generales que no pertenecen a proyectos específicos.',
  },
  {
    label: 'ACTIVIDAD PERSONAL',
    color: '#2E7D32',
    description: 'Recordatorios personales y acciones diarias (ej.: llamadas, recados).',
  },
  {
    label: 'META PERSONAL',
    color: '#7B1FA2',
    description: 'Objetivos personales con seguimiento a medio/largo plazo.',
  },
  {
    label: 'CLASES',
    color: '#1565C0',
    description: 'Sesiones programadas, clases y talleres con horario fijo.',
  },
  {
    label: 'TAREA',
    color: '#EF6C00',
    description: 'Tareas y pruebas críticas a ejecutar (QA, integraciones, fixes).',
  },
  {
    label: 'PROYECTO',
    color: 'var(--color-primary)',
    description: 'Hitos, lanzamientos y coordinación entre equipos para entregables.',
  },
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

const calendarDays = [
  { weekday: 'Lun', day: '18', selected: false, dots: ['personalActivity'] },
  { weekday: 'Mar', day: '19', selected: false, dots: ['task'] },
  { weekday: 'Mie', day: '20', selected: true, dots: ['project'] },
  { weekday: 'Jue', day: '21', selected: false, dots: ['classEvent'] },
  { weekday: 'Vie', day: '22', selected: false, dots: ['personalGoal'] },
  { weekday: 'Sab', day: '23', selected: false, dots: ['general'] },
  { weekday: 'Dom', day: '24', selected: false, dots: [] },
]

const currentDayEvent = {
  title: 'Revisión de métricas',
  kind: 'Actividad personal',
  time: '12:14 - 13:14',
  description: 'Bloque corto para revisar avances, pendientes y próximos pasos.',
}

const upcomingEvents = [
  {
    title: 'Planificación semanal',
    kind: 'General',
    time: 'Sabado 23 - 12:14 a 13:14',
    description: 'Evento general para organizar prioridades, entregas y recordatorios.',
  },
  {
    title: 'Entrega de proyecto',
    kind: 'Proyecto',
    time: 'Vie 22 - 16:30 a 17:15',
    description: 'Cierre de hitos y verificación de entregables antes del envío.',
  },
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
          <div class="hero-panel__header">
            <p class="hero-panel__month">mayo 2026</p>
            <div class="hero-panel__tabs" aria-hidden="true">
              <span>mes</span>
              <span class="is-active">✓ semana</span>
              <span>dia</span>
            </div>
          </div>

          <section class="app-card app-card--week">
            <h3>Semana actual</h3>
            <div class="week-strip" aria-hidden="true">
              <button
                v-for="day in calendarDays"
                :key="day.weekday + day.day"
                class="week-day"
                :class="{ 'is-selected': day.selected }"
              >
                <span>{{ day.weekday }}</span>
                <strong>{{ day.day }}</strong>
                <i
                  v-if="day.dots.length"
                  class="week-day__dot"
                  :style="{
                    backgroundColor:
                      day.dots[0] === 'project'
                        ? 'var(--color-primary)'
                        : day.dots[0] === 'task'
                          ? '#EF6C00'
                          : day.dots[0] === 'classEvent'
                            ? '#1565C0'
                            : day.dots[0] === 'personalGoal'
                              ? '#7B1FA2'
                              : day.dots[0] === 'personalActivity'
                                ? '#2E7D32'
                                : 'var(--color-tertiary)',
                  }"
                ></i>
              </button>
            </div>
          </section>

          <section class="app-card app-card--highlight">
            <h3>Eventos del dia 20/05/2026</h3>
            <article class="event-card event-card--today">
              <span class="event-card__dot event-card__dot--personal"></span>
              <div>
                <div class="event-card__head">
                  <strong>{{ currentDayEvent.title }}</strong>
                  <span>{{ currentDayEvent.kind }}</span>
                </div>
                <p>{{ currentDayEvent.time }}</p>
                <small>{{ currentDayEvent.description }}</small>
              </div>
            </article>
          </section>

          <section class="app-card app-card--list">
            <h3>Eventos proximos de la semana</h3>
            <article v-for="event in upcomingEvents" :key="event.title" class="event-card">
              <span class="event-card__dot"></span>
              <div>
                <div class="event-card__head">
                  <strong>{{ event.title }}</strong>
                  <span>{{ event.kind }}</span>
                </div>
                <p>{{ event.time }}</p>
                <small>{{ event.description }}</small>
              </div>
            </article>
          </section>
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
              <strong>{{ kind.description }}</strong>
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
        <p class="section-label">Contacto</p>
        <h2>Organizate está preparada para presentar tu app con una imagen clara y profesional.</h2>
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
  gap: 18px;
  padding: 22px;
  border-radius: 20px;
  background: color-mix(in srgb, var(--color-inverse-surface) 8%, var(--color-surface));
  border: 1px solid color-mix(in srgb, var(--color-on-surface) 6%, transparent);
  box-shadow: 0 22px 60px color-mix(in srgb, var(--color-shadow) 18%, transparent);
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
  gap: 12px;
}

.day-headers {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
}

.day-headers span {
  text-align: center;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--color-on-surface-variant);
  text-transform: uppercase;
}

.pill-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.calendar-pill {
  min-height: 72px;
  border-radius: 14px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  color: var(--color-on-surface);
  background: color-mix(
    in srgb,
    var(--color-secondary-container) 36%,
    var(--color-inverse-surface)
  );
  box-shadow:
    0 8px 22px color-mix(in srgb, var(--color-shadow) 18%, transparent),
    inset 0 -6px 14px rgba(0, 0, 0, 0.12);
  border: 1px solid color-mix(in srgb, var(--color-on-surface) 4%, transparent);
}

.calendar-pill strong {
  display: block;
  font-size: 0.95rem;
  margin-bottom: 6px;
}
.pill-time {
  display: block;
  font-size: 0.78rem;
  color: color-mix(in srgb, var(--color-on-surface) 72%, var(--color-on-surface-variant));
  font-weight: 600;
}

.pill-desc {
  margin: 6px 0 0;
  font-size: 0.75rem;
  color: color-mix(in srgb, var(--color-on-surface) 48%, var(--color-on-surface-variant));
  line-height: 1.2;
}

.calendar-pill--primary {
  background: linear-gradient(
    180deg,
    var(--color-primary),
    color-mix(in srgb, var(--color-primary) 72%, black)
  );
  color: var(--color-on-primary);
}

.calendar-pill--project {
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--color-primary) 28%, var(--color-primary-container)),
    var(--color-primary-container)
  );
  color: var(--color-on-primary-container);
}

.calendar-pill--task {
  background: linear-gradient(180deg, #6b3f12, #7a4a18);
  color: var(--color-on-surface);
}

.calendar-pill--goal {
  background: linear-gradient(180deg, #3a0f3a, #4b1a52);
  color: var(--color-on-surface);
}

.hero-panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.hero-panel__month {
  margin: 0;
  font-size: 1.12rem;
  font-weight: 700;
  color: var(--color-on-surface);
  text-transform: lowercase;
}

.hero-panel__tabs {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: min(100%, 356px);
  border: 1px solid color-mix(in srgb, var(--color-primary) 72%, transparent);
  border-radius: 18px;
  overflow: hidden;
}

.hero-panel__tabs span {
  display: grid;
  place-items: center;
  padding: 14px 18px;
  background: #2f2f2f;
  color: #ededed;
  font-weight: 700;
  font-size: 1rem;
}

.hero-panel__tabs .is-active {
  background: var(--color-primary);
  color: var(--color-on-primary);
}

.app-card {
  padding: 18px;
  border-radius: 20px;
  background: #171717;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.app-card h3 {
  margin: 0 0 16px;
  font-size: 1.02rem;
  color: #f2f2f2;
}

.app-card--highlight {
  background: #131313;
}

.app-card--list {
  background: #171717;
}

.week-strip {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 8px;
}

.week-day {
  position: relative;
  min-height: 108px;
  border: 0;
  border-radius: 16px;
  background: #2c2c2c;
  color: #f0f0f0;
  padding: 12px 10px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-family: inherit;
}

.week-day.is-selected {
  background: #ff5b4a;
}

.week-day span {
  font-size: 0.82rem;
  line-height: 1.1;
}

.week-day strong {
  font-size: 1.4rem;
  line-height: 1;
}

.week-day__dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  margin-top: 6px;
}

.event-card {
  display: flex;
  gap: 14px;
  padding: 18px;
  border-radius: 20px;
  background: #222;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.event-card + .event-card {
  margin-top: 12px;
}

.event-card--today {
  background: #263226;
  border-color: rgba(46, 125, 50, 0.35);
}

.event-card__dot {
  flex: none;
  width: 14px;
  height: 14px;
  margin-top: 5px;
  border-radius: 999px;
  background: #e5e5e5;
}

.event-card__dot--personal {
  background: #2e7d32;
}

.event-card__head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 6px;
}

.event-card__head strong {
  color: #f2f2f2;
  font-size: 1.1rem;
}

.event-card__head span {
  flex: none;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: #9fd59f;
  font-size: 0.76rem;
  font-weight: 700;
}

.event-card p {
  margin: 0;
  color: #ededed;
  font-size: 1rem;
}

.event-card small {
  display: block;
  margin-top: 6px;
  color: #b9b9b9;
  line-height: 1.45;
}

.kind-card strong {
  display: block;
  margin-top: 6px;
  font-size: 0.76rem;
  text-transform: none;
  letter-spacing: normal;
}

.contact-grid span {
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
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
