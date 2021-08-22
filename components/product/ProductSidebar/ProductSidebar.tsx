import s from './ProductSidebar.module.css'
import { useAddItem } from '@framework/cart'
import { FC, useEffect, useState } from 'react'
import { ProductOptions } from '@components/product'
import type { Product } from '@commerce/types/product'
import { Button, Text, Rating, Collapse, useUI } from '@components/ui'
import ProductTag from '../ProductTag'
import {
  getProductVariant,
  selectDefaultOptionFromProduct,
  SelectedOptions,
} from '../helpers'

interface ProductSidebarProps {
  product: Product
  className?: string
}

const ProductSidebar: FC<ProductSidebarProps> = ({ product, className }) => {
  const addItem = useAddItem()
  const { openSidebar } = useUI()
  const [loading, setLoading] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

  useEffect(() => {
    selectDefaultOptionFromProduct(product, setSelectedOptions)
  }, [])

  const variant = getProductVariant(product, selectedOptions)
  const addToCart = async () => {
    setLoading(true)
    try {
      await addItem({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0].id),
      })
      openSidebar()
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  return (
    <div className={className}>
      <ProductTag name={product.name} fontSize={32} />
      <div className="block lg:hidden">
        {process.env.COMMERCE_CART_ENABLED && (
          <Button
            aria-label="Add to Cart"
            type="button"
            className={s.button}
            onClick={addToCart}
            loading={loading}
            disabled={variant?.availableForSale === false}
          >
            {variant?.availableForSale === false
              ? 'Not Available'
              : `Add To Cart ($${product.price.value})`}
          </Button>
        )}
      </div>
      <ProductOptions
        options={product.options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
      {/* <div className="flex flex-row justify-between items-center">
        <Rating value={5} />
        <div className="text-accent-6 pr-1 font-medium text-sm">36 reviews</div>
      </div> */}
      <div className="hidden lg:block">
        <Collapse title="About" defaultOpen={true}>
          <Text
            className="pb-4 break-words w-full max-w-xl"
            html={product.descriptionHtml || product.description}
          />
        </Collapse>
        {process.env.COMMERCE_CART_ENABLED && (
          <Button
            aria-label="Add to Cart"
            type="button"
            className={s.button}
            onClick={addToCart}
            loading={loading}
            disabled={variant?.availableForSale === false}
          >
            {variant?.availableForSale === false
              ? 'Not Available'
              : `Add To Cart ($${product.price.value})`}
          </Button>
        )}
      </div>
      <div className="mt-6">
        <div className="block lg:hidden">
          <Collapse title="About" defaultOpen={true}>
            <Text
              className="pb-4 break-words w-full max-w-xl"
              html={product.descriptionHtml || product.description}
            />
          </Collapse>
        </div>
        <Collapse title="Delivery">
          Each order is sent via Australia Post using Express Delivery. A
          tracking number is provided to your email as soon as the order has
          been posted. Estimated delivery time is 1-3 business days.
        </Collapse>
        <Collapse title="Return Policy">
          We do not accept returns. For any faulty products we have a 100% money
          back guarantee. All you need to do is email us with your order number
          and photos of the faulty device and we will process your refund.
        </Collapse>
      </div>
    </div>
  )
}

export default ProductSidebar
