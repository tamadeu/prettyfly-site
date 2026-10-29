import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — Boutique Fashion',
  description: 'Terms and conditions for using Boutique Fashion.',
};

export default function BoutiqueFashionTermsPage() {
  return (
    <>
      <div style={{ backgroundColor: '#f8f8f8', padding: '40px 0 50px', textAlign: 'center' }}>
        <div className="container-main">
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222', marginBottom: '10px' }}>Terms of Service</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/boutique-fashion-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Terms of Service</span>
          </div>
        </div>
      </div>

      <div className="container-main" style={{ paddingBlock: '60px 100px', maxWidth: '680px' }}>
        <p style={{ fontSize: '13px', color: '#999', marginBottom: '32px' }}>Last updated: June 21, 2026</p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>Acceptance of terms</h2>
        <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '20px' }}>
          By accessing or using the Ambaz Boutique Fashion website and making a purchase, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our site.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>Use of the site</h2>
        <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '20px' }}>
          You may use this site for lawful purposes only. You may not use the site in any way that could damage, disable, or impair the site, or interfere with any other party&apos;s use of the site.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>Product information</h2>
        <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '20px' }}>
          We make every effort to display product colours and details accurately. However, we cannot guarantee that your monitor&apos;s display will accurately reflect the actual colour of the product. Sizes may vary slightly between styles.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>Pricing and availability</h2>
        <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '20px' }}>
          Prices are subject to change without notice. We reserve the right to cancel any order where a pricing error has occurred. We do not guarantee that all products will be available at all times.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>Intellectual property</h2>
        <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '20px' }}>
          All content on this site — including images, logos, text, and design — is the property of Ambaz and protected by copyright law. Reproduction without express written permission is prohibited.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>Contact</h2>
        <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75 }}>
          Questions about these terms? Email <a href="mailto:legal@ambaz.com" style={{ color: '#222', textDecoration: 'underline' }}>legal@ambaz.com</a>.
        </p>
      </div>
    </>
  );
}
