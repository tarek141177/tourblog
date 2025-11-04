import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MapPin, Star, Calendar, Clock, DollarSign, ChevronLeft, Heart, Share2, Facebook, Twitter, WhatsApp } from 'lucide-react'

const DestinationDetail = () => {
  const { id } = useParams()

  // Mock data for destination
  const destination = {
    id: 1,
    name: 'باريس',
    country: 'فرنسا',
    region: 'europe',
    description: 'باريس، عاصمة فرنسا، هي واحدة من أجمل مدن العالم وأكثرها رومانسية. تتميز بمعالمها الشهيرة مثل برج إيفل ومتحف اللوفر وكاتدرائية نوتردام. بالإضافة إلى ثقافتها الغنية ومطاعمها الرائعة ومتاجرها الفاخرة.',
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1784&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1549144511-f099e777c147?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1784&q=80',
      'https://images.unsplash.com/photo-1516483632559-9feec90c8866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    ],
    rating: 4.9,
    reviews: 324,
    price: 'مرتفعة',
    bestTime: 'أبريل - يونيو، سبتمبر - أكتوبر',
    highlights: [
      {
        name: 'برج إيفل',
        description: 'الرمز الأشهر لباريس، يبلغ ارتفاعه 324 مترًا ويوفر إطلالات بانورامية رائعة على المدينة.',
        image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1784&q=80'
      },
      {
        name: 'متحف اللوفر',
        description: 'أكبر متحف فني في العالم، يضم آلاف الأعمال الفنية بما في ذلك الموناليزا.',
        image: 'https://images.unsplash.com/photo-1566472237159-d6a0b2ac4ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
      },
      {
        name: 'كاتدرائية نوتردام',
        description: 'تحفة معمارية قوطية، تعتبر من أجمل الكنائس في العالم.',
        image: 'https://images.unsplash.com/photo-1551036350-f1a9a99c9f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
      },
      {
        name: 'الشانزلزيه',
        description: 'أشهر شارع في باريس، يضم متاجر فاخرة ومقاهي رائعة.',
        image: 'https://images.unsplash.com/photo-1549144511-f099e777c147?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
      }
    ],
    tags: ['ثقافة', 'تاريخ', 'فن', 'طعام'],
    activities: [
      {
        name: 'جولة في متحف اللوفر',
        duration: '3-4 ساعات',
        price: '€15-17',
        description: 'استكشف الأعمال الفنية الشهيرة في أكبر متحف فني في العالم.'
      },
      {
        name: 'جولة نهرية في نهر السين',
        duration: '1-2 ساعات',
        price: '€12-15',
        description: 'استمتع بإطلالات رائعة على معالم باريس من نهر السين.'
      },
      {
        name: 'جولات المشي في حي مونمارتر',
        duration: '2-3 ساعات',
        price: '€15-20',
        description: 'استكشف الحي الفني التاريخي في باريس مع مرشدين محترفين.'
      },
      {
        name: 'زيارة قصر فرساي',
        duration: 'يوم كامل',
        price: '€20-25',
        description: 'استكشف القصر التاريخي وحدائقه الشاسعة خارج باريس.'
      }
    ],
    practicalInfo: {
      language: 'الفرنسية',
      currency: 'اليورو (€)',
      visa: 'مطلوبة للمواطنين غير الأوروبيين',
      timezone: 'توقيت وسط أوروبا (CET)',
      electricity: '230V، مقابس من النوع E',
      water: 'آمنة للشرب',
      emergency: '112 (للشرطة، الإسعاف، والإطفاء)'
    },
    weather: [
      { month: 'يناير', temp: '3-7°C', rainfall: '55mm' },
      { month: 'فبراير', temp: '3-8°C', rainfall: '45mm' },
      { month: 'مارس', temp: '6-12°C', rainfall: '50mm' },
      { month: 'أبريل', temp: '8-15°C', rainfall: '50mm' },
      { month: 'مايو', temp: '11-19°C', rainfall: '65mm' },
      { month: 'يونيو', temp: '14-22°C', rainfall: '55mm' },
      { month: 'يوليو', temp: '16-24°C', rainfall: '60mm' },
      { month: 'أغسطس', temp: '16-24°C', rainfall: '55mm' },
      { month: 'سبتمبر', temp: '13-21°C', rainfall: '50mm' },
      { month: 'أكتوبر', temp: '10-16°C', rainfall: '60mm' },
      { month: 'نوفمبر', temp: '6-10°C', rainfall: '50mm' },
      { month: 'ديسمبر', temp: '3-7°C', rainfall: '55mm' }
    ],
    transportation: [
      {
        type: 'المترو',
        description: 'شبكة مترو واسعة تغطي معظم أنحاء المدينة، وسيلة نقل سريعة وفعالة.',
        price: '€1.90 للتذكرة الواحدة'
      },
      {
        type: 'الحافلات',
        description: 'شبكة حافلات شاملة تغطي الأماكن التي لا يصل إليها المترو.',
        price: '€1.90 للتذكرة الواحدة'
      },
      {
        type: 'الدراجات',
        description: 'نظام مشاركة الدراجات Vélib متوفر في جميع أنحاء المدينة.',
        price: '€1-5 للاستخدام اليومي'
      },
      {
        type: 'سيارات الأجرة',
        description: 'متوفرة بكثرة ولكنها الأعلى تكلفة.',
        price: '€2.60 رسوم بدء + €1.15 لكل كيلومتر'
      }
    ],
    accommodation: [
      {
        type: 'فنادق فاخرة',
        description: 'فنادق 5 نجوم في وسط المدينة مع خدمات كاملة.',
        price: '€250-600 لليلة'
      },
      {
        type: 'فنادق متوسطة',
        description: 'فنادق 3-4 نجوم في مناطق جيدة مع خدمات أساسية.',
        price: '€100-250 لليلة'
      },
      {
        type: 'بيوت شباب',
        description: 'غرف مشتركة أو خاصة بأسعار معقولة للمسافرين بميزانية محدودة.',
        price: '€25-60 لليلة'
      },
      {
        type: 'شقق مفروشة',
        description: 'شقق كاملة مع مطبخ للإقامة الطويلة.',
        price: '€80-200 لليلة'
      }
    ]
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareTitle = `${destination.name} - ${destination.country}`

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

  // Mock related destinations
  const relatedDestinations = [
    {
      id: 2,
      name: 'روما',
      country: 'إيطاليا',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      rating: 4.8
    },
    {
      id: 3,
      name: 'برشلونة',
      country: 'إسبانيا',
      image: 'https://images.unsplash.com/photo-1543169868-2865e8a39e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.7
    },
    {
      id: 4,
      name: 'أمستردام',
      country: 'هولندا',
      image: 'https://images.unsplash.com/photo-1555408773-bff3536171f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      rating: 4.6
    }
  ]

  const getPriceColor = (price: string) => {
    switch (price) {
      case 'منخفضة':
        return 'text-green-600'
      case 'متوسطة':
        return 'text-yellow-600'
      case 'مرتفعة':
        return 'text-red-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <>
      <Helmet>
        <title>{destination.name} - {destination.country} | رحلاتنا</title>
        <meta name="description" content={destination.description} />
        <meta property="og:title" content={`${destination.name} - ${destination.country}`} />
        <meta property="og:description" content={destination.description} />
        <meta property="og:image" content={destination.image} />
        <meta property="og:type" content="place" />
        <meta property="og:url" content={shareUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${destination.name} - ${destination.country}`} />
        <meta name="twitter:description" content={destination.description} />
        <meta name="twitter:image" content={destination.image} />
      </Helmet>

      {/* Back to Destinations */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <Link
            to="/destinations"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <ChevronRight className="ml-1 h-5 w-5" />
            العودة إلى الوجهات
          </Link>
        </div>
      </section>

      {/* Destination Hero */}
      <section className="relative h-96">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{destination.name}</h1>
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-5 w-5 ml-2" />
              <span className="text-xl">{destination.country}</span>
            </div>
            <div className="flex items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(destination.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="mr-2">{destination.rating}</span>
              <span>({destination.reviews} مراجعة)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">عن {destination.name}</h2>
                  <p className="text-gray-600 mb-6">{destination.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-primary-600 ml-3 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">أفضل وقت للزيارة</h3>
                        <p className="text-gray-600">{destination.bestTime}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <DollarSign className="h-5 w-5 text-primary-600 ml-3 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">مستوى الأسعار</h3>
                        <p className={`font-medium ${getPriceColor(destination.price)}`}>{destination.price}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {destination.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t pt-6">
                    <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
                      <Heart className="h-5 w-5 ml-2" />
                      أضف إلى المفضلة
                    </button>
                    <div className="flex items-center">
                      <span className="font-medium ml-3">مشاركة:</span>
                      <button
                        onClick={() => handleShare('facebook')}
                        className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors mr-2"
                        aria-label="مشاركة على فيسبوك"
                      >
                        <Facebook className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleShare('twitter')}
                        className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors mr-2"
                        aria-label="مشاركة على تويتر"
                      >
                        <Twitter className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleShare('whatsapp')}
                        className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
                        aria-label="مشاركة على واتساب"
                      >
                        <WhatsApp className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6">أهم المعالم</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {destination.highlights.map((highlight, index) => (
                      <div key={index} className="flex flex-col">
                        <div className="h-48 rounded-lg overflow-hidden mb-4">
                          <img
                            src={highlight.image}
                            alt={highlight.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{highlight.name}</h3>
                        <p className="text-gray-600">{highlight.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activities */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6">أنشطة مقترحة</h2>
                  <div className="space-y-4">
                    {destination.activities.map((activity, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold">{activity.name}</h3>
                          <div className="text-left">
                            <span className="text-primary-600 font-medium">{activity.price}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-500 mb-2">
                          <Clock className="h-4 w-4 ml-1" />
                          <span>{activity.duration}</span>
                        </div>
                        <p className="text-gray-600">{activity.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weather */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6">الطقس على مدار العام</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-right pb-3">الشهر</th>
                          <th className="text-right pb-3">درجة الحرارة</th>
                          <th className="text-right pb-3">معدل هطول الأمطار</th>
                        </tr>
                      </thead>
                      <tbody>
                        {destination.weather.map((month, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                            <td className="py-3">{month.month}</td>
                            <td className="py-3">{month.temp}</td>
                            <td className="py-3">{month.rainfall}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Gallery */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">معرض الصور</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {destination.gallery.map((image, index) => (
                      <div key={index} className="h-32 rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`${destination.name} ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Info */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">معلومات عملية</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">اللغة</h4>
                      <p className="text-gray-600">{destination.practicalInfo.language}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">العملة</h4>
                      <p className="text-gray-600">{destination.practicalInfo.currency}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">التأشيرة</h4>
                      <p className="text-gray-600">{destination.practicalInfo.visa}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">المنطقة الزمنية</h4>
                      <p className="text-gray-600">{destination.practicalInfo.timezone}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">الكهرباء</h4>
                      <p className="text-gray-600">{destination.practicalInfo.electricity}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">مياه الشرب</h4>
                      <p className="text-gray-600">{destination.practicalInfo.water}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">الطوارئ</h4>
                      <p className="text-gray-600">{destination.practicalInfo.emergency}</p>
                    </div>
                  </div>
                </div>

                {/* Transportation */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">وسائل النقل</h3>
                  <div className="space-y-4">
                    {destination.transportation.map((transport, index) => (
                      <div key={index}>
                        <h4 className="font-semibold mb-1">{transport.type}</h4>
                        <p className="text-gray-600 text-sm mb-1">{transport.description}</p>
                        <p className="text-primary-600 text-sm font-medium">{transport.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accommodation */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">الإقامة</h3>
                  <div className="space-y-4">
                    {destination.accommodation.map((acc, index) => (
                      <div key={index}>
                        <h4 className="font-semibold mb-1">{acc.type}</h4>
                        <p className="text-gray-600 text-sm mb-1">{acc.description}</p>
                        <p className="text-primary-600 text-sm font-medium">{acc.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">وجهات ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedDestinations.map(destination => (
                <div key={destination.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-48">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                    <div className="flex items-center mb-3">
                      <MapPin className="h-4 w-4 text-gray-500 ml-1" />
                      <span className="text-gray-500">{destination.country}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(destination.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="mr-1 text-sm text-gray-600">{destination.rating}</span>
                      </div>
                      <Link
                        to={`/destinations/${destination.id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        اكتشف المزيد
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DestinationDetail
