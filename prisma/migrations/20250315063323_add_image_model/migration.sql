/*
  Warnings:

  - You are about to drop the column `images` on the `Experience` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "images",
ADD COLUMN     "image_id" INTEGER;

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "google_id" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
