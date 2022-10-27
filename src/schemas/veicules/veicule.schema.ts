import * as yup from 'yup'

const veiculeRegisterSchema = yup.object().shape({
    title: yup.string().required("title required.")
})

export default veiculeRegisterSchema