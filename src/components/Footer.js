import { memo } from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footerWrap">
      <div className="footer glass">
        <div className="footLeft">
          <div className="footTitle">RtMateriais</div>
          <div className="muted">Materiais de construção com entrega rápida</div>
        </div>

        <div className="footRight">
          <div className="muted">© {new Date().getFullYear()} RtMateriais</div>
          <div className="muted">WhatsApp: (71) 99351-5860</div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
