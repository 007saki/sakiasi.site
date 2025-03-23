/*
  Warnings:

  - You are about to drop the column `image_detail_id` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `google_id` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the `ImageDetail` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `src` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_image_detail_id_fkey";

-- DropForeignKey
ALTER TABLE "ImageDetail" DROP CONSTRAINT "ImageDetail_image_id_fkey";

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "image_detail_id";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "google_id",
ADD COLUMN     "src" TEXT NOT NULL;

-- DropTable
DROP TABLE "ImageDetail";

-- CreateTable
CREATE TABLE "ImageToExperience" (
    "id" SERIAL NOT NULL,
    "experience_id" INTEGER NOT NULL,
    "image_id" INTEGER NOT NULL,

    CONSTRAINT "ImageToExperience_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ImageToExperience" ADD CONSTRAINT "ImageToExperience_experience_id_fkey" FOREIGN KEY ("experience_id") REFERENCES "Experience"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImageToExperience" ADD CONSTRAINT "ImageToExperience_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
