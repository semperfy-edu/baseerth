// resources/js/Pages/Home.jsx
import React from 'react';
import { Link } from '@inertiajs/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home({ auth }) {
    return (
        <div className="bg-gray-100 text-gray-800">
            {/* Navbar */}
            {/* Navbar */}
            <header className="bg-[#5a883d] text-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Logo à esquerda */}
                    <div className="flex items-center space-x-4">
                        <img src="/images/logo_branca.png" alt="Logo" className="h-20" />
                        {/* <span className="text-2xl font-bold text-indigo-600">Minha Empresa</span> */}
                    </div>

                    {/* Links à direita */}
                    <div className="space-x-4">
                        {auth.user ? (
                            // Se estiver logado, mostra o botão Dashboard
                            <Link href={route('dashboard')} className="text-white hover:text-indigo-600">
                                Dashboard
                            </Link>
                        ) : (
                            // Se não estiver logado, mostra Login e Registrar
                            <>
                                <Link href={route('login')} className="text-white hover:text-indigo-600">
                                    Login
                                </Link>
                                <Link href={route('register')} className="text-white hover:text-indigo-600">
                                    Registrar
                                </Link>
                            </>
                        )}
                    </div>

                </div>
                <div className="bg-white text-black font-bold py-3">
                    <div className="flex justify-center space-x-4">
                        <Link href="/" className="hover:text-gray-300">Home</Link>
                        <Link href="/coas" className="hover:text-gray-300">Gerenciar Coas</Link>
                        {/* <Link href="/contato" className="hover:text-gray-300">U</Link> */}
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="!rounded-none"
                >
                    <SwiperSlide>
                        <img src="/images/banner1.png" alt="Banner 1" className="w-full h-auto rounded-none" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/banner2.png" alt="Banner 2" className="w-full h-auto rounded-none" />
                    </SwiperSlide>
                </Swiper>
            </header>

            <div className="flex justify-center py-8 bg-[#f8f6f0]">
                <div className="max-w-4xl bg-white border-8 border-[#5a883d] rounded-lg p-8 text-center shadow-lg">
                    <h2 className="text-[#5a883d] text-sm font-semibold uppercase mb-2">Conheça</h2>
                    <h3 className="text-[#5a883d] text-3xl font-bold mb-4">Erth Wellness</h3>
                    <p className="text-gray-600 mb-6">
                        A Erth Wellness é uma marca renomada no mercado de produtos de bem-estar, conhecida por oferecer itens de alta qualidade que promovem a saúde e o equilíbrio do corpo e da mente. Se você está interessado em experimentar os produtos da Erth Wellness, clique abaixo e marque uma consulta com um médico especializado:
                    </p>
                    {/* <button className="bg-[#5a883d] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#465a2e] transition">
                        MARQUE UMA CONSULTA
                    </button> */}
                </div>
            </div>




            {/* Hero Section */}
            <section className="bg-lime-600 text-white py-2 text-center">
                {/* <h1 className="text-4xl font-bold mb-4">Bem-vindo à Erth Wellness Brasil</h1>
                <p className="text-lg mb-8">Oferecemos soluções incríveis para o seu negócio.</p>
                <Link href="#contact" className="bg-white text-indigo-600 px-6 py-2 rounded-full hover:bg-gray-200 transition">
                    Entre em Contato
                </Link> */}
            </section>

            {/* About Section */}
            <section id="about" className="py-16 max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">Sobre Nós</h2>
                <p className="text-gray-600 mb-8">A Erth Wellness Brasil é uma extensão brasileira da Erth Wellness,
                    sediada na Califórnia (EUA), comprometida com o bem-estar e a saúde.
                    Tem como princípio a crença no poder da natureza para promover o equilíbrio e a felicidade nas pessoas.
                    Com uma dedicação inabalável à excelência, a Erth Wellness Brasil tem o foco total em fornecer os mais excepcionais produtos e serviços para os pacientes,
                    impulsionados por uma paixão única de ajudar quem precisa a atingirem seus objetivos de saúde, qualidade de vida e bem-estar.
                    Atualmente, conta com diversos profissionais na equipe amplamente qualificados, que são referência de conhecimento no mundo da Cannabis.</p>

                    <section className="bg-lime-600 text-white py-2 text-center">
                {/* <h1 className="text-4xl font-bold mb-4">Bem-vindo à Erth Wellness Brasil</h1>
                <p className="text-lg mb-8">Oferecemos soluções incríveis para o seu negócio.</p>
                <Link href="#contact" className="bg-white text-indigo-600 px-6 py-2 rounded-full hover:bg-gray-200 transition">
                    Entre em Contato
                </Link> */}
            </section>
            {/* Services Section */}
<br/>
                <h2 className="text-gray-600 text-2xl font-medium mb-6">MISSÃO</h2>
                <p className="text-gray-600 mb-8">Proporcionar às pessoas o alcance do bem-estar de uma forma mais humana e justa.</p>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>
                <h2 className="text-gray-600 text-2xl font-medium mb-6">VISÃO</h2>
                <p className="text-gray-600 mb-8">Buscar constantemente a inovação e diversificação na linha de produtos, oferecendo uma ampla gama de opções à base de Cannabis para atender às diversas necessidades.</p>


                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>

                <h2 className="text-gray-600 text-2xl font-medium mb-6">VALORES</h2>
                <p className="text-gray-600 mb-8">Valorizar a transparência em todo o seu processo produtivo e serviços, alinhada com as evidências científicas mais recentes, garantindo que os pacientes tenham confiança na origem e na alta qualidade de seus produtos com preços justos.</p>
            </section>


            {/* <section className="bg-lime-600 text-white py-2 text-center">
                {/* <h1 className="text-4xl font-bold mb-4">Bem-vindo à Erth Wellness Brasil</h1>
                <p className="text-lg mb-8">Oferecemos soluções incríveis para o seu negócio.</p>
                <Link href="#contact" className="bg-white text-indigo-600 px-6 py-2 rounded-full hover:bg-gray-200 transition">
                    Entre em Contato
                </Link>
            </section> */} 
            {/* Services Section */}
            {/* // <section id="services" className="py-16 bg-gray-200">
            //     <div className="max-w-7xl mx-auto px-4 text-center">
            //         <h2 className="text-3xl font-bold mb-6">Serviços</h2>
            //         <div className="grid md:grid-cols-3 gap-8">
            //             <div className="bg-white p-6 rounded-lg shadow-md">
            //                 <h3 className="text-xl font-semibold mb-4">Consultoria</h3>
            //                 <p className="text-gray-600">Ajudamos a planejar e executar estratégias eficientes.</p>
            //             </div>
            //             <div className="bg-white p-6 rounded-lg shadow-md">
            //                 <h3 className="text-xl font-semibold mb-4">Desenvolvimento</h3>
            //                 <p className="text-gray-600">Criamos sistemas sob medida para o seu negócio.</p>
            //             </div>
            //             <div className="bg-white p-6 rounded-lg shadow-md">
            //                 <h3 className="text-xl font-semibold mb-4">Suporte</h3>
            //                 <p className="text-gray-600">Estamos sempre prontos para ajudar.</p>
            //             </div>
            //         </div>
            //     </div>
            // </section> */}

            {/* Footer */}
            <footer className="bg-indigo-600 text-white py-4 text-center">
                <p>&copy; 2023, Erth Wellness, Ink</p>
            </footer>
        </div>
    );
}
