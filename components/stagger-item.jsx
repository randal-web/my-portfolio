"use client"

import { motion } from "framer-motion"
import PropTypes from "prop-types"

export function StaggerItem({ children, className }) {
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    }

    return (
        <motion.div variants={item} className={className}>
            {children}
        </motion.div>
    )
}

StaggerItem.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}
