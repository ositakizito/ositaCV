import { Link } from "react-router-dom";
import BottomBar from "./bottombar";
import Exp from "./exp";
import Header from "./header";
import { motion } from "framer-motion";

export default function Contact() {

    return (
        <>
            <Header />
            <div className="contact">
                <div className="about ab">
                    <div className="about-top">
                        <motion.p
                            initial={{ opacity: 0, }}
                            animate={{ opacity: 1, }}
                            transition={{ delay: 0.5 }}
                        >Contact</motion.p>
                        <motion.div
                            initial={{ x: '-100vw' }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.8, type: 'spring', stiffness: 120 }}

                        ></motion.div>
                    </div>
                    <div className="about-content">
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, type: 'spring', stiffness: 120 }}
                        >Click On The Message Button To Contact Me
                        </motion.p>
                    </div>
                    <motion.div className="button"
                        initial={{ scale: 2 }}
                        animate={{ scale: [0, 1] }}
                        transition={{ delay: 2 }}
                    >
                        <Link to="" style={{ textDecoration: "none" }}>
                            <button

                            >
                                <i className="fab fa-telegram-plane"></i>
                                <p> Send Message </p>
                            </button>
                        </Link>

                    </motion.div>
                    <Exp />
                </div>
            </div>
            <BottomBar />
        </>
    )
}