import { describe, expect, test } from "vitest";
import { getAPIKey } from "./auth";

describe("getApiKey", () => {
  test("should return the correct apiKey", () => {
    const key = "someApiKey";
    const headers = { authorization: `ApiKey ${key}` };

    expect(getAPIKey(headers)).toBe(key);
  });

  test("should return null on missing apiKey", () => {
    expect(getAPIKey({})).toBeNull();
  });
});
