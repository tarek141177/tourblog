import { Helmet } from 'react-helmet-async'
import { MapPin, Users, Award, Heart } from 'lucide-react'

const About = () => {
  return (
    <>
      <Helmet>
        <title>من نحن - رحلاتنا</title>
        <meta name="description" content="تعرف على قصة رحلاتنا ورسالتنا في تقديم أفضل المحتوى السياحي لمساعدتك في استكشاف العالم." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">من نحن</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            نحن فريق من المسافرين الشغوفين الذين يسعون لمشاركة تجاربهم ومعرفتهم لمساعدتك في استكشاف العالم
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">قصتنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-4">
                  بدأت رحلاتنا كفكرة بسيطة بين مجموعة من الأصدقاء الذين شاركوا شغفهم بالسفر واستكشاف الثقافات المختلفة حول العالم. خلال رحلاتنا، اكتشفنا أن كل تجربة سفر تحمل في طياتها قصصًا فريدة ودروسًا قيمة.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  قررنا إنشاء هذه المنصة لمشاركة تجاربنا ونصائحنا مع المسافرين الآخرين، لمساعدتهم في تخطيط رحلاتهم وجعلها أكثر متعة وسلاسة.
                </p>
                <p className="text-lg text-gray-600">
                  اليوم، أصبحت رحلاتنا مصدرًا موثوقًا للمعلومات السياحية، مع مجتمع نشط من المسافرين الذين يشاركوننا نفس الشغف لاستكشاف العالم.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="فريق رحلاتنا"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">مهمتنا وقيمنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-primary-100 rounded-full p-3 w-fit mb-4">
                  <MapPin className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">مهمتنا</h3>
                <p className="text-gray-600">
                  توفير محتوى سياحي عالي الجودة وموثوق لمساعدة المسافرين في تخطيط رحلاتهم واستكشاف وجهات جديدة بثقة وأمان.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-primary-100 rounded-full p-3 w-fit mb-4">
                  <Heart className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">قيمنا</h3>
                <p className="text-gray-600">
                  الشغف بالسفر، الاحترام للثقافات المختلفة، النزاهة في تقديم المعلومات، والالتزام بمساعدة المسافرين في تحقيق أفضل تجربة ممكنة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">فريقنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                    alt="أحمد محمد"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">أحمد محمد</h3>
                <p className="text-gray-600 mb-3">المؤسس والمدير التنفيذي</p>
                <p className="text-gray-500 text-sm">
                  مسافر محترف زار أكثر من 50 دولة حول العالم، متخصص في تخطيط الرحلات المغامرة.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                    alt="سارة أحمد"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">سارة أحمد</h3>
                <p className="text-gray-600 mb-3">مديرة المحتوى</p>
                <p className="text-gray-500 text-sm">
                  كاتبة ومصورة محترفة، متخصصة في الثقافات والتاريخ والوجهات الأوروبية.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="محمد علي"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">محمد علي</h3>
                <p className="text-gray-600 mb-3">مطور التقنيات</p>
                <p className="text-gray-500 text-sm">
                  خبير في التقنيات السياحية وتطوير المنصات الرقمية، يساعد في تحسين تجربة المستخدم.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-primary-100">وجهة سياحية</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">مقال سياحي</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-primary-100">قارئ شهري</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-primary-100">دولة مكتشفة</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">انضم إلى مجتمعنا</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            اشترك في نشرتنا البريدية واحصل على أحدث المقالات والنصائح السياحية والعروض الحصرية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              اشترك الآن
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
