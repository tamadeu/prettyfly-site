'use client';

import Link from 'next/link';

export default function RefundPolicyPage() {
  return (
    <>
      <div className="fa-rp-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Início</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Política de reembolso</span>
          </div>
          <h1 className="fa-rp-h1">Política de reembolso</h1>
        </div>
      </div>

      <div className="container-main fa-rp-content-wrap">
        <div className="fa-rp-prose">

          <p style={para}>Nossa política permite solicitar uma devolução em até 30 dias após o recebimento do produto.</p>
          <p style={para}>Para que a devolução seja aceita, o produto deve estar nas mesmas condições em que foi recebido: sem uso, com as etiquetas e na embalagem original. Também será necessário apresentar o recibo ou comprovante de compra.</p>
          <p style={para}>Para iniciar uma devolução, entre em contato pelo e-mail support@ambaz.com. Os produtos devolvidos devem ser enviados para o seguinte endereço: [INSERIR ENDEREÇO PARA DEVOLUÇÃO]</p>
          <p style={para}>Se a devolução for aprovada, enviaremos uma etiqueta de envio e instruções sobre como e para onde enviar o pacote. Produtos enviados sem uma solicitação prévia de devolução não serão aceitos.</p>
          <p style={para}>Em caso de dúvidas sobre devoluções, entre em contato pelo e-mail support@ambaz.com.</p>

          <h2 className="fa-rp-h2">Avarias e problemas</h2>
          <p style={para}>Confira seu pedido assim que recebê-lo e entre em contato imediatamente se o produto estiver com defeito, danificado ou se você tiver recebido o item errado. Assim, poderemos avaliar o problema e encontrar uma solução.</p>

          <h2 className="fa-rp-h2">Exceções e itens não retornáveis</h2>
          <p style={para}>Alguns tipos de produto não podem ser devolvidos, como itens perecíveis (por exemplo, alimentos, flores ou plantas), produtos personalizados ou feitos sob encomenda e itens de cuidados pessoais (como cosméticos). Também não aceitamos devoluções de materiais perigosos, líquidos inflamáveis ou gases. Entre em contato se tiver dúvidas sobre um produto específico.</p>
          <p style={para}>Infelizmente, não aceitamos devoluções de produtos em oferta nem de cartões-presente.</p>

          <h2 className="fa-rp-h2">Trocas</h2>
          <p style={para}>A maneira mais rápida de receber o produto desejado é devolver o item atual e, após a aprovação da devolução, fazer uma nova compra separadamente.</p>

          <h2 className="fa-rp-h2">Prazo de arrependimento de 14 dias na União Europeia</h2>
          <p style={para}>Sem prejuízo do que foi informado acima, se o produto for enviado para a União Europeia, você tem o direito de cancelar ou devolver o pedido em até 14 dias, por qualquer motivo e sem justificativa. O produto deve estar nas mesmas condições em que foi recebido: sem uso, com as etiquetas e na embalagem original. Também será necessário apresentar o recibo ou comprovante de compra.</p>

          <h2 className="fa-rp-h2">Reembolsos</h2>
          <p style={para}>Avisaremos quando recebermos e inspecionarmos o produto devolvido e informaremos se o reembolso foi aprovado. Se aprovado, o valor será reembolsado automaticamente pelo método de pagamento original em até 10 dias úteis. O banco ou a operadora do cartão também pode levar algum tempo para processar e registrar o reembolso.</p>
          <p style={{ marginBottom: '0' }}>Se tiverem passado mais de 15 dias úteis desde a aprovação da devolução, entre em contato pelo e-mail support@ambaz.com.</p>

        </div>
      </div>

      <style>{`
        .fa-rp-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .fa-rp-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .fa-rp-content-wrap { padding-block: 60px 100px; }
        .fa-rp-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .fa-rp-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }
        @media (max-width: 749px) {
          .fa-rp-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .fa-rp-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .fa-rp-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .fa-rp-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .fa-rp-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}

const para: React.CSSProperties = { marginBottom: '20px' };
