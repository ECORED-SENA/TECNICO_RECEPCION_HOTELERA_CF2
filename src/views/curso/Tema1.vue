<template lang="pug">
.curso-main-container
  BannerInterno(titulo="1. Servicios Turísticos")
  .container.tarjeta--blanca.p-4.p-md-5.mb-5
    .imagen.mt-5
      img(src="@/assets/curso/tema-1/jpg/img1.jpg")
    .row.mt-5
      .col-lg-6.col-md-12
        p.mt-5 Al hablar de servicios turísticos nos referimos a los bienes y servicios ofrecidos por las empresas del mercado turístico y que satisfacen las necesidades de los turistas en la organización de viajes y mediante el disfrute de estos; 
          b de esta forma el servicio turístico está directamente encargado de satisfacer la demanda turística 
          b-none de personas que se desplazan de un lugar a otro, con el fin de hacer actividades ajenas a su rutina (turísticas).
        br
        p El turismo se fundamenta en un sistema de relaciones entre el sujeto (turista) y el objeto (destino, prestadores, organización). Para el turista, el turismo es el conjunto de servicios que le son facilitados por los prestadores de servicios turísticos y para estos el turista es el destinatario de los servicios que ofrece.
      .col-lg-6.col-md-12
        .imagen.bt-5
          img(src="@/assets/curso/tema-1/svg/img1.svg")
    div.rp.mt-5 
          img.img-rp(src="@/assets/curso/tema-1/svg/img2.svg")
          p 
            b Servicios turísticos: 
            b-none es el conjunto de actividades perfectamente diferenciadas entre sí, pero íntimamente relacionadas, que funcionan en forma armónica y coordinada con el propósito de responder a las exigencias de servicios que, en un destino, generan  una corriente turística.
    p.mt-5 Este va de la mano con el conjunto de interacciones humanas, 
      b como transportes, hospedaje, alimentación, diversiones, aprendizajes, derivados de los desplazamientos transitorios, temporales o de transeúntes 
      b-none de fuertes núcleos  de población con propósitos diversos y múltiples deseos humanos, que abarcan una gama amplia  de motivaciones de viaje.
    br
    p El servicio turístico comprende el conjunto de técnicas relativas a la transferencia y venta de bienes turísticos del productor al consumidor.  Constituye la política de entidades turísticas en relación con 
      b la oferta, la demanda y la preparación del producto turístico para la venta, 
      b-none distribución, comercialización  y satisfacción óptima de necesidades de un segmento determinado de consumidores (Novas, 2006).
    h4 Servicios turísticos:
    div.div-box-general
      div.div-box
        img.img-box(src="@/assets/curso/tema-1/svg/img3.svg")
        h6.text-center.mt-3 Tour y excursiones
      div.div-box
        img.img-box(src="@/assets/curso/tema-1/svg/img4.svg")
        h6.text-center.mt-3 Transporte
      div.div-box
        img.img-box(src="@/assets/curso/tema-1/svg/img5.svg")
        h6.text-center.mt-3 Alojamiento
      div.div-box
        img.img-box(src="@/assets/curso/tema-1/svg/img6.svg")
        h6.text-center.mt-3 Agencia de viajes
      div.div-box
        img.img-box(src="@/assets/curso/tema-1/svg/img7.svg")
        h6.text-center.mt-3 Restaurantes
    .row.mt-5
      .col-lg-8
        p Para la prestación de servicios turísticos es necesario conocer el funcionamiento del sistema turístico, que se define como el conjunto de elementos interrelacionados entre sí que evolucionan de forma dinámica para configurar la naturaleza de la actividad turística, conformado por cinco  subsistemas:  
      .col-lg-auto
        ul
          li Estructura turística (planta turística).
          li Infraestructura turística.
          li Superestructura turística.
          li Oferta turística.
          li Demanda turística.
    
                //-  // AQUI HACE FALTA UN CAROUSEL
    #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel')
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
      .carousel-inner
        .carousel-item.active
          figure 
            .row
              .col-lg-3
                img.img-box(src="@/assets/curso/tema-1/svg/img9.svg")
              .col-lg-9
                h3 Estructura Turística
                p Denominada también planta turística hace posible la permanencia del turista o visitante en el lugar de destino. 
                  b Está conformada por  el conjunto de atractivos turísticos, instalaciones y equipamiento encargados, 
                  b-none de la prestación de servicios al turista, ofreciendo comodidad en el destino visitado, para satisfacer las necesidades y superar sus expectativas en términos de calidad (Boullon, 2006).
        .carousel-item
          figure
            .row
              .col-lg-3
                img.img-box(src="@/assets/curso/tema-1/svg/img10.svg")
              .col-lg-9
                h3 Infraestructura turística
                p Es el conjunto de bienes y servicios con los que cuenta un destino turístico para contribuir a la satisfacción de las necesidades y expectativas de los turistas, 
                  b facilitando la accesibilidad y desplazamiento al lugar de destino, como vías de comunicación, terminales de transporte 
                  b-none (aéreo, terrestre, ferroviario, marítimo, fluvial y lacustre), sistemas de comunicación (satelital, telefonía, acceso a la red), sistema de sanidad (acueducto, alcantarillado, recolección de basuras, primeros auxilios y servicios hospitalarios) y servicios de energía eléctrica (red eléctrica, alumbrado público, domiciliario).
        .carousel-item
          figure
            .row
              .col-lg-3
                img.img-box(src="@/assets/curso/tema-1/svg/img11.svg")
              .col-lg-9
                h3 Superestructura turística
                p Está conformada por todos los organismos oficiales, mixtos y privados que se encargan de la regulación del Sistema Turístico (normatividad, legislación turística). 
                  b Con el fin de lograr la optimización, facilitación, producción y venta de los  servicios 
                  b-none que integran la actividad turística (Ministerio de Industria Comercio y Turismo, Dirección Nacional de Turismo, PROCOLOMBIA, FONTUR, ANATO, ACODRES, clústeres de turismo).
        .carousel-item
          figure
            .row
              .col-lg-3
                img.img-box(src="@/assets/curso/tema-1/svg/img12.svg")
              .col-lg-9
                h3 Oferta turística
                p Es el conjunto de productos y servicios asociados a un determinado espacio geográfico y sociocultural, 
                  b que permite facilitar y propiciar el aprovechamiento de los atractivos turísticos de ese lugar 
                  b-none y cuyos oferentes pueden  vender en el mercado a un precio  establecido y en un periodo de tiempo determinado, para ser usado o consumido por los turistas.
        .carousel-item
          figure
            .row
              .col-lg-3
                img.img-box(src="@/assets/curso/tema-1/svg/img13.svg")
              .col-lg-9
                h3 Demanda turística
                p Se define como el conjunto de turistas que, de forma individual o colectiva, están motivados por una serie de productos o servicios turísticos con el objetivo de cubrir sus necesidades; 
                  b opera en el contexto de un mercado en el que intervienen diversos prestadores de servicios turísticos 
                  b-none que ponen a disposición del turista los  servicios y productos que requieren para satisfacer determinadas necesidades (viajes, ocio, vacaciones, esparcimiento, tiempo libre).  
                br
                p Desde el punto de vista económico 
                  b la oferta turística está dada por  bienes o  servicios, 
                  b-none que son comercializados como producto turístico.
      div.carousel-buttons    
        button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
          span.carousel-control-prev-icon(aria-hidden='true')
          span.visually-hidden Previous
      div.carousel-buttons    
        button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
          span.carousel-control-next-icon(aria-hidden='true')
          span.visually-hidden Next

    p.mt-5   Producto turístico lo integra la sumatoria de los  atractivos turísticos, los servicios de la planta turística y la accesibilidad dentro de un destino, que integrados logran satisfacer las necesidades y motivaciones del turista.
    br
    |Todos estos elementos que conforman el producto turístico se resumen en tres:
    .row.mt-5
      .col-lg-7
        h4 Atractivos turísticos
        p Son todos aquellos elementos naturales, bienes creados por la mano del hombre y hechos sociales que crean el interés de ser conocidos y permiten su disfrute.
      .col-lg-5
        img.img-box(src="@/assets/curso/tema-1/jpg/img2.jpg")
    .row.mt-3
      .col-lg-5
        img.img-box(src="@/assets/curso/tema-1/jpg/img3.jpg")
      .col-lg-7
        h4 Servicios turísticos o planta turística
        p Son el conjunto de medios y actividades que facilitan la estancia y el bienestar del viajero, convergiendo en ellos elementos tangibles e intangibles, los cuales son en su etapa final de consumo, interdependientes (Instituto Distrital de Turismo ANATO Asociación Colombiana de Agencias de Viajes y Turismo, 2007).
    .row.mt-3
      .col-lg-7
        h4 Accesibilidad
        p La accesibilidad en el diseño de producto hace relación solamente a las vías de comunicación que se dispone para acceder al destino y a cada uno de los lugares de interés.
      .col-lg-5
        img.img-box(src="@/assets/curso/tema-1/jpg/img4.jpg")

    div.table-general.d-block.m-auto.mt-5
      div.table-title
        h4 Producto turístico
      div.table-columns
        div.column-1
          h5.text-center Atractivos turísticos.
          ul
            li Sitios naturales.
            li Manifestaciones culturales.
            li Hechos históricos.
            li Museos.
            li Folclor.
            li Acontecimientos programados - eventos.
            li Realizaciones técnicas, cientificas o artísticas contemporanea.
        div.column-2
          h5.text-center Servicios turísticos o planta turística.
          ul 
            li Alojamiento
            li Restauración.
            li Esparcimiento y diversión.
            li Agencias de viajes.
            li Guías de turismo.
        div.column-1
          h5.text-center Accesibilidad.
          ul
            li Transporte
            li Comunicación.
            li Servicios Públicos.
    div.image-text.mt-5
      img.img-text(src="@/assets/curso/tema-1/jpg/img5.jpg")
      div.text-image
        h1.h1-video.d-none.d-xl-block Video Colombia
        h2.h2-video.d-none.d-xl-block Land Of Sabrosura 
        div.video-enlace
          a(href="https://www.youtube.com/watch?v=JNDGMhTo9e8",target="_blank")
            img.img-rp(src="@/assets/curso/tema-1/svg/img8.svg")
            p
              b Mira el video
              br
              | Esto es un boton que abre en un modal el video 
    #t_1_1.h2.mt-5 1.1 Características
    .row
      .col-lg-6
        p A diferencia de los productos tradicionales de consumo, donde se entrega un artículo que se puede tocar, degustar o sentir, un producto turístico tiene un contenido físico limitado y se evidencia al momento de recibir el servicio que brindan los prestadores de servicios turísticos.
        br
        p Entre las características propias que tienen los servicios turísticos frente a otros productos, se pueden identificar las siguientes:
      .col-lg-6
        img(src="@/assets/curso/tema-1/jpg/img6.jpg")
    div.rp2.mt-5 
          img.img-rp2(src="@/assets/curso/tema-1/svg/img14.svg")
          h2 Intangibilidad:
          p es la característica que distingue a los productos de los servicios y supone tanto un elemento palpable como mental, conlleva a que el consumidor tenga un elevado grado de incertidumbre durante el proceso de compra.
    div.rp2.mt-3 
          img.img-rp2(src="@/assets/curso/tema-1/svg/img14.svg")
          h2 Variabilidad:
          p es ofrecido y prestado por personas distintas y en circunstancias diferentes y es difícil evaluar la calidad antes de la compra, ya que las percepciones varían según las personas.
    div.rp2.mt-3 
          img.img-rp2(src="@/assets/curso/tema-1/svg/img14.svg")
          h2 Caducidad:
          p son susceptibles de perecer y no se pueden almacenar.
    div.rp2.mt-3 
          img.img-rp2(src="@/assets/curso/tema-1/svg/img14.svg")
          h2 Temporalidad:
          
          p la compra de servicios solo da el derecho de ser usados en un tiempo y lugar determinado.
    div.rp2.mt-3 
          img.img-rp2(src="@/assets/curso/tema-1/svg/img14.svg")
          h2 Inseparabilidad:
          p la creación y realización del servicio puede ocurrir al mismo tiempo que su consumo (in situ).
    div.rp2.mt-3 
          img.img-rp2(src="@/assets/curso/tema-1/svg/img14.svg")
          h2 No devolución:
          p los servicios una vez utilizados no se pueden devolver.
    div.rp2.mt-3 
          img.img-rp2(src="@/assets/curso/tema-1/svg/img14.svg")
          h2 Interdependencia:
          p el número de empresas que intervienen en la prestación del servicio hacen que la satisfacción del turista no dependa de una sola empresa sino del conjunto de prestadores.
    div.rp2.mt-3 
          img.img-rp2(src="@/assets/curso/tema-1/svg/img14.svg")
          h2 Estacionalidad:
          p se vende en determinados momentos debido a la concentración de la demanda turística en ciertos periodos del año: temporadas, vacaciones, fines de semana.
    div.rp2.mt-3 
          img.img-rp2(src="@/assets/curso/tema-1/svg/img14.svg")
          h2 Intransferible:
          p una vez recibido no se puede ceder a otra persona el derecho sobre un servicio ya prestado.
    div.rp3.mt-5 
          img.img-rp(src="@/assets/curso/tema-1/svg/img2.svg")
          p 
            b La servucción: 
            b-none significa el proceso de elaboración de un servicio, la organización de los elementos físicos y humanos en la relación cliente – empresas necesarias para la prestación de un servicio, cuantas características esenciales y niveles de calidad han sido determinadas (Pavón, 2012).

    #t_1_2.pb-0.h2.mt-5 1.2 Tipos 
    .row
      .col-lg-6
        p El conjunto de empresas que conforman la Industria Turística denominados prestadores de servicios turísticos (empresas de transporte, alojamiento, alimentación, organizadoras de eventos y amenidades, recreación, entre otros), 
          b responde a los múltiples servicios que deben ofrecer y prestar a los turistas o viajeros; 
          b-none operando de manera articulada y en conjunto  para responder a las necesidades del turista, haciendo posible el acceso, permanencia y disfrute de este en el lugar de destino.
        br
        p En Colombia se denominan prestadores de servicios turísticos, toda persona natural o jurídica que habitualmente proporcione intermedie o contrate directa o indirectamente con el turista, 
          b la prestación de los servicios a que se refiere la Ley 300 de 1996 
          b-none y que se encuentre inscrito en el Registro Nacional de Turismo (Fondo Nacional de Turismo - FONTUR. República de Colombia. Bogotá D.C., 2020).
      .col-lg-6
        img.d-block.m-auto(src="@/assets/curso/tema-1/jpg/img7.jpg")
    div.rp4.mt-5 
          h4 Entrar al enlace Ley 1101 de 2006. / Ley 300 de 1996 - Ley General de Turismo.
          div.button-link
            //---------------> ESTE ENLACE ESTA CAIDO 
            a(href="http://www.suinjuriscol.gov.co/viewDocument.asp?ruta=Leyes/1673876",target="_blank")
              h4 Enlace aquí
    
</template>

<script>
import { mapActions } from 'vuex'
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  mounted() {
    this.increment()
    setTimeout(() => {
      this.decrease()
    }, 3000)
  },
  methods: {
    ...mapActions(['increment', 'decrease']),
  },
}
</script>

<style lang="sass" scoped></style>
