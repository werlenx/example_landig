import React from "react";
import Head from "next/head";
// import styles from "./styles.css";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Mooncake - Transforme suas ideias em realidade digital</title>
        <meta
          name="description"
          content="Criamos Sites que Impactam, Designs que Inspiram e Gerenciamos o Tráfego que Gera Resultados"
        />
      </Head>
      <header className="hero">
        <div className="container">
          <h1>Mooncake</h1>
          <p>
            Criamos Sites que Impactam, Designs que Inspiram e Gerenciamos o
            Tráfego que Gera Resultados
          </p>
          <a href="#services" className="ctaButton">
            Saiba Mais
          </a>
        </div>
      </header>

      <section id="services" className="services">
        <h2>Nossos Serviços</h2>
        <div className="serviceList">
          <div className="serviceItem">
            <h3>🌐 Criação de Sites Personalizados</h3>
            <p>
              Seu site é a cara do seu negócio. Vamos fazer com que ele reflita
              a sua identidade e conquiste clientes desde o primeiro clique.
            </p>
            <ul>
              <li>Sites 100% Responsivos</li>
              <li>Desenvolvimento Sob Medida</li>
              <li>SEO Integrado</li>
            </ul>
            <a href="#contact" className="ctaButton">
              Solicite um orçamento gratuito
            </a>
          </div>

          <div className="serviceItem">
            <h3>🚀 Gestão de Tráfego e Performance Digital</h3>
            <p>
              Traga mais visitantes qualificados para o seu site com estratégias
              de tráfego eficientes.
            </p>
            <ul>
              <li>Google Ads &amp; Facebook Ads</li>
              <li>Remarketing</li>
              <li>Análise de Dados</li>
            </ul>
            <a href="#contact" className="ctaButton">
              Fale com um especialista
            </a>
          </div>

          <div className="serviceItem">
            <h3>🎨 Design Gráfico que Encanta</h3>
            <p>
              Imagens falam mais que palavras. Um design profissional comunica
              sua mensagem com clareza e impacto.
            </p>
            <ul>
              <li>Identidade Visual Completa</li>
              <li>Materiais de Marketing</li>
              <li>UX/UI Design</li>
            </ul>
            <a href="#contact" className="ctaButton">
              Veja nosso portfólio
            </a>
          </div>
        </div>
      </section>

      <section id="process" className="process">
        <h2>Como Funciona</h2>
        <ul>
          <li>Contato Inicial: Definimos o que você precisa.</li>
          <li>Planejamento: Criamos um plano detalhado.</li>
          <li>Execução: Desenvolvimento ágil e profissional.</li>
          <li>Entrega e Suporte: Você recebe seu projeto e suporte contínuo.</li>
        </ul>
        <a href="#contact" className="ctaButton">
          Pronto para começar?
        </a>
      </section>

      <section id="testimonials" className="testimonials">
        <h2>Depoimentos de Clientes</h2>
        <div className="testimonialItem">
          <p>
            &quot;A Mooncake transformou completamente a nossa presença digital. O
            tráfego cresceu 50% no primeiro mês!&quot;
          </p>
          <p>— Ana Silva, Empresária</p>
        </div>
        <div className="testimonialItem">
          <p>
            &quot;O design que criaram para a nossa marca ficou incrível. Nossos
            clientes amaram!&quot;
          </p>
          <p>— João Pereira, Gerente de Marketing</p>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Fale Conosco</h2>
        <p>
          Precisa de mais informações? Preencha o formulário abaixo ou entre em
          contato pelos nossos canais!
        </p>
        <p>📞 Telefone: (XXX) XXX-XXXX</p>
        <p>✉️ Email: contato@mooncake.com</p>
        <a href="#contact" className="ctaButton">
          Vamos conversar sobre o seu projeto
        </a>
      </section>

      <footer className="footer">
        <p>© 2024 Mooncake - All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Home;
