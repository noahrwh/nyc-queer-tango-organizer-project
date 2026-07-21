let selectedPerson = "all";
let selectedCode = "all";


const buttons = document.querySelectorAll(".interviewee");
const quotes = document.querySelectorAll(".quote-card");
const codeSelect = document.querySelector("#code-select");
const resetButton = document.querySelector("#reset-filter");


function filterQuotes() {

    quotes.forEach(quote => {

        const person = quote.dataset.person;
        const codes = quote.dataset.codes.split(" ");

        const matchesPerson =
            selectedPerson === "all" ||
            person === selectedPerson;

        const matchesCode =
            selectedCode === "all" ||
            codes.includes(selectedCode);


        if (matchesPerson && matchesCode) {
            quote.style.display = "block";
        } else {
            quote.style.display = "none";
        }

    });

}


buttons.forEach(button => {

    button.addEventListener("click", () => {

        selectedPerson = button.dataset.person;

        buttons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        filterQuotes();

    });

});


codeSelect.addEventListener("change", () => {

    selectedCode = codeSelect.value;

    filterQuotes();

});


resetButton.addEventListener("click", () => {

    selectedPerson = "all";
    selectedCode = "all";

    codeSelect.value = "all";

    buttons.forEach(btn =>
        btn.classList.remove("active")
    );

    document
        .querySelector('[data-person="all"]')
        .classList.add("active");

    filterQuotes();

});