import { Metadata } from 'next'


export const metadata:Metadata = {
  title: 'My Blog',
}


function blog() {
  return (
    <div>My Blog</div>
  )
}

export default blog