import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MapPin, Calendar, ArrowRight, Star, Clock, Users } from 'lucide-react'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>رحلاتنا - اكتشف العالم معنا</title>
        <meta name="description" content="منصتك لاكتشاف أجمل الوجهات السياحية حول العالم. نصائح سفر، تجارب شخصية، وأدلة سياحية شاملة." />
        <meta name="keywords" content="سياحة، سفر، وجهات سياحية، دليل سياحي، نصائح سفر، مدونة سياحية" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="منظر طبيعي سياحي"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            اكتشف عالماً من المغامرات
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            انضم إلينا في رحلة استكشاف أجمل الوجهات السياحية حول العالم، وشاركنا تجاربك ونصائحك في السفر
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link
              to="/destinations"
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center"
            >
              استكشف الوجهات
              <ArrowRight className="mr-2 h-5 w-5" />
            </Link>
            <Link
              to="/blog"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-lg transition-all flex items-center justify-center"
            >
              اقرأ المدونة
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              لماذا تختار رحلاتنا؟
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              نقدم لك محتوى سياحي موثوق، تجارب حقيقية، ونصائح عملية لجعل رحلاتك لا تُنسى
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 rounded-full p-3 w-fit mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">وجهات مختارة بعناية</h3>
              <p className="text-gray-600 text-center">
                نقدم لك أفضل الوجهات السياحية حول العالم، مع تفاصيل شاملة تجعل رحلتك أسهل
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 rounded-full p-3 w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">مجتمع مسافرين</h3>
              <p className="text-gray-600 text-center">
                انضم إلى مجتمعنا من المسافرين وشارك تجاربك واحصل على نصائح من خبراء السفر
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 rounded-full p-3 w-fit mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">خطط سفر مخصصة</h3>
              <p className="text-gray-600 text-center">
                احصل على خطط سفر مخصصة تناسب ميزانيتك واهتماماتك، مع توصيات لأفضل الأنشطة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              الوجهات الأكثر شعبية
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              استكشف أشهر الوجهات التي يختارها المسافرون حول العالم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Destination Card 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow image-hover-zoom">
              <img
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="باريس"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-primary-600 ml-1" />
                  <span className="text-sm text-gray-500">فرنسا</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">باريس</h3>
                <p className="text-gray-600 mb-4">
                  مدينة الأنوار والرومانسية، تتميز بمعالمها الشهيرة مثل برج إيفل ومتحف اللوفر
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="mr-2 text-sm text-gray-600">(4.9)</span>
                  </div>
                  <Link
                    to="/destinations/paris"
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                  >
                    اكتشف المزيد
                    <ArrowRight className="mr-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Destination Card 2 */}
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow image-hover-zoom">
              <img
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="روما"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-primary-600 ml-1" />
                  <span className="text-sm text-gray-500">إيطاليا</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">روما</h3>
                <p className="text-gray-600 mb-4">
                  المدينة الخالدة، تاريخ عريق ومعالم أثرية رائعة مثل الكولوسيوم ونافورة تريفي
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="mr-2 text-sm text-gray-600">(4.8)</span>
                  </div>
                  <Link
                    to="/destinations/rome"
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                  >
                    اكتشف المزيد
                    <ArrowRight className="mr-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Destination Card 3 */}
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow image-hover-zoom">
              <img
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1934&q=80"
                alt="طوكيو"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-primary-600 ml-1" />
                  <span className="text-sm text-gray-500">اليابان</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">طوكيو</h3>
                <p className="text-gray-600 mb-4">
                  مزيج رائع بين التقاليد العريقة والتكنولوجيا الحديثة، تجربة ثقافية فريدة
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="mr-2 text-sm text-gray-600">(4.9)</span>
                  </div>
                  <Link
                    to="/destinations/tokyo"
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                  >
                    اكتشف المزيد
                    <ArrowRight className="mr-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/destinations"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              استكشف جميع الوجهات
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              آخر المقالات
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              نصائح سفر، قصص ملهمة، ودلائل سياحية لمساعدتك في تخطيط رحلتك المثالية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <Link to="/blog/best-beaches-in-thailand">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="أفضل الشواطئ في تايلاند"
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Clock className="h-4 w-4 ml-1" />
                  <span>5 دقائق قراءة</span>
                  <span className="mx-2">•</span>
                  <span>15 يونيو 2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link to="/blog/best-beaches-in-thailand" className="hover:text-primary-600 transition-colors">
                    أفضل الشواطئ في تايلاند: دليلك الكامل للاستمتاع بالجنة
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  استكشف أجمل الشواطئ في تايلاند، من شواطئ فيفي بوكيت إلى جزر سيميلان الهادئة
                </p>
                <Link
                  to="/blog/best-beaches-in-thailand"
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                >
                  اقرأ المزيد
                  <ArrowLeft className="mr-1 h-4 w-4" />
                </Link>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <Link to="/blog/backpacking-europe-tips">
                <img
                  src="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="نصائح للسفر في أوروبا بحقيبة الظهر"
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Clock className="h-4 w-4 ml-1" />
                  <span>8 دقائق قراءة</span>
                  <span className="mx-2">•</span>
                  <span>10 يونيو 2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link to="/blog/backpacking-europe-tips" className="hover:text-primary-600 transition-colors">
                    السفر في أوروبا بحقيبة الظهر: نصائح وحيل لا تعرفها
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  دليل شامل للسفر في أوروبا بميزانية محدودة، مع أفضل النصائح لتوفير المال والوقت
                </p>
                <Link
                  to="/blog/backpacking-europe-tips"
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                >
                  اقرأ المزيد
                  <ArrowLeft className="mr-1 h-4 w-4" />
                </Link>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <Link to="/blog/photography-tips-travel">
                <img
                  src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="نصائح التصوير الفوتوغرافي في السفر"
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Clock className="h-4 w-4 ml-1" />
                  <span>6 دقائق قراءة</span>
                  <span className="mx-2">•</span>
                  <span>5 يونيو 2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link to="/blog/photography-tips-travel" className="hover:text-primary-600 transition-colors">
                    فن التصوير الفوتوغرافي في السفر: كيف تلتقط أفضل اللحظات
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  نصائح احترافية لتحسين مهاراتك في التصوير الفوتوغرافي أثناء السفر وإبقاء الذكريات
                </p>
                <Link
                  to="/blog/photography-tips-travel"
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                >
                  اقرأ المزيد
                  <ArrowLeft className="mr-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              اقرأ جميع المقالات
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            هل أنت مستعد لبدء رحلتك؟
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            انضم إلى مجتمعنا من المسافرين وشاركنا تجاربك واحصل على إلهام لرحلتك القادمة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/destinations"
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center"
            >
              استكشف الوجهات
              <MapPin className="mr-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-600 text-white font-bold py-3 px-8 rounded-lg transition-all flex items-center justify-center"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
