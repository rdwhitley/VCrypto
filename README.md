# Vcrypto #
Vcrypto is an application made using React.js that displays the current top 10 cryptocurrencies every 60 seconds and displays their information.

## Vcrypto Layout ##
![flow chart](https://res.cloudinary.com/dedmuznkk/image/upload/v1544470074/Flow.png)

## Demo ##
![demo](https://res.cloudinary.com/dedmuznkk/image/upload/v1544427895/vcrypto-gif.gif)

## Setup ##
This setup assumes you already have Node.js installed if not please download it
```
 git clone https://github.com/rdwhitley/VCrypto.git
 cd VCrypto
 npm install
 npm start
```

## FAQ ##
The App has a few shortcomings that I can see and wish to update in the early stages. Redux would be a better option to manage state as the app grows. Mobile Responsiveness should be given thought also. Also with the introduction of Redux I was thinking of having all diffrent currencies fetched at once then put in the store to avoid unneccsary AJAX calls and load times.

## To-Do ##
* Refactor code for optimal maintanence
* Implement Redux
* Implement styled components
