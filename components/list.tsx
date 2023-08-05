import CustomLink from "@/components/link"
import Tag from "./tag"
import { Post } from "@/.contentlayer/generated"
import { format, parseISO } from 'date-fns'

interface Props {
    posts: Post[]
}

export default function List({ posts }: Props) {
    return (
    <>
      <ul>
        {posts.map((frontMatter) => {
            return (
                <li key={frontMatter._id} className="py-4">
                    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                        <dl>
                            <dt className="sr-only">Published on</dt>
                            <dd className="text-base font-medium leading-6 text-gray-500">
                                {format(parseISO(frontMatter.date), 'LLLL d, yyyy')}
                            </dd>
                        </dl>
                        <div className="space-y-3 xl:col-span-3">
                            <div>
                                <h3 className="text-2xl font-bold leading-8 tracking-tight">
                                    <CustomLink href={`${frontMatter.url}`} className="text-gray-900">
                                        {frontMatter.title}
                                    </CustomLink>
                                </h3>
                                <div className="flex flex-wrap">
                                    {frontMatter.tagsList.map((x: string) => (
                                    <Tag key={frontMatter._id + x} name={x} />
                                    ))
                                    }
                                </div>
                            </div>
                            <div className="prose text-gray-500 max-w-none">
                                {frontMatter.summary}
                            </div>
                        </div>
                    </article>
                </li>
            )
        })}
      </ul>
    </>
    )
}