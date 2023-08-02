import { allPosts } from "@/.contentlayer/generated"

// tags are known at build time
export const dynamicParams = false;

export const generateStaticParams = async function() {
    let tagLists = Array.from(new Set(allPosts.map((p) => (p.tagsList)).flat()))
    console.log(tagLists);
    return tagLists.map((t) => ({tag: t}));
}

export const generateMetadata = ({ params }: { params: { tag: string } }) => {
    const post = allPosts.filter((post) => post.tagsList.includes(params.tag))
    if (!post) throw new Error(`Post not found for slug: ${params.tag}`)
    return { title: params.tag }
  }

export default function Page({ params }: { params: { tag: string }}) {
    const posts = allPosts.filter((post) => post.tagsList.includes(params.tag))
    return (
        <>
        <h1>Hello, Next.js!</h1>
        {posts.map((p) => <p key={p._id}>{p.title}</p>)}
        </>
    )
}
