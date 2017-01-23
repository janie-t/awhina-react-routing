module.exports = function (knex) {

  return {
    find: function (table, options) {
      return knex(table).select()
    }
  }

}


// function randomMotivation (){
//   return knex('motivate')
//   .select('*')
//   .then(function(rows){
//     var random = rows[Math.floor(Math.random() * rows.length)];
//     return random
//   })
// }
