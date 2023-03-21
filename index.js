const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.json({ message: 'success', data: 'Todo app home route' })
})
app.listen(PointerEvent, () => {
    console.log(`todo app are running on port ${PORT}`);
})