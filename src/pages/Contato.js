export default function Contato() {
  const whatsappHref = "https://wa.me/5571993515860";
  const emailHref = "mailto:rtmateria03@gmail.com";

  return (
    <div className="glass pageCard">
      <h2 className="sectionTitle">Contato</h2>
      <p className="muted">Fale com a gente e peça sua cotação.</p>

      <div className="grid cols2 sectionSpace">
        <div className="glass panel">
          <div className="panelTitle">WhatsApp</div>
          <div className="muted">(71) 99351-5860</div>
          <a className="btn sectionSpace" href={whatsappHref} target="_blank" rel="noreferrer">
            Abrir conversa
          </a>
        </div>
        <div className="glass panel">
          <div className="panelTitle">E-mail</div>
          <div className="muted">rtmateria03@gmail.com</div>
          <a className="btn sectionSpace" href={emailHref}>
            Enviar e-mail
          </a>
        </div>
      </div>

      <div className="hr" />
      <div className="muted">O número acima foi atualizado para combinar com a arte da marca.</div>
    </div>
  );
}
