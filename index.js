// WAP a javascript code to get the DAY from your date of birth.

function getDay()
{
    let dob = document.getElementById("dob").value;
    if(dob == '')
    {
        alert("Please select your date of birth")
    }
    else
    {
        let date = new Date(dob)
        let day = date.getDay()
        let birthday = ""
        switch(day)
        {
            case 0:
                birthday = "Sunday"
                break
            case 1:
                birthday = "Monday"
                break
            case 2:
                birthday = "Tuesday"
                break
            case 3:
                birthday = "Wednesday"
                break
            case 4:
                birthday = "Thursday"
                break
            case 5:
                birthday = "Friday"
                break
            case 6:
                birthday = "Saturday"
                break
            default:
                birthday = "Not a valid day"
        }
        document.getElementById("birthday").innerText = birthday
    }
}