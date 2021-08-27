import { FC } from 'react'
import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import config from '@config/seo.json'
import { getConfig } from '@lib/gtm'

const Head: FC = () => {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script')
    script.innerHTML = getConfig()
    script.async = true
    document.head.appendChild(script)
  }

  return (
    <>
      <DefaultSeo {...config} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />

        <script src="https://widget.reviews.io/polaris/build.js"></script>
      </NextHead>
    </>
  )
}

export default Head
