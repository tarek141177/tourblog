import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Calendar, Clock, User, Tag, ChevronLeft, Share2, Facebook, Twitter, WhatsApp } from 'lucide-react'
import { formatDate } from '@/lib/utils'

const BlogPost = () => {
  const { slug } = useParams()

  // Mock data for blog post
  const blogPost = {
    id: 1,
    title: '10 نصائح هامة للسفر آمناً في الخارج',
    content: `
      <p>السفر هو تجربة ممتعة ومثرية، ولكن السلامة يجب أن تكون دائمًا أولويتنا القصوى. في هذا المقال، سأشارككم أهم النصائح التي تضمن لكم رحلة آمنة وممتعة في الخارج.</p>

      <h2>1. البحث المسبق عن وجهتك</h2>
      <p>قبل السفر، قم بالبحث المفصل عن وجهتك. تعرف على العادات المحلية، القوانين، والمناطق الآمنة وغير الآمنة. اقرأ تجارب المسافرين الآخرين وتواصل معهم للحصول على نصائح حقيقية.</p>

      <h2>2. نسخ المستندات المهمة</h2>
      <p>قم بعمل نسخ رقمية من جميع مستنداتك المهمة مثل جواز السفر، التأشيرة، تذاكر الطيران، وحجوزات الفنادق. احتفظ بنسخة على هاتفك ونسخة أخرى على البريد الإلكتروني أو في السحابة.</p>

      <h2>3. التأمين الصحي</h2>
      <p>لا تسافر أبدًا بدون تأمين صحي شامل. تأكد من أن التأمين يغطي الحالات الطبية الطارئة، الإخلاء الطبي، وفقدان الأمتعة.</p>

      <h2>4. إبليع الأهل والأصدقاء بخط سير رحلتك</h2>
      <p>قبل مغادرة بلدك، أخبر أهلك وأصدقاءك المقربين بخط سير رحلتك بالتفصيل. شاركهم معلومات الاتصال الخاصة بك في وجهتك وتواريخ وصولك ومغادرتك.</p>

      <h2>5. الحذر من الأماكن المزدحمة</h2>
      <p>كن حذرًا في الأماكن المزدحمة مثل محطات القطار، الأسواق، والمواقع السياحية الشهيرة. هذه الأماكن تستهدفها السرقة والنشل.</p>

      <h2>6. عدم حمل مبالغ نقدية كبيرة</h2>
      <p>احمل معك مبالغ نقدية قليلة واستخدم البطاقات الائتمانية في المدفوعات الكبيرة. قم بتوزيع نقودك وبطاقاتك في أماكن مختلفة من حقائبك.</p>

      <h2>7. استخدام وسائل النقل الموثوقة</h2>
      <p>استخدم فقط وسائل النقل الرسمية والموثوقة مثل سيارات الأجرة المرخصة أو خدمات النقل المعروفة. تجنب ركوب السيارات الخاصة مع غرباء.</p>

      <h2>8. الحفاظ على اتصال بالإنترنت</h2>
      <p>اشتر في بطاقة SIM محلية أو خدمة الإنترنت الدولية لتبقى متصلاً بالإنترنت طوال رحلتك. هذا سيساعدك في التواصل والوصول إلى الخرائط والمعلومات الهامة.</p>

      <h2>9. احترام العادات المحلية</h2>
      <p>تعرف على العادات والتقاليد المحلية واحترمها. ارتدِ ملابس مناسبة، خاصة عند زيارة الأماكن الدينية والمحافظة.</p>

      <h2>10. الثقة بالحدس</h2>
      <p>إذا شعرت بعدم الارتياح في مكان ما أو مع شخص معين، اترك المكان فورًا. حدسك هو أفضل دليل لك في كثير من الأحيان.</p>

      <p>تذكر دائمًا أن السلامة لا تعني التخلي عن المغامرة، بل تعني الاستمتاع برحلتك بثقة وأمان.</p>
    `,
    author: 'أحمد محمد',
    publishDate: '2023-06-15',
    category: 'tips',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    readingTime: '5 دقائق',
    tags: ['سفر آمن', 'نصائح سفر', 'استعداد للسفر']
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

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareTitle = blogPost.title

  const handleShare = (platform: string) => {
    let url = ''

    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        break
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`
        break
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(`${shareTitle} ${shareUrl}`)}`
        break
      default:
        return
    }

    window.open(url, '_blank')
  }

  // Mock related posts
  const relatedPosts = [
    {
      id: 2,
      title: 'أفضل الأوقات لزيارة المدن الأوروبية الشهيرة',
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'destinations'
    },
    {
      id: 3,
      title: 'تجربتي في السفر عبر القارات بالقطار',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71431f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'adventure'
    },
    {
      id: 5,
      title: 'كيف توفر المال أثناء السفر دون التضحية بالتجربة',
      image: 'https://images.unsplash.com/photo-1543169868-2865e8a39e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'tips'
    }
  ]

  return (
    <>
      <Helmet>
        <title>{blogPost.title} - رحلاتنا</title>
        <meta name="description" content={blogPost.content.substring(0, 160).replace(/<[^>]*>?/gm, '')} />
        <meta property="og:title" content={blogPost.title} />
        <meta property="og:description" content={blogPost.content.substring(0, 160).replace(/<[^>]*>?/gm, '')} />
        <meta property="og:image" content={blogPost.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={shareUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogPost.title} />
        <meta name="twitter:description" content={blogPost.content.substring(0, 160).replace(/<[^>]*>?/gm, '')} />
        <meta name="twitter:image" content={blogPost.image} />
      </Helmet>

      {/* Back to Blog */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <ChevronRight className="ml-1 h-5 w-5" />
            العودة إلى المدونة
          </Link>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Featured Image */}
              <div className="h-96">
                <img
                  src={blogPost.image}
                  alt={blogPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Post Meta */}
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 ml-1" />
                    <span>{getCategoryName(blogPost.category)}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 ml-1" />
                    <span>{blogPost.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 ml-1" />
                    <span>{formatDate(blogPost.publishDate)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 ml-1" />
                    <span>{blogPost.readingTime}</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-6">{blogPost.title}</h1>

                {/* Share Buttons */}
                <div className="flex items-center mb-8">
                  <span className="font-medium ml-3">مشاركة:</span>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors ml-2"
                    aria-label="مشاركة على فيسبوك"
                  >
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors ml-2"
                    aria-label="مشاركة على تويتر"
                  >
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleShare('whatsapp')}
                    className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors ml-2"
                    aria-label="مشاركة على واتساب"
                  >
                    <WhatsApp className="h-5 w-5" />
                  </button>
                </div>

                {/* Post Content */}
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-8 border-t">
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag, index) => (
                      <span key={index} className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-16 h-16 rounded-full overflow-hidden ml-4">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                        alt={blogPost.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{blogPost.author}</h3>
                      <p className="text-gray-600">
                        مسافر محترف زار أكثر من 50 دولة حول العالم، متخصص في السفر الآمن وتخطيط الرحلات المغامرة.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">مقالات ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(post => (
                <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="image-hover-zoom h-48">
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
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPost
