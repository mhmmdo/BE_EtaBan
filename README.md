# BACKEND Etalase Banua

## Tech Stack
- Node JS : Runtime Environment untuk menjalankan javascript di sisi server.
- Hapi Js : framework Javascript yang dapat menyediakan peluang pengembangan API untuk server, situs web, dan aplikasi proxy HTTP.
- Postgres : sistem manajemen basis data relasional objek (RDBMS) open source yang digunakan untuk penyimpanan data dan data warehouse.
- Bycrypt : fungsi hash kriptografi yang dirancang untuk hashing kata sandi dan penyimpanan yang aman di bagian belakang aplikasi.
- Railway : platform infrastruktur tempat pengguna dapat menyediakan infrastruktur, mengembangkan infrastruktur tersebut secara lokal, dan kemudian melakukan deploy ke cloud.
- Cloudinary : platform manajemen media berbasis cloud yang membantu mengunggah, menyimpan, mengelola, dan mengirimkan konten media digital
- Postman : Tools untuk menguji dan memvalidasi API

## Run Locally

Clone the Project

```bash
git clone https://github.com/mhmmdo/BE_EtaBan.git
```

Setting .env

```bash
#Apabila Dijalankan Di LocalHost

PORT=5000
HOST=localhost

#Token Apikey Untuk API Bamen
ACCESS_TOKEN_KEY=bamen-api
ACCESS_TOKEN_AGE=3600
REFRESH_TOKEN_KEY=bamen-api

#Token Api Key Cloudinary Untuk Media
#Daftar Akun di cloudinary.com untuk API KEY
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

```

Install dependencies

```bash
npm install or npm i
```

CREATE Database to postgresql
- Don't forget to install postgresql on your device!
```bash
npm run migrate
```

Run the server in Development mode

```bash
npm run start:dev
```

## API Documentation

---

### UMKM

#### Get All UMKMs

- URL
  - `/umkms`

- Method
  - `GET`

- Response
```json
{
  "message": "Success",
  "data": [
    {
        "id": "umkm-EwdK_DStrIQ2n-nR",
        "name": "ikan bakar patin",
        "description": "ikan bakar simpang jalan",
        "subdistrict": "kombos",
        "address": "kairagi 1",
        "contact": "080808080808",
        "year": 2024,
        "rating": "1.67",
        "cover_url": "https://res.cloudinary.com/dtkczgmyn/image/upload/v1732551134/.../mrtbk.jpg",
        "owner": "user-jJBzN195E01EUzfP",
        "categories": [
          "makanan",
          "minuman"
        ]
      },
      {
        "id": "umkm-AWSfUOFCZMNmkbN4",
        "name": "Bucket Coffe",
        "description": "Kafe bertema basket, memiliki fasilitas game basket",
        "subdistrict": "Kairagi",
        "address": "Wanea lingkungan 2",
        "contact": "bucketcoffe@gmail.com",
        "year": 2020,
        "rating": "4.67",
        "cover_url": "https://res.cloudinary.com/dtkczgmyn/image/upload/v1731926663/..../%E6%83%A0%E6%AF%94%E5%A3%BD%E9%AF%9B%E9%AD%9A%E7%87%92.jpg",
        "owner": "user-nQmPKJdYBjHl6x-9",
        "categories": [null]
      },
  ]
}
```

#### Get All Products

- URL
  - `/products`

- Method
  - `GET`

- Response
```json
{
  "message": "Success",
  "data": {
    "products": [
      {
        "id": "product-C6zCj6uBH6-mBOV6",
        "name": "Kopi jalan",
        "product_type": "Minuman",
        "description": "Kopi biasa",
        "price": 24000,
        "cover_url": null,
        "umkms_id": "umkm-AWSfUOFCZMNmkbN4",
        "umkm_name": "Bucket Coffe"
      },
      {
        "id": "product-IIQi1if8Ufq0JMb2",
        "name": "Reputation taylor swift bracelet",
        "product_type": "Braclelet",
        "description": "Kombinasi Love putih, hitam",
        "price": 15000,
        "cover_url": "https://res.cloudinary.com/dtkczgmyn/image/upload/v1732552799/..../Reputation%20taylor%20swift%20bracelet.jpg",
        "umkms_id": "umkm-DQelDfLFOeLBwQKu",
        "umkm_name": "Braclish"
      },
    ]
  }
}
```

#### Get All Reviews

- URL
  - `/reviews`

- Method
  - `GET`

- Response
```json
{
  "message": "Success",
  "data": {
    "reviews": [
      {
        "id": "review-ulkt1iShVaJExBN6",
        "name": "Mutii",
        "review": "Mantapp",
        "user_rating": 4,
        "date": "2024-11-18T08:19:51.865Z",
        "umkms_id": "umkm-uiQP-tFCLUqHiRnu",
        "umkm_name": "Whatsapp Cafe"
      },
      {
        "id": "review-xBDHt-ftDvhnlRSY",
        "name": "Jekky",
        "review": "tempat kopi ini mempunyai pemandangan yang sangat bagus dan makanannya juga mempunyai cita rasa yang identik. selain itu saya sangat suka karena kafe ini sesuai dengan hobi saya yaitu bermain basket",
        "user_rating": 5,
        "date": "2024-11-26T05:55:09.936Z",
        "umkms_id": "umkm-AWSfUOFCZMNmkbN4",
        "umkm_name": "Bucket Coffe"
      },
    ]
  }
}
```

## Link Terkait
- [Dokumentasi Frontend](https://github.com/mhmmdo/FE_EtaBan)
