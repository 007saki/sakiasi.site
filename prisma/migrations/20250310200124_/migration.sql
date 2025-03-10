/*
  Warnings:

  - Changed the type of `status` on the `Certificate` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `category` on the `Certificate` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `certificate_desc` on table `Certificate` required. This step will fail if there are existing NULL values in that column.
  - Made the column `institution` on table `Certificate` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Certificate` required. This step will fail if there are existing NULL values in that column.
  - Made the column `qualificationType` on table `Certificate` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Certificate" DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL,
DROP COLUMN "category",
ADD COLUMN     "category" TEXT NOT NULL,
ALTER COLUMN "certificate_desc" SET NOT NULL,
ALTER COLUMN "date" DROP DEFAULT,
ALTER COLUMN "institution" SET NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "qualificationType" SET NOT NULL;

-- DropEnum
DROP TYPE "Category";
