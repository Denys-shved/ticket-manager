import $  from 'jquery';


// const headingElement = document.getElementById("main-heading")
// console.log(headingElement.innerHTML)
// let newHeadingText = prompt("Input Text")
// headingElement.innerHTML = newHeadingText
// console.log(headingElement.innerHTML)

// let newHeadingText = prompt("New header:")
// $("#main-heading").text(newHeadingText)

// $("body").append("<p>This new (p)</p>")

// for(let i = 0; i<2; i++){
//     let hobby = prompt("Hobby?")
//     $("body").append("<p>"+ hobby +"</p>")
// }
// for(let i = 0; i<2; i++){
// $(".heading-wrapper").fadeOut(3000)
// $(".heading-wrapper").fadeIn(3000)
// }

// Просто додаємо клас, і CSS заанімує все плавно!
// $('#main-heading').addClass('centered');

// $('#main-heading').animate({
//   fontSize: '48px',
//   opacity: 0.8,
//   marginLeft: '50px'
// }, 3000);
// $("h1").text("This will fade out").fadeOut(3000).fadeIn(3000)
// JS
// $(".heading-wrapper").slideUp(3000)
// $(".heading-wrapper").slideDown(3000)

// $(".heading-wrapper").fadeOut(3000)
// $(".heading-wrapper").fadeIn(3000)

// const headingWrapper = document.querySelector('.heading-wrapper');

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     // Якщо елемент з'явився у зоні видимості
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//       observer.unobserve(entry.target); // Припиняємо стежити, щоб анімація спрацювала лише один раз
//     }
//   });
// }, {
//   threshold: 0.2 // Елемент вважається поміченим, коли видно хоча б 20% його висоти
// });

// if (headingWrapper) {
//   observer.observe(headingWrapper);
// }

// $('.heading-wrapper').hide().slideDown(1000);

// const greeting = "My Friends"
// let headElement = document.getElementById("main-heading")
// // headElement.innerHTML = greeting
// const friends = ["Sania", "Sergiy", "Max", "Den", "Yevhen"]

// for (let i =0; i<friends.length ; i++){
//     const friend = friends[i]
// // $("body").append("<p>"+friend+"</p>")
// $("<p>" + friend + " smells</p>").hide().appendTo("body").delay(i *1000).fadeIn(1000)
// }
// const headerWraepper = document.getElementsByClassName("heading-wrapper")
// $(".heading-wrapper").hide()

// for (let i = 0; i<5; i++){
// $(".heading-wrapper").fadeIn(200).fadeOut(200)
// }

// const baseSpeed = 200
// for (let i = 0; i<5; i++){
//     const currentSpeed = baseSpeed + (i*1000);
//     $(".heading-wrapper").fadeOut(currentSpeed).fadeIn(currentSpeed)
// }

// for (let i = 0; i < 5; i++) {
//   $(".heading-wrapper")
//     .fadeIn(200) // Пауза перед миготінням: 0с, 1с, 2с, 3с, 4с
//     .fadeOut(3000)
//     .delay(5000)    
// }

// $("h1").fadeTo(2000, 0.1)

// const timeUp = function(){
//     alert("Times up!")
// }
// // setTimeout(timeUp, 5000)

// const timeId = setTimeout(timeUp, 5000)
// clearTimeout(timeId)

// let counter = 1
// let printMessage = function(){
//     console.log("Start for " + counter + " seconds");
    
//     if (counter==5){
//         clearInterval(intervalId)
//     }
//     counter++;
// }
// let intervalId = setInterval(printMessage, 5000)

// setTimeout(()=>{
//     clearInterval(intervalId)
// }, 5000)


// let leftOffset = 0
// let moveHeading = function(){
//     $("#heading").offset(
//         {
//             left: leftOffset
//         }
//     )
//     leftOffset ++
//     if(leftOffset>200){
//         leftOffset=0
//     }


// }
// setInterval(moveHeading, 50)
// console.log($("#heading").offset())

// let clickHandler = function(event){
//     console.log("Click " + event.pageX + " " + event.pageY + " this point")
//     }
// $("html").click(clickHandler)

// $("html").mousemove(function(event)
//     {
//         $("#heading").offset({
//             left: event.pageX,
//             top: event.pageY
//         })
//     }
// )

//  let clickHandler = function(event){
//     $("#heading").offset({
//             left: event.pageX,
//             top: event.pageY
//         })
//     }
// $("html").click(clickHandler)

// let delay = 100
// let startLeft = $("#heading").offset().left
// let startTop = $("#heading").offset().top

// let leftOffset = startLeft
// let topOffset = startTop

// let direction = "right"

// let moveHeading = function() {

//     if (direction === "right") {
//         leftOffset++

//         if (leftOffset >= startLeft + 200) {
//             direction = "down"
//         }
//     }

//     else if (direction === "down") {
//         topOffset++

//         if (topOffset >= startTop + 200) {
//             direction = "left"
//         }
//     }

//     else if (direction === "left") {
//         leftOffset--

//         if (leftOffset <= startLeft) {
//             direction = "up"
//         }
//     }

//     else if (direction === "up") {
//         topOffset--

//         if (topOffset <= startTop) {
//             direction = "right"
//         }
//     }

//     $("#heading").offset({
//         left: leftOffset,
//         top: topOffset
//     })
// }

// // setInterval(moveHeading, 10)

// let intervalAnimate = setInterval(moveHeading, delay)


// // const clickAnimate = function(event){
// //     clearInterval(intervalAnimate)
// // }


// const clickAnimate = function(event){
//     clearInterval(intervalAnimate)
//     delay -=10
//     if(delay<10){
//         delay=2
//         $("h1").text("You Win!")
//         return
//     }
//     intervalAnimate = setInterval(moveHeading, delay)

// }

// $("h1").click(clickAnimate)

// const width = 400
// const height = 300

// let getRandomNumber = function(size){
//     return Math.floor(Math.random()*size)
// }

// let target = {
//     x: getRandomNumber(width),
//     y: getRandomNumber(height)
// }

// let clicks = 30

// let getDistance = function(event, target){
//     let diffX = event.offsetX - target.x
//     let diffY = event.offsetY - target.y
//     return Math.sqrt((diffX*diffX) + (diffY*diffY))
// }

// let getDistanceHint = function(distance){
//     if(distance<10){
//         return "Boiling Hot!"
//     }
//     else if(distance<20){
//         return "Realy Hot"
//     }
//     else if(distance<40){
//         return "Hot"
//     }
//     else if(distance<80){
//         return "Warm"
//     }
//     else if(distance<160){
//         return "Cold"
//     }
//     else if(distance<320){
//         return "Realy Cold"
//     }
//     else {
//         return "Freezing!"
//     }
// }



// $("#map").click(function(event){
//     clicks--
//     let distance = getDistance(event, target)
//     let distanceHint = getDistanceHint(distance)
//     $("#distance").text(distanceHint)
    
//     if(distance < 4){
//         alert("Found the treasure in " + clicks + " clicks!")
//         location.reload()
//     }
//     if (clicks<=0){
//         alert("Game over !")
//         location.reload()
//     }
//     $("#clicksNumber").text(clicks)
// })

// const dog = {
//     name: "Pancake",
//     legs: 4,
//     isAwesome: true
// }

// dog.age = 6
// dog.legs = 3

// dog.bark = function(){
//     console.log("Woof! My name " + this.name + " !")
// }
// // console.log(dog.bark())
// // dog.bark()

// const speak = function(){
//     console.log(this.sound + "! my name is " + this.name + "!")
// }

// const cat = {
//     sound: "Miaow",
//     name: "Tisha",
//     speak: speak
// }

// cat.speak()
// dog.sound = "Woof"
// dog.speak = speak

// dog.speak()

// let Car = function(x, y){
//     this.x=x;
//     this.y=y;
// }


// const drawCar = function(car){
//     const carHtml = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9NzPe6GJlaX3cMA36gAAnIWbK8LBRPAPtxkQy9TboxA&s=10">'
//     const carElement = $(carHtml)
//     carElement.css({
//         position: "absolute",
//         left: car.x,
//         top: car.y,
//         width: 150,
//         height: 70
//     })
//     $("body").append(carElement)
// }

// let tesla = new Car(10, 20);
// let reno = new Car(100, 100);

// drawCar(tesla)
// drawCar(reno)

// let Car = function(x=0, y=0, speed=2, distance){
//     this.x=x;
//     this.y=y;
//     this.speed = speed
//     this.distance = distance
//     this.draw()
// }


// Car.prototype.draw = function(){
//     const carHtml = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9NzPe6GJlaX3cMA36gAAnIWbK8LBRPAPtxkQy9TboxA&s=10">'
//     this.carElement = $(carHtml)
//     this.carElement.css({
//         position: "absolute",
//         left: this.x,
//         top: this.y,
//         width: 150,
//         height: 70
//     })
//     $("body").append(this.carElement)
// }

// Car.prototype.moveRight = function(){
//     this.x +=this.speed + Math.sin(4 * this.distance)
    

//     this.carElement.css({
//         left: this.x,
//         top: this.y,
//         distance: this.distance
//     })
// }

// Car.prototype.moveLeft = function(){
//     this.x -=this.speed

//     this.carElement.css({
//         left: this.x,
//         top: this.y
//     })
// }

// Car.prototype.moveUp = function(){
//     this.y -=this.speed

//     this.carElement.css({
//         left: this.x,
//         top: this.y
//     })
// }

// Car.prototype.moveDown = function(){
//     this.y +=this.speed

//     this.carElement.css({
//         left: this.x,
//         top: this.y
//     })
// }


// let tesla = new Car(10, 20, 3, 4);
// let reno = new Car(0, 100, 2, 3);

// // tesla.draw()
// // reno.draw()

// tesla.moveRight()
// const runTesla =  setInterval(()=>{
//     tesla.moveRight()
//     if(tesla.x>=500){
//         clearInterval(runTesla)
//     }        
// }, 21)

// const runReno =  setInterval(()=>{
//     reno.moveRight()
//     if(reno.x>=500){
//         clearInterval(runReno)
//     }        
// }, 21)

// const canvas = document.getElementById("canvas")
// const ctx = canvas.getContext("2d")

// canvas.width = 200
// canvas.height = 200
// ctx.fillRect(100, 0, 50, 50)
// ctx.fillRect(120, 50, 10, 20)
// ctx.fillRect(75, 70, 100, 10)
// ctx.fillRect(90, 80, 70, 70)
// ctx.fillRect(150, 150, 10, 40)
// ctx.fillRect(90, 150, 10, 40)
// ctx.fillStyle ="#ff0000"
// ctx.fillRect(0, 0, 50, 100)
// ctx.fillStyle ="#00ff00"
// ctx.fillRect(50, 0, 50, 100)
// ctx.fillStyle ="#0000ff"
// ctx.fillRect(100, 0, 50, 100)
// ctx.strokeStyle ="#c97676"
// ctx.lineWidth = 4
// ctx.strokeRect(10, 10, 100, 20)
// ctx.beginPath()
// ctx.moveTo(10, 10)
// ctx.lineTo(60, 60)
// ctx.moveTo(60, 10)
// ctx.lineTo(10, 60)
// ctx.stroke()

// ctx.strokeStyle ="#47a341"
// ctx.strokeRect(90, 90, 20, 20)
// ctx.beginPath()
// ctx.moveTo(100, 110)
// ctx.lineTo(100, 130)
// ctx.lineTo(85, 125)
// ctx.moveTo(100, 130)
// ctx.lineTo(115, 125)
// ctx.moveTo(100, 130)
// ctx.lineTo(100, 160)
// ctx.lineTo(90, 190)
// ctx.moveTo(100, 160)
// ctx.lineTo(110, 190)
// ctx.stroke()

// ctx.fillStyle = "SkyBlue"
// ctx.beginPath()
// ctx.moveTo(100, 100)
// ctx.lineTo(100, 60)
// ctx.lineTo(130, 30)
// ctx.lineTo(160, 60)
// ctx.lineTo(160, 100)
// ctx.lineTo(100, 100)
// ctx.fill()

// ctx.lineWidth = 2
// ctx.strokeStyle = "#00ff00"
// ctx.beginPath()
// ctx.arc(50, 50, 20, 0, Math.PI/2, false)
// ctx.stroke()

// ctx.strokeStyle = "#000000"
// ctx.beginPath()
// ctx.arc(100, 50, 20, 0, Math.PI, false)
// ctx.stroke()

// ctx.beginPath()
// ctx.arc(150, 50, 20, 0, Math.PI*3/2, false)
// ctx.stroke()

// ctx.beginPath()
// ctx.arc(25, 50, 20, 0, Math.PI*2, false)
// ctx.stroke()

// const circle = function(x, y, radius, color, filled){
//     ctx.beginPath()
//     ctx.arc(x, y, radius, 0, Math.PI*2, false)
//     ctx.fillStyle = color
//     ctx.strokeStyle = color
//     if (filled){
//         ctx.fill()
//     }
//     else{
//         ctx.stroke()
//     }

// }

// ctx.lineWidth = 4

// ctx.fillStyle="Yellow"
// circle(40, 130, 20, "#ff00ff", 1)

// ctx.strokeStyle="#ff0000"
// circle(40, 130, 10, 0)

// circle(40, 180, 20, "#000000", 0)
// circle(32, 178, 2, "#000000", 0)
// circle(47, 178, 2, "#000000", 0)
// circle(40, 187, 2, "#ff0000", 0)
// circle(40, 230, 30, "#000000", 0)
// circle(40, 217, 2, "#000000", 0)
// circle(40, 232, 2, "#000000", 0)
// circle(40, 247, 2, "#000000", 0)

// let drawSnowman = function(x, y){

//     circle(x, y, 20, "#000000", 0)
//     circle(x-8, y-2, 2, "#000000", 0)
//     circle(x + 7, y - 2, 2, "#000000", 0)
//     circle(x, y + 7, 2, "#ff0000", 0)

//     circle(x, y + 50, 30, "#000000", 0)
//     circle(x, y + 37, 2, "#000000", 0)
//     circle(x, y + 52, 2, "#000000", 0)
//     circle(x, y + 67, 2, "#000000", 0)
// }

// drawSnowman(40, 180)

// drawSnowman(140, 80)

// let points = [[50, 50], [50, 100], [100, 100], [100, 50], [50, 50]]

// let mysteryPoints=[[50, 50], [50, 100], [25, 120], [100, 50], [70, 90], [70, 120], [50, 50]]

// const drawPoints = function(coordinates){
    
//     ctx.beginPath()
//     ctx.moveTo(coordinates[0][0], coordinates[0][1])
//     for(let i = 0; i < coordinates.length; i++){
//         ctx.lineWidth = 1
//         ctx.strokeStyle = "#ae2d2d"
//         ctx.lineTo(coordinates[i][0], coordinates[i][1])
        
//     }
//     ctx.stroke()

//     for (let i = 0; i < coordinates.length; i++){
//         ctx.strokeStyle="#6853a5"
//         ctx.beginPath()
        
//         ctx.arc(coordinates[i][0], coordinates[i][1], 1, 0, Math.PI*2, false)
//         ctx.stroke()

//     } 

    // ctx.beginPath()
    // ctx.moveTo(coordinates[0][0], coordinates[0][1])

    // for (let i = 1; i < coordinates.length; i++) {
    //     ctx.lineTo(coordinates[i][0], coordinates[i][1])
    // }

    // ctx.stroke()

    // // Малюємо точки
    // for (let i = 0; i < coordinates.length; i++) {
    //     ctx.beginPath()
    //     ctx.arc(
    //         coordinates[i][0],
    //         coordinates[i][1],
    //         3,
    //         0,
    //         Math.PI * 2
    //     )
    //     ctx.fill()
    // }
// }

// drawPoints(points)

// drawPoints(mysteryPoints)

// ctx.beginPath()
// ctx.moveTo(10, 10)
// ctx.lineTo(60, 60)
// ctx.moveTo(60, 10)
// ctx.lineTo(10, 60)
// ctx.stroke()

// for(let i = 0; i<8; i++){
//     ctx.fillRect(i*10, i*10, 10, 10)
// }

// $("canvas").mousemove(function (event){
//     ctx.fillStyle = "#ff0000"
//     ctx.beginPath()
//     // ctx.arc(300, 300, 3, Math.PI*2, false)
//     ctx.arc(event.offsetX, event.offsetY, 3, 0, Math.PI*2)
//     ctx.fill()
// })

// Animation

// let position = 0

// setInterval(function(){
//     ctx.clearRect(0,0,200,200)
//     ctx.fillRect(position, 0, 20, 20)

//     position++
//     if(position>200){
//         position=0
//     }
// }, 30)

// let size = 0

// setInterval(function(){
//     ctx.clearRect(0,0,200,200)
//     ctx.fillRect(0,0,size,size)

//     size++
//     if(size>200){
//         size=0
//     }
// }, 30)

// BEE

// const circle = function (x, y, radius, fillCircle){
//     ctx.beginPath()
//     ctx.arc(x, y, radius, 0, Math.PI*2, false)
//     if (fillCircle){
//         ctx.fill()
//     } else {
//         ctx.stroke()
//     }
// }

// const drawBee = function(x, y){
//     ctx.lineWidth = 2
//     ctx.strokeStyle = "#000000"
//     ctx.fillStyle = "#FFD700"

//     circle(x, y, 8, true)
//     circle(x, y, 8, false)
//     circle(x-5, y-11, 5, false)
//     circle(x+5, y-11, 5, false)
//     circle(x-2, y-1, 2, false)
//     circle(x+2, y-1, 2, false)
// }

// let update = function (coordinate){
//     let offset = Math.random()*4 - 2
//     coordinate += offset

//     if (coordinate>200){
//         coordinate=200
//     }
//     if (coordinate<0){
//         coordinate = 0
//     }
//     return coordinate
// }

// let x = 100
// let y =100

// setInterval(function(){
//     ctx.clearRect(0, 0, 200, 200)
//     drawBee(x, y,)
//     x = update(x)
//     y = update(y)
//     ctx.strokeRect(0, 0, 240, 240)
// }, 30)

// BALL

// const Ball = function(){
//     this.x = 10
//     this.y = 20
//     this.xSpeed = -Math.floor(Math.random()*5)
//     this.ySpeed = -Math.floor(Math.random()*5)
// }

// const circle = function(x, y, radius, fillCircle){
//     ctx.beginPath()
//     ctx.arc(x, y, radius, 0, Math.PI*2, false)
//     if (fillCircle){
//         ctx.fill()
//     } else {
//         ctx.stroke()
//     }
// }

// Ball.prototype.draw = function(){
//     circle(this.x, this.y, 3, true)
// }

// Ball.prototype.move = function(){
//     this.x += this.xSpeed
//     this.y += this.ySpeed
// }

// Ball.prototype.checkCollision = function(){
//     if (this.x<0 || this.x>canvas.width){
//         this.xSpeed = - this.xSpeed
//     }
//     if (this.y<0 || this.y>canvas.height){
//         this.ySpeed = - this.ySpeed
//     }
// }

// // const ball = new Ball()
// let balls = []

// for( let i = 0; i<2; i++){
//     balls[i] = new Ball()
// }

// console.log(balls)

// let width = canvas.width
// let height = canvas.height

// setInterval(function(){
//     ctx.clearRect(0, 0,  canvas.width, canvas.height)
// for(let i = 0; i<balls.length; i++)
// {
//     balls[i].draw()
//     balls[i].move()
//     balls[i].checkCollision()
// }
//     ctx.strokeRect(0, 0,  canvas.width, canvas.height)
// }, 24)

// Key down animation

// $("html").mousemove(function(event)
//     {
//         $("#heading").offset({
//             left: event.pageX,
//             top: event.pageY
//         })
//     }
// )

// $("body").keydown(function(){
//     console.log(event.keyCode)
// })

// let keyName = {
//     32: "space",
//     37: "left",
//     38: "up",
//     39: "right",
//     40: "down",
//     13: "enter",
//     16: "shift",
//     17: "ctrl",
//     18: "alt"
// }
// // $("body").keydown(function(){
// //     console.log(keyName[event.keyCode])
// // })

// canvas.width = 200
// canvas.height = 200

// let width = canvas.width
// let height = canvas.height

// const dpr = window.devicePixelRatio

// canvas.width = width * dpr
// canvas.height = height * dpr

// canvas.style.width = width + "px"
// canvas.style.height = height + "px"

// ctx.scale(dpr, dpr)

// const circle = function(x, y, radius, fillCircle){
//     ctx.beginPath()
//     ctx.arc(x, y, radius, 0, Math.PI*2, false)
//     if (fillCircle){
//         ctx.fill()
//     } else {
//         ctx.stroke()
//     }
// }

// const Ball = function(){
//     this.x = width/2
//     this.y = height/2
//     this.xSpeed = 0
//     this.ySpeed = 0
//     this.speed = 5
//     this.radius = 20
// }

// Ball.prototype.move = function(){
//     this.x += this.xSpeed
//     this.y += this.ySpeed

//     if(this.x<0){
//        this.xSpeed = -this.xSpeed
//     } else if(this.x>width){
//         this.xSpeed = -this.xSpeed
//     }
//     if(this.y<0){
//         this.ySpeed = -this.ySpeed
//     } else if(this.y>height){
//         this.ySpeed = -this.ySpeed
//     }

//     if(this.x < this.radius){
//     this.xSpeed = -this.xSpeed
//     } else if(this.x > width - this.radius){
//         this.xSpeed = -this.xSpeed
//     }

//     if(this.y < this.radius){
//         this.ySpeed = -this.ySpeed
//     } else if(this.y > height - this.radius){
//         this.ySpeed = -this.ySpeed
//     }
// }

// Ball.prototype.draw =function(){
//     circle(this.x, this.y, this.radius, true)
// }

// Ball.prototype.setDirection = function(direction){
//     if(direction === "up"){
//         this.xSpeed = 0
//         this.ySpeed = -this.speed
//     } else if(direction === "down"){
//         this.xSpeed = 0
//         this.ySpeed = this.speed
//     } else if(direction === "left"){
//         this.xSpeed = -this.speed
//         this.ySpeed = 0
//     } else if(direction === "right"){
//         this.xSpeed = this.speed
//         this.ySpeed = 0
//     } else if (direction === "stop"){
//         this.xSpeed = 0
//         this.ySpeed = 0
//     }
// }

// Ball.prototype.tumblergear = function(gear){
//     this.speed = speeds[gear]
    
//     if (this.xSpeed > 0) {
//         this.xSpeed = this.speed
//     } else if (this.xSpeed < 0) {
//         this.xSpeed = -this.speed
//     }

//     if (this.ySpeed > 0) {
//         this.ySpeed = this.speed
//     } else if (this.ySpeed < 0) {
//         this.ySpeed = -this.speed
//     }
// }

// Ball.prototype.changeSpeed = function(change){
//     this.speed += change

//     if (this.xSpeed > 0) {
//         this.xSpeed = this.speed
//     } else if (this.xSpeed < 0) {
//         this.xSpeed = -this.speed
//     }

//     if (this.ySpeed > 0) {
//         this.ySpeed = this.speed
//     } else if (this.ySpeed < 0) {
//         this.ySpeed = -this.speed
//     }
// }

// const ball = new Ball()

// const keyActions = {
//     32: "stop",
//     37: "left",
//     38: "up",
//     39: "right",
//     40: "down"
// }

// const speeds = {
//     49: 1,
//     50: 2,
//     51: 3,
//     52: 4,
//     53: 5,
//     54: 6,
//     55: 7,
//     56: 8,
//     57: 9
// }

// const additions = {
//     z: 90,
//     x: 88,
//     67: +1,
//     86: -1
// }


// $("body").keydown(function(event){
//    let direction = keyActions[event.keyCode]
//    ball.setDirection(direction)

//     if (speeds[event.keyCode]) {
//         ball.tumblergear(event.keyCode)
//     }
    
//     if(event.keyCode === additions.z){
//         ball.changeSpeed(1)
//     }
//     if(event.keyCode === additions.x){
//         ball.changeSpeed(-1)
//     }

//     if (event.keyCode === 81) {
//     ball.radius++
//     }

//     if (event.keyCode === 65) {
//         ball.radius--
//     }

//     console.log(event.keyCode)
// })

// setInterval(function(){
//     ctx.clearRect(0, 0, width, height)

    
//     ball.move()
//     ball.draw()

//     ctx.strokeRect(0, 0, width, height)
// }, 10)

// console.log()

// Snake

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const width = canvas.width
const height = canvas.height

const Block = function(col, row){
    this.col = col
    this.row = row
}

const blockSize = 10
const widthInBlock = width / blockSize
const heightInBlock = height / blockSize

const circle = function(x, y, radius, fillCircle){
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI*2, false)
    if (fillCircle){
        ctx.fill()
    } else {
        ctx.stroke()
    }
}

let score = 0

const drawBorder = function(){
    ctx.fillStyle = "#b3aaaa";
    ctx.fillRect(0, 0, width, blockSize);
    ctx.fillRect(0, height-blockSize, width, blockSize);
    ctx.fillRect(0, 0, blockSize, height);
    ctx.fillRect(width-blockSize, 0, blockSize, height)    
}


const drawScore = function(){
    ctx.fillStyle = "#352525";
    ctx.textBaseline = "top";
    ctx.font = "28px Comic Sans MS"
    ctx.textAlign = "left"
    ctx.fillText("Score: " + score, blockSize, blockSize);
}
// drawScore()

const gameOver = function(){
    ctx.font = "60px Courier"
    ctx.fillStyle = "#000000"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("Game Over", width / 2, height / 2)
}



Block.prototype.drawSquare = function(color){
    let x = this.col*blockSize
    let y = this.row*blockSize
    ctx.fillStyle = color
    ctx.fillRect(x, y, blockSize, blockSize)
}

// const simpleBlock = new Block(5, 5)
// simpleBlock.drawSquare("#ff0000")

Block.prototype.drawCircle = function(color){
    let centerX = this.col*blockSize + blockSize/2
    let centerY = this.row*blockSize + blockSize/2
    ctx.fillStyle = color
    circle(centerX, centerY, blockSize/2, true)
}

// const simpleCircle = new Block(4, 3)
// simpleCircle.drawCircle("#00ff00")

Block.prototype.equal = function(otherBlock){
    return this.col === otherBlock.col && this.row === otherBlock.row
}

const Snake = function(){
    this.segments = [
        new Block(7,5),
        new Block(6,5),
        new Block(5,5)
    ]
    this.direction = "right"
    this.nextDirection = "right"
}

Snake.prototype.draw = function(){
    for(let i = 0; i<this.segments.length; i++){
        this.segments[i].drawSquare("#0000ff")
    }
}




Snake.prototype.move = function(){
    let head = this.segments[0]
    let newHead

    this.direction = this.nextDirection

    if(this.direction === "right"){
        newHead = new Block(head.col + 1, head.row)
    } else if (this.direction === "down"){
        newHead = new Block(head.col, head.row + 1)
    } else if (this.direction === "left"){
        newHead = new Block(head.col - 1, head.row)
    } else if (this.direction === "up"){
        newHead = new Block(head.col, head.row - 1)
    }

    if (this.checkCollision(newHead)){
        gameOver()
        return
    }

    this.segments.unshift(newHead)

    if (newHead.equal(apple.position)){
        score++
        apple.move()
    } else {
        this.segments.pop()
    }
}

Snake.prototype.checkCollision = function(head){
    let leftCollision = (head.col === 0)
    let topCollision = (head.row === 0)
    let rightCollision = (head.col === widthInBlock - 1)
    let bottomCollision = (head.row === heightInBlock - 1)

    let wallCollision = leftCollision || topCollision || rightCollision || bottomCollision

    let selfCollision = false

    for(let i = 0; i<this.segments.length; i++){
        if(head.equal(this.segments[i])){
            selfCollision = true
        }
    }

    return wallCollision || selfCollision
}

const direction = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
}

$("body").keydown(function(event){
    let newDirection = direction[event.keyCode]
    if(newDirection !== undefined){
        snake.setDirection(newDirection)
    }
})

Snake.prototype.setDirection = function(newDirection){
    if(this.direction === "up" && newDirection === "down"){
        return
    } else if(this.direction === "right" && newDirection === "left"){
        return
    } else if (this.direction === "down" && newDirection === "up"){
        return
    } else if(this.direction === "left" && newDirection === "right"){
        return
    }
    this.nextDirection = newDirection
}

const Apple = function(){
    this.position = new Block(10, 10)
}

Apple.prototype.draw = function(){
    this.position.drawCircle("#71ff71")
}

Apple.prototype.move = function(){
    let randomCol = Math.floor(Math.random()*(widthInBlock - 2)) + 1
    let randomRow = Math.floor(Math.random()*(heightInBlock - 2)) + 1
    this.position = new Block(randomCol, randomRow)
}

const apple = new Apple()
const snake = new Snake()

const intervalId = setInterval(function(){
ctx.clearRect(0, 0, width, height)
snake.move()
snake.draw()

drawBorder()
drawScore()

apple.draw()

// if(score>=100){
//     score=100
//     clearInterval(intervalId)
//     gameOver()
//     return
// }

}, 100)

