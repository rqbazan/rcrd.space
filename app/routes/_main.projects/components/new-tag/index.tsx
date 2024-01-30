import { cn } from "~/ui/utils/cn";

export interface NewTagProps {
  className?: string;
}

export function NewTag({ className }: NewTagProps) {
  return (
    <div
      className={cn(
        "bg-orange-300 text-body-dark rounded-md inline-flex items-center justify-center px-1 py-0.5",
        className,
      )}
    >
      <span className="tiny uppercase translate-y-[0.05rem] font-semibold">
        New
      </span>
    </div>
  );
}
