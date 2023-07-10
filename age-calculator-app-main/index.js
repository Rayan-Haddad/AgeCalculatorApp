function calculate() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Add 1 because months are zero-based
    const currentDay = currentDate.getDate();
  
    const ageyear = document.getElementById("yy");
    const agemonth = document.getElementById("mm");
    const ageday = document.getElementById("dd");
  
    const birthYear = parseInt(ageyear.value);
    const birthMonth = parseInt(agemonth.value);
    const birthDay = parseInt(ageday.value);
  
    let calculatedYear = currentYear - birthYear;
    let calculatedMonth = currentMonth - birthMonth;
    let calculatedDay = currentDay - birthDay;
  
    if (calculatedMonth < 0 || (calculatedMonth === 0 && calculatedDay < 0)) {
      calculatedYear--;
      calculatedMonth = 12 + calculatedMonth;
    }
  
    if (calculatedDay < 0) {
      const daysInPrevMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
      calculatedDay = daysInPrevMonth + calculatedDay;
      calculatedMonth--;
    }
  
    document.getElementById("yyy").innerHTML = calculatedYear;
    document.getElementById("mmm").innerHTML = calculatedMonth;
    document.getElementById("ddd").innerHTML = calculatedDay;
  }
  