import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <div className="mb-2">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="border-white bg-stone-100 bg-opacity-25 rounded-lg shadow-2xl">
        <h3 className="text-3xl">
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="hover:underline"
          >
            {title}
          </Link>
        </h3>
        <div className="text-lg">
          <Avatar name={author.name} picture={author.picture} />
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg m-10">{excerpt}</p>
      </div>
    </div>
  )
}

export default PostPreview
