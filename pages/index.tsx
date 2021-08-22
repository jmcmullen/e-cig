import Link from 'next/link'
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
      <section className="flex flex-col-reverse lg:flex-row bg-secondary p-6 lg:pb-10">
        <div className="text-white lg:flex flex-col lg:w-2/4 lg:justify-center lg:ml-10 lg:px-20 lg:py-20">
          <h2 className="text-3xl font-bold uppercase mt-5 mb-3 lg:text-7xl">
            What's your favourite flavour?
          </h2>
          <p className="mb-5 lg:text-2xl">
            Tell us about your taste preferences and we'll find the perfect
            product for you.
          </p>
          <Link href="/flavours">
            <button className="bg-red py-5 px-12 rounded-none w-full font-bold text-xl lg:w-60">
              Shop now
            </button>
          </Link>
        </div>
        <div className="right lg:w-2/5 lg:ml-16">
          <img src="./assets/images/multipleIget.jpg" alt="" />
        </div>
      </section>
      <section>
        <div className="bg-accent-2 h-14 flex items-center justify-center font-bold text-sm lg:text-lg">
          <p>FREE SHIPPING AUSTRALIA WIDE OVER $50.</p>
        </div>
      </section>
      <section>
        <div className="mt-10 mx-9 text-2xl font-bold flex items-center justify-center text-center lg:text-3xl">
          <h2>Another way to join the Club.</h2>
        </div>
        <div className="mx-5 my-10 lg:flex lg:justify-center w-2/6 items-center">
          <img src="./assets/images/grape.jpg" alt="" />
        </div>
        <section />
        <div className="text-xl mb-10 font-bold flex items-center justify-center text-center lg:text-3xl lg:mt-20">
          <h3>Why join the Club.</h3>
        </div>
        <section className="lg:flex flex-row-reverse lg:justify-center lg:my-10">
          <div className="mx-5 my-10 lg:flex lg:w-2/5">
            <img src="./assets/images/mango.jpg" alt="" />
          </div>
          <div className="lg:flex lg:flex-col lg:justify-center lg:px-20 lg:w-2/5">
            <div className="border mx-6 mb-5 lg:flex lg:mr-24" />
            <div className="text-3xl mx-6 mb-3 font-bold lg:flex lg:text-5xl ">
              <h2>You get top-shelf products.</h2>
            </div>
            <div className="mx-6 left font-medium lg:text-1xl">
              <ol className="list-disc list-inside lg:mt-3">
                <li>Made with premium ingredients</li>
                <li>Made with premium ingredients</li>
              </ol>
            </div>
          </div>
        </section>
        <section className="lg:flex lg:justify-center lg:my-10 lg:ml-20">
          <div className="mx-6 my-10 lg:w-2/5">
            <img src="./assets/images/bluerazz.jpg" alt="" />
          </div>
          <div className="lg:flex lg:flex-col lg:justify-center lg:px-20 lg:w-2/5">
            <div className="border mx-6 mb-5 lg:mr-28" />
            <div className="text-3xl mx-6 mb-3 font-bold lg:flex lg:text-5xl">
              <h2>You're always in control.</h2>
            </div>
            <div className="mx-6 left font-medium mb-10 lg:text-1xl">
              <ol className="list-disc list-inside lg:mt-3">
                <li>Made with premium ingredients</li>
                <li>Made with premium ingredients</li>
                <li>Made with premium ingredients</li>
                <li>Made with premium ingredients</li>
                <li>Made with premium ingredients</li>
              </ol>
            </div>
          </div>
        </section>
        <section className="lg:my-14">
          <div className="text-2xl mb-1 font-medium flex items-center justify-center text-center lg:text-4xl">
            <h3>Tell us how you get ready.</h3>
          </div>
          <div className="p-6 lg:flex lg:justify-center">
            <Link href="/flavours">
              <button className="bg-secondary text-white py-5 px-12 rounded-none font-bold text-xl w-full lg:w-56">
                Shop now
              </button>
            </Link>
          </div>
        </section>
      </section>
    </>
  )
}

Home.Layout = Layout
