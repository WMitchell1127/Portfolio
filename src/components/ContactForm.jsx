import React, { useRef } from 'react';

// import { authContext } from "../context/AuthProvider";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    TextArea,
  } from "reactstrap";
// import axios from 'axios';
// import { toast } from 'react-toastify'

export const ContactForm = () => {   
    // const state = useContext(authContext);
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [address, setAddress] = useState('');
    // const [message, setMessage] = useState('');
    // const [signUp, setSignUp] = useState(false);

    // const submitForm = (e) => {
    //     e.preventDefault();
    //     e.target.reset();
    //     setName('');
    //     setEmail('');
    //     setPhone('');
    //     setAddress('');
    //     setMessage('');
    //     setSignUp(false);
    //     const body = JSON.stringify({ name, email, phone, address, message, signUp});
    //     const config = {
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //     };
    //     axios
    //     .post('/admin/saveContact', body, config)
    //     .then(res => {
    //         toast.success(res.data.msg)
    //     })
    //     .catch(err => {
    //         err.response.data && toast.error(err.response.data.msg)
    //     })

    // }


    return (
        <Form> 
        {/* Form onSubmit={submitForm}> */}
        <FormGroup>
            <Label for='name'>Full Name</Label>
            <Input
                type='text'
                name='firstname'
                size='40'
                id='fname'
                // onChange={(e) => setName(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for='phone'>Phone</Label>
            <Input
                type='tel'
                name='phone'
                minLength='9'
                id='phone'
                // onChange={(e) => setPhone(e.target.value)}
            />
        </FormGroup>        
        <FormGroup>
            <Label for='email'>Email</Label>
            <Input
                type='email'
                name='email'
                id='email'
                // onChange={(e) => setEmail(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for='message'>Message</Label>
            <Input
                type='textarea'
                name='message'
                className='textarea'
                // onChange={(e) => setMessage(e.target.value)}
            />
        </FormGroup>
        <FormGroup className='ml-4'>
            {/* <Input
                type='checkbox'
                value={!signUp}
                onChange={(e) => setSignUp(e.target.value)}
            /> */}
            {/* <Label for='checkbox'>Yes, Sign me up for Emails</Label> */}
        </FormGroup>
        <Button>Send</Button>
    </Form>
    )
}