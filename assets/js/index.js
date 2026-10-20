fetch('/api/restaurant/overview').then(res => res.json()).then(data => {
    if (data.status === 200) {
        document.getElementById("minute-order").textContent = data.data.prep_minutes
        document.getElementById("menu-ready").textContent = data.data.menu_count
        document.getElementById("service-count").textContent = data.data.service_count
        document.getElementById("rate").textContent = data.data.rating
    }
    else {
        console.log(data)
    }
})
fetch('/api/restaurant/signature').then(res => res.json()).then(data => {
    if (data.status === 200) {
        data.data.list.forEach(element => {
            console.log(element.id)
        });
    } else {
        console.log(data)
    }
})