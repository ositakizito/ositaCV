import { motion } from "framer-motion";
export default function Header() {

    return (
        <div className="header"
        >

            <div className="header-author">
                <div className="image">
                    <motion.img src="img.jpg" alt=""
                        initial={{ y: -100, scale: 1 }}
                        animate={{ y: 0, scale: -1.1 }}
                        transition={{
                            delay: 0.5,
                            type: 'spring',
                            stiffness: 120,

                        }}
                    ></motion.img>
                </div>
                <div className="name-top">
                    <div className="co">
                        <motion.p
                            initial={{ x: -250 }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
                        >
                            Christopher Osita
                        </motion.p>
                    </div>
                    <motion.div className="co sk"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <p>Developer</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}