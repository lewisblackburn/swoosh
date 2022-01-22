-- CreateTable
CREATE TABLE "ShowReview" (
    "title" TEXT,
    "review" TEXT,
    "rating" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "showId" INTEGER NOT NULL,

    CONSTRAINT "ShowReview_pkey" PRIMARY KEY ("userId","showId")
);

-- CreateTable
CREATE TABLE "ShowReviewLike" (
    "userId" INTEGER NOT NULL,
    "reviewUserId" INTEGER NOT NULL,
    "reviewShowId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShowReviewLike_pkey" PRIMARY KEY ("userId","reviewUserId","reviewShowId")
);

-- CreateTable
CREATE TABLE "BookReview" (
    "title" TEXT,
    "review" TEXT,
    "rating" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,

    CONSTRAINT "BookReview_pkey" PRIMARY KEY ("userId","bookId")
);

-- CreateTable
CREATE TABLE "BookReviewLike" (
    "userId" INTEGER NOT NULL,
    "reviewUserId" INTEGER NOT NULL,
    "reviewBookId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BookReviewLike_pkey" PRIMARY KEY ("userId","reviewUserId","reviewBookId")
);

-- CreateTable
CREATE TABLE "SongReview" (
    "title" TEXT,
    "review" TEXT,
    "rating" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "songId" INTEGER NOT NULL,

    CONSTRAINT "SongReview_pkey" PRIMARY KEY ("userId","songId")
);

-- CreateTable
CREATE TABLE "SongReviewLike" (
    "userId" INTEGER NOT NULL,
    "reviewUserId" INTEGER NOT NULL,
    "reviewSongId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SongReviewLike_pkey" PRIMARY KEY ("userId","reviewUserId","reviewSongId")
);

-- AddForeignKey
ALTER TABLE "ShowReview" ADD CONSTRAINT "ShowReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShowReview" ADD CONSTRAINT "ShowReview_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShowReviewLike" ADD CONSTRAINT "ShowReviewLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShowReviewLike" ADD CONSTRAINT "ShowReviewLike_reviewUserId_reviewShowId_fkey" FOREIGN KEY ("reviewUserId", "reviewShowId") REFERENCES "ShowReview"("userId", "showId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookReview" ADD CONSTRAINT "BookReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookReview" ADD CONSTRAINT "BookReview_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookReviewLike" ADD CONSTRAINT "BookReviewLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookReviewLike" ADD CONSTRAINT "BookReviewLike_reviewUserId_reviewBookId_fkey" FOREIGN KEY ("reviewUserId", "reviewBookId") REFERENCES "BookReview"("userId", "bookId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongReview" ADD CONSTRAINT "SongReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongReview" ADD CONSTRAINT "SongReview_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongReviewLike" ADD CONSTRAINT "SongReviewLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongReviewLike" ADD CONSTRAINT "SongReviewLike_reviewUserId_reviewSongId_fkey" FOREIGN KEY ("reviewUserId", "reviewSongId") REFERENCES "SongReview"("userId", "songId") ON DELETE RESTRICT ON UPDATE CASCADE;
