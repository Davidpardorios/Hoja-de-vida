// React y Framer Motion desde UMD
const { useEffect, useMemo, useState } = React;
const { createRoot } = ReactDOM;
const { motion, AnimatePresence } = window.framerMotion;

// =================== DATOS ===================
const profile = {
  name: "David Pardo Rios",
  role: "Científico de Datos | Data Analyst",
  location: "Bogotá, Colombia",
  email: "davidpardorios@gmail.com",
  phone: "3104114343",
  summary: [
    "Científico de Datos, Físico-Matemático y Técnico en Bases de Datos, con experiencia en Python, R, SQL y Power BI para el análisis, modelos supervisados y no supervisados, y visualización de datos. He trabajado en modelos de clasificación con Pandas, NumPy, Scikit-learn, TensorFlow, XGBoost, fine-tuning de modelos en Hugging Face y procesamiento de lenguaje natural (NLP) para análisis de sentimientos y sistemas de soporte.",
    "Actualmente en proceso de culminación de la Maestría en Analítica de Datos, lo que refuerza mi perfil técnico y me permite integrar la gestión de datos con soluciones."
  ],
  skills: [
    "Machine Learning","NLP","Ingeniería de Prompting","Bases de Datos",
    "Análisis de Datos","Comunicación Efectiva","Python","R","SQL",
    "Creatividad","Power BI","TensorFlow","Scikit-learn","Hugging Face","XGBoost"
  ],
  languages: ["Español","Inglés"]
};

const experience = [
  {
    title: "Líder de Innovación y Transformación Educativa",
    company: "Corporación Unificada de Educación Superior (CUN)",
    where: "Bogotá",
    period: "Oct. 2024 – Actualidad",
    bullets: [
      "Responsable del Laboratorio de Datos e integración de BI, estadística avanzada e IA para decisiones estratégicas.",
      "Diseño e implementación de dashboards ejecutivos en Power BI.",
      "Modelos predictivos y análisis de sentimientos con Hugging Face.",
      "Asistentes virtuales con IA generativa para optimizar consultas.",
      "Coordinación del equipo de docentes de estadística e innovación pedagógica."
    ]
  },
  {
    title: "Docente (Diplomado ML con Python)",
    company: "Corporación Unificada de Educación Superior (CUN)",
    where: "Bogotá",
    period: "Mar. 2025 – May. 2025",
    bullets: [
      "Módulo de limpieza de datos y modelos estadísticos."
    ]
  },
  {
    title: "Docente",
    company: "Universidad Libre",
    where: "Bogotá",
    period: "Sep. 2022 – Oct. 2024",
    bullets: [
      "Matemáticas I y II, Cálculo Diferencial e Integral, Estadística I y Probabilidad."
    ]
  },
  {
    title: "Analista de Datos",
    company: "Asociación Fómeque 2000",
    where: "Fómeque (Cundinamarca)",
    period: "Sep. 2020 – Jun. 2023",
    bullets: [
      "Gestión de bases de datos en SQL (8.000+ usuarios).",
      "Reportes en Excel y Power BI para decisiones administrativas."
    ]
  }
];

const education = [
  {
    title: "Maestría en Analítica de Datos",
    org: "Universidad Central",
    where: "Bogotá",
    year: "2025",
    desc: "Tesis en desarrollo: ‘Modelos de ML para optimizar selección de emisoras y franjas horarias en campañas publicitarias (Kantar IBOPE Media)’."
  },
  {
    title: "Técnico Profesional en Operación y Mantenimiento de Bases de Datos",
    org: "Fundación Universitaria Compensar",
    where: "Bogotá",
    year: "2024",
    desc: "SQL, administración, respaldo y optimización de BD."
  },
  {
    title: "Licenciatura en Física-Matemática",
    org: "Universidad Pedagógica Nacional",
    where: "Bogotá",
    year: "2022",
    desc: "Semillero de investigación, MySQL en proyectos de FyM, pensamiento lógico y metodologías cuantitativas."
  },
  {
    title: "Diplomado en Docencia Universitaria",
    org: "Universidad Libre",
    where: "Bogotá",
    year: "2023",
    desc: "Formación pedagógica para educación superior."
  },
  {
    title: "Ingeniería de Sistemas (9º semestre)",
    org: "Fundación Universitaria Compensar",
    where: "Bogotá",
    year: "2026 (est.)",
    desc: "En curso."
  }
];

// =================== UTILIDADES ===================
const cx = (...cls) => cls.filter(Boolean).join(" ");

function copyToClipboard(text) {
  navigator.clipboard?.writeText(text);
}

function useDarkMode() {
  const [dark, setDark] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return [dark, setDark];
}

// =================== COMPONENTES ===================
function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-teal-50 dark:bg-teal-900/40 px-3 py-1 text-xs font-semibold text-teal-700 dark:text-teal-200 ring-1 ring-inset ring-teal-200/80 dark:ring-teal-400/20">
      {children}
    </span>
  );
}

function Card({ children, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className={cx(
        "rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur px-6 py-6 md:px-8 md:py-8 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [dark, setDark] = useDarkMode();
  return (
    <Card className="md:flex md:gap-8">
      <div className="md:w-1/3 mb-8 md:mb-0">
        <h3 className="text-2xl font-extrabold text-teal-700 dark:text-teal-300 mb-4">Habilidades</h3>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((s) => <Pill key={s}>{s}</Pill>)}
        </div>
        <h3 className="text-2xl font-extrabold text-teal-700 dark:text-teal-300 mt-6 mb-4">Idiomas</h3>
        <div className="flex flex-wrap gap-2">
          {profile.languages.map((l) => <Pill key={l}>{l}</Pill>)}
        </div>
      </div>

      <div className="md:w-2/3">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">{profile.name}</h1>
            <h2 className="text-xl md:text-2xl font-medium text-teal-700 dark:text-teal-300 mt-2">{profile.role}</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(d => !d)}
              className="rounded-xl px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-slate-300 dark:ring-white/20 hover:bg-slate-50 dark:hover:bg-white/5"
              title="Alternar tema"
            >
              {dark ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => window.print()}
              className="rounded-xl px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-teal-300 dark:ring-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/30"
              title="Descargar / Imprimir"
            >
              ⬇️ CV
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
          <button onClick={() => copyToClipboard(profile.email)} className="inline-flex items-center gap-2 hover:underline" title="Copiar correo">
            📧 {profile.email}
          </button>
          <a className="hover:underline" href={`https://wa.me/57${profile.phone}`} target="_blank" rel="noreferrer">
            📱 {profile.phone}
          </a>
          <span>📍 {profile.location}</span>
        </div>

        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-6 mb-2">Sobre mí</h3>
        {profile.summary.map((p, i) => (
          <p key={i} className="text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{p}</p>
        ))}
      </div>
    </Card>
  );
}

function Experience() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <Card>
      <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">Experiencia Laboral</h3>
      <div className="space-y-4">
        {experience.map((exp, i) => (
          <div key={i} className={cx(
            "rounded-xl p-4 md:p-6",
            i % 2 ? "bg-slate-50 dark:bg-slate-900/40" : "bg-slate-100/70 dark:bg-white/5"
          )}>
            <button className="flex w-full items-start justify-between text-left" onClick={() => setOpenIdx(o => o === i ? -1 : i)}>
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-100">{exp.title}</h4>
                <div className="text-sm text-slate-500 dark:text-slate-400">{exp.company} · {exp.where}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{exp.period}</div>
              </div>
              <span className="ml-4 shrink-0 rounded-full ring-1 ring-inset ring-slate-300 dark:ring-white/10 px-2 py-1 text-xs font-semibold">
                {openIdx === i ? "Ocultar" : "Ver más"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openIdx === i && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-3 space-y-2 overflow-hidden pl-4 text-slate-700 dark:text-slate-200 text-sm list-disc"
                >
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Card>
  );
}

function Education() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    if (!query.trim()) return education;
    return education.filter((e) =>
      `${e.title} ${e.org} ${e.year}`.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <Card>
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">Educación</h3>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filtrar por programa, institución o año…"
          className="w-full md:w-96 rounded-xl border-0 ring-1 ring-inset ring-slate-300 dark:ring-white/20 bg-white/60 dark:bg-slate-900/40 px-3 py-2 text-sm outline-none placeholder:text-slate-400"
        />
      </div>
      <ul className="grid gap-4 md:grid-cols-2">
        {filtered.map((ed, i) => (
          <li key={i} className="rounded-xl bg-slate-50 dark:bg-white/5 p-4 md:p-5 ring-1 ring-inset ring-slate-200 dark:ring-white/10">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h4 className="text-base md:text-lg font-semibold text-slate-800 dark:text-slate-100">{ed.title}</h4>
                <div className="text-sm text-slate-500 dark:text-slate-400">{ed.org} · {ed.where}</div>
              </div>
              <Pill>{ed.year}</Pill>
            </div>
            {ed.desc && (
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{ed.desc}</p>
            )}
          </li>
        ))}
      </ul>
      {filtered.length === 0 && (
        <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          Sin resultados para “{query}”.
        </div>
      )}
    </Card>
  );
}

function Footer() {
  return (
    <div className="py-10 text-center text-xs text-slate-500 dark:text-slate-400">
      <p>
        Hecho con ❤ en React + Tailwind. Consejo pro: presiona
        <kbd className="rounded bg-slate-100 px-1.5 py-0.5 ring-1 ring-inset ring-slate-300"> Ctrl/Cmd + P </kbd>
        para imprimir/guardar PDF.
      </p>
    </div>
  );
}

function App() {
  useEffect(() => {
    document.title = "Hoja de Vida — David Pardo Rios";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 text-slate-700 dark:text-slate-200 selection:bg-teal-200/60 selection:text-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-8 md:py-10">
        <Header />
        <div className="mt-8"><Experience /></div>
        <div className="mt-8"><Education /></div>
        <Footer />
      </div>
    </div>
  );
}

// Montar en DOM
const root = createRoot(document.getElementById("root"));
root.render(<App />);
