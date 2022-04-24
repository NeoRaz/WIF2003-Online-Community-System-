let residents = JSON.parse(sessionStorage.getItem('residents')) ?? [{
    name: "Sarah Marzuki",
    phone: "(312) 679-1418",
    email: "sarahmarzuki@mail.com",
    block: "B",
    unit: 32,
    id: 1
},{
    name: "Katherine Elois",
    phone: "(172) 444-3241",
    email: "katherineelois@mail.com",
    block: "C",
    unit: 41,
    id: 2
}]

 add_resident();
 console.log(residents.length);

 function add_resident() { 
    sessionStorage.setItem('residents', JSON.stringify(residents));
    residents.forEach((resident) => {
        const row = document.createElement("tr");
        row.setAttribute("id", `resident_${resident.id}`)

        const data1 = document.createElement("td");
        row.appendChild(data1);

        const span = document.createElement("span");
        span.setAttribute("class","custom-checkbox");
        data1.appendChild(span);

        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", "checkbox2");
        input.setAttribute("name", "options[]");
        input.setAttribute("value", "1");
        span.appendChild(input);

        const label = document.createElement("label");
        label.setAttribute("for", "checkbox2");
        span.appendChild(label);

        const data2 = document.createElement("td");
        data2.append(resident.name);
        row.appendChild(data2);

        const data3 = document.createElement("td");
        data3.append(resident.phone);
        row.appendChild(data3);

        const data4 = document.createElement("td");
        data4.append(resident.email);
        row.appendChild(data4);

        const data5 = document.createElement("td");
        data5.append(resident.block);
        row.appendChild(data5);

        const data6 = document.createElement("td");
        data6.append(resident.unit);
        row.appendChild(data6);

        const data7 = document.createElement("td");
        row.appendChild(data7);

        const anchor1 = document.createElement("a");
        anchor1.setAttribute("href", "demoprofil.html");
        anchor1.setAttribute("class", "edit");
        data7.appendChild(anchor1);

        const italic1 = document.createElement("i");
        italic1.setAttribute("class", "fa fa-pencil");
        italic1.setAttribute("data-toggle", "tooltip");
        italic1.setAttribute("title", "Edit");
        anchor1.appendChild(italic1);

        const anchor2 = document.createElement("a");
        anchor2.setAttribute("href", "#deleteResidentModal");
        anchor2.setAttribute("class", "delete");
        anchor2.setAttribute("data-toggle", "modal");
        data7.appendChild(anchor2);

        const italic2 = document.createElement("i");
        italic2.setAttribute("class", "fa fa-trash");
        italic2.setAttribute("data-toggle", "tooltip");
        italic2.setAttribute("title", "Delete");
        italic2.setAttribute("id", `delete_${resident.id}`);
        italic2.addEventListener("click", (event) => selected_id=parseInt(event.target.id.replace('delete_', '')))
        anchor2.appendChild(italic2);
        data7.appendChild(anchor2);
        
        const body = document.querySelector('tbody');
        body.appendChild(row);
    })
}

function delete_resident() {
    // console.log(residents.length);
    residents = residents.filter((resident) => resident.id !== selected_id);
    sessionStorage.setItem('residents', JSON.stringify(residents));
    // const row = document.querySelector(`#resident_${selected_id}`);
    // row.remove();
    selected_id = null;
    // console.log(residents.length);
}