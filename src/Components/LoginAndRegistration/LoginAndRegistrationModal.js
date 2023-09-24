import validatePhoneNumber from "../ReusableComponents/CoomonFunctions/CommonFunctions";
import validateConfirmPassword from "../ReusableComponents/CoomonFunctions/CommonFunctions";


export const regForm = {
    formlayout: "vertical",
    fieldsArray: [
        {
            type: "text",
            label: "First Name",
            name: "proposerFirstName",
            rules: [{ required: true, message: 'Please enter first name' }],
            placeholder: "First Name",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 12,
            labelCol: "",
            wrapperCol: "",
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
            lg: 12,
            labelCol: "",
            wrapperCol: "",
            value: "",
        },
        {
            type: "text",
            label: "Last Name",
            name: "proposerLastName",
            rules: [{ required: true, message: 'Please enter last name' }],
            placeholder: "Last Name",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 12,
            labelCol: "",
            wrapperCol: "",
            value: "",
        },
        {
            type: "email",
            label: "Email",
            name: "email",
            rules: [
                { required: true, message: 'Please enter email' },
                { type: 'email', message: 'Please enter a valid email' },
            ],
            placeholder: "Email",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 12,
            labelCol: "",
            wrapperCol: "",
            value: "",
        },
        {
            type: "password",
            label: "Password",
            name: "password",
            rules: [
                { required: true, message: 'Please enter password' },
                { min: 8, message: 'Password must be at least 8 characters long' }
            ],
            placeholder: "Password",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 12,
            labelCol: "",
            wrapperCol: "",
            value: "",
        },
        {
            type: "password",
            label: "Confirm Password",
            name: "confirmPassword",
            rules: [
                { required: true, message: 'Please enter Confirm Password' },
                { validator: (_, value) => validateConfirmPassword(_, value, regForm.fieldsArray) },

            ],
            placeholder: "Confirm Password",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 12,
            labelCol: "",
            wrapperCol: "",
            value: "",
        },
        {
            type: "phonenumber",
            label: "Contact Number",
            name: "contactNumber",
            rules: [
                { required: true, message: 'Please enter contact number' },
                { validator: validatePhoneNumber }
            ],
            placeholder: "Contact Number",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 12,
            labelCol: "",
            wrapperCol: "",
            value: "",
        },
        {
            type: "text",
            label: "Institute Name",
            name: "instituteName",
            rules: [
                { required: true, message: 'Please enter institute name' },
                { min: 10, message: 'Institute name must be at least 10 characters long' }
            ],
            placeholder: "Institute Name",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 12,
            labelCol: "",
            wrapperCol: "",
            value: "",
        },
        {
            type: "dropdown",
            label: "Type",
            name: "type",
            rules: [
                { required: true, message: 'Please choose any option!' },
            ],
            xs: 24,
            sm: 16,
            md: 12,
            lg: 12,
            labelCol: "",
            wrapperCol: "",
            value: "",
            options: [
                { id: "School", value: "School" },
                { id: "College", value: "College" },
                { id: "Coaching center", value: "Coaching center" }
            ],
            placeholder: "Selec option",
        },
        {
            type: "text",
            label: "Country",
            name: "addressCountry",
            rules: [
                { required: true, message: 'Please enter country' },
                { min: 4, message: 'Country must be at least 4 characters long' }
            ],
            placeholder: "Country",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 12,
            labelCol: "",
            wrapperCol: "",
            value: "",
        },
        {
            type: "text",
            label: "State",
            name: "addressState",
            rules: [
                { required: true, message: 'Please enter state' },
                { min: 4, message: 'State must be at least 4 characters long' }
            ],
            placeholder: "State",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 12,
            labelCol: "",
            wrapperCol: "",
            value: "",
        },
        {
            type: "text",
            label: "City",
            name: "addressCity",
            rules: [
                { required: true, message: 'Please enter city' },
                { min: 4, message: 'City must be at least 4 characters long' }
            ],
            placeholder: "City",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 12,
            labelCol: "",
            wrapperCol: "",
            value: "",
        },
        {
            type: "text",
            label: "Zip Code",
            name: "addressZipCode",
            rules: [
                { required: true, message: 'Please enter zip code' },
                { min: 6, max: 6, message: 'Zip Code should be 6 digit' }
            ],
            placeholder: "Zip Code",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 12,
            labelCol: "",
            wrapperCol: "",
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
        //       lg: 12,
        // labelCol: "",
        // wrapperCol: "",
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
        //       lg: 12,
        // labelCol: "",
        // wrapperCol: "",
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
        //       lg: 12,
        // labelCol: "",
        // wrapperCol: "",
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
        //     lg: 12,
        //     labelCol: "",
        //     wrapperCol: "",
        //     value: "2",
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
        //     lg: 12,
        //     labelCol: "",
        //     wrapperCol: "",
        //     value: "1",
        //     options: [
        //         { id: "1", value: "option1" },
        //         { id: "2", value: "option2" }
        //     ],
        // }
        // {
        //     type: "file",
        //     label: "File Upload",
        //     name: "file",
        //     multiple:true,
        //     showUploadList:true,
        //     rules: [
        //         { required: true, message: 'Please choose file!' },
        //     ],
        //     xs: 24,
        //     sm: 16,
        //     md: 12,
        //       lg: 12,
        // labelCol: "",
        // wrapperCol: "",
        //     value: "",
        // }

    ],
    buttonSecction: {
        justify: "end",
        buttons: [
            { type: "primary", name: "Register", fun: "submit" },
            { type: "default", name: "Reset", fun: "reset" },
            { type: "primary", name: "Cancel", fun: "cancel" },
        ]
    }

}

export const loginForm = {
    formlayout: "",
    fieldsArray: [
        {
            type: "email",
            label: "Email",
            name: "email",
            rules: [
                { required: true, message: 'Please enter email' },
                { type: 'email', message: 'Please enter a valid email' },
            ],
            placeholder: "Email",
            xs: 24,
            sm: 16,
            md: 24,
            lg: 24,
            labelCol: 4,
            wrapperCol: 16,
            value: "",
        },
        {
            type: "password",
            label: "Password",
            name: "password",
            rules: [
                { required: true, message: 'Please enter password' },
                { min: 8, message: 'Password must be at least 8 characters long' }
            ],
            placeholder: "Password",
            xs: 24,
            sm: 16,
            md: 24,
            lg: 24,
            labelCol: 4,
            wrapperCol: 16,
            value: "",
        },
    ],
    buttonSecction: {
        justify: "center",
        buttons: [
            { type: "default", name: "Reset", fun: "reset" },
            { type: "primary", name: "Login", fun: "submit", },
        ]
    }

}