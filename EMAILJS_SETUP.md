# EmailJS Setup Guide

Untuk mengaktifkan fitur Send Message pada form contact, ikuti langkah-langkah berikut:

## 1. Daftar di EmailJS

1. Kunjungi [https://www.emailjs.com/](https://www.emailjs.com/)
2. Buat akun gratis
3. Verifikasi email Anda

## 2. Setup Email Service

1. Di dashboard EmailJS, klik **"Email Services"**
2. Klik **"Add New Service"**
3. Pilih provider email Anda (Gmail, Outlook, dll.)
4. Untuk Gmail:
   - Pilih "Gmail"
   - Login dengan akun Gmail treeprayitno12@gmail.com
   - Authorize EmailJS
5. Copy **Service ID** yang diberikan

## 3. Buat Email Template

1. Klik **"Email Templates"**
2. Klik **"Create New Template"**
3. Setup template dengan parameter berikut:

```
Subject: {{subject}} - New Contact from Portfolio

Hi Bayu,

You have received a new message from your portfolio website:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
Reply to: {{reply_to}}
```

4. Save template dan copy **Template ID**

## 4. Get Public Key

1. Klik **"Account"** di sidebar
2. Copy **Public Key** dari General tab

## 5. Update Environment Variables

1. Buka file `.env` di root project
2. Update dengan credentials Anda:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test Contact Form

1. Restart development server: `npm run dev`
2. Buka website dan test form contact
3. Check email treeprayitno12@gmail.com untuk pesan yang masuk

## Template Parameters yang Tersedia

- `{{from_name}}` - Nama pengirim
- `{{from_email}}` - Email pengirim  
- `{{subject}}` - Subject pesan
- `{{message}}` - Isi pesan
- `{{to_email}}` - Email tujuan (treeprayitno12@gmail.com)
- `{{reply_to}}` - Reply-to email (sama dengan from_email)

## Troubleshooting

- **Error "EmailJS configuration is missing"**: Check file .env dan pastikan semua variable terisi
- **Email tidak masuk**: Check spam folder, pastikan service EmailJS aktif
- **Console error**: Check browser console untuk detail error

## Free Tier Limits

EmailJS free tier memiliki limit:
- 200 emails per bulan
- EmailJS branding di email
- Basic support

Untuk production, pertimbangkan upgrade ke paid plan.
