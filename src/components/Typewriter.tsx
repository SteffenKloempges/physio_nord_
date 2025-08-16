import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const texts = ["Physio Nord - by Paul", "Ihrer Gesundheit", "Ihrer Lebensqualität"];

const sentenceVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const Typewriter = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(texts[0]);
  const controls = useAnimationControls();

  useEffect(() => {
    const runAnimation = async () => {
      await controls.start("visible");
      await new Promise((res) => setTimeout(res, 1000));
      await controls.start("hidden");
      await new Promise((res) => setTimeout(res, 500));

      const nextIndex = (index + 1) % texts.length;
      setIndex(nextIndex);
      setText(texts[nextIndex]);
    };

    runAnimation();
  }, [index, controls]);

  return (
    <motion.p
      key={text}
      variants={sentenceVariants}
      initial="hidden"
      animate={controls}
      className="inline text-physio-green"
    >
      {text.split("").map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};
