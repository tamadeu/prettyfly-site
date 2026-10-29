'use client';

import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <>
      {/* Header */}
      <div className="fa-tos-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Início</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Termos de serviço</span>
          </div>
          <h1 className="fa-tos-h1">Termos de serviço</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container-main fa-tos-content-wrap">
        <div className="fa-tos-prose">

          <h2 className="fa-tos-h2">VISÃO GERAL</h2>
          <p style={para}>Este site é operado pela Ambaz. Em todo o site, os termos &ldquo;nós&rdquo;, &ldquo;nos&rdquo; e &ldquo;nosso&rdquo; se referem à Ambaz. A Ambaz oferece este site, incluindo todas as informações, ferramentas e serviços disponíveis, condicionados à aceitação de todos os termos, condições, políticas e avisos aqui apresentados.</p>
          <p style={para}>Ao visitar nosso site ou comprar algo conosco, você utiliza nosso &ldquo;Serviço&rdquo; e concorda com os seguintes termos e condições (&ldquo;Termos de serviço&rdquo; ou &ldquo;Termos&rdquo;), incluindo os termos, condições e políticas adicionais mencionados aqui ou disponíveis por meio de links. Estes Termos se aplicam a todos os usuários do site, incluindo visitantes, fornecedores, clientes, comerciantes e colaboradores de conteúdo.</p>
          <p style={para}>Leia estes Termos de serviço com atenção antes de acessar ou utilizar nosso site. Ao acessar ou utilizar qualquer parte dele, você concorda com estes Termos. Se não concordar com todos os termos e condições deste contrato, não poderá acessar o site nem utilizar os Serviços. Se estes Termos forem considerados uma oferta, a aceitação estará expressamente limitada a eles.</p>
          <p style={para}>Novos recursos ou ferramentas adicionados à loja também estarão sujeitos a estes Termos. Você pode consultar a versão mais recente nesta página. Podemos atualizar, alterar ou substituir qualquer parte dos Termos publicando as mudanças em nosso site. É sua responsabilidade consultar esta página periodicamente. A continuidade do uso ou do acesso ao site após a publicação das alterações representa sua aceitação.</p>
          <p style={para}>Nossa loja é hospedada pela Shopify Inc., que fornece a plataforma de comércio eletrônico on-line que nos permite vender produtos e Serviços.</p>

          <h2 className="fa-tos-h2">SEÇÃO 1 — TERMOS DA LOJA ON-LINE</h2>
          <p style={para}>Ao concordar com estes Termos, você declara ter pelo menos a maioridade legal em seu estado ou província de residência ou, caso seja maior de idade, ter autorizado seus dependentes menores a utilizar este site.</p>
          <p style={para}>Você não pode utilizar nossos produtos para fins ilegais ou não autorizados, nem violar as leis de sua jurisdição ao utilizar o Serviço, incluindo leis de direitos autorais.</p>
          <p style={para}>Você não deve transmitir worms, vírus ou qualquer código de natureza destrutiva.</p>
          <p style={para}>O descumprimento ou a violação de qualquer um destes Termos resultará no encerramento imediato dos Serviços.</p>

          <h2 className="fa-tos-h2">SEÇÃO 2 — CONDIÇÕES GERAIS</h2>
          <p style={para}>Reservamo-nos o direito de recusar o Serviço a qualquer pessoa, por qualquer motivo e a qualquer momento.</p>
          <p style={para}>Você entende que seu conteúdo (exceto informações de cartão de crédito) pode ser transferido sem criptografia e envolver (a) transmissões por várias redes e (b) alterações para se adaptar aos requisitos técnicos de redes ou dispositivos. As informações de cartão de crédito são sempre criptografadas durante a transmissão pelas redes.</p>
          <p style={para}>Você concorda em não reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte do Serviço, seu uso ou acesso, nem qualquer contato no site por meio do qual o Serviço seja fornecido, sem nossa autorização expressa por escrito.</p>
          <p style={para}>Os títulos utilizados neste contrato servem apenas para facilitar a leitura e não limitam nem alteram estes Termos.</p>

          <h2 className="fa-tos-h2">SEÇÃO 3 — PRECISÃO, INTEGRIDADE E ATUALIDADE DAS INFORMAÇÕES</h2>
          <p style={para}>Não nos responsabilizamos caso as informações disponibilizadas neste site não sejam precisas, completas ou atuais. O conteúdo é fornecido apenas para fins gerais e não deve ser utilizado como única base para decisões sem a consulta a fontes primárias, mais precisas, completas ou atualizadas. A confiança depositada neste conteúdo é por sua conta e risco.</p>
          <p style={para}>Este site pode conter informações históricas, que não são necessariamente atuais e são fornecidas apenas para consulta. Podemos alterar o conteúdo do site a qualquer momento, mas não temos obrigação de atualizar as informações. Você é responsável por acompanhar as mudanças no site.</p>

          <h2 className="fa-tos-h2">SEÇÃO 4 — ALTERAÇÕES NO SERVIÇO E NOS PREÇOS</h2>
          <p style={para}>Os preços dos produtos podem ser alterados sem aviso prévio.</p>
          <p style={para}>Podemos modificar ou descontinuar o Serviço, ou qualquer parte ou conteúdo dele, a qualquer momento e sem aviso prévio.</p>
          <p style={para}>Não seremos responsáveis perante você ou terceiros por qualquer modificação, alteração de preço, suspensão ou descontinuação do Serviço.</p>

          <h2 className="fa-tos-h2">SEÇÃO 5 — PRODUTOS OU SERVIÇOS (SE APLICÁVEL)</h2>
          <p style={para}>Alguns produtos ou Serviços podem estar disponíveis exclusivamente on-line e em quantidades limitadas. Devoluções ou trocas desses produtos seguem nossa Política de reembolso.</p>
          <p style={para}>Fizemos o possível para exibir com precisão as cores e imagens dos produtos na loja. Não podemos garantir que a exibição das cores no monitor do seu computador seja precisa.</p>
          <p style={para}>Podemos, mas não somos obrigados a, limitar a venda de produtos ou Serviços a qualquer pessoa, região geográfica ou jurisdição. Esse direito poderá ser exercido caso a caso. Também podemos limitar as quantidades oferecidas. As descrições e os preços dos produtos podem ser alterados a qualquer momento, sem aviso prévio e a nosso exclusivo critério. Podemos descontinuar qualquer produto a qualquer momento. Qualquer oferta de produto ou Serviço neste site será inválida onde for proibida.</p>
          <p style={para}>Não garantimos que a qualidade dos produtos, Serviços, informações ou outros materiais comprados ou obtidos por você atenderá às suas expectativas, nem que eventuais erros no Serviço serão corrigidos.</p>

          <h2 className="fa-tos-h2">SEÇÃO 6 — PRECISÃO DAS INFORMAÇÕES DE COBRANÇA E DA CONTA</h2>
          <p style={para}>Reservamo-nos o direito de recusar qualquer pedido feito conosco. A nosso exclusivo critério, podemos limitar ou cancelar quantidades compradas por pessoa, residência ou pedido. Essas restrições podem incluir pedidos feitos pela mesma conta de cliente, com o mesmo cartão de crédito ou usando o mesmo endereço de cobrança ou entrega. Se alterarmos ou cancelarmos um pedido, poderemos tentar avisar você pelo e-mail, endereço ou telefone fornecido no momento da compra. Também podemos limitar ou proibir pedidos que, a nosso exclusivo critério, pareçam ter sido feitos por revendedores ou distribuidores.</p>
          <p style={para}>Você concorda em fornecer informações atuais, completas e precisas sobre compras e conta para todas as compras feitas em nossa loja. Você também concorda em atualizar prontamente os dados da conta, incluindo e-mail, números e datas de validade dos cartões de crédito, para que possamos concluir as transações e entrar em contato quando necessário.</p>
          <p style={para}>Para mais detalhes, consulte nossa Política de reembolso.</p>

          <h2 className="fa-tos-h2">SEÇÃO 7 — FERRAMENTAS OPCIONAIS</h2>
          <p style={para}>Podemos oferecer acesso a ferramentas de terceiros que não monitoramos nem controlamos e sobre as quais não temos influência.</p>
          <p style={para}>Você reconhece e concorda que o acesso a essas ferramentas é fornecido &ldquo;no estado em que se encontram&rdquo; e conforme a disponibilidade, sem garantias, declarações ou condições de qualquer tipo e sem endosso. Não teremos responsabilidade decorrente do uso de ferramentas opcionais de terceiros ou relacionada a ele.</p>
          <p style={para}>O uso das ferramentas opcionais oferecidas pelo site é inteiramente por sua conta e risco. Você deve se familiarizar e concordar com os termos estabelecidos pelos respectivos fornecedores terceiros.</p>
          <p style={para}>No futuro, também poderemos oferecer novos Serviços ou recursos pelo site, incluindo novas ferramentas e recursos. Esses novos recursos e Serviços também estarão sujeitos a estes Termos.</p>

          <h2 className="fa-tos-h2">SEÇÃO 8 — LINKS DE TERCEIROS</h2>
          <p style={para}>Determinados conteúdos, produtos e Serviços disponíveis por meio do nosso Serviço podem incluir materiais de terceiros.</p>
          <p style={para}>Os links de terceiros neste site podem direcionar você a sites que não são afiliados a nós. Não somos responsáveis por analisar ou avaliar o conteúdo ou a precisão desses sites e não garantimos nem assumimos responsabilidade por materiais ou sites de terceiros, nem por outros materiais, produtos ou Serviços fornecidos por terceiros.</p>
          <p style={para}>Não nos responsabilizamos por danos relacionados à compra ou ao uso de produtos, Serviços, recursos, conteúdo ou outras transações realizadas em sites de terceiros. Leia atentamente as políticas e práticas desses terceiros e certifique-se de compreendê-las antes de realizar qualquer transação. Reclamações, dúvidas ou questões sobre produtos de terceiros devem ser encaminhadas ao respectivo terceiro.</p>

          <h2 className="fa-tos-h2">SEÇÃO 9 — COMENTÁRIOS, FEEDBACK E OUTRAS CONTRIBUIÇÕES</h2>
          <p style={para}>Se, a nosso pedido, você enviar contribuições específicas (como inscrições em concursos) ou, sem solicitação, enviar ideias criativas, sugestões, propostas, planos ou outros materiais on-line, por e-mail, correspondência ou outro meio (em conjunto, &ldquo;comentários&rdquo;), você concorda que poderemos, a qualquer momento e sem restrições, editar, copiar, publicar, distribuir, traduzir e utilizar esses comentários em qualquer meio. Não temos obrigação de (1) manter comentários em sigilo, (2) pagar por eles ou (3) responder a eles.</p>
          <p style={para}>Podemos, mas não somos obrigados a, monitorar, editar ou remover conteúdo que, a nosso exclusivo critério, seja ilegal, ofensivo, ameaçador, calunioso, difamatório, pornográfico, obsceno ou de outra forma questionável, ou que viole direitos de propriedade intelectual de terceiros ou estes Termos.</p>
          <p style={para}>Você concorda que seus comentários não violarão direitos de terceiros, incluindo direitos autorais, marcas registradas, privacidade, personalidade ou outros direitos pessoais ou de propriedade. Também concorda que eles não conterão material calunioso, ilegal, abusivo ou obsceno, nem vírus ou malware que possa afetar o funcionamento do Serviço ou de qualquer site relacionado. Você não poderá usar um endereço de e-mail falso, fingir ser outra pessoa ou induzir a nós ou terceiros a erro quanto à origem dos comentários. Você é o único responsável pelos comentários que publicar e por sua precisão. Não assumimos responsabilidade por comentários publicados por você ou por terceiros.</p>

          <h2 className="fa-tos-h2">SEÇÃO 10 — INFORMAÇÕES PESSOAIS</h2>
          <p style={para}>O envio de informações pessoais por meio da loja é regido pela nossa Política de Privacidade.</p>

          <h2 className="fa-tos-h2">SEÇÃO 11 — ERROS, IMPRECISÕES E OMISSÕES</h2>
          <p style={para}>Ocasionalmente, informações em nosso site ou Serviço podem conter erros tipográficos, imprecisões ou omissões relacionadas a descrições de produtos, preços, promoções, ofertas, frete, prazos de entrega e disponibilidade. Podemos corrigir esses erros, imprecisões ou omissões e alterar ou atualizar informações ou cancelar pedidos se qualquer informação no Serviço ou em sites relacionados estiver incorreta, a qualquer momento e sem aviso prévio, inclusive após o envio do pedido.</p>
          <p style={para}>Não temos obrigação de atualizar, alterar ou esclarecer informações do Serviço ou de sites relacionados, incluindo, entre outras, informações de preços, exceto quando exigido por lei. Nenhuma data indicada para atualização ou revisão do Serviço ou de sites relacionados deve ser interpretada como garantia de que todas as informações foram modificadas ou atualizadas.</p>

          <h2 className="fa-tos-h2">SEÇÃO 12 — USOS PROIBIDOS</h2>
          <p style={para}>Além das demais proibições previstas nestes Termos, você não poderá utilizar o site ou seu conteúdo: (a) para fins ilegais; (b) para incentivar outras pessoas a praticar atos ilícitos; (c) para violar normas, regras, leis ou regulamentos internacionais, federais, estaduais, provinciais ou municipais; (d) para infringir nossos direitos de propriedade intelectual ou os de terceiros; (e) para assediar, abusar, insultar, prejudicar, difamar, caluniar, intimidar ou discriminar com base em gênero, orientação sexual, religião, etnia, raça, idade, nacionalidade ou deficiência; (f) para enviar informações falsas ou enganosas; (g) para carregar ou transmitir vírus ou códigos maliciosos que possam afetar o funcionamento do Serviço, de sites relacionados, de outros sites ou da Internet; (h) para coletar ou rastrear informações pessoais de terceiros; (i) para enviar spam, praticar phishing ou pharming, usar pretextos falsos, rastrear ou extrair dados; (j) para fins obscenos ou imorais; ou (k) para interferir ou contornar os recursos de segurança do Serviço, de sites relacionados, de outros sites ou da Internet. Podemos encerrar seu acesso ao Serviço ou a qualquer site relacionado em caso de violação dos usos proibidos.</p>

          <h2 className="fa-tos-h2">SEÇÃO 13 — ISENÇÃO DE GARANTIAS E LIMITAÇÃO DE RESPONSABILIDADE</h2>
          <p style={para}>Não garantimos nem declaramos que o uso do Serviço será ininterrupto, pontual, seguro ou livre de erros.</p>
          <p style={para}>Não garantimos que os resultados obtidos com o uso do Serviço serão precisos ou confiáveis.</p>
          <p style={para}>Você concorda que, periodicamente, poderemos remover o Serviço por tempo indeterminado ou cancelá-lo a qualquer momento, sem aviso prévio.</p>
          <p style={para}>Você concorda expressamente que o uso ou a impossibilidade de uso do Serviço ocorre por sua conta e risco. O Serviço e todos os produtos e Serviços fornecidos por meio dele são disponibilizados para uso &ldquo;no estado em que se encontram&rdquo; e conforme a disponibilidade, salvo declaração expressa em contrário, sem declarações, garantias ou condições de qualquer tipo, expressas ou implícitas, incluindo garantias implícitas de comercialização, qualidade comercial, adequação a uma finalidade específica, durabilidade, titularidade e não violação.</p>
          <p style={para}>Em nenhuma hipótese a Ambaz, seus diretores, administradores, funcionários, afiliadas, agentes, contratados, estagiários, fornecedores, prestadores de Serviços ou licenciadores serão responsáveis por lesões, perdas, reclamações ou danos diretos, indiretos, incidentais, punitivos, especiais ou consequenciais de qualquer tipo, incluindo, sem limitação, lucros cessantes, perda de receita, economias ou dados, custos de substituição ou danos semelhantes, seja com base em contrato, ato ilícito (inclusive negligência), responsabilidade objetiva ou outro fundamento, decorrentes do uso do Serviço ou de produtos adquiridos por meio dele, ou de qualquer reclamação relacionada ao uso do Serviço ou de qualquer produto. Isso inclui erros ou omissões em qualquer conteúdo e perdas ou danos decorrentes do uso do Serviço ou de conteúdo ou produto publicado, transmitido ou disponibilizado por meio dele, mesmo que tenhamos sido avisados da possibilidade desses danos. Como algumas jurisdições não permitem excluir ou limitar a responsabilidade por danos incidentais ou consequenciais, nossa responsabilidade nessas jurisdições será limitada ao máximo permitido por lei.</p>

          <h2 className="fa-tos-h2">SEÇÃO 14 — INDENIZAÇÃO</h2>
          <p style={para}>Você concorda em indenizar, defender e isentar de responsabilidade a Ambaz, sua controladora, subsidiárias, afiliadas, parceiros, administradores, diretores, agentes, contratados, licenciadores, prestadores de Serviços, subcontratados, fornecedores, estagiários e funcionários por qualquer reclamação ou demanda, incluindo honorários advocatícios razoáveis, apresentada por terceiros em decorrência do descumprimento destes Termos ou dos documentos incorporados por referência, ou da violação de qualquer lei ou direito de terceiros.</p>

          <h2 className="fa-tos-h2">SEÇÃO 15 — INDEPENDÊNCIA DAS DISPOSIÇÕES</h2>
          <p style={para}>Se qualquer disposição destes Termos for considerada ilegal, nula ou inexequível, ela ainda será aplicada na máxima extensão permitida pela legislação aplicável, e a parte inexequível será separada dos Termos. Essa determinação não afetará a validade e a aplicação das demais disposições.</p>

          <h2 className="fa-tos-h2">SEÇÃO 16 — RESCISÃO</h2>
          <p style={para}>As obrigações e responsabilidades das partes assumidas antes da data de rescisão permanecerão vigentes após o encerramento deste contrato para todos os fins.</p>
          <p style={para}>Estes Termos permanecem em vigor até que sejam rescindidos por você ou por nós. Você pode rescindi-los a qualquer momento, avisando que não deseja mais utilizar nossos Serviços ou deixando de usar o site.</p>
          <p style={para}>Se, a nosso exclusivo critério, você descumprir ou suspeitarmos que descumpriu qualquer termo ou disposição destes Termos, poderemos rescindir este contrato a qualquer momento e sem aviso prévio. Você continuará responsável por todos os valores devidos até a data da rescisão, inclusive, e poderemos negar seu acesso aos Serviços, total ou parcialmente.</p>

          <h2 className="fa-tos-h2">SEÇÃO 17 — ACORDO INTEGRAL</h2>
          <p style={para}>A falta de exercício ou aplicação de qualquer direito ou disposição destes Termos não constitui renúncia a esse direito ou disposição.</p>
          <p style={para}>Estes Termos e quaisquer políticas ou regras operacionais publicadas por nós neste site ou relacionadas ao Serviço constituem o acordo integral entre você e nós e regem o uso do Serviço, substituindo acordos, comunicações e propostas anteriores ou contemporâneos, orais ou escritos, incluindo versões anteriores destes Termos.</p>
          <p style={para}>Eventuais ambiguidades na interpretação destes Termos não serão interpretadas contra a parte responsável por sua elaboração.</p>

          <h2 className="fa-tos-h2">SEÇÃO 18 — LEGISLAÇÃO APLICÁVEL</h2>
          <p style={para}>Estes Termos e quaisquer contratos separados pelos quais prestamos Serviços serão regidos e interpretados de acordo com as leis dos Estados Unidos.</p>

          <h2 className="fa-tos-h2">SEÇÃO 19 — ALTERAÇÕES NOS TERMOS DE SERVIÇO</h2>
          <p style={para}>Você pode consultar a versão mais atual destes Termos de serviço a qualquer momento nesta página.</p>
          <p style={{ marginBottom: '0' }}>Reservamo-nos o direito, a nosso exclusivo critério, de atualizar, alterar ou substituir qualquer parte destes Termos publicando as mudanças em nosso site. É sua responsabilidade consultar o site periodicamente. A continuidade do uso ou do acesso ao site ou ao Serviço após a publicação de alterações representa sua aceitação.</p>

        </div>
      </div>
      <style>{`
        .fa-tos-page-header { background-color: rgb(247, 248, 252); padding: 40px 0 50px; text-align: center; }
        .fa-tos-h1 { font-size: 40px; font-weight: 600; color: #222; }
        .fa-tos-content-wrap { padding-block: 60px 100px; }
        .fa-tos-prose { max-width: 680px; margin: 0 auto; font-size: 15px; color: #555; line-height: 1.8; }
        .fa-tos-h2 { font-size: 22px; font-weight: 700; color: #222; margin-bottom: 14px; margin-top: 40px; }
        @media (max-width: 749px) {
          .fa-tos-page-header { padding: clamp(28px, 6vw, 40px) 0 clamp(30px, 7vw, 50px); }
          .fa-tos-h1 { font-size: clamp(26px, 6.5vw, 40px); }
          .fa-tos-content-wrap { padding-block: clamp(36px, 7vw, 60px) clamp(60px, 12vw, 100px); }
          .fa-tos-prose { font-size: clamp(13px, 3.8vw, 15px); }
          .fa-tos-h2 { font-size: clamp(17px, 4.5vw, 22px); margin-top: clamp(28px, 6vw, 40px); }
        }
      `}</style>
    </>
  );
}

const para: React.CSSProperties = {
  marginBottom: '20px',
};
