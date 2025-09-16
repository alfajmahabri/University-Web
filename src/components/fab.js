import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fab from '@mui/material/Fab';
import { faLocationArrow,faBookOpenReader, faPhone, faComment } from '@fortawesome/free-solid-svg-icons';

export default function Floatingab() {
    const [showButton, setShowButton] = useState(false);

    const handleFabClick = () => {
        setShowButton(prev => !prev);
    };

    return (
        <>
            <Fab 
                variant="extended" 
                onClick={handleFabClick}
                style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}
            >
                <FontAwesomeIcon icon={faLocationArrow} style={{ marginRight: '8px' }} />
                Navigate
            </Fab>
            {showButton && (
                <>
                    <Fab style={{ position: 'fixed', bottom: 90, right: 28 }}>
                        <FontAwesomeIcon icon={faComment} />
                    </Fab>
                    <Fab style={{ position: 'fixed', bottom: 150, right: 28 }}>
                        <FontAwesomeIcon icon={faBookOpenReader} />
                    </Fab>

                    
                    <Fab style={{ position: 'fixed', bottom: 210, right: 28 }}>
                        <FontAwesomeIcon icon={faPhone} />
                    </Fab>

                </>
            )}
        </>
    );
}   