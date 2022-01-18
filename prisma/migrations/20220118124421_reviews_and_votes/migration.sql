/*
  Warnings:

  - You are about to drop the `Rating` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vote` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MovieToRating` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RatingToShow` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_bookId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_movieId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_showId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_songId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userId_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_reviewId_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_userId_fkey";

-- DropForeignKey
ALTER TABLE "_MovieToRating" DROP CONSTRAINT "_MovieToRating_A_fkey";

-- DropForeignKey
ALTER TABLE "_MovieToRating" DROP CONSTRAINT "_MovieToRating_B_fkey";

-- DropForeignKey
ALTER TABLE "_RatingToShow" DROP CONSTRAINT "_RatingToShow_A_fkey";

-- DropForeignKey
ALTER TABLE "_RatingToShow" DROP CONSTRAINT "_RatingToShow_B_fkey";

-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "rating" TEXT;

-- DropTable
DROP TABLE "Rating";

-- DropTable
DROP TABLE "Review";

-- DropTable
DROP TABLE "Vote";

-- DropTable
DROP TABLE "_MovieToRating";

-- DropTable
DROP TABLE "_RatingToShow";

-- CreateTable
CREATE TABLE "MovieReview" (
    "title" TEXT,
    "review" TEXT,
    "rating" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "MovieReview_pkey" PRIMARY KEY ("userId","movieId")
);

-- CreateTable
CREATE TABLE "MovieReviewVote" (
    "vote" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,
    "movieReviewId" INTEGER NOT NULL,

    CONSTRAINT "MovieReviewVote_pkey" PRIMARY KEY ("userId","movieReviewId")
);

-- AddForeignKey
ALTER TABLE "MovieReview" ADD CONSTRAINT "MovieReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieReview" ADD CONSTRAINT "MovieReview_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieReviewVote" ADD CONSTRAINT "MovieReviewVote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieReviewVote" ADD CONSTRAINT "MovieReviewVote_userId_movieId_fkey" FOREIGN KEY ("userId", "movieId") REFERENCES "MovieReview"("userId", "movieId") ON DELETE RESTRICT ON UPDATE CASCADE;
