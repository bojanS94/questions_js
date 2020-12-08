const questions = document.querySelectorAll('.question');

//loop over btns

// qBtn.forEach(function(btn) {

//   btn.addEventListener('click', function(e) {

//     const question = e.currentTarget.parentElement.parentElement

//     question.classList.toggle('show-text');

//   })
// })



//slectors inside element

questions.forEach(function(question) {

    const qBtn = question.querySelector('.question-btn');

    qBtn.addEventListener("click", function() {

        questions.forEach(function(item) {

            if (item !== question) {

                item.classList.remove('show-text');
            }

        });

        question.classList.toggle('show-text');

    });

});