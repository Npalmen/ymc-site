import assert from "node:assert/strict";
import test from "node:test";
import { markedToRich, richToMarked } from "./rich";

test("round-trips an accent word", () => {
  const line = [
    { text: "Låt oss växa " },
    { text: "tillsammans", accent: true },
    { text: "." },
  ];
  assert.equal(richToMarked(line), "Låt oss växa *tillsammans*.");
  assert.deepEqual(markedToRich("Låt oss växa *tillsammans*."), line);
});

test("plain text stays one part", () => {
  assert.deepEqual(markedToRich("Utan accent"), [{ text: "Utan accent" }]);
});
