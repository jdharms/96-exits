import List from "@/components/list"
import { allPosts, Post } from 'contentlayer/generated'
import { parseISO } from "date-fns"

export default function Home() {
  return (
    <>
      <List posts={allPosts.sort((a, b) => (new Date(b.date).valueOf() - new Date(a.date).valueOf()))} />
    </>
  )
}

