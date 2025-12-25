import { Clock, Award, Users, Wrench, HeadphonesIcon, ShieldCheck } from 'lucide-react';

const advantages = [
  {
    icon: Clock,
    title: '25 лет опыта',
    description: 'Работаем с 2000 года. Знаем все особенности оборудования и типичные проблемы',
  },
  {
    icon: Award,
    title: 'Официальные дилеры',
    description: 'Сертифицированные партнёры ведущих производителей: VIZIT, Falcon Eye, DoorHan',
  },
  {
    icon: Users,
    title: 'Своя служба',
    description: 'Собственные бригады монтажников и мастеров. Никаких субподрядчиков',
  },
  {
    icon: Wrench,
    title: 'Склад запчастей',
    description: 'Все комплектующие в наличии. Ремонт в день обращения в 90% случаев',
  },
  {
    icon: HeadphonesIcon,
    title: 'Поддержка 24/7',
    description: 'Диспетчерская служба работает круглосуточно. Выезд в течение 2 часов',
  },
  {
    icon: ShieldCheck,
    title: 'Гарантия 24 месяца',
    description: 'Расширенная гарантия на все работы и оборудование. Договор и чек',
  },
];

export function AdvantagesSection() {
  return (
    <section className="py-20 lg:py-28 trust-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Почему мы
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Почему ТСЖ выбирают нас
          </h2>
          <p className="text-lg text-muted-foreground">
            Более 200 управляющих компаний доверяют нам обслуживание своих объектов
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={advantage.title} advantage={advantage} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface AdvantageCardProps {
  advantage: typeof advantages[0];
  index: number;
}

function AdvantageCard({ advantage, index }: AdvantageCardProps) {
  const Icon = advantage.icon;
  
  return (
    <div 
      className="group flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-card transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <div>
        <h3 className="font-heading font-bold text-lg text-foreground mb-2">
          {advantage.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {advantage.description}
        </p>
      </div>
    </div>
  );
}
