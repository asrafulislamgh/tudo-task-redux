import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { motion } from "framer-motion";

export default function EmailCards() {
    const allEmailshow = useSelector(state => state.emailList.allEmail)

    return (
        <div className='m-5 p-5 w-100 text-center mx-auto rounded'>
            <div className='d-flex gap-2'>
                {allEmailshow.map((email, index) => {
                    return (<motion.div initial={{ width: "0vw", x: "50vw" }}
                        animate={{ width: "50vw", x: 0 }}
                        transition={{ duration: 1, origin: 1 }} className='w-100 p-5 bg-light mx-auto d-flex rounded justify-content-center' key={index}>
                        <div >
                            <h1>{email.email}</h1>
                            <p>{email.password}</p>
                        </div>
                    </motion.div>)
                })}
            </div>
            <Link to={"/dashboard"}>
                <Button type="button" className="btn btn-primary py-3 px-5 m-5">
                    Back to Dashboard
                </Button>
            </Link>
        </div >
    )
}
