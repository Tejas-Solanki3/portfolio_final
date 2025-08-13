"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isMobile = useIsMobile();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background w-full rounded-md z-0",
        "bg-[linear-gradient(to_right,rgba(0,0,0,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.35)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:28px_48px] dark:bg-[size:28px_48px]",
        className
      )}
    >
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0 ">
        {isClient && (
          <>
            {/* Right gradient circle */}
            <motion.div
              initial={{ opacity: 0.5, width: isMobile ? "7rem" : "14rem" }}
              whileInView={{ opacity: 1, width: isMobile ? "14rem" : "28rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto right-1/2 h-56 overflow-visible from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] dark:from-purple-500 dark:via-transparent dark:to-transparent"
            >
              <div className="absolute w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
              <div className="absolute w-40 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
            </motion.div>

            {/* Left gradient circle */}
            <motion.div
              initial={{ opacity: 0.5, width: isMobile ? "7rem" : "14rem" }}
              whileInView={{ opacity: 1, width: isMobile ? "14rem" : "28rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto left-1/2 h-56 from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top] dark:from-transparent dark:via-transparent dark:to-purple-500"
            >
              <div className="absolute w-40 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
              <div className="absolute w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            </motion.div>

            <div className="absolute top-1/2 h-48 w-full scale-x-150 bg-background blur-2xl"></div>
            <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
            <motion.div
              initial={{ width: isMobile ? "8rem" : "16rem" }}
              whileInView={{ width: isMobile ? "15rem" : "30rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-auto z-50 h-36 -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl dark:bg-purple-500"
            ></motion.div>
            <motion.div
              initial={{ width: isMobile ? "4rem" : "8rem" }}
              whileInView={{ width: isMobile ? "8rem" : "16rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-auto z-30 h-36 w-64 -translate-y-[7rem] rounded-full bg-cyan-400 blur-2xl dark:bg-purple-400"
            ></motion.div>
            <motion.div
              initial={{ width: isMobile ? "7.5rem" : "15rem" }}
              whileInView={{ width: isMobile ? "15rem" : "30rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-auto z-50 h-0.5 -translate-y-[3rem] bg-cyan-400 dark:bg-purple-400"
            ></motion.div>

            <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[8.5rem] bg-background "></div>
          </>
        )}
      </div>

      <div className="relative z-50 flex flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
