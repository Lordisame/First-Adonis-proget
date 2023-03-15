'use strict'

class CustomerController {
 
  test(){
    return "Hello world";
  }

  index ({ view }) {
    const message = "Developed by Artyom"
    return view.render('customer',{ message })
  }

}

module.exports = CustomerController
