import express from "express"
import "dotenv/config"
import cors from "cors"

const port = 5000
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!🔥😎')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})