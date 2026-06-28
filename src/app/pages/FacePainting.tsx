import { Palette, Cake, GraduationCap, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function FacePainting() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Cake,
      title: t.birthdayTitle,
      description: t.birthdayDesc,
    },
    {
      icon: GraduationCap,
      title: t.schoolEventsTitle,
      description: t.schoolEventsDesc,
    },
    {
      icon: Building2,
      title: t.corporateEventsTitle,
      description: t.corporateEventsDesc,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1636717944794-858fe2fea698?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwcGFpbnRpbmclMjBjaGlsZHJlbiUyMHBhcnR5JTIwY29sb3JmdWx8ZW58MXx8fHwxNzgyNjY3MDAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Face Painting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <Palette className="size-16 mx-auto mb-4" />
          <h1 className="text-5xl mb-4">{t.facePaintingTitle}</h1>
          <p className="text-xl text-gray-200">{t.facePaintingIntro}</p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-full">
                <Palette className="size-12 text-white" />
              </div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {t.facePaintingDesc}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-4xl mb-2">🎨</div>
                <div className="text-gray-600">{t.birthdayTitle}</div>
              </div>
              <div className="p-4">
                <div className="text-4xl mb-2">🦋</div>
                <div className="text-gray-600">{t.schoolEventsTitle}</div>
              </div>
              <div className="p-4">
                <div className="text-4xl mb-2">🎪</div>
                <div className="text-gray-600">{t.corporateEventsTitle}</div>
              </div>
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
                <div
                  key={service.title}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow text-center"
                >
                  <div className="inline-flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-500 p-4 rounded-full mb-6">
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

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-12">Gallery</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg group cursor-pointer bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
                <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F3704f12f5c374a82ae882316ddf5d958%2F41256e5c533b41b2ae3d7117fc9c9f43)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">{t.contactIntro}</h2>
          <p className="text-xl mb-8">{t.facePaintingIntro}</p>
          <a
            href="#contact"
            className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            {t.contact}
          </a>
        </div>
      </section>
    </div>
  );
}
