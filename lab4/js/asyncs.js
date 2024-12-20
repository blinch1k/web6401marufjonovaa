document.getElementById("imp-load").addEventListener("click", async (event) => {
    try {
        let responce = await fetch("http://localhost:8000/imp-table", {
            method: "GET"
        });
        if (!responce.ok) {
            throw new Error(`Произошла ошибка: ${responce.status}`);
        }
        let data = await responce.json();
        fillTable(data["data"]);
    } catch(err) {
        alert(err);
    }
});

function fillTable(data) {
    let table = document.getElementById("imp-table");
    let rows = table.rows;
    for (let i = 1; i < rows.length; i++) {
        let ceils = rows[i].children;
        ceils[1].textContent = data[i-1]["count"];
        ceils[2].textContent = data[i-1]["date"].join("; ");
    }
}