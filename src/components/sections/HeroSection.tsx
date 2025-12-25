import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  '25 лет на рынке',
  'Более 5000 объектов',
  'Гарантия 24 месяца',
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] hero-gradient overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-foreground/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-12 lg:py-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm text-primary-foreground/90 font-medium">
                Эксперт в системах безопасности
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Надёжная защита<br />
              <span className="text-accent">вашего дома</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Установка и обслуживание домофонов, видеонаблюдения и шлагбаумов. 
              Работаем с ТСЖ, ЖСК и управляющими компаниями по всей Москве и области.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="#contacts">
                <Button variant="hero" size="xl" className="group">
                  Перейти к заявке
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg">
            <div className="grid grid-cols-2 gap-4">
              <StatCard number="25" label="лет опыта" delay="0.2s" />
              <StatCard number="5000+" label="объектов" delay="0.3s" />
              <StatCard number="24/7" label="поддержка" delay="0.4s" />
              <StatCard number="98%" label="довольных клиентов" delay="0.5s" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 119.5" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}

function StatCard({ number, label, delay }: { number: string; label: string; delay: string }) {
  return (
    <div 
      className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors animate-scale-up"
      style={{ animationDelay: delay }}
    >
      <div className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
        {number}
      </div>
      <div className="text-sm text-primary-foreground/70">{label}</div>
    </div>
  );
}
