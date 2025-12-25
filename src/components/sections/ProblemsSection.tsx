import { AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const problems = [
  {
    problem: 'Домофон не открывает дверь',
    solution: 'Диагностика и ремонт замка, блока вызова или трубки. Обычно решается за 1 визит.',
  },
  {
    problem: 'Плохо слышно/видно при вызове',
    solution: 'Замена динамика, микрофона или камеры. Настройка громкости и чувствительности.',
  },
  {
    problem: 'Ключи не подходят к подъезду',
    solution: 'Прошивка новых ключей, восстановление базы. Возможен выезд в день обращения.',
  },
  {
    problem: 'Шлагбаум не реагирует на пульт',
    solution: 'Замена батареек в пульте, перепрограммирование или ремонт приёмника.',
  },
  {
    problem: 'Камеры показывают «нет сигнала»',
    solution: 'Проверка кабеля, блока питания и регистратора. Замена неисправных компонентов.',
  },
  {
    problem: 'Запись с камер не сохраняется',
    solution: 'Диагностика жёсткого диска, настройка архивации, подключение облачного хранения.',
  },
];

export function ProblemsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Частые проблемы
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Проблемы в домах —<br />
            <span className="text-gradient">наши решения</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Знаем типичные неисправности и устраняем их быстро. 
            В 90% случаев — ремонт в день обращения.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, index) => (
            <div 
              key={item.problem}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Problem */}
              <div className="flex items-start gap-3 mb-4">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center mt-0.5">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                </div>
                <div className="font-semibold text-foreground">{item.problem}</div>
              </div>

              {/* Solution */}
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-4 h-4 text-success" />
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">{item.solution}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Не нашли свою проблему? Опишите её — поможем!
          </p>
          <a href='#contacts'>
            <Button variant="accent" size="lg" className="group">
              Описать проблему
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
