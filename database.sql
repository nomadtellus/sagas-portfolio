CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
VALUES ('Redux Garden', 'A list of sexy plants', 'https://www.speedrun.com/themes/user/Bellsprout/image.png',
 '', 'https://github.com/nomadtellus/redux-saga-garden', '4-11-2019', '5')

