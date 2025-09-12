import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { SkillsSection } from "./components/skills-section";
import { ProjectsSection } from "./components/projects-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Verificar preferência salva ou preferência do sistema
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    // Aplicar tema e salvar preferência
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      {/* Efeito de fundo futurista */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        </motion.div>
      </div>

      <Header isDark={isDark} setIsDark={setIsDark} />

      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg transition-all duration-300 z-50 hover:shadow-primary/50"
        style={{
          background:
            "linear-gradient(45deg, #8b5cf6, #a855f7)",
        }}
      >
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="m18 15-6-6-6 6"
            animate={{ y: [0, -2, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      </motion.button>
    </motion.div>
  );
}