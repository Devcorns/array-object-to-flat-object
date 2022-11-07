/**
 * @author: prakhar mathur,
 * @decription: "this code is to convert inner array & object in to plain array"
 * date: 07-11-2022
 */

var arr = [1,1,2,3,4,[10,20,30,40,[90,40,1]],50,60,70,[40,50,60],{1:200,2:300,3:100,4:{1:5000,2:6000,3:7000}}];

newArr = [];
function arrSepration(arr) {
    arr.map((item,i)=>{
        if(Array.isArray(item)) {
            //array recursion
            arrSepration(item)
        } else if(item.constructor === Object) {
            //object recursion and get seperate values
            function objSeparation(obj) {
                for(let key of Object.keys(obj)) {
                    
                    if(obj[key].constructor === Object) {
                        console.log(obj[key])
                        objSeparation(obj[key])
                    } else {
                        newArr.push(obj[key])
                    }
                }
            }
            objSeparation(item)
            
        }
        else {
            newArr.push(item)
        }
    })
}

arrSepration(arr)
console.log(newArr)