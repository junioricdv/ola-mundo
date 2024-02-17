import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Sou estudante de TI mais antes atuei por mais de 5 anos na Área Contábil, com boa experiência como Gestor Pessoal e um pouco no Setor Contábil, também tenho noção na Área fiscal mais só para agregar conhecimento entendendo como todo o funcionamento de uma Contabilidade. Atuei por 2 anos no Marketing Digital, usei muitos as Ferramentas do Adobe como: Photoshop, Premiere e After Effects. Optei por deixar o que já obtive experiência para estudar o que sempre amei, TECNOLOGIA, e hoje sou mais um Aluno da Alura.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Antônio Evaldo sorrindo"
                />
            </div>
        </div>
    )
}