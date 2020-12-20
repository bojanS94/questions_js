const questions = document.querySelectorAll('.question');

questions.forEach(function (el) {

    el.addEventListener('click', () => {

        questions.forEach(function (e) {

            if (e !== el) {

                e.classList.remove('show-text');
                e.classList.remove('qHeight');
            }
        });

        el.classList.toggle('show-text');
        el.classList.toggle('qHeight');


    });
});