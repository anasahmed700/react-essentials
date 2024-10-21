import React from 'react'

const Tabs = ({ buttons, children, ButtonContainer }) => {
    // const ButtonContainer = buttonContainer;
    return (
        <>
            <ButtonContainer>{buttons}</ButtonContainer>
            {children}
        </>
    )
}

export default Tabs