import { FileCheck, Award, Handshake } from 'lucide-react';

const documents = [
  { name: 'Лицензия МЧС', number: '№ 77-Б/01234' },
  { name: 'СРО допуск', number: '№ СРО-С-123-456' },
  { name: 'ISO 9001:2015', number: 'Сертификат качества' },
];

const partners = [
  { name: 'VIZIT', logo: 'V' },
  { name: 'Falcon Eye', logo: 'FE' },
  { name: 'DoorHan', logo: 'DH' },
  { name: 'Hikvision', logo: 'HK' },
  { name: 'Dahua', logo: 'DA' },
  { name: 'CAME', logo: 'C' },
];

export function TrustSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Надёжность
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Документы и партнёры
          </h2>
          <p className="text-lg text-muted-foreground">
            Работаем официально, с полным комплектом разрешительных документов. 
            Являемся авторизованными партнёрами ведущих производителей.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Documents */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileCheck className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">
                Лицензии и сертификаты
              </h3>
            </div>

            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div 
                  key={doc.name}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/20 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{doc.name}</div>
                    <div className="text-sm text-muted-foreground">{doc.number}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Handshake className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">
                Официальные партнёры
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {partners.map((partner, index) => (
                <div 
                  key={partner.name}
                  className="group flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-card transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                    <span className="font-heading font-bold text-lg text-muted-foreground group-hover:text-primary transition-colors">
                      {partner.logo}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
