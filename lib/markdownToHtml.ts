// import { remark } from 'remark'
// import html from 'remark-html'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

export default async function markdownToHtml(markdown: string) {
  // const result = await remark().use(rehypeHighlight).use(remarkGfm).use(html).process(markdown)
  // return result.toString()
  
  const result = await unified()
    .use(rehypeHighlight)
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkHtml)

    .process(markdown)
    return result.toString()
}
