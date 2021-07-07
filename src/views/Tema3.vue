<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Reservas

    figure.mb-5
      img(src='@/assets/curso/img15.jpg', alt='Texto que describa la imagen')

    p.mb-5 La empresa hotelera capta sus ingresos en los productos y servicios que genera para vender, la venta de habitaciones es la razón de ser del hotel, así como también el área que mayores ganancias genera.
      br
      br
      | Una reservación es un acuerdo, verbal o escrito, que se establece entre el hotel y una persona natural o jurídica, donde el primero se compromete a realizar una prestación de alojamiento y demás servicios en una fecha preestablecida y por un periodo determinado; y el segundo, a recibir la prestación del servicio en la fecha reservada y a realizar el pago del servicio, con consecuencia de penalización por cancelación.

    h5 Objetivo de la gestión de reservas

    .row.mb-5
      .col-lg-7
        p.mb-5 La gestión de reservas tiene como objetivo llevar un control permanente y actualizado de la ocupación del establecimiento hotelero, teniendo en cuenta las entradas del día, habitaciones ocupadas, las salidas, cancelaciones de reservas, clientes no show, entre otros.
          br
          br
          | Requiere de acciones que permitan promover la venta de habitaciones y conocer el comportamiento de la ocupación en el transcurso de un año, mediante la elaboración de gráficas de ocupación mensual, con el fin de implementar las estrategias de ventas en determinados periodos, para lo cual es necesario el manejo de un sistema de reservaciones y el conocimiento del servicio, la disponibilidad, tarifas, paquetes y promociones; también depende de la habilidad del agente de reservas, para lograr atraer al cliente y efectuar la venta.
      .col-lg-5
        figure.mb-3
          img(
            src='@/assets/curso/img16.jpg',
            alt='Texto que describa la imagen'
          )

    h5 Código de reserva

    .row
      .col-lg-7
        p.mb-5 Es un código alfanumérico, que asignan los diferentes sistemas de reservas (PMS), para lograr la identificación plena de la reserva y los detalles relativos a su estadía en el hotel (duración, tarifa, forma de pago). Los códigos de reserva son el identificador único de cada reserva, por eso, es pertinente que aprenda a identificarlos, ya que todos los prestadores turísticos (aerolíneas, rentas de autos, espectáculos, restaurantes y hoteles) usan sus propios códigos.
          br
          br
          | Estos códigos se generan al momento de ingresar los datos al sistema y procesar la reserva y se envían al huésped por correo electrónico.
      .col-lg-5
        figure.mb-3
          img(
            src='@/assets/curso/img17.jpg',
            alt='Texto que describa la imagen'
          )
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
