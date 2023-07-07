import Link from "next/link"

export default function Nav() {
  return (
    <div className="w-full fixed flex justify-center items-center ">
    <nav className="flex px-5 w-full max-w-4xl justify-between py-4">
      <Link href="/"><h2 className="text-3xl">Anirudha</h2></Link>
      <ul className="text-xl flex gap-8 items-center">
        <li><Link href="https://aps6.github.io"><span>Portfolio</span></Link></li>
        <li><Link href="https://github.com/APS6"><span>Github</span></Link></li>
      </ul>
    </nav>
    </div>
  )
}
