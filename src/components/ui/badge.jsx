import * as React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const badgeVariants = (variant) => {
  const baseStyles =
    "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  const variantStyles = {
    default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
    outline: "text-foreground",
  };

  return classNames(baseStyles, variantStyles[variant] || variantStyles.default);
};

export function Badge({ className, variant = "default", ...props }) {
  return <div className={classNames(badgeVariants(variant), className)} {...props} />;
}
