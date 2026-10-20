fetch('/api/restaurant/overview', { credentials: 'include', method: 'GET' }).then(res => res.json()).then(data => {
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
fetch('/api/restaurant/signature', { credentials: 'include', method: 'GET' }).then(res => res.json()).then(data => {
    if (data.status === 200) {
        const container = document.getElementById('container-signature')
        const template = document.getElementById('template-signature')
        data.data.list.forEach(element => {
            const clone = template.content.cloneNode(true)
            clone.querySelector('[data-role="image"]').src = element.image
            clone.querySelector('[data-role="image"]').alt = element.name
            clone.querySelector('[data-role="name"]').textContent = element.name
            clone.querySelector('[data-role="category"]').textContent = element.category
            clone.querySelector('[data-role="description"]').textContent = element.description
            clone.querySelector('[data-role="price"]').textContent = `${element.price.toLocaleString('th-TH')} บาท`
            clone.querySelector('[data-role="link"]').href = '/customer'
            container.appendChild(clone)
        });
    } else {
        console.log(data)
    }
})
fetch('/api/restaurant/promotion').then(res => res.json()).then(data => {
    if (data.status === 200) {
        const container = document.getElementById("container-promotion")
        const template = document.getElementById("template-promotion")
        data.data.list.forEach(element => {
            const clone = template.content.cloneNode(true)
            clone.querySelector('[data-role="image-p"]').src = element.image
            clone.querySelector('[data-role="image-p"]').alt = element.name
            clone.querySelector('[data-role="tag-p"]').textContent = element.tag
            clone.querySelector('[data-role="name-p"]').textContent = element.name
            clone.querySelector('[data-role="description-p"]').textContent = element.description
            container.appendChild(clone)
        });

    }
    else {
        console.log(data)
    }
})