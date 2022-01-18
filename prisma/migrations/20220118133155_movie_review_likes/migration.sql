/*
  Warnings:

  - The primary key for the `MovieReview` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Favourite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MovieReviewVote` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Favourite" DROP CONSTRAINT "Favourite_bookId_fkey";

-- DropForeignKey
ALTER TABLE "Favourite" DROP CONSTRAINT "Favourite_movieId_fkey";

-- DropForeignKey
ALTER TABLE "Favourite" DROP CONSTRAINT "Favourite_personId_fkey";

-- DropForeignKey
ALTER TABLE "Favourite" DROP CONSTRAINT "Favourite_showId_fkey";

-- DropForeignKey
ALTER TABLE "Favourite" DROP CONSTRAINT "Favourite_songId_fkey";

-- DropForeignKey
ALTER TABLE "Favourite" DROP CONSTRAINT "Favourite_userId_fkey";

-- DropForeignKey
ALTER TABLE "MovieReview" DROP CONSTRAINT "MovieReview_movieId_fkey";

-- DropForeignKey
ALTER TABLE "MovieReview" DROP CONSTRAINT "MovieReview_userId_fkey";

-- DropForeignKey
ALTER TABLE "MovieReviewVote" DROP CONSTRAINT "MovieReviewVote_userId_fkey";

-- DropForeignKey
ALTER TABLE "MovieReviewVote" DROP CONSTRAINT "MovieReviewVote_userId_movieId_fkey";

-- AlterTable
ALTER TABLE "MovieReview" DROP CONSTRAINT "MovieReview_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "movieId" DROP NOT NULL,
ADD CONSTRAINT "MovieReview_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Favourite";

-- DropTable
DROP TABLE "MovieReviewVote";

-- CreateTable
CREATE TABLE "MovieReviewLike" (
    "userId" INTEGER NOT NULL,
    "movieReviewId" INTEGER NOT NULL,

    CONSTRAINT "MovieReviewLike_pkey" PRIMARY KEY ("userId","movieReviewId")
);

-- AddForeignKey
ALTER TABLE "MovieReview" ADD CONSTRAINT "MovieReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieReview" ADD CONSTRAINT "MovieReview_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieReviewLike" ADD CONSTRAINT "MovieReviewLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieReviewLike" ADD CONSTRAINT "MovieReviewLike_movieReviewId_fkey" FOREIGN KEY ("movieReviewId") REFERENCES "MovieReview"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
