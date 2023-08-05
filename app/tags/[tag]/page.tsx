import { allPosts } from "@/.contentlayer/generated"
import List from "@/components/list";

// tags are known at build time
export const dynamicParams = false;

export const generateStaticParams = async function() {
    let tagLists = Array.from(new Set(allPosts.map((p) => (p.tagsList)).flat()))
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
        <div className="grid justify-items-center"><text className="text-xl font-bold">Posts tagged &quot;{params.tag}&quot;</text></div>
        <List posts={posts} />
        </>
    )
}
