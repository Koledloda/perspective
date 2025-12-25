import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Building, Calendar } from 'lucide-react';

const cases = [
  {
    id: 1,
    title: 'ЖК "Солнечный"',
    location: 'Москва, Химки',
    type: 'Видеонаблюдение + Домофоны',
    apartments: '320 квартир',
    year: '2023',
    description: 'Комплексная модернизация системы безопасности: замена устаревших домофонов на IP-систему, установка 48 камер видеонаблюдения с аналитикой.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Бизнес-центр "Меридиан"',
    location: 'Москва, м. Белорусская',
    type: 'СКУД + Шлагбаумы',
    apartments: '30 этажей',
    year: '2024',
    description: 'Внедрение системы контроля доступа с распознаванием лиц, установка 4 автоматических шлагбаумов на парковке.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Коттеджный посёлок "Лесной"',
    location: 'Московская область',
    type: 'Комплексная безопасность',
    apartments: '85 домов',
    year: '2024',
    description: 'Периметральная охрана территории: видеонаблюдение, СКУД на въездах, интеграция с охранной сигнализацией.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
  },
];

export function CasesSection() {
  return (
    <section id="cases" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Наши объекты
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Последние кейсы
            </h2>
          </div>
        </div>

        {/* Cases Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((caseItem, index) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CaseCardProps {
  caseItem: typeof cases[0];
  index: number;
}

function CaseCard({ caseItem, index }: CaseCardProps) {
  return (
    <article 
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20 animate-fade-in"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={caseItem.image} 
          alt={caseItem.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {caseItem.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {caseItem.title}
        </h3>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {caseItem.location}
          </span>
          <span className="flex items-center gap-1">
            <Building className="w-4 h-4" />
            {caseItem.apartments}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {caseItem.year}
          </span>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {caseItem.description}
        </p>

      </div>
    </article>
  );
}
