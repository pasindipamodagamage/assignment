// 2. defined the application port
import app from "./app";
import dotenv from "dotenv"

dotenv.config(); //load the envirnment variables from the file
const port = process.env.PORT || 3000;

// 4. Instruct the app to listen on port 3000
app.listen(port,() => {
    console.log(`server is running on http://localhost:${port}`)
});