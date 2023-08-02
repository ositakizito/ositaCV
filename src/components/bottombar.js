import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function BottomBar() {

  return (
    <>
      <div className="bottom">
        <div className="bottomtab">
          <motion.div className="tabs"
            whileHover={{
              scale: 1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)"
            }}
          >
            <Link to="/">
              <button>
                <i className="fa fa-user"></i>
                <p>About </p>
              </button>
            </Link>

          </motion.div>
          <motion.div className="tabs"
            whileHover={{
              scale: 1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)"
            }}
          >
            <Link to="/resume">
              <button >
                <i className="fa fa-book"></i>
                <p>Resume</p>
              </button>
            </Link>
          </motion.div>
          <motion.div className="tabs"
            whileHover={{
              scale: 1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)"
            }}
          >
            <Link to="/portfolio">
              <button >
                <i className="fa fa-globe"></i>
                <p>Portfolio</p>
              </button>

            </Link>
          </motion.div>
          <motion.div className="tabs"
            whileHover={{
              scale: 1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)"
            }}
          >
            <Link to="/contact">
              <button >
                <i className="fa fa-phone"></i>
                <p>Contact</p>
              </button>

            </Link>

          </motion.div>
        </div>
      </div>
    </>
  )
}