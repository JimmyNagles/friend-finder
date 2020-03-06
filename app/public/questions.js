const surveyQuestions=[{

    number:1,
    question: "video games over drinks?"

},{

    number:2,
    question: "Eating out insted of home made food?"

},{

    number:3,
    question:"Pop over Classic Rock?"
},{

    number:4,
    question:"Reading Over Watching tv?"

},{

    number:5,
    question:"Going to a Park is a great plan?"
},{

    number:6,
    question:"Asian food over American food?"
},
{
    number:7,
    question:"Saving money to travel instead of going out every weekend?"
},{
    number:8,
    question:"Android is better than iOs"
},{
    number:9,
    question:"Latin parties are the best parties?"
},{
    number:10,
    question:"Plant-base diet over Meat?"
}];

x=1

console.log('surveyQuestions', surveyQuestions)





surveyQuestions.forEach(x => {


    



//card div where everything goes -1
const cDiv=$("<div class='card grey darken-1'>")

//card content first thing appended to card div -2
const cContent=$("<div class='card-content white-text'>")
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



const choicesDiv=$('<div class="input-field col s12">')

const select=$('<select>')

choicesDiv.append(select)

const option=$('<option value="" disabled selected>Choose your option</option>')
const optionA=$('<option value="1">Strongly Disagree</option>')
const optionB=$('<option value="2"> Disagree</option>')
const optionC=$('<option value="3">Neither Agree or Disagree</option>')
const optionD=$('<option value="4">Agree</option>')
const optionE=$('<option value="5">Strongly Agree</option>')

select.append(option)
select.append(optionA)
select.append(optionB)
select.append(optionC)
select.append(optionD)
select.append(optionE)

// {<div class="input-field col s12">
// <select>
//   <option value="" disabled selected>Choose your option</option>
//   <option value="1">Option 1</option>
//   <option value="2">Option 2</option>
//   <option value="3">Option 3</option>
// </select>
// <label>Materialize Select</label>
// </div> }


cardAction.append(choicesDiv)

cContent.append(cardAction)


//2 into 1
cDiv.append(cContent)









$("#con").append(cDiv)



});
