/*create a file named "secondYear.JS"
See line 12 in the HTML doc, you pasted
make sure the name is the same.
*/


const SCORE_OUT_OF_10 = 0.1;
const SCORE_OUT_OF_15 = 0.15;
const SCORE_OUT_OF_20 = 0.2;
const SCORE_OUT_OF_25 = 0.25;
const SCORE_OUT_OF_30 = 0.3;
const SCORE_OUT_OF_40 = 0.4;


//calculate score out of 10
function calculate_final_score_out_of_10 (){

    
    var percentage = parseFloat(document.getElementById('percentage').value);

    var finalPercentage = percentage * SCORE_OUT_OF_10;

    console.log (finalPercentage);

    return finalPercentage;
}


//calculate score out of 15
function calculate_final_score_out_of_15(){

    var percentage = parseFloat(document.getElementById('percentage').value);

    var finalScore = percentage * SCORE_OUT_OF_15;

    console.log (finalScore); 

    return finalScore;
}

//calculate score of 20
function calculate_final_score_out_of_20(){

    var percentage = parseFloat(document.getElementById('percentage').value);

    var finalScore = percentage * SCORE_OUT_OF_20;

    console.log (finalScore); //displays the score to console, this was done to test this function

    return finalScore;
}

//calculate score out of 25
function calculate_final_score_out_of_25(){

    var percentage = parseFloat(document.getElementById('percentage').value);

    var finalScore = percentage * SCORE_OUT_OF_25;

    console.log (finalScore); 

    return finalScore;
}

//calculate score out of 30
function calculate_final_score_out_of_30(){

    var percentage = parseFloat(document.getElementById('percentage').value);

    var finalScore = percentage * SCORE_OUT_OF_30;

    console.log (finalScore); 

    return finalScore;
}

//calculate score out of 40
function calculate_final_score_out_of_40(){

    var percentage = parseFloat(document.getElementById('percentage').value);

    var finalScore = percentage * SCORE_OUT_OF_40;

    console.log (finalScore); 

    return finalScore;
}


//overall calculation

function calculate_final_score(){

    var course = document.querySelector('input[name ="course"]:checked').value;
    var selectedMethod = document.querySelector('input[name = "scale"]:checked').value;
    var finalScore;
    console.log(selectedMethod);

    if (selectedMethod == 10){

        finalScore = calculate_final_score_out_of_10();
        console.log(selectedMethod);
            
    }
    else if (selectedMethod == 15){

        finalScore = calculate_final_score_out_of_15();
    }

    else if (selectedMethod == 20){

        finalScore = calculate_final_score_out_of_20();
    }
    else if (selectedMethod == 25){

        finalScore = calculate_final_score_out_of_25();
    }
    else if (selectedMethod == 30){

        finalScore = calculate_final_score_out_of_30();
    }
    else if (selectedMethod == 40){

        finalScore = calculate_final_score_out_of_40();
    }
    alert('Your score in ' +course +' is ' +finalScore.toFixed(1) +' / ' +selectedMethod); //concatination 

    
}

//validate percentage is between 0 and 100
//see line 100 in HTML doc

function validatePercentage(){

    var percentage = parseFloat(document.getElementById('percentage').value)

    if (percentage < 0 || percentage > 100 ){

        alert ('Percentage must be between 0 and 100.');
    }  
    else {
             if(percentage){
            
                showStep(4);
             } 
            else {

            alert('Invalid entry or blank');
            
            }        
    }
}

//function to keep track of steps
function showStep (step){

    var steps = document.querySelectorAll('.step');

    for (var i = 0; i< steps.length ;i++){

        steps[i].style.display = 'none';
    }

    document.getElementById('step'+ step).style.display = 'block';
}

//function to validate year is selected
function validateYearOfStudy(){

    var selectedYear = document.querySelector('input[name = "year"]:checked');
    

    if (selectedYear){
        
        selectedYear = selectedYear.value;

      if (selectedYear == "second year"){
            
            showStep(2);
        }
    }
    else{
        alert ('Please select a  year....');
    }
}
//Function to make sure a course is selected
function validateCourse(){

        var selectedCourse = document.querySelector('input[name = "course"]:checked');

        if (selectedCourse){
            showStep(3);
        }
        else{
            alert ('Please select a course ....');
        }
}

//function to go back to previous step
function previousStep(){

    var currentStep = document.querySelector('.step[style*="block"]');
    var currentStepNumber = parseInt(currentStep.id.replace('step',''));
    if(currentStepNumber>1){
        showStep(currentStepNumber - 1);
    }
}

