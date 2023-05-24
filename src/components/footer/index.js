//=====IMPORTACION DE LIBRERIAS======
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

//se genera nuestro componente funcional
function Footer(){
    return (
        <div>
            <h1>Hola soy el Footer</h1>
            function UncontrolledExample() {
                return (
                     <Carousel>
                     <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://api.time.com/wp-content/uploads/2014/07/zebra-new-red-meat.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.clarin.com/internacional/dato-inesperado-suricatas-animales-letales-planeta_0_ki7-5SF7n.html"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
        </div>
  );
};


export default Footer;