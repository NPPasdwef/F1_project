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
        function short(name, container, template) {
            const oneplate_container = document.getElementById(container)
            const oneplate_template = document.getElementById(template)
            data.data.list.filter(element => element.category === name).forEach(element => {
                const clone = oneplate_template.content.cloneNode(true)
                clone.querySelector('[data-role="image"]').src = element.image
                clone.querySelector('[data-role="tag"]').textContent = element.tag
                clone.querySelector('[data-role="category"]').textContent = element.category
                clone.querySelector('[data-role="name"]').textContent = element.name
                clone.querySelector('[data-role="description"]').textContent = element.description
                clone.querySelector('[data-role="price"]').textContent = `ราคา ${element.price} บาท`

                oneplate_container.appendChild(clone)
            })
        }
        short("อาหารจานเดียว", "oneplate-container", "oneplate-list-template")
        short("กับข้าว", "kab-container", "kab-template")
    }
    else {
        console.log(data)
    }
})