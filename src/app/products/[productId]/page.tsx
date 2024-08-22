import { Metadata } from "next"

type props = {
    params: {
        productId: String
    }
}

export const generateMetadata = ({ params }: props): Metadata => {
    return {
        title: `product ${params.productId}`
    }
}



export default function ProductDetails({ params }:props){
    return (
        <div>Products Details {params.productId}</div>
    )
}