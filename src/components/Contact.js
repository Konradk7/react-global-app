import React from 'react';
import photo from "../images/profile-photo.jpeg";

function Contact(props) {
    return (
        <>
            <div className="contact-container">
                <div className="contact-container__main">
                    <div className="contact-container__main__head">
                        <div className="contact-container__main__head-info">
                            <h1>Hi! My name is Konrad Kędroń</h1>
                            <h2>Mail: konrad.kdro7@gmail.com</h2>
                            <h2>Phone: 796 082 728</h2>
                            <h2>About me and my app!</h2>
                        </div>
                        <img src={photo} alt="Profile-photo"/>
                    </div>

                    <h3>I'm frontend developer from Wroclaw. It's my first big public project so please be understanding
                        :).
                        I
                        made it to train my skill's so i know sometimes we could use better option's (exactly styles :D
                        i'm
                        not graphic designer) BUT i was trying to use
                        everything what i know for better understanding of every tool's.
                        <span>I Was working with many more tool's like advanced fetch/ sass-media/ 3D animations or something
                    like this but i didn't have that much experience to introduce everything freely at this time... YET.</span>
                    </h3>
                    <p>Assumption of this project is just app for many app's. It's why i need to spend much more hour's
                        to
                        make
                        it best.
                        Soon i will have node.js course so i will add my own backend/ type-script/ refactor sass (It's a
                        little
                        bit chaotic because i got only 2 week's for it and i was rebuilding something many times) / and
                        i
                        will
                        make it full scalable for mobile-phone's. Okay... but for now it's looking not so bad on full-hd
                        +
                        resolution AND it's working!
                    </p>
                    <p>This time was really nice experience form me (without searching for free, nice API's -.-). I
                        really
                        like task's like this even when i have to do it
                        alone (naturally i prefer to working with another guys, exactly when they are more experienced
                        than
                        me.
                        I really like to learning from this kind of people.)
                    </p>
                    <h4>I'm also big fan of</h4>
                    <ul>
                        <li>Linux terminal command's</li>
                        <li>Hologram's in JS</li>
                        <li>Gym</li>
                        <li>Cooking</li>
                        <li>Fashion</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Contact;