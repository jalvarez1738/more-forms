import React, { useState } from 'react'

const Form = () => {
    const [name, setName]= useState("")
    return (
    <fieldset>
        <legend>Form.jsx</legend>
        <form>
            <p>
                Name:
                <input type="text" name="" id="" />
            </p>
            <p>
                Email:
                <input type="text" name="" id="" />
            </p>
            <button>Submit</button>
        </form>
    </fieldset>
    )
}

export default Form