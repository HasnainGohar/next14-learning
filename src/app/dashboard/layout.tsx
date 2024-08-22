'use client'

import { useState } from "react"

export default function dashboardLayout(
    {
        children,
        notifications,
        users,
        nothing,
        login,
    }: {
        children: React.ReactNode,
        notifications: React.ReactNode,
        users: React.ReactNode,
        nothing: React.ReactNode
        login: React.ReactNode
    }) {

    const [isActive, setISActive] = useState(false)

    return isActive ? (

        <div  style={{ textAlign: 'center' , margin: '10px'}} >
  
            {children}
            <div style={{ display: 'flex' }}>
                <div style={{ display: "flex", flexDirection: 'column' }}>
                    {users}
                    {nothing}
                </div>
                <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
            </div>
        </div>
    ) : (
        <div style={{ textAlign: 'center', margin: '10px' }}>
            <button onClick={() => setISActive(true)}>
                Login
            </button>
            {login}
        </div>
    )
}