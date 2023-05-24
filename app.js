
// app.js - "前端“
// 1- require packages used in the project
const express = require('express')
const movieList = require('./movies.json')
const app = express()
const port = 3000

// 2- require handlebars in the project
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 3- setting static files
app.use(express.static('public'))

// 4- routes setting
app.get('/', (req, res) => {
  // movieList.results資料帶入movies變數中
  res.render('index', { movies: movieList.results })
})

app.get('/movies/:movie_id', (req, res) => {
  // 這樣就可以依據使用者點選的id進行篩選

  // const findMovie = movieList.results.find(function (movie) {
  //   //資料中的變數movie獲取的id 與網頁的id比對(params 存在 req.params)
  //   return movie.id..toString()  === req.params.movie_id // req.params.movie_id格式是字串
  // })

  const findMovie = movieList.results.find(movie => movie.id.toString() === req.params.movie_id)
  res.render('show', { movie: findMovie }) //findMovie篩選出來直接可以吃的格式，不是矩陣 
})

app.get('/search', (req, res) => {
  //console.log(req.query)
  const movies = movieList.results.filter(movie => movie.title.toLowerCase().includes(req.query.keyword.toLowerCase()))
  res.render('index', { movies: movies, keyword: req.query.keyword })
})



// 5- start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
