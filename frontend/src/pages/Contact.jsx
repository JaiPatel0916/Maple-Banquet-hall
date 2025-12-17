import ContactHeader from "../components/Contact/ContactUs";
import ContactSection from "../components/Contact/ContactForm";
import ContactMap from "../components/Contact/ContactMap";
import ContactFooter from "../components/Contact/ContactFooter";

export default function Contact() {
    return (
        <>
            <div >
            
             <ContactHeader/>
                <ContactSection />
                <div >
                    <ContactMap />
                </div>
                <ContactFooter />

                
            </div>
        </>
    );
}