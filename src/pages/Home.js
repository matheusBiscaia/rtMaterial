import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  const whatsappHref = "https://wa.me/5571993515860";

  return (
    <div className="home">
      <section className="hero glass">
        <div className="heroLeft">
          <div className="badge">✅ Fornecedor de materiais de construção</div>
          <h1>
            Materiais com <span className="grad">qualidade</span> e entrega rápida.
          </h1>
          <p className="muted">
            Cimento, areia, brita, blocos, tijolos e muito mais. Faça orçamento e receba rápido no WhatsApp.
          </p>

          <div className="heroBtns">
            <Link className="btn primary" to="/catalogo">Ver catálogo</Link>
            <Link className="btn" to="/contato">Contato</Link>
          </div>

          <div className="heroStats">
            <div className="stat">
              <div className="statNum">+60</div>
              <div className="muted">Materiais</div>
            </div>
            <div className="stat">
              <div className="statNum">Entrega</div>
              <div className="muted">na região</div>
            </div>
            <div className="stat">
              <div className="statNum">5★</div>
              <div className="muted">Atendimento</div>
            </div>
          </div>
        </div>

        <div className="heroRight">
          <div className="brandCard">
            <div className="heroCardEyebrow">Atendimento comercial</div>
            <h3 className="heroCardTitle">Orçamento rápido no WhatsApp</h3>
            <p className="muted brandCardText">
              Envie sua lista de materiais e receba retorno direto para fechar o pedido com mais agilidade.
            </p>
            <div className="heroChecklist">
              <div className="heroCheck">Cotação sem complicação</div>
              <div className="heroCheck">Suporte para obra e reposição</div>
              <div className="heroCheck">Entrega combinada na região</div>
            </div>
            <div className="mockBottom">
              <a
                className="btn primary"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                Chamar no WhatsApp
              </a>
              <Link className="btn" to="/catalogo">Ver catálogo</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <h2 className="sectionTitle">Por que comprar com a gente</h2>
        <div className="grid cols3">
          <div className="glass feat">
            <div className="featTitle">Preço justo</div>
            <div className="muted">Cotação rápida e transparência no valor.</div>
          </div>
          <div className="glass feat">
            <div className="featTitle">Entrega rápida</div>
            <div className="muted">Opções de envio e retirada conforme necessidade.</div>
          </div>
          <div className="glass feat">
            <div className="featTitle">Suporte no WhatsApp</div>
            <div className="muted">Fale direto com a equipe e feche seu pedido.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
