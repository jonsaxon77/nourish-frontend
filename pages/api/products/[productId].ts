import {NextApiRequest, NextApiResponse} from "next";
import {products} from "@/app/lib/placeholder-data";
import {IProduct} from "@/app/lib/definitions";

export interface ISnipcartProduct {
    id: string
    name: string
    price: number
    url: string
    description: string
    image: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {productId} = req.query;
    const product: IProduct | undefined = products.find(p => p.id === productId);
    if (!product) {
        res.status(404).json({});
        return ;
    }
    const snipcartProduct: ISnipcartProduct = {...product, image: product?.image.src ?? ""}

    res.status(200).json(snipcartProduct);
}