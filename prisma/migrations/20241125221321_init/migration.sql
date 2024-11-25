-- CreateTable
CREATE TABLE "EmailLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientEmail" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "deliveryStatus" TEXT NOT NULL DEFAULT 'created',
    "readStatus" BOOLEAN NOT NULL DEFAULT false,
    "responseStatus" BOOLEAN NOT NULL DEFAULT false,
    "error" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "sentAt" DATETIME,
    "readAt" DATETIME,
    "responseAt" DATETIME
);
