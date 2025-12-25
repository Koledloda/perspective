import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#services', label: 'Услуги' },
  { href: '#cases', label: 'Кейсы' },
  { href: '#about', label: 'О компании' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contacts', label: 'Контакты' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="public/perspective.png"
              alt="Логотип Перспектива"
              className="w-10 h-10 object-contain"
            />
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-foreground">ПЕРСПЕКТИВА</span>
              <span className="block text-xs text-muted-foreground -mt-1">в безопасное будущее!</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+74951234567" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">+7 (495) 123-45-67</span>
            </a>
            <a href='#call-order'>
              <Button variant="accent" size="sm">
                Заказать звонок
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border mt-2">
              <a href="tel:+74951234567" className="flex items-center gap-2 px-4 py-2 text-foreground">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">+7 (495) 123-45-67</span>
              </a>
              <a href='#call-order'>
                <Button variant="accent" className="w-full mt-3">
                  Заказать звонок
                </Button>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}