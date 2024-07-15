const nextStepBtn = document.querySelectorAll(".next-btn");
const stepTitle = document.querySelector(".step-title");
const blankText = document.querySelector(".blank-text");
const switchBtn = document.querySelectorAll(".switch");
const yearly = document.querySelectorAll(".yearly");
const monthly = document.querySelectorAll(".monthly");
const checkbox = document.querySelectorAll(".checkbox");
const freeMonths = document.querySelectorAll(".free-months");
const monthlyPrice =document.querySelectorAll('.monthly-price')
const yearlyPrice =document.querySelectorAll('.yearly-price')
const summaryBox = document.querySelector('.summary-box');

const nav1 = document.querySelectorAll('.first')
const nav2 = document.querySelectorAll('.second')
const nav3 = document.querySelectorAll('.third')
const nav4 = document.querySelectorAll('.fourth')

const nameInput = document.querySelectorAll('#name');
const emailInput = document.querySelectorAll('#email');
const numberInput = document.querySelectorAll('#number');

const arcadePlan = document.querySelectorAll('.arcade')
const advancedPlan = document.querySelectorAll('.advanced')
const proPlan = document.querySelectorAll('.pro')

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

let step = 3;
let planType = 1;
let yearlyPlan = 0;
let totalPrice = 0;

const planTypes = {
	1: "Arcade",
	2: "Advanced",
	3: "Pro"
};

const monthlyPlanTypePrices = {
	1: 9,
	2: 12,
	3: 15
}
const yearlyPlanTypePrices = {
	1: 90,
	2: 120,
	3: 150
}

const monthlyAddons = {
	"online-service": 1,
	"larger-storage": 2,
	"customizable-profile": 2
}
const yearlyAddons = {
	"online-service": 10,
	"larger-storage": 20,
	"customizable-profile": 20
}

let selectedAddons = [];

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

const disablePlan = () => {
	arcadePlan.forEach(plan => {
		plan.classList.remove('plan-box-active')
	})
	advancedPlan.forEach(plan => {
		plan.classList.remove('plan-box-active')
	})
	proPlan.forEach(plan => {
		plan.classList.remove('plan-box-active')
	})
	planType = 0;
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
		renderSummary();
		managePrevBtn(1);
	} else {
		disableAll();
		mobile5.classList.remove("disable");
		desktop5.classList.remove("disable");
		managePrevBtn(1);
	}
};

const manageInputs = (type) => {
	let error = 0;
	if(type == 'name') {
		nameInput.forEach(input => {
			const errorMsg = input.closest('.input-box').querySelector('.error');
			if(input.value == '') {
			errorMsg.classList.remove('disable')
			input.classList.add('input-error');
			error = 1;
			} else {
			errorMsg.classList.add('disable')
			input.classList.remove('input-error');
			error = 0;
			}
		})
	} else if(type == 'email') {
		emailInput.forEach(input => {
			const errorMsg = input.closest('.input-box').querySelector('.error');
			if(input.value == '') {
			errorMsg.classList.remove('disable')
			input.classList.add('input-error');
			error = 1;
			} else {
			errorMsg.classList.add('disable')
			input.classList.remove('input-error');
			error = 0;
			}
		})
	} else {
		numberInput.forEach(input => {
			const errorMsg = input.closest('.input-box').querySelector('.error');
			if(input.value == '') {
			errorMsg.classList.remove('disable')
			input.classList.add('input-error');
			error = 1;
			} else {
			errorMsg.classList.add('disable')
			input.classList.remove('input-error');
			error = 0;
			}
		})
	}
	return error;

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
		
		let errors = 0;
		if(step==1) {
			if(btn == nextStepBtn[0]) {
				syncInputs(1);
			} else {
				syncInputs(0);
			}
			
			errors += manageInputs('name')
			errors += manageInputs('email')
			errors += manageInputs('number')

			if(errors == 0) {
				step++;
				displayCheck();
			}
		} else if(step == 2) {
			if(planType != 0) {
				step++;
				displayCheck();
			}
		} else {
			step++;
			displayCheck();
		}
	});
});

prevBtns.forEach(btn => {
	btn.addEventListener("click", () => {
		step--;
		displayCheck();
	});
})


arcadePlan.forEach(plan => {
	plan.addEventListener('click', () => {
		disablePlan();
		planType = 1;
		arcadePlan.forEach(arcade => {
			arcade.classList.add('plan-box-active')
		})
	})
})
advancedPlan.forEach(plan => {
	plan.addEventListener('click', () => {
		disablePlan();
		advancedPlan.forEach(arcade => {
			arcade.classList.add('plan-box-active')
		})
		planType = 2;
		console.log(plan)
	})
})
proPlan.forEach(plan => {
	plan.addEventListener('click', () => {
		disablePlan();
		planType = 3;
		proPlan.forEach(arcade => {
			arcade.classList.add('plan-box-active')
		})
	})
})

switchBtn.forEach((btn,index) => {
	btn.addEventListener("click", (e) => {
		const box = checkbox[index]
			if (box.checked) {
				checkbox.forEach(box => {
					yearlyPlan = 1;
					box.checked = true;
				})
				monthly.forEach(monthly => {
					
					monthly.classList.remove("frequency-active");
				})
				yearly.forEach(yearly => {

					yearly.classList.add("frequency-active");
				})
				freeMonths.forEach((month) => {
					month.classList.remove("hide");
				});
				monthlyPrice.forEach(price => {
					price.classList.add("disable")
				})
				yearlyPrice.forEach(price => {
					price.classList.remove("disable")
				})
			} else {
				checkbox.forEach(box => {
					yearlyPlan = 0;
					box.checked = false;
				})
				yearly.forEach(yearly => {

					yearly.classList.remove("frequency-active");
				})
				monthly.forEach(monthly => {

					monthly.classList.add("frequency-active");
				})
				freeMonths.forEach((month) => {
					month.classList.add("hide");
				});
				monthlyPrice.forEach(price => {
					price.classList.remove("disable")
				})
				yearlyPrice.forEach(price => {
					price.classList.add("disable")
				})
			}
		})
	});

	const updateAddons = (addon, isChecked) => {
		if (isChecked) {
		  selectedAddons.push(addon);
		  
		} else {
		  selectedAddons = selectedAddons.filter(item => item !== addon);
		}
	  };

	  const syncAddons = () => {
		const checkboxes = document.querySelectorAll('.online-service, .larger-storage, .customizable-profile');
		checkboxes.forEach(checkbox => {
		  checkbox.checked = selectedAddons.includes(checkbox.className);
		});
	  };
	  
	  // Event listeners dla pól wyboru dodatków
	  const addonCheckboxes = document.querySelectorAll('.online-service, .larger-storage, .customizable-profile');
	  addonCheckboxes.forEach(checkbox => {
		checkbox.addEventListener('change', (e) => {
		  const addon = e.target.className;
		  updateAddons(addon, e.target.checked, e.target.closest('.addon-box'));
		  syncAddons();
		});
	  });
	  
const renderSummary = () => {
	summaryBox.innerHTML = '';
	totalPrice = 0;

	const summaryDetails = document.createElement('div')
	summaryDetails.classList.add('summary-details')
	const summaryTotal = document.createElement('div')
	summaryTotal.classList.add('summary-total');

	const planTypeDiv = document.createElement('div');
	planTypeDiv.classList.add('plan-type');

	const planTypeNameDiv = document.createElement('div');
	planTypeNameDiv.classList.add('plan-type-name');

	const planTypeNameDivLeft = document.createElement('div');
	planTypeNameDivLeft.classList.add('plan-type-name-left')
	
	const planTypeNameDivRight = document.createElement('div');
	planTypeNameDivRight.classList.add('plan-type-name-right')

	const planTypeName = document.createElement('p');
	const planTypeFrequency = document.createElement('span');


	planTypeName.textContent = planTypes[planType];
	if (yearlyPlan) {
		planTypeFrequency.textContent = " (Yearly)"
	} else {
		planTypeFrequency.textContent = " (Monthly)"
	}

	const planTypeChangeBtn = document.createElement('button');
	planTypeChangeBtn.classList.add('change');
	planTypeChangeBtn.textContent = 'Change';

	
	const price = document.createElement('p');
	price.classList.add('price');
	

	const addonBoxFrequency = document.createElement('span');
			if(yearlyPlan) {
				price.textContent = yearlyPlanTypePrices[planType] + "$"
				totalPrice += yearlyPlanTypePrices[planType]
				addonBoxFrequency.textContent = '/yr'
			} else {
				price.textContent = monthlyPlanTypePrices[planType] + "$"
				totalPrice += monthlyPlanTypePrices[planType]
				addonBoxFrequency.textContent = '/mo'
			}
	price.append(addonBoxFrequency);
	

	const line = document.createElement('hr');
	
	
	
	
	planTypeNameDivLeft.append(planTypeName)
	planTypeName.append(planTypeFrequency)
	planTypeNameDivLeft.append(planTypeChangeBtn)
	planTypeNameDivRight.append(price)
	planTypeNameDiv.append(planTypeNameDivLeft);
	planTypeNameDiv.append(planTypeNameDivRight);
	planTypeDiv.append(planTypeNameDiv)
	summaryDetails.append(planTypeDiv)
	summaryDetails.append(line);
	summaryBox.append(summaryDetails);
	summaryBox.append(summaryTotal);


	if(selectedAddons.length != 0) {
		selectedAddons.forEach(addon => {
			const addonBox = document.createElement('div');
			addonBox.classList.add('addon-box');

			const addonBoxLeft = document.createElement('div');
			const addonBoxLeftText = document.createElement('p');
			addonBoxLeftText.textContent = addon;
			addonBoxLeft.append(addonBoxLeftText);

			const addonBoxRight = document.createElement('div');
			const addonBoxPrice = document.createElement('p');
			
			const addonBoxFrequency = document.createElement('span');
			if (yearlyPlan) {
				addonBoxPrice.textContent = yearlyAddons[addon] + "$";
				addonBoxFrequency.textContent = '/yr';
			} else {
				addonBoxPrice.textContent = monthlyAddons[addon]  + "$";
				addonBoxFrequency.textContent = '/mo';
			}
			addonBoxPrice.classList.add('addon-box-price');
			addonBoxPrice.append(addonBoxFrequency);
			addonBoxRight.append(addonBoxPrice);


			addonBox.append(addonBoxLeft);
			addonBox.append(addonBoxRight);
			summaryDetails.append(addonBox);
		})
	}

		const totalSummaryBox = document.createElement('div');
		totalSummaryBox.classList.add('total-summary-box');

			const totalSummaryBoxLeft = document.createElement('div');
			const totalSummaryBoxLeftText = document.createElement('p');
			totalSummaryBoxLeftText.textContent = 'Total ';
			const totalSummaryBoxFrequency = document.createElement('span');
			
			if (yearlyPlan) {
				totalSummaryBoxFrequency.textContent = "(per year)"
			} else {
				totalSummaryBoxFrequency.textContent = "(per month)"
			}
			totalSummaryBoxLeftText.append(totalSummaryBoxFrequency)
			totalSummaryBoxLeft.append(totalSummaryBoxLeftText)
			totalSummaryBox.append(totalSummaryBoxLeft)
			summaryTotal.append(totalSummaryBox);

			summaryBox.append(summaryTotal);
	
}


document.addEventListener("DOMContentLoaded", displayCheck);
