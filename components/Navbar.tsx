import Link from 'next/link'
import React, { Component } from 'react'

const Navbar = () => {

    return (
        <div className="navbar ffixed bg-purple-800">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none gap-12">

                <Link href="/"> Dashboard</Link>

                <Link href="/"> Dashboard</Link>


                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://main-backend.fly.dev/api/files/_pb_users_auth_/quycy8l2iqe3w8u/drip_yPTMm12uLx.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default Navbar