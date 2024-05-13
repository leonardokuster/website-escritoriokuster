import React, { Suspense } from 'react';
import Link from 'next/link';
import ServiceSwiper from '../components/swiper/Swiper';
import FeedbackCard from '../components/feedback/FeedbackCard';
import Button from '../components/button/Button';
import styles from '../styles/screens/budget.module.css';
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image';
import Form from '../components/form/Form';

export default function Budget() {

    const budgetData = {
        formTitle: "Solicite agora seu orçamento!"
    }

    return (
      <>
        <main>
            <div className={styles['section']}>
                <div className={styles['formulario']}>
                    <h1>
                        {budgetData.formTitle ? budgetData.formTitle : <Skeleton animation="wave" variant="rounded" width={400} height={40} />}
                    </h1>
                    <Form 
                        showSecondTextField={true}
                        showSecondButton={{ enabled: true, link: "https://wa.me/5551999947374", target: "_blank" }}
                        secondButtonText= "Ou fale por Whatsapp"
                    />
                </div>
                <div>
                    <Suspense fallback={<Skeleton animation="wave" variant="rounded" width={400} height={420} />}>
                        <Image src="/images/img-orcamento.webp" alt="Homem próximo a uma calculadora e prancheta, com um símbolo de dinheiro na mão" className="desktop-image" width={670} height={420} fetchpriority="high"/>
                        <Image src="/images/img-orcamento-tablet.webp" alt="Homem sentado com representações de contabilidade em volta" className="tablet-image" width={400} height={413} fetchpriority="high"/>
                    </Suspense>
                </div>
            </div>

            <div className={styles['section']}>
                <h2>Confira nossas soluções para impulsionar seu negócio</h2>
                <Link href="/services">
                    <Button description='Conheça todos os serviços'/>
                </Link>
            </div>

            <ServiceSwiper />
                           
            <div className={styles['feedback']}>
                <FeedbackCard 
                    photo= "/images/perfil1.webp"
                    description= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam placeat quaerat facere iure reiciendis nisi, asperiores soluta cum nesciunt eos reprehenderit totam quae hic dolore iste veritatis temporibus molestias alias!"
                    personalInfo= "Rodrigo Cruz - Mercado Santiago"
                />

                <FeedbackCard 
                    photo= "/images/perfil2.webp"
                    description= "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis alias provident sequi nobis et est aperiam dolore soluta nostrum rem, vero, corrupti debitis omnis eius assumenda! Neque reiciendis rem aperiam."
                    personalInfo= "Jéssica Pereira - Pizzaria Calabassas"
                />

                <FeedbackCard 
                    photo= "/images/perfil3.webp"
                    description= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam placeat quaerat facere iure reiciendis nisi, asperiores soluta cum nesciunt eos reprehenderit totam quae hic dolore iste veritatis temporibus molestias alias!"
                    personalInfo= "Laércio Gomes - Funilaria Vitória"
                />
            </div>
        </main>    
      </>
    );
}