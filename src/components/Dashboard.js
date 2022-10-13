import React from 'react'
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import UseFirebase from '../hooks/useFirebase'


export default function Dashboard() {
    const { handleLogout } = UseFirebase();
    return (
        <div className='vh-100'>
            <h1 className='text-center'>Dashboard</h1>
            <div className="d-flex justify-content-center align-items-center h-50">
                <Link to={"/emailcards"}>
                    <Button type="button" className="btn btn-primary py-3 px-5">
                        See the Slider
                    </Button>
                </Link>
                <Button type="button" onClick={handleLogout} className="btn btn-success m-3 py-3 px-5">
                    Logout
                </Button>
            </div>

        </div >
    )
}
