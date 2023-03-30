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
      <div className="m-2">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="border-white bg-stone-100 bg-opacity-25 rounded-lg shadow-2xl p-5">
        <h3 className="text-3xl">
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="hover:underline"
          >
            {title}
          </Link>
        </h3>
        <div className="text-lg flex-col p-5">
          <Avatar name={author.name} picture={author.picture} />
          <DateFormatter dateString={date} />
          <p className="text-lg">{excerpt}</p>
        </div>

      </div>
    </div>
  )
}

export default PostPreview
