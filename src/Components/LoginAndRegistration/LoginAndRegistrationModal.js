import { validatePhoneNumber } from "../ReusableComponents/CoomonFunctions/CommonFunctions";

export const validatePasswordConfirm = (_, value) => {
    let pwd = '';
    formdata.fieldsArray.forEach(ele => {
        if (ele.name === "password") {
            pwd = ele.value;
        }
    });
    if (value && pwd && value !== pwd) {
        return Promise.reject('Passwords do not match');
    }
    return Promise.resolve();
};

export const formdata = {
    formlayout: "vertical",
    fieldsArray: [
        {
            type: "text",
            label: "First Name",
            name: "firstName",
            rules: [{ required: true, message: 'Please enter first name' }],
            placeholder: "First Name",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 11,
            value: "",
        },
        {
            type: "text",
            label: "Middle Name",
            name: "middleName",
            rules: [{ required: false, message: '' }],
            placeholder: "Middle Name",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 11,
            value: "",
        },
        {
            type: "text",
            label: "Last Name",
            name: "lasstName",
            rules: [{ required: true, message: 'Please enter Last name' }],
            placeholder: "Last Name",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 11,
            value: "",
        },
        {
            type: "email",
            label: "Email",
            name: "email",
            rules: [
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
            ],
            placeholder: "Email",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 11,
            value: "",
        },
        {
            type: "password",
            label: "Password",
            name: "password",
            rules: [
                { required: true, message: 'Please enter your password' },
                { min: 8, message: 'Password must be at least 8 characters long' }
            ],
            placeholder: "Password",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 11,
            value: "",
        },
        {
            type: "password",
            label: "Confirm Password",
            name: "confirmPassword",
            rules: [
                { required: true, message: 'Please enter your Confirm Password' },
                { validator: validatePasswordConfirm }
            ],
            placeholder: "Confirm Password",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 11,
            value: "",
        },
        {
            type: "phonenumber",
            label: "Contact Number",
            name: "contactNumber",
            rules: [
                { required: true, message: 'Please enter your contact number' },
                { validator: validatePhoneNumber }
            ],
            placeholder: "Contact Number",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 11,
            value: "",
        },
        {
            type: "text",
            label: "Institute Name",
            name: "instituteName",
            rules: [
                { required: true, message: 'Please enter your institute name' },
            ],
            placeholder: "Institute Name",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 11,
            value: "",
        },
        {
            type: "text",
            label: "Country",
            name: "country",
            rules: [
                { required: true, message: 'Please enter your country' },
            ],
            placeholder: "Country",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 11,
            value: "",
        },
        {
            type: "text",
            label: "State",
            name: "state",
            rules: [
                { required: true, message: 'Please enter your state' },
            ],
            placeholder: "State",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 11,
            value: "",
        },
        {
            type: "text",
            label: "City",
            name: "city",
            rules: [
                { required: true, message: 'Please enter your city' },
            ],
            placeholder: "City",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 11,
            value: "",
        },
        {
            type: "text",
            label: "Zip Code",
            name: "zipCode",
            rules: [
                { required: true, message: 'Please enter your zip code' },
            ],
            placeholder: "Zip Code",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 11,
            value: "",
        },
        // {
        //     type: "date",
        //     label: "Date",
        //     name: "date",
        //     rules: [
        //         { required: true, message: 'Please selct date!' },
        //     ],
        //     xs: 24,
        //     sm: 16,
        //     md: 12,
        //     lg: 11,
        //     value: "",
        // },
        // {
        //     type: "text-area",
        //     label: "Remarks",
        //     name: "remarks",
        //     rules: [
        //         { required: true, message: 'Please enter remarks' },
        //     ],
        //     placeholder: "Remarks",
        //     xs: 24,
        //     sm: 16,
        //     md: 12,
        //     lg: 11,
        //     value: "",
        //     rows: 4,
        // },
        // {
        //     type: "checkbox",
        //     label: "",
        //     name: "checkbox",
        //     rules: [
        //         { required: true, message: 'Please selct checkbox!' },
        //     ],
        //     xs: 24,
        //     sm: 16,
        //     md: 12,
        //     lg: 11,
        //     value: "",
        // },
        // {
        //     type: "dropdown",
        //     label: "Select",
        //     name: "slect",
        //     rules: [
        //         { required: true, message: 'Please choose any option!' },
        //     ],
        //     xs: 24,
        //     sm: 16,
        //     md: 12,
        //     lg: 11,
        //     value: "",
        //     options: [
        //         { id: "1", value: "option1" },
        //         { id: "2", value: "option2" }
        //     ],
        //     placeholder: "Selec option",
        // },
        // {
        //     type: "radio",
        //     label: "Select",
        //     name: "slect1",
        //     rules: [
        //         { required: true, message: 'Please choose any option!' },
        //     ],
        //     xs: 24,
        //     sm: 16,
        //     md: 12,
        //     lg: 11,
        //     value: "",
        //     options: [
        //         { id: "1", value: "option1" },
        //         { id: "2", value: "option2" }
        //     ],
        // }

    ]
}