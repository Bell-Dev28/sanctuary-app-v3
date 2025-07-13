// src/lib/encryptionService.ts
import CryptoJS from 'crypto-js';

const ENCRYPTION_KEY = process.env.NEXT_PUBLIC_APP_ENCRYPTION!;
if (!ENCRYPTION_KEY) {
  throw new Error(
    'Missing NEXT_PUBLIC_APP_ENCRYPTION in .env.local – used for client-side AES encryption'
  );
}

/**
 * Encrypts plaintext using AES.
 * @param plaintext The string to encrypt.
 * @returns The Base64‐encoded ciphertext.
 */
export function encrypt(plaintext: string): string {
  return CryptoJS.AES.encrypt(plaintext, ENCRYPTION_KEY).toString();
}

/**
 * Decrypts Base64‐encoded AES ciphertext back to plaintext.
 * @param ciphertext The encrypted string.
 * @returns The original plaintext.
 */
export function decrypt(ciphertext: string): string {
  const bytes = CryptoJS.AES.decrypt(ciphertext, ENCRYPTION_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
}
