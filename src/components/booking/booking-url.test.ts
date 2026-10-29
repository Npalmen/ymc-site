import assert from "node:assert/strict";
import test from "node:test";
import { bookingIntent } from "./booking-url";

const here = "https://yellowmusicunited.se/tjanster/sanglektioner";

test("a booking link opens the sheet with its topic", () => {
  assert.deepEqual(bookingIntent("https://yellowmusicunited.se/boka?amne=prova-pa", here), {
    topic: "prova-pa",
  });
});

test("the booking page itself stays a full page", () => {
  assert.equal(
    bookingIntent("https://yellowmusicunited.se/boka", "https://yellowmusicunited.se/boka"),
    null,
  );
});

test("?boka=1 opens the sheet on the current page", () => {
  assert.deepEqual(bookingIntent(`${here}?boka=1&amne=distribution`, here), { topic: "distribution" });
});

test("other links navigate", () => {
  assert.equal(bookingIntent("https://yellowmusicunited.se/kontakt", here), null);
  assert.equal(bookingIntent("https://example.com/boka", here), null);
});
