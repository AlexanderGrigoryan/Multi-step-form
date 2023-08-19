import * as yup from "yup"

const schema = yup.object().shape({
    name: yup.string().required("This field is required").matches(/^[A-Za-z\s]*$/, "Wrong formats, letters only"),
    email: yup.string().email().required("This field is required"),
    number: yup.string().required("This field is required").matches(/^[0-9]*$/, "Wrong formats, numbers only"),
})

export default schema
