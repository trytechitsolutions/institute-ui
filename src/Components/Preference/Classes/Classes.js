import React from "react";
import AddPreference from "../../ReusableComponents/AddPreference/AddPreference";

function Classes() {
    const defaultFields = [
        {
            type: "text",
            label: "Class Name",
            name: "title",
            rules: [],
            placeholder: "Class Name",
            xs: 24,
            sm: 16,
            md: 12,
            lg: 12,
            labelCol: "",
            wrapperCol: "",
            value: "",
        },
        {
            type: "number",
            label: "Class Number",
            name: "CalssNumber",
            rules: [],
            placeholder: "Class Number",
            xs: 24,
            sm: 24,
            md: 12,
            lg: 12,
            labelCol: "",
            wrapperCol: "",
            value: "",
        }]
    return (
        <AddPreference  defaultFields={defaultFields}/>
    )
}
export default Classes;

