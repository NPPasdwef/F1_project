fetch('/api/auth/me').then(res => res.json()).then(data => {
    if (data.status === 200) {
        document.getElementById("cart").classList.remove('d-none')
        document.getElementById("order-status").classList.remove('d-none')
        document.getElementById('history').classList.remove('d-none')
        document.querySelector('[data-role=login]').classList.add('d-none')
    }
})