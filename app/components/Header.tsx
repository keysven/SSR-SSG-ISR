import Link from "next/link"

const Header = () => {
    return (
        <header className="bg-black py-5">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-white">
                    <Link href="/">Nextjs Beginner</Link>
                </h1>
                <ul className="flex gap-3">
                    <li>
                        <Link href="/about" className="text-white">About</Link>
                    </li>
                    <li>
                        <Link href="/blog" className="text-white">Blog</Link>
                    </li>
                    <li>
                        <Link href="/resume" className="text-white">Resume</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-white">Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header