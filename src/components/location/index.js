import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.076321972553!2d10.730416551960783!3d59.91428068177834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e7e095218cd%3A0xce4c9b743d127819!2sSaga+kino!5e0!3m2!1sno!2sno!4v1541435146598" 
            width="100%" 
            height="500px" 
            frameBorder="0" 
            allowFullScreen>

            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;