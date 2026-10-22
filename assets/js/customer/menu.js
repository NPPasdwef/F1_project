fetch('/api/restaurant/menu').then(res => res.json()).then(data => {
    if (data.status === 200) {
        const container = document.getElementById("menu-list-container")
        const template = document.getElementById("menu-list-template")
        data.data.list.forEach(element => {
            const clone = template.content.cloneNode(true)
            clone.querySelector('[data-role="images"]').src = element.image
            clone.querySelector('[data-role="category"]').textContent = element.category
            clone.querySelector('[data-role="tag"]').textContent = element.tag
            clone.querySelector('[data-role="menu-id"]').textContent = `เมนูที่ ${element.id} จาก 42`
            clone.querySelector('[data-role="name"]').textContent = element.name
            clone.querySelector('[data-role="description"]').textContent = element.description
            clone.querySelector('[data-role="price"]').textContent = element.price
            container.appendChild(clone)
        });
    }
    else {
        console.log(data)
    }
})