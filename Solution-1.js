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
    return "invalid";
  }
  const name = obj.name;
  const birthYear = obj.birthYear.toString();
  if (birthYear.length !== 4 || isNaN(obj.birthYear)) {
    return "invalid";
  }
  const siteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
  const result = siteName + "#" + name + "@" + birthYear;
  return result;
}
//--------------Problem-4-solution-end-here------------------------------------------
//--------------Problem-5-solution-Start-here-----------------------------------------
function monthlySavings(array, livingCost) {
  if (!Array.isArray(array) || typeof livingCost !== "number") {
    return "invalid input";
  }
  let totalIncome = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 3000) {
      totalIncome += array[i] * 0.8;
    } else {
      totalIncome += array[i];
    }
  }
  const savings = totalIncome - livingCost;
  return savings >= 0 ? savings : "earn more";
}
//--------------Problem-5-solution-end-here------------------------------------------
