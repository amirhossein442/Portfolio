import { ArrowUp } from "lucide-react"

export const Footer =()=> {
    return(
        <footer className="bg-slate-950 py-12 px-4 relative border-t border-slate-800 text-white mt-12 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm ">&copy; {new Date().getFullYear()} Amirhossein Zare</p>
            <a href="#hero">
                <ArrowUp />
            </a>
        </footer>
    )
}