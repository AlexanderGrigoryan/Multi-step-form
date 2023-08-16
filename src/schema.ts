import * as yup from "yup"

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.number().required(),
    
})

export default schema
