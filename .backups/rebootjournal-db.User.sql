PRAGMA defer_foreign_keys=TRUE;
CREATE TABLE IF NOT EXISTS "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "avatar_url" TEXT,
    "account_type" TEXT NOT NULL DEFAULT 'user'
);
INSERT INTO "User" VALUES('e7a3eab9-35c0-484b-ad79-647375470112','btaustincom@gmail.com','Brandon Thompson','https://lh3.googleusercontent.com/a/ACg8ocIF3TfQwIRbQXRS90ZtE16AW_y1ZVKSb_2883hg4ezn7niTQQsy=s96-c','admin');
INSERT INTO "User" VALUES('61ce6079-9c1f-41d5-ad5a-218553659984','brandont@clxmedia.com','Brandon Thompson','https://lh3.googleusercontent.com/a/ACg8ocL3SGjHgzGX7NEACdECkr66eaEZaW1ZNKT4H0B60bWt7j5SC_Bm=s96-c','user');
