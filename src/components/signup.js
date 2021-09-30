import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import LockIcon from '@mui/icons-material/Lock';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const signup = () => {
    const paperStyle = {
        width: "55%",
    
        padding: 20, margin: '20px auto',

        backgroundImage: ' linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)',
        borderRadius: '10px'
    }
    const avs = {
        backgroundColor: '#0d10b8'
    }
    const hs = {
        color: '#0d10b8',
        margin: 0

    }
    const btns = {
        padding: '10px 50px',
        fontSize: '20px',
        margin: '20px 0',
        width: '40vw',
        backgroundColor: '#0d10b8',
        color: 'white',
        borderRadius: '10px'
    }
    
    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''

    }
    const validationSchema = Yup.object().shape({
        firstname: Yup.string().min(3, "Name is too short").required("This field is required"),
        lastname: Yup.string().min(3, "Name is too short").required("This field is required"),
        email: Yup.string().email("Please enter a valid email").required("This field is required"),
        phoneNumber: Yup.number().typeError("Enter a valid phone number").required("This field is required"),
        password: Yup.string().min(8, "Password should contain minimum 8 characters").required("This field is required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password is not matching").required("This field is required")
    })
    const onSubmit = (values, props) => {
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
            toast.success('registered successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
    
            });


        }, 2000)
    }


    return (

        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avs}>
                        <LockIcon />
                    </Avatar>
                    <h1 style={hs}>Register</h1>
                    <Typography variant="h6" gutterBottom>
                        Please fill the form to register!
                    </Typography>

                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form align="center">
                            <Field as={TextField} fullWidth name="firstname" label="First Name" placeholder="Enter Your First Name" margin="normal"
                                helperText={<ErrorMessage name="firstname" />} />
                            <Field as={TextField} fullWidth name="lastname" label="Last Name" placeholder="Enter Your Last Name" margin="normal"
                                helperText={<ErrorMessage name="lastname" />} />
                            <Field as={TextField} fullWidth name="email" label="Email" placeholder="Enter Your Email" margin="normal" margin="normal"
                                helperText={<ErrorMessage name="email" />} />
                            <Field as={TextField} fullWidth name="phoneNumber" label="Phone Number" placeholder="Enter Your Phone Number" margin="normal"
                                helperText={<ErrorMessage name="phoneNumber" />} />
                            <Field as={TextField} fullWidth name="password" label="Password" placeholder="Enter Your Password" margin="normal"
                                helperText={<ErrorMessage name="password" />} />
                            <Field as={TextField} fullWidth name="confirmPassword" label="Confirm Password" placeholder="Please confirm your password" margin="normal"
                                helperText={<ErrorMessage name="confirmPassword" />} />

                            <Button type="submit" variant="contained" style={btns} disabled={props.isSubmitting}>{props.isSubmitting ? "Loading..." : "Register"}</Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
            <ToastContainer />
        </Grid>



    )
}

export default signup
