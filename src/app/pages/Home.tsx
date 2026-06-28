import { Link } from 'react-router';
import { Camera, Palette, Pen, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Camera,
      title: t.photography,
      description: t.photographyIntro,
      link: '/photography',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHBvcnRyYWl0JTIwc2Vzc2lvbnxlbnwxfHx8fDE3ODI2NjcwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Palette,
      title: t.facePainting,
      description: t.facePaintingIntro,
      link: '/face-painting',
      image: 'https://images.unsplash.com/photo-1636717944794-858fe2fea698?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwcGFpbnRpbmclMjBjaGlsZHJlbiUyMHBhcnR5JTIwY29sb3JmdWx8ZW58MXx8fHwxNzgyNjY3MDAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Pen,
      title: t.design,
      description: t.designIntro,
      link: '/design',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzgyNjY3MDAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1587090564077-c7b8f2f1249e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBjYW1lcmElMjBzdHVkaW98ZW58MXx8fHwxNzgyNjY3MDAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional photographer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl mb-6">{t.heroTitle}</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">{t.heroSubtitle}</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors"
          >
            {t.contact}
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">{t.aboutTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400"
                alt="Aleksandra Dolgaia"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-xl text-gray-700 leading-relaxed">Soy una fotógrafa profesional de Castellón de la Plana apasionada por capturar momentos únicos. También ofrezco servicios de pintacaras para eventos infantiles y diseño gráfico personalizado. Mi objetivo es hacer que cada proyecto sea especial y memorable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-12">{t.servicesTitle}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.link}
                  to={service.link}
                  className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <Icon className="size-10 mb-2" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <span className="inline-flex items-center gap-2 text-pink-600 group-hover:gap-3 transition-all">
                      {t.viewServices}
                      <ArrowRight className="size-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">{t.contactIntro}</h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            {t.contact}
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
