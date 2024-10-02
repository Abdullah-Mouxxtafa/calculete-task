document.getElementById("calculateBtn").addEventListener("click", calculateAge);

function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    
    if (!isValidDate(day, month, year)) {
        document.getElementById("result").innerText = "Invalid Date";
        return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    
    
    let ageMonths = today.getMonth() - birthDate.getMonth();
    
    
    let ageDays = today.getDate() - birthDate.getDate();

    
    if (ageDays < 0) {
        ageMonths--;
        
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById("result").innerText = ${ageYears} years, ${ageMonths} months, and ${ageDays} days;
}


function isValidDate(day, month, year) {
    const date = new Date(year, month - 1, day);
    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );