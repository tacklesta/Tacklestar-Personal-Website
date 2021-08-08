import React from 'react';

class Contact extends React.Component{
    render(){
        if(this.props.data)
        {
            var name = this.props.data.name;
            // var street = this.props.data.address.street;
            // var city = this.props.data.address.city;
            // var state = this.props.data.address.state;
            // var zip = this.props.data.address.zip;
            var phone = this.props.data.phone;
            var email = this.props.data.email;
            var message = this.props.data.contactmessage;

        }
        return(
            <section id="contact">
                <div className="row section-head">
                    <div className="two columns header-col">
                        <h1><span>Get In Touch.</span></h1>
                    </div>
                    <div className="ten columns">
                        <p className="lead">{message}</p>
                        <br/>
                        <p class="lead warning"> 
                        NOTE : Contact form not yet configured, Please contact me via normal email for now !!
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="eight columns">
                        <form action="contact_form.php" method="POST" id="contactForm" name="contactForm">
                            <fieldset>
                                <div>
                                    <label htmlFor="contactName">Name<span className="required">*</span></label>
                                    <input type='text' defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                                </div>
                                <div>
                                    <label htmlfor="contactEmail">Email<span className="required">*</span></label>
                                    <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                                </div>
                                <div>
                                    <label label="contactSubject">Subject</label>
                                    <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onchange={this.handleChange}/>
                                </div>

                                <div>
                                    <label htmlfor="contactMessage">Message<span className="required">*</span></label>
                                    <textarea id="contactMessage" name="contactMessage"></textarea>
                                </div>

                                <div>
                                    <button type="submit" className="submit">Submit</button>
                                    <span id="image-loader">
                                        <img alt="" src="images/loader.gif"/>

                                    </span>
                                </div>
                            </fieldset>
                        </form>
                        <div id="message-warning">ERROR !!</div>
                        <div id="message-success">
                            <i className="fa fa-check"></i>Your Message was Sent Successfully, THANK YOU !!<br />
                        </div>
                    </div>
                    <aside className="four columns footer-widgets">
                        <div className="widget widget_contact">
                            <h4>Contact</h4>
                            <p className="address">
                                {name}<br/>
                                {/* {street}<br/> 
                                {city},{state}{zip}<br/> */}
                                <span>{phone}</span>
                                <br/>
                                <span><a href="mailto:tarundyundi2000@gmail.com">{email}</a></span>
                            </p>
                        </div>

                        {/* <div className="widget widget_tweets">
                            <h4 className="widget-title">Latest Tweets</h4>
                            <ul id="twitter">
                                <li>
                                    <span>
                                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                                        <a href="#">http://t.co/CGT</a>
                                    </span>
                                    <b><a href="#">2 days ago</a></b>
                                </li>
                                <li>
                                    <span>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                        eaque ipsa quae ab illo inventore veritatis et quasi
                                        <a href="#">http://t.co/CGIrdxIlI3</a>
                                    </span>
                                    <b><a href="#">3 Days ago</a></b>
                                </li>
                            </ul>
                        </div> */}
                    </aside>
                </div>
            </section>
            );
    }
}

export default Contact;