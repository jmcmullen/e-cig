import Link from 'next/link'
import Image from 'next/image'
import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { Button } from '@components/ui'

import BlueRazz from '@assets/images/bluerazz.jpg'
import Grape from '@assets/images/grape.jpg'
import HeroImg from '@assets/images/hero-image.png'
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
      <section className="flex flex-col-reverse lg:flex-row lg:justify-center bg-secondary p-6 lg:pb-20 lg:items-center">
        <div className="text-white lg:flex flex-col lg:w-2/5 lg:justify-center lg:items-center lg:py-20">
          <div className="lg:max-w-sm lg:flex lg:flex-col">
            <h2 className="text-4xl font-bold uppercase mt-5 mb-3 lg:text-6xl">
              Disposable iGet Vapes, Delivered.
            </h2>
            <p className="mb-5 text-lg lg:text-2xl">
              Based in Sydney, Australia, we have your favourite fruity flavours
              of disposable vapes ready to be delivered to your door.
            </p>
            <Link href="/flavours">
              <Button style={{ background: 'var(--red)', width: '100%' }}>
                Discover Flavours
              </Button>
            </Link>
          </div>
        </div>
        <div className="right lg:w-2/5 lg:mt-5">
          <Image src={HeroImg} alt="" />
        </div>
      </section>
      <section>
        <div className="bg-accent-2 h-14 flex items-center justify-center font-bold text-sm lg:text-lg">
          <p>FREE EXPRESS SHIPPING FOR ORDERS OVER $50</p>
        </div>
      </section>

      <section className="lg:flex lg:justify-center lg:my-10 lg:ml-20">
        <div className="mx-6 my-10 lg:w-2/5">
          <Image src={BlueRazz} alt="" />
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center lg:px-20 lg:w-2/5">
          <div className="border mx-6 mb-5 lg:mr-28" />
          <div className="text-3xl mx-6 mb-3 font-bold lg:flex lg:text-5xl">
            <h2>The easiest way to vape, by far</h2>
          </div>
          <div className="mx-6 left font-medium mb-10 lg:text-1xl">
            <ol className="list-disc list lg:mt-3">
              <li className="ml-8">
                Perfect for transitioning smokers or vapers on the go
              </li>
              <li className="ml-8">
                Made out of metal with a premium look and feel
              </li>
              <li className="ml-8">
                1800+ puffs of the most fruity and authentic tastes
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="lg:flex flex-row-reverse lg:justify-center lg:my-10">
        <div className="mx-5 my-10 lg:flex lg:w-2/5">
          <Image src={Grape} alt="" />
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center lg:px-20 lg:w-2/5">
          <div className="border mx-6 mb-5 lg:flex lg:mr-24" />
          <div className="text-3xl mx-6 mb-3 font-bold lg:flex lg:text-5xl ">
            <h2>No charging, no filling, no installation</h2>
          </div>
          <div className="mx-6 left font-medium lg:text-1xl">
            <ol className="list-disc list lg:mt-3">
              <li className="ml-8">Ready to use as soon as it arrives</li>
              <li className="ml-8">
                Already filled up with your juice of choice
              </li>
              <li className="ml-8">Activates as soon as you draw</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="my-8 lg:my-14">
        <div className="text-2xl mb-1 font-medium flex items-center justify-center text-center lg:text-4xl">
          <h3>You'll love our premium e-juice flavors to vape all day</h3>
        </div>
        <div className="p-6 lg:flex lg:justify-center">
          <Link href="/flavours">
            <button className="bg-secondary text-white py-5 px-12 rounded-none font-bold text-xl w-full lg:w-auto">
              Browse Flavours
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}

Home.Layout = Layout
