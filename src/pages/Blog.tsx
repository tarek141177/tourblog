import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Calendar, Clock, User, Tag, ChevronLeft, ChevronRight } from 'lucide-react'
import { formatDate, generateReadingTime } from '@/lib/utils'

const Blog = () => {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')
  const [currentPage, setCurrentPage] = useState(1)

  // Mock data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: '10 نصائح هامة للسفر آمناً في الخارج',
      excerpt: 'استكشف أهم النصائح التي تضمن لك رحلة آمنة وممتعة في الخارج، من التخطيط المسبق إلى التعامل مع الطوارئ.',
      content: 'محتوى المقال...',
      author: 'أحمد محمد',
      publishDate: '2023-06-15',
      category: 'tips',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      readingTime: '5 دقائق',
      tags: ['سفر آمن', 'نصائح سفر', 'استعداد للسفر']
    },
    {
      id: 2,
      title: 'أفضل الأوقات لزيارة المدن الأوروبية الشهيرة',
      excerpt: 'دليل شامل لأفضل الأوقات لزيارة أشهر المدن الأوروبية، مع توصيات للأنشطة والمهرجانات الموسمية.',
      content: 'محتوى المقال...',
      author: 'سارة أحمد',
      publishDate: '2023-06-10',
      category: 'destinations',
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      readingTime: '7 دقائق',
      tags: ['أوروبا', 'أفضل وقت للسفر', 'توقيت السفر']
    },
    {
      id: 3,
      title: 'تجربتي في السفر عبر القارات بالقطار',
      excerpt: 'قصة ملهمة عن رحلة عبر القارات بالقطار، مع نصائح عملية لتخطيط رحلة مشابهة.',
      content: 'محتوى المقال...',
      author: 'محمد علي',
      publishDate: '2023-06-05',
      category: 'adventure',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71431f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      readingTime: '10 دقائق',
      tags: ['سفر بالقطار', 'رحلة عبر القارات', 'مغامرة']
    },
    {
      id: 4,
      title: 'أفضل 5 وجهات سياحية في جنوب شرق آسيا',
      excerpt: 'استكشف أجمل وجهات جنوب شرق آسيا، من شواطئ تايلاند إلى معابب كمبوديا ومدن سنغافورة الحديثة.',
      content: 'محتوى المقال...',
      author: 'أحمد محمد',
      publishDate: '2023-05-28',
      category: 'destinations',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      readingTime: '8 دقائق',
      tags: ['آسيا', 'جنوب شرق آسيا', 'وجهات سياحية']
    },
    {
      id: 5,
      title: 'كيف توفر المال أثناء السفر دون التضحية بالتجربة',
      excerpt: 'نصائح عملية للسفر بميزانية محدودة، مع الحفاظ على تجربة سفر غنية وممتعة.',
      content: 'محتوى المقال...',
      author: 'سارة أحمد',
      publishDate: '2023-05-20',
      category: 'tips',
      image: 'https://images.unsplash.com/photo-1543169868-2865e8a39e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      readingTime: '6 دقائق',
      tags: ['سفر بميزانية محدودة', 'توفير المال', 'نصائح سفر']
    },
    {
      id: 6,
      title: 'أفضل المطاعم المحلية في إسطنبول',
      excerpt: 'دليل لأشهر المطاعم المحلية في إسطنبول التي تقدم أطباقًا تركية أصلية بأسعار معقولة.',
      content: 'محتوى المقال...',
      author: 'محمد علي',
      publishDate: '2023-05-15',
      category: 'food',
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      readingTime: '7 دقائق',
      tags: ['إسطنبول', 'مطاعم محلية', 'طعام تركي']
    }
  ]

  // Filter posts based on category
  const filteredPosts = category 
    ? blogPosts.filter(post => post.category === category)
    : blogPosts

  // Pagination
  const postsPerPage = 6
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getCategoryName = (categoryValue: string) => {
    const categories: { [key: string]: string } = {
      'adventure': 'مغامرات',
      'destinations': 'وجهات',
      'food': 'طعام وشراب',
      'culture': 'ثقافة',
      'tips': 'نصائح سفر',
      'nature': 'طبيعة'
    }
    return categories[categoryValue] || categoryValue
  }

  return (
    <>
      <Helmet>
        <title>المدونة - رحلاتنا</title>
        <meta name="description" content="اكتشف نصائح السفر، القصص الملهمة، والأدلة السياحية في مدونة رحلاتنا." />
        <meta name="keywords" content="مدونة سياحية، نصائح سفر، قصص سفر، دليل سياحي" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            مدونة رحلاتنا
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            نصائح سفر، قصص ملهمة، وأدلة سياحية لمساعدتك في تخطيط رحلتك المثالية
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/blog"
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                !category 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              الكل
            </Link>
            <Link
              to="/blog?category=adventure"
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                category === 'adventure' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              مغامرات
            </Link>
            <Link
              to="/blog?category=destinations"
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                category === 'destinations' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              وجهات
            </Link>
            <Link
              to="/blog?category=food"
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                category === 'food' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              طعام وشراب
            </Link>
            <Link
              to="/blog?category=culture"
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                category === 'culture' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              ثقافة
            </Link>
            <Link
              to="/blog?category=tips"
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                category === 'tips' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              نصائح سفر
            </Link>
            <Link
              to="/blog?category=nature"
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                category === 'nature' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              طبيعة
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {category && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                تصفية حسب: {getCategoryName(category)}
              </h2>
            </div>
          )}

          {currentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map(post => (
                <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="image-hover-zoom h-64">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Tag className="h-4 w-4 ml-1" />
                      <span className="ml-2">{getCategoryName(post.category)}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-gray-900 hover:text-primary-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 ml-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 ml-1" />
                        <span>{formatDate(post.publishDate)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 ml-1" />
                        <span>{post.readingTime}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      اقرأ المزيد
                      <ChevronLeft className="mr-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">لا توجد مقالات في هذه الفئة</h3>
              <p className="text-gray-600 mb-6">حاول تصفح فئة أخرى أو عد لاحقًا للمزيد من المحتوى</p>
              <Link
                to="/blog"
                className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
              >
                عرض جميع المقالات
              </Link>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2 space-x-reverse">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-md bg-white border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="الصفحة السابقة"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-md ${
                      currentPage === page
                        ? 'bg-primary-600 text-white'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-md bg-white border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="الصفحة التالية"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">اشترك في نشرتنا البريدية</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            احصل على أحدث المقالات والنصائح السياحية والعروض الحصرية مباشرة في بريدك الإلكتروني
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

export default Blog
