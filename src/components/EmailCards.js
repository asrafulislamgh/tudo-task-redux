import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

export default function EmailCards() {
    const allEmailshow = useSelector(state => state.emailList.allEmail)

    return (
        <div className='m-5 p-5 w-100 text-center mx-auto rounded'>
            <div className='d-flex gap-2'>
                {allEmailshow.map((email, index) => {
                    return (<div className='w-100 p-5 bg-light mx-auto d-flex rounded justify-content-center' key={index}>
                        <div >
                            <h1>{email.email}</h1>
                            <p>{email.password}</p>
                        </div>
                    </div>)
                })}
            </div>
            <Link to={"/dashboard"}>
                <Button type="button" className="btn btn-primary py-3 px-5 m-5">
                    Back to Dashboard
                </Button>
            </Link>
        </div>
    )
}
