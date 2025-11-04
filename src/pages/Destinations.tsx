import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MapPin, Star, Filter, Search, ChevronLeft, ChevronRight } from 'lucide-react'

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)

  // Mock data for destinations
  const destinations = [
    {
      id: 1,
      name: 'باريس',
      country: 'فرنسا',
      region: 'europe',
      description: 'مدينة الأنوار والرومانسية، تتميز بمعالمها الشهيرة مثل برج إيفل ومتحف اللوفر.',
      image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1784&q=80',
      rating: 4.9,
      reviews: 324,
      price: 'مرتفعة',
      bestTime: 'أبريل - يونيو، سبتمبر - أكتوبر',
      highlights: ['برج إيفل', 'متحف اللوفر', 'كاتدرائية نوتردام', 'الشانزلزيه'],
      tags: ['ثقافة', 'تاريخ', 'فن', 'طعام']
    },
    {
      id: 2,
      name: 'روما',
      country: 'إيطاليا',
      region: 'europe',
      description: 'المدينة الخالدة، تاريخ عريق ومعالم أثرية رائعة مثل الكولوسيوم ونافورة تريفي.',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      rating: 4.8,
      reviews: 287,
      price: 'متوسطة',
      bestTime: 'أبريل - يونيو، سبتمبر - أكتوبر',
      highlights: ['الكولوسيوم', 'مدينة الفاتيكان', 'نافورة تريفي', 'بانثيون'],
      tags: ['تاريخ', 'ثقافة', 'طعام', 'فن']
    },
    {
      id: 3,
      name: 'طوكيو',
      country: 'اليابان',
      region: 'asia',
      description: 'مزيج رائع بين التقاليد العريقة والتكنولوجيا الحديثة، تجربة ثقافية فريدة.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
      rating: 4.9,
      reviews: 412,
      price: 'مرتفعة',
      bestTime: 'مارس - مايو، سبتمبر - نوفمبر',
      highlights: ['برج طوكيو', 'ميدان شيبويا', 'معبد سينسو-جي', 'أوكو'],
      tags: ['ثقافة', 'طعام', 'تكنولوجيا', 'تسوق']
    },
    {
      id: 4,
      name: 'مراكش',
      country: 'المغرب',
      region: 'africa',
      description: 'مدينة سحرية بأسواقها الملونة وقصورها التاريخية ومطابخها الشهية.',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.7,
      reviews: 256,
      price: 'منخفضة',
      bestTime: 'مارس - مايو، سبتمبر - نوفمبر',
      highlights: ['سوق الجماعة', 'حدائق ماجوريل', 'قصبة مراكش', 'جامع الفنا'],
      tags: ['ثقافة', 'طعام', 'تسوق', 'تاريخ']
    },
    {
      id: 5,
      name: 'نيويورك',
      country: 'الولايات المتحدة',
      region: 'americas',
      description: 'المدينة التي لا تنام، تتميز بناطحات السحاب والمتاحف العالمية والمسارح الشهيرة.',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.8,
      reviews: 398,
      price: 'مرتفعة',
      bestTime: 'أبريل - يونيو، سبتمبر - نوفمبر',
      highlights: ['تمثال الحرية', 'تايمز سكوير', 'سنترال بارك', 'متحف المتروبوليتان'],
      tags: ['ثقافة', 'فن', 'تسوق', 'طعام']
    },
    {
      id: 6,
      name: 'دبي',
      country: 'الإمارات العربية المتحدة',
      region: 'middle-east',
      description: 'مدينة المستقبل، تتميز بناطحات السحاب الشاهقة والمرافق الفاخرة والتسوق الرائع.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f88818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.7,
      reviews: 345,
      price: 'مرتفعة',
      bestTime: 'نوفمبر - مارس',
      highlights: ['برج خليفة', 'دبي مول', 'نافورة دبي', 'جزيرة النخلة'],
      tags: ['تسوق', 'فنادق', 'طعام', 'معالم حديثة']
    }
  ]

  // Filter destinations based on search and region
  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.country.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRegion = selectedRegion === 'all' || destination.region === selectedRegion
    return matchesSearch && matchesRegion
  })

  // Pagination
  const destinationsPerPage = 6
  const totalPages = Math.ceil(filteredDestinations.length / destinationsPerPage)
  const indexOfLastDestination = currentPage * destinationsPerPage
  const indexOfFirstDestination = indexOfLastDestination - destinationsPerPage
  const currentDestinations = filteredDestinations.slice(indexOfFirstDestination, indexOfLastDestination)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getRegionName = (regionValue: string) => {
    const regions: { [key: string]: string } = {
      'all': 'كل المناطق',
      'europe': 'أوروبا',
      'asia': 'آسيا',
      'africa': 'أفريقيا',
      'americas': 'الأمريكتان',
      'middle-east': 'الشرق الأوسط'
    }
    return regions[regionValue] || regionValue
  }

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
        <title>الوجهات السياحية - رحلاتنا</title>
        <meta name="description" content="استكشف أفضل الوجهات السياحية حول العالم مع دلائل شاملة ونصائح عملية لرحلات لا تُنسى." />
        <meta name="keywords" content="وجهات سياحية، دليل سياحي، أفضل الأماكن للسفر، معالم سياحية" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            استكشف العالم
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            اكتشف أفضل الوجهات السياحية حول العالم مع دلائل شاملة ونصائح عملية لرحلات لا تُنسى
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="ابحث عن وجهة..."
                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
              />
            </div>
            <div className="relative">
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                className="appearance-none pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                value={selectedRegion}
                onChange={(e) => {
                  setSelectedRegion(e.target.value)
                  setCurrentPage(1)
                }}
              >
                <option value="all">كل المناطق</option>
                <option value="europe">أوروبا</option>
                <option value="asia">آسيا</option>
                <option value="africa">أفريقيا</option>
                <option value="americas">الأمريكتان</option>
                <option value="middle-east">الشرق الأوسط</option>
              </select>
            </div>
          </div>

          {searchTerm && (
            <div className="mb-4">
              <p className="text-gray-600">
                عرض نتائج البحث لـ: <span className="font-semibold">"{searchTerm}"</span>
                {selectedRegion !== 'all' && (
                  <span> في {getRegionName(selectedRegion)}</span>
                )}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {currentDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentDestinations.map(destination => (
                <div key={destination.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-64 image-hover-zoom">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 text-sm font-medium">
                      {getRegionName(destination.region)}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{destination.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="mr-1 text-sm text-gray-600">{destination.rating}</span>
                        <span className="text-sm text-gray-500">({destination.reviews})</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 mb-3">
                      <MapPin className="h-4 w-4 ml-1" />
                      <span>{destination.country}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    <div className="mb-4">
                      <span className="text-sm font-medium">مستوى الأسعار:</span>
                      <span className={`mr-2 text-sm font-medium ${getPriceColor(destination.price)}`}>
                        {destination.price}
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className="text-sm font-medium">أفضل وقت للزيارة:</span>
                      <span className="mr-2 text-sm text-gray-600">{destination.bestTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {destination.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/destinations/${destination.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      اكتشف المزيد
                      <ChevronLeft className="mr-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">لم يتم العثور على وجهات</h3>
              <p className="text-gray-600 mb-6">حاول تعديل معايير البحث أو فلتر المناطق</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedRegion('all')
                  setCurrentPage(1)
                }}
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
              >
                إعادة تعيين البحث
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <nav className="flex items-center">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg ${
                    currentPage === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <div className="flex space-x-2 space-x-reverse mx-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`w-10 h-10 rounded-lg ${
                        currentPage === pageNumber
                          ? 'bg-primary-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg ${
                    currentPage === totalPages
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Destinations
