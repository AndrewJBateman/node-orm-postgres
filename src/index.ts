import "reflect-metadata";
import app from "./app";
import { dataConnection } from "./db";

// Immediately-Invoked Function Expression (IIFI)
(async function main() {
  const port = 3000;
  try {
    await dataConnection.initialize();
    console.log("database connected");
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (error) {
    console.error(error);
  }
})();
