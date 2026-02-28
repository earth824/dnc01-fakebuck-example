import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function simLoading(s: number = 5) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, s * 1000);
  });
}
