import React from "react";
import "../../assets/css/style.css";
import Footer from "../Footer";

const Tnc = () => {
  return (
    <>
      <body  style={{padding:"20px" , backgroundColor:"hsl(36, 33%, 94%)"}} id="top">
        {/* <!-- start --> */}
        <header>
          <h1>Welcome to Encodingo.com</h1>
          <p>
            (referred to as "Website"), operated by Vidyayan Eduventure Pvt Ltd
            (referred to as "Company").
          </p>
        </header>

        <main>
          <h2>Terms and Conditions</h2>
          <p>
            These Terms and Conditions govern your use of our Website and any
            services, products, or information available through the Website. By
            accessing or using our Website, you agree to be bound by these Terms
            and Conditions. Please read them carefully.
          </p>

          <h3>Acceptance of Terms</h3>
          <p>
            By accessing or using our Website, you acknowledge that you have
            read, understood, and agreed to be bound by these Terms and
            Conditions. If you do not agree with any part of these Terms and
            Conditions, you must not use our Website.
          </p>

          <h3>Service Description</h3>
          <p>
            Encodingo.com provides an online platform where users can purchase
            coding courses, book paid sessions for coding, English, and
            mathematics, and access related educational content. The content
            provided on the Website is for informational purposes only and does
            not constitute professional advice.
          </p>

          <h3>User Registration</h3>
          <p>
            To access certain features of the Website, you may need to create an
            account and provide accurate and complete registration information.
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account. You must notify us immediately of any unauthorized use of
            your account.
          </p>

          <h3>Payment and Pricing</h3>
          <p>
            The pricing of courses and paid sessions is displayed on the
            Website. By making a payment, you agree to pay the specified amount
            for the selected product or service. All payments are processed
            through secure payment gateways. We reserve the right to modify the
            prices at any time without prior notice.
          </p>

          <h3>Refund Policy</h3>
          <p>
            Refunds for purchased courses and paid sessions are subject to our
            Refund Policy, which can be found on the Website. Please review the
            Refund Policy carefully before making any purchases.
          </p>

          <h3>Intellectual Property</h3>
          <p>
            All content and materials available on the Website, including but
            not limited to text, graphics, logos, images, videos, and software,
            are the property of the Company or its licensors and are protected
            by intellectual property laws. You may not use, modify, copy,
            distribute, transmit, display, perform, reproduce, publish, license,
            create derivative works from, transfer, or sell any content or
            materials obtained from the Website without prior written permission
            from the Company.
          </p>

          <h3>User Conduct</h3>
          <p>When using our Website, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>
              Use the Website for lawful purposes and comply with all applicable
              laws and regulations
            </li>
            <li>Respect the intellectual property rights of others</li>
            <li>
              Not engage in any activity that could harm, disable, or impair the
              functioning of the Website or interfere with other users'
              experience
            </li>
            <li>
              Not attempt to gain unauthorized access to any part of the Website
              or any other systems or networks connected to the Website
            </li>
          </ul>

          <h3>Disclaimer of Warranty</h3>
          <p>
            The Company makes no warranties or representations about the
            accuracy, reliability, completeness, or timeliness of the content
            and materials provided on the Website. The use of the Website is at
            your own risk.
          </p>

          <h3>Limitation of Liability</h3>
          <p>
            To the maximum extent permitted by applicable law, the Company shall
            not be liable for any direct, indirect, incidental, consequential,
            or special damages arising out of or in connection with the use of
            the Website or the inability to use the Website, even if the Company
            has been advised of the possibility of such damages.
          </p>

          <h3>Modifications and Termination</h3>
          <p>
            The Company reserves the right to modify, suspend, or terminate the
            Website or any part thereof at any time without prior notice. We may
            also revise these Terms and Conditions from time to time. By
            continuing to use the Website after any modifications, you agree to
            be bound by the revised Terms and Conditions.
          </p>

          <h3>Governing Law and Jurisdiction</h3>
          <p>
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of [your jurisdiction]. Any dispute arising
            out of or in connection with these Terms and Conditions shall be
            subject to the exclusive jurisdiction of the courts located in [your
            jurisdiction].
          </p>

          <h3>Indemnification</h3>
          <p>
            You agree to indemnify and hold the Company and its officers,
            directors, employees, agents, and affiliates harmless from any
            claims, damages, losses, liabilities, costs, and expenses (including
            reasonable attorneys' fees) arising out of or in connection with
            your use of the Website, violation of these Terms and Conditions, or
            any violation of applicable laws or regulations.
          </p>

          <h3>Third-Party Links</h3>
          <p>
            Our Website may contain links to third-party websites or services
            that are not owned or controlled by the Company. We are not
            responsible for the content, privacy policies, or practices of any
            third-party websites or services. We encourage you to read the terms
            and conditions and privacy policies of any third-party websites or
            services that you visit.
          </p>

          <h3>Severability</h3>
          <p>
            If any provision of these Terms and Conditions is found to be
            invalid, illegal, or unenforceable, the remaining provisions shall
            continue in full force and effect.
          </p>

          <h3>Entire Agreement</h3>
          <p>
            These Terms and Conditions constitute the entire agreement between
            you and the Company regarding the use of the Website and supersede
            any prior or contemporaneous agreements, communications, and
            proposals, whether oral or written, between you and the Company.
          </p>

          <h3>Contact Information</h3>
          <p>
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at{" "}
            <a href="mailto:info@encodingo.com">info@encodingo.com</a>.
          </p>

          <p>
            By using Encodingo.com, you acknowledge that you have read,
            understood, and agreed to these Terms and Conditions.
          </p>
        </main>

        {/* <!-- end --> */}

        <Footer />
        {/* <!-- 
- #BACK TO TOP
--> */}

        <a
          href="#top"
          class="back-top-btn"
          aria-label="back top top"
          data-back-top-btn>
          {/* <ion-icon name="chevron-up" aria-hidden="true"></ion-icon> */}
        </a>

        {/* <!-- 
- custom js link
--> */}
        <script src="./assets/js/script.js" defer></script>

        {/* <!-- 
- ionicon link
--> */}
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </body>
    </>
  );
};

export default Tnc;
