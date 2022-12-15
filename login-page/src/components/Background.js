import React from 'react';
import image from "../img/Money.jpg";
function Background() {
    return (
        <div style={{ backgroundImage: `url(${image})` }}>
            Hello World
        </div>
    );
}

export default Background;