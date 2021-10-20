const init = () => {
    const inputForm = document.querySelector('form')

    inputForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const input = document.querySelector('input#searchByID')

        fetch(`http://localhost:3000/movies/${input.value}`)
            .then(function toJson (response) {
                return response.json();
            })
            .then(function (data) {
                const title = document.querySelector('section#movieDetails h4')
                const summary = document.querySelector('section#movieDetails p')

                title.innerHTML = data.title
                summary.innerHTML = data.summary
                console.log(title, summary)
            })
    })
}


document.addEventListener('DOMContentLoaded', init);



