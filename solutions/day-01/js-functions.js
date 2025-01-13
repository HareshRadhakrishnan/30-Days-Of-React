function fullName(fname, lname){
        return(fname+" "+lname)
}

console.log(fullName("Haresh","Radhakrishnan"))
function addNumbers (n1, n2){
    return (n1+n2)
}

console.log(addNumbers(7,5))

const areaOfCircle =(r)=>{
    return((22/7)*r*r)
}

console.log(areaOfCircle(5))

const convertCelciusToFahrenheit=(c)=>((c*(9/5)) + 32)

console.log(convertCelciusToFahrenheit(32))

const calculateBMI =(weight, height)=>{
    return(weight/(height*height))
}

console.log(calculateBMI(62,1.7))

function checkSeason(month){
    month = month.toLowerCase()
    const autumn = ["september", "october", "november"];
    const winter = ["december", "january", "february"];
    const spring = ["march", "april", "may"];
    const summer = ["june", "july", "august"];
    if(autumn.includes(month)){
        return"Autumn"
    }else if(winter.includes(month)){
        return "Winter"
    }else if(spring.includes(month)){
        return "spring"
    }else if(summer.includes(month)){
        return "summer"
    }

}

console.log(checkSeason("september"))

// const solveQuadEquation =(a,b,c)={
//     // const x 
//     // ax2 + bx + c = 0 
//     // a*(x*x) +b*x + c = 0
// }
function printArray(items){
    items.forEach(element => {
        console.log(element)
    });
}

printArray(["december", "january", "february"])


function showDateTime(){
    const now = new Date()
    const date = now.getDate()
    const month = now.getMonth()
    const year = now.getFullYear()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    console.log(`${date}/${month+1}/${year} ${hours}:${minutes}`)
}

showDateTime()

function anyNumberArgs(...args){
    let sum = 0
    args.forEach((item)=>sum+=item)
    console.log(sum)
}

anyNumberArgs(1,10, 5,6,695)

const reverseArray =(array)=>{
    let tempArray = []
    array.map((item)=>{
        tempArray.unshift(item)
    })
    console.log(tempArray)
}

reverseArray(["A","B","C"])

const userIdGenerator =()=>{
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let userId =""
    for(i=0; i<7;i++){
        userId+=alphabets[Math.floor(Math.random()*alphabets.length)]
    }
    return userId
}

console.log(userIdGenerator())

const shuffleArray=(array)=>{
    for(i = array.length-1; i>0; i--){
        const j =  Math.floor(Math.random()*(i));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array)
}
shuffleArray(["A","B", "C", "D"])


const userIdGeneratedByUser =(numOfChar, numOfId)=>{
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let userIds =[];
    for(i=numOfId; i>0; i--){
        console.log(userIds)
        let userId ="" ;
        for(i=0; i<numOfChar;i++){
            userId+=alphabets[Math.floor(Math.random()*(alphabets.length-1))]
        }
        userIds.push(userId)
    }
    
    return userIds
}

console.log(userIdGeneratedByUser(4,2))