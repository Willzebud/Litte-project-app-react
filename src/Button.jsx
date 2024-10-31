import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md px-3 py-1.5 ring-indigo-500 ring-offset-2 focus:outline-none focus:ring",
  {
    variants: {
      variant: {
        default: "bg-gray-950 text-gray-50 shadow hover:bg-gray-800",
        secondary: "bg-gray-200 text-gray-950 hover:bg-gray-300",
        ghost: "bg-transparent text-gray-950 hover:bg-gray-200",
      },
      size: {
        default: "h-8 text-sm font-semibold",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export const Button = ({ children, variant, className, ...props }) => {
  const classes = buttonVariants({ variant, className });
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
