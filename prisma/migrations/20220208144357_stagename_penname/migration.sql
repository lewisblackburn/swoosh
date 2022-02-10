/*
  Warnings:

  - You are about to drop the column `penname` on the `ArtistInSong` table. All the data in the column will be lost.
  - You are about to drop the column `stagename` on the `AuthorInBook` table. All the data in the column will be lost.
  - Added the required column `stagename` to the `ArtistInSong` table without a default value. This is not possible if the table is not empty.
  - Added the required column `penname` to the `AuthorInBook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ArtistInSong" DROP COLUMN "penname",
ADD COLUMN     "stagename" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "AuthorInBook" DROP COLUMN "stagename",
ADD COLUMN     "penname" TEXT NOT NULL;
