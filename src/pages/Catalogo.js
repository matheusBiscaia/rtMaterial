import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./catalogo.css";
import {
  formatCurrency,
  PRODUCT_CATEGORIES,
  PRODUCTS,
} from "../data/products";

export default function Catalogo() {
  const [busca, setBusca] = useState("");
  const [cat, setCat] = useState("Todas");

  const lista = useMemo(() => {
    const buscaNormalizada = busca.trim().toLowerCase();

    return PRODUCTS.filter((item) => {
      const okCat = cat === "Todas" || item.categoria === cat;
      const okBusca =
        buscaNormalizada.length === 0 ||
        item.nome.toLowerCase().includes(buscaNormalizada);

      return okCat && okBusca;
    });
  }, [busca, cat]);

  return (
    <div className="cat">
      <div className="catHeader glass">
        <div>
          <h2 className="sectionTitle">Catálogo</h2>
          <div className="muted">Materiais de construção disponíveis.</div>
        </div>

        <div className="filters">
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar material..."
          />
          <select value={cat} onChange={(e) => setCat(e.target.value)}>
            {PRODUCT_CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid cols3" style={{ marginTop: 16 }}>
        {lista.map((i) => (
          <div key={i.id} className="glass itemCard">
            <div className="itemTop">
              <div className="itemName">{i.nome}</div>
              <div className="badge">{i.categoria}</div>
            </div>
            <div className="hr" />
            <div className="itemRow">
              <span className="muted">Preço</span>
              <strong>{formatCurrency(i.preco)}</strong>
            </div>
            <div className="itemRow">
              <span className="muted">Status</span>
              <span className={i.estoque === "Em estoque" ? "ok" : "warn"}>{i.estoque}</span>
            </div>
            <div className="itemActions">
              <Link className="btn primary" to={`/produto/${i.id}`}>Detalhes</Link>
              <Link className="btn" to="/contato">Orçar</Link>
            </div>
          </div>
        ))}
        {lista.length === 0 ? (
          <div className="glass pageCard">
            <h3 className="sectionTitle">Nenhum item encontrado</h3>
            <p className="muted">Tente outro termo de busca ou selecione outra categoria.</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
