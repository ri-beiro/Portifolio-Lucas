import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Instagram, Linkedin, Github, Mail, MessageSquare, Phone } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/oribeiro_dev',
    color: 'hover:text-pink-500',
    bgColor: 'hover:bg-pink-500/10'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/lucas-ribeiro-461950203',
    color: 'hover:text-blue-600',
    bgColor: 'hover:bg-blue-600/10'
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/ri-beiro',
    color: 'hover:text-gray-800 dark:hover:text-gray-300',
    bgColor: 'hover:bg-gray-800/10 dark:hover:bg-gray-300/10'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:olucas.ribeiro@outlook.com',
    color: 'hover:text-red-500',
    bgColor: 'hover:bg-red-500/10'
  }
];

export function ContactSection() {
  const whatsappNumber = '5511951779490';
  const whatsappMessage = 'Olá! Vi seu portfólio e gostaria de conversar sobre oportunidades.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contato" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vamos conversar sobre seu próximo projeto? Estou sempre aberto a novas oportunidades
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MessageSquare className="w-6 h-6" />
                  Entre em Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-center items-center text-center space-y-6 py-12">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="p-8 rounded-full bg-green-500/10 border-2 border-green-500/20"
                >
                  <Phone className="w-16 h-16 text-green-500" />
                </motion.div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-primary">Vamos Conversar!</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Clique no botão abaixo para me chamar no WhatsApp e vamos discutir seu projeto!
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full"
                >
                  <Button
                    onClick={() => window.open(whatsappUrl, '_blank')}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg rounded-2xl shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                  >
                    <MessageSquare className="w-6 h-6 mr-3" />
                    Chamar no WhatsApp
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-sm text-muted-foreground flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Geralmente respondo em poucos minutos
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Redes Sociais */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Conecte-se Comigo</h3>
              <p className="text-muted-foreground mb-8">
                Siga-me nas redes sociais para acompanhar meus projetos e novidades do mundo tech.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    group p-6 rounded-xl border border-border transition-all duration-300
                    hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10
                    ${social.bgColor}
                  `}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <motion.div
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -10, 10, -10, 0],
                      }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-full bg-primary/10 transition-colors duration-300 ${social.bgColor}`}
                    >
                      <social.icon className={`w-6 h-6 transition-colors duration-300 ${social.color}`} />
                    </motion.div>
                    <span className={`font-medium transition-colors duration-300 ${social.color}`}>
                      {social.name}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20"
            >
              <h4 className="text-lg font-medium mb-2 text-primary">Resposta Rápida</h4>
              <p className="text-sm text-muted-foreground">
                Costumo responder e-mails em até 24 horas. Para conversas mais rápidas, 
                me chame no LinkedIn!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}