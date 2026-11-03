const searchButton = document.getElementById("search");

searchButton.addEventListener("click", function () {
    fetch("superheroes.php")
        .then(function (response) {
            if (!response.ok) {
                throw new Error();
            }

            return response.text();
        })
        .then(alert)
        .catch(function () {
            alert("Unable to retrieve the superheroes. Please try again.");
        });
});