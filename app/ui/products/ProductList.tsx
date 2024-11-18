import { IProduct } from "@/app/lib/definitions"
import Product from "./Product"


interface IProductListProps {
    products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
    return (
        <div className="product-list">
            {props.products.map((product, index) => <Product product={product} key={index}/>)}
        </div>
    )
}

export default ProductList