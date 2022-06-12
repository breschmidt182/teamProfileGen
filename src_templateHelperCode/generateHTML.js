const answers = require('../index');

function generateHTML(data) {
    return `
<!DOCTYPE html>
<html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
 </head>
 <body>
   <header>Team Profiles</header>

   <div class="card">
     <img src="img_avatar.png" alt="Avatar" style="width:100%">
     <div class="container">
       <h4><b> ${answers.choices, answers.name}</b></h4>
       <p>${ answers.id, answers.email, answers.officeNumber}</p>
      </div>
    </div>

    <div class="card">
     <img src="img_avatar.png" alt="Avatar" style="width:100%">
     <div class="container">
       <h4><b> ${answers.choices, answers.name}</b></h4>
       <p>${ answers.id, answers.email, answers.github}</p>
      </div>
    </div>

    <div class="card">
     <img src="img_avatar.png" alt="Avatar" style="width:100%">
     <div class="container">
       <h4><b> ${answers.choices, answers.name}</b></h4>
       <p>${ answers.id, answers.email, answers.school}</p>
      </div>
    </div>
 </body>
</html>
    `
}



module.exports = generateHTML;

// ${JSON.stringify(data)} backup if can't make html look nice