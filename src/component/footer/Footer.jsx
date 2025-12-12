import S from "./footer.module.scss";
import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className={S.footer}>
      <div className={S.container}>
        <div className={S.top}>
          <div className={S.brand}>
            <img
              src={Logo}
              alt="Logo Médicos & Dentistas"
              className={S.logoImg}
            />

            <div>
              <h3 className={S.brandName}>Médicos &amp; Dentistas</h3>
              <p className={S.brandText}>
                Saúde e cuidado sem barreiras para toda comunidade.
              </p>
            </div>
          </div>

          <div className={S.column}>
            <h4 className={S.columnTitle}>Contato</h4>
            <ul className={S.list}>
              <li>
                <span className={S.icon}>✉</span>
                <a href="mailto:contato@medico-dentista.org">
                  contato@medico-dentista.org
                </a>
              </li>
              <li>
                <span className={S.icon}>☎</span>
                <a href="tel:+551130000000">(11) 3000-0000</a>
              </li>
              <li>
                <span className={S.icon}>📍</span>
                <span>São Paulo, Brasil</span>
              </li>
            </ul>
          </div>

          <div className={S.column}>
            <h4 className={S.columnTitle}>Redes Sociais</h4>
            <ul className={S.list}>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={S.divider} />

        <p className={S.copy}>
          © 2025 Médicos e Dentistas pela Comunidade. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
