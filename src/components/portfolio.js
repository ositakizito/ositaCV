import BottomBar from "./bottombar";
import Header from "./header";
import { motion } from "framer-motion";
export default function Portfolio() {
    return (
        <>
        <Header/>
            <div className="portfolio">
                <div className="about ab">
                    <div className="about-top">
                        <motion.p
                           initial={{ opacity: 0, }}
                           animate={{ opacity: 1, }}
                           transition={{ delay: 0.5 }}
                        >My Works</motion.p>
                        <motion.div
                         initial={{ x: '-100vw' }}
                         animate={{ x: 0 }}
                         transition={{ delay: 0.8, type: 'spring', stiffness: 120 }}
                        ></motion.div>
                    </div>
                    <div className="framer">
                        <iframe title="spot" src="https://netflixclone-pi.vercel.app/">
                            
                        </iframe>
                       <div className="frameTitle">
                         <p>Netflix clone </p>
                       </div>
                       <div className="frameTitle Ti">
                         <p>Web Development - Build with Reactjs</p>                       
                        </div>
                    </div>
                       <div className="framer">
                        <iframe title="spot2" src="https://spotafrica.vercel.app/">
                            
                        </iframe>
                       <div className="frameTitle">
                         <p>Spot Incorporations </p>
                       </div>
                       <div className="frameTitle Ti">
                         <p>Web Development - Build with HTML & CSS</p>                       
                        </div>
                    </div>
                    <div className="framer">
                        <iframe title="spot1" src="https://ositakizito.github.io/fcmb/">
                            
                        </iframe>
                       <div className="frameTitle">
                         <p>FCMB clone</p>
                       </div>
                       <div className="frameTitle Ti">
                         <p>Web Development - Build with HTML & CSS</p>                       
                        </div>
                    </div>
                 
                    
                </div>
            </div>
            <BottomBar/>
        </>
    )
}
