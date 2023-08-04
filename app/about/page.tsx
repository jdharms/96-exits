import { allAbouts } from "@/.contentlayer/generated"
import { Mdx } from "@/components/mdx";

export default function Page() {
    const about = allAbouts[0];

    return (
    <>
    <Mdx code={about.body.code} />
    </>
    )
}