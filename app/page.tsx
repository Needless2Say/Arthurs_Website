import Image from 'next/image'
import Big_House from "../public/Big_House.jpg"
import Navbar from './navbar'

export default function Page() {
  return (
    <>
      <div className="flex justify-center mt-16">
        <div className="border-effect">
          <Image 
            src={Big_House}
            width={800}
            height={800}
            alt="Big House Stadium"
          />
        </div>
      </div>
    </>
  )
}