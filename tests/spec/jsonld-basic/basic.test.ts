/* eslint-disable */
/* tslint:disable */

import { describe, expect, it } from "vitest";
import { generateApi } from "../../../src";

describe("JSON-LD basic", () => {
  it("generates JSON-LD context, entity and utility files when enabled", async () => {
    const { files } = await generateApi({
      input: require.resolve("./schema.json"),
      generateClient: false,
      jsonLdOptions: { enabled: true },
    });

    expect(files).toMatchSnapshot();
  });

  it("emits no JSON-LD files and leaves data contracts untouched when disabled (default)", async () => {
    const { files } = await generateApi({
      input: require.resolve("./schema.json"),
      generateClient: false,
    });

    expect(files.some((f) => f.fileName.startsWith("jsonld-"))).toBe(false);
    expect(files).toMatchSnapshot();
  });

  it("can opt out of generating utility types", async () => {
    const { files } = await generateApi({
      input: require.resolve("./schema.json"),
      generateClient: false,
      jsonLdOptions: { enabled: true, generateUtils: false },
    });

    expect(files.some((f) => f.fileName === "jsonld-utils")).toBe(false);
  });
});
