import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="h-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-stone-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}