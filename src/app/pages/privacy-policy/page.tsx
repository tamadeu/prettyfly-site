'use client';

import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <div className="fa-pp-page-header">
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', marginBottom: '12px' }}>
            <Link href="/" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Início</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>Política de privacidade</span>
          </div>
          <h1 className="fa-pp-h1">Política de privacidade</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container-main fa-pp-content-wrap">
        <div className="fa-pp-prose">

          <p style={para}><em>Last updated: August 31, 2024</em></p>

          <p style={para}>Esta Política de Privacidade descreve como a Ambaz (o &ldquo;Site&rdquo;, &ldquo;nós&rdquo; ou &ldquo;nosso&rdquo;) coleta, usa e divulga suas informações pessoais quando você visita ou utiliza nossos serviços, faz uma compra em nossa loja ou se comunica conosco sobre o Site (em conjunto, os &ldquo;Serviços&rdquo;). Nesta Política, &ldquo;você&rdquo; se refere a qualquer usuário dos Serviços, seja cliente, visitante do site ou outra pessoa cujas informações tenhamos coletado conforme esta Política de Privacidade.</p>

          <p style={para}>Leia esta Política de Privacidade com atenção.</p>

          <h2 className="fa-pp-h2">Alterações nesta Política de Privacidade</h2>
          <p style={para}>Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou por motivos operacionais, legais ou regulatórios. Publicaremos a versão revisada no Site, atualizaremos a data de &ldquo;Última atualização&rdquo; e adotaremos outras medidas exigidas pela legislação aplicável.</p>

          <h2 className="fa-pp-h2">Como coletamos e usamos suas informações pessoais</h2>
          <p style={para}>Para fornecer os Serviços, coletamos e, nos últimos 12 meses, coletamos informações pessoais sobre você de diversas fontes, conforme descrito abaixo. As informações coletadas e utilizadas variam de acordo com a forma como você interage conosco.</p>
          <p style={para}>Além dos usos específicos descritos abaixo, podemos usar as informações coletadas para nos comunicarmos com você, fornecer ou aprimorar os Serviços, cumprir obrigações legais, fazer valer os termos de serviço aplicáveis e proteger ou defender os Serviços, nossos direitos e os direitos de nossos usuários ou de outras pessoas.</p>

          <h2 className="fa-pp-h2">Quais informações pessoais coletamos</h2>
          <p style={para}>Os tipos de informações pessoais que obtemos dependem de como você interage com nosso Site e utiliza os Serviços. O termo &ldquo;informações pessoais&rdquo; se refere a informações que identificam, descrevem ou podem ser associadas a você. As seções a seguir descrevem as categorias e os tipos específicos de informações pessoais que coletamos.</p>

          <h2 className="fa-pp-h2">Informações que coletamos diretamente de você</h2>
          <p style={para}>As informações que você nos envia diretamente por meio dos Serviços podem incluir:</p>
          <ul style={list}>
            <li>Dados de contato, como nome, endereço, telefone e e-mail.</li>
            <li>Informações do pedido, como nome, endereço de cobrança, endereço de entrega, confirmação de pagamento, e-mail e telefone.</li>
            <li>Informações da conta, como nome de usuário, senha, perguntas de segurança e outros dados utilizados para proteger a conta.</li>
            <li>Informações de atendimento ao cliente que você decide incluir em suas comunicações conosco, por exemplo, ao enviar uma mensagem pelos Serviços.</li>
          </ul>
          <p style={para}>Alguns recursos dos Serviços podem exigir que você forneça determinadas informações pessoais. Você pode optar por não fornecê-las, mas isso poderá impedir o uso ou o acesso a esses recursos.</p>

          <h2 className="fa-pp-h2">Informações que coletamos sobre o uso</h2>
          <p style={para}>Também podemos coletar automaticamente determinadas informações sobre sua interação com os Serviços (&ldquo;Dados de uso&rdquo;). Para isso, podemos utilizar cookies, pixels e tecnologias semelhantes (&ldquo;Cookies&rdquo;). Os Dados de uso podem incluir informações sobre como você acessa e utiliza o Site e sua conta, como dados do dispositivo e do navegador, informações sobre sua conexão de rede, endereço IP e outros dados relacionados à sua interação com os Serviços.</p>

          <h2 className="fa-pp-h2">Informações obtidas de terceiros</h2>
          <p style={para}>Também podemos obter informações sobre você de terceiros, incluindo fornecedores e prestadores de serviços que coletam dados em nosso nome, como:</p>
          <ul style={list}>
            <li>Empresas que dão suporte ao Site e aos Serviços.</li>
            <li>Nossos processadores de pagamento, que coletam dados de pagamento (por exemplo, conta bancária, dados do cartão de crédito ou débito e endereço de cobrança) para processar pagamentos, atender pedidos e fornecer os produtos ou serviços solicitados, conforme nosso contrato com você.</li>
            <li>Quando você visita o Site, abre ou clica em e-mails enviados por nós ou interage com os Serviços ou anúncios, nós ou terceiros com quem trabalhamos podemos coletar automaticamente determinadas informações por meio de tecnologias de rastreamento on-line, como pixels, web beacons, kits de desenvolvimento de software, bibliotecas de terceiros e cookies.</li>
          </ul>
          <p style={para}>Todas as informações obtidas de terceiros serão tratadas conforme esta Política de Privacidade. Consulte também a seção &ldquo;Sites e links de terceiros&rdquo;, abaixo.</p>

          <h2 className="fa-pp-h2">Como usamos suas informações pessoais</h2>
          <p style={para}><strong>Fornecimento de produtos e serviços.</strong> Usamos suas informações pessoais para fornecer os Serviços e cumprir nosso contrato com você, incluindo processar pagamentos, atender pedidos, enviar notificações relacionadas à sua conta, compras, devoluções, trocas ou outras transações, criar e administrar sua conta, organizar entregas e facilitar devoluções, trocas e outros recursos relacionados à conta.</p>
          <p style={para}><strong>Marketing e publicidade.</strong> Podemos usar suas informações pessoais para fins de marketing e promoção, como enviar comunicações por e-mail, mensagem de texto ou correspondência e exibir anúncios de produtos ou serviços. Isso pode incluir o uso dessas informações para personalizar os Serviços e os anúncios exibidos em nosso Site e em outros sites.</p>
          <p style={para}><strong>Segurança e prevenção a fraudes.</strong> Usamos suas informações pessoais para detectar, investigar ou tomar medidas contra possíveis atividades fraudulentas, ilegais ou maliciosas. Se você utilizar os Serviços e criar uma conta, será responsável por manter suas credenciais seguras. Recomendamos que não compartilhe seu nome de usuário, senha ou outros dados de acesso. Se acreditar que sua conta foi comprometida, entre em contato conosco imediatamente.</p>
          <p style={para}><strong>Comunicação e melhoria dos Serviços.</strong> Usamos suas informações pessoais para oferecer atendimento ao cliente e aprimorar os Serviços. Isso atende aos nossos interesses legítimos de responder às suas solicitações, prestar um serviço eficaz e manter nosso relacionamento comercial com você.</p>

          <h2 className="fa-pp-h2">Cookies</h2>
          <p style={para}>Como muitos sites, utilizamos Cookies no Site para viabilizar e aprimorar o Site e os Serviços (inclusive para lembrar suas ações e preferências), realizar análises e entender melhor como as pessoas interagem com os Serviços. Também podemos permitir que terceiros e prestadores de serviços utilizem Cookies no Site para personalizar serviços, produtos e anúncios em nosso Site e em outros sites.</p>
          <p style={para}>A maioria dos navegadores aceita Cookies automaticamente, mas você pode configurá-los para removê-los ou recusá-los. A remoção ou o bloqueio de Cookies pode prejudicar sua experiência e fazer com que alguns Serviços, recursos ou funcionalidades deixem de funcionar corretamente ou fiquem indisponíveis. Além disso, o bloqueio de Cookies pode não impedir completamente o compartilhamento de informações com terceiros, como nossos parceiros de publicidade.</p>

          <h2 className="fa-pp-h2">Como compartilhamos informações pessoais</h2>
          <p style={para}>Em determinadas situações, podemos compartilhar suas informações pessoais com terceiros para cumprir contratos, atender a finalidades legítimas ou por outros motivos previstos nesta Política de Privacidade. Isso pode ocorrer:</p>
          <ul style={list}>
            <li>Com fornecedores ou terceiros que prestam serviços em nosso nome, como gestão de tecnologia da informação, processamento de pagamentos, análise de dados, atendimento ao cliente, armazenamento em nuvem, separação de pedidos e entrega.</li>
            <li>Com parceiros comerciais e de marketing para prestar serviços e exibir anúncios.</li>
            <li>Quando você solicitar ou autorizar o compartilhamento de determinadas informações, por exemplo, para entregar produtos ou ao utilizar recursos de redes sociais ou integrações de acesso.</li>
            <li>Com empresas afiliadas ou integrantes do nosso grupo empresarial, no exercício de nossos interesses legítimos.</li>
            <li>Em uma transação comercial, como fusão ou falência, para cumprir obrigações legais, fazer valer os termos de serviço aplicáveis ou proteger e defender os Serviços, nossos direitos e os direitos de usuários ou terceiros.</li>
          </ul>

          <h2 className="fa-pp-h2">Sites e links de terceiros</h2>
          <p style={para}>O Site pode conter links para sites ou plataformas on-line operados por terceiros. Ao acessar sites que não sejam afiliados ou controlados por nós, leia as respectivas políticas de privacidade e segurança e os termos e condições. Não garantimos nem nos responsabilizamos pela privacidade ou segurança desses sites, nem pela precisão, integridade ou confiabilidade das informações neles disponíveis. Informações publicadas em espaços públicos ou semipúblicos, inclusive em redes sociais de terceiros, também podem ser vistas por outros usuários dos Serviços ou dessas plataformas, sem restrições quanto ao uso por nós ou por terceiros. A inclusão desses links não significa, por si só, que endossamos o conteúdo, os proprietários ou os operadores das plataformas, salvo indicação nos Serviços.</p>

          <h2 className="fa-pp-h2">Dados de crianças</h2>
          <p style={para}>Os Serviços não se destinam a crianças e não coletamos intencionalmente informações pessoais de crianças. Se você for responsável por uma criança que nos forneceu informações pessoais, poderá solicitar a exclusão desses dados pelos canais de contato indicados abaixo.</p>

          <h2 className="fa-pp-h2">Segurança e retenção das informações</h2>
          <p style={para}>Nenhuma medida de segurança é perfeita ou inviolável, portanto não podemos garantir segurança absoluta. Além disso, as informações enviadas a nós podem não estar seguras durante a transmissão. Recomendamos que você não utilize canais inseguros para enviar informações confidenciais ou sensíveis.</p>
          <p style={para}>O período de retenção das suas informações pessoais depende de diversos fatores, como a necessidade de manter sua conta, prestar os Serviços, cumprir obrigações legais, resolver disputas ou fazer valer contratos e políticas aplicáveis.</p>

          <h2 className="fa-pp-h2">Seus direitos</h2>
          <p style={para}>Dependendo de onde você mora, poderá ter alguns ou todos os direitos abaixo em relação às suas informações pessoais. Esses direitos não são absolutos, podem se aplicar somente em determinadas situações e, em alguns casos, poderemos recusar uma solicitação conforme permitido por lei.</p>
          <ul style={list}>
            <li><strong>Direito de acesso e confirmação:</strong> Você pode solicitar acesso às informações pessoais que mantemos sobre você, inclusive detalhes sobre como as utilizamos e compartilhamos.</li>
            <li><strong>Direito de exclusão:</strong> Você pode solicitar a exclusão das informações pessoais que mantemos.</li>
            <li><strong>Direito de correção:</strong> Você pode solicitar a correção de informações pessoais incorretas que mantemos.</li>
            <li><strong>Direito à portabilidade:</strong> Em determinadas situações e sujeito a exceções, você pode solicitar uma cópia das informações pessoais que mantemos e pedir que sejam transferidas a terceiros.</li>
            <li><strong>Direito de oposição a venda, compartilhamento ou publicidade direcionada:</strong> Você pode solicitar que não vendamos nem compartilhemos suas informações pessoais ou se opor ao tratamento para fins de &ldquo;publicidade direcionada&rdquo;, conforme definido pelas leis de privacidade aplicáveis.</li>
            <li><strong>Restrição do tratamento:</strong> Você pode solicitar que interrompamos ou restrinjamos o tratamento de suas informações pessoais.</li>
            <li><strong>Revogação do consentimento:</strong> Quando o tratamento se basear no seu consentimento, você poderá revogá-lo.</li>
            <li><strong>Recurso:</strong> Você pode recorrer de uma decisão que recuse sua solicitação, respondendo diretamente à nossa comunicação de recusa.</li>
            <li><strong>Preferências de comunicação:</strong> Podemos enviar e-mails promocionais, mas você pode cancelar o recebimento a qualquer momento pela opção de descadastramento disponível nas mensagens. Mesmo após o cancelamento, poderemos enviar e-mails não promocionais sobre sua conta ou seus pedidos.</li>
          </ul>
          <p style={para}>Você pode exercer esses direitos quando indicado no Site ou entrando em contato conosco pelos dados informados abaixo.</p>
          <p style={para}>Não discriminaremos você por exercer qualquer um desses direitos. Antes de responder à solicitação, talvez precisemos coletar informações para confirmar sua identidade, como seu e-mail ou dados da conta. Conforme a legislação aplicável, você pode indicar um representante autorizado para fazer a solicitação em seu nome. Antes de aceitá-la, poderemos exigir um comprovante dessa autorização e solicitar que você confirme sua identidade diretamente conosco. Responderemos dentro do prazo previsto pela legislação aplicável.</p>

          <h2 className="fa-pp-h2">Reclamações</h2>
          <p style={para}>Se tiver uma reclamação sobre como tratamos suas informações pessoais, entre em contato pelos dados indicados abaixo. Se não ficar satisfeito com nossa resposta, dependendo de onde você mora, poderá recorrer da decisão entrando em contato conosco ou apresentar uma reclamação à autoridade local de proteção de dados.</p>

          <h2 className="fa-pp-h2">Usuários internacionais</h2>
          <p style={para}>Suas informações pessoais podem ser transferidas, armazenadas e tratadas fora do país onde você mora. Funcionários, prestadores de serviços e parceiros nesses países também poderão tratar essas informações.</p>
          <p style={para}>Se transferirmos suas informações pessoais para fora da Europa, utilizaremos mecanismos de transferência reconhecidos, como as Cláusulas Contratuais Padrão da Comissão Europeia ou contratos equivalentes emitidos pela autoridade competente do Reino Unido, conforme aplicável, exceto quando a transferência ocorrer para um país reconhecido como oferecendo nível adequado de proteção.</p>

          <h2 className="fa-pp-h2">Contato</h2>
          <p style={{ marginBottom: '0' }}>Se tiver dúvidas sobre nossas práticas de privacidade ou esta Política, ou se quiser exercer algum dos direitos disponíveis, escreva para support@ambaz.com ou entre em contato conosco pelo endereço comercial.</p>

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
