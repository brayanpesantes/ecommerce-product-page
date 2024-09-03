import { ButtonHTMLAttributes } from "react";
export default function Button({
  children,
  className,
  ...props
}: Readonly<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      className={`inline-flex items-center justify-center cursor-pointer bg-orange-500 hover:bg-orange-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
