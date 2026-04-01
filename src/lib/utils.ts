import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null;
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('token='))
    ?.split('=')[1];
  return token || null;
}

export function setAuthToken(token: string): void {
  if (typeof document === 'undefined') return;
  document.cookie = `token=${token}; path=/; max-age=${7 * 24 * 60 * 60}`;
}

export function clearAuthToken(): void {
  if (typeof document === 'undefined') return;
  document.cookie = 'token=; path=/; max-age=0';
}
