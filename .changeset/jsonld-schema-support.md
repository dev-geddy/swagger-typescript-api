---
"swagger-typescript-api": minor
---

Add opt-in JSON-LD schema support.

When the new `jsonLdOptions.enabled` flag (CLI: `--jsonld`) is set, schemas
that declare the `x-jsonld` extension (or one of `x-jsonld-context`,
`x-jsonld-type`, `x-jsonld-id`) are emitted as JSON-LD entities and
contexts in addition to the regular data contracts. Modular output adds
`jsonld-context`, `jsonld-entity`, and `jsonld-utils` files.

The feature is fully opt-in — schemas without the extension and runs
without `--jsonld` produce byte-identical output to previous versions.
