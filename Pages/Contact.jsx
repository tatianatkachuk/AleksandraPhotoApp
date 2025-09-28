import React, { useState } from "react";
import { ContactMessage } from "@/entities/ContactMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, Camera, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/contexts/LanguageContext";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    project_type: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { t } = useLanguage();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await ContactMessage.create(formData);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        project_type: ''
      });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-12 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-4">
            {t('contact_title')}
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-light">
            {t('contact_subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-light">{t('contact_form_title')}</CardTitle>
              </CardHeader>
              <CardContent>
                {showSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-neutral-900 mb-2">
                      {t('contact_success_title')}
                    </h3>
                    <p className="text-neutral-600 font-light">
                      {t('contact_success_text')}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          {t('contact_form_name')}
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder={t('contact_form_name_placeholder')}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          {t('contact_form_email')}
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder={t('contact_form_email_placeholder')}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        {t('contact_form_project_type')}
                      </label>
                      <Select
                        value={formData.project_type}
                        onValueChange={(value) => handleInputChange('project_type', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={t('contact_form_project_type_placeholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="portrait">Portrait Session</SelectItem>
                          <SelectItem value="wedding">Wedding Photography</SelectItem>
                          <SelectItem value="commercial">Commercial Project</SelectItem>
                          <SelectItem value="fine_art">Fine Art Commission</SelectItem>
                          <SelectItem value="collaboration">Creative Collaboration</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        {t('contact_form_subject')}
                      </label>
                      <Input
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder={t('contact_form_subject_placeholder')}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        {t('contact_form_message')}
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder={t('contact_form_message_placeholder')}
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-neutral-900 hover:bg-neutral-800 elegant-transition"
                      size="lg"
                    >
                      {isSubmitting ? t('contact_form_button_sending') : t('contact_form_button')}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-light">{t('contact_info_title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-neutral-600" />
                  <span className="text-neutral-700">hello@studio.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-neutral-600" />
                  <span className="text-neutral-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-neutral-600" />
                  <span className="text-neutral-700">New York, NY</span>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-light">{t('contact_info_social_title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-50 elegant-transition"
                  >
                    <Instagram className="w-5 h-5 text-neutral-600" />
                    <span className="text-neutral-700">@studio_photography</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-50 elegant-transition"
                  >
                    <Camera className="w-5 h-5 text-neutral-600" />
                    <span className="text-neutral-700">{t('nav_portfolio')}</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="border-none shadow-lg bg-neutral-50">
              <CardContent className="pt-6">
                <h3 className="font-medium text-neutral-900 mb-2">{t('contact_info_response_title')}</h3>
                <p className="text-sm text-neutral-600 font-light">
                  {t('contact_info_response_text')}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}