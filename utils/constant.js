

const CONSTANT = {
  ROLE: ['EMPLOYEE', 'ADMIN'],
  ENDPOINT: {
    USER: {
      CREATE_USER: "/createUser",
      LOGIN: '/auth',
      EDIT:'/userEdit',
      DELETE:'/userDelete'
    },
    POST: {
      NEW_POST: "/newpost",
      EDIT: '/edit',
      DELETE:'/delete',
      LIKE:'/like',
      COMMENT:'/comment'
    },
   
    JWT: {
      JWT_SCRET: "SREeBangaram" 
    }
    //   LEAVE:{
    //     DEFAULT:0

    //   }

  }
}
module.exports = CONSTANT;