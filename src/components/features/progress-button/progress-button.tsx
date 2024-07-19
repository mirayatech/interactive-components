import { useState, useEffect } from "react";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import { Wrapper, LoadingSpinner } from "../../core";

export function ProgressButton() {
  const [section, setSection] = useState<0 | 1 | 2>(0);

  const onClickHandler = () => {
    if (section === 0) {
      setSection(1);
    }
  };

  useEffect(() => {
    if (section === 1) {
      const timeout = setTimeout(() => {
        setSection(2);
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [section]);

  return (
    <Wrapper>
      <button
        className={`font-medium md:font-normal flex h-12 w-48 items-center justify-center rounded-lg border bg-slate-900 px-12 text-lg text-white duration-100 ${
          section === 1 ? "" : "md:hover:bg-slate-800"
        } transition-all active:!scale-95`}
        onClick={onClickHandler}
      >
        <MotionConfig
          transition={{ type: "tween", ease: "easeInOut", duration: 0.2 }}
        >
          <AnimatePresence initial={false} mode="popLayout">
            {section === 0 ? (
              <motion.span
                key={"signin"}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="inline-block w-full"
              >
                Sign In
              </motion.span>
            ) : section === 1 ? (
              <motion.p
                key={"loading"}
                initial={{ scale: 1.4, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.2,
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.2,
                  },
                }}
                exit={{ scale: 1.4, opacity: 0 }}
                className="inline-block"
              >
                <LoadingSpinner />
              </motion.p>
            ) : (
              <motion.span
                key={"welcome"}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.2,
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.2,
                  },
                }}
                exit={{ scale: 1.4, opacity: 0 }}
                className="inline-block w-full"
              >
                Welcome
              </motion.span>
            )}
          </AnimatePresence>
        </MotionConfig>
      </button>
    </Wrapper>
  );
}
