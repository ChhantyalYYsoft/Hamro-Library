import React, { useState } from 'react'
import BaseLayout from '../../components/layouts/BaseLayout'
import { Button, Form } from 'react-bootstrap'
import CustomInput from '../../components/customInput/CustomInput'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../firebase-config'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import ClientSignupForm from '../../components/clients/ClientSignupForm'

function SignUp() {

    return (
        <>
            <BaseLayout>
                {/* Anything inside BaseLayout will become a children */}
                {/* children prop is pre-defined by react */}
                <ClientSignupForm/>
            </BaseLayout>
        </>
    )
}

export default SignUp
