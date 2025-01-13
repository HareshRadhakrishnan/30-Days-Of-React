
const dog ={}
console.log("dog object: ",dog)

dog["name"] ="Raxie"
dog["color"] ="black"
dog["legs"] =5
dog["age"] =6
dog["bark"] = function(){
    return "woof woof"
}

dog['getDogInfo'] = function(){
    return(`I'm ${this.name}. a ${this.age} years old, ${dog.color} dog.`)
}
console.log("dog object: ",dog)
console.log("barks: ", dog.bark())
console.log("info: ", dog.getDogInfo())


const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  let highSkillCount = 0
  let highestSkilledUser = null
  let loggedinCount = 0
  let passScoreCount= 0
  for (let user in users){
    skillLength =users[user].skills.length 
    if(skillLength> highSkillCount){ 
        highSkillCount =skillLength
        highestSkilledUser = user
    }
    if(users[user].isLoggedIn){ 
        loggedinCount+=1
    }
    if(users[user].points >=50){ 
        passScoreCount+=1
    }
  }

  console.log("Highest Skilled User: ", highestSkilledUser)
  console.log("Logged In User Count: ", loggedinCount)
  console.log("Users Equal or More than 50 Score: ", passScoreCount)

  const userDetails ={Amala: {
    email: 'amalapaul1@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }}

  function signUp(newUser){
    for( user of Object.values(users)){
        if(newUser[Object.keys(newUser)].email === user.email){
            console.log("User already has an account. please login")
        }else{
            users[Object.keys(newUser)] = newUser
           
        }
         }
  }



  signUp(userDetails)
  console.log(Object.keys(users))


  const usersV2 = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]

  function signIn(email, password){
    usersV2.forEach((user)=>{

        if(user.email == email && user.password == password){
            console.log("loggedin: ",user.username ) 
             user.isLoggedIn = true 
        }
    })
  }



  signIn("thomas@thomas.com", '123333')

  function rateProduct(productId, userId, rating){
    products.map((product)=>{
        if(product._id === productId){
            product.ratings.push({
                "userId": userId, rate: rating
            })
            console.log(product.ratings)
        }
    })
  }
  function averageRating(productId){
      selectedProduct =   products.find(product => product._id===productId)
      if(selectedProduct){
        let totalRatingSum = 0
        selectedProduct.ratings.map((rating)=>{
        totalRatingSum += rating.rate
      })
      const avgRating = totalRatingSum/selectedProduct.ratings.length
      console.log("Average Rating of the Product is: ", avgRating)
      }else{
        console.log("no product found for given id")
      }
      
  }

  function likeProduct(userId, productId){
        selectedProduct = products.find((product)=>product._id ===productId)
        if(selectedProduct){
                selectedProduct.likes.includes(userId)? selectedProduct.likes.filter((user)=> user!==userId):selectedProduct.likes.push(userId) 
          }else{
            console.log("no product found for given id")
          }
        console.log(selectedProduct.likes)
  }
  rateProduct("hedfcg","jhdfhu", 4.5)
  averageRating("eedfcf")
  likeProduct("fg12cy", "aegfal")