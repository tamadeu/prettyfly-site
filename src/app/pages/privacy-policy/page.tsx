'use client';

import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <div className="fa-pp-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Privacy policy</span>
          </div>
          <h1 className="fa-pp-h1">Privacy policy</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container-main fa-pp-content-wrap">
        <div className="fa-pp-prose">

          <p style={para}><em>Last updated: August 31, 2024</em></p>

          <p style={para}>This Privacy Policy describes how Ambaz (the &ldquo;Site&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from our store (the &ldquo;Site&rdquo;) or otherwise communicate with us regarding the Site (collectively, the &ldquo;Services&rdquo;). For purposes of this Privacy Policy, &ldquo;you&rdquo; and &ldquo;your&rdquo; means you as the user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected pursuant to this Privacy Policy.</p>

          <p style={para}>Please read this Privacy Policy carefully.</p>

          <h2 className="fa-pp-h2">Changes to This Privacy Policy</h2>
          <p style={para}>We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Site, update the &ldquo;Last updated&rdquo; date and take any other steps required by applicable law.</p>

          <h2 className="fa-pp-h2">How We Collect and Use Your Personal Information</h2>
          <p style={para}>To provide the Services, we collect and have collected over the past 12 months personal information about you from a variety of sources, as set out below. The information that we collect and use varies depending on how you interact with us.</p>
          <p style={para}>In addition to the specific uses set out below, we may use information we collect about you to communicate with you, provide or improve the Services, comply with any applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.</p>

          <h2 className="fa-pp-h2">What Personal Information We Collect</h2>
          <p style={para}>The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we use the term &ldquo;personal information&rdquo;, we are referring to information that identifies, relates to, describes or can be associated with you. The following sections describe the categories and specific types of personal information we collect.</p>

          <h2 className="fa-pp-h2">Information We Collect Directly from You</h2>
          <p style={para}>Information that you directly submit to us through our Services may include:</p>
          <ul style={list}>
            <li>Contact details including your name, address, phone number, and email.</li>
            <li>Order information including your name, billing address, shipping address, payment confirmation, email address, and phone number.</li>
            <li>Account information including your username, password, security questions and other information used for account security purposes.</li>
            <li>Customer support information including the information you choose to include in communications with us, for example, when sending a message through the Services.</li>
          </ul>
          <p style={para}>Some features of the Services may require you to directly provide us with certain information about yourself. You may elect not to provide this information, but doing so may prevent you from using or accessing these features.</p>

          <h2 className="fa-pp-h2">Information We Collect about Your Usage</h2>
          <p style={para}>We may also automatically collect certain information about your interaction with the Services (&ldquo;Usage Data&rdquo;). To do this, we may use cookies, pixels and similar technologies (&ldquo;Cookies&rdquo;). Usage Data may include information about how you access and use our Site and your account, including device information, browser information, information about your network connection, your IP address and other information regarding your interaction with the Services.</p>

          <h2 className="fa-pp-h2">Information We Obtain from Third Parties</h2>
          <p style={para}>Finally, we may obtain information about you from third parties, including from vendors and service providers who may collect information on our behalf, such as:</p>
          <ul style={list}>
            <li>Companies who support our Site and Services.</li>
            <li>Our payment processors, who collect payment information (e.g., bank account, credit or debit card information, billing address) to process your payment in order to fulfill your orders and provide you with products or services you have requested, in order to perform our contract with you.</li>
            <li>When you visit our Site, open or click on emails we send you, or interact with our Services or advertisements, we, or third parties we work with, may automatically collect certain information using online tracking technologies such as pixels, web beacons, software developer kits, third-party libraries, and cookies.</li>
          </ul>
          <p style={para}>Any information we obtain from third parties will be treated in accordance with this Privacy Policy. Also see the section below, Third Party Websites and Links.</p>

          <h2 className="fa-pp-h2">How We Use Your Personal Information</h2>
          <p style={para}><strong>Providing Products and Services.</strong> We use your personal information to provide you with the Services in order to perform our contract with you, including to process your payments, fulfill your orders, to send notifications to you related to your account, purchases, returns, exchanges or other transactions, to create, maintain and otherwise manage your account, to arrange for shipping, facilitate any returns and exchanges and other features and functionalities related to your account.</p>
          <p style={para}><strong>Marketing and Advertising.</strong> We may use your personal information for marketing and promotional purposes, such as to send marketing, advertising and promotional communications by email, text message or postal mail, and to show you advertisements for products or services. This may include using your personal information to better tailor the Services and advertising on our Site and other websites.</p>
          <p style={para}><strong>Security and Fraud Prevention.</strong> We use your personal information to detect, investigate or take action regarding possible fraudulent, illegal or malicious activity. If you choose to use the Services and register an account, you are responsible for keeping your account credentials safe. We highly recommend that you do not share your username, password, or other access details with anyone else. If you believe your account has been compromised, please contact us immediately.</p>
          <p style={para}><strong>Communicating with You and Service Improvement.</strong> We use your personal information to provide you with customer support and improve our Services. This is in our legitimate interests in order to be responsive to you, to provide effective services to you, and to maintain our business relationship with you.</p>

          <h2 className="fa-pp-h2">Cookies</h2>
          <p style={para}>Like many websites, we use Cookies on our Site. We use Cookies to power and improve our Site and our Services (including to remember your actions and preferences), to run analytics and better understand user interaction with the Services. We may also permit third parties and services providers to use Cookies on our Site to better tailor the services, products and advertising on our Site and other websites.</p>
          <p style={para}>Most browsers automatically accept Cookies by default, but you can choose to set your browser to remove or reject Cookies through your browser controls. Please keep in mind that removing or blocking Cookies can negatively impact your user experience and may cause some of the Services, including certain features and general functionality, to work incorrectly or no longer be available. Additionally, blocking Cookies may not completely prevent how we share information with third parties such as our advertising partners.</p>

          <h2 className="fa-pp-h2">How We Disclose Personal Information</h2>
          <p style={para}>In certain circumstances, we may disclose your personal information to third parties for contract fulfillment purposes, legitimate purposes and other reasons subject to this Privacy Policy. Such circumstances may include:</p>
          <ul style={list}>
            <li>With vendors or other third parties who perform services on our behalf (e.g., IT management, payment processing, data analytics, customer support, cloud storage, fulfillment and shipping).</li>
            <li>With business and marketing partners to provide services and advertise to you.</li>
            <li>When you direct, request us or otherwise consent to our disclosure of certain information to third parties, such as to ship you products or through your use of social media widgets or login integrations, with your consent.</li>
            <li>With our affiliates or otherwise within our corporate group, in our legitimate interests to run a successful business.</li>
            <li>In connection with a business transaction such as a merger or bankruptcy, to comply with any applicable legal obligations, to enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.</li>
          </ul>

          <h2 className="fa-pp-h2">Third Party Websites and Links</h2>
          <p style={para}>Our Site may provide links to websites or other online platforms operated by third parties. If you follow links to sites not affiliated or controlled by us, you should review their privacy and security policies and other terms and conditions. We do not guarantee and are not responsible for the privacy or security of such sites, including the accuracy, completeness, or reliability of information found on these sites. Information you provide on public or semi-public venues, including information you share on third-party social networking platforms may also be viewable by other users of the Services and/or users of those third-party platforms without limitation as to its use by us or by a third party. Our inclusion of such links does not, by itself, imply any endorsement of the content on such platforms or of their owners or operators, except as disclosed on the Services.</p>

          <h2 className="fa-pp-h2">Children&apos;s Data</h2>
          <p style={para}>The Services are not intended to be used by children, and we do not knowingly collect any personal information about children. If you are the parent or guardian of a child who has provided us with their personal information, you may contact us using the contact details set out below to request that it be deleted.</p>

          <h2 className="fa-pp-h2">Security and Retention of Your Information</h2>
          <p style={para}>Please be aware that no security measures are perfect or impenetrable, and we cannot guarantee &ldquo;perfect security.&rdquo; In addition, any information you send to us may not be secure while in transit. We recommend that you do not use insecure channels to communicate sensitive or confidential information to us.</p>
          <p style={para}>How long we retain your personal information depends on different factors, such as whether we need the information to maintain your account, to provide the Services, comply with legal obligations, resolve disputes or enforce other applicable contracts and policies.</p>

          <h2 className="fa-pp-h2">Your Rights</h2>
          <p style={para}>Depending on where you live, you may have some or all of the rights listed below in relation to your personal information. However, these rights are not absolute, may apply only in certain circumstances and, in certain cases, we may decline your request as permitted by law.</p>
          <ul style={list}>
            <li><strong>Right to Access / Know:</strong> You may have a right to request access to personal information that we hold about you, including details relating to the ways in which we use and share your information.</li>
            <li><strong>Right to Delete:</strong> You may have a right to request that we delete personal information we maintain about you.</li>
            <li><strong>Right to Correct:</strong> You may have a right to request that we correct inaccurate personal information we maintain about you.</li>
            <li><strong>Right of Portability:</strong> You may have a right to receive a copy of the personal information we hold about you and to request that we transfer it to a third party, in certain circumstances and with certain exceptions.</li>
            <li><strong>Right to Opt out of Sale or Sharing or Targeted Advertising:</strong> You may have a right to direct us not to &ldquo;sell&rdquo; or &ldquo;share&rdquo; your personal information or to opt out of the processing of your personal information for purposes considered to be &ldquo;targeted advertising&rdquo;, as defined in applicable privacy laws.</li>
            <li><strong>Restriction of Processing:</strong> You may have the right to ask us to stop or restrict our processing of personal information.</li>
            <li><strong>Withdrawal of Consent:</strong> Where we rely on consent to process your personal information, you may have the right to withdraw this consent.</li>
            <li><strong>Appeal:</strong> You may have a right to appeal our decision if we decline to process your request. You can do so by replying directly to our denial.</li>
            <li><strong>Managing Communication Preferences:</strong> We may send you promotional emails, and you may opt out of receiving these at any time by using the unsubscribe option displayed in our emails to you. If you opt out, we may still send you non-promotional emails, such as those about your account or orders that you have made.</li>
          </ul>
          <p style={para}>You may exercise any of these rights where indicated on our Site or by contacting us using the contact details provided below.</p>
          <p style={para}>We will not discriminate against you for exercising any of these rights. We may need to collect information from you to verify your identity, such as your email address or account information, before providing a substantive response to the request. In accordance with applicable laws, you may designate an authorized agent to make requests on your behalf to exercise your rights. Before accepting such a request from an agent, we will require that the agent provide proof you have authorized them to act on your behalf, and we may need you to verify your identity directly with us. We will respond to your request in a timely manner as required under applicable law.</p>

          <h2 className="fa-pp-h2">Complaints</h2>
          <p style={para}>If you have complaints about how we process your personal information, please contact us using the contact details provided below. If you are not satisfied with our response to your complaint, depending on where you live you may have the right to appeal our decision by contacting us using the contact details set out below, or lodge your complaint with your local data protection authority.</p>

          <h2 className="fa-pp-h2">International Users</h2>
          <p style={para}>Please note that we may transfer, store and process your personal information outside the country you live in. Your personal information is also processed by staff and third party service providers and partners in these countries.</p>
          <p style={para}>If we transfer your personal information out of Europe, we will rely on recognized transfer mechanisms like the European Commission&apos;s Standard Contractual Clauses, or any equivalent contracts issued by the relevant competent authority of the UK, as relevant, unless the data transfer is to a country that has been determined to provide an adequate level of protection.</p>

          <h2 className="fa-pp-h2">Contact</h2>
          <p style={{ marginBottom: '0' }}>Should you have any questions about our privacy practices or this Privacy Policy, or if you would like to exercise any of the rights available to you, please email us at support@ambaz.com or contact us at our office address.</p>

        </div>
      </div>
      <style>{`
        .fa-pp-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .fa-pp-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .fa-pp-content-wrap { padding-block: 60px 100px; }
        .fa-pp-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .fa-pp-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }
        @media (max-width: 749px) {
          .fa-pp-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .fa-pp-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .fa-pp-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .fa-pp-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .fa-pp-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}

const para: React.CSSProperties = {
  marginBottom: '20px',
};

const list: React.CSSProperties = {
  marginBottom: '20px', paddingLeft: '24px',
  display: 'flex', flexDirection: 'column', gap: '8px',
};
