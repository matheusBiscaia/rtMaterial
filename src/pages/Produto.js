import { useParams, Link } from "react-router-dom";
import {
  formatCurrency,
  getProductById,
  WHATSAPP_NUMBER,
} from "../data/products";

export default function Produto() {
  const { id } = useParams();
  const produto = getProductById(id);

  if (!produto) {
    return (
      <div className="glass pageCard">
        <h2 className="sectionTitle">Produto não encontrado</h2>
        <p className="muted">Esse material não existe no catálogo.</p>
        <Link className="btn" to="/catalogo">Voltar ao catálogo</Link>
      </div>
    );
  }

  const msg = encodeURIComponent(`Olá! Tenho interesse no material: ${produto.nome}. Pode me passar um orçamento?`);

  return (
    <div className="glass pageCard">
      <h2 className="sectionTitle">{produto.nome}</h2>

      <div className="rowWrap">
        <div className="badge">{produto.categoria}</div>
        <div className="badge">Unidade: {produto.unidade}</div>
        <div className="badge">Status: {produto.estoque}</div>
      </div>

      <div className="hr" />

      <p className="muted">{produto.descricao}</p>

      <div className="grid cols2 sectionSpace">
        <div className="glass panel">
          <div className="panelTitle">Preço</div>
          <div className="panelValue">{formatCurrency(produto.preco)}</div>
          <div className="muted panelNote">* pode variar por quantidade/frete</div>
        </div>
        <div className="glass panel">
          <div className="panelTitle">Dica</div>
          <div className="muted">{produto.dicas}</div>
        </div>
      </div>

      <div className="hr" />

      <div className="rowWrap">
        <a
          className="btn primary"
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`}
          target="_blank"
          rel="noreferrer"
        >
          Pedir orçamento no WhatsApp
        </a>
        <Link className="btn" to="/catalogo">Voltar</Link>
      </div>
    </div>
  );
}
