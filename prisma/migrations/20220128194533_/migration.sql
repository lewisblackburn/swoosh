-- CreateEnum
CREATE TYPE "Career" AS ENUM ('AUTHOR', 'ARTIST', 'ACTOR');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "confirmed" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "displayname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'USER',
    "avatar" TEXT NOT NULL DEFAULT E'https://via.placeholder.com/400x400',
    "bio" TEXT NOT NULL DEFAULT E'',
    "location" TEXT NOT NULL DEFAULT E'',
    "website" TEXT NOT NULL DEFAULT E'',
    "dob" TEXT NOT NULL DEFAULT E'',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Follows" (
    "followingId" INTEGER NOT NULL,
    "followerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Follows_pkey" PRIMARY KEY ("followerId","followingId")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Watchlist" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Watchlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "career" "Career"[],
    "name" TEXT NOT NULL,
    "poster" TEXT NOT NULL DEFAULT E'https://via.placeholder.com/400x600',
    "bio" TEXT,
    "age" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "poster" TEXT NOT NULL DEFAULT E'https://via.placeholder.com/400x600',
    "backdrop" TEXT NOT NULL DEFAULT E'https://via.placeholder.com/1200x600',
    "locked" BOOLEAN NOT NULL DEFAULT false,
    "released" TIMESTAMP(3),
    "runtime" DOUBLE PRECISION,
    "trailer" TEXT,
    "rating" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Show" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "poster" TEXT NOT NULL DEFAULT E'https://via.placeholder.com/400x600',
    "locked" BOOLEAN NOT NULL DEFAULT false,
    "released" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Show_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Platform" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "apiKey" TEXT NOT NULL,

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SongInMovie" (
    "timestamp" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "songId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "SongInMovie_pkey" PRIMARY KEY ("songId","movieId")
);

-- CreateTable
CREATE TABLE "SongInShow" (
    "timestamp" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "songId" INTEGER NOT NULL,
    "showId" INTEGER NOT NULL,

    CONSTRAINT "SongInShow_pkey" PRIMARY KEY ("songId","showId")
);

-- CreateTable
CREATE TABLE "ActorInMovie" (
    "movieId" INTEGER NOT NULL,
    "personId" INTEGER NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "ActorInMovie_pkey" PRIMARY KEY ("personId","movieId")
);

-- CreateTable
CREATE TABLE "ActorInShow" (
    "showId" INTEGER NOT NULL,
    "personId" INTEGER NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "ActorInShow_pkey" PRIMARY KEY ("personId","showId")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "poster" TEXT NOT NULL DEFAULT E'https://via.placeholder.com/400x600',
    "locked" BOOLEAN NOT NULL DEFAULT false,
    "released" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Song" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "poster" TEXT NOT NULL DEFAULT E'https://via.placeholder.com/400x600',
    "locked" BOOLEAN NOT NULL DEFAULT false,
    "released" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Song_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieReview" (
    "review" TEXT,
    "rating" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "MovieReview_pkey" PRIMARY KEY ("userId","movieId")
);

-- CreateTable
CREATE TABLE "MovieReviewLike" (
    "userId" INTEGER NOT NULL,
    "reviewUserId" INTEGER NOT NULL,
    "reviewMovieId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MovieReviewLike_pkey" PRIMARY KEY ("userId","reviewUserId","reviewMovieId")
);

-- CreateTable
CREATE TABLE "ShowReview" (
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

-- CreateTable
CREATE TABLE "_MovieToWatchlist" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ShowToWatchlist" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_BookToPerson" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PersonToSong" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_GenreToMovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_MovieToPlatform" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_GenreToShow" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PlatformToShow" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_BookToGenre" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_GenreToSong" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Watchlist_userId_key" ON "Watchlist"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToWatchlist_AB_unique" ON "_MovieToWatchlist"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToWatchlist_B_index" ON "_MovieToWatchlist"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ShowToWatchlist_AB_unique" ON "_ShowToWatchlist"("A", "B");

-- CreateIndex
CREATE INDEX "_ShowToWatchlist_B_index" ON "_ShowToWatchlist"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BookToPerson_AB_unique" ON "_BookToPerson"("A", "B");

-- CreateIndex
CREATE INDEX "_BookToPerson_B_index" ON "_BookToPerson"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PersonToSong_AB_unique" ON "_PersonToSong"("A", "B");

-- CreateIndex
CREATE INDEX "_PersonToSong_B_index" ON "_PersonToSong"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GenreToMovie_AB_unique" ON "_GenreToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreToMovie_B_index" ON "_GenreToMovie"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToPlatform_AB_unique" ON "_MovieToPlatform"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToPlatform_B_index" ON "_MovieToPlatform"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GenreToShow_AB_unique" ON "_GenreToShow"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreToShow_B_index" ON "_GenreToShow"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlatformToShow_AB_unique" ON "_PlatformToShow"("A", "B");

-- CreateIndex
CREATE INDEX "_PlatformToShow_B_index" ON "_PlatformToShow"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BookToGenre_AB_unique" ON "_BookToGenre"("A", "B");

-- CreateIndex
CREATE INDEX "_BookToGenre_B_index" ON "_BookToGenre"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GenreToSong_AB_unique" ON "_GenreToSong"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreToSong_B_index" ON "_GenreToSong"("B");

-- AddForeignKey
ALTER TABLE "Follows" ADD CONSTRAINT "Follows_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follows" ADD CONSTRAINT "Follows_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watchlist" ADD CONSTRAINT "Watchlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongInMovie" ADD CONSTRAINT "SongInMovie_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongInMovie" ADD CONSTRAINT "SongInMovie_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongInShow" ADD CONSTRAINT "SongInShow_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongInShow" ADD CONSTRAINT "SongInShow_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActorInMovie" ADD CONSTRAINT "ActorInMovie_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActorInMovie" ADD CONSTRAINT "ActorInMovie_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActorInShow" ADD CONSTRAINT "ActorInShow_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActorInShow" ADD CONSTRAINT "ActorInShow_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieReview" ADD CONSTRAINT "MovieReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieReview" ADD CONSTRAINT "MovieReview_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieReviewLike" ADD CONSTRAINT "MovieReviewLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieReviewLike" ADD CONSTRAINT "MovieReviewLike_reviewUserId_reviewMovieId_fkey" FOREIGN KEY ("reviewUserId", "reviewMovieId") REFERENCES "MovieReview"("userId", "movieId") ON DELETE RESTRICT ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "_MovieToWatchlist" ADD FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToWatchlist" ADD FOREIGN KEY ("B") REFERENCES "Watchlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShowToWatchlist" ADD FOREIGN KEY ("A") REFERENCES "Show"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShowToWatchlist" ADD FOREIGN KEY ("B") REFERENCES "Watchlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToPerson" ADD FOREIGN KEY ("A") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToPerson" ADD FOREIGN KEY ("B") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PersonToSong" ADD FOREIGN KEY ("A") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PersonToSong" ADD FOREIGN KEY ("B") REFERENCES "Song"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToMovie" ADD FOREIGN KEY ("A") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToMovie" ADD FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToPlatform" ADD FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToPlatform" ADD FOREIGN KEY ("B") REFERENCES "Platform"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToShow" ADD FOREIGN KEY ("A") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToShow" ADD FOREIGN KEY ("B") REFERENCES "Show"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlatformToShow" ADD FOREIGN KEY ("A") REFERENCES "Platform"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlatformToShow" ADD FOREIGN KEY ("B") REFERENCES "Show"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToGenre" ADD FOREIGN KEY ("A") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToGenre" ADD FOREIGN KEY ("B") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToSong" ADD FOREIGN KEY ("A") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToSong" ADD FOREIGN KEY ("B") REFERENCES "Song"("id") ON DELETE CASCADE ON UPDATE CASCADE;
