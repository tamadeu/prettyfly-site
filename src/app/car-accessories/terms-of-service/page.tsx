'use client';

import Link from 'next/link';

export default function CarAccessoriesTermsOfServicePage() {
  return (
    <>
      {/* ── Page Header ── */}
      <div className="ca-tos-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/car-accessories-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Terms of service</span>
          </div>
          <h1 className="ca-tos-h1">Terms of service</h1>
        </div>
      </div>

      {/* ── Content Block ── */}
      <div className="container-main ca-tos-content-wrap">
        <div className="ca-tos-prose">

          <h2 className="ca-tos-h2">OVERVIEW</h2>
          <p style={para}>This website is operated by AutoPro. Throughout the site, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo;, and &ldquo;our&rdquo; refer to AutoPro. AutoPro offers this website, including all information, product catalogs, and services available from this site, conditioned on your acceptance of all terms, conditions, policies, and notices stated here.</p>
          <p style={para}>By visiting our site or placing an order, you engage in our &ldquo;Service&rdquo; and agree to be bound by the following terms and conditions, including any additional terms, conditions, and policies referenced herein and/or available by hyperlink.</p>

          <h2 className="ca-tos-h2">SECTION 1 - ONLINE STORE TERMS</h2>
          <p style={para}>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You agree to use our products only for lawful automotive purposes and not to resell, repackage, or distribute them commercially without prior written consent.</p>
          <p style={para}>You may not use our products or the site for any illegal purpose, nor violate any laws in your jurisdiction in connection with the Service.</p>

          <h2 className="ca-tos-h2">SECTION 2 - GENERAL CONDITIONS</h2>
          <p style={para}>We reserve the right to refuse service, decline an order, or limit quantities at our discretion — for example, during inventory shortages or when an order appears abnormal in size or pattern.</p>
          <p style={para}>You agree not to reproduce, duplicate, copy, or exploit any portion of the Service or our product catalog without express written permission.</p>

          <h2 className="ca-tos-h2">SECTION 3 - ACCURACY OF PRODUCT AND COMPATIBILITY INFORMATION</h2>
          <p style={para}>We make reasonable efforts to ensure that compatibility information, specifications, and fitment data on this site are accurate. However, we are not responsible for typographical errors or inaccuracies. Always verify the year, make, model, and sub-model of your vehicle before ordering. Consult a professional mechanic if you are unsure whether a part is suitable for your specific vehicle.</p>

          <h2 className="ca-tos-h2">SECTION 4 - PRICING AND AVAILABILITY</h2>
          <p style={para}>Prices are subject to change without notice, including to reflect market movements in raw materials and logistics costs.</p>
          <p style={para}>If a pricing error is discovered on your order, we will contact you before processing payment. We reserve the right to cancel orders placed at incorrect prices.</p>

          <h2 className="ca-tos-h2">SECTION 5 - ORDERS AND PAYMENT</h2>
          <p style={para}>All orders are subject to product availability. We reserve the right to limit or cancel quantities purchased per person, per household, or per order. Payment must be made in full at time of purchase. We accept major credit cards, PayPal, and other payment methods listed at checkout.</p>

          <h2 className="ca-tos-h2">SECTION 6 - SHIPPING AND DELIVERY</h2>
          <p style={para}>Delivery time windows shown at checkout are estimates and not guarantees. Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier. For more details, see our Refund Policy.</p>

          <h2 className="ca-tos-h2">SECTION 7 - PROHIBITED USES</h2>
          <p style={para}>You are prohibited from using the site or its content for any unlawful purpose, to infringe intellectual property rights, to transmit malicious code, to scrape catalog or compatibility data in bulk, or to bypass any pricing or availability restrictions.</p>

          <h2 className="ca-tos-h2">SECTION 8 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</h2>
          <p style={para}>We do not guarantee, represent, or warrant that your use of our Service will be uninterrupted, timely, secure, or error-free. The Service and all products are provided &apos;as is&apos; and &apos;as available&apos;, except as expressly stated by us or required by law.</p>
          <p style={para}>In no case shall AutoPro, our directors, officers, employees, affiliates, agents, contractors, suppliers, service providers, or licensors be liable for any injury, loss, claim, or any indirect, incidental, punitive, special, or consequential damages arising from your use of the Service or any products purchased through it.</p>

          <h2 className="ca-tos-h2">SECTION 9 - GOVERNING LAW</h2>
          <p style={para}>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the United States.</p>

          <h2 className="ca-tos-h2">SECTION 10 - CHANGES TO TERMS OF SERVICE</h2>
          <p style={{ marginBottom: '0' }}>We reserve the right to update, change, or replace any part of these Terms of Service by posting updates to our website. It is your responsibility to check for changes. Continued use of the site constitutes acceptance.</p>

        </div>
      </div>

      <style>{`
        /* ─── base ─── */
        .ca-tos-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .ca-tos-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .ca-tos-content-wrap { padding-block: 60px 100px; }
        .ca-tos-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .ca-tos-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }

        /* ─── ≤749px: fluid scaling ─── */
        @media (max-width: 749px) {
          .ca-tos-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .ca-tos-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .ca-tos-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .ca-tos-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .ca-tos-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}

const para: React.CSSProperties = { marginBottom: '20px' };
