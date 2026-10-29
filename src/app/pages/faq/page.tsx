'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ── FAQ Accordion ── */

function FaqAccordion({ items, defaultOpen = 0 }: { items: { question: string; answer: string }[]; defaultOpen?: number | null }) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const isFirst = i === 0;
        const isLast = i === items.length - 1;
        return (
          <div key={i} style={{ borderTop: isFirst ? 'none' : '1px solid #e5e5e5', borderBottom: isLast ? 'none' : undefined }}>
            <button
              onClick={() => toggle(i)}
              className="fa-faq-btn"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                width: '100%', padding: '22px 0', fontSize: '24px', fontWeight: 600,
                color: '#222', background: 'none', border: 'none', cursor: 'pointer',
                textAlign: 'left', gap: '16px',
              }}
            >
              <span style={{ flex: 1 }}>{item.question}</span>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, width: '24px', height: '24px', position: 'relative',
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 10 10" width="20" height="20"
                  style={{ position: 'absolute', transition: 'opacity 350ms ease, transform 350ms ease', opacity: isOpen ? 0 : 1, transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 10 2" width="20" height="20"
                  style={{ position: 'absolute', transition: 'opacity 350ms ease, transform 350ms ease', opacity: isOpen ? 1 : 0, transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor" />
                </svg>
              </span>
            </button>
            <div
              ref={(el) => { faqRefs.current[i] = el; }}
              style={{
                maxHeight: isOpen ? `${faqRefs.current[i]?.scrollHeight || 500}px` : '0',
                opacity: isOpen ? 1 : 0,
                overflow: 'hidden',
                transition: 'max-height 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              <div style={{ paddingBottom: '22px', fontSize: '14px', color: '#555', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Page ── */

export default function FAQPage() {
  return (
    <>
      {/* Page Header */}
      <div className="fa-faq-page-header">
        <div className="container-main">
          <h1 className="fa-faq-h1">Perguntas frequentes</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Início</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Perguntas frequentes</span>
          </div>
        </div>
      </div>

      {/* Section 1 — Shopping Information */}
      <div className="container-main fa-faq-section">
        <h2 className="fa-faq-section-h2">Informações sobre compras</h2>
        <div className="fa-faq-grid">
          <div>
            <FaqAccordion
              defaultOpen={null}
              items={[
                {
                  question: 'Como faço um pedido?',
                  answer: 'Navegue pela loja e adicione os produtos desejados ao carrinho. Depois, vá para a finalização da compra e informe seus dados de entrega e pagamento. Após a confirmação, processaremos o pedido e enviaremos um e-mail de confirmação.',
                },
                {
                  question: 'Quais formas de pagamento vocês aceitam?',
                  answer: 'Aceitamos Visa, Mastercard, American Express, PayPal e outras formas de pagamento importantes. Todas as transações são protegidas por criptografia SSL.',
                },
                {
                  question: 'Vocês fazem entregas internacionais?',
                  answer: 'Sim, fazemos entregas internacionais para a maioria dos países. O frete e o prazo variam conforme o destino. Consulte nossa página de envios para mais informações.',
                },
                {
                  question: 'Quais são os prazos de entrega?',
                  answer: 'Pedidos nacionais geralmente chegam em 3 a 7 dias úteis. Pedidos internacionais podem levar de 7 a 21 dias úteis, dependendo do destino.',
                },
              ]}
            />
          </div>
          <div className="fa-faq-img-wrap">
            <Image
              src="/fashion/faq/faq2.webp"
              alt="Informações sobre compras"
              fill
              style={{ objectFit: 'contain', objectPosition: 'center' }}
              sizes="(max-width: 991px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Section 2 — Payment Information */}
      <div className="fa-faq-section-2">
        <div className="container-main fa-faq-section">
          <h2 className="fa-faq-section-h2">Informações sobre pagamentos</h2>
          <div className="fa-faq-grid">
            <div>
              <FaqAccordion
                defaultOpen={null}
                items={[
                  {
                    question: 'Quais formas de pagamento vocês aceitam?',
                    answer: 'Aceitamos diversas formas de pagamento, incluindo Visa, Mastercard, American Express, PayPal, Apple Pay e Google Pay. Todas as transações são processadas com segurança.',
                  },
                  {
                    question: 'Meus dados de pagamento estão seguros?',
                    answer: 'Sim. Levamos a segurança dos seus dados de pagamento a sério. Nosso site usa conexões criptografadas (SSL) para proteger suas informações pessoais e de pagamento durante a transação.',
                  },
                  {
                    question: 'Vocês aceitam pagamentos em várias moedas?',
                    answer: 'Sim, aceitamos pagamentos em várias moedas. As opções disponíveis serão exibidas na finalização da compra, de acordo com sua localização.',
                  },
                  {
                    question: 'Posso solicitar o reembolso do pagamento?',
                    answer: 'Sim. Se você não estiver satisfeito com a compra, poderá solicitar um reembolso em até 30 dias após a entrega. Entre em contato com nossa equipe de suporte para receber ajuda.',
                  },
                ]}
              />
            </div>
            <div className="fa-faq-img-wrap">
              <Image
                src="/fashion/faq/faq1.webp"
                alt="Informações sobre pagamentos"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 — Order & Returns */}
      <div className="container-main fa-faq-section">
        <h2 className="fa-faq-section-h2">Pedidos e devoluções</h2>
        <div className="fa-faq-full-width">
          <FaqAccordion
            defaultOpen={null}
            items={[
              {
                question: 'Quanto tempo leva para processar um pedido?',
                answer: 'Os pedidos geralmente são processados em 1 a 3 dias úteis. Assim que o pedido for enviado, você receberá um código de rastreamento por e-mail para acompanhar a entrega.',
              },
              {
                question: 'Vocês fazem entregas internacionais?',
                answer: 'Sim, fazemos entregas internacionais para a maioria dos países. O frete e o prazo variam conforme o destino. Consulte nossa página de envios para mais informações.',
              },
              {
                question: 'Qual é a política de devolução?',
                answer: 'Nossa política permite devolver produtos elegíveis dentro do prazo informado após a entrega. Para que a devolução seja aceita, o item deve estar sem uso, em sua condição e embalagem originais. Alguns produtos personalizados ou íntimos podem não ser elegíveis por motivos de higiene.',
              },
              {
                question: 'Posso trocar um produto em vez de devolvê-lo?',
                answer: 'Sim, oferecemos trocas por produtos de valor igual ou menor. Entre em contato com nossa equipe de suporte para iniciar a troca em até 30 dias após o recebimento do pedido.',
              },
            ]}
          />
        </div>
      </div>

      <style>{`
        .fa-faq-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .fa-faq-h1 { font-size: 40px; font-weight: 600; color: #222; margin-bottom: 10px; }
        .fa-faq-section { padding-block: 80px; }
        .fa-faq-section-h2 { font-size: 36px; font-weight: 700; color: #222; text-align: center; margin-bottom: 50px; }
        .fa-faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .fa-faq-img-wrap { position: relative; width: 100%; min-height: 710px; }
        .fa-faq-section-2 { background-color: rgb(247, 248, 252); }
        .fa-faq-full-width { max-width: 1100px; margin: 0 auto; }
        @media (max-width: 991px) {
          .fa-faq-grid { grid-template-columns: 1fr; gap: 40px; }
          .fa-faq-img-wrap { order: -1; min-height: 400px; }
        }
        @media (max-width: 749px) {
          .fa-faq-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .fa-faq-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .fa-faq-section { padding-block: clamp(48px, 8vw, 80px); }
          .fa-faq-section-h2 { font-size: clamp(22px, 5.5vw, 36px); margin-bottom: clamp(28px, 5vw, 50px); }
          .fa-faq-img-wrap { min-height: clamp(280px, 60vw, 400px); }
          .fa-faq-btn { font-size: clamp(16px, 4.5vw, 20px) !important; padding: 16px 0 !important; }
        }
      `}</style>
    </>
  );
}
