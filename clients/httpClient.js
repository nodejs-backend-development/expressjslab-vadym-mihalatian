const getRequest = async url => {
    console.log(url);
    return fetch(url, {
        headers: {
            Authorization:
                'Bearer 1d8792289ca81986b8e37e160b4eecbe915bf809d2b8d7eb191bfc4d815cf886',
        },
    }).then(response => response.json());
};

async function postRequest(url, method, data = {}) {
    const response = await fetch(url, {
        method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Authorization:
                'Bearer 1d8792289ca81986b8e37e160b4eecbe915bf809d2b8d7eb191bfc4d815cf886',
        },
    }).then(res => res.json());
    return response;
}

module.exports = {
    getRequest,
    postRequest,
};
