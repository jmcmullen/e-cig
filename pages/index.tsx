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
      <section className="flex flex-col-reverse bg-secondary p-6">
        <div className="text-white">
          <h2 className="text-3xl font-bold uppercase mt-5 mb-3">
            What's your favourite flavour?
          </h2>
          <p className="mb-5">
            Tell us about your taste preferences and we'll find the perfect
            product for you.
          </p>

<<<<<<< HEAD
          <button className="bg-red py-5 px-12 rounded-none w-full font-bold text-xl">
            Shop now
          </button>
=======
          <Link href="/flavours">
            <button className="bg-red py-5 px-12 rounded-none w-full font-bold text-xl">
              Get started
            </button>
          </Link>
>>>>>>> db5df4d24fdae456a8db63cf4946a8d365123e10
        </div>

        <div className="right">
          <img src="http://lorempixel.com/768/684" alt="" />
        </div>
      </section>
      <section>
        <div className="bg-accent-2 h-14 flex items-center justify-center font-bold text-sm">
          <p>FREE SHIPPING AUSTRALIA WIDE OVER $50.</p>
        </div>
      </section>
      <section>
        <div className="mt-10 mx-9 text-2xl font-bold flex items-center justify-center text-center">
          <h2>Another way to join the Club.</h2>
        </div>
        <div className="mx-5 my-10">
          <img src="http://lorempixel.com/768/684" alt="" />
        </div>
        <div className="text-xl mb-10 font-bold flex items-center justify-center text-center">
          <h3>Why join the Club.</h3>
        </div>
        <div className="mx-5 my-10">
          <img src="http://lorempixel.com/768/684" alt="" />
        </div>
        <div className="border mx-6 mb-5" />
        <div className="text-3xl mx-6 mb-3 font-bold">
          <h2>You get top-shelf products.</h2>
        </div>
        <div className="mx-6 left font-medium">
          <ol className="list-disc list-inside">
            <li>Made with premium ingredients</li>
            <li>Made with premium ingredients</li>
          </ol>
        </div>
        <div className="mx-6 my-10">
          <img src="http://lorempixel.com/768/684" alt="" />
        </div>
        <div className="border mx-6 mb-5" />
        <div className="text-3xl mx-6 mb-3 font-bold">
          <h2>You're always in control.</h2>
        </div>
        <div className="mx-6 left font-medium mb-10">
          <ol className="list-disc list-inside">
            <li>Made with premium ingredients</li>
            <li>Made with premium ingredients</li>
            <li>Made with premium ingredients</li>
            <li>Made with premium ingredients</li>
            <li>Made with premium ingredients</li>
          </ol>
        </div>
        <div className="text-2xl mb-1 font-medium flex items-center justify-center text-center">
          <h3>Tell us how you get ready.</h3>
        </div>
        <div className="p-6">
          <button className="bg-secondary text-white py-5 px-12 rounded-none font-bold text-xl w-full">
            Shop now
          </button>
        </div>
      </section>
    </>
  )
}

Home.Layout = Layout
