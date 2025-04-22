function createList() {
	const fruits = ["Apple", "Banana", "Cherry", "Orange", "Mango"];
	const list = document.createElement("ul");
	for (let fruit of fruits) {
		const listItem = document.createElement("li");
		listItem.innerHTML = fruit;
		list.appendChild(listItem);
	}
	document.body.appendChild(list);
}

function createUserTable() {
	const users = [
		{ name: "Jonas", age: 25 },
		{ name: "Aistė", age: 30 },
		{ name: "Petras", age: 22 },
	];

	const table = document.createElement("table");
	table.id = "userTable";
	const th1 = document.createElement("th");
	const th2 = document.createElement("th");
	th1.innerHTML = "Name";
	th2.innerHTML = "Age";
	table.appendChild(th1);
	table.appendChild(th2);

	for (let i = 0; i < users.length; i++) {
		const tableRow = document.createElement("tr");
		const tableData1 = document.createElement("td");
		const tableData2 = document.createElement("td");
		tableData1.innerHTML = users[i].name;
		tableData2.innerHTML = users[i].age;
		tableRow.appendChild(tableData1);
		tableRow.appendChild(tableData2);
		table.appendChild(tableRow);
	}
	document.body.appendChild(table);
}

document.getElementById("fillTableForm").addEventListener("submit", () => {
	event.preventDefault();
	const table = document.getElementById("formDataTable"); //Get table element

	const name = document.getElementById("name"); //Get the input field
	const age = document.getElementById("age"); //Get the input field

	//Create table rows and data
	const tableRow = document.createElement("tr");
	const td1 = document.createElement("td");
	const td2 = document.createElement("td");
	if (name.value != age.value) {
		//Fill Table data with values from input
		td1.innerHTML = name.value;
		td2.innerHTML = age.value;
		tableRow.appendChild(td1);
		tableRow.appendChild(td2);
		table.appendChild(tableRow);
		name.value = "";
		age.value = "";
	} else {
		alert("Please enter the name and the age of the user");
	}
});
//Event listener for multiplication form
document
	.getElementById("multiplicationDataForm")
	.addEventListener("submit", () => {
		const previousTable = document.getElementById("multiplicationTable");
		if (previousTable != null) previousTable.remove();
		event.preventDefault();
		const numOfHeadings = document.getElementById("width");
		const numOfRows = document.getElementById("height");
		const keyNumber = document.getElementById("number");
		generateMultiplicationTable(
			numOfRows.value,
			numOfHeadings.value,
			keyNumber.value
		);
	});

function generateMultiplicationTable(numOfRows, numOfHeadings, keyNumber) {
	const table = document.createElement("table");
	table.id = "multiplicationTable";
	const thead = document.createElement("thead");
	const tbody = document.createElement("tbody");
	table.appendChild(thead);
	table.appendChild(tbody);
	const headerRow = document.createElement("tr");
	//Creates the table head elements with number from 0 to x
	for (let i = 0; i <= numOfHeadings; i++) {
		const th = document.createElement("th");
		th.innerHTML = i;
		headerRow.appendChild(th);
	}
	thead.appendChild(headerRow);
	//First loop generates the headings for each of the multiplication rows
	for (let i = 1; i <= numOfRows; i++) {
		const tableRow = document.createElement("tr");

		const rowHeading = document.createElement("th");
		rowHeading.innerHTML = i;
		tableRow.appendChild(rowHeading);
		//Generating the body of the table with all the multiplication
		for (let j = 1; j <= numOfHeadings; j++) {
			const td = document.createElement("td");
			td.innerHTML = i * j;
			if (td.innerHTML == keyNumber) {
				//Doing only == and not === since only comparing the value and not the type since inner HTML is a string value
				td.id = "keyNumber";
			}
			tableRow.appendChild(td);
		}
		tbody.appendChild(tableRow);
	}
	document.body.append(table);
}

createList();
createUserTable();
