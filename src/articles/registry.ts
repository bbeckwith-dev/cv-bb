import type { ComponentType } from 'react'

export interface ArticleSeo {
  title: string
  description: string
}

export interface ArticleSeoMeta {
  datePublished: string
  dateModified: string
  keywords: string[]
  articleType: 'Article' | 'TechArticle'
  articleTags: string
  images: string[]
  about: Array<Record<string, string>>
  extra?: Record<string, string>
  citation?: Array<{ '@type': string; name: string; url: string }>
  isBasedOn?: Record<string, unknown>
  mentions?: Array<Record<string, string | string[] | Record<string, string>>>
  discussionUrl?: string
  relatedLink?: string
  communityUrl?: string
  video?: Record<string, unknown>
  subjectOf?: Record<string, unknown>
}

export interface ArticleConfig {
  id: string
  slugs: { es: string; en: string }
  titles: { es: string; en: string }
  seo: { es: ArticleSeo; en: ArticleSeo }
  sectionLabels: { es: Record<string, string>; en: Record<string, string> }
  type: 'collab' | 'case-study' | 'bridge'
  ogImage?: string
  heroImage?: string
  component: () => Promise<{ default: ComponentType<{ lang: 'es' | 'en' }> }>
  xDefaultSlug?: string
  ragReady?: boolean
  i18nFile?: string
  seoMeta?: ArticleSeoMeta
}

export const articleRegistry: ArticleConfig[] = []

export function getAltPaths(): Record<string, string> {
  const map: Record<string, string> = {
    '/': '/en',
    '/en': '/',
    '/about': '/about',
    '/privacy': '/privacy',
  }
  for (const article of articleRegistry) {
    map[`/${article.slugs.en}`] = `/${article.slugs.en}`
  }
  return map
}

export function getPageTitles(): Record<string, string> {
  const map: Record<string, string> = {
    '/': 'Portfolio',
    '/en': 'Portfolio',
    '/about': 'About',
    '/privacy': 'Privacy',
  }
  for (const article of articleRegistry) {
    map[`/${article.slugs.en}`] = article.titles.en
  }
  return map
}

export function getSectionLabels(): Record<string, Record<string, string>> {
  const map: Record<string, Record<string, string>> = {}
  for (const article of articleRegistry) {
    map[`/${article.slugs.en}`] = article.sectionLabels.en
  }
  return map
}

export function getEsSlugs(): Set<string> {
  return new Set<string>()
}
