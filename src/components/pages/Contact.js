import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

const getData = (key) => {
    const data = window.localStorage.getItem(key);
    if (data) {
        return JSON.parse(data);
    } else {
        return []
    }
}
const Contact = () => {
    const form = useRef();

    const [info,setInfo] = useState(getData("info"));
    const [reference,setReference] = useState(getData("reference"));
    const [overall,setOverall]= useState(getData("overall"));
    const [total,setTotal]= useState(getData("total"));






    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_b4ag5a8',
                'template_z08938n',
                form.current,
                '3Dwpd2hc3JDo5wklw')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
            },
                (error) => {
                console.log(error.text);
            }
            );
    };

return (

    <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Wiadomość</label>
        <textarea name="change" value={JSON.stringify(info)+JSON.stringify(overall)+JSON.stringify(reference)+JSON.stringify(total)}>
        </textarea>
        <input type="submit" value="Wyślij" />
    </form>
     )
};

export default Contact;