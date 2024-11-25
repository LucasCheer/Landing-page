import '../styles/sections/ContactSection.scss';
import Title from '../components/Title';
import Button from '../components/Button';
import Image from '../assets/images/illutrations/ilus-contact.svg';

const ContactSection = () => {
    return (
        <section className='contact-section'>
            <Title
                className='contact-title'
                title='Contact'
                text="Connect with Us: Let's Discuss Your Digital Marketing Needs"
            />
            <div className='contact-container'>
                <form className='contact-form' action="">
                    <div class="radio-group">
                        <label>
                            <input type="radio" name="option" value="say-hi" checked />
                            <span>Say Hi</span>
                        </label>
                        <label>
                            <input type="radio" name="option" value="get-quote" />
                            <span>Get a Quote</span>
                        </label>
                    </div>
                    <label htmlFor="name">
                        Name
                        <input type="text" id="name" name="name" placeholder='Your Name' />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input type="email" id="email" name="email" placeholder='Your Email' />
                    </label>
                    <label htmlFor="message">
                        Message
                        <textarea id="message" name="message" placeholder='Your Message'></textarea>
                    </label>
                    <Button className='contact-button' text='Send Message' color='secundary' />
                </form>
                <img src={Image} alt="Ilustration" />
            </div>
        </section>
    );
};

export default ContactSection;
