import assert from "node:assert/strict";
import test from "node:test";
import { withArrayKeys } from "./seed-keys";

test("objects in arrays get a stable key from index and value", () => {
  const doc = {
    _id: "planningPage",
    topics: [
      { _type: "topic", value: "planering", label: "Möte" },
      { _type: "topic", value: "annat", label: "Annat" },
    ],
    points: ["Ett", "Två"],
    difference: {
      rows: [{ _type: "differenceRow", label: "Pris", ours: "Ja", other: "Nej" }],
    },
  };
  const once = withArrayKeys(doc);
  const twice = withArrayKeys(doc);
  assert.deepEqual(once, twice);
  assert.equal(once.topics[0]._key, "topics-0-planering");
  assert.equal(once.topics[1]._key, "topics-1-annat");
  assert.deepEqual(once.points, ["Ett", "Två"]);
  assert.equal(once.difference.rows[0]._key, "rows-0-pris");
  assert.equal(once._id, "planningPage");
  assert.equal("_key" in once, false);
});

test("an existing key is kept", () => {
  const keyed = withArrayKeys({ items: [{ _key: "keep-me", title: "A" }] });
  assert.equal(keyed.items[0]._key, "keep-me");
});
