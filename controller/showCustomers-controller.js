import { customerService } from "../service/customer-service.js";

const createNewLine = (name, email, id) => {
    const lineNewCustomer = document.createElement('tr');
    const content = `<td class="td" data-td>${name}</td>
                    <td>${email}</td>
                    <td>
                        <ul class="tabela__botoes-controle">
                            <li><a href="../html/update_customer.html?id=${id}" class="botao-simples botao-simples--edit">Update</a></li>
                            <li><button class="botao-simples botao-simples--remove" type="button">Remove</button></li>
                        </ul>
                    </td>`;
    lineNewCustomer.innerHTML = content;
    lineNewCustomer.dataset.id = id;
    return lineNewCustomer;
}

const table = document.querySelector('[data-tabela]');

table.addEventListener('click', async (event) => {
    let isRemoveButton = event.target.className == 'botao-simples botao-simples--remove';
    console.log(event.target.className);
    if (isRemoveButton) {
        try {
            const lineCustomer = event.target.closest('[data-id]')
            let id = lineCustomer.dataset.id;
            await customerService.removeCustomer(id)
            //        .then( () => {
            lineCustomer.remove();
            //        });
        }
        catch (error) {
            console.log(error);
            window.location.href = "../html/error.html"
        }

    }
})

const render = async () => {
    try {
        const customerList = await customerService.showCustomers()
        customerList.forEach(element => {
            table.appendChild(createNewLine(element.name, element.email, element.id));
        });
        //    .then(data => {
        //        data.forEach(element => {
        //            table.appendChild(createNewLine(element.name, element.email, element.id));
        //        })});
    }
    catch (error) {
        console.log(error);
        window.location.href = "../html/error.html"
    }

}

render()