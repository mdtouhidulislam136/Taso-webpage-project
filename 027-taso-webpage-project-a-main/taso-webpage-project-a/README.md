# TASO ry webpage

TASO is a sub-association of the Tampere University of Applied Sciences (TAMK) student body (TAMKO). The majority of the club's members are electrical and automation students

## Description

This project implemented for Taso ry electrical department of Tampere University of Applied Sciences, Finland. This website created with React.js. Mainly this website showing the details of Taso ry. We have to work with the frontend and backend. In this project has eight nav bar and two button for language translate, one login option, two widget. Homepage showing the details of Taso and about membership. There one membership option where people can join Taso as a club member with membership fee. News, Normal user of Taso can read the news from news page. In proceedings and advances there are some rules and details of event, leisure activities. In the contact page we can see all board members of Taso ry with their contact details. Also,Partners page showing all partners of Taso ry. We have added different language in this website one is Finnish and another one is English. Default language is Finnish because most of the Taso electric department student are Finnish. We also added one login option for the admin panel. If someone is a member of Taso, they can login to this website and create a post, delete the post and share it on facebook and Instagram. Only admin can give login access to the valid member of Taso ry. Below of the website there is one feedback option where user can put their feedback. Also members can book a club room and give suggestions.


## Technologies
- VScode
- Firebase
- Git
- Gitlab
- Chrome
- React library
- Node
- React app
- Json
- React translator
- Firebase authentication
- Microsoft team

## Challenges
We have tough challenges with firebase and language translator.

## Features
- Delete news
- Share news
- Feedback
- Login
- Admin
- Membership

## How to use this code...

* First of all, clone the repository
    * git clone https://gitlab.tamk.cloud/tamk-projects/summer-projects/2022/027-taso-webpage-project-a.git

* Open terminal and go to directory
    * cd 027-taso-webpage-project-a
    * cd taso-webpage-project-a
    * npm install

* run the app
    * $ npm start
    * It will open your default browser URL : http://localhost:3000/

## If you want to use your own firebase storage

* Create your Firebase account (on Google) and new project.
    * Firestore
    * Storage
    * Auth
    * Open rule for all > change ```allow read, write: if false;``` to ```allow read, write: if true;```

* Change configuration code
    * open firebase-config.js file from routes folder
    * use your own configure code
    ```firebase-config.js
        apiKey: "AIzaSyDvm0byF5x9rhFi7OaR21-qzrpDETUIwWY",
        authDomain: "tasowebpage.firebaseapp.com",
        projectId: "tasowebpage",
        storageBucket: "tasowebpage.appspot.com",
        messagingSenderId: "822574389840",
        appId: "1:822574389840:web:afdd3fe27781a02e6b4f55",
        measurementId: "G-XPN31K3P4G"
    ```
