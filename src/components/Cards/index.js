import React, { useState,useEffect} from "react"

const Cards = () => {
    
    return (
        <section id="main-slider">

            <div class="swiper-slide">

                <div class="main-slider-box">

                    <a href="https://youtu.be/x5pZI-DmtrE" class="main-slider-overlay">

                        <span class="Resumo">Em Avatar: O Caminho da Água, sequência de Avatar (2009), após dez anos da primeira batalha de Pandora entre os Na'vi e os humanos, Jake Sully (Sam Worthington) vive pacificamente com sua família e sua tribo. Ele e Ney'tiri formaram uma família e estão fazendo de tudo para ficarem juntos, devido a problemas conjugais e papéis que cada um tem que exercer dentro da tribo... +</span>
                        <i class="fas fa-play"></i>

                    </a>

                    <div class="main-slider-img">
                        <img src={Avatar} alt="Poster" />
                    </div>

                    <div class="main-slider-text">

                        <span class="quality">Full HD</span>

                        <div class="botton-text">

                            <div class="movie-name">

                                <span>2022</span>

                                <strong>Avatar: O caminho da água</strong>

                            </div>

                            <div class="category-rating">

                                <div class="category">

                                    <a href="#">Adventure</a>

                                </div>

                                <div class="rating">
                                    7.8 <img src={Imdb} alt="imbd" />

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div class="swiper-slide">
                <div class="main-slider-box">

                    <a href="https://www.youtube.com/watch?v=qtHcEfpYIow&ab_channel=UniversalPicturesBrasil" class="main-slider-overlay">
                        <span class="Resumo">O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço: por conta de seu gosto pelo perigo e pelo desrespeito à segurança pessoal, ele queimou oito de suas nove vidas. Com apenas uma vida restante, o Gato precisa pedir ajuda para uma antiga parceira - que atualmente é sua rival e inimiga mortal, Kitty Pata Mansa - para continuar vivo... +</span>
                        <i class="fas fa-play"></i>

                    </a>

                    <div class="main-slider-img">

                        <img src={Gatodebotas} alt="Poster"/>

                    </div>

                    <div class="main-slider-text">

                        <span class="quality">Full HD</span>

                        <div class="botton-text">

                            <div class="movie-name">

                                <span>2022</span>

                                <strong>Gato de botas 2</strong>

                            </div>

                            <div class="category-rating">

                                <div class="category">

                                    <a href="#">Animation</a>

                                </div>

                                <div class="rating">
                                    7.9 <img src={IMDb} alt="imdb" />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="swiper-slide">
                <div class="main-slider-box">

                    <a href="https://youtu.be/vqi1OuxQtJ8" class="main-slider-overlay">
                        <span class="Resumo">Em A Baleia, seguimos um professor de inglês e seu relacionamento fragilizado com sua filha, Ellie. Charlie (Brendan Fraser) é um professor de inglês recluso, que vive com obesidade severa e luta contra um transtorno de compulsão alimentar. Ele dá aulas online... +</span>
                        <i class="fas fa-play"></i>

                    </a>

                    <div class="main-slider-img">

                        <img src={Abaleia} alt="Poster"/>

                    </div>

                    <div class="main-slider-text">

                        <span class="quality">Full HD</span>

                        <div class="botton-text">

                            <div class="movie-name">

                                <span>2022</span>

                                <strong>A Baleia</strong>

                            </div>

                            <div class="category-rating">

                                <div class="category">

                                    <a href="#">Drama</a>

                                </div>

                                <div class="rating">
                                    7.8 <img src={IMDb} alt="imdb" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="swiper-slide">
                <div class="main-slider-box">

                    <a href="https://youtu.be/vENtKgrHUUU" class="main-slider-overlay">
                        <span class="Resumo">Em Creed III, continuação do longa de 2018, Michael B. Jordan volta a interpretar Adonis Creed. Depois de dominar o mundo do boxe, Adonis Creed vem prosperando tanto na carreira quanto na vida familiar... +</span>
                        <i class="fas fa-play"></i>

                    </a>

                    <div class="main-slider-img">

                        <img src={Creed3} alt="Poster"/>

                    </div>

                    <div class="main-slider-text">

                        <span class="quality">Full HD</span>

                        <div class="botton-text">

                            <div class="movie-name">

                                <span>2023</span>

                                <strong>Creed 3</strong>

                            </div>

                            <div class="category-rating">

                                <div class="category">

                                    <a href="#">Adventure</a>

                                </div>

                                <div class="rating">
                                    7.3 <img src={IMDb} alt="imdb" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="swiper-slide">
                <div class="main-slider-box">

                    <a href="https://youtu.be/6jIz_8tokvg" class="main-slider-overlay">
                        <span class="Resumo">Em Homem-Formiga e a Vespa: Quantumania, quando Cassie (Kathryn Newton), filha de Scott Lang (Paul Rudd), desenvolve um dispositivo que permitiria a comunicação com o reino quântico, o experimento termina em desastre: Cassie, Scott e sua companheira e heroína, Vespa, Hope van Dyne (Evangeline Lilly) involuntariamente se encontram...+</span>
                        <i class="fas fa-play"></i>

                    </a>

                    <div class="main-slider-img">

                        <img src={HomemFormiga} alt="Poster"/>

                    </div>

                    <div class="main-slider-text">

                        <span class="quality">Full HD</span>

                        <div class="botton-text">

                            <div class="movie-name">

                                <span>2023</span>

                                <strong>Homem-Formiga e a Vespa: Quantumania</strong>

                            </div>

                            <div class="category-rating">

                                <div class="category">

                                    <a href="#">Adventure</a>

                                </div>

                                <div class="rating">
                                    6,5 <img src={IMDb} alt="imdb" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export { Cards }