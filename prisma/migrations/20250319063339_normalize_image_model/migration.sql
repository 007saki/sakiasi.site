/*
  Warnings:

  - You are about to drop the column `image_id` on the `Experience` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_image_id_fkey";

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "image_id",
ADD COLUMN     "image_detail_id" INTEGER;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_image_detail_id_fkey" FOREIGN KEY ("image_detail_id") REFERENCES "ImageDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;
