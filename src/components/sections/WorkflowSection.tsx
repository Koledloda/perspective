import { Phone, ClipboardList, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Заявка',
    description: 'Оставьте заявку на сайте или позвоните. Ответим на вопросы и договоримся о времени.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Осмотр и расчёт',
    description: 'Инженер бесплатно выезжает на объект, оценивает объём работ и составляет смету.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Монтаж',
    description: 'Выполняем работы в согласованные сроки. Все материалы и оборудование включены.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Сдача и гарантия',
    description: 'Демонстрируем работу системы, подписываем акты, выдаём гарантию 24 месяца.',
  },
];

export function WorkflowSection() {
  return (
    <section className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Как мы работаем
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            4 простых шага
          </h2>
          <p className="text-lg text-primary-foreground/80">
            От заявки до работающей системы — в среднем 3-5 дней
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} isLast={index === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StepCardProps {
  step: typeof steps[0];
  index: number;
  isLast: boolean;
}

function StepCard({ step, index, isLast }: StepCardProps) {
  const Icon = step.icon;
  
  return (
    <div 
      className="relative animate-fade-in"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Connector Line (hidden on mobile and for last item) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-primary-foreground/20">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary-foreground/30 rounded-full" />
        </div>
      )}

      <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors">
        {/* Number Badge */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent text-accent-foreground font-heading font-bold text-xl mb-6 shadow-accent">
          {step.number}
        </div>

        <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>

        <h3 className="font-heading font-bold text-lg text-primary-foreground mb-3">
          {step.title}
        </h3>

        <p className="text-sm text-primary-foreground/70 leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}
