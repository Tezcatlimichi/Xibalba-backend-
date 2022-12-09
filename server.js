const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const FuanaRouter = require('./routes/FuanaRouter')
// const CountriesRouter = require('./routes/CountriesRouter')
// const UnderwaterRouter = require('./routes/UnderwaterRouter')
// const CaveRouter = require('./routes/CaveRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
// routes
app.get('/', (req, res) => res.json({ message: 'Server Workssssss' }))
app.use('/fuana', FuanaRouter)
// app.use('/countries', CountriesRouter)
// app.use('/underwater', UnderwaterRouter)
// app.use('/caves', CaveRouter)

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
