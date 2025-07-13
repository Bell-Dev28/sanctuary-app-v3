// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx';

/**
 * A thin wrapper around clsx for className merging.
 * Accepts strings, arrays, and object maps of conditional classes.
 *
 * Usage:
 *   cn('p-4', { 'bg-blue-500': isActive }, extraClasses)
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(...inputs);
}
