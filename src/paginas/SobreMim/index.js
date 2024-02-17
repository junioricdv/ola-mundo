import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Júnior Cardoso!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Júnior Cardoso"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, Deus é bom o tempo todo, eu sou estudante da Alura, sempre fui apaixonado por tecnologia. Trabalhei por cinco anos na Oi Fixo e lá já comecei entender um pouco de tecnologia. No final de 2011 quando sair, comecei a trabalhar em um escritório onde tinha horários vagos em que eu poderia estudar. Fiz alguns cursos de XHTML, Javascript e Java pela Universidade XTI, mais não dei continuidade.
            </p>
            <p className={styles.paragrafo}>
                Em 2014 entrei em uma Contabilidade por indicação de um amigo DEV para ser TI, além de aperfeiçoar meus conhecimentos em computação acabei também aprendendo a profissão me tornando um Contabilista, mais especializado em Gestão Pessoal onde atuei por quase 6 anos.
            </p>

            <p className={styles.paragrafo}>
                No ano de 2020, em meio a Pandemia comecei a trabalhar com Marketing Digital  onde tive a necessidade de fazer meu primeiro site. Como não tinha muita experiencia usei WORDPRESS e obtive um bom resultado, fiz também mais outros sites porem ainda não me dava por satisfeito pois queria escrever todo o código e não usar templates.
            </p>

            <p className={styles.paragrafo}>
                No final do ano de 2022 ao assistir um PodCast ouvir falar sobre uma escola de tecnologia que oferecia o tão sonhado curso, com bastante facilidades, mas como nem tudo  que brilha é ouro percebi que era mais uma propaganda enganosa, o valor era super caro, fora do meu orçamento. Mais como Deus é bom o tempo todo, fui indicado por um primo a assinar a Plataforma da Alura e desde então não parei mais de estudar.
            </p>

            <p className={styles.paragrafo}>
                Hoje tenho um certo conhecimento em Java, PostgreSQL, HTML, CSS, Javascript, React mais quero me especializar como Front-End. Espero aprender bastante ainda!
            </p>



        </PostModelo>
    )
}