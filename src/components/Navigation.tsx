import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };
  const navItems = [{
    label: 'About',
    href: '#about'
  }, {
    label: 'Skills',
    href: '#skills'
  }, {
    label: 'Projects',
    href: '#projects'
  }, {
    label: 'Experience',
    href: '#experience'
  }, {
    label: 'Contact',
    href: '#contact'
  }];
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'py-6'}`}>
      <div className="container px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold font-display gradient-text">
          SK
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => <a key={item.label} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {item.label}
            </a>)}
        </div>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="glass-card">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden glass-card" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <motion.div initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: -20
    }} className="md:hidden glass mt-4 mx-6 rounded-2xl p-6">
          <div className="flex flex-col gap-4">
            {navItems.map(item => <a key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {item.label}
              </a>)}
          </div>
        </motion.div>}
    </motion.nav>;
};
export default Navigation;
