

const CONSTANT = {
  ROLE: ['EMPLOYEE', 'ADMIN'],
  ENDPOINT: {
    SHOP: {
      CREATE_SHOP: "/createshop",
      LOGIN: '/auth',
      EDIT:'/shopEdit',
      DELETE:'/shopDelete'
    },
    order: {
      NEW_order: "/neworder",
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