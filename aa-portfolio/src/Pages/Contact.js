import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { VscGithub } from "react-icons/vsc";
import Heading from '../Common/Heading';
import axios from 'axios'
import AOS from "aos";
import "aos/dist/aos.css";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {

    let { register, handleSubmit, formState: { errors }, reset } = useForm()

    let onsubmit = (data, e) => {
        e.preventDefault()
        console.log(data);
        axios.post("https://my-portfolio-c6560-default-rtdb.firebaseio.com/contactform.json", data)
        reset()
    }


    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])


    return (
        <>
            <div id="Contact">
                <div className="container-fluid   bg-warning" >
                    <Heading h1="Contact" h2="Share your info" />
                    <div className="row justify-content-between">
                        <div className="col-md-5">
                            <h1>Lets's get in touch</h1>
                            <p>I enjoy discussing new projects and design challenges. Please share as much info as possible so we can get the most out of our first catch-up.</p>
                            <br />
                            <h4>Living In</h4>
                            <p>Nagpur,Maharashtra</p>
                            <br />
                            <h4>Call:</h4>
                            <p>(+91)7767825500</p>
                            <br />
                            <a href="https://www.linkedin.com/in/vaishnavi-dharamshahare-a963b5251" target="_blank" style={{ colour: "black", marginRight:"20px" }} ><BsLinkedin style={{ fontSize: "35px", color: "black" }} /></a>
                            <a href="https://github.com/DharamshahareVaishnavi/PortFolio/tree/main/aa-portfolio" target="_blank" style={{ colour: "black", marginRight:"12px" }}><VscGithub style={{ fontSize: "35px", color: "black" }} /></a>
                            <a href="https://www.instagram.com/vaishnavi_0210/" target="_blank" style={{ colour: "black" }}><AiFillInstagram  style={{ fontSize: "45px", color: "black" }}/></a>
                            <br /><br />
                        </div>

                        <div className="col-md-6 shadow">
                            <form action="" className='p-3' onSubmit={handleSubmit(onsubmit)} data-aos="flip-down">
                                <label htmlFor="" className='form-label'>Enter Name</label>
                                <input type="text" name='Name' {...register("Name", { required: "This Field is Required!" })} className='form-control' />
                                <p className='text-danger'>{errors.Name?.message}</p>
                                <label htmlFor="" className='form-label'>Enter Email</label>
                                <input type="email" name='Email' {...register("Email", { required: "This Field is Required!" })} className='form-control' />
                                <p className='text-danger'>{errors.Email?.message}</p>
                                <label htmlFor="" className='form-label'>How can I help you?</label>
                                <input type="text" name='Message' {...register("Message", { required: "This Field is Required!" })} className='form-control' />
                                <p className='text-danger'>{errors.Message?.message}</p>
                                <button type="submit" className="btn btn-outline-dark">Submit</button>
                                <br /><br />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact