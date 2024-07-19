import React, { type HTMLAttributes } from "react";
import { cn } from "../../../utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Wrapper({ children, className, ...props }: Props) {
  return (
    <div
      className={cn(
        "relative flex h-dvh w-full flex-col items-center justify-center bg-white text-black",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
