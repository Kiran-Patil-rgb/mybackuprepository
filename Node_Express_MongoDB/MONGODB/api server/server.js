import express from "express"
import dotenv from "dotenv"
import { router } from "./router.js"
import connection from "./database/connection.js"
import { loginRouter } from "./loginuser.js"

dotenv.config({ path: "./config.env" })

connection()

const app = express()

let port = process.env.PORT

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use("/languages/api", router)

app.use("/users/api", loginRouter)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})