const members = document.querySelectorAll(".team-member");
const dots = document.querySelectorAll(".team-dot");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentMember = 0;


function showMember(index) {

    members[currentMember].classList.remove("active");
    dots[currentMember].classList.remove("active");

    currentMember = index;

    members[currentMember].classList.add("active");
    dots[currentMember].classList.add("active");
}

nextBtn.addEventListener("click", () => {

    let next = currentMember + 1;

    if (next >= members.length) {
        next = 0;
    }

    showMember(next);
});

prevBtn.addEventListener("click", () => {

    let previous = currentMember - 1;

    if (previous < 0) {
        previous = members.length - 1;
    }

    showMember(previous);
});

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {
        showMember(index);
    });

});

function toggleFAQ(button) {
    const item = button.closest(".faq-item");
    const icon = button.querySelector(".faq-icon");

    const isOpen = item.classList.toggle("active");

    button.setAttribute("aria-expanded", isOpen);
    icon.textContent = isOpen ? "−" : "+";
}

document.getElementById("contact-form").addEventListener("submit", function () {
    this.reset();
});
