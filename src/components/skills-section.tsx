import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const skills = [
  { name: 'HTML', level: 80, color: 'bg-orange-500' },
  { name: 'CSS', level: 80, color: 'bg-blue-500' },
  { name: 'JavaScript', level: 70, color: 'bg-yellow-500' },
  { name: 'Java', level: 70, color: 'bg-red-600' },
  { name: 'SQL', level: 80, color: 'bg-green-600' },
  { name: 'Power BI', level: 65, color: 'bg-yellow-600' },
  { name: 'Git', level: 80, color: 'bg-orange-600' },
  /*{ name: 'Python', level: 70, color: 'bg-blue-600' }*/
];

const categories = [
  {
    title: 'Frontend',
    techs: ['HTML', 'CSS', 'JavaScript'],
    icon: '🎨'
  },
  {
    title: 'Backend',
    techs: ['Java', 'SQL'],
    icon: '⚙️'
  },
  {
    title: 'Ferramentas',
    techs: ['Git', 'Power BI'],
    icon: '🛠️'
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Skills & Tecnologias
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar soluções digitais inovadoras
          </p>
        </motion.div>

        {/* Categorias */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl mb-4"
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.techs.map((tech) => (
                      <motion.div
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Barras de Progresso */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">
              Níveis de Proficiência
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-full rounded-full bg-gradient-to-r from-primary to-primary/70 ${skill.color} shadow-lg`}
                      style={{
                        boxShadow: `0 0 10px rgba(168, 85, 247, 0.5)`
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}