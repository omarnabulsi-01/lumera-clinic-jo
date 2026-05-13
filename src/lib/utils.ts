import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPriceRange(range: readonly [number, number]) {
  return `${range[0]} - ${range[1]} دينار أردني`;
}
