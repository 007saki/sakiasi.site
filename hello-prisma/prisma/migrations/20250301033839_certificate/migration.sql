-- CreateEnum
CREATE TYPE "Status" AS ENUM ('COMPLETE', 'IN_PROGRESS');

-- CreateTable
CREATE TABLE "Certificate" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "Status" NOT NULL DEFAULT 'COMPLETE',

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);
