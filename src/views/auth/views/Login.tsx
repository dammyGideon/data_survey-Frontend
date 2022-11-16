import { lazy } from "react"
import { Form } from "react-bootstrap"
import Dashboard from "../../Dashboard"

const InputField = lazy(()=>import('../components/InputField'))

const LoginPage=()=> {
    return (
        <>
            <Dashboard />
        </>
    )
}

export default LoginPage