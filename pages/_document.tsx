import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="loading">
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WK4CLFW"
              height="0"
              width="0"
              className="hidden invisible"
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
