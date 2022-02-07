/*
  Warnings:

  - You are about to drop the `_BookToPerson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PersonToSong` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BookToPerson" DROP CONSTRAINT "_BookToPerson_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToPerson" DROP CONSTRAINT "_BookToPerson_B_fkey";

-- DropForeignKey
ALTER TABLE "_PersonToSong" DROP CONSTRAINT "_PersonToSong_A_fkey";

-- DropForeignKey
ALTER TABLE "_PersonToSong" DROP CONSTRAINT "_PersonToSong_B_fkey";

-- DropTable
DROP TABLE "_BookToPerson";

-- DropTable
DROP TABLE "_PersonToSong";

-- CreateTable
CREATE TABLE "AuthorInBook" (
    "bookId" INTEGER NOT NULL,
    "personId" INTEGER NOT NULL,
    "stagename" TEXT NOT NULL,

    CONSTRAINT "AuthorInBook_pkey" PRIMARY KEY ("personId","bookId")
);

-- CreateTable
CREATE TABLE "ArtistInSong" (
    "songId" INTEGER NOT NULL,
    "personId" INTEGER NOT NULL,
    "penname" TEXT NOT NULL,

    CONSTRAINT "ArtistInSong_pkey" PRIMARY KEY ("personId","songId")
);

-- AddForeignKey
ALTER TABLE "AuthorInBook" ADD CONSTRAINT "AuthorInBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthorInBook" ADD CONSTRAINT "AuthorInBook_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtistInSong" ADD CONSTRAINT "ArtistInSong_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtistInSong" ADD CONSTRAINT "ArtistInSong_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
