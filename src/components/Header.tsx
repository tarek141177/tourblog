import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MapPin, Compass, Camera, Calendar } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className={`flex items-center space-x-2 space-x-reverse font-bold text-xl ${
              isScrolled ? 'text-primary-600' : 'text-white'
            }`}
          >
            <MapPin className="h-8 w-8" />
            <span>رحلاتنا</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-primary-600 ${
                location.pathname === '/' ? 'text-primary-600' : isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              الرئيسية
            </Link>
            <Link
              to="/destinations"
              className={`font-medium transition-colors hover:text-primary-600 ${
                location.pathname === '/destinations' ? 'text-primary-600' : isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              الوجهات
            </Link>
            <Link
              to="/blog"
              className={`font-medium transition-colors hover:text-primary-600 ${
                location.pathname === '/blog' ? 'text-primary-600' : isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              المدونة
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-primary-600 ${
                location.pathname === '/about' ? 'text-primary-600' : isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              من نحن
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-primary-600 ${
                location.pathname === '/contact' ? 'text-primary-600' : isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              اتصل بنا
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={toggleMenu}
            aria-label="فتح القائمة"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-4 py-4 px-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="flex items-center space-x-2 space-x-reverse font-medium text-gray-700 hover:text-primary-600"
                onClick={closeMenu}
              >
                <Compass className="h-5 w-5" />
                <span>الرئيسية</span>
              </Link>
              <Link
                to="/destinations"
                className="flex items-center space-x-2 space-x-reverse font-medium text-gray-700 hover:text-primary-600"
                onClick={closeMenu}
              >
                <MapPin className="h-5 w-5" />
                <span>الوجهات</span>
              </Link>
              <Link
                to="/blog"
                className="flex items-center space-x-2 space-x-reverse font-medium text-gray-700 hover:text-primary-600"
                onClick={closeMenu}
              >
                <Camera className="h-5 w-5" />
                <span>المدونة</span>
              </Link>
              <Link
                to="/about"
                className="flex items-center space-x-2 space-x-reverse font-medium text-gray-700 hover:text-primary-600"
                onClick={closeMenu}
              >
                <Calendar className="h-5 w-5" />
                <span>من نحن</span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center space-x-2 space-x-reverse font-medium text-gray-700 hover:text-primary-600"
                onClick={closeMenu}
              >
                <MapPin className="h-5 w-5" />
                <span>اتصل بنا</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
