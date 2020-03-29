import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Heading from "../layout/Heading";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const schema = yup.object().shape({
    firstName: yup
    .string()
    .required("First name is required")
    .min(2, "First name needs a minimum of 2 characters"),
    lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name needs a minimum of 2 characters"),
    email: yup
    .string()
    .email("Please enter a valid e-mail")
    .required("E-mail is required"),
    message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters long"),
});

function Contact() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });
    
    function onSubmit(data) {
        console.log("data", data);
        document.getElementById('formMessage').innerHTML = "Form successfully submitted!"
    }

    return(
        <>
        <Heading title="Contact" />
        <div className="form-message" id="formMessage"></div>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>First name</Form.Label>
                <Form.Control name="firstName" placeholder="First name" ref={register} />
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Last name</Form.Label>
                <Form.Control name="lastName" placeholder="Last name" ref={register} />
                {errors.lastName && <p>{errors.lastName.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label>E-mail</Form.Label>
                <Form.Control name="email" placeholder="E-mail" ref={register} />
                {errors.email && <p>{errors.email.message}</p>}
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" placeholder="Your message here.." ref={register} />
                {errors.message && <p>{errors.message.message}</p>}
            </Form.Group>

            <Button type="submit">Submit</Button>
        </Form>
        </>
    );
}

export default Contact;