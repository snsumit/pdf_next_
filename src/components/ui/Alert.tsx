import React from "react";
import { cn } from "@/lib/utils";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "error";
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, children, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-gray-100 text-gray-800",
      success: "bg-green-100 text-green-800",
      error: "bg-red-100 text-red-800",
    };

    return (
      <div
        ref={ref}
        className={cn("p-4 rounded-md", variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Alert.displayName = "Alert";
