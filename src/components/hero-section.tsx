import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import LucasImg from "../assets/lucas.ribeiro.png";
import { Code, Terminal, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="sobre"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Foto */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-start"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              {/* Pulsação limitada à imagem */}
              <motion.div
                className="absolute inset-0 w-72 h-72 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur-xl opacity-20"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.1, 0.2, 0.],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <ImageWithFallback
                src={LucasImg}
                alt="Lucas Ribeiro"
                className="w-72 h-72 rounded-2xl ring-2 ring-purple-200 shadow-xl object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Sobre Mim */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-2 text-primary"
              >
                <Terminal className="w-5 h-5" />
                <span className="text-sm font-medium">Desenvolvedor Web</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
              >
                Lucas Ribeiro
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Desenvolvedor web apaixonado por tecnologia e inovação. Especializado em criar experiências digitais modernas e funcionais, sempre buscando implementar as melhores práticas de desenvolvimento e design.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground"
            >
              Com foco em desenvolvimento front-end e back-end, trabalho com tecnologias modernas para entregar soluções robustas e escaláveis que fazem a diferença no mundo digital.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center space-x-4 pt-4"
            >
              <div className="flex items-center space-x-2 text-primary">
                <Code className="w-5 h-5" />
                <span className="text-sm">Clean Code</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <Zap className="w-5 h-5" />
                <span className="text-sm">Performance</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
