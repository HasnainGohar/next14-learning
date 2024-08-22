'use client'

import { notFound } from "next/navigation"

export default function ProductReview({ params }: {
    params: { productId: string, reviewId: string }
}) {
    if (parseInt(params.reviewId) > 10) {
        notFound()
    }

    // const getRandomNumber = () => {
    //     return Math.floor(Math.random() * 10)
    // }

    // const randomNumber = getRandomNumber()
    // if (randomNumber > 5) {
    //     throw new Error("something went wrong")
    // }

    return (
        <div>review id {params.reviewId} for product {params.productId}</div>
    )
}