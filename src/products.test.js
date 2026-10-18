import test from "node:test";
import assert from "node:assert/strict";
import { products } from "./products.js";

test("catalog has products with ids and prices", () => {
  assert.ok(products.length > 0);
  for (const p of products) {
    assert.ok(p.id.startsWith("hm-"));
    assert.ok(Number.isInteger(p.priceCents) && p.priceCents > 0);
  }
});
