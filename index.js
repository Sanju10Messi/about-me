let hour = new Date().getHours();
let greeting;

// Decide greeting based on time
if(hour < 12){
    greeting = "Good Morning! ☀️";
}else if(hour < 18){
    greeting = "Good Afternoon! 🌤️";
}else{
    greeting = "Good Evening! 🌙"
}

// Showing greeting on page

document.getElementById("greeting").innerText = greeting;