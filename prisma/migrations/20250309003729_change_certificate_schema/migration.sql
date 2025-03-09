/*
  Warnings:

  - You are about to drop the column `end_time` on the `Certificate` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Certificate` table. All the data in the column will be lost.
  - You are about to drop the column `start_time` on the `Certificate` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Certificate` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('WEB_DEVELOPMENT', 'CYBER_SECURITY', 'NETWORKING', 'DATABASE', 'MOBILE_DEVELOPMENT', 'MACHINE_LEARNING', 'JAVASCRIPT', 'PYTHON', 'AI', 'UI_UX_DESIGN');

-- AlterTable
ALTER TABLE "Certificate" DROP COLUMN "end_time",
DROP COLUMN "imageUrl",
DROP COLUMN "start_time",
DROP COLUMN "title",
ADD COLUMN     "category" "Category" NOT NULL DEFAULT 'WEB_DEVELOPMENT',
ADD COLUMN     "certificate_desc" TEXT,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "institution" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "qualificationType" TEXT;
