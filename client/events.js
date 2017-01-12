module.exports = function (store) {

  // when a click on #submit is recieved 
  // call a method on store 


  document.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clicked', e.target)

    switch (e.target.id) {
      case 'submit': 
        console.log('you clicked submit')
        // fire a store method here
        // telling the store to update
        break
      case 'hi-button':

        // could pass information from the event.target
        // into the store
        store.changeGreeting(e.target.innerHTML)

    }


  })

  


}
