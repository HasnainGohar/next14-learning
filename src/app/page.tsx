import Link from "next/link"

function HomePage() {
  return (
    <div>
      <h1>
        HomePage
      </h1>
      <Link href="/blog">Go to blog</Link>
      <Link href="/products">Products</Link>

    </div>
  )
}

export default HomePage