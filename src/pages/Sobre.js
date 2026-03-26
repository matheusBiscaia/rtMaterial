export default function Sobre() {
  return (
    <div className="glass pageCard">
      <h2 className="sectionTitle">Sobre</h2>
      <p className="muted">
        Somos um fornecedor de materiais de construção com foco em rapidez, organização e bom atendimento.
        Trabalhamos com cimento, areia, brita, blocos, tijolos e outros itens para sua obra.
      </p>
      <div className="hr" />
      <div className="grid cols2">
        <div className="glass panel">
          <div className="panelTitle">Missão</div>
          <div className="muted">Entregar materiais com qualidade e facilidade no pedido.</div>
        </div>
        <div className="glass panel">
          <div className="panelTitle">Valores</div>
          <div className="muted">Transparência, agilidade e respeito ao cliente.</div>
        </div>
      </div>
    </div>
  );
}
