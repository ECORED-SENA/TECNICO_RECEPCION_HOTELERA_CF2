<template lang="pug">
.curso-main-container
  BannerInterno(titulo="4. Área de Reservas")
  .container.tarjeta--blanca.p-4.p-md-5.mb-5
    .imagen.mt-5
      img(src="@/assets/curso/tema-4/jpg/img1.jpg")
    .row
      .col-lg-7
        p.mt-5 El área de reservas tiene en la gran mayoría de los casos el primer contacto con los clientes que en un futuro inmediato visitarán el hotel; manteniendo  contacto permanente con los diferentes tipos de clientes: agencias de viajes, empresas y particulares.
        br
        p Este departamento se encarga de administrar de manera eficiente la disponibilidad de habitaciones, procurando siempre venderlas de la forma más conveniente y rentable para el hotel.
      .col-lg-5
        div.div-box-general-2.mt-3
          p.p-enfasis Las reservas pueden ser telefónicas, directas, virtuales, por grupos y a través, de sistemas de reservaciones o GDS.


    #t_4_1.h2 4.1 Funciones
    p El personal que trabaja en reservas debe saber vender los servicios que ofrece a los clientes y poseer los conocimientos necesarios que implica el proceso de reservaciones.

    div.recuadro.mt-5 
      h5 Recepción y control
      p Tiene como principal función la recepción y control de las solicitudes de espacio para la reserva de habitaciones, tanto  de las agencias de viajes, como de otras empresas y público en general, además cumple con una importante labor en el proceso de  venta de habitaciones, manteniendo  actualizada  la recepción, respecto a la situación ocupacional del hotel, con el objetivo de captar la mayor cantidad de clientes.
    div.recuadro.mt-3 
      h5 Primer contacto
      p Es el primer contacto de los clientes con el hotel y debe proporcionar una imagen de amabilidad en el trato y eficiencia en la prestación de servicio.
    div.recuadro.mt-3 
      h5 Gestión eficiente
      p Gestión eficiente de la disponibilidad de habitaciones, revisando constantemente el nivel de ocupación y realizando previsiones adecuadas para evitar situaciones conflictivas tales como sobreocupación.
    div.recuadro.mt-3 
      h5 Resolver
      p Resolver de forma ágil y con disposición  cualquier solicitud de alojamiento por parte de un cliente. 
    div.recuadro.mt-3 
      h5 Toma de reservas
      p Toma de reservas individuales y de grupos.
    div.recuadro.mt-3 
      h5.m-0 Gestión de cupos
    div.recuadro.mt-3 
      h5 Planning
      p Elaboración y archivo de documentación (planning, hoja y libro de reservas).
    div.recuadro.mt-3 
      h5 Previsión
      p Previsión de servicios y comunicación con los demás  departamentos del hotel.
    div.recuadro.mt-3 
      h5 Atendiendo las peticiones
      p Realiza reservas de habitaciones, se procede, atendiendo las peticiones de los clientes según sus preferencias y su histórico de estancias.
    div.recuadro.mt-3 
      h5 Recibe el rooming
      p Recibe el rooming list que las agencias de viajes envían asegurándose que estos contengan la mayor cantidad de información  posible y que ésta no varíe.
    div.recuadro.mt-3 
      h5 Elabora la lista
      p Elabora la lista de llegadas previstas y oficializada con la firma del responsable de esta actividad.
    div.recuadro.mt-3
      h5 Archiva
      p Archiva toda la información por un período de tiempo determinado.
    div.recuadro.mt-3 
      h5 Informa a la recepción
      p Informa a la recepción de cualquier cambio en la lista de llegadas previstas del día, después que esta haya sido emitida, siempre con el tiempo necesario para su tratamiento.
    div.recuadro.mt-3 
      h5 Comunica al cliente
      p En aquellos casos en los que no exista disponibilidad de alojamiento para las fechas solicitadas, igualmente se le comunica al cliente, dejando abierta la posibilidad de comunicarle disponibilidad de alojamiento en caso de anulación o cancelación de alguna otra reserva previamente concedida, en cuyo caso lo anotaremos como reserva en lista de espera.

    #t_4_2.h2.mt-5 4.2 Cualidades del personal de reservas
    div.img-content
      div.images-cards
        img.img-cards(src="@/assets/curso/tema-4/jpg/img2.jpg" style="min-width:447px")
        p 
          b Excelente presentación personal 
          b-none acorde a las normas de etiqueta y protocolo (aseo personal, portar adecuadamente el uniforme, buena postura)
      div.images-cards
        img.img-cards(src="@/assets/curso/tema-4/jpg/img3.jpg" style="width:447px")
        p 
          b Amabilidad y cortesía, 
          b-none ser respetuoso de la necesidad de las personas, actuando con buena actitud y muy receptivo.
      div.images-cards
        img.img-cards(src="@/assets/curso/tema-4/jpg/img4.jpg" style="width:447px")
        p 
          b Comunicación verbal, 
          b-none vocabulario sencillos, comprensibles y apropiados, hablar fluida y tranquilamente, evitando respuestas monosílabas.
      div.images-cards
        img.img-cards(src="@/assets/curso/tema-4/jpg/img5.jpg" style="width:447px")
        p 
          b Comunicación no verbal, 
          b-none cuidar movimientos corporales, su expresión facial, comunicación visual y táctil. Manejar la distancia proxémica con el huésped.
    #t_4_3.h2.mt-5 4.3 Sistemas de reserva
    .row
      .col-lg-5
        p.mt-3 Existen diversas modalidades de los sistemas de reservas, conocidos generalmente como CRS (Computer Reservation Systems) y los sistemas de distribución global, conocidos generalmente como GDS (Global Distribution Systems). 
        br
        p Se trata de 
          b sistemas basados en la informática y en la interconexión y registro de datos que permiten la realización de reservas desde los diferentes puntos de venta. 
          b-none Su grado de implantación en las reservas hoteleras no es tan amplio como en el relativo a las reservas aéreas, donde han encontrado su mayor representación.
        br
        p Los sistemas de distribución  global 
          b ofrecen una extensa selección de productos de viaje, incluyendo líneas aéreas, hoteles, trenes, cruceros, seguros de viajes, alquiler de coches, tours, arrendadoras de autos, agencias de viajes, 
          b-none entre otros.
      .col-lg-7
        img.img-col(src="@/assets/curso/tema-4/svg/img1.svg")
    p.mt-5 Los principales son:
    #carouselExampleIndicators.carousel.slide.mt-5(data-bs-ride='carousel')
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
      .carousel-inner
        .carousel-item.active
          figure 
            .row
              .col-lg-3
                img.img-box(src="@/assets/curso/tema-4/svg/img2.svg")
              .col-lg-9
                h3 SABRE (The Sabre Group)
                p Proveedor de soluciones tecnológicas, proveedor de soluciones tecnológicas de información para la industria del transporte y los viajes. Implantado sobre todo en Estados Unidos.
        .carousel-item
          figure
            .row
              .col-lg-3
                img.img-box.my-auto(src="@/assets/curso/tema-4/svg/img3.svg")
              .col-lg-9
                h3 APOLLO
                p Principal impulsor del sistema Galileo en América y ubicado principalmente en Estados Unidos.
        .carousel-item
          figure
            .row
              .col-lg-3
                img.img-box(src="@/assets/curso/tema-4/svg/img4.svg")
              .col-lg-9
                h3 AMADEUS
                p Un GDS que proporciona herramientas de distribución, ventas y mercadotecnia a los profesionales de los viajes en todo el mundo. Es una compañía establecida en Madrid, España, propiedad de Iberia, Lufthansa, Air France, Continental Airlines.  En España la compañía es SAVIA.
        .carousel-item
          figure
            .row
              .col-lg-3
                img.img-box(src="@/assets/curso/tema-4/svg/img5.svg")
              .col-lg-9
                h3 WORLDSPAN
                p GDS que proporciona comunicación y distribución electrónica de información a más de 500 proveedores líderes mundiales en viajes. Sus dueños son Delta Air Lines, Northwets Airline, Transworld  Airlines, se ubica en Estados Unidos.
      div.carousel-buttons    
        button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
          span.carousel-control-prev-icon(aria-hidden='true')
      div.carousel-buttons    
        button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
          span.carousel-control-next-icon(aria-hidden='true')
    p Los GDS, permiten llevar una buena gestión de reservas y ofrecen la posibilidad de:
    ul
      li.ml-5 Realizar reservas individuales o grupales según tarifa disponible y tipo de habitación.
      li Transferir los datos del historial del cliente a la reserva.
      li Guardar mensajes para clientes que aún no han llegado.
      li Modificar reservas, reflejando los motivos, fechas del cambio y quien fue la persona que lo solicito.
      li Agrupar reservas ya realizadas.
      li Asignación automática de habitaciones.
      li Confirmación automática de reservas en lista de espera.
      li Lista de habitaciones disponibles.
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema4',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
