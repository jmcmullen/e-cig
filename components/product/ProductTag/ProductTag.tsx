import cn from 'classnames'
import { inherits } from 'util'
import s from './ProductTag.module.css'

interface ProductTagProps {
  className?: string
  name: string
  price?: string
  fontSize?: number
}

const ProductTag: React.FC<ProductTagProps> = ({
  name,
  className = '',
  fontSize = 32,
  price,
}) => {
  return (
    <div className={cn(s.root, className)}>
      <h3 className={s.name}>
        <span
          className={cn({ [s.fontsizing]: fontSize < 32 })}
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: `${fontSize}px`,
          }}
        >
          {name}
        </span>
      </h3>
      <p className={s.price}>{price}</p>
    </div>
  )
}

export default ProductTag
