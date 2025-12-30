PRAGMA defer_foreign_keys=TRUE;
CREATE TABLE IF NOT EXISTS "Category" (
    "slug" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
INSERT INTO "Category" VALUES('technology','Technology');
INSERT INTO "Category" VALUES('career','Career');
INSERT INTO "Category" VALUES('ai','Ai');
INSERT INTO "Category" VALUES('theology','Theology');
INSERT INTO "Category" VALUES('leadership','Leadership');
INSERT INTO "Category" VALUES('carerr','Carerr');
