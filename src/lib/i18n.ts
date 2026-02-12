import tr from '@/i18n/tr.json'
import en from '@/i18n/en.json'
export type Locale = 'tr' | 'en'
export function t(key: string, locale: Locale = 'tr') {
  const dict: any = locale === 'en' ? en : tr
  return key.split('.').reduce((o: any, k: string) => (o ? o[k] : undefined), dict) || key
}
