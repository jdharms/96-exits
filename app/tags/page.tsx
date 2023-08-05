import Tag from '@/components/tag';
import { allPosts } from 'contentlayer/generated'

type FrequencyRecord = {
    tag: string,
    count: number,
}

const tagsAsList = (m: Map<string, number>): FrequencyRecord[] => {
    let result: FrequencyRecord[] = [];

    m.forEach((count, tag) => {
        result.push({count: count, tag: tag});
    });

    // sort in descending order by count
    result.sort((a, b) => (b.count - a.count))

    return result;
}

export default function Page() {
    // get all posts
    const posts = allPosts
    const tagMap = new Map<string, number>();
    
    posts.forEach(post => {
        post.tagsList.forEach((tag: string) => {
            const count = tagMap.get(tag)
            if (count) {
                tagMap.set(tag, count + 1);
                return;
            }
            tagMap.set(tag, 1);
        })
    });
    
    return (
    <>
    <h1 className='text-4xl font-bold'>Tags</h1>
    <hr className='my-3' />
    <div className='flex flex-wrap'>
    {tagsAsList(tagMap).map((e) => (<Tag key={e.tag} name={e.tag} count={e.count} />))}
    </div>
    </>
    )
  }