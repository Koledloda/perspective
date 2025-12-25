import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Телефон',
    value: '+7 (495) 123-45-67',
    href: 'tel:+74951234567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@perspectiva.ru',
    href: 'mailto:info@perspectiva.ru',
  },
  {
    icon: MapPin,
    label: 'Адрес',
    value: 'Москва, ул. Примерная, 1',
    href: null,
  },
  {
    icon: Clock,
    label: 'Режим работы',
    value: 'Пн-Пт: 9:00-18:00',
    href: null,
  },
];

export function ContactsSection() {
  return (
    <section 
      id="contacts" 
      className="min-h-screen flex items-center justify-center hero-gradient relative py-20"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-2xl border border-primary-foreground/20">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Контакты
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Свяжитесь с нами
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Офис работает с понедельника по пятницу.<br />
                Диспетчерская служба — круглосуточно.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <div
                    className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="w-8 h-8 text-accent mx-auto mb-4" />

                    <span className="text-sm text-primary-foreground/70 block mb-2 break-words">
                      {item.label}
                    </span>

                    <span className="font-semibold text-primary-foreground block text-lg break-words hyphens-auto">
                      {item.value}
                    </span>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Emergency */}
            <div className="max-w-md mx-auto bg-accent/20 backdrop-blur-sm rounded-2xl p-8 text-center border border-accent/30">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Phone className="w-7 h-7 text-accent" />
                <span className="font-semibold text-primary-foreground text-xl">
                  Аварийная служба 24/7
                </span>
              </div>
              <a 
                href="tel:+74951234568" 
                className="text-3xl lg:text-4xl font-heading font-bold text-accent hover:underline block"
              >
                +7 (495) 123-45-68
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}