$('.list').click(function (e) {
  탭열기(e.target.dataset.id);
});

// $('.list').click(function (e) {
//   if (e.target == document.querySelectorAll('.tab-button')[0]) {
//     탭열기(0);
//   }
//   if (e.target == document.querySelectorAll('.tab-button')[1]) {
//     탭열기(1);
//   }
//   if (e.target == document.querySelectorAll('.tab-button')[2]) {
//     탭열기(2);
//   }
// });

// for (let i = 0; i < $('.tab-button').length; i++) {
//   $('.tab-button')
//     .eq(i)
//     .click(function () {
//       탭열기(i);
//     });
// }

function 탭열기(숫자) {
  $('.tab-button').removeClass('active');
  $('.tab-content').removeClass('show');
  $('.tab-button').eq(숫자).addClass('active');
  $('.tab-content').eq(숫자).addClass('show');
}

// $('.tab-button')
//   .eq(0)
//   .click(function () {
//     $('.tab-button').removeClass('active');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(0).addClass('active');
//     $('.tab-content').eq(0).addClass('show');
//   });

// $('.tab-button')
//   .eq(1)
//   .click(function () {
//     $('.tab-button').removeClass('active');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(1).addClass('active');
//     $('.tab-content').eq(1).addClass('show');
//   });

// $('.tab-button')
//   .eq(2)
//   .click(function () {
//     $('.tab-button').removeClass('active');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(2).addClass('active');
//     $('.tab-content').eq(2).addClass('show');
//   });
