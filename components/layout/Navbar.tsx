import Image from "next/image"
import Logo from "@/app/assets/logo.svg"
import Link from "next/link"


const Navbar = () => {
  return (
    <div className="nav-bar mx-auto">
      <Image src={Logo} alt="Logo" width={40} height={40} />
      <div className="nav-links">
        <Link href="#" className="nav-link">
          About
        </Link>
        <Link href="#" className="nav-link">
          Gallery
        </Link>
        <Link href="#" className="nav-link">
          Events
        </Link>
        <Link href="#" className="nav-link">
          Packages
        </Link>
        <Link href="#" className="nav-link">
          Blog
        </Link>
      </div>
      <div>
        <Link href="#" className="nav-button">
          Book Your Date
        </Link>
      </div>
    </div>
  )
}

export default Navbar
