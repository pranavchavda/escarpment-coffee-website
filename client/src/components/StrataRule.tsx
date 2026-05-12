import { cn } from "@/lib/utils";

interface StrataRuleProps {
  className?: string;
  reveal?: boolean;
}

export default function StrataRule({ className, reveal = false }: StrataRuleProps) {
  return (
    <div
      className={cn("strata-rule", reveal && "reveal-rule", className)}
      role="presentation"
      aria-hidden="true"
    >
      <span />
      <span />
      <span />
    </div>
  );
}
