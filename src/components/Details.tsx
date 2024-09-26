import { motion } from "framer-motion";

const containerVarients ={
    animate:{
        transition:{
            delayChildren:2,
            staggerChildren:0.6
        }
    }
}

const imageVarients= {
    initial:{
        opacity:0,
        x:-100,
        y:100,
        rotateZ:20
    },
    animate:(custom:any)=>(
        {
            opacity:1,
            x:0,
            y:0,
            rotateZ:custom === 1 ? -20 : custom === 2 ? 0 : 20
        }
    )
}

const Details = () => {
  return (
    <div className="grid grid-cols-3 mx-auto max-w-screen-lg w-full">
      <div className="z-10 text-left col-span-2 flex gap-3 relative flex-col pt-[20vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="w-full"
        >
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-purple-100 text-5xl uppercase tracking-wide">
            Checkout our
          </h1>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-purple-100 text-7xl">
            New collection
          </h1>
          <p className="uppercase py-2 text-gray-400 text-base tracking-wider">
            New deals for this cristmas for your loved onse
          </p>
          <button className="py-2 border border-white text-white w-[20vw] px-4 text-md tracking-widest uppercase mt-3">
            See More
          </button>
        </motion.div>
      </div>
      <motion.div 
      variants={containerVarients}
      initial="initial"
      animate="animate"
      className="relative z-40">
        <motion.img
        variants={imageVarients}
        custom={1}
          src="/ecomg1.jpeg"
          className="h-[60vh] w-full -left-[10vw] -rotate-12 absolute  object-cover z-10"
        />
        <motion.img
        variants={imageVarients}
        custom={2}
          src="/ecomg2.jpeg"
          className="h-[60vh] w-full absolute  object-cover z-10"
        />
        <motion.img
        variants={imageVarients}
        custom={3}
          src="/ecomg3.jpeg"
          className="h-[60vh] w-full left-[10vw] rotate-12 absolute  object-cover z-10"
        />
      </motion.div>
    </div>
  );
};

export default Details;
