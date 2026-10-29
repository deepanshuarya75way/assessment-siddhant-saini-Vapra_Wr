CREATE TYPE "BookingRequestTimelineEventType" AS ENUM (
  'REQUEST_CREATED',
  'STATUS_CHANGED',
  'REOPEND',
  'FOLLOW_UP'
);

CREATE TABLE "BookingRequestTimeline" (
  "id" TEXT NOT NULL,
  "bookingRequestId" TEXT NOT NULL
  "eventType" "BookingRequestTimelineEventType" NOT NULL,
  "desciption" TEXT NOT NULL,
  "fromStatus" "BookingRequestStatus",
  "toStatus" "BookingRequestStatus",
  "actorId" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "BookingRequestTimeline_pkey" PRIMARY KEY ("id")
     
);

  CREATE INDEX "BookingRequestTimeline_bookingRequestId_createdAt_idx"
     ON "BookingRequestTimeline"("bookingRequestId", "createdAt");
  CREATE INDEX "BookingRequestTimeline_actorId_idx"
     ON "BookingRequestTimeline"("actorId");

  ALTER TABLE "BookingRequestTimeline"
     ADD CONSTRAINT "BookingRequestTimeline_bookingRequestId_fkey"
     FOREIGN KEY ("bookingRequestId") REFERENCES "BookingRequest"("id")
     ON DELETE RESTRICT ON UPDATE CASCADE;

  INSERT INTO "BookingRequestTimeline" (
    "id",
    "bookingRequestId",
    "eventType",
    "description",
    "actorId",
    "createdAt"
  )         
  SELECT
      'legacy-created-'  || "id",
      "id",
      'REQUEST_CREATED',
      'Service request created.',
      "customerId",
      "createdAt"
  FROM "BookingRequest";    