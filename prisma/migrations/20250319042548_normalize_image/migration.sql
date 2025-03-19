/*
  Warnings:

  - You are about to drop the column `name` on the `Image` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_image_id_fkey";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "name",
ALTER COLUMN "google_id" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ImageDetail" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "image_description" TEXT,
    "image_id" INTEGER NOT NULL,

    CONSTRAINT "ImageDetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "ImageDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImageDetail" ADD CONSTRAINT "ImageDetail_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
