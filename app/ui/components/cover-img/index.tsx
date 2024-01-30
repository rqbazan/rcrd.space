import clsx from "clsx";

export interface CoverImgProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  description?: React.ReactNode;
  className?: string;
}

export function CoverImg({
  className,
  description,
  alt,
  ...props
}: CoverImgProps) {
  return (
    <div className={clsx(className, "flex flex-col items-center")}>
      <a href={props.src} target="_blank" rel="noreferrer" className="mb-3">
        <div className="flex select-none aspect-[4/3]">
          <img
            {...props}
            alt={alt}
            className="object-cover border-[6px] md:border-8"
          />
        </div>
      </a>
      {typeof description === "string" ? (
        <span className="small text-muted">{description}</span>
      ) : (
        description
      )}
    </div>
  );
}
