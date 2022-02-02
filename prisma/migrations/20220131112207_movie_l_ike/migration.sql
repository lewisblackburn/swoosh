-- CreateTable
CREATE TABLE "MovieLike" (
    "userId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MovieLike_pkey" PRIMARY KEY ("userId","movieId")
);

-- AddForeignKey
ALTER TABLE "MovieLike" ADD CONSTRAINT "MovieLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieLike" ADD CONSTRAINT "MovieLike_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
