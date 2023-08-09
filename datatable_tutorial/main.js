let dataTable
let dataTableIsInitialized = false

const initDataTable = async () => {
    
    dataTableIsInitialized ? dataTable.destroy() : null

    await listUsers()

    dataTable =  $("#datatable_users").DataTable({})
    dataTableIsInitialized = true
}

const listUsers = async() => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await response.json()
        let content = ''
        users.forEach((user, index) => {
            content += 
            `
                <tr>
                    <td>${index + 1}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                    <td>${user.company.name}</td>
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