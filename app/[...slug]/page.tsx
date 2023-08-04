import { allPages } from "@/.contentlayer/generated"
import { Mdx } from "@/components/mdx";

interface PageProps {
    params: {
        slug: string[]
    }
}


export async function generateStaticParams(): Promise<PageProps["params"][]> {
    return allPages.map((page) => ({
        slug: [page.slug]
    }))
}


export default function Page() {
    const about = allPages[0];

    return (
    <>
    <Mdx code={about.body.code} />
    </>
    )
}