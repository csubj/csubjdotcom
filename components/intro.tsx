import { SITE_TITLE_SUFFIX } from '../lib/constants'

let slogans: string[] = [
  "Personal Slogan Goes Here",
  "Here's Cj", 
  "This is another intro here",
  "5g waves passing through me"
]

const Intro = () => {
  return (
    <section className="flex-col md:flex-col flex items-left md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        {SITE_TITLE_SUFFIX}
      </h1>
      {/* <h2>{slogans[Math.floor(Math.random()*slogans.length)]}</h2> */}
    </section>
  )
}

export default Intro
