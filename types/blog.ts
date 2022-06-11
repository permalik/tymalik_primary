import React from "react";

export type BlogFrontMatter = {
  alt_text: string
  author: string
  description: string
  cover_image: string
  tags: string[]
  timestamp: string
  title: string
}

export type BlogLayoutProps = {
  children: React.ReactNode
  frontMatter: BlogFrontMatter
  readingTime: string
  wordCount: number
}

export type BlogPostProps = {
  alt_text: string
  author: string
  cover_image: string
  frontMatter: BlogFrontMatter
  markdownBody: any
  readingTime: string
  siteTitle: string
  slug: string
  wordCount: number
}

export type BlogPostsProps = {
  posts?: BlogPostProps[]
}

export interface BlogProps extends BlogPostsProps {
  alt_text: string;
  author: string
  title: string;
  description: string;
}