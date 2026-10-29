import test from "node:test";
import assert from "node:assert/strict";

import{
  followUpNoteSchema,
  reopenRequestSchema,
} from "../lib/booking-request-validation";

test("reopen validation trims and accepts a recurring issue description", ()=> {
  const parsed = reopenRequestSchema.parse({
    requestId: " request-123 ",
    description: " The same brake noise has returned. ",
  });

  assert.equal(parsed.requestId, "request-123");
  assert.equal(parsed.description, "The same brake noise has returned.");
});

test("reopen validation rejects short, missing, and oversized description", ()=> {
  assert.equal(reopenRequestSchema.safeParse({
    requestId:"request-123",
    description:"noise",
  }).success, false);
  assert.equal(reopenRequestSchema.safeParse({
    requestId:"request-123",
    description:"x".repeat(2001),
  }).success, false);
  assert.equal(reopenRequestSchema.safeParse({
    requestId:"",
    description:"The recurring issue happend again",
  }).success, false);
});

test("follow-up validation rejects empty notes and accepts a valid note", ()=> {
  assert.equal(followUpNoteSchema.safeParse({
    requestId:"request-123",
    description:"  ",
  }).success, false);
  assert.equal(followUpNoteSchema.safeParse({
    requestId:"request-123",
    description:"Inspection completed",
  }).success, true);

});
