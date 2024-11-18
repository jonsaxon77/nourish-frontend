import {NextApiRequest, NextApiResponse} from "next";
import {products} from '@/app/lib/placeholder-data'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(products);
}