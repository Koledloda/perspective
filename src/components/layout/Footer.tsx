import { Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Домофоны', href: '#' },
    { label: 'Видеонаблюдение', href: '#' },
    { label: 'Шлагбаумы', href: '#' },
    { label: 'СКУД', href: '#' },
  ],
  company: [
    { label: 'О компании', href: '#about' },
    { label: 'Наши объекты', href: '#cases' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'Контакты', href: '#contacts' },
  ],
  legal: [
    { label: 'Политика конфиденциальности', href: '#' },
    { label: 'Договор оферты', href: '#' },
    { label: 'Реквизиты', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/perspective.png"
                alt="Логотип Перспектива"
                className="w-10 h-10 object-contain"
              />
              <div>
                <span className="font-heading font-bold text-lg">ПЕРСПЕКТИВА</span>
                <span className="block text-xs text-primary-foreground/60 -mt-1">
                  в безопасное будущее!
                </span>
              </div>
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-sm">
              Установка и обслуживание систем безопасности с 2000 года.
              Более 5000 объектов на обслуживании в Москве и области.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+74951234567"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +7 (495) 123-45-67
              </a>
              <a
                href="mailto:info@perspectiva.ru"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@perspectiva.ru
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                Москва, ул. Примерная, 1
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-4">Услуги</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold mb-4">Компания</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold mb-4">Документы</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© 2025 ПЕРСПЕКТИВА. Все права защищены.</p>
            <p>ИНН 7701234567 / ОГРН 1234567890123</p>
          </div>
        </div>
      </div>
    </footer>
  );
}