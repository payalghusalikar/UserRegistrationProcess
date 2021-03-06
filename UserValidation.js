
const validationProcess = require('./UserValidationProcess');
const prompt = require('prompt-sync')();

class UserValidation {

    /**
    * @description Takes user input and calls firstNameValidator function
    */
    validateUserInputFirstName = () => {
        var firstName = prompt(`Enter your first name : `, firstName);
        validationProcess.firstNameValidator(firstName);
    }

    validateUserInputLastName = () => {
        var lastName = prompt(`Enter your last name : `, lastName);
        validationProcess.lastNameValidator(lastName);
    }

    validateUserInputEmail = () => {
        var email = prompt(`Enter your Email : `, email);
        validationProcess.emailValidator(email);
    }

    validateUserInputMobileNo = () => {
        var mobileNo = prompt(`Enter your mobile number : `, mobileNo);
        validationProcess.mobileNoValidator(mobileNo);
    }

    validateUserInputPassword = () => {
        var password = prompt(`Enter your password : `, password);
        validationProcess.passwordValidator(password);
    }

    validation = () => {
        console.log(`\n ****** welcome to user registration Process ********\n`);

        var choice = prompt(`1. First Name   2. Last Name   3. Email  4. Mobile No.  5. Password  Enter your choice: `, choice);
        switch (choice) {
            case "1":
                object.validateUserInputFirstName();
                break;
            case "2":
                object.validateUserInputLastName();
                break;
            case "3":
                object.validateUserInputEmail();
                break;
            case "4":
                object.validateUserInputMobileNo();
                break;
            case "5":
                object.validateUserInputPassword();
                break;
            default:
                console.log("Please Enter right choice");
                break;
        }
    }
}

const object = new UserValidation();
object.validation();