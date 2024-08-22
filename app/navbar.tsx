import Link from "next/link"

export default function Navbar() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-evenly content-center bg-gray-800 opacity-70 transition-opacity duration-500 hover:opacity-100">
        <Link href="/"><div className="flex justify-center px-4 py-2.5 my-1.5 hover:bg-gray-500 hover:uppercase">Home</div></Link>
        <Link href="/about"><div className="flex justify-center px-4 py-2.5 my-1.5 hover:bg-gray-500 hover:uppercase">About</div></Link>
        <Link href="/projects"><div className="flex justify-center px-4 py-2.5 my-1.5 hover:bg-gray-500 hover:uppercase">Projects</div></Link>
        <Link href="/resume"><div className="flex justify-center px-4 py-2.5 my-1.5 hover:bg-gray-500 hover:uppercase">Resume</div></Link>
        <Link href="/contact"><div className="flex justify-center px-4 py-2.5 my-1.5 hover:bg-gray-500 hover:uppercase">Contact</div></Link>
      </div>
    </>
  )
}