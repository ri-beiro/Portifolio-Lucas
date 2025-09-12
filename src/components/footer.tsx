import { motion } from 'motion/react';
import { Heart, Code, Coffee } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-8 px-4 border-t border-border bg-muted/30"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-muted-foreground"
          >
            <span>© {currentYear} Lucas Ribeiro. Feito com</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                color: ['#8b5cf6', '#ef4444', '#8b5cf6']
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4 fill-current" />
            </motion.div>
            <span>e muito</span>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Coffee className="w-4 h-4" />
            </motion.div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-muted-foreground"
          >
            <Code className="w-4 h-4" />
            <span className="text-sm">Desenvolvedor Web</span>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}