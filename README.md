# SCORE

A reactjs website for managing score board on cars. The scores are aggregated in google sheets, and a glide app is available for viewing and searching results on a mobile device

## Features

- reactjs project based on CRA
- google sheets integration
- glodeapps.com template for integration with sheets data

## Getting Started

### Install

```
git clone https://github.com/pdhoward/score
npm i
npm run start
```
- set up the src/config.js file with the necessary credentials and links for google sheets
- an api should be created on your google account, with a link to the sheet products
- you can choose to use the published spreadsheet referenced below, or copy this spreadsheet and set up your own id and url. 

```
export default {
  apiKey: "your google api key",  
  scope: "https://www.googleapis.com/auth/spreadsheets",
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],  
  spreadsheetId: "1tHmdWfer9FYzB-IOx6JK5Bdwd7tVtLzhAYOOV69ypMA",
  url: "https://docs.google.com/spreadsheets/d/1tHmdWfer9FYzB-IOx6JK5Bdwd7tVtLzhAYOOV69ypMA/edit#gid=0"
};
```

### Deploy

 ```
 yarn build
 push to your favorite cloud platform
 Note you will need to update the credentials for your api key, referencing the new url of the deployed app rather than localhost:3000 for CRA testing on your local machine
 ```
 for netlify deploys
 > npm run build
 > netlify deploy

 React Router is used in this application

 In build a folder create a file called _redirects and insert this record

 /*    /index.html  200

 ## References
 use of react and tabletop
 https://github.com/ryanMcNierney/React-GoogleSheets

 deployed site on netlify
 https://5c8bf8b510d97fd6758916ce--reverent-shaw-c772ad.netlify.com/

 simple tutorial using google sheets and react
 https://appendto.com/2018/08/the-simple-stack-a-primer-on-using-react-google-sheets-api/

 form gallery
 https://github.com/josuerojasrojas/form-gallery

 post time
 https://github.com/anvaka/time

 tabletop

 ---
 google sheet and form
 https://github.com/kyritzb/FRC-2018-New-Banking-System

 json 2 sheet
 https://github.com/mindvalley/json2gsheet

 examples running sheet and nodejs - including setting up examples
 includes udpates and bulk appends
 https://github.com/jpillora/node-google-sheets




