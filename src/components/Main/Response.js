export function getBestPopit() {


    const response =  fetch(`http://localhost:12889/bestPopit`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    })

    return response;
}

export async function addOrder(data) {

    data = {
        "products":
        data
    };
    console.log(JSON.stringify(data));
    const response = await fetch(`http://localhost:12889/orders`, {
        method: 'POST',
        headers: {
            Authorization: "Bearer " + localStorage.getItem("auth"),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

    return await response;
}