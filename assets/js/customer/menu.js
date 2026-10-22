fetch('/api/restaurant/menu').then(res => res.json()).then(data => {
    if (data.status === 200) {
        const container = document.getElementById("menu-list-container")
        const template = document.getElementById("menu-list-template")
        data.data.list.forEach(element => {
            const clone = template.content.cloneNode(true)
            document.querySelector('[data-role="images"]').src = element.image
            container.appendChild(clone)
        });
    }
    else {
        console.log(data)
    }
})