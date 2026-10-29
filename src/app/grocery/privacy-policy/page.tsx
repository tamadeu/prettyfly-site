'use client';

import Link from 'next/link';

export default function GroceryPrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <div className="gr-pp-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/grocery-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Privacy policy</span>
          </div>
          <h1 className="gr-pp-h1">Privacy policy</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container-main gr-pp-content-wrap">
        <div className="gr-pp-prose">

          <p style={para}><em>Last updated: April 21, 2026</em></p>

          <p style={para}>This Privacy Policy describes how Ambaz Grocery (the &ldquo;Site&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and discloses your personal information when you place a grocery order, browse our catalog, receive a delivery, or otherwise communicate with us regarding our services (collectively, the &ldquo;Services&rdquo;). For purposes of this Privacy Policy, &ldquo;you&rdquo; and &ldquo;your&rdquo; means you as the user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected pursuant to this Privacy Policy.</p>

          <p style={para}>Please read this Privacy Policy carefully before placing an order.</p>

          <h2 className="gr-pp-h2">Changes to This Privacy Policy</h2>
          <p style={para}>We may update this Privacy Policy from time to time, including to reflect changes to our fulfillment, delivery, or sourcing practices, or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Site, update the &ldquo;Last updated&rdquo; date, and take any other steps required by applicable law.</p>

          <h2 className="gr-pp-h2">How We Collect and Use Your Personal Information</h2>
          <p style={para}>To fulfill grocery orders and keep you informed about deliveries, we collect personal information from a variety of sources, as set out below. The information we collect varies depending on how you interact with us.</p>
          <p style={para}>In addition to the specific uses set out below, we may use information we collect about you to communicate about your order, substitute items with your consent, improve our sourcing and route planning, comply with applicable food-safety and traceability obligations, and to protect the Services and our users.</p>

          <h2 className="gr-pp-h2">What Personal Information We Collect</h2>
          <p style={para}>The types of personal information we obtain about you depend on how you interact with the Services. &ldquo;Personal information&rdquo; here means information that identifies, relates to, describes, or can be associated with you.</p>

          <h2 className="gr-pp-h2">Information We Collect Directly from You</h2>
          <p style={para}>Information that you directly submit to us through our Services may include:</p>
          <ul style={list}>
            <li>Contact and delivery details including your name, delivery address, apartment access instructions, phone number, and email.</li>
            <li>Order information including your grocery cart contents, substitution preferences, dietary notes, billing address, and payment confirmation.</li>
            <li>Account information including your username, password, security questions, saved addresses, and loyalty preferences.</li>
            <li>Customer support information including the content of messages and photos you send us about order issues or freshness concerns.</li>
          </ul>

          <h2 className="gr-pp-h2">Information We Collect about Your Usage</h2>
          <p style={para}>We automatically collect certain information about your interaction with the Services (&ldquo;Usage Data&rdquo;), including device information, browser information, your network connection, your IP address, and pages you visit. For delivery, we may use approximate location (with your permission) to surface available time windows and confirm driver arrival.</p>

          <h2 className="gr-pp-h2">Information We Obtain from Third Parties</h2>
          <p style={para}>We may obtain information about you from third parties, including:</p>
          <ul style={list}>
            <li>Partner farms, suppliers, and logistics providers who fulfill portions of your order.</li>
            <li>Payment processors, who collect bank or card information to process your payment and refund any missing items.</li>
            <li>Analytics and advertising partners who help us understand how shoppers use the site and measure the effectiveness of our campaigns.</li>
          </ul>

          <h2 className="gr-pp-h2">How We Use Your Personal Information</h2>
          <p style={para}><strong>Fulfilling Orders.</strong> We use your personal information to pick, pack, and deliver your grocery order, process payments and refunds, and communicate with you about substitutions, delivery windows, and driver arrival.</p>
          <p style={para}><strong>Freshness &amp; Quality.</strong> We use order history and feedback to improve sourcing, cold-chain handling, and packaging — so the produce, dairy, and meat you receive stay fresh from warehouse to doorstep.</p>
          <p style={para}><strong>Marketing and Offers.</strong> We may use your personal information to send weekly deals, seasonal menus, and promotional offers by email or SMS. You can opt out of marketing communications at any time.</p>
          <p style={para}><strong>Security and Fraud Prevention.</strong> We use your personal information to detect and prevent fraudulent orders and to protect our delivery network.</p>

          <h2 className="gr-pp-h2">Cookies</h2>
          <p style={para}>Like most grocery websites, we use cookies to remember your cart, preferred store, delivery address, and substitution preferences across visits. We also use cookies for analytics and to measure the effectiveness of promotions. You can disable cookies in your browser, but this may prevent some features such as saved carts from working.</p>

          <h2 className="gr-pp-h2">How We Disclose Personal Information</h2>
          <p style={para}>In certain circumstances, we may disclose your personal information to third parties for order fulfillment, legitimate business purposes, and other reasons subject to this Privacy Policy, including:</p>
          <ul style={list}>
            <li>With our grocery partners, fulfillment centers, and drivers to pick and deliver your order.</li>
            <li>With payment processors to complete your transaction.</li>
            <li>With analytics and marketing partners who help us tailor the shopping experience.</li>
            <li>When required by law, including to comply with food safety, traceability, or consumer protection regulations.</li>
          </ul>

          <h2 className="gr-pp-h2">Third Party Websites and Links</h2>
          <p style={para}>Our Site may link to third-party sites, such as recipe blogs, producer profiles, or logistics tracking portals. If you follow these links, please review the privacy policies of those sites — we are not responsible for their practices.</p>

          <h2 className="gr-pp-h2">Children&apos;s Data</h2>
          <p style={para}>The Services are intended for adult shoppers. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it.</p>

          <h2 className="gr-pp-h2">Security and Retention of Your Information</h2>
          <p style={para}>We use industry-standard security controls to protect your information, but no system is perfectly secure. We retain order and delivery records for as long as needed to provide the Services, comply with accounting and food-safety regulations, and resolve disputes.</p>

          <h2 className="gr-pp-h2">Your Rights</h2>
          <p style={para}>Depending on where you live, you may have rights to access, delete, correct, port, or opt out of the sale of your personal information. You may also opt out of marketing communications at any time using the unsubscribe link in our emails or by contacting support.</p>

          <h2 className="gr-pp-h2">Complaints</h2>
          <p style={para}>If you have complaints about how we handle your personal information, please contact us. If you are not satisfied with our response, depending on where you live you may have the right to lodge a complaint with your local data protection authority.</p>

          <h2 className="gr-pp-h2">International Users</h2>
          <p style={para}>Please note that we may transfer, store, and process your personal information outside the country you live in. Your personal information is also processed by staff and third-party service providers and partners in these countries.</p>

          <h2 className="gr-pp-h2">Contact</h2>
          <p style={{ marginBottom: '0' }}>Questions about our privacy practices, or want to exercise one of your rights? Email us at support@ambaz.com or contact us at our office address.</p>

        </div>
      </div>
      <style>{`
        .gr-pp-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .gr-pp-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .gr-pp-content-wrap { padding-block: 60px 100px; }
        .gr-pp-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .gr-pp-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }
        @media (max-width: 749px) {
          .gr-pp-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .gr-pp-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .gr-pp-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .gr-pp-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .gr-pp-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
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
