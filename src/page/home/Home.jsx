import imgButton from "../../assets/imgButton.png";
import picture from "../../assets/picture.png";
import S from "./home.module.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <div className={S.home}>
        <section className={S.hero}>
          <div className={S.left}>
            <button className={S.badge}>
              <img src={imgButton} alt="Imagem de um estetoscópio" />
              Saúde para todos
            </button>

            <h2>Saúde e cuidado sem barreiras</h2>

            <p>
              Um projeto dedicado a oferecer atendimento médico e odontológico
              gratuito para pessoas que mais precisam na nossa comunidade.
            </p>

            <div className={S.buttons}>
             <Link to="/voluntario" className={S.btnPrimary}>Seja Voluntário</Link>
              <button className={S.btnOutline}>Como Ajudar</button>
            </div>
          </div>

          <div className={S.right}>
            <img src={picture} alt="Foto de um médico" />
          </div>
        </section>
      </div>

      <section className={S.homeMiddle}>
        <div className={S.wrapper}>
          <h2>Nossa Missão</h2>
          <p className={S.mainText}>
            Transformar vidas através do acesso universal a saúde de qualidade
          </p>

          <div className={S.cardInfo}>
            <div className={S.card}>
              <h3>Acesso Equitativo</h3>
              <p>Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira.</p>
            </div>
            <div className={S.card}>
              <h3>Comunidade Forte</h3>
              <p>Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo.</p>
            </div>
            <div className={S.card}>
              <h3>Bem-estar Total</h3>
              <p>Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="impacto" className={S.impactSection}>
        <div className={S.impactContainer}>
          <h2 className={S.impactTitle}>Nosso Impacto</h2>

          <p className={S.impactSubtitle}>
            Transformando a saúde de nossa comunidade, um paciente de cada vez
          </p>

          <div className={S.impactCards}>
            <div className={S.impactCard}>
              <p className={S.impactValue}>2,500+</p>
              <p className={S.impactLabel}>Pessoas Atendidas</p>
            </div>

            <div className={S.impactCard}>
              <p className={S.impactValue}>150+</p>
              <p className={S.impactLabel}>Profissionais Voluntários</p>
            </div>

            <div className={S.impactCard}>
              <p className={S.impactValue}>98%</p>
              <p className={S.impactLabel}>Satisfação dos Pacientes</p>
            </div>

            <div className={S.impactCard}>
              <p className={S.impactValue}>5+</p>
              <p className={S.impactLabel}>Anos de Dedicação</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
