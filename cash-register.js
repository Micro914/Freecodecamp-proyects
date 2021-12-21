function checkCashRegister(price, cash, cid) {
  let differentAmounts = {
    "ONE HUNDRED": 10000,
    "TWENTY": 2000,
    "TEN": 1000,
    "FIVE": 500,
    "ONE": 100,
    "QUARTER": 25,
    "DIME": 10,
    "NICKEL": 5,
    "PENNY": 1
  }
  let changeDue = cash * 100 - price * 100
  let result = {status:'',change:[]}
  for (let i = cid.length - 1; i >= 0; i--) {
    let type = cid[i]
    let amount = 0
    let typeAvailable = type[1] * 100
    while (changeDue >= differentAmounts[type[0]] && typeAvailable >= differentAmounts[type[0]]) {
      typeAvailable -= differentAmounts[type[0]]
      changeDue -= differentAmounts[type[0]]
      amount += differentAmounts[type[0]]
    }
    if (typeAvailable == 0) {
      result.status = "CLOSED"
    } else {
      result.status = "OPEN"
    }
    if (amount > 0) {
      result.change.push([type[0], amount / 100]);
    }
  }
  if (changeDue > 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  } else if (result.status == "CLOSED") {
    result.change = cid;
  }
  return result
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))