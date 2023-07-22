import React, { useState } from 'react'
import Social from '../components/layout/Social'

function Contact() {

    const [data, setData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [error, setError] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        if(!data.email || !data.message){
            setError(true)
        }else{
            setError
        }

    }

    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

  return (
    <>
        <div className="contact">

            <Social />

            <div className="messageOption">
                <h3>Write Me a Message</h3>   

                <div className="messageField">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Write Full Name" 
                        onChange={handleChange}
                        value={data.name}
                        />

                        <p style={{color: 'red'}}>{!data.email && error ? "Email is required" : ''}</p>
                        <input type="email" name="email" placeholder="Your Email"
                        onChange={handleChange}
                        value={data.email}
                        />
                        
                        <input type="text" name="subject" id="emailSub" placeholder="Subject" 
                        onChange={handleChange}
                        value={data.subject}
                        />

                        <p style={{color: 'red'}}>{error && !data.message ? 'Message is required' : ''}</p>
                        <textarea name="message" id="emailMessage" cols="30" rows="5" placeholder="Your Message"
                        onChange={handleChange}
                        value={data.message}
                        ></textarea>
                        
                        <button>Send</button>
                    </form>
                </div> 
            </div>        


        </div>
    </>
  )
}

export default Contact