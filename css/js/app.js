
// StudyHub - Day 1
// Basic JavaScript interaction for the homepage.

console.log("Welcome to StudyHub!");

const exploreButton = document.querySelector(".primary-button");

if (exploreButton) {
    exploreButton.addEventListener("click", function () {
        console.log("Let's start learning with StudyHub!");
    });
}
