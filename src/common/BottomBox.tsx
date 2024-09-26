import { motion } from "framer-motion";

interface BottomBoxProps {
    description:string
}

const boxVariants = {
   initial:{
    y:100
   },
   animate:{
    y:0
   }
}

const BottomBox = ({description}:BottomBoxProps) => {
  return (
    <motion.div variants={boxVariants} className="bg-gray-500 uppercase text-gray-200 text-center text-base rounded-t-md flex justify-center items-center underline underline-offset-4 w-[20vw]">{description}</motion.div>
  );
};

export default BottomBox;
