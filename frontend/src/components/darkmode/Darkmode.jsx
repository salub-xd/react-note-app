import React, { useState } from 'react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import './darkmode.css'
const Darkmode = () => {
    const [darkMode, setDarkmode] = useState(false);
    const handleClick = () => {
        if (!darkMode) {
            document.body.style.backgroundColor = '#222831';
            setDarkmode(true);
        } else {
            document.body.style.backgroundColor = 'white';
            setDarkmode(false);
        }
    }
    return (
        <div className='darkMode' onClick={() => { handleClick() }} >
            {darkMode ? <SunIcon boxSize={30} className='darkModeIcon' color={'aliceblue'}   />
                : <MoonIcon boxSize={30} className='darkModeIcon'  />}
        </div>
    )
}

export default Darkmode
