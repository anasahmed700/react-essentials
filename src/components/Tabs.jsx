import React from 'react'

const Tabs = ({ buttons, children }) => {
    return (
        <>
            <menu>{buttons}</menu>
            {children}
        </>
    )
}

export default Tabs