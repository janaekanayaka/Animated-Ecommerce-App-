import { motion } from "framer-motion";

 
const BackGroundAnimation = () => {

    return (
        <>
          <motion.div 
          initial = {{
            width:0
          }}
          animate = {{
            width:"100vw"
          }}
          transition={{
            duration:1.1,
            ease:"easeInOut",
            delay:0.2
          }}
          className="bg-gradient-to-b from-gray-200 to-gray-400 h-screen z-0 absolute left-0 top-0"></motion.div>
          <motion.div
          initial={{
            width:0
          }}
          animate={{
            width:"90vw"
          }}
          transition={{
            duration:1,
            ease:"easeInOut",
            delay:0.7
          }}
          className="bg-gray-800 border-t-2 border-gray-600 h-[20vh] z-20 absolute left-0 bottom-0"></motion.div>
        </>
    )
}

export default BackGroundAnimation;