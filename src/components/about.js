import { motion } from "framer-motion";

export default function About() {
   const aboutVariants = {
      hidden: {
         opacity: 0,
      },
      visible: {
         opacity: 1,
         transition: {
            delay: 0.8
         }
      }

   }

   return (
      <div className="main">
         <div className="about ab">
            <div className="about-top">
               <motion.p
                  variants={aboutVariants}
                  initial="hidden"
                  animate="visible"
               >About Me</motion.p>
               <motion.div
                  initial={{ x: '-100vw' }}
                  animate={{ x: 0 }}
                  transition={{ delay: 1.0, type: 'spring', stiffness: 120 }}

               ></motion.div>
            </div>
            <div className="about-content">
               <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, type: 'spring', stiffness: 120 }}
               >
                   <p >
                   HI, I'm Christopher Osita, a skilled developer with expertise in HTML, CSS, JavaScript, Reactjs and React-Native with over 3years of experience.
                   My achievement as a developer, I develop a business site "Spot Incorporations" user interface, also a clone of original known companies like Netflix,Fcmb,etc
                  </p>
                  <p style={{marginTop: '7px'}}>
                  At the year 2020, I got inspired by google, facebook, content creators and bloggers. Google and facebook got my attention the most, build a useful tools to keep track of victims affected by COVID-19. 
                  Also visualized how content creators/bloggers maintain making money even at lockdown with their blog. Which prompt a thought in me "How to develop a website".
                  </p>
                 <p style={{marginTop: '7px'}}>
                 As a passionate developer with proficiency in HTML, CSS, JavaScript and a framework Reactjs,
                  I take pride in crafting, engaging and user-friendly websites, I have successfully delivered projects that have positive impacts and enhanced experiences of users. 
                  My dedication to staying up-to-date with latest technologies enables me to create solutions and improve in my skills. I am exicted about the opportunity to contribute my expertise to a dynamic and forward-thinking team.
                 </p>
 
               </motion.p>
            </div>
         </div>
         <div className="about ab">
            <div className="about-top">
               <motion.p
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 5, opacity: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: "120" }}
               >What I'm Doing</motion.p>
            </div>
            <div className="webSkills">
               <motion.div className="webcontent"
                  initial={{ x: '-250vw' }}
                  animate={{ x: 0 }}
                  transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: "30" }}
               >
                  <div className="imgcontent">
                     <img src="design.png" alt="" width='30%'/>
                  </div>
                  <div className="webname web">
                     <p>UI/UX Design</p>
                  </div>
                  <div className="webname">
                     <p>Designs for both web and mobile interface</p>
                  </div>
               </motion.div>
            </div>
            <div className="webSkills">
               <motion.div className="webcontent"
                  initial={{ x: '-250vw' }}
                  animate={{ x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5, type: "spring", stiffness: "30" }}
               >
                  <div className="imgcontent">
                     <img src="web.png" alt="" width='30%'/>
                  </div>
                  <div className="webname web">
                     <p>Web Development</p>
                  </div>
                  <div className="webname">
                     <p>Development of site</p>
                  </div>
               </motion.div>
            </div>
            <div className="webSkills">
               <motion.div className="webcontent"
                  initial={{ x: '-250vw' }}
                  animate={{ x: 0 }}
                  transition={{ delay: 1.3, duration: 0.4, type: "spring", stiffness: "30" }}
               >
                  <div className="imgcontent">
                     <img src="mobile.png" alt="" />
                  </div>
                  <div className="webname web">
                     <p>Mobile Development</p>
                  </div>
                  <div className="webname">
                     <p>Development of application for IOS and Android</p>
                  </div>
               </motion.div>
            </div>
         </div>
      </div>

   )
}
