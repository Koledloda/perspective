import { MapPin, Building2 } from 'lucide-react';

const regions = [
  { name: 'Москва', objects: '2500+' },
  { name: 'Химки', objects: '180+' },
  { name: 'Мытищи', objects: '150+' },
  { name: 'Балашиха', objects: '120+' },
  { name: 'Подольск', objects: '200+' },
  { name: 'Королёв', objects: '90+' },
  { name: 'Люберцы', objects: '110+' },
  { name: 'Одинцово', objects: '130+' },
];

export function GeographySection() {
  return (
    <section className="py-20 lg:py-28 trust-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              География работы
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Работаем по всей<br />
              <span className="text-gradient">Москве и области</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Обслуживаем более 5000 объектов в Москве и Московской области. 
              Собственные бригады в каждом районе обеспечивают выезд в течение 2 часов.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-5 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-heading text-2xl font-bold text-foreground">5000+</span>
                </div>
                <span className="text-sm text-muted-foreground">объектов на обслуживании</span>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-heading text-2xl font-bold text-foreground">50+</span>
                </div>
                <span className="text-sm text-muted-foreground">городов области</span>
              </div>
            </div>
          </div>

          {/* Right - Regions Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
            {regions.map((region, index) => (
              <div 
                key={region.name}
                className="group bg-card rounded-xl p-4 border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-primary group-hover:text-accent transition-colors" />
                  <span className="font-semibold text-foreground">{region.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{region.objects} объектов</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
