import { cn } from "@/lib/utils";

interface CoordinateStampProps {
  lat?: string;
  lon?: string;
  place?: string;
  meta?: string;
  className?: string;
}

export default function CoordinateStamp({
  lat = "43°31'N",
  lon = "79°53'W",
  place = "MILTON · ON",
  meta,
  className,
}: CoordinateStampProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.25em] text-muted-foreground",
        className,
      )}
    >
      <span className="text-primary">◊</span>
      <span>{lat}</span>
      <span aria-hidden="true" className="opacity-50">
        ·
      </span>
      <span>{lon}</span>
      <span aria-hidden="true" className="opacity-50">
        ·
      </span>
      <span>{place}</span>
      {meta && (
        <>
          <span aria-hidden="true" className="opacity-50">
            ·
          </span>
          <span>{meta}</span>
        </>
      )}
    </div>
  );
}
