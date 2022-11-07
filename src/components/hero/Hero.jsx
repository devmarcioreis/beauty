import React from 'react'
import './hero.css'
import FaceImg from '../../assets/face.png'
import { BsFillBagCheckFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='hero__container'>
        <div className="hero__sides">
            <span className='text-1'>Creme para pele</span>
            <div className="hero__text">
                <span>Mais vendidos</span>
                <span>Uma coleção dos cremes mais vendidos de 2022 em promoção.</span>
            </div>
        </div>
        <div className="wrapper">
            <div className="hero__circle"></div>
            <img src={FaceImg} alt="Face" />
            <div className="hero__cart">
                <BsFillBagCheckFill />
                <div className="signup">
                    <span>Reservar o meu</span>
                    <div>
                        <BsFillArrowRightCircleFill />
                    </div>
                </div>
            </div>
        </div>
        <div className="hero__sides">
            <div className="hero__traffic">
                <span>10 Mil</span>
                <span>Visitas por mês</span>
            </div>
            <div className="hero__customers">
                <span>10 Mil</span>
                <span>Clientes felizes</span>
            </div>
        </div>
    </div>
  )
}

export default Hero