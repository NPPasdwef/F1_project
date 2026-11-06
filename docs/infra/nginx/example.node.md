# Node.js ผ่าน HTTPS ด้วย Nginx

Nginx รับ HTTPS ที่ Public IP พอร์ต `3000` แล้วส่งต่อไปยัง Node.js ที่ `127.0.0.1:3000` ส่วน phpMyAdmin ใช้พอร์ต `443`

Node.js ต้อง bind เฉพาะ `127.0.0.1` เพื่อให้ใช้พอร์ต `3000` ร่วมกับ Nginx ได้ แก้ใน `index.js`:

```js
app.listen(port, '127.0.0.1', () => {
```

จากนั้น restart แอป Node.js

```bash
set -e
export PUBLIC_IP=$(curl -fsSL ifconfig.me)
export DOMAIN=yourdomain.com

cat > /etc/nginx/conf.d/node.conf <<END
server {
    listen $PUBLIC_IP:3000 ssl;
    server_name $PUBLIC_IP yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
END
nginx -t && systemctl reload nginx
```

> หมายเหตุ: การ bind บน `127.0.0.1` เป็นวิธีที่ปลอดภัยและตรงกับแนวทางที่ framework ใช้ร่วมกับ Nginx/HTTPS ที่อยู่ด้านหน้า
