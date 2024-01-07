import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "@../../../public/assets/svg/logo.svg"

const Logo = () => {
    const pathname = usePathname();
    return ( 
        <Link href="/" className="flex items-center">
            <Image src={logo} alt="codebyaadi-logo" width={48} height={48} />
            <span className={`${pathname != "/" ? "md:hidden" : "md:flex" } hidden ml-1 font-unbounded text-white`}>Aditya</span>
        </Link>
     );
}
 
export default Logo;