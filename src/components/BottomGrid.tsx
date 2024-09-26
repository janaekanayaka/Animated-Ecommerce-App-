import BottomBox from "../common/BottomBox";
import {motion} from "framer-motion";

const containerVarients = {
    animate:{
        transition:{
            delayChildren:3.5,
            staggerChildren:0.4
        }
    }
}
 const BottomGrid = () => {
   
    return(
      <motion.div 
      initial = "initial"
      animate = "animate"
      variants={containerVarients}
      className="grid grid-cols-3 gap-4 absolute bottom-1 left-1/3 -translate-x-1/3 w-[90nw] max-w-screen-xl mx-auto z-30 h-[10vh]">
            <BottomBox description="Best offer for cristmas"/>
            <BottomBox description="Special discounts"/>
            <BottomBox description="Win your dream Tv"/>
      </motion.div>
    )
 }

 export default BottomGrid;