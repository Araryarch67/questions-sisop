export { cn } from "cn"

/**
 * Decode literal `\uXXXX` escape sequences found in question-bank data
 * (e.g. "\\u201c" → "\u201c"). No-op for strings without such sequences.
 */
export function decodeUnicodeEscapes(value: string): string {
  if (!value || !value.includes("\\u")) return value;
  try {
    return value.replace(/\\u([0-9a-fA-F]{4})/g, (_, hex: string) =>
      String.fromCharCode(parseInt(hex, 16)),
    );
  } catch {
    return value;
  }
}
