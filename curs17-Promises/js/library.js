function callback() {
  
}

function getName(callback) {
  var firstName = prompt("First Name")
  var lastName = prompt("Last Name")
  var fullName = undefined

  setTimeout(function() {
   fullName = firstName + ' ' + lastName
   
   if (typeof callback === 'function') {
      callback(fullName)
   } else {
     console.log('callback is not defined or is not a function!!!!')
   }
        
  }, 2000)

}