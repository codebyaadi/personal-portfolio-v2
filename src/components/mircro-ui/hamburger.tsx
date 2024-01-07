import { Variants, motion } from "framer-motion";

interface HamburgerIconProps {
    animation: "open" | "closed" | "moving";
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ animation }) => {
    const pathOneVariants: Variants = {
        open: { d: 'M3.06061 2.99999L21.0606 21' },
        closed: { d: 'M0 9.5L24 9.5' },
    };

    const pathTwoVariants: Variants = {
        open: { d: 'M3.00006 21.0607L21 3.06064' },
        moving: { d: 'M0 14.5L24 14.5' },
        closed: { d: 'M0 14.5L15 14.5' },
    };

    return (
        <svg width="24" height="24" viewBox="0 0 24 24">
            <motion.path 
                stroke="#FFFFFF"
                animate={animation}
                variants={pathOneVariants}
            />
            <motion.path 
                stroke="#FFFFFF"
                animate={animation}
                variants={pathTwoVariants}
            />
        </svg>
    );
};

export default HamburgerIcon;
