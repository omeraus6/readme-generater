// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
//const generateReadme = require("./utils/generateMarkdown")

//const util = require("util");

//const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
const questions = [
    "What's your project title?","What's the description of your project?",
    "What's your project installation?","What's this project usage for?",
    "What's your project license ?","Who are the contributors of this project?",
    "Is there a test included?","What do I do if I have an issue? ",
    "Please enter your GitHub username: ","Please enter your email: "
];

const names=["title","description","installation","usage",
    "license","contributing","tests","questions","username","email"];


const obj={};

function questionmsg(){
  let index = 0;
  const askQuestion = () => {
    inquirer.prompt([{type : "input",name: names[index], message: questions[index]}]).then((data) => {
        console.log(data);
        const object = Object.assign(obj,data);
        console.log(obj);
      index++;
     
      if (index < questions.length && index != 4) {
        askQuestion (); 
      }
      else if(index == 4)
      {
        askQuestion2();
      }

    });
  } 
  const askQuestion2 = () => {
    inquirer.prompt([{type : "list",name: names[index], message: questions[index],
         choices: ["Apache","Academic","GNU","ISC","MIT","Mozilla","Open"]}]).then((data) => {
            console.log(data);
            const object = Object.assign(obj,data);
            console.log(obj);
      index++;

      
    
      if (index < questions.length) {
        askQuestion (); 
      }

    });
  } 
  askQuestion();

}


//const type= ["input","input","input","input",];
     //  .then((data) => {
     //    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
  
     //    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      //      err ? console.log(err) : console.log('Success!')
      // );
   // });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
   questionmsg();
}

// Function call to initialize app
init();

// Declaring the dependencies and variables

//Prompt the user questions to populate the README.md


// Async function using util.promisify 
 
 //async function init() {
   // try {
        // Ask user questions and generate responses
     //   const answers = await promptUser();
       // const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        //await writeFileAsync('./dist/README.md', generateContent);
        //console.log('✔️  Successfully wrote to README.md');
    //}   catch(err) {
      //  console.log(err);
   // }
  //}
  
  //init();  
