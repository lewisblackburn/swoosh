/*
  Warnings:

  - You are about to drop the column `title` on the `BookReview` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `MovieReview` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `ShowReview` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `SongReview` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BookReview" DROP COLUMN "title";

-- AlterTable
ALTER TABLE "MovieReview" DROP COLUMN "title";

-- AlterTable
ALTER TABLE "ShowReview" DROP COLUMN "title";

-- AlterTable
ALTER TABLE "SongReview" DROP COLUMN "title";
