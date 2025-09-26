-- CreateTable
CREATE TABLE "public"."Settings" (
    "id" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);
