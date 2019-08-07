import React from 'react';

export default function Contact () {
    return (
        <div className="Contact">
        <h1>Thank you for Contacting us </h1>
            <span>Name<input type="text" placeholder="Name..."/></span>
            <span>Mobile<input type="text" placeholder="Mobile..."/></span>
            <span>Address<input type="text" placeholder="Address..."/></span>
            <span>Message<input type="text" placeholder="Message..."/></span>
            <span><button type="submit">Submit</button></span>
        </div>
    )
}
