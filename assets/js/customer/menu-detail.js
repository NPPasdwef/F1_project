const id = window.location.pathname.split('/').pop();
console.log(id);

fetch(`/api/restaurant/menu_detail/${id}`).then(res => res.json()).then(data => {
    if (data.status === 200) {

    }
    else {
        console.log(data)
    }
})