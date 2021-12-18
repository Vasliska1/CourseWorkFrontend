export async function registration(data) {

    const response = await fetch(`http://localhost:12889/register`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)

    })
    return response;
}

export function login(data) {

    const response = fetch(`http://localhost:12889/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return response;
}

export async function getCity() {

    const response = await fetch('http://localhost:12889/cities',
        {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + localStorage.getItem("auth")
            }
        });
    return await response.json();

}

export async function getDistrictbyCity(city) {

    const response = await fetch('http://localhost:12889/districts/?city=' + city,
        {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + localStorage.getItem("auth"),

            },

        });
    return await response.json();
}

export async function addClient(city, distr, address, human) {

    const response = await fetch('http://localhost:12889/client/?city=' + city + '&district=' + distr + '&address=' + address,
        {
            method: 'POST',
            headers: {

                Authorization: "Bearer " + localStorage.getItem("auth"),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(human)

        });
    return response;
}

