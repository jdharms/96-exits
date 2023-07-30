import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: false },
    date: { type: 'date', required: true },
    tags: { type: 'string', required: false }
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
    tagsList: { type: 'list', resolve: (post) => post.tags?.split(" ")}
  },
}))

export default makeSource({ contentDirPath: 'content/posts', documentTypes: [Post] })