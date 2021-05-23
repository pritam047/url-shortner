// Initialize express server on PORT 1337
const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render('index', { myVariable: 'My name is Pritam!' })
})

// app.get('/short', (req, res) => {
// 	res.send('Hello from short')
// })
let PORT = process.env.PUBLIC_PORT || 8081; 
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})