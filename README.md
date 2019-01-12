# Sales Notification

API to send email for sale/offers for the current season.
API is developed using NodeJs and containerize using Docker 

## Installation
```
git clone https://github.com/MohitSuhane/sales-notification.git
cd sales-notification
```
## For development
From project root run the following run below commands

```
npm i
npm run start
```

```
APP is running on http://localhost:3000/api/
Swagger API:- http://localhost:3000/api/api-docs/
```

## Docker
From project root run the following run below commands

### Build Image
```
docker build -t <your username>/sales-web-app .
```

### Run Image
```
docker run -p 3000:3000 -d <your username>/sales-web-app
```
