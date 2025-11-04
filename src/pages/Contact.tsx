import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Mail, Phone, Send, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <>
      <Helmet>
        <title>اتصل بنا - رحلاتنا</title>
        <meta name="description" content="تواصل مع فريق رحلاتنا للحصول على المساعدة أو لمشاركة أفكارك واقتراحاتك." />
        <meta name="keywords" content="اتصل بنا، تواصل، دعم، رحلاتنا" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">اتصل بنا</h1>
          <p className="text-xl max-w-3xl mx-auto">
            نحن هنا لمساعدتك في تخطيط رحلتك المثالية أو للإجابة على أي استفسارات قد تكون لديك
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>

              {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    الموضوع
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'جاري الإرسال...'
                  ) : (
                    <>
                      إرسال الرسالة
                      <Send className="mr-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">معلومات التواصل</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary-600 ml-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">العنوان</h3>
                    <p className="text-gray-600">شارع النيل، الإسكندرية، مصر</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary-600 ml-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">البريد الإلكتروني</h3>
                    <p className="text-gray-600">info@rahlatna.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary-600 ml-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">الهاتف</h3>
                    <p className="text-gray-600">+20 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary-600 ml-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">ساعات العمل</h3>
                    <p className="text-gray-600">
                      الأحد - الخميس: 9:00 ص - 5:00 م<br />
                      الجمعة - السبت: 10:00 ص - 2:00 م
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold mb-4">تابعنا على وسائل التواصل الاجتماعي</h3>
                <div className="flex space-x-4 space-x-reverse">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
                    aria-label="فيسبوك"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full transition-colors"
                    aria-label="تويتر"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white p-3 rounded-full transition-colors"
                    aria-label="انستغرام"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors"
                    aria-label="يوتيوب"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">هل لديك سؤال عاجل؟</h3>
                <p className="text-gray-600 mb-4">
                  يمكنك التواصل معنا مباشرة عبر الدردشة الحية أو الاتصال بنا على الرقم أعلاه خلال ساعات العمل.
                </p>
                <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                  ابدأ الدردشة الحية
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">موقعنا</h2>
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.8982997396135!2d29.918738615182!3d31.2000923814629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4918f5f5f5f%3A0x8f5f5f5f5f5f5f5f!2sCairo%2C%20Egypt!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="خريطة موقع رحلاتنا"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">الأسئلة الشائعة</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">كيف يمكنني حجز رحلة معكم؟</h3>
                <p className="text-gray-600">
                  يمكنك حجز رحلة معنا عبر ملء نموذج الحجز على موقعنا أو التواصل معنا مباشرة عبر الهاتف أو البريد الإلكتروني.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">هل تقدمون تأمينًا على السفر؟</h3>
                <p className="text-gray-600">
                  نعم، نقدم خيارات تأمين على السفر مع جميع رحلاتنا. يمكنك الحصول على مزيد من المعلومات حول التغطية والتكاليف عبر التواصل مع فريقنا.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">هل يمكنني تعديل حجزي بعد تأكيده؟</h3>
                <p className="text-gray-600">
                  نعم، يمكنك تعديل حجزك حتى 48 ساعة قبل تاريخ السفر، مع رسوم تعديل محددة حسب نوع التعديل ووقت إجرائه.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">هل تقدمون خصومات للمجموعات؟</h3>
                <p className="text-gray-600">
                  نعم، نقدم خصومات خاصة للمجموعات المكونة من 10 أشخاص أو أكثر. يمكنك التواصل معنا للحصول على عرض مخصص لمجموعتك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
