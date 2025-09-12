import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github, Code, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Plataforma de E-commerce Completa',
    description: 'Plataforma completa de e-commerce com carrinho de compras, sistema de pagamento e dashboard administrativo.',
    techs: ['HTML/CSS', 'JavaScipt', 'MySQL'],
   /* github: '#', */
    demo: 'https://mimostorebrasil.com.br/',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Jogo da Memória',
    description: 'Jogo da Memória completo, com sistema de pontuaçãoe ranqueamento!',
    techs: ['HTML/CSS', 'Javascript'],
    github: 'https://github.com/ri-beiro/Jogo-da-Memoria',
    demo: 'https://ri-beiro.github.io/Jogo-da-Memoria/',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Site de Receitas',
    description: 'Site de Receitas em construção, responsivo, sistema de login e cadastro de usuarios',
    techs: ['HTML/CSS', 'JavaScript', 'MySQL'],
    github: 'https://github.com/ri-beiro/Site-Receitas',
    demo: 'https://ri-beiro.github.io/Site-Receitas/',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    title: 'Portfolio Website',
    description: 'Site responsivo com animações modernas e sistema de dark/light mode.',
    techs: ['React', 'TypeScript', 'Tailwind'],
    github: '#',
    demo: '#',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'MiniJogo Detona Ralph',
    description: 'MiniJogo baseado no antigo Jogo do Detona Ralph, com sistema de temporizador, vidas e pontuação',
    techs: ['HTML/CSS', 'JavaScript'],
    github: 'https://github.com/ri-beiro/Detona-Ralph-Game',
    demo: 'https://ri-beiro.github.io/Detona-Ralph-Game/',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Mobile App',
    description: 'Aplicativo mobile para gestão de tarefas com sincronização em nuvem.',
    techs: ['React Native', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#',
    gradient: 'from-pink-500 to-rose-500'
  }
];

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Meus Projetos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e impactantes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 overflow-hidden border-primary/10">
                <CardHeader className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  <div className="relative">
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-xl">{project.title}</span>
                      <motion.div
                        whileHover={{ rotate: 45, scale: 1.1 }}
                        className="text-primary"
                      >
                        <Code className="w-5 h-5" />
                      </motion.div>
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.techs.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        size="sm" 
                        className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              onClick={() => window.open('https://github.com/ri-beiro', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              Ver Todos os Projetos
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}