// import { useEffect } from "react";
import styled from "styled-components";


const Wrapper = styled.section`

  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;


const Contact = () => {

//  useEffect( ()=>{
//   return <h1>Loading</h1>},[]
 
//  );
  return(
    <>
        <Wrapper>

            <h2 className="common-heading">Contact Page</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14253.622450778397!2d83.42437286977538!3d26.731429500000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39915ca3e2aa136b%3A0xc039bdf0211338a9!2sMadan%20Mohan%20Malaviya%20University%20Of%20Technology!5e0!3m2!1sen!2sin!4v1693505209378!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form
          // formspree used
            action="https://formspree.io/f/maygjnzp"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
              
                


        </Wrapper>;
    </>
  )


};

export default Contact;
