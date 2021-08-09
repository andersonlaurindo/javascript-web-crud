const showCustomers = () => {
    return fetch(`http://localhost:3000/profile`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Impossible showing the customers');
        });

    /*
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open('GET', 'http://localhost:3000/profile');    
        http.onload = () => {
            if(http.status >= 400){
                reject(JSON.parse(http.response));
            }else{
                resolve(JSON.parse(http.response));
            }
        };
        http.send();    
    });
    return promise;
    */
};

const createCustomer = (name, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(response => {
            if (response.ok) {
                return response.body;
            }
            throw new Error('Impossible creating the customer');
        });
}

const removeCustomer = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Impossible removing the customer');
            }
        });
}

const detailsCustomer = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Impossible showing details about the customer');
        });
}

const updateCustomer = (id, name, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Impossible updating details about the customer')
        });
}

export const customerService = {
    showCustomers,
    createCustomer,
    removeCustomer,
    detailsCustomer,
    updateCustomer
}
