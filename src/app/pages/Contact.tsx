import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// ─── EmailJS credentials ───────────────────────────────────────────────────
// 1. Create a free account at https://www.emailjs.com
// 2. Add an Email Service (Gmail recommended) and copy the Service ID below
// 3. Create an Email Template and copy the Template ID below
//    Template variables to use in the template:
//      {{from_name}}  {{from_email}}  {{service}}  {{message}}
// 4. Copy your Public Key (Account → API Keys) below
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
// ───────────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'sending' | 'success' | 'error';

export function Contact() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setFormData({ name: '', email: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === 'error') setStatus('idle');
  };

  const handleReset = () => setStatus('idle');

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="size-16 mx-auto mb-4" />
          <h1 className="text-5xl mb-4">{t.contactTitle}</h1>
          <p className="text-xl text-pink-100">{t.contactIntro}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl mb-6">{t.sendButton}</h2>

              {/* Success state */}
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <CheckCircle className="size-16 text-green-500" />
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {t.successTitle ?? '¡Mensaje enviado!'}
                  </h3>
                  <p className="text-gray-600">
                    {t.successMessage ?? 'Gracias por contactarme. Te responderé pronto.'}
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2 border border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 transition-colors"
                  >
                    {t.sendAnother ?? 'Enviar otro mensaje'}
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      <AlertCircle className="size-4 shrink-0" />
                      {t.errorMessage ?? 'Hubo un error al enviar. Por favor, inténtalo de nuevo.'}
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="from_name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={status === 'sending'}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="from_email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status === 'sending'}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm mb-2 text-gray-700">
                      {t.serviceLabel}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      disabled={status === 'sending'}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none disabled:opacity-50"
                    >
                      <option value="">{t.selectService}</option>
                      <option value="photography">{t.photography}</option>
                      <option value="facePainting">{t.facePainting}</option>
                      <option value="design">{t.design}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                      {t.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      disabled={status === 'sending'}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none resize-none disabled:opacity-50"
                    />
                  </div>

                  {/* Hidden field — sends to tatiana's inbox */}
                  <input type="hidden" name="to_email" value="tatiana.tkachuk.upc@gmail.com" />

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <Loader2 className="size-5 animate-spin" />
                    ) : (
                      <Send className="size-5" />
                    )}
                    {status === 'sending' ? (t.sending ?? 'Enviando…') : t.sendButton}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-8">{t.contactTitle}</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Mail className="size-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">Email</h3>
                    <p className="text-gray-600">tatiana.tkachuk.upc@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Phone className="size-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">{t.contact}</h3>
                    <p className="text-gray-600">+34 123 456 789</p>
                    <p className="text-gray-600">+7 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <MapPin className="size-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">Studio</h3>
                    <p className="text-gray-600">Barcelona, España</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <MapPin className="size-12 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
