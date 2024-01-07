import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {

    const pathname = usePathname();

    return ( 
        <footer className={`${pathname != "/" ? "hidden" : "fixed"} fixed bottom-0 left-0 z-10 w-full h-20 flex justify-center items-center border-t border-white/10 font-unbounded font-light text-start text-white text-xs`}>
            <span>
            Design & Code by{" "}
            <Link href="https://github.com/codebyaadi" className="font-normal underline" target="_blank">Aditya</Link>
            </span>
        </footer>
     );
};
 
export default Footer;