window.onload = () => {

    const regExName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const regExEmail = /^[a-zA-Z0-9._-]+@northeastern\.edu$/;;
    const regExPhone = /\d{3}-?\d{3}-\d{4}$/;
    const regExZip = /^\d{5}$/;
    const form = document.getElementById("my-form");
    const checkbox1 = document.getElementById("checkbox1");
    const selectOption = document.getElementById("selectOption");
    const enableCheckbox = document.getElementById("enableCheckbox");
    const textFieldContainer = document.getElementById("textFieldContainer");
    const textField = document.getElementById("textField");

    selectOption.addEventListener("change", function () {
        enableCheckbox.checked = false;
        textFieldContainer.style.display = "none";
        textField.disabled = true;
        document.getElementById("textField").value = "";
        document.getElementById("error_textField").style.display = "none";
        verify();




    });

    enableCheckbox.addEventListener("change", function () {
        verify();
        document.getElementById("error_textField").style.display = "none";
        if (enableCheckbox.checked) {
            textFieldContainer.style.display = "block";
            textField.disabled = false;
            textField.focus();

        } else {
            textFieldContainer.style.display = "none";
            textField.disabled = true;

        }
    });
    const display = (elementName, isInValid) => {
        if (isInValid) {
            document.getElementById(`error_${elementName}`).style.display =
                "block";
            document.myForm[elementName].style.border = "2px solid red";
        } else {
            document.getElementById(`error_${elementName}`).style.display = "none";
            document.myForm[elementName].style.border = "";
        }
    }

    let isNameInValid = true,
        isEmailInValid = true,
        isPhoneNumberInValid = true,
        iszipcodeInValid = true,
        iscommentsInValid = true,
        istextFieldInValid = true,
        isstreetAddress1InValid = true;
    const validate = event => {
        console.log(event);
        const {
            id,
            value,
            name
        } = event.target;
        switch (id) {
            case "fname":
                if (!(value.trim().toLowerCase().match(regExName))) {
                    display(name, true);
                    isNameInValid = true;
                    if (value === "") {
                        error_fname.textContent = "First Name is required";
                    } else
                        error_fname.textContent = "Invalid First Name, Please enter valid First name.";
                } else if (value.length < 3 || value.length > 20) {
                    display(name, true);
                    isNameInValid = true;
                    error_fname.textContent = "Please enter number of letters within the range of 3-20 letters";

                } else {
                    display(name, false);
                    isNameInValid = false;
                }
                break;
            case "lname":
                if (!value.trim().toLowerCase().match(regExName)) {
                    display(name, true);
                    isNameInValid = true;
                    if (value === "") {
                        error_lname.textContent = "Last Name is required";
                    } else
                        error_lname.textContent = "Invalid Last Name, Please enter valid Last name.";
                } else if (value.length < 3 || value.length > 20) {
                    display(name, true);
                    isNameInValid = true;
                    error_lname.textContent = "Please enter number of letters within the range of 3-20 letters";

                } else {
                    display(name, false);
                    isNameInValid = false;
                }
                break;
            case "email":
                if (!value.trim().toLowerCase().match(regExEmail)) {
                    display(name, true);
                    isEmailInValid = true;
                    if (value === "") {
                        error_email.textContent = "Email is required";
                    } else
                        error_email.textContent = "Invalid Email, Please enter valid Email.";
                } else if (value.length < 3 || value.length > 50) {
                    display(name, true);
                    isEmailInValid = true;
                    error_email.textContent = "Please enter number of letters within the range of 3-50 letters";
                } else {
                    display(name, false);
                    isEmailInValid = false;
                }
                break;
            case "phoneNumber":
                if (!value.trim().toLowerCase().match(regExPhone)) {
                    display(name, true);
                    isPhoneNumberInValid = true;
                    if (value === "") {
                        error_phoneNumber.textContent = "Phone Number is required";
                    } else
                        error_phoneNumber.textContent = "Invalid Phone Number, Please enter valid phone number.";
                } else {
                    display(name, false);
                    isPhoneNumberInValid = false;
                }
                break;
            case "streetAddress1":
                if (value === "") {
                    display(name, true);
                    isstreetAddress1InValid = true;
                    error_streetAddress1.textContent = "Sreet Address 1 is required";
                } else if (value.length < 3 || value.length > 50) {
                    display(name, true);
                    isstreetAddress1InValid = true;
                    error_streetAddress1.textContent = "Please enter number of characters within the range of 3-50 letters";
                } else {
                    display(name, false);
                    isstreetAddress1InValid = false;
                }
                break;
            case "city":
                if (!value.trim().toLowerCase().match(regExName)) {
                    display(name, true);
                    iscityInValid = true;
                    if (value === "") {
                        error_city.textContent = "City is required";
                    } else
                        error_city.textContent = "Invalid City name, Please enter valid City name.";
                } else if (value.length < 3 || value.length > 30) {
                    display(name, true);
                    iscityInValid = true;
                    error_city.textContent = "Please enter number of characters within the range of 3-30 letters";
                } else {
                    display(name, false);
                    iscityInValid = false;
                }
                break;
            case "state":
                if (!value.trim().toLowerCase().match(regExName)) {
                    display(name, true);
                    isstateInValid = true;
                    if (value === "") {
                        error_state.textContent = "State is required";
                    } else
                        error_state.textContent = "Invalid State name, Please enter valid State name.";
                } else if (value.length < 3 || value.length > 30) {
                    display(name, true);
                    isstateInValid = true;
                    error_state.textContent = "Please enter number of characters within the range of 3-30 letters";
                } else {
                    display(name, false);
                    isstateInValid = false;
                }
                break;
            case "zipcode":
                if (!value.trim().toLowerCase().match(regExZip)) {
                    display(name, true);
                    iszipcodeInValid = true;
                    if (value === "") {
                        error_zipcode.textContent = "Zipcode is required";
                    } else
                        error_zipcode.textContent = "Invalid Zipcode, Please enter valid Zipcode.";
                } else {
                    display(name, false);
                    iszipcodeInValid = false;
                }
                break;
            case "comments":
                if (!value.trim().toLowerCase().match(regExName)) {
                    display(name, true);
                    iscommentsInValid = true;
                    if (value === "") {
                        error_comments.textContent = "Comments are required";
                    } else
                        error_comments.textContent = "Invalid Comment, Please enter valid Comment.";
                } else if (value.length < 3 || value.length > 100) {
                    display(name, true);
                    iscommentsInValid = true;
                    error_comments.textContent = "Please enter number of letters within the range of 3-100 letters.";
                } else {
                    display(name, false);
                    iscommentsInValid = false;
                }
                break;
            case "textField":
                if (!value.trim().toLowerCase().match(regExName)) {
                    display(name, true);
                    istextFieldInValid = true;
                    if (value === "") {
                        error_textField.textContent = "text is required";
                    } else
                        error_textField.textContent = "Invalid text, Please enter valid text.";
                } else if (value.length < 3 || value.length > 100) {
                    display(name, true);
                    istextFieldInValid = true;
                    error_textField.textContent = "Please enter number of letters within the range of 3-100 letters.";
                } else {
                    display(name, false);
                    istextFieldInValid = false;
                }
                break;
        }
        verify();
    }

    function updateCheckbox(selectedOption) {
        const checkboxContainer = document.getElementById('dynamicCheckboxContainer');
        checkboxContainer.innerHTML = '';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `checkboxFor${selectedOption}`;
        checkbox.name = `checkboxFor${selectedOption}`;

        const label = document.createElement('label');
        label.htmlFor = `checkboxFor${selectedOption}`;
        label.textContent = `Checkbox for ${selectedOption}`;

        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(label);
    }

    document.getElementById('selectOption').addEventListener('change', function () {
        const selectedOption = this.options[this.selectedIndex].text; 
        updateCheckbox(selectedOption);
    });

    function verify() {
        if (isNameInValid || isEmailInValid || isPhoneNumberInValid || isstateInValid || iscityInValid || isstreetAddress1InValid || iszipcodeInValid || iscommentsInValid || (istextFieldInValid && enableCheckbox.checked === true) || (document.getElementById("checkbox1").checked === false && document.getElementById("checkbox2").checked === false && document.getElementById("checkbox3").checked === false) || (document.getElementById("miss").checked === false && document.getElementById("mr").checked === false && document.getElementById("mrs").checked === false)) {
            //   console.log(checkboxes.length);
            document.myForm.submit.setAttribute('disabled', true);
        } else {
            document.myForm.submit.removeAttribute('disabled');
        }
    }

    function reset(e) {
        isNameInValid = true;
        isEmailInValid = true;
        isPhoneNumberInValid = true;
        isstateInValid = true;
        isstreetAddress1InValid = true;
        iszipcodeInValid = true;
        iscommentsInValid = true;
        istextFieldInValid = true;
        document.getElementById("error_fname").style.display = "none";
        document.getElementById("error_lname").style.display = "none";
        document.getElementById("error_email").style.display = "none";
        document.getElementById("error_phoneNumber").style.display = "none";
        document.getElementById("error_zipcode").style.display = "none";
        document.getElementById("error_comments").style.display = "none";
        document.getElementById("error_textField").style.display = "none";
        document.getElementById("error_city").style.display = "none";
        document.getElementById("error_state").style.display = "none";
        document.getElementById("error_streetAddress2").style.display = "none";
        document.getElementById("error_streetAddress1").style.display = "none";

        textFieldContainer.style.display = "none";
        textField.disabled = true;

    }
    var flag = 0;

    function createTable(formData) {
        const tableContainer = document.getElementById("tableContainer");
        const table = document.createElement("table");
        table.classList.add("result-table");

        if (flag === 0) {
            const tableHeader = document.createElement("thead");
            const headerRow = document.createElement("tr");
            const headers = ["Title", "First Name", "Last Name", "Email", "Phone Number", "Street Address 1", "Street Address 2", "City", "State", "ZipCode", "How did you hear", "Comments", "Option Selected", "Checkbox Text"];

            for (const headerText of headers) {
                const th = document.createElement("th");
                th.textContent = headerText;
                headerRow.appendChild(th);
            }

            tableHeader.appendChild(headerRow);
            table.appendChild(tableHeader);
            flag = 1;
        }

        const tableBody = document.createElement("tbody");
        const dataRow = document.createElement("tr");

        for (const key in formData) {
            const td = document.createElement("td");
            td.textContent = formData[key];
            dataRow.appendChild(td);
        }

        tableBody.appendChild(dataRow);
        table.appendChild(tableBody);

        tableContainer.appendChild(table);
    }

    function appendDataToTable() {
        document.getElementById("dataTable").style.display = "table";

        const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
        const title = document.querySelector('input[name="title"]:checked').value;
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const street1 = document.getElementById("streetAddress1").value;
        const street2 = document.getElementById("streetAddress2").value;
        const city = document.getElementById("city").value;
        const state = document.getElementById("state").value;
        const zipcode = document.getElementById("zipcode").value;
        const sources = Array.from(document.querySelectorAll('input[name="source"]:checked')).map(checkbox => checkbox.value);
        const comments = document.getElementById("comments").value;
        const option = document.getElementById("selectOption").value;
        const optext = document.getElementById("textField").value;

        const newRow = table.insertRow(-1);
        const cells = [title + " " + fname + " " + lname, email, phoneNumber, street1, street2, city, state, zipcode, sources.join(", "), comments, option, optext];

        cells.forEach((cellData, index) => {
            const cell = newRow.insertCell(index);
            cell.appendChild(document.createTextNode(cellData));
        });
    }

    function submitted(e) {
        console.log('submit');
        e.preventDefault();





        if (!isNameInValid && !isEmailInValid && !isPhoneNumberInValid && !isstateInValid && !iscityInValid && !isstreetAddress1InValid && !iszipcodeInValid && !iscommentsInValid && (!istextFieldInValid || enableCheckbox.checked === false)) {
            alert("Data entered successfully");
        
            appendDataToTable();
            clearFormFields();
        } else {
            alert("Please enter valid details")
        }
    }


    function clearFormFields() {
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phoneNumber").value = "";
        document.getElementById("zipcode").value = "";
        document.getElementById("comments").value = "";
        document.getElementById("textField").value = "";
        document.getElementById("state").value = "";
        document.getElementById("city").value = "";
        document.getElementById("streetAddress1").value = "";
        document.getElementById("streetAddress2").value = "";
        document.getElementById("error_textField").style.display = "none";

        document.getElementById("selectOption").value = "option1";
        document.getElementById("enableCheckbox").checked = false;
        textFieldContainer.style.display = "none";
        textField.disabled = true;
        document.getElementById("miss").checked = false;
        document.getElementById("mr").checked = false;
        document.getElementById("mrs").checked = false;
        document.getElementById("error_fname").style.display = "none";
        document.getElementById("error_lname").style.display = "none";
        document.getElementById("error_email").style.display = "none";
        document.getElementById("error_phoneNumber").style.display = "none";
        document.getElementById("error_zipcode").style.display = "none";
        document.getElementById("error_comments").style.display = "none";


        document.getElementById("checkbox1").checked = false;
        document.getElementById("checkbox2").checked = false;
        document.getElementById("checkbox3").checked = false;
        isNameInValid = true;
        isEmailInValid = true;
        isPhoneNumberInValid = true;
        isstateInValid = true;
        iscityInValid = true;
        isstreetAddress1InValid = true;
        iszipcodeInValid = true;
        iscommentsInValid = true;
        istextFieldInValid = true;
        document.myForm.submit.setAttribute('disabled', true);
    }
    document.myForm.addEventListener('input', validate);
    document.myForm.addEventListener('submit', submitted);
    document.myForm.addEventListener('reset', reset);


}
