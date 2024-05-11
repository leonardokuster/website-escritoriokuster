import React, { Suspense } from 'react';
import ServiceSwiper from '../components/swiper/Swiper';
import Link from 'next/link';
import Button from '../components/button/Button';
import Form from '../components/form/Form';
import styles from '../styles/home.module.css';
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image';

const LazyImage = React.lazy(() => import('next/image'));

export default function Home() {

    const homeData = {
        welcoming: "Seja bem vindo(a)!",
        welcomingText: "Sua jornada contábil começa aqui, onde a excelência é mais que um serviço, é uma promessa.",
        solutionsText: "Confira nossas soluções para impulsionar seu negócio",
        solutionsButton: "Conheça todos os serviços",
        officeSectionContent: [
            "Fundado em 1986, o escritório iniciou-se em um dos cômodos da residência do contador Lauro Roque Küster. Embora houvessem muitos desafios iniciais com a captação de novos clientes, Lauro persistia na prosperação de seu próprio negócio enquanto tentava equilibrar a estabilidade financeira através de um trabalho de meio período numa metalúrgica.",
            "A qualidade de seu trabalho, somado ao 'boca a boca' positivo, começou a atrair uma clientela crescente, expandindo seu negócio para uma sala improvisada nos fundos de sua casa.",
            "O ano 2000 marcou uma nova conquista significativa, quando ele adquiriu um terreno no centro da cidade. Neste local, construiu sua atual residência com um pequeno escritório em frente, expandindo sua capacidade de atendimento. A contratação de mais dois funcionários fortaleceu a equipe, permitindo-lhe oferecer serviços mais abrangentes e eficientes.",
            "O escritório continuou a prosperar, culminando na construção de um novo espaço. Atualmente, a equipe é formada por 6 funcionários e atende a aproximadamente 300 empresas."
        ],
        aboutLink: "/about",
        contactLink: "/contact",
        budgetLink: "/budget",
    }

    return (
      <>
        <main> 
            <div className={styles['section']}>
                <div className={styles['espacamento']}>
                    <h3 className={styles['subsubtitulo']}>
                        {homeData.welcoming ? homeData.welcoming : <Skeleton animation="wave" variant="rounded" width={200} height={40} />}
                    </h3>
                    <h2 className={styles['subtitulo']}>
                        {homeData.welcomingText ? homeData.welcomingText : <Skeleton animation="wave" variant="rounded" width={400} height={100} />}
                    </h2>
                    <div className={styles['elements']}>
                        {homeData.aboutLink ? (
                            <Link href={homeData.aboutLink}>
                                <Button description='Sobre a empresa'/>
                            </Link>
                        ) : (
                            <Skeleton animation="wave" variant="rounded" width={200} height={40} />
                        )}
                        <h3 className={styles['subsubtitulo']}>
                            {homeData.contactLink ? (
                                <Link href={homeData.contactLink}>Fale com um especialista</Link>
                            ) : (
                                <Skeleton animation="wave" variant="rounded" width={200} height={40} />
                            )}
                        </h3>
                    </div>
                </div>
                <div>
                    <Suspense fallback={<Skeleton animation="wave" variant="rounded" width={380} height={460} />}>
                        <Image src="/images/img-inicial.webp" alt="Grupo de pessoas trabalhando" className="desktop-image" width={920} height={360} fetchpriority="high"/>
                        <Image src="/images/img-inicial-tablet.webp" alt="Homem no topo de uma montanha puxando um empresário" className="tablet-image" width={379} height={459} fetchpriority="high"/>
                    </Suspense>
                </div>
            </div>
                        
            <div className={styles['section']}>
                <h2 className={styles['subtitulo']} id="subtitulo-solucoes">
                    {homeData.solutionsText ? homeData.solutionsText : <Skeleton animation="wave" variant="rounded" width={200} height={40} />}
                </h2>
                {homeData.solutionsButton ? (
                    <Link href="/services">
                        <Button description='Conheça todos os serviços'/>
                    </Link>
                ) : (
                    <Skeleton animation="wave" variant="rounded" width={200} height={40} />
                ) }             
            </div>
                    
            <ServiceSwiper />
             
            <div className={styles['section']} style={{ justifyContent: 'space-around' }}>
                <div>
                    <Suspense fallback={<Skeleton animation="wave" variant="rounded" width={331} height={353} />}>
                        <LazyImage src="/images/img-gestao.webp" alt="Imagem de lupa analisando tabelas. Calculadora, óculos e caneta se encontram em volta" className="desktop-image" width={436} height={366} loading="lazy"/>
                        <LazyImage src="/images/img-gestao-tablet.webp" alt="Uma família em volta de calculadora, dinheiro e ações subindo" className="tablet-image" width={331} height={353} loading="lazy"/>
                    </Suspense>
                </div>
                <div className={styles['formulario']}>
                    <h1 className={styles['titulo']}>Otimize sua gestão empresarial</h1>
                    <h2 className={styles['subtitulo']}>Nossa equipe está pronta para impulsionar sua contabilidade para o sucesso!</h2>
                    <Form
                        showSecondTextField={false}
                        showSecondButton={false}
                        secondButtonText=''
                        buttonWidth= '100%'
                    />
                </div>
            </div>

            {homeData.officeSectionContent ? (
                <>
                    <h1 className={styles['line']}>O ESCRITÓRIO</h1>
                    {homeData.officeSectionContent.map((paragraph, index) => (
                        <p key={index} className={styles['paragrafo']}>{paragraph}</p>
                    ))}
                </>
            ) : (
                <Skeleton animation="wave" variant="rounded" width={400} height={20} />
            )}

            {homeData.budgetLink ? (
                <Link href={homeData.budgetLink}>
                    <Button description='Solicite um orçamento' />
                </Link>
            ) : (
                <Skeleton animation="wave" variant="rounded" width={200} height={40} />
            )}
        </main>
      </>
    );
}