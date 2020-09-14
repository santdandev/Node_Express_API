# Coding Challenge NodeJs with Typescript

## This is a sample application to show API versioning concepts in Node and Express using Typescript. This application exposes two apis in two different versions v1 and v2 and returns two response in two different format.

## Technologies Used
* NodeJs (latest version: 12.18.3)
* Typescript (latest version: 4.0.2)
* Express (latest version:  4.17.1)
* ts-node-dev (latest version: 1.0.0-pre.62)
* body-parser (latest version: 1.19.0)

## Salient Features
* Typescript has been used with Node and Express
* Added Node command for both development and prod
* Supports API version v1 and v2
* Returns two different format of response in v1 & v2 using regular expression

## How to run this application (after cloning)
* run command `npm i` on the terminal from inside the application to install dependencies
* run command `npm start` to launch the local server. It compiles typescript to javascript in build folder and run the app from build folder
* visit `http://localhost:3000/` on any web browser


## How to run this application in development mode
* run command `npm run develop` to run typescript without generating build folder - for dev mode only



## API EXPOSED

## POST - v1
http://localhost:3000/api/v1/parse
{ 
    "data": "JOHN0000MICHAEL0009994567"
}

## POST - v2
http://localhost:3000/api/v2/parse
{ 
    "data": "JOHN0000MICHAEL0009994567"
}

## REQUEST BODY
{ 
    "data": "JOHN0000MICHAEL0009994567"
}

## RESPOSNSE
{"statusCode":200,"data":{"firstName":"dsddsd","lastName":"dfdfsd","clientid":"fdsfdsfdsf"}}


## Additional GET APIs

## GET
* http://localhost:3000/

## GET
* http://localhost:3000/api/v1

## GET
* http://localhost:3000/api/v2


## sample code to post request and fetch data in javascript
```
const data = { "data": "JOHN0000MICHAEL0009994567" };

fetch('http://localhost:3000/api/v1/parse', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.log(error)
});

```