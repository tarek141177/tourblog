import { type ClassValue, clsx } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj)
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[\u0621\u0644]/g, 'ا') // Replace hamza and alif with alif
    .replace(/[\u0622-\u064a]/g, (match) => {
      // Map Arabic characters to Latin equivalents
      const arabicToLatinMap: { [key: string]: string } = {
        'ا': 'a',
        'ب': 'b',
        'ت': 't',
        'ث': 'th',
        'ج': 'j',
        'ح': 'h',
        'خ': 'kh',
        'د': 'd',
        'ذ': 'dh',
        'ر': 'r',
        'ز': 'z',
        'س': 's',
        'ش': 'sh',
        'ص': 's',
        'ض': 'd',
        'ط': 't',
        'ظ': 'z',
        'ع': 'a',
        'غ': 'gh',
        'ف': 'f',
        'ق': 'q',
        'ك': 'k',
        'ل': 'l',
        'م': 'm',
        'ن': 'n',
        'ه': 'h',
        'و': 'w',
        'ي': 'y',
        'ى': 'a',
        'ة': 'h',
        'ء': 'a',
      }
      return arabicToLatinMap[match] || match
    })
    .replace(/[^a-z0-9 -]/g, '') // Remove all non-word chars except for hyphens
    .replace(/-+/g, '-') // Replace multiple - with single -
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export function generateExcerpt(content: string, maxLength: number = 150): string {
  // Remove HTML tags
  const plainText = content.replace(/<[^>]+>/g, '')
  return truncateText(plainText, maxLength)
}

export function generateReadingTime(content: string): string {
  const plainText = content.replace(/<[^>]+>/g, '')
  const wordsPerMinute = 200
  const words = plainText.trim().split(/\s+/).length
  const readingTime = Math.ceil(words / wordsPerMinute)
  return `${readingTime} دقيقة قراءة`
}
