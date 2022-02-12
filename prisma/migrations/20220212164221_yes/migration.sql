/*
  Warnings:

  - You are about to drop the column `stagename` on the `ArtistInSong` table. All the data in the column will be lost.
  - You are about to drop the column `penname` on the `AuthorInBook` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ArtistInSong" DROP COLUMN "stagename",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "AuthorInBook" DROP COLUMN "penname",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
