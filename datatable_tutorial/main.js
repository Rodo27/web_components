let dataTable
let dataTableIsInitialized = false

const dataTableOptions = {
    //scrollX:"2000px",
    //lengthMenu: [100,150,200],
    columnDefs:[
        {className: "centered", targets:[0,1,3,4,5,6]},
        {orderable: false, targets:[5,6]},
        //{width: "5%", targets: [0]},
        {searchable: false, targets: [0,2,3,4,5,6]}
    ],
    pageLength:10,
    destroy:true,
    language:{
        lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "Ningún usuario encontrado",
        info: "Monstrando de _START_ a _END_ de un total de _TOTAL_ registros",
        infoEmpty: "Ningún usuario encontrado",
        infoFiltered: "(filtrados desde _MAX_ registros totales)",
        search: "Buscar",
        loadingRecords: "Cargando...",
        paginate: {
            fisrt: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior"
        }
    }
}

const initDataTable = async () => {
    
    dataTableIsInitialized ? dataTable.destroy() : null

    await listUsers()

    dataTable =  $("#datatable_users").DataTable(dataTableOptions)
    dataTableIsInitialized = true
}

const listUsers = async() => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await response.json()
        let content = ''
        users.forEach((user, index) => {
            for(let x= 0; x < 500; x++)
            content += 
            ` <tr>
                    <td>${index + 1}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                    <td>${user.company.name}</td>
                    <td><i class="fa-solid fa-check" style="color:green;"></i></td>
                    <td>
                        <button class="btn btn-primary"><i class="fa-solid fa-pencil"></i></button>
                        <button class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            `
        })

        tableBody_users.innerHTML = content

    }catch(e){
        alert(e)
    }
}

window.addEventListener("load", async() =>{
    //await listUsers()
    await initDataTable()
})