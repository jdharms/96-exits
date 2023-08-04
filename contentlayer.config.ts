import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/posts/*.md`,
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: false },
    date: { type: 'date', required: true },
    tags: { type: 'string', required: false }
  },
  computedFields: {
    slug: { type: 'string', resolve: (post) => post._raw.sourceFileName.substring(0, post._id.indexOf('.'))},
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.sourceFileName.substring(0, post._id.indexOf('.'))}` },
    tagsList: { type: 'list', resolve: (post) => post.tags?.split(" ")}
  },
}))

export const About = defineDocumentType(() => ({
    name: 'About',
    filePathPattern: `about.md`,
    contentType: 'mdx'
}))

export default makeSource({ contentDirPath: 'content', documentTypes: [Post, About] })