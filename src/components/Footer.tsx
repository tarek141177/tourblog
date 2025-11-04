import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <MapPin className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">رحلاتنا</span>
            </div>
            <p className="text-gray-300">
              منصتك لاكتشاف أجمل الوجهات السياحية حول العالم. نصائح سفر، تجارب شخصية، وأدلة سياحية شاملة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="فيسبوك"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="تويتر"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="انستغرام"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="يوتيوب"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-300 hover:text-white transition-colors">
                  الوجهات
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  المدونة
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">فئات المدونة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog?category=adventure" className="text-gray-300 hover:text-white transition-colors">
                  مغامرات
                </Link>
              </li>
              <li>
                <Link to="/blog?category=culture" className="text-gray-300 hover:text-white transition-colors">
                  ثقافة وتاريخ
                </Link>
              </li>
              <li>
                <Link to="/blog?category=food" className="text-gray-300 hover:text-white transition-colors">
                  طعام وشراب
                </Link>
              </li>
              <li>
                <Link to="/blog?category=nature" className="text-gray-300 hover:text-white transition-colors">
                  طبيعة ومناظر
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 space-x-reverse">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5" />
                <span className="text-gray-300">الإسكندرية، مصر</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <Mail className="h-5 w-5 text-primary-400" />
                <a href="mailto:info@rahlatna.com" className="text-gray-300 hover:text-white transition-colors">
                  info@rahlatna.com
                </a>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <Phone className="h-5 w-5 text-primary-400" />
                <a href="tel:+20123456789" className="text-gray-300 hover:text-white transition-colors">
                  +20 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            جميع الحقوق محفوظة © {currentYear} رحلاتنا. صُممت بـ ❤️ في مصر
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
