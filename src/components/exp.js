import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Exp() {

    return (
        <>
            <div className="resume">
                <div className="about ab Res">

                    <div className="education">
                        <div className="ribbon">
                            <motion.div className="ic"
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 360 }}
                                transition={{ delay: 1.5 }}
                            >
                                <motion.i className="fa fa-book-open"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                ></motion.i>
                                <motion.div className="line"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: '70px' }}
                                    transition={{ delay: 0, ease: "easeOut" }}
                                ></motion.div>
                                <motion.div className="line two"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: '70px' }}
                                    transition={{ delay: 0.2, ease: "easeOut" }}
                                ></motion.div>
                                <div className="lineCircle">
                                    <motion.div className="circle"
                                        initial={{ opacity: 0, scale: 2 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 2.5 }}
                                    ></motion.div>
                                </div>
                                <div className="lineCircle top">
                                    <motion.div className="circle"
                                        initial={{ opacity: 0, scale: 2 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 2 }}
                                    ></motion.div>
                                </div>
                            </motion.div>

                            <div className="educontent">
                                <div className="eduTitle">
                                    <motion.p className="ed"
                                        initial={{ x: -250 }}
                                        animate={{ x: 0 }}
                                        transition={{ delay: 1.5 }}
                                    >connect</motion.p>
                                </div>
                                <div className="eduTitle">
                                    <motion.p className="un"
                                        initial={{ x: -150 }}
                                        animate={{ x: 0 }}
                                        transition={{ delay: 2.5 }}
                                    >
                                        <i className="fab fa-google" style={{ color: '#5038b8', fontSize: 12 }}>
                                        </i> mail
                                    </motion.p>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 3.4 }}
                                    >Ositakizito4@gmail.com</motion.p>
                                </div>
                                <div className="eduTitle">
                                    <motion.p className="hs"
                                        initial={{ x: -170 }}
                                        animate={{ x: 0 }}
                                        transition={{ delay: 2.7 }}
                                    >
                                        <i className="fab fa-linkedin" style={{ color: '#5038b8' }}>
                                        </i> LinkedIn
                                    </motion.p>
                                    <Link>
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 3.6 }}
                                        >Christopher Osita Kizito</motion.p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}