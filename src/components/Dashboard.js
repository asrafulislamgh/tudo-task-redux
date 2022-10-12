import React from 'react'
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"


export default function Dashboard() {
    return (
        <div className='vh-100'>
            <h1 className='text-center'>Dashboard</h1>
            <div className="d-flex justify-content-center align-items-center h-50">
                <Link to={"/emailcards"}>
                    <Button type="button" className="btn btn-primary py-3 px-5">
                        See the Slider
                    </Button>
                </Link>
            </div>
        </div >
    )
}
