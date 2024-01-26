import { cn } from "~/ui/utils/cn";

export interface LiProps {
  className?: string;
  children: React.ReactNode;
}

export function Li({ className, ...props }: LiProps) {
  return <li className={cn("p list-disc", className)} {...props}></li>;
}
