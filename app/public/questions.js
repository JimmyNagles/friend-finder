



const surveyQuestions=[{

    number:1,
    question: "video games over drinks?",
    options:[
        "Strongly disagree",
        "Disagree",
        "Neither agree nor disagree",
        "Agree",
        "Strongly Agree"

    ]

},{

    number:2,
    question: "Eating out instead of homemade food?",
    options:[
        "strongly disagree",
        "disagree",
        "Neither agree nor disagree",
        "Agree",
        "Strongly Agree"

    ]
},{

    number:3,
    question:"Pop over Classic Rock?",
    options:[
        "strongly disagree",
        "disagree",
        "Neither agree nor disagree",
        "Agree",
        "Strongly Agree"

    ]
},{

    number:4,
    question:"Reading over watching tv?",
    options:[
        "strongly disagree",
        "disagree",
        "Neither agree nor disagree",
        "Agree",
        "Strongly Agree"

    ]

},{

    number:5,
    question:"Going to a park is a great plan?",
    options:[
        "strongly disagree",
        "disagree",
        "Neither agree nor disagree",
        "Agree",
        "Strongly Agree"

    ]
},{

    number:6,
    question:"Asian food over American food?",
    options:[
        "strongly disagree",
        "disagree",
        "Neither agree nor disagree",
        "Agree",
        "Strongly Agree"

    ]
},
{
    number:7,
    question:"Saving money to travel instead of going out every weekend?",
    options:[
        "strongly disagree",
        "disagree",
        "Neither agree nor disagree",
        "Agree",
        "Strongly Agree"

    ]
},{
    number:8,
    question:"Android is better than iOs",
    options:[
        "strongly disagree",
        "disagree",
        "Neither agree nor disagree",
        "Agree",
        "Strongly Agree"

    ]
},{
    number:9,
    question:"Latin parties are the best parties?",
    options:[
        "strongly disagree",
        "disagree",
        "Neither agree nor disagree",
        "Agree",
        "Strongly Agree"

    ]
},{
    number:10,
    question:"Plant-base diet over Meat?",
    options:[
        "strongly disagree",
        "disagree",
        "Neither agree nor disagree",
        "Agree",
        "Strongly Agree"

    ]
}];

console.log('surveyQuestions', surveyQuestions)
//for each questions
surveyQuestions.forEach(x => {
//card div where everything goes -1
const cDiv=$("<div class='card black' >")
//card content first thing appended to card div -2
const cContent=$("<div class='card-content orange-text darken-4'>")
//tittle second thing appended to card  -3
const cTitle=$("<span class='card-title center'>")
//add text to span div -3b
cTitle.text("Question # "+x.number)
//appends span div to card content 3b into 2
cContent.append(cTitle)
//creates card question 4
const cQuestion=$("<h3>"+x.question+"</h3>")
// 4 into 2
cContent.append(cQuestion)
//appends content to card div
const cardAction= $("<div class='card-action'>")
//choices scroll down div
const choicesDiv=$('<div class="  input-field col s12">')
//where each option goes into
const select=$('<select   >')

    const label=$('<option   value="" disabled selected>Choose your option</option>')
    select.append(label)


for (let i = 0; i < x.options.length; i++) {
    

const options=$('<option    value="'+i+'">'+ x.options[i]+'</option>')

select.append(options)    
}



console.log("------------")

choicesDiv.append(select)

cardAction.append(choicesDiv)

cContent.append(cardAction)
//2 into 1
cDiv.append(cContent)
$("#con").append(cDiv)
});


const user=[];

$("#submit").on("click",function(){

    console.log("btn clicked")
    
        event.preventDefault();
        
       
      const name=  $("#firstName").val().trim();
       const image=  $("#imageLink").val().trim();
    
       user.push({
    
        name,
        image,
        
       })


       const answers=[       ];
       
    
       for (let o = 0; o < 10; o++) {
           
    
           
    
           answers.push($('select')[o].value)
    
        }

        user.push({
            answers
        })
        
        


    
    })

    console.log('user', user)    
    
    