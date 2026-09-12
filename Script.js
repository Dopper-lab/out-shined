// MOBILE MENU

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("open");

});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

const navigationLinks =
    navLinks.querySelectorAll("a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

    });

});


// APPOINTMENT DATE SETTINGS

const appointmentDate =
    document.getElementById("appointmentDate");


const today =
    new Date();


const formattedToday =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");


appointmentDate.min =
    formattedToday;


// BOOKING FORM

const bookingForm =
    document.getElementById("bookingForm");


bookingForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const phone =
            document
                .getElementById("phone")
                .value
                .trim();


        const vehicleType =
            document
                .getElementById("vehicleType")
                .value;


        const service =
            document
                .getElementById("service")
                .value;


        const date =
            document
                .getElementById("appointmentDate")
                .value;


        const message =
            document
                .getElementById("message")
                .value
                .trim();


        const formMessage =
            document.getElementById("formMessage");


        // CHECK REQUIRED FIELDS

        if (
            name === "" ||
            phone === "" ||
            vehicleType === "" ||
            service === "" ||
            date === ""
        ) {

            formMessage.textContent =
                "Please fill out all required fields.";

            return;

        }


        // CHECK THAT APPOINTMENT IS SATURDAY OR SUNDAY

        const selectedDate =
            new Date(date + "T12:00:00");


        const day =
            selectedDate.getDay();


        if (
            day !== 0 &&
            day !== 6
        ) {

            formMessage.textContent =
                "Out Shined currently books appointments on Saturdays and Sundays only.";

            return;

        }


        // OUT SHINED PHONE NUMBER

        const businessPhone =
            "2187664598";


        // CREATE TEXT MESSAGE

        const appointmentText =
`Hi Out Shined!

I'd like to request a detailing appointment.

Name: ${name}
Phone: ${phone}

Vehicle Type:
${vehicleType}

Service:
${service}

Preferred Date:
${date}

Vehicle / Appointment Notes:
${message || "No additional notes"}`;


        const smsLink =
            "sms:" +
            businessPhone +
            "?body=" +
            encodeURIComponent(appointmentText);


        formMessage.textContent =
            "Opening your text app...";


        window.location.href =
            smsLink;

    }
);


// AUTOMATIC COPYRIGHT YEAR

document
    .getElementById("currentYear")
    .textContent =
    new Date().getFullYear();