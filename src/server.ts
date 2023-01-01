import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");

    app.listen(PORT, () => {
      console.log(`Server running in port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
