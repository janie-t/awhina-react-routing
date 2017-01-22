
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('topics').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('topics').insert({id: 1, content: 'https://s-media-cache-ak0.pinimg.com/736x/79/fe/4b/79fe4b7a9773b1e8b1213d58592efab9.jpg', source: 'Author unknown', media_type: 'image', category: 'motivate'}),
        knex('topics').insert({id: 2, content: 'https://s-media-cache-ak0.pinimg.com/736x/0b/30/b4/0b30b4d33fadb7da76f15fc1338c7e57.jpg', source: 'Author unknown', media_type: 'image', category: 'motivate'}),
        knex('topics').insert({id: 3, content: 'http://www.expertrain.com/SiteAssets/BlogPosts/728-900/1kelc2ob635554443244530143.jpg', source: 'Author unknown', media_type: 'image', category: 'motivate'}),
        knex('topics').insert({id: 4, content: 'https://www.youtube.com/embed/H14bBuluwB8', source: 'Angela Lee Duckworth - Psychologist', media_type: 'video', category: 'motivate'}),
        knex('topics').insert({id: 5, content: 'https://s-media-cache-ak0.pinimg.com/originals/2b/0d/fe/2b0dfe5ff7c3bfee77098b54e4405d22.jpg', source: 'Māori proverb', media_type: 'image', category: 'motivate'}),
        knex('topics').insert({id: 6, content: 'Whāia te iti kahurangi ki te tūohu koe me he maunga teitei. Even against challenges and difficulties strive for your dreams and goals.', source: 'Māori proverb', media_type: 'text', category: 'motivate'}),
        knex('topics').insert({id: 7, content: 'https://www.youtube.com/embed/MKXjjpZqZwU', source: 'Steve Wozniak - Co-founder Apple', media_type: 'video', category: 'motivate'}),
        knex('topics').insert({id: 8, content: '“One of the great liabilities of history is that all too many people fail to remain awake through great periods of social change. Every society has its protectors of status quo and its fraternities of the indifferent who are notorious for sleeping through revolutions. Today, our very survival depends on our ability to stay awake, to adjust to new ideas, to remain vigilant and to face the challenge of change.”', source: 'Martin Luther King Jr.', media_type: 'text', category: 'motivate'}),
        knex('topics').insert({id: 9, content: '“Never doubt that a small group of thoughtful, committed people can change the world. Indeed, it is the only thing that ever has.”', source: 'Margaret Mead', media_type: 'text', category: 'motivate'}),
        knex('topics').insert({id: 10, content: '“If you’ve got an idea, start today. There’s no better time than now to get going. That doesn’t mean quit your job and jump into your idea 100% from day one, but there’s always small progress that can be made to start the movement.”', source: 'Kevin Systrom, Instagram', media_type: 'text', category: 'motivate'}),
        knex('topics').insert({id: 11, content: '“It’s not about how many years of experience you have. It’s about the quality of your years of experience.”', source: 'Jacob Cass, Logo of the Day', media_type: 'text', category: 'motivate'}),
        knex('topics').insert({id: 12, content: '“The biggest risk is not taking any risk… In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks.”', source: 'Mark Zuckerberg, Facebook', media_type: 'text', category: 'motivate'}),
        knex('topics').insert({id: 13, content: '"So if you want to gain confidence and self -esteem, you need to be around positive people, those that are nurturing you, those that are encouraging you, those that are believing in you."', source: 'Andrian Teodoro', media_type: 'text', category: 'motivate'}),
        knex('topics').insert({id: 14, content: 'https://www.youtube.com/embed/FLbXrNGVXfE', source: 'Sir Ken Robinson - Education researcher', media_type: 'video', category: 'motivate'}),
        knex('topics').insert({id: 15, content: 'https://www.youtube.com/embed/yDK6llUNJhc?list=PLJB39P6VVAhnSvufijF0gDjBoKsv_uDFg', source: 'Vaughan Rowsell - founder of Vend', media_type: 'video', category: 'motivate'}),
        knex('topics').insert({id: 16, content: 'https://www.youtube.com/embed/Jh3nl0LnHlA', source: 'Mahe Drysdale - Olympic rower', media_type: 'video', category: 'motivate'}),
        knex('topics').insert({id: 17, content: 'https://www.youtube.com/embed/R3pvi2ddi3o', source: 'Sarah Walker - BMX Champion', media_type: 'video', category: 'motivate'}),
        knex('topics').insert({id: 18, content: 'https://www.youtube.com/embed/JFDiTvqdW2A', source: 'Steve Hansen - All Blacks Coach', media_type: 'video', category: 'motivate'}),
        knex('topics').insert({id: 19, content: 'https://www.youtube.com/embed/DspkMmYGXiw?list=PLJB39P6VVAhnSvufijF0gDjBoKsv_uDFg', source: 'Hamish Pinkham - founder Rhythm and Vines', media_type: 'video', category: 'motivate'})
      ]);
    });
};
