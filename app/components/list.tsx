import CustomLink from "@/app/components/link"
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
                            <dd className="text-base text-gray-500 font-medium leading-6">
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
                                    {frontMatter.tagsList.map((x: string) => (<span className="flex items-center border-2 px-1.5 rounded-full mx-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tag mr-1" viewBox="0 0 16 16"> <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"/> <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"/> </svg> 
                                        {x}
                                        </span>))}
                                </div>
                            </div>
                            <div className="prose max-w-none text-gray-500">
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