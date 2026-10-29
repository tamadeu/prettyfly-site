'use client';

import Link from 'next/link';

export default function GroceryTermsOfServicePage() {
  return (
    <>
      {/* Header */}
      <div className="gr-tos-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/grocery-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Terms of service</span>
          </div>
          <h1 className="gr-tos-h1">Terms of service</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container-main gr-tos-content-wrap">
        <div className="gr-tos-prose">

          <h2 className="gr-tos-h2">OVERVIEW</h2>
          <p style={para}>This website is operated by Ambaz Grocery. Throughout the site, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to Ambaz Grocery. Ambaz Grocery offers this website, including all information, product catalogs, delivery tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
          <p style={para}>By visiting our site and/or placing a grocery order with us, you engage in our &ldquo;Service&rdquo; and agree to be bound by the following terms and conditions (&ldquo;Terms of Service&rdquo;, &ldquo;Terms&rdquo;), including those additional terms and conditions and policies referenced herein and/or available by hyperlink.</p>
          <p style={para}>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or place an order.</p>
          <p style={para}>Any new features, delivery areas, or fulfillment options we add shall also be subject to the Terms of Service. You can review the most current version at any time on this page. Your continued use of the site following the posting of any changes constitutes acceptance of those changes.</p>

          <h2 className="gr-tos-h2">SECTION 1 - ONLINE STORE TERMS</h2>
          <p style={para}>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. Orders containing age-restricted items (including alcohol, tobacco, and certain over-the-counter medications) require a valid government-issued ID at the point of delivery; our driver will refuse delivery if ID cannot be presented.</p>
          <p style={para}>You may not use our products for any illegal or unauthorized purpose, nor may you violate any laws in your jurisdiction in connection with the Service.</p>
          <p style={para}>You must not transmit any worms, viruses, or malicious code through our site.</p>

          <h2 className="gr-tos-h2">SECTION 2 - GENERAL CONDITIONS</h2>
          <p style={para}>We reserve the right to refuse service, decline an order, or limit quantities at our discretion — for example, during high-demand periods or when stock is constrained.</p>
          <p style={para}>You understand that your content (not including payment credentials) may be transferred unencrypted and may involve transmissions over various networks. Payment information is always encrypted during transfer.</p>
          <p style={para}>You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service or our product catalog without express written permission.</p>

          <h2 className="gr-tos-h2">SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</h2>
          <p style={para}>We are not responsible if information on this site, including nutritional details, ingredients, allergens, or country of origin, is not accurate, complete, or current. Always read the packaging of any product you receive before consuming. If you have a food allergy, contact us before placing an order to confirm sourcing details.</p>
          <p style={para}>This site may contain historical or seasonal information that is no longer current. We reserve the right to modify the contents of this site at any time.</p>

          <h2 className="gr-tos-h2">SECTION 4 - PRICING, AVAILABILITY AND SUBSTITUTIONS</h2>
          <p style={para}>Prices for our products are subject to change without notice, including to reflect market movements in fresh produce, dairy, and meat.</p>
          <p style={para}>If an item in your cart is unavailable at the time of fulfillment, our shoppers will either substitute the closest equivalent at the same or lower price, or skip the item and refund the difference, based on your preferences.</p>
          <p style={para}>Weight-variable items (for example, cuts of meat or whole produce) are charged based on the actual weight picked. The final charge may differ slightly from the estimate shown at checkout.</p>

          <h2 className="gr-tos-h2">SECTION 5 - PRODUCTS OR SERVICES</h2>
          <p style={para}>Certain products may be available exclusively online through the website and subject to limited quantities. All product descriptions, nutritional facts, and images are provided in good faith but are subject to the labeling on the physical product you receive.</p>
          <p style={para}>We reserve the right to limit sales geographically. Alcohol, tobacco, and certain other regulated products may not be available in all delivery areas.</p>

          <h2 className="gr-tos-h2">SECTION 6 - DELIVERY, PICKUP AND COLD CHAIN</h2>
          <p style={para}>Delivery time windows shown at checkout are estimates. We will notify you of any delays. If you are not available during your chosen window and perishable items cannot safely be left at your door, we may attempt re-delivery or, with your permission, leave the order at your stated safe location.</p>
          <p style={para}>Perishable items are transported in cold chain vehicles. If an order is delayed to the point of compromising food safety, we will refund or replace affected items at no cost.</p>
          <p style={para}>For more details, please review our Refund Policy.</p>

          <h2 className="gr-tos-h2">SECTION 7 - ACCURACY OF BILLING AND ACCOUNT INFORMATION</h2>
          <p style={para}>We reserve the right to refuse any order. We may, at our discretion, limit or cancel quantities purchased per person, per household, or per order. You agree to provide current, complete, and accurate purchase and account information for all orders, so that we can complete your transactions and contact you if something on your order needs your attention.</p>

          <h2 className="gr-tos-h2">SECTION 8 - THIRD-PARTY LINKS AND TOOLS</h2>
          <p style={para}>Certain content, products, and services on our Service may come from third-party farms, producers, or logistics partners. We provide access to third-party tools &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind. Any use of optional tools is at your own risk.</p>
          <p style={para}>Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating their content or accuracy.</p>

          <h2 className="gr-tos-h2">SECTION 9 - USER COMMENTS, REVIEWS AND SUBMISSIONS</h2>
          <p style={para}>If you send us reviews, feedback, photos of items you received, or other submissions, you agree that we may, at any time and without restriction, use, edit, publish, or distribute them. We are under no obligation to (1) maintain any submissions in confidence; (2) pay compensation; or (3) respond.</p>
          <p style={para}>Submissions must not violate any right of any third-party, including copyright, trademark, or privacy.</p>

          <h2 className="gr-tos-h2">SECTION 10 - PERSONAL INFORMATION</h2>
          <p style={para}>Your submission of personal information through the store is governed by our Privacy Policy.</p>

          <h2 className="gr-tos-h2">SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS</h2>
          <p style={para}>Occasionally there may be information on our site that contains typographical errors, inaccuracies, or omissions relating to product descriptions, pricing, promotions, shipping charges, transit times, and availability. We reserve the right to correct errors and to cancel orders if any information in the Service is inaccurate at any time.</p>

          <h2 className="gr-tos-h2">SECTION 12 - PROHIBITED USES</h2>
          <p style={para}>In addition to other prohibitions set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial, or state regulations; (d) to infringe our intellectual property rights; (e) to harass, abuse, or discriminate; (f) to submit false or misleading information; (g) to upload malicious code; (h) to collect or track the personal information of others; (i) to spam, phish, or scrape; (j) for any obscene or immoral purpose; (k) to circumvent the security of the Service; or (l) to resell items purchased at consumer pricing through bulk or commercial channels.</p>

          <h2 className="gr-tos-h2">SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</h2>
          <p style={para}>We do not guarantee, represent, or warrant that your use of our Service will be uninterrupted, timely, secure, or error-free.</p>
          <p style={para}>You expressly agree that your use of the Service is at your sole risk. The Service and all products delivered through the Service are provided &apos;as is&apos; and &apos;as available&apos; for your use, without any representation, warranties, or conditions of any kind, except as expressly stated by us or required by law.</p>
          <p style={para}>In no case shall Ambaz Grocery, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers, or licensors be liable for any injury, loss, claim, or any indirect, incidental, punitive, special, or consequential damages arising from your use of the Service, except to the extent required by law.</p>

          <h2 className="gr-tos-h2">SECTION 14 - INDEMNIFICATION</h2>
          <p style={para}>You agree to indemnify, defend, and hold harmless Ambaz Grocery and our affiliates from any claim arising out of your breach of these Terms of Service or your violation of any law or the rights of a third-party.</p>

          <h2 className="gr-tos-h2">SECTION 15 - SEVERABILITY</h2>
          <p style={para}>If any provision of these Terms is determined to be unlawful, void, or unenforceable, that provision shall still be enforceable to the fullest extent permitted by law, and the unenforceable portion shall be severed. The remaining provisions remain in full effect.</p>

          <h2 className="gr-tos-h2">SECTION 16 - TERMINATION</h2>
          <p style={para}>These Terms of Service are effective unless and until terminated by either you or us. You may terminate at any time by notifying us that you no longer wish to use our Services. We may terminate this agreement at any time if we suspect you have failed to comply with any term.</p>

          <h2 className="gr-tos-h2">SECTION 17 - ENTIRE AGREEMENT</h2>
          <p style={para}>These Terms of Service and any policies or operating rules posted by us constitute the entire agreement between you and us and govern your use of the Service.</p>

          <h2 className="gr-tos-h2">SECTION 18 - GOVERNING LAW</h2>
          <p style={para}>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the United States.</p>

          <h2 className="gr-tos-h2">SECTION 19 - CHANGES TO TERMS OF SERVICE</h2>
          <p style={para}>You can review the most current version of the Terms of Service at any time at this page.</p>
          <p style={{ marginBottom: '0' }}>We reserve the right to update, change, or replace any part of these Terms of Service by posting updates to our website. It is your responsibility to check for changes. Continued use of the site constitutes acceptance of those changes.</p>

        </div>
      </div>
      <style>{`
        .gr-tos-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .gr-tos-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .gr-tos-content-wrap { padding-block: 60px 100px; }
        .gr-tos-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .gr-tos-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }
        @media (max-width: 749px) {
          .gr-tos-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .gr-tos-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .gr-tos-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .gr-tos-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .gr-tos-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}

const para: React.CSSProperties = {
  marginBottom: '20px',
};
