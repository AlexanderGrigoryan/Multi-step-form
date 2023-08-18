import * as yup from "yup"

const schema = yup.object().shape({
    name: yup.string().required("This field is required").matches(/^[A-Za-z\s]*$/, "Wrong formats, letters only"),
    email: yup.string().email().required("This field is required"),
    number: yup.number().required("This field is required").typeError("This field is required"),
})

export default schema
