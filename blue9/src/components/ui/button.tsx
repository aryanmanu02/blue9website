import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "bg-light-blue-500 text-white hover:bg-light-blue-600 dark:bg-light-blue-600 dark:text-white dark:hover:bg-light-blue-700",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:bg-red-700 dark:text-white dark:hover:bg-red-800",
        outline:
          "border border-light-blue-200 bg-white text-light-blue-500 hover:bg-light-blue-100 hover:text-light-blue-600 dark:border-light-blue-800 dark:bg-slate-950 dark:text-light-blue-400 dark:hover:bg-light-blue-800 dark:hover:text-light-blue-200",
        secondary:
          "bg-light-blue-100 text-light-blue-600 hover:bg-light-blue-200 dark:bg-light-blue-900 dark:text-light-blue-200 dark:hover:bg-light-blue-800",
        ghost:
          "text-light-blue-600 hover:bg-light-blue-100 hover:text-light-blue-700 dark:text-light-blue-200 dark:hover:bg-light-blue-800 dark:hover:text-light-blue-300",
        link:
          "text-light-blue-600 underline-offset-4 hover:underline dark:text-light-blue-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
