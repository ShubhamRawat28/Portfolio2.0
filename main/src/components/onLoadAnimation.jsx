import { motion } from 'framer-motion';

const OnLoadAnimation = ({ text }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.32, delayChildren: 0.14 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{  display: "flex", fontSize: "3rem", color: 'white',padding: "10px"}}
      variants={container}
      initial="hidden"
      animate="visible"
    >
       <p style={{ marginRight: "10px", width: '180px'}}>Hey👋,</p>
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "10px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default OnLoadAnimation;
