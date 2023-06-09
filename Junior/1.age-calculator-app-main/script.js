const inputDay = document.querySelector('#inpday');
const inputMonth = document.querySelector('#inpmonth');
const inputYear = document.querySelector('#inpyear');

const outputDay = document.querySelector('#outday');
const outputMonth = document.querySelector('#outmonth');
const outputYear = document.querySelector('#outyear');

const dayError = document.getElementById('d');
const monthError = document.getElementById('m');
const yearError = document.getElementById('y');

const submitButton = document.getElementById('sbmit');

inputDay.value = '';
inputMonth.value = '';
inputYear.value = '';


function checkInputDay()
{
    let value = inputDay.value;
    if(value == "")
    {
        dayError.innerText = "This field is required";
        return false;
    }
    else if(value <1 || value >31)
    {
        dayError.innerText = "Must be a valid day";
        return false;
    }

    else 
    {
        dayError.innerText = "";
        return true;
    }
}

function checkInputMonth()
{
    let value = inputMonth.value;
    if(value == "")
    {
        monthError.innerText = "This field is required";
    }
    else if(value <1 || value >12)
    {
        monthError.innerText = "Must be a valid month";
        return false;
    }

    else 
    {
        monthError.innerText = "";
        return true;
    }
}

function checkInputYear()
{
    let value = inputYear.value;
    let currentYear = new Date().getFullYear();
    if(value == "")
    {
        yearError.innerText = "This field is required";
    }
    else if(value <1 || value > currentYear)
    {
        yearError.innerText = "Must be a past year";
        return false;
    }

    else 
    {
        yearError.innerText = "";
        return true;
    }
}

function calculateAge(birthday)
{
    var birthdate = new Date(birthday);
    var today = new Date();
    console.log(today.getDate());
    var years = today.getFullYear() - birthdate.getFullYear();
    var months = today.getMonth() - birthdate.getMonth();
    var days = today.getDate() - birthdate.getDate();
 // If the birthdate month and day are after the current month and day,
  // subtract one year from the age
    
  if(days < 0 )
    {
        months--;
        days = days+30;
    }
    
        
    if (months < 0 ) 
    {
        years--;
        if (months === 0) {
            months = 11;
        } 
        else {
            months = 12 + months;
        }
        
    }

    outputYear.innerText = years;
    outputMonth.innerText = months;
    outputDay.innerText = days;

}


submitButton.addEventListener('click', function() {
    
    let day = checkInputDay();
    let month = checkInputMonth();
    let year = checkInputYear();

    if(!day || !month || !year)
        return;
    let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
    calculateAge(birthday);
    

})

