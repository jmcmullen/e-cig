import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Marquee, Hero } from '@components/ui'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 6 },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true } as any),
  })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 60,
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <section className="flex flex-col-reverse bg-secondary p-6">
        <div className="text-white">
          <h2 className="text-3xl font-bold uppercase mt-5 mb-3">What's your favourite flavour?</h2>
          <p className="mb-5">Tell us about your taste preferences and we'll find the perfect product for you.</p>

          <button className="bg-red py-5 px-12 rounded-none">Get Started</button>
        </div>

        <div className="right">
          <img src="http://lorempixel.com/768/684" alt="" />
        </div>
      </section>
    </>
  )
}

Home.Layout = Layout
