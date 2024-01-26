import clsx from "clsx";

export interface HeadingProps {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  className?: string;
}

export function Heading({ title, content, className, ...props }: HeadingProps) {
  return (
    <div {...props} className={clsx("space-y-4 mb-8", className)}>
      <h1 className="h2 sm:h1">{title}</h1>
      <p className="p">{content}</p>
    </div>
  );
}
