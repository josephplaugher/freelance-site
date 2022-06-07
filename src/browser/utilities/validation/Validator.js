// import moment from 'moment';

class Validate {
    constructor(inputs, valRules) {
        this.error = {};
        this.inputs = inputs;
        this.valRules = valRules;
        this.startValidation();
        this.hasError = this.isError();
        return { hasError: this.hasError, errors: this.error };
    }

    startValidation() {
        for (var name in this.inputs) {
            this.valRules.forEach(rule => {
                if (name === rule.name) {
                    this.check(name, this.inputs[name], rule);
                }
            });
        }
    }

    check(name, val, rule) {
        //check that required fields for not empty
        if (rule.required && ((val == null) || (val == ''))) {
            rule.errorMsg ? this.setErrorMessage(name, rule.errorMsg) : this.setErrorMessage(name, 'This field is required');
            return 0; //stop the function for this input and return this error.
        }
        //check for correct date format
        if (rule.dateFormat && val != null) {
            //I simplified this check and moved it into its own function
            this.isValidDate(val) ? true : this.setErrorMessage(name, 'Invalid date format')
            return 0; //stop the function for this input and return this error
        }
        //check that custom matching expressions are met
        //this is useful when you need to verify two password fields match on signup/create account
        if (rule.match) {
            this.match(val, rule.match) ? true : this.setErrorMessage(name, rule.errorMsg);
            return 0; //stop the function for this input and return this error.
        }
        //check for alpha/string only input
        if (rule.alphaOnly) {
            this.alphaOnly(val) ? true :
                rule.errorMsg ? this.setErrorMessage(name, rule.errorMsg) :
                    this.setErrorMessage(name, 'The name field must only contain letters');
            return 0; //stop the function for this input and return this error.
        }
        // check for numeric only input
        if (rule.numeric) {
            this.numeric(val) ? rule.errorMsg ? this.setErrorMessage(name, rule.errorMsg) :
                this.setErrorMessage(name, 'This field can only be a number') : false;
            return 0; //stop the function for this input and return this error.
        }
        // check for decimal format input
        if (rule.decimal) {
            if (isNaN(val)) {
                rule.errorMsg ? this.setErrorMessage(name, rule.errorMsg) : this.setErrorMessage(name, 'This field must be a decimal number');
            } else {
                return 0;
            }
            return 0; //stop the function for this input and return this error.
        }
        //check for undesired characters
        if (rule.restricted) {
            this.restricted(val, rule.restricted) ? true : this.setErrorMessage(name, 'You have entered invalid characters');
            return 0; //stop the function for this input and return this error.
        }
        //check for valid email format if specified
        if (rule.email && val != null && val != '') {
            this.isEmail(val) ? true : this.setErrorMessage(name, 'Please enter a valid email address');
            return 0; //stop the function for this input and return this error.
        }
        if (rule.minLength) {
            (val.length > 6) ? true : this.setErrorMessage(name, 'Your password must be at least 6 characters');
            return 0; //stop the function for this input and return this error.
        }
        // rule for required radio button
        if (rule.radio && val != null) {
            this.setErrorMessage(name, 'Please select at least one option');
            return 0; //stop the function for this input and return this error.
        }
        // rule for required check box
        if (rule.checkBox) {
            if (rule.required && !this.checkBoxOrRadio(val)) {
                this.setErrorMessage(name, 'Please select at least one option');
            }
            return 0; //stop the function for this input and return this error.
        }
        // rule for state format
        if (rule.state && val != null && val != '') {
            this.isState(val) ? true : this.setErrorMessage(name, 'Please enter a valid two character state');
        }
        // rule for zip code format
        if (rule.zipCode && val != null && val != '') {
            this.isZipCode(val) ? true : this.setErrorMessage(name, 'Please enter a valid zip code');
        }
        // rule for phone number format
        if (rule.phone && val != null && val != '') {
            this.isPhoneNumber(val) ? true : this.setErrorMessage(name, 'Please enter a valid phone number. I.E. "123-456-5555"');
        }

    }

    setErrorMessage(name, msg) {
        let newEr = Object.assign({}, this.error);
        newEr[name] = msg;
        this.error = newEr;
    }

    match(val, expression) {
        return expression.test(String(val).toLowerCase());
    }

    checkBoxOrRadio(val) {
        // check if at least one check box is checked
        let selected = false;
        val.forEach(v => {
            if (v[Object.keys(v)[0]] == true) {
                selected = true;
            }
        });
        return selected;
    }

    alphaOnly(val) {
        return (/^[a-z]+$/i.test(val));
    }

    numeric(val) {
        return (isNaN(val));
    }

    restricted(val, characters) {
        //not sure how to do this. come back to it
        return val.test(characters);
    }

    isEmail(email) {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return expression.test(String(email).toLowerCase());
    }

    isState(val) {
        let states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];
        return states.includes(val) ? true : false
    }

    isZipCode(val) {
        // this expression first checks for a regular 5 digit zip code. If not, then it checks for a
        // formatted 9 digit zip code. Returns false if neither.
        return val.length == 5 && !isNaN(val) ? true : /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(val) ? true : false
    }

    isPhoneNumber(val) {
        let allowed = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "-", "(", ")", "+"]
        for (let i = 0; i < val.length; i++) {
            if (!allowed.includes(val[i])) { return false }
        }
        return true;
    }

    isValidDate(val) {
        // return moment(val).format() == 'Invalid date' ? false : true
    }

    isError() {
        // Check if the error object contains values
        if (Object.keys(this.error).length === 0) {
            // if there are no errors set this.hasError to false
            return false;
        } else {
            // if there are errors set this.hasError to true
            return true;
        }
    }

    requiredMessage(name) {
        let newEr = Object.assign({}, this.error);
        newEr[name] = name + ' is a required field';
        this.error = newEr;
    }

}

export default Validate;