type Frontmatter = {
    title: string,
    description: string
}

export default function Card(frontmatter: Frontmatter) {

    return (
        <a href="#" className="block shadow-2xl w-3/4 max-w-3xl p-6 bg-white border rounded-lg">
        <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">{frontmatter.title}</h5>
        <p className="font-normal">{frontmatter.description}</p>
        </a>
    )
}