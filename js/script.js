const nextStepBtn = document.querySelectorAll(".next-btn");
const stepTitle = document.querySelector(".step-title");
const blankText = document.querySelector(".blank-text");
const switchBtn = document.querySelector(".switch");
const yearly = document.querySelector(".yearly");
const monthly = document.querySelector(".monthly");
const checkbox = document.querySelector(".checkbox");
const freeMonths = document.querySelectorAll(".free-months");

const nav1 = document.querySelectorAll('.first')
const nav2 = document.querySelectorAll('.second')
const nav3 = document.querySelectorAll('.third')
const nav4 = document.querySelectorAll('.fourth')

const nameInput = document.querySelectorAll('#name');
const emailInput = document.querySelectorAll('#email');
const numberInput = document.querySelectorAll('#number');

const mobile1 = document.querySelector(".mobile-1");
const mobile2 = document.querySelector(".mobile-2");
const mobile3 = document.querySelector(".mobile-3");
const mobile4 = document.querySelector(".mobile-4");
const mobile5 = document.querySelector(".mobile-5");

const desktop1 = document.querySelector('.desktop-1')
const desktop2 = document.querySelector('.desktop-2')
const desktop3 = document.querySelector('.desktop-3')
const desktop4 = document.querySelector('.desktop-4')
const desktop5 = document.querySelector('.desktop-5')

const next = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".prev-btn");

let step = 1;

const disableAll = () => {
		mobile1.classList.add("disable");
		mobile2.classList.add("disable");
		mobile3.classList.add("disable");
		mobile4.classList.add("disable");
		mobile5.classList.add("disable");
		desktop1.classList.add("disable");
		desktop2.classList.add("disable");
		desktop3.classList.add("disable");
		desktop4.classList.add("disable");
		desktop5.classList.add("disable");
		nav1.forEach(nav1 => {
			nav1.classList.remove('circle-active')
		})
		nav2.forEach(nav2 => {
			nav2.classList.remove('circle-active')
		})
		nav3.forEach(nav3 => {
			nav3.classList.remove('circle-active')
		})
		nav4.forEach(nav4 => {
			nav4.classList.remove('circle-active')
		})
}

const syncInputs = (type) => {
	if(type==0) {
		nameInput[0].value = nameInput[1].value
	emailInput[0].value = emailInput[1].value
	numberInput[0].value = numberInput[1].value
	} else {
		nameInput[1].value = nameInput[0].value
	emailInput[1].value = emailInput[0].value
	numberInput[1].value = numberInput[0].value
	}

}

const displayCheck = () => {
	if (step == 1) {
		disableAll();
		mobile1.classList.remove("disable");
		desktop1.classList.remove("disable");
		nav1.forEach(nav1 => {
			nav1.classList.add('circle-active')
		})
		managePrevBtn(0);
	} else if (step == 2) {
		disableAll();
		mobile2.classList.remove("disable");
		desktop2.classList.remove("disable");
		nav2.forEach(nav2 => {
			nav2.classList.add('circle-active')
		})
		managePrevBtn(1);
	} else if (step == 3) {
		disableAll();
		mobile3.classList.remove("disable");
		desktop3.classList.remove("disable");
		nav3.forEach(nav3 => {
			nav3.classList.add('circle-active')
		})
		managePrevBtn(1);
	} else if (step == 4) {
		disableAll();
		mobile4.classList.remove("disable");
		desktop4.classList.remove("disable");
		nav4.forEach(nav4 => {
			nav4.classList.add('circle-active')
		})
		managePrevBtn(1);
	} else {
		disableAll();
		mobile5.classList.remove("disable");
		desktop5.classList.remove("disable");
		managePrevBtn(1);
	}
};

const manageInputs = (type) => {
	if(type == 'name') {
		nameInput.forEach(input => {
			const errorMsg = input.closest('.input-box').querySelector('.error');
			if(input.value == '') {
			errorMsg.classList.remove('disable')
			input.classList.add('input-error');
			} else {
			errorMsg.classList.add('disable')
			input.classList.remove('input-error');
			}
		})
	} else if(type == 'email') {
		emailInput.forEach(input => {
			const errorMsg = input.closest('.input-box').querySelector('.error');
			if(input.value == '') {
			errorMsg.classList.remove('disable')
			input.classList.add('input-error');
			} else {
			errorMsg.classList.add('disable')
			input.classList.remove('input-error');
			}
		})
	} else {
		numberInput.forEach(input => {
			const errorMsg = input.closest('.input-box').querySelector('.error');
			if(input.value == '') {
			errorMsg.classList.remove('disable')
			input.classList.add('input-error');
			} else {
			errorMsg.classList.add('disable')
			input.classList.remove('input-error');
			}
		})
	}

}

const managePrevBtn = (mode) => {
	if (mode == 1) {
		prevBtns.forEach(btn => {
			btn.classList.remove('disable');
		})
		next.forEach(box => {
			box.style.justifyContent = "space-between";
		})
	} else {
		prevBtns.forEach(btn => {
			btn.classList.add('disable');
		})
		next.forEach(box => {
			box.style.justifyContent = "flex-end";
		})
	}
};

nextStepBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		if(step==1) {
			syncInputs(1);
			manageInputs('name')
			manageInputs('email')
			manageInputs('number')
		}
		
	});
});

prevBtns.forEach(btn => {
	btn.addEventListener("click", () => {
		step--;
		displayCheck();
	});
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
