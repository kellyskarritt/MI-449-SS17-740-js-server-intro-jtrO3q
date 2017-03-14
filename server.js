var http = require('http')
var randomNumber = Math.random()

var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Welcome!</h1>'
    )
  } else if (request.url === '/random-joke') {
    if (randomNumber > 0.6) {
      response.end(
        '<h1>Random Joke</h1>' +
        ' Knock, knock! <br>' +
        ' Who\'s there? <br>' +
        ' Opportunity <br>' +
        ' That is impossible. Opportunity doesn’t come knocking twice! <br>' +
        '<a href="http://localhost:8080/">Homepage Link</a>'
      )
    } else if (randomNumber > 0.3) {
      response.end(
        '<h1>Random Joke</h1>' +
        ' Knock, knock! <br>' +
        ' Who\'s there? <br>' +
        ' Beats. <br>' +
        ' Beats who? <br>' +
        ' Beats me. <br>' +
        '<a href="http://localhost:8080/">Homepage Link</a>'
      )
    } else if (randomNumber > 0) {
      response.end(
        '<h1>Random Joke</h1>' +
        ' Knock, knock! <br>' +
        ' Who\'s there? <br>' +
        ' The door. <br>' +
        '<a href="http://localhost:8080/">Homepage Link</a>'
      )
    }
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Cuteness</h1>' +
      '<img src="https://i.imgur.com/MXlUpVC.jpg" alt="puppies" width="600px;"><br>' +
      '<a href="http://localhost:8080/">Homepage Link</a>'
    )
  } else {
    response.end(
      '<h1>ERROR</h1>' +
      'Requested URL ' + request.url + ' was not found on this server.<br>' +
      '<a href="http://localhost:8080/">Homepage Link</a>'
  )
  }
})

var port = process.env.PORT || 8080
server.listen(port)

console.log('Server running at http://localhost:' + port + '/')
