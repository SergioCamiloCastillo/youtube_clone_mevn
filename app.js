const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')


const errorHandler = require('./middleware/error')

const DBConnection = require('./config/db')

dotenv.config({ path: './config/.env' })

DBConnection()


const categoryRoutes = require('./routes/categories')

const app = express()

app.use(express.json())


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}



app.use(express.static(path.join(__dirname, 'public')))



const versionOne = (routeName) => `/api/v1/${routeName}`


app.use(versionOne('categories'), categoryRoutes)

app.use(errorHandler)

const PORT = process.env.PORT

const server = app.listen(PORT, () => {
    console.log(
        `We are live on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red)
    // Close server & exit process
    server.close(() => process.exit(1))
})