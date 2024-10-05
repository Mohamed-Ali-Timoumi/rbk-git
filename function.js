function myFirstFunction() {
    return;
}
undefined
myFirstFunction()
undefined
function myFirstFunction() {
    
}
undefined
myFirstFunction
ƒ myFirstFunction() {
    
}
myFirstFunction()
undefined
function helloWorld() {
    console.log('Hello World')
}

function helloWorld() {
    console.log('Hello World');
    function returnFive() {
        return 5; 
     }
     undefined
     returnFive()
     5
     function helloWorldAgain{}
     VM740:1 Uncaught SyntaxError: Unexpected token '{'Understand this error
     function helloWorldAgain() {
         return 'Hello World Again';
     }
     undefined
     helloWorldAgain()
     'Hello World Again'
     function returnParameter(parameter) {
         return parameter;
     }
     undefined
     returnParameter(1)
     1
     returnParameter('sadok')
     'sadok'
     returnParameter(2)
     2
     returnParameter('Hi')
     'Hi'
     function add(firstNumber,secondNumber) {
        return firstNumber + secondNumber;
    }
    undefined
    add(1,1)
    2
    add(2,2)
    4
    function subtract(firstNumber,secondNumber) {
        return firstNumber/secondNumber;
    }
    undefined
    function subtract(firstNumber,secondNumber) {
        return firstNumber-secondNumber;
    }
    undefined
    subtract(2,1)
    1
    subtract(3,3)
    0
    subtract(1,2)
    -1
    function multiply(firstNumber,secondNumber) {
        return firstNumber*secondNumber;
    }
    undefined
    multiply(25,6)
    150
    function stringLength(string) {
        return string.length;
    }
    undefined
    stringLength('mohamed')
    7
    function concatTwoStrings(firstString,secondString) {
        return firstString+secondString;
    }
    undefined
    concatTwoStrings(hello,world)
    VM1846:1 Uncaught ReferenceError: hello is not defined
        at <anonymous>:1:18
    (anonymous) @ VM1846:1Understand this error
    concatTwoStrings('hello','world')
    'helloworld'
    concatTwoStrings('Cute','Kitty')
    'CuteKitty'
    function concatTwoStrings(firstName,lastName) {
        return firstName+' '+lastName;
    }
    undefined
    function fullName(firstName,lastName) {
        return firstName+' '+lastName;
    }
    undefined
    fullName('benjamin','franklin')
    'benjamin franklin'
    fullName('Steven','Paul')
    'Steven Paul'
    function celsiusToFahrenheit(celsius) {
        return celsius*9/5
    }
    function celsiusToFahrenheit(celsius) {
        return celsius*9/5+32
    }
    undefined
    celsiusToFahrenheit(100)
    212
    celsiusToFahrenheit(30)
    86
    function square(a) {
        return a*a;    
        }
        undefined
        square(9)
        81
    function cube(a) {
            return a*a*a;
        }
        function charAtIndex(string,number) {
            return string.charAt(number)
        }
        undefined
        charAtIndex('hello',2)
        'l'
        charAtIndex('world',0)
        'w'
        function addFourNums(num1,num2,num3,num4) {
            return num1+num2+num3+num4
        }
        undefined
        addFourNums(1,1,1,1)
        4
        addFourNums(1,2,3,4)
        10
        function perimeterRect(width,length) {
            return (length+width)*2
        }
        undefined
        perimeterRect(8,2)
        20
        function areaRect(width,length) {
            return width*length
        }
        undefined
        areaRect(5,4)
        20
        function perimeterTriangle(a,b,c) {
            return a+b+c
        }
        undefined
        perimeterTriangle(7,8,9)
        24
        function areatriangle(base,height) {
            return base*height/2
        }
        undefined
        areatriangle(7,8)
        28
        function tripleArea(width,length) {
            return width*length*3
        }
        undefined
        tripleArea(7,8)
        168
        function perimeterOfCircle(radius) {
            return radius*radius/Math.PI
        }
        undefined
        perimeterOfCircle(5)
        7.957747154594767
        function perimeterOfACircle(radius) {
            return radius*Math.PI*2
        }
        undefined
        perimeterOfACircle(3)
        18.84955592153876
        perimeterOfACircle(5)
        31.41592653589793
        perimeterOfACircle(8)
        50.26548245743669
        function areaOfCircle(radius) {
            return Math.PI*radius**2
        }
        undefined
        areaOfCircle(3)
        28.274333882308138
        areaOfCircle(5)
        78.53981633974483
        areaOfCircle(8)
        201.06192982974676
        function inchesToCentimeters(inches) {
            return inches * 2.54
         }
         undefined
         inchesToCentimeters(3)
         7.62
         inchesToCentimeters(10)
         25.4
         inchesToCentimeters(4)
         10.16
         function centimetersToInches(centimeters) {
            return centimeters / 2.54
         }
         undefined
         centimetersToInches(10)
         3.937007874015748
         centimetersToInches(12)
         4.724409448818897
         centimetersToInches(16)
         6.299212598425196
         function totalSecondsConverter(hours, minutes, seconds) {
            return (hours * 3600) + (minutes * 60) + seconds
         }
         undefined
         totalSecondsConverter(0,3,4)
         184
         totalSecondsConverter(1,0,7)
3607
totalSecondsConverter(1,1,5)
3665
function billTotal(number) {
    let tip = number * 0.15
    let tax = number * 0.09
    return number + tip + tax
 }
 undefined
 billTotal(20)
 24.8
 billTotal(15)
 18.6
 function convertToKilometers(miles) {
    return miles * 1.60934
 }
 undefined
 convertToKilometers(5)
 8.0467
 convertToKilometers(9)
 14.48406
 function square1(x) {
    return x * x;
 }
 undefined
 function square2(x) {
    return x * x;
 }
 undefined
 function square3(x) {
    return x * x;
 }
 function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
 }
 undefined
 capitalize("pizza")
 'Pizza'
 function largest(number1, number2) {
    return number1 > number2 ? number1 : number2
 }
 undefined
 largest(4,16)
 16

       
        








 function isLessThan(num1, num2) {
    return num1 < num2
 }
     
 undefined
 isLessThan(2, 3)
 true
 isLessThan(3, 2)
 false
 isLessThan(3,3)
 false
 function isEqualTo(num1, num2) {
    return num1 === num2
 }
 undefined
 isEqualTo(3,3)
 true
 isEqualTo(3,2)
 false
 function isOldEnoughToDrive(age) {
    return age >= 18
 }
 undefined
 isOldEnoughToDrive(19)
 true
 isOldEnoughToDrive(15)
 false
 function isValidPassword(password) {
    return password.length >= 8 && password !== "hello" && password !== "password"
 }
 undefined
 isValidPassword("passworddali")
 true
 isValidPassword("pass")
 false









 function isTriangle(side1, side2, side3) {
    return (side1 + side2 > side3) && 
           (side1 + side3 > side2) && 
           (side2 + side3 > side1)
 }
 undefined
 isTriangle(3,4,5)
 true
 isTriangle(2,2,8)
 false
 function getMax(number1, number2, number3) {
    return Math.max(number1, number2, number3)
 }
 undefined
 getMax(10,3,12)
 12
 getMax(10,11,21)
 21
 function isLeapYear(year) {
     if (year % 4 === 0) {
         if (year % 100 === 0) {
             return year % 400 === 0; // true if divisible by 400
         }
         return true; // true if divisible by 4 and not by 100
     }
     return false; // false if not divisible by 4
 }
 undefined
 isLeapYear(2000)
 true
                    HOME Worker
                    true
                    true
                    !true
                    false
                    !false
                    true
                    
                    true&&true
true
true&&false
false
false&&true
false
false&&false
false

true || true
true
true || false
true
false || true
true
false || false
false

3>4
false
!(4>3)
false
4<=4&&5<6
true
3 < 4 && 8 < 12 
true
3 === 3 || 4 === 4 
true
3 === 2 || 4 === 4
true



true && (true || false) 
true
false && (true && true) 
false
(true || false) && (true || false) 
true
3 > 2 || (false && true)
true
4 > 5 || (2 < 3 || 3 > 5)
true


function opposite(boolean) {
    return !boolean
 }
 undefined
 opposite(true)
 false
 opposite(false)
 true



 function greaterThan5(num1, num2) {
    return num1 >5  || num2 >5
 } 
 undefined
 greaterThan5(1,6)
 true
 greaterThan5(5,5)
 false
 greaterThan5(1,4)
 false




 function allGreaterThan5(num1, num2) {
    return num1 > 5 && num2 > 5
 }
 undefined
 allGreaterThan5(6,7)
 true
 allGreaterThan5(2,7)
 false



 function largerThan5AndLessThan20(number) {
    return number > 5 && number < 20
 }
 undefined
 largerThan5AndLessThan20(12)
 true
 largerThan5AndLessThan20(21)
 false
 largerThan5AndLessThan20(5)
 false




 function not6AndLessThan10(number) {
    return number !== 6 && number < 10
 }
 undefined
 not6AndLessThan10(6)
 false
 not6AndLessThan10(7)
 true
 not6AndLessThan10(10)
 false

function largerThan3AndLessThan18(num1, num2, num3) {
   return num1 > 3 && num1 < 18 && 
          num2 > 3 && num2 < 18 && 
          num3 > 3 && num3 < 18
}
undefined
largerThan3AndLessThan18(2,4,20)
false
largerThan3AndLessThan18(5,6,7)
true
largerThan3AndLessThan18(3,6,18)
false


function cloudyAndRainy(string1, string2) {
    return string1 === "cloudy" && string2 === "rainy"
 }
 undefined
 cloudyAndRainy("cloudy","rainy")
 true
 cloudyAndRainy("clear","rainy")
 false


 function weatherActivities(weather) {
    if (weather === "rainy") {
        return "hot chocolate"; // Activity for rainy weather
    } else if (weather === "sunny") {
        return "running"; // Activity for sunny weather
    } else {
        return "running"
    }
 }
 undefined
 weatherActivities("rainy")
 'hot chocolate'
 weatherActivities("suuny")
 'running'


































function areValidCredentials(name, password) {
   return name === "Ahmed" && password === "password"
}
undefined
areValidCredentials("hi","password")
false
areValidCredentials("nancy","123")
false
areValidCredentials("ahmed","password")
false







function findMaxLengthOfThreeWords(string1, string2, string3) {
    // Calculate the lengths of the three strings
    const length1 = string1.length;
    const length2 = string2.length;
    const length3 = string3.length;
    return Math.max(length1, length2, length3);
}
undefined
findMaxLengthOfThreeWords("1234", "12345678", "12345678")
8
findMaxLengthOfThreeWords("hi", "hello", "marhaba") 
7
               
               VarDate
               var animal= 'monkey'
undefined
var monkey = 'animal'
undefined
var x = '15'
undefined
var x = 'ya3ini'
undefined
var ture = ture
undefined
var isTenEven = (10 %2 =0)
var isTenEven = '10 %2 =0'
undefin



var isTenEven = '10 %2 =0'
undefined
var firstName = 'mohamed'
undefined
var lastName ="timoumi"
undefined
var fullName = "firstName+lastName"
undefined
var x ="5"
undefined
x+10
'510'
x
'5'
var x = 17; 
x = (x + 1) / 2; 
x * 4; 
36
var x = 10; 
var y = 5; 
x = (x * 4) - 3; 
x + 17; 
x = x + y; 
x;
42




function counter() {
    x=x+1
}
undefined
function counter() {
    x=x+1
    return (x)
}
undefined
counter()
43
function counter() {
    x=x+1
    return (x)
}
undefined
counter()
44
function counter() {
    x=x+1
    return (x)
}
undefined
counter()
45
function counter() {
    x=x+1
    return (x)
}
undefined
counter()
46
