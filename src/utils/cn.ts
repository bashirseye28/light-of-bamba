import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names with Tailwind merge strategy.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}