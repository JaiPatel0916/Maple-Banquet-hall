import ContactHeader from "../components/Contact/ContactUs";
import ContactSection from "../components/Contact/ContactForm";
import ContactMap from "../components/Contact/ContactMap";

export default function Contact() {
    return (
        <>
            <div >
            
             <ContactHeader/>
                <ContactSection />
                <div >
                    <ContactMap />
                </div>

                
            </div>
        </>
    );
}