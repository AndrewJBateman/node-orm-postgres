import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db";

// Immediately-Invoked Function Expression (IIFI) 
(async function main() {
  try {
    await AppDataSource.initialize();
    console.log("database connected");
    app.listen(3000, () => console.log("listening on port 3000"));
  } catch (error) {
    console.error(error);
  }
})();
