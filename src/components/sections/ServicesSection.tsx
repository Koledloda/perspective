import { Button } from '@/components/ui/button';
import { Video, DoorOpen, Construction, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    icon: DoorOpen,
    title: 'Домофоны',
    description: 'Установка, ремонт и обслуживание домофонных систем любой сложности',
    features: ['Аудио и видеодомофоны', 'IP-домофоны', 'Ключи и магнитные замки', 'Круглосуточный ремонт'],
    price: 'от 15 000 ₽',
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: Video,
    title: 'Видеонаблюдение',
    description: 'Проектирование и монтаж систем видеонаблюдения для домов и территорий',
    features: ['HD и 4K камеры', 'Удалённый доступ', 'Аналитика движения', 'Облачное хранение'],
    price: 'от 25 000 ₽',
    color: 'bg-emerald-500/10 text-emerald-600',
    popular: true,
  },
  {
    icon: Construction,
    title: 'Шлагбаумы',
    description: 'Установка автоматических шлагбаумов и систем контроля доступа',
    features: ['Автоматические шлагбаумы', 'Пульты и брелоки', 'СКУД системы', 'Ворота и калитки'],
    price: 'от 45 000 ₽',
    color: 'bg-amber-500/10 text-amber-600',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Наши услуги
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Комплексные решения для{' '}
            <span className="text-gradient">безопасности</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Предоставляем полный спектр услуг по установке и обслуживанию систем безопасности 
            для жилых комплексов, офисов и частных домов
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  
  return (
    <div 
      className="group relative bg-card rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {service.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
          Популярное
        </div>
      )}

      <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="font-heading text-xl font-bold text-foreground mb-3">
        {service.title}
      </h3>

      <p className="text-muted-foreground mb-6">
        {service.description}
      </p>

      <ul className="space-y-3 mb-6">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
            <Check className="w-4 h-4 text-success shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="pt-6 border-t border-border flex items-center justify-between">
        <div>
          <span className="text-sm text-muted-foreground">Цена</span>
          <div className="font-heading font-bold text-lg text-foreground">{service.price}</div>
        </div>
      </div>
    </div>
  );
}
