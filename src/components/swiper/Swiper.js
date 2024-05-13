import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import styles from '../../styles/components/swiper.module.css';

export default function ServiceSwiper() {
  return (
    <>
      <div className={styles['swiper']}>
        <Swiper
          spaceBetween={20}
          freeMode={true}
          loop={true}
          pagination={{
              el: ".swiper-pagination",
              clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          breakpoints={{
            768: {slidesPerView: 4,},
            0: {slidesPerView: 2,},
          }}
        >
          <SwiperSlide className={styles['swiperCard']}>
              <h1 className={styles['titulo-carrossel']}>Abertura de empresa</h1>
              <p className={styles['paragrafo-carrossel']}>Cuidamos dos aspectos burocráticos e contábeis provenientes da abertura de uma empresa, gerando maior economia de tempo e alívio das complexidades administrativas.</p>
              <Link href="/services"><button className={styles['swiperBtn']}>Saiba mais</button></Link>
          </SwiperSlide>
          <SwiperSlide className={styles['swiperCard']}>
              <h1 className={styles['titulo-carrossel']}>Assessoria trabalhista</h1>
              <p className={styles['paragrafo-carrossel']}>O entendimento das leis e normativas laborais é crucial para a sustentabilidade e sucesso de qualquer organização, evitando riscos e possíveis litígios trabalhistas.</p>
              <Link href="/services"><button className={styles['swiperBtn']}>Saiba mais</button></Link>
          </SwiperSlide>
          <SwiperSlide className={styles['swiperCard']}>
              <h1 className={styles['titulo-carrossel']}>Encerramento de empresa</h1>
              <p className={styles['paragrafo-carrossel']}>Atuando como um intermediário entre o cliente e os órgãos reguladores, evitamos possíveis implicações legais e financeiras para os sócios e proprietários durante o encerramento de uma empresa.</p>
              <Link href="/services"><button className={styles['swiperBtn']}>Saiba mais</button></Link>
          </SwiperSlide>
          <SwiperSlide className={styles['swiperCard']}>
              <h1 className={styles['titulo-carrossel']}>Escrituração Contábil e Tributária</h1>
              <p className={styles['paragrafo-carrossel']}>Garantimos o cumprimento das obrigações legais de sua empresa através do registro de todas operações financeiras, como receitas, despesas, compras, vendas e investimentos.</p>
              <Link href="/services"><button className={styles['swiperBtn']}>Saiba mais</button></Link>
          </SwiperSlide>
          <SwiperSlide className={styles['swiperCard']}>
              <h1 className={styles['titulo-carrossel']}>Obrigações acessórias</h1>
              <p className={styles['paragrafo-carrossel']}>Garantimos a conformidade legal de sua empresa através do monitoramento do cumprimento das obrigações tributárias e legais por parte dos órgãos governamentais.</p>
              <Link href="/services"><button className={styles['swiperBtn']}>Saiba mais</button></Link>
          </SwiperSlide>
          <SwiperSlide className={styles['swiperCard']}>
              <h1 className={styles['titulo-carrossel']}>Planejamento estratégico</h1>
              <p className={styles['paragrafo-carrossel']}>Através de estratégias financeiras e contábeis, buscamos otimizar o desempenho financeiro e promover a conformidade fiscal para contribuir para o crescimento sustentável do seu negócio.</p>
              <Link href="/services"><button className={styles['swiperBtn']}>Saiba mais</button></Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}