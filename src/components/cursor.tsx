"use client";

import useMousePosition from "@/utils/useMousePosition";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

import Cursor from "@../../../public/assets/svg/cursor.svg"
import Image from "next/image";

const CustomCursor = () => {

    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX - 50,
                y: e.clientY - 50,
            });
        }

        window.addEventListener("mousemove", mouseMove);

        return () => window.removeEventListener("mousemove", mouseMove);
    }, []);

    const variants = {
        default: {
            x: mousePosition.x,
            y: mousePosition.y,
        }
    }

    return ( 
        <motion.div
            className="animated-cursor"
            variants={variants}
            animate="default"
            transition={{ type: "tween", duration: 0.3}}
        >
            <Image src={Cursor} alt="cursor" width={100} height={100} />
        </motion.div>
     );
}
 
export default CustomCursor;