
fetch('/api/restaurant/menu').then(res => res.json()).then(data => {
    if (data.status === 200) {

    }
    else {
        console.log(data)
    }
})