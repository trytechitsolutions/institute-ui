import React, { useEffect } from "react";
import AddPreference from "../../ReusableComponents/AddPreference/AddPreference";
import { preparePayLoad, upDateForm } from "../../ReusableComponents/CoomonFunctions/CommonFunctions";
import { GetStoreData } from "../../ReusableComponents/ReduxActions/FecthState";
import { useDispatch } from "react-redux";
import { addClasses } from "../../../Redux/Reducers/ClassReducer";
import { setActiveReducer } from "../../../Redux/Reducers/ActiveReducer";

function Classes() {
    const data = GetStoreData('ClassReducer');
    const dispatch = useDispatch();
    console.log(data.classData);
    const defaultFields = {
        fieldsArray: [
            {
                type: "text",
                label: "Class Name",
                name: "title",
                rules: [{ required: true, message: 'Class Name Rqurire' },],
                placeholder: "Class Name",
                xs: 24,
                sm: 24,
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
                rules: [{ required: true, message: 'Class Number Rqurire' },],
                placeholder: "Class Number",
                xs: 24,
                sm: 24,
                md: 12,
                lg: 12,
                labelCol: "",
                wrapperCol: "",
                value: "",
            }
        ]
    }

    function addClass(data) {
        dispatch(addClasses(preparePayLoad(data.fieldsArray)));
    }

    function resetFields() {
        upDateForm(true, defaultFields);
    }

    useEffect(() => {
        dispatch(setActiveReducer('ClassReducer')); 
      }, [dispatch]); 
    return (
        <AddPreference defaultFields={defaultFields} buttonname={'Add Class'} addClass={addClass} resetFields={resetFields} />
    )
}
export default Classes;

