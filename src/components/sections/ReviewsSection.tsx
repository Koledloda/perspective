import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    author: 'Иванова Мария Петровна',
    role: 'Председатель ТСЖ "Солнечный дом"',
    rating: 5,
    text: 'Работаем с компанией уже 8 лет. За это время ни разу не подвели. Все заявки от жильцов закрываются в тот же день. Рекомендую коллегам из других ТСЖ.',
    date: 'Декабрь 2024',
  },
  {
    id: 2,
    author: 'Сидоров Алексей',
    role: 'Директор УК "Комфорт"',
    rating: 5,
    text: 'Перешли к ним после проблем с предыдущим подрядчиком. Разница колоссальная — профессиональный подход, своё оборудование на складе, быстрый ремонт.',
    date: 'Ноябрь 2024',
  },
  {
    id: 3,
    author: 'Козлова Елена',
    role: 'Старшая по дому, ул. Ленина 15',
    rating: 5,
    text: 'Заменили всю домофонную систему в подъезде. Работали аккуратно, убрали за собой. Теперь всё работает как часы, жильцы довольны.',
    date: 'Октябрь 2024',
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 lg:py-28 trust-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Отзывы
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Что говорят клиенты
          </h2>
          <p className="text-lg text-muted-foreground">
            Более 200 управляющих компаний и ТСЖ доверяют нам безопасность своих домов
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

        {/* Rating Summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-card rounded-full px-6 py-3 border border-border shadow-sm">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9 из 5</span>
            <span className="text-muted-foreground">на основе 347 отзывов</span>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ReviewCardProps {
  review: typeof reviews[0];
  index: number;
}

function ReviewCard({ review, index }: ReviewCardProps) {
  return (
    <article 
      className="bg-card rounded-2xl p-6 lg:p-8 border border-border shadow-card hover:shadow-lg transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Quote Icon */}
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Quote className="w-5 h-5 text-primary" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Text */}
      <p className="text-foreground leading-relaxed mb-6">
        "{review.text}"
      </p>

      {/* Author */}
      <div className="pt-4 border-t border-border">
        <div className="font-semibold text-foreground">{review.author}</div>
        <div className="text-sm text-muted-foreground">{review.role}</div>
        <div className="text-xs text-muted-foreground mt-1">{review.date}</div>
      </div>
    </article>
  );
}
