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

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section className="flex flex-col sm:md:flex-row items-left md:justify-between mt-5 mb-5 md:mb-12 space-x-3">
      <div className="mb-2 md:mb-4">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-row-2 md:gap-x-5 lg:gap-x-5 mb-5 md:mb-5">
        <div className="border-white bg-stone-100 bg-opacity-25 rounded-lg shadow-2xl p-5">
          <h3 className=" text-4xl lg:text-5xl">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg pl-2 pt-4 space-y-2">
            <div className="flex flex-row space-x-5">
            <Avatar name={author.name} picture={author.picture} />
            <DateFormatter dateString={date} />
            </div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
