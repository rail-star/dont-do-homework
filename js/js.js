/*  var userNum = +prompt('Введите число');
var star = '😂';
var answer = '';
var space = '☣';
var spaceNum = 0;
var spaceAnswer = '';
var userNumOld = userNum;

for (var i = 0; i < userNum; i++) {
    for (var k = 0; k < userNumOld; k++) {
        answer = answer + star
    }
    for (var w = 0; w < spaceNum; w++ ) {
        spaceAnswer = spaceAnswer + space
        
    }
    console.log(spaceAnswer + answer  + spaceAnswer )
    userNumOld = userNumOld - 2
    spaceNum++
    answer = ''
    spaceAnswer = ''
} 

 var fruits = ['orange','apple','banana','pear','peach']

console.log('Мне надо купить!')
for(var i = 0 ; i < fruits.length ; i++){
    if(fruits[i] == 'peach'){
        console.log(i + 1 +'.' + fruits[i] +'(Я обожаю персики)')
        
    }else{console.log(i + 1 +'.' + fruits[i] +'(Не так-уж нравится)')
}
    console.log(i + 1 +'.' + fruits[i])

    
} 
var fruits = ['orange','apple','banana','pear','peach']
function babushka(order) {
    for (var i = 0; i < fruits.length; i++) {
        if (fruits[i] == 'peach') {
            console.log(i + 1 + '.' + fruits[i] + '(Я обожаю персики)')

        } else {
            console.log(i + 1 + '.' + fruits[i] + '(Не так-уж нравится)')
        }
        console.log(i + 1 + '.' + fruits[i])
    }
} 
function dedushka(x,y){
    return x + y
}

function sclad(text,arr){
for(var i = 0 ; i < arr.length ; i++){
    if(arr[i] == text){
        return 'В этом масиве есть такой элемент'
    }
}
return 'Нет такого элемента в массиве!'
}
var nums = [1,5,6,7,5,9,11,32,15,75] 


var userNum = +prompt('Введите номер квартиры');

 if(userNum >= 1 && UserNum <= 20){

    alert ('Подьезд первый')

}else if (userNum >= 21 && userNum <= 48){

alert('Второй подьезд')

}
else if (userNum >= 49 && userNum <= 90){

alert('Третий подьезд')

}
else {

alert('Такой подьезд')

} 

 function searchPorch(flat,numPorchs,flatsInOnePorch){

for(var numPorch = 1 ; numPorch <= numPorch ; numPorch++){
        var minInPorchFlat = numPorch * flatsInOnePorch - flatsInOnePorch + 1
        var maxInPorchFlat = numPorch * flatsInOnePorchif(minInPorchFlat <= flat && maxInPorchFlat >= flat) 
        return numPorch
             
            
            }
            }
 


 var john = ['john', 123456]
 var jane = ['jane', 654321]
 var alex = ['alex', 987654]
 
 var users = [john , jane , alex]


 function checkUser(user,baseUser) {
    for(var i = 0 ; baseUser.length ;i++ ){
       if(baseUser[i][0] == user[0] && baseUser[i][1] == user [1]){
           return true
       }
     
 }
 return false
}



var user = prompt('Введите имя!')

var userPass = prompt('Введите пароль!')

var userArr = [user , userPass]

var check = checkUser(userArr,users)

if(check) {
    alert('Вы в системе')
} 

    
 */

