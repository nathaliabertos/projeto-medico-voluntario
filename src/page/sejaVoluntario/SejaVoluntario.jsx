import S from "./sejaVoluntario.module.scss";

export default function SejaVoluntario() {
  return (
    <main className={S.volunteerPage}>
      <section className={S.hero}>
        <div className={S.heroContent}>
          <h1>Seja Voluntário</h1>
          <p>
            Junte-se a nós e faça a diferença na vida de pessoas que precisam
          </p>
        </div>

        <div className={S.cards}>
          <article className={S.card}>
            <h3>Impacto Direto</h3>
            <p>
              Sua dedicação salva vidas e transforma comunidades.
            </p>
          </article>

          <article className={S.card}>
            <h3>Crescimento Pessoal</h3>
            <p>
              Desenvolva habilidades e cresça profissionalmente.
            </p>
          </article>

          <article className={S.card}>
            <h3>Comunidade</h3>
            <p>
              Faça parte de uma rede de profissionais comprometidos.
            </p>
          </article>
        </div>
      </section>

      <section className={S.formSection}>
        <div className={S.formContainer}>
          <h2>Inscrição para Voluntários</h2>

          <form className={S.form}>
            <fieldset className={S.fieldset}>
              <legend>Dados Pessoais</legend>

              <div className={S.row}>
                <label className={S.field}>
                  <span>Seu Nome *</span>
                  <input type="text" placeholder="Seu Nome *" />
                </label>

                <label className={S.field}>
                  <span>Seu Email *</span>
                  <input type="email" placeholder="Seu Email *" />
                </label>
              </div>

              <div className={S.row}>
                <label className={S.field}>
                  <span>Seu Telefone *</span>
                  <input type="tel" placeholder="Seu Telefone *" />
                </label>
              </div>
            </fieldset>

            <fieldset className={S.fieldset}>

              <label className={S.field}>
                <span>Mensagem Adicional</span>
                <textarea
                  rows={5}
                  placeholder="Conte-nos porque você quer ser voluntário..."
                />
              </label>
            </fieldset>

            <p className={S.helperText}>
              Entraremos em contato para mais informações
            </p>

            <button type="button" className={S.submitButton}>
              Enviar Inscrição
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
