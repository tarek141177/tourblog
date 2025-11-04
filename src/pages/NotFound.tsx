import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Home, Search, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>صفحة غير موجودة - رحلاتنا</title>
        <meta name="description" content="عذرًا، الصفحة التي تبحث عنها غير موجودة." />
      </Helmet>

      <section className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-primary-600">404</h1>
            </div>

            <h2 className="text-3xl font-bold mb-4">عذرًا، الصفحة غير موجودة</h2>

            <p className="text-lg text-gray-600 mb-8">
              يبدو أنك ضللت طريقك! الصفحة التي تبحث عنها قد تكون قد تم نقلها أو حذفها.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/"
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center"
              >
                <Home className="ml-2 h-5 w-5" />
                العودة للرئيسية
              </Link>
              <Link
                to="/destinations"
                className="bg-transparent border-2 border-primary-600 hover:bg-primary-50 text-primary-600 font-bold py-3 px-8 rounded-lg transition-all flex items-center justify-center"
              >
                <Search className="ml-2 h-5 w-5" />
                استكشف الوجهات
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">هل تبحث عن شيء محدد؟</h3>
              <p className="text-gray-600 mb-6">
                يمكنك استخدام البحث في موقعنا للعثور على ما تبحث عنه، أو استكشف أقسام الموقع المختلفة.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/destinations" className="text-primary-600 hover:text-primary-700 font-medium">
                  الوجهات
                </Link>
                <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-medium">
                  المدونة
                </Link>
                <Link to="/about" className="text-primary-600 hover:text-primary-700 font-medium">
                  من نحن
                </Link>
                <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
                  اتصل بنا
                </Link>
              </div>
            </div>

            <div className="mt-12">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="منظر طبيعي سياحي"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound
