import { cn } from "@/lib/utils";

export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5"
          aria-hidden="true"
        >
          <path
            d="M12 2L3 7v2h18V7l-9-5zM5 11v6H4v3h16v-3h-1v-6h-2v6h-3v-6h-2v6H9v-6H5z"
            fill="currentColor"
          />
        </svg>
      </div>
      {showText && (
        <span className="text-lg font-semibold tracking-tight">WEBANK</span>
      )}
    </div>
  );
}
