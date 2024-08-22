"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";
// import 's'
import './style.css'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathName = usePathname()

  const navLinks = [
    {
      name: 'Login',
      href: '/login'
    },
    {
      name: 'Register',
      href: '/register'
    },
    {
      name: 'Forget Password',
      href: '/forgetPassword'
    }
  ]

  return (
    <>
      <nav>
        <ul>
          {navLinks.map((link) => {
            const isActive = pathName.startsWith(link.href)
            return (
              // <li key={link.href}>
                <Link className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'} href={link.href}>{link.name}</Link>
              // </li>
            )
          })}
        </ul>
      </nav>
      {children}
    </>
  )
}