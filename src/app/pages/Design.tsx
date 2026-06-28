import { Pen, Sparkles, Monitor, Printer } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Design() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Sparkles,
      title: t.brandingTitle,
      description: t.brandingDesc,
    },
    {
      icon: Monitor,
      title: t.digitalTitle,
      description: t.digitalDesc,
    },
    {
      icon: Printer,
      title: t.printTitle,
      description: t.printDesc,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzgyNjY3MDAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <Pen className="size-16 mx-auto mb-4" />
          <h1 className="text-5xl mb-4">{t.designTitle}</h1>
          <p className="text-xl text-gray-200">{t.designIntro}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
                >
                  <div className="inline-flex items-center justify-center bg-pink-600 p-4 rounded-full mb-6">
                    <Icon className="size-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Showcase */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-12">Portfolio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Branding Example */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg p-12 text-white">
              <Sparkles className="size-16 mb-6" />
              <h3 className="text-3xl mb-4">{t.brandingTitle}</h3>
              <p className="text-pink-100">{t.brandingDesc}</p>
            </div>

            {/* Digital Design Example */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg p-12 text-white">
              <Monitor className="size-16 mb-6" />
              <h3 className="text-3xl mb-4">{t.digitalTitle}</h3>
              <p className="text-blue-100">{t.digitalDesc}</p>
            </div>

            {/* Print Design Example */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-12 text-white md:col-span-2">
              <Printer className="size-16 mb-6" />
              <h3 className="text-3xl mb-4">{t.printTitle}</h3>
              <p className="text-green-100">{t.printDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl text-center mb-12">{t.servicesTitle}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '01', title: 'Consulta', desc: 'Discutimos tus necesidades y objetivos' },
              { number: '02', title: 'Concepto', desc: 'Desarrollo de ideas creativas' },
              { number: '03', title: 'Diseño', desc: 'Creación del diseño final' },
              { number: '04', title: 'Entrega', desc: 'Archivos listos para usar' },
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-600 text-white rounded-full text-2xl mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
