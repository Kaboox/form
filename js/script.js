const nextStepBtn = document.querySelectorAll(".next-btn");
const stepTitle = document.querySelector(".step-title");
const blankText = document.querySelector(".blank-text");
const switchBtn = document.querySelector(".switch");
const yearly = document.querySelector(".yearly");
const monthly = document.querySelector(".monthly");
const checkbox = document.querySelector(".checkbox");
const freeMonths = document.querySelectorAll(".free-months");

const mobile1 = document.querySelector(".mobile-1");
const mobile2 = document.querySelector(".mobile-2");
const mobile3 = document.querySelector(".mobile-3");
const mobile4 = document.querySelector(".mobile-4");
const mobile5 = document.querySelector(".mobile-5");

const nextMobile = document.querySelector(".next");
const prevBtnMobile = document.querySelector(".prev-btn-mobile");

let step = 1;

const displayCheck = () => {
	if (step == 1) {
		mobile1.classList.remove("disable");
		mobile2.classList.add("disable");
		mobile3.classList.add("disable");
		mobile4.classList.add("disable");
		mobile5.classList.add("disable");
		managePrevBtn(0);
	} else if (step == 2) {
		mobile2.classList.remove("disable");
		mobile1.classList.add("disable");
		mobile3.classList.add("disable");
		mobile4.classList.add("disable");
		mobile5.classList.add("disable");
		managePrevBtn(1);
	} else if (step == 3) {
		mobile3.classList.remove("disable");
		mobile1.classList.add("disable");
		mobile2.classList.add("disable");
		mobile4.classList.add("disable");
		mobile5.classList.add("disable");
		managePrevBtn(1);
	} else if (step == 4) {
		mobile4.classList.remove("disable");
		mobile1.classList.add("disable");
		mobile2.classList.add("disable");
		mobile3.classList.add("disable");
		mobile5.classList.add("disable");
		managePrevBtn(1);
	} else {
		mobile5.classList.remove("disable");
		mobile1.classList.add("disable");
		mobile2.classList.add("disable");
		mobile3.classList.add("disable");
		mobile4.classList.add("disable");
		managePrevBtn(1);
	}
};

const managePrevBtn = (mode) => {
	if (mode == 1) {
		prevBtnMobile.classList.remove("disable");
		nextMobile.style.justifyContent = "space-between";
	} else {
		prevBtnMobile.classList.add("disable");
		nextMobile.style.justifyContent = "flex-end";
	}
};

nextStepBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		step++;
		displayCheck();
	});
});

prevBtnMobile.addEventListener('click', () => {
    step--;
    displayCheck();
})

switchBtn.addEventListener("click", (e) => {
	if (checkbox.checked) {
		monthly.classList.remove("frequency-active");
		yearly.classList.add("frequency-active");
		freeMonths.forEach((month) => {
			month.classList.remove("disable");
		});
	} else {
		yearly.classList.remove("frequency-active");
		monthly.classList.add("frequency-active");
		freeMonths.forEach((month) => {
			month.classList.add("disable");
		});
	}
});

document.addEventListener("DOMContentLoaded", displayCheck);
