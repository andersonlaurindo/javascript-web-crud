import { customerService } from "../service/customer-service.js";

const form = document.querySelector('[data-form]');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = event.target.querySelector('[data-name]').value;
    const email = event.target.querySelector('[data-email]').value;

    try {
        await customerService.createCustomer(name, email)
        //    .then(() => {
        window.location = '../html/create_success.html';
        //    });
    }
    catch (error) {
        console.log(error);
        window.location.href = "../html/error.html"
    }
})