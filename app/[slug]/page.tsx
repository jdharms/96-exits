import { allPages } from "@/.contentlayer/generated"
import { Mdx } from "@/components/mdx";
import { Metadata } from "next";

interface PageProps {
    params: {
        slug: string
    }
}

async function getPageFromParams(params: PageProps["params"]) {
    const slug = params?.slug
    const page = allPages.find((page) => page.slug === slug)

    if (!page) {
        return null
    }

    return page
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    return allPages.map((page) => ({
        slug: page.slug
    }))
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const page = await getPageFromParams(params)

    if (!page) {
        return {}
    }

    return {
        title: page.title
    }
}

export default function Page() {
    const about = allPages[0];

    return (
    <>
    <Mdx code={about.body.code} />
    </>
    )
}