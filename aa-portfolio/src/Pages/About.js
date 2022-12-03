import React, { useContext, useEffect } from 'react'
import Heading from '../Common/Heading'
import { data } from '../Store'
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

    useEffect(()=>{
        AOS.init()
        AOS.refresh();
    },[])

    let { mode, setMode } = useContext(data)

    let obj = [
        {
            id: 1,
            heading: "Name:",
            content: "Vaishnavi Dharamshahare",
            colour: "warning"

        },
        {
            id: 2,
            heading: "Email:",
            content: "vdharamshahare322@gmail.com",
            colour: "warning"
        },
        {
            id: 3,
            heading: "Date of Birth",
            content: "02/10/1996",
            colour: "warning"
        },

        {
            id: 4,
            heading: "From:",
            content: "Nagpur,Maharashtra",
            colour: "warning"
        }
    ]

    return (
        <>
        <div id='About'>
        <div className={`container-fluid bg-${mode ? "dark" : "light"} text-${mode ? "light" : "dark"} `}>
                <div className="text-center p-3">
                    <h5>About Me</h5>
                    <h1>Know Me More</h1>
                </div>
                <div className="row align-items-center">
                    <div className="col-8">
                        <h1>Hi, I'm Vaishnavi Dharamshahare</h1>
                        <p>A budding front end developer with a strong interest in projects that require both conceptual and analytical thinking.
I am always eager to learn from anyone & everyone.
I'm looking forward to enhance user's experience & maximizing user interface.</p>
                    </div>
                    <div className="col-4">
                        <img src="images/e726c74ac081eed50feee1433d12c9-unscreen.gif" alt="" width="100%" />
                    </div>
                </div>
                <div className="row mt-5">
                    {
                        obj.map((e) => {
                            return (
                                <div className="col-sm-6 col-xl-3" key={e.id} >
                                    <div className={`card p-2 text-bg-${e.colour} mb-3`} data-aos="flip-down">
                                        <div className="card-header">{e.heading}</div>
                                        <div className="card-body">
                                            <h6 className="card-title">{e.content}</h6>

                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
            
        </>
    )
}

export default About