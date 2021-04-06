const fs = require('fs');
const inquirer = require('inquirer');
const prompt = require('./prompt');

inquirer.prompt(
    prompt
)
.then((response) => {
    //const template = require('./template');
    fs.writeFile(`${response.name}.html`, 
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
            crossorigin="anonymous"></script>
    <title>Document</title>
</head>
<body class='container'>
    <header class='jumbotron'>
        <nav class="nav">
          
                <a class="nav-link active" aria-current="page" href="#">Active</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </nav>
        <h1>${response.name}</h1>
        <p>${response.location}</p>
    </header>
    <main>
        <article>
            <h2>About Me</h2>
            <p>${response.bio}</p>
        </article>
    </main>
    <footer>
        <h2>Connect!</h2>
        <ul class='nav'>
            <li class='nav-item'><a class='nav-link' href='${response.github}'>gitHub</a></li>
            <li class='nav-item'><a class='nav-link' href='${response.linkedin}'>linkedin</a></li>
        </ul>
    </footer>
</body>
</html>`
    , (err) =>
   err ? console.error(err) : console.log('Success!')
 )
})