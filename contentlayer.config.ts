import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const removeMdx = function(name: string) {
    return name.replace(".mdx", "");
}


export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: false },
    date: { type: 'date', required: true },
    tags: { type: 'string', required: false }
  },
  computedFields: {
    slug: { type: 'string', resolve: (post) => `${removeMdx(post._raw.sourceFileName)}`},
    url: { type: 'string', resolve: (post) => `/posts/${removeMdx(post._raw.sourceFileName)}` },
    tagsList: { type: 'list', resolve: (post) => post.tags?.split(" ")}
  },
}))

export const Page = defineDocumentType(() => ({
    name: 'Page',
    filePathPattern: `pages/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: false},
    },
    computedFields: {
        slug: { type: 'string', resolve: (page) => `${removeMdx(page._raw.sourceFileName)}`},
    }
}))

export default makeSource({ contentDirPath: 'content/', documentTypes: [Post, Page] })