//--------------Problem-1-solution-Start-here-----------------------------------------
function calculateMoney(ticketSale) {
  if (0 <= ticketSale) {
    const ticketSold = 120 * ticketSale;
    const expences = 500 + 50 * 8;
    const result = ticketSold - expences;
    return result;
  } else {
    return "Invalid Number";
  }
}
//--------------Problem-1-solution-end-here------------------------------------------
//--------------Problem-2-solution-Start-here-----------------------------------------
function checkName(name) {
  if (typeof name === "string") {
    let x = name.toLowerCase();
    let y = ["a", "e", "i", "o", "u"];
    if (y.includes(x.slice(-1))) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  } else {
    return "Invalid";
  }
}
//--------------Problem-2-solution-end-here------------------------------------------
//--------------Problem-3-solution-Start-here-----------------------------------------
function deleteInvalids(array) {
  if (Array.isArray(array)) {
    for (i = array.length; i >= 0; i--) {
      if (typeof array[i] !== "number" || isNaN(array[i])) {
        array.splice(i, 1);
      }
    }
    return array;
  } else {
    return "Invalid Array";
  }
}
//--------------Problem-3-solution-end-here------------------------------------------
//--------------Problem-4-solution-Start-here-----------------------------------------
function password(obj) {
  if (!obj.name || !obj.birthYear || !obj.siteName) {
    return "Invalid";
  }
  const name = obj.name;
  const birthYear = obj.birthYear.toString();
  if (birthYear.length < 4) {
    return "Invalid";
  }
  const siteName = obj.siteName;
  const result = siteName + "#" + name + "@" + birthYear;
  return result;
}
//--------------Problem-4-solution-end-here------------------------------------------
//--------------Problem-5-solution-Start-here-----------------------------------------
function monthlySavings(array, livingCost) {
  if (Array.isArray(array)) {
    const sallery = [];
    for (a = 0; a < array.length; a++) {
      if (array[a] >= 3000) {
        const tax = array[a] * 0.8;
        sallery.push(tax); // result after subtract 20% of  the value greater than 3000.
      } else {
        sallery.push(array[a]); // if there is no value over 3000.
      }
    }
    //sallery after tax
    let totalSallery = 0;
    for (x = 0; x < sallery.length; x++) {
      totalSallery += sallery[x];
    }
    // total sallery - living cost
    if (typeof livingCost === "number") {
      let savings = totalSallery - livingCost;
      if (savings < 0) {
        return "earn more"; //if savings is less than 0.
      } else {
        return savings; // fianl result.
      }
    } else {
      return "Invalid Input"; //if data type is not number
    }
  } else {
    return "Invalid Input"; //if data type is not Array.
  }
}
//--------------Problem-5-solution-end-here------------------------------------------

