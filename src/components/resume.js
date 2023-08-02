import BottomBar from "./bottombar";
import Header from "./header";
import { motion } from "framer-motion";
export default function Resume() {

    return (
        <>
            <Header />
            <div className="resume">
                <div className="about ab Res">
                    <div className="about-top">
                        <motion.p
                            initial={{ opacity: 0, }}
                            animate={{ opacity: 1, }}
                            transition={{ delay: 0.5 }}
                        >Resume</motion.p>
                        <motion.div
                            initial={{ x: '-100vw' }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.8, type: 'spring', stiffness: 120 }}

                        ></motion.div>
                    </div>

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
                                    >Education</motion.p>
                                </div>
                                <div className="eduTitle">
                                    <motion.p className="un"
                                        initial={{ x: -150 }}
                                        animate={{ x: 0 }}
                                        transition={{ delay: 2.5 }}
                                    >University</motion.p>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 3.4 }}
                                    >Admission in Progress</motion.p>
                                </div>
                                <div className="eduTitle">
                                    <motion.p className="hs"
                                        initial={{ x: -250 }}
                                        animate={{ x: 0 }}
                                        transition={{ delay: 2.7 }}
                                    >High School Name</motion.p>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 3.6 }}
                                    >Federal Science and Technical College</motion.p>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                        initial={{ opacity: 0, x: -250 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.5 }}
                                    >Experience</motion.p>
                                </div>
                                <div className="eduTitle">
                                    <motion.p className="un"
                                        initial={{ x: -250 }}
                                        animate={{ x: 0 }}
                                        transition={{ delay: 2.5 }}
                                    >Web Development</motion.p>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 3.4 }}
                                    >3years of experience</motion.p>
                                </div>
                                <div className="eduTitle">
                                    <motion.p className="hs"
                                        initial={{ x: -250 }}
                                        animate={{ x: 0 }}
                                        transition={{ delay: 2.7 }}
                                    >Mobile Development</motion.p>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 3.6 }}
                                    >A year of experience</motion.p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about ab">
                        <motion.div className="about-top"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 5 }}
                        >
                            <p>My Skills</p>
                        </motion.div>
                        <div className="webSkills">
                            <div className="webcontent">
                                <div className="lang">
                                    <div className="weblang">
                                        <p>HTML 90%</p>
                                    </div>
                                    <div className="webprogress">
                                        <div className="pro">
                                            <motion.div className="pro html"
                                                initial={{ width: '0%' }}
                                                animate={{ width: '90%' }}
                                                transition={{ delay: 0.5, duration: 1 }}
                                            ></motion.div>
                                        </div>

                                    </div>
                                </div>
                                <div className="lang">
                                    <div className="weblang">
                                        <p>CSS 95%</p>
                                    </div>
                                    <div className="webprogress">
                                        <div className="pro">
                                            <motion.div className="pro css"
                                                initial={{ width: '0%' }}
                                                animate={{ width: '95%' }}
                                                transition={{ delay: 0.6, duration: 1 }}
                                            ></motion.div>
                                        </div>

                                    </div>
                                </div>
                                <div className="lang">
                                    <div className="weblang">
                                        <p>JavaScript 65%</p>
                                    </div>
                                    <div className="webprogress">
                                        <div className="pro">
                                            <motion.div className="pro javascript"
                                                initial={{ width: '0%' }}
                                                animate={{ width: '65%' }}
                                                transition={{ delay: 0.7, duration: 1 }}
                                            ></motion.div>
                                        </div>

                                    </div>
                                </div>
                                <div className="lang">
                                    <div className="weblang">
                                        <p>Reactjs 75%</p>
                                    </div>
                                    <div className="webprogress">
                                        <div className="pro">
                                            <motion.div className="pro react"
                                                initial={{ width: '0%' }}
                                                animate={{ width: '75%' }}
                                                transition={{ delay: 0.8, duration: 1 }}
                                            ></motion.div>
                                        </div>

                                    </div>
                                </div>
                                <div className="lang">
                                    <div className="weblang">
                                        <p>React Native 50%</p>
                                    </div>
                                    <div className="webprogress">
                                        <div className="pro">
                                            <motion.div className="pro reactN"
                                                initial={{ width: '0%' }}
                                                animate={{ width: '50%' }}
                                                transition={{ delay: 0.9, duration: 1 }}
                                            ></motion.div>
                                        </div>

                                    </div>
                                </div>
                                <div className="lang">
                                    <div className="weblang">
                                        <p>Flutter 40%</p>
                                    </div>
                                    <div className="webprogress">
                                        <div className="pro">
                                            <motion.div className="pro flutter"
                                                initial={{ width: '0%' }}
                                                animate={{ width: '40%' }}
                                                transition={{ delay: 0.5, duration: 1 }}
                                            ></motion.div>
                                        </div>

                                    </div>
                                </div>
                                <div className="lang">
                                    <div className="weblang">
                                        <p>Python 60%</p>
                                    </div>
                                    <div className="webprogress">
                                        <div className="pro">
                                            <motion.div className="pro python"
                                                initial={{ width: '0%' }}
                                                animate={{ width: '60%' }}
                                                transition={{ delay: 0.6, duration: 1 }}
                                            ></motion.div>
                                        </div>

                                    </div>
                                </div>
                                <div className="lang">
                                    <div className="weblang">
                                        <p>Json 40%</p>
                                    </div>
                                    <div className="webprogress">
                                        <div className="pro">
                                            <motion.div className="pro json"
                                                initial={{ width: '0%' }}
                                                animate={{ width: '40%' }}
                                                transition={{ delay: 0.7, duration: 1 }}
                                            ></motion.div>
                                        </div>

                                    </div>
                                </div>
                                <div className="lang">
                                    <div className="weblang">
                                        <p>Git 55%</p>
                                    </div>
                                    <div className="webprogress">
                                        <div className="pro">
                                            <motion.div className="pro git"
                                                initial={{ width: '0%' }}
                                                animate={{ width: '55%' }}
                                                transition={{ delay: 0.8, duration: 1 }}
                                            ></motion.div>
                                        </div>

                                    </div>
                                </div>
                                <div className="lang">
                                    <div className="weblang">
                                        <p>API 35%</p>
                                    </div>
                                    <div className="webprogress">
                                        <div className="pro">
                                            <motion.div className="pro api"
                                                initial={{ width: '0%' }}
                                                animate={{ width: '35%' }}
                                                transition={{ delay: 0.9, duration: 1 }}
                                            ></motion.div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <BottomBar />
        </>
    )
}