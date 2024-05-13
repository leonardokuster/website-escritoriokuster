import React, { Suspense } from 'react';
import Link from 'next/link';
import Button from '../components/button/Button';
import styles from '../styles/screens/about.module.css';
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image';


export default function About() {

    const aboutData = {
        textContent: [
            "Iniciando sua carreira profissional como servente de pedreiro, o contador Lauro Roque Küster aprendeu os valores fundamentais do trabalho árduo e persistência.",
            "Após essa fase inicial, ele ingressou na recepção de uma indústria de balas, onde dedicou seis anos de sua vida ao desenvolvimento de habilidades interpessoais e ao entendimento prático das operações de uma empresa.",
            "A guinada decisiva ocorreu quando ele se juntou ao departamento pessoal na empresa Hoeltz & Cia Ltda, uma indústria metalúrgica renomada na época. Durante 19 anos, ele desempenhou um papel crucial e acumulou conhecimentos valiosos do ambiente corporativo.",
            "Em 1982, buscando ampliar seus conhecimentos, o profissional iniciou um curso técnico em contabilidade no Colégio Marista São Luiz, marcando o início de uma nova fase em sua carreira.",
            "Após a conclusão do curso técnico, Lauro deu um passo corajoso e estabeleceu um pequeno escritório contábil em um dos cômodos de sua residência. Essa iniciativa, embora com desafios iniciais, foi a semente para o crescimento futuro. Intercalando suas responsabilidades na empresa Hoeltz, buscava equilibrar a estabilidade financeira com a construção de seu próprio negócio.",
            "Confrontando a dificuldade incial de atrair clientes, Lauro persistiu. Oferecia seus serviços, muitas vezes sem obter respostas imediatas. Contudo, o primeiro cliente foi o ponto de virada. A qualidade de seu trabalho, somado ao 'boca a boca' positivo, começou a atrair uma clientela crescente, expandindo seu negócio para uma sala improvisada nos fundos de sua casa.",
            "O ano 2000 marcou uma nova conquista significativa, quando ele adquiriu um terreno no centro da cidade. Neste local, construiu sua atual residência com um pequeno escritório em frente, expandindo sua capacidade de atendimento. A contratação de mais dois funcionários fortaleceu a equipe, permitindo-lhe oferecer serviços mais abrangentes e eficientes.",
            "Paralelamente ao gerenciamento do escritório contábil, Lauro decidiu buscar ainda mais conhecimento acadêmico. Matriculou-se no curso de Ciências Contábeis na Universidade de Santa Cruz do Sul (UNISC), estudando nos finais de semana.",
            "O escritório continuou a prosperar, culminando na construção de um novo espaço. Atualmente, a equipe é formada por 6 funcionários e atende a aproximadamente 300 empresas."
        ],
        servicesLink: "/services",
        budgetLink: "/budget",
    }

    return (
      <>
        <main className={styles['about']}>
            <div className={styles['texto']}>
                {aboutData.textContent ? (
                    <>
                        <h1 className={styles['titulo']}>SOBRE NÓS</h1>
                        {aboutData.textContent.map((paragraph, index) => (
                            <p key={index} className={styles['paragrafo']}>{paragraph}</p>
                        ))}
                    </>
                ) : (
                    <Skeleton animation="wave" variant="rounded" width={400} height={40} />
                )}
            </div>

            <div className={styles['elementos']}>
                <Suspense fallback={<Skeleton animation="wave" variant="rounded" width={436} height={360} />}>
                    <Image src="/images/img-escritorio.webp" alt="Homem sentado digitando no computador" className="desktop-image" width={1176} height={950} fetchpriority="high"/>
                    <Image src="/images/img-escritorio-tablet.webp" alt="Representação de um escritório" className="tablet-image" width={436} height={354} fetchpriority="high"/>
                </Suspense>
                <br />
                <div>
                    <Link href="/services">
                        <Button description='Conheça nossos serviços'/>
                    </Link>
                    <br />
                    <Link href="/budget">
                        <Button description='Solicite um orçamento'/>
                    </Link>
                </div>
            </div>
        </main>
      </>
    );
}