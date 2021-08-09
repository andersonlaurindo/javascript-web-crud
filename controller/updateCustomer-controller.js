import { customerService } from "../service/customer-service.js";

(async () => {
    const getURL = new URL(window.location);
    const id = getURL.searchParams.get('id');

    const inputName = document.querySelector('[data-name]');
    const inputEmail = document.querySelector('[data-email]');

    try {
        const data = await customerService.detailsCustomer(id)
        inputName.value = data.name;
        inputEmail.value = data.email;
        //        .then(data => {
        //            inputName.value = data.name;
        //            inputEmail.value = data.email;
        //        });
    }
    catch (error) {
        console.log(error);
        window.location.href = "../html/error.html"
    }

    const form = document.querySelector('[data-form]');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        try {
            await customerService.updateCustomer(id, inputName.value, inputEmail.value)
            //    .then(() => {
            window.location.href = "../html/update_success.html";
            //    });
        }
        catch (error) {
            console.log(error);
            window.location.href = "../html/error.html"
        }
    })

})()