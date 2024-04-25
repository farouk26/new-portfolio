import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html
      lang="en"
      className="bg-white-100"
      style={{ scrollBehavior: "smooth" }}
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
