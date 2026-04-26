/**
 * Derives a TypeScript-friendly entity name from a JSON-LD `@type` value.
 *
 * - Schema.org and other URI-style types are reduced to their last path segment.
 * - Bare names are PascalCased on first character.
 */
export function getEntityNameFromJsonLdType(type: string): string {
  if (type.includes("/")) {
    return type.split("/").pop() || "Entity";
  }
  return type.charAt(0).toUpperCase() + type.slice(1);
}
