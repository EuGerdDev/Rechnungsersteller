let costs = []
function addCost() {
    costs.push(
        {
            name: "",
            amount: 0,
            cost: 0,
            sum: 0,
            status: "active"
        }
    );
    let costcontainer = document.getElementById("costcontainer");
    let newCost = document.createElement("div");
    newCost.innerHTML = `
        <input id="costname${costs.length}" type="text" placeholder="Name" oninput="showCosts()">
        <input id="costamount${costs.length}"  type="number" placeholder="Anzahl" oninput="showCosts()">
        <input id="costcost${costs.length}" type="number" placeholder="Kosten" oninput="showCosts()">
        <button id="deleteCost${costs.length}" class="deleteButton" onclick="deleteCost(${costs.length})">Löschen</button>
    `;
    costcontainer.appendChild(newCost);
    
    
}
let sum = 0;
function showCosts() {
    let resultcostcontainer = document.getElementById("resultcostcontainer");
    let companyInput = document.getElementById("companyInput").value;
    resultcostcontainer.innerHTML = `<div class="cost"><span class="costname">Name</span><span class="costamount">Menge</span><span class="costcost">Eur</span><span class="costsum">Eur</span></div>`;
    sum = 0;
    for (let index = 0; index < costs.length; index++) {
        if(costs[index].status == "active"){
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
    let jetzt = new Date();

    let date = jetzt.toLocaleDateString("de-DE");
    let time = jetzt.toLocaleTimeString("de-DE");

    
    document.getElementById("sum").textContent = "Summe " + sum.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "€";
    document.getElementById("company").textContent = companyInput;
    document.getElementById("time").textContent = date + " " + time;
    }
        
}
function deleteCost(cost) {
    costs[cost - 1].status = "deleted";
    document.getElementById("costname" + cost).style.display = "none";
    document.getElementById("costamount" + cost).style.display = "none";
    document.getElementById("costcost" + cost).style.display = "none";
    document.getElementById("deleteCost" + cost).style.display = "none";
    showCosts();
}
