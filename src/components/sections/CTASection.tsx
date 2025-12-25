import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';

function formatPhone(value: string) {
  // Удаляем все нецифровые символы
  const digits = value.replace(/\D/g, '');
  let result = '+7 ';
  if (digits.length > 1) result += '(';
  if (digits.length >= 1) result += digits.substring(1, 4);
  if (digits.length >= 4) result += ') ';
  if (digits.length >= 4) result += digits.substring(4, 7);
  if (digits.length >= 7) result += '-' + digits.substring(7, 9);
  if (digits.length >= 9) result += '-' + digits.substring(9, 11);
  return result.trim();
}

export function CTASection() {
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;

    setIsSubmitting(true);
    // Сохраняем заявку в Supabase
    const { error } = await supabase.from('call_requests').insert({ phone });
    if (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить заявку. Попробуйте позже.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }
    toast({
      title: "Заявка отправлена!",
      description: "Мы перезвоним вам в течение 15 минут",
    });
    
    setPhone('');
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 lg:py-28 bg-background" id='call-order'>
      <div className="container mx-auto px-4">
        <div className="relative bg-card rounded-3xl overflow-hidden shadow-lg border border-border">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

          {/* Основной грид — занимает всю высоту карточки */}
          <div className="relative z-10 grid lg:grid-cols-2 min-h-[600px] lg:min-h-[400px] gap-8 lg:gap-12 p-6 lg:p-12">
            {/* Левая колонка — центрирована по вертикали */}
            <div className="flex flex-col justify-center">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Бесплатная консультация
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Оставьте заявку —<br />
                перезвоним за 15 минут
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg">
                Расскажите о вашей задаче, и мы подберём оптимальное решение.
                Выезд инженера на объект — бесплатно.
              </p>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success shrink-0" />
                  <span className="text-foreground">Бесплатный выезд инженера</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success shrink-0" />
                  <span className="text-foreground">Расчёт стоимости за 24 часа</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success shrink-0" />
                  <span className="text-foreground">Фиксированные цены в договоре</span>
                </li>
              </ul>
            </div>

            {/* Правая колонка — форма центрирована и заполняет пространство */}
            <div className="flex items-center justify-center">
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-secondary/50 rounded-2xl p-8 lg:p-10 shadow-md"
              >
                <h3 className="font-heading font-bold text-xl lg:text-2xl text-foreground mb-6">
                  Заказать звонок
                </h3>

                <div className="space-y-5">
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => {
                        // Только цифры, форматируем
                        let val = e.target.value;
                        // Если пользователь начинает с 8 или 7, заменяем на +7
                        if (/^[87]/.test(val.replace(/\D/g, ''))) {
                          val = '+7' + val.replace(/\D/g, '').substring(1);
                        }
                        setPhone(formatPhone(val));
                      }}
                      onKeyDown={e => {
                        // Запрещаем ввод любых символов кроме цифр, Backspace, Delete, стрелок
                        if (!/\d/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      maxLength={18}
                      className="pl-12 h-14 bg-card border-border"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full h-14 text-base font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Отправка...'
                    ) : (
                      <>
                        Заказать звонок
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <a href="#" className="text-primary hover:underline">
                      политикой конфиденциальности
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}