var typeorm = require("typeorm");
var EntitySchema = typeorm.EntitySchema;

const Users = require("./entity/Users");

typeorm
  .createConnection({
    name: "mysql",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "username",
    password: "password",
    database: "users",
    synchronize: true,
    logging: true,
    entities: [new EntitySchema(Users)],
  })
  .then(() => {
    const dbConnection = typeorm.getConnection("mysql");

    const repo = dbConnection.getRepository("Users");
    return repo;
  })
  .then((repo) => {
    console.log(
      "Seeding 2 users to MySQL users table: User1 (role: user), User2 (role: admin"
    );
    const inserts = [
      repo.insert({
        name: "User1",
        address: "GA",
        role: "user",
      }),
      repo.insert({
        name: "User2",
        address: "GA",
        role: "admin",
      }),
    ];

    return Promise.all(inserts);
  })
  .catch((err) => {
    console.error("failed connecting and seeding users to the MySQL database");
    console.error(err);
  });
