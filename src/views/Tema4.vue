<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 4
      .h3 Área de Reservas
    figure.mb-5
      img(src='@/assets/curso/img18.jpg', alt='Texto que describa la imagen')
    p.mb-5 El área o departamento de reservas tiene en la gran mayoría de los casos el primer contacto con los clientes que en un futuro inmediato visitarán el hotel; manteniendo contacto permanente con los diferentes tipos de clientes: agencias de viajes, empresas y particulares.
      br
      br
      |Este departamento se encarga de administrar de manera eficiente la disponibilidad de habitaciones, procurando siempre venderlas de la forma más conveniente y rentable para       |el hotel.
      br      
      br      
      |Las reservas pueden ser telefónicas, directas, virtuales, por grupos y a través de sistemas de reservaciones o GDS.
    #t_4_1.titulo-segundo
      .h4 4.1. Funciones
    p.mb-5 El personal que trabaja en reservas debe saber vender los servicios que ofrece a los clientes y poseer los conocimientos necesarios que implica el proceso de reservaciones.
    SlyderB.mb-5(:datos="datosSlyder")
    p.mb-5 Hoy en día todos estos controles e informes se apoyan en la tecnología. Ya hay en el mercado opciones de PMS (Property Management System) sirven para manejar y controlar toda la operación del hotel.
      br
      br
      |Estos a su vez se conectan con los sistemas de distribución
    figure.mb-5
      img(src='@/assets/curso/img24.jpg', alt='Texto que describa la imagen')
    #t_4_2.titulo-segundo
      .h4 4.2. Cualidades del personal de reservas
    p.mb-5 Las cualidades que debe presentar el personal de reservas, son:
    .row
      .col-lg-6
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/img25.svg' alt='AvatarTop')
          .tarjeta.color-primario-claro.completa
            .p-4
              .h4 Presentación persona
              p Excelente presentación personal acorde a las normas de etiqueta y protocolo (aseo personal, portar adecuadamente el uniforme, buena postura).
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/img26.svg' alt='AvatarTop')
          .tarjeta.color-primario-claro.completa
            .p-4
              .h4 Comunicación verbal
              p Comunicación verbal, vocabulario sencillos, comprensibles y apropiados, hablar fluida y tranquilamente, evitando respuestas monosílabas.
      .col-lg-6
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/img27.svg' alt='AvatarTop')
          .tarjeta.color-primario-claro.completa
            .p-4
              .h4 Amabilidad
              p Amabilidad y cortesía, ser respetuoso de la necesidad de las personas, actuando con buena actitud y muy receptivo.
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/img28.svg' alt='AvatarTop')
          .tarjeta.color-primario-claro.completa
            .p-4
              .h4 Comunicación no verbal
              p Comunicación no verbal, cuidar movimientos corporales, su expresión facial, comunicación visual y táctil. Manejar la distancia proxémica con el huésped.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Amabilidad',
        texto:
          'Tiene como principal función la recepción y control de las solicitudes de espacio para la reserva de habitaciones, tanto de las agencias de viajes, como de otras empresas y público en general, además cumple con una importante labor en el proceso de venta de habitaciones, manteniendo actualizada la recepción, respecto a la situación ocupacional del hotel, con el objetivo de captar la mayor cantidad de clientes.<br><br> Es el primer contacto de los clientes con el hotel y debe proporcionar una imagen de amabilidad en el trato y eficiencia en la prestación de servicio.',
        imagen: require('@/assets/curso/img19.jpg'),
      },
      {
        titulo: 'Gestión eficiente',
        texto:
          'Gestión eficiente de la disponibilidad de habitaciones, revisando constantemente el nivel de ocupación y realizando previsiones adecuadas para evitar situaciones conflictivas tales como sobreocupación.',
        imagen: require('@/assets/curso/img20.jpg'),
      },

      {
        titulo: 'Resolver ágilmente',
        texto:
          'Gestión eficiente de la disponibilidad de habitaciones, revisando constantemente el nivel de ocupación y realizando previsiones adecuadas para evitar situaciones conflictivas tales como sobreocupación.<br> <br> Resolver ágilmente cualquier solicitud de información o alojamiento.',
        imagen: require('@/assets/curso/img21.jpg'),
      },
      {
        titulo: 'Gestión de Cupos',
        texto:
          'Toma de reservas individuales y de grupos.<br><br> Gestión de Cupos. <br><br> Elaboración y archivo de documentación (planning, hoja y libro de reservas). <br><br> Archiva toda la información por un período de tiempo determinado. <br><br> Informa a la recepción de cualquier cambio en la lista de llegadas previstas del día, después que esta haya sido emitida, siempre con el tiempo necesario para su tratamiento.',
        imagen: require('@/assets/curso/img22.jpg'),
      },
      {
        titulo: 'Recibe el rooming',
        texto:
          'Previsión de servicios y comunicación con los demás departamentos del hotel <br><br> Realiza reservas de habitaciones, se procede, atendiendo las peticiones de los clientes según sus preferencias y su histórico de estancias. <br><br> Recibe el rooming list que las agencias de viajes envían asegurándose que estos contengan la mayor cantidad de información posible y que ésta no varíe.',
        imagen: require('@/assets/curso/img23.jpg'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
