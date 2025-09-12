import { Moon, Sun, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

export function Header({ isDark, setIsDark }: HeaderProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold text-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Lucas Ribeiro
        </motion.h1>
        
        <nav className="hidden md:flex items-center space-x-6">
          {['sobre', 'skills', 'projetos', 'contato'].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              className="capitalize hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.button>
          ))}
        </nav>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="relative overflow-hidden"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isDark ? 0 : 180, scale: isDark ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              <Moon className="h-5 w-5" />
            </motion.div>
            <motion.div
              initial={false}
              animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              <Sun className="h-5 w-5" />
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
}