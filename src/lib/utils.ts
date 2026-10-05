import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names, letting later Tailwind utilities win over earlier ones.
 * Required by LiveOrb's `cn("relative shrink-0", className)`.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}