'use client';

import Link from 'next/link';

export default function PetFoodTermsOfServicePage() {
  return (
    <>
      {/* ── Page Header ── */}
      <div className="tos-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/home/pet-food-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Terms of service</span>
          </div>
          <h1 className="tos-h1">Terms of service</h1>
        </div>
      </div>

      {/* ── Content Block ── */}
      <div className="container-main tos-content-wrap">
        <div className="tos-prose">

          <h2 className="tos-h2">OVERVIEW</h2>
          <p style={para}>This website is operated by Ambaz Pet. Throughout the site, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo;, and &ldquo;our&rdquo; refer to Ambaz Pet. Ambaz Pet offers this website, including all information, product catalogs, subscription tools, and services available from this site, conditioned on your acceptance of all terms, conditions, policies, and notices stated here.</p>
          <p style={para}>By visiting our site or placing a pet food order, you engage in our &ldquo;Service&rdquo; and agree to be bound by the following terms and conditions, including any additional terms, conditions, and policies referenced herein and/or available by hyperlink.</p>

          <h2 className="tos-h2">SECTION 1 - ONLINE STORE TERMS</h2>
          <p style={para}>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You agree to use our products only for the care of pets in your household and not to resell, repackage, or distribute them commercially.</p>
          <p style={para}>You may not use our products for any illegal purpose, nor violate any laws in your jurisdiction in connection with the Service.</p>

          <h2 className="tos-h2">SECTION 2 - GENERAL CONDITIONS</h2>
          <p style={para}>We reserve the right to refuse service, decline an order, or limit quantities at our discretion — for example, during supply shortages or when an order appears abnormal in size or pattern.</p>
          <p style={para}>You agree not to reproduce, duplicate, copy, or exploit any portion of the Service or our product catalog without express written permission.</p>

          <h2 className="tos-h2">SECTION 3 - ACCURACY OF NUTRITION AND INGREDIENT INFORMATION</h2>
          <p style={para}>We are not responsible if information on this site — including nutritional panels, ingredients, feeding guidance, country of origin, or species suitability — is not perfectly accurate or current. Always read the packaging before feeding. If your pet has a known allergy or a prescription diet, consult your veterinarian before switching formulas.</p>

          <h2 className="tos-h2">SECTION 4 - PRICING, AVAILABILITY AND SUBSTITUTIONS</h2>
          <p style={para}>Prices are subject to change without notice, including to reflect market movements in raw ingredients.</p>
          <p style={para}>If an item in your cart is unavailable at fulfillment, our team will either substitute the closest equivalent at the same or lower price, or skip the item and refund the difference, based on your preferences.</p>

          <h2 className="tos-h2">SECTION 5 - SUBSCRIPTIONS &amp; AUTO-REORDER</h2>
          <p style={para}>If you enroll in a subscription or auto-reorder program, you authorize us to charge your payment method at the cadence you select. You may pause, skip, or cancel upcoming shipments from your account at any time before the cutoff window listed in your account dashboard.</p>

          <h2 className="tos-h2">SECTION 6 - DELIVERY, PICKUP AND STORAGE</h2>
          <p style={para}>Delivery time windows shown at checkout are estimates. If your order contains refrigerated or frozen items and cannot be delivered due to your absence, we may attempt re-delivery or leave the order at your stated safe location with your permission. For more details, see our Refund Policy.</p>

          <h2 className="tos-h2">SECTION 7 - PROHIBITED USES</h2>
          <p style={para}>You are prohibited from using the site or its content for any unlawful purpose, to infringe intellectual property rights, to transmit malicious code, to scrape catalog data in bulk, or to bypass subscription pricing through repeated account creation.</p>

          <h2 className="tos-h2">SECTION 8 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</h2>
          <p style={para}>We do not guarantee, represent, or warrant that your use of our Service will be uninterrupted, timely, secure, or error-free. The Service and all products are provided &apos;as is&apos; and &apos;as available&apos;, except as expressly stated by us or required by law.</p>
          <p style={para}>In no case shall Ambaz Pet, our directors, officers, employees, affiliates, agents, contractors, suppliers, service providers, or licensors be liable for any injury, loss, claim, or any indirect, incidental, punitive, special, or consequential damages arising from your use of the Service, except to the extent required by law.</p>

          <h2 className="tos-h2">SECTION 9 - GOVERNING LAW</h2>
          <p style={para}>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the United States.</p>

          <h2 className="tos-h2">SECTION 10 - CHANGES TO TERMS OF SERVICE</h2>
          <p style={{ marginBottom: '0' }}>We reserve the right to update, change, or replace any part of these Terms of Service by posting updates to our website. It is your responsibility to check for changes. Continued use of the site constitutes acceptance.</p>

        </div>
      </div>

      <style>{`
        /* ─── base ─── */
        .tos-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .tos-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .tos-content-wrap { padding-block: 60px 100px; }
        .tos-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .tos-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }

        /* ─── ≤749px: fluid scaling ─── */
        @media (max-width: 749px) {
          .tos-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .tos-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .tos-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .tos-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .tos-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}

const para: React.CSSProperties = { marginBottom: '20px' };
