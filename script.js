let costs = []
function addCost() {
    costs.push(
        {
            name: "",
            amount: 0,
            cost: 0,
            sum: 0
        }
    );
    let costcontainer = document.getElementById("costcontainer");
    let newCost = document.createElement("div");
    newCost.innerHTML = `
        <input id="costname${costs.length}" type="text" placeholder="Name">
        <input id="costamount${costs.length}"  type="number" placeholder="Anzahl">
        <input id="costcost${costs.length}" type="number" placeholder="Kosten">
    `;
    costcontainer.appendChild(newCost);
    
    
}
let sum = 0;
function showCosts() {
    let resultcostcontainer = document.getElementById("resultcostcontainer");
    resultcostcontainer.innerHTML = ``;
    sum = 0;
    for (let index = 0; index < costs.length; index++) {
        
        let costname = document.getElementById("costname" + (index + 1)).value;
        let costamount = Number(document.getElementById("costamount" + (index + 1)).value);
        let costcost = Number(document.getElementById("costcost" + (index + 1)).value);
        
        costs[index].name = costname;
        costs[index].amount = costamount;
        costs[index].cost = costcost;
        costs[index].sum = costs[index].amount * costs[index].cost;
    
        resultcostcontainer.innerHTML += `<div class="cost"><span class="costname">${costs[index].name}</span><span class="costamount">x${costs[index].amount}</span><span class="costcost"> ${costs[index].cost.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})}€ </span><span class="costsum">${costs[index].sum.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})}€</span></div>`;
        sum += costs[index].sum;
    }
    
    document.getElementById("sum").textContent = "Summe " + sum.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "€";
}
