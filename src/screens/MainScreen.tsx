import React from "react";
import { cn } from "../utils/utils";

type MainScreenProps = {
  children: React.ReactNode;
  className?: string;
};

const MainScreen = ({ children, className }: MainScreenProps) => {
  return (
    <div className={cn("h-screen bg-zinc-950", className)}>{children}</div>
  );
};

export default MainScreen;
