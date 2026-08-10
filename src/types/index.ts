export interface News {
  id: number
  title: string
  snippet: string
  date: string
  category: string
  imageUrl?: string
}

export interface AboutCard {
  id: number
  title: string
  desc: string
}

export interface Program {
  id: number
  name: string
  description: string
  skills: string[]
}

export interface Project {
  id: number
  title: string
  desc: string
  category: string
  author: string
}

export interface Testimonial {
  id: number
  text: string
  name: string
  role: string
}

export interface Career {
  id: number
  role: string
  salaryRange: string
  description: string
  icon: string
}

// 1. Tipe Data TypeScript
export interface Article {
  id: string | number
  title: string
  category: string
  date: string
  author: string
  authorRole: string
  readTime?: string
  image: string
  snippet: string
  content: string
  tags: string[]
}

export interface RelatedArticle {
  id: string | number
  title: string
  date: string
  snippet: string
}