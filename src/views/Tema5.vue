<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Tarifas

    figure.mb-5
      img(src='@/assets/curso/img29.jpg', alt='Texto que describa la imagen')
    p.mb-5 Los sistemas de reservas contienen y describen las convenciones o códigos utilizados para solicitar los diferentes despliegues de disponibilidad y solicitar información sobre las reservas hechas con anterioridad, confirmadas y canceladas. Este sistema de codificación específicamente permite identificar áreas, medios de transporte, estatus de disponibilidad, tipos de habitación, tipos de camas, tipos de tarifas, etc.
      br
      br
      | Una de las características de los códigos de estatus de disponibilidad que muestra el sistema, es la respuesta a una solicitud de disponibilidad de habitaciones, tarifas y servicios hoteleros.
    #t_5_1.titulo-segundo
      h4 5.1. Tarifas Hoteleras
    p.mb-5 El surgimiento de nuevos canales de distribución trajo consigo una modificación de las tarifas que manejan los hoteles. Tan especializado se ha vuelto el tema, que se ha creado una nueva disciplina cuya función es solo la de gestionar los ingresos del hotel, hablamos del REVENUE MANAGEMENT.
      br
      br
      | Gracias a ello, el manejo de las tarifas hoy se realiza de forma dinámica (Dynamic Pricing). Los tiempos donde se tenía una tarifa de temporada alta, media y baja han pasado ya, otorgando a este apartado un manejo especial y la aplicación de diferentes tipos de tarifas, como son:
    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span 1
        p
          b Tarifa Rack:
          br
          | Es la tarifa oficial que cobra el hotel, a la cual no se aplica ningún descuento. Sirve de referencia para el manejo de tarifas.
      li 
        .lista-ol--cuadro__vineta
          span 2
        p
          b Tarifa Neta o de Piso:
          br
          | Esta es la tarifa que se asigna a intermediarios como agencias de viaje, bancos de camas y plataformas de marketing, sobre la cual ellos pueden generar su utilidad o Mark Up.
      li 
        .lista-ol--cuadro__vineta
          span 3
        p
          b Tarifa Confirmada:
          br
          | Es la tarifa que se le informa al cliente al momento de la reserva. Si al llegar el huésped no hay disponible una habitación acorde a la tarifa confirmada, se suele dar otra de mejor categoría por el mismo precio, lo que significa hacer un Upgrade.
      li 
        .lista-ol--cuadro__vineta
          span 4
        p
          b Tarifa Negociada:
          br
          | Esta tiene un descuento sobre la tarifa Rack, y unas condiciones en su otorgamiento. Por lo general se da solo en negociaciones con empresas, agencias y asociaciones, entre otras, con base en una producción mínima de noches por mes.
      li 
        .lista-ol--cuadro__vineta
          span 5
        p
          b Tarifa Complimentary:
          br
          | Son las tarifas que otorgan a determinadas entidades o personas que representan algún interés para el hotel. Por ejemplo: otros hoteles, asociaciones, conglomerados con condiciones delimitadas, empleados del hotel, amigos y familiares, etc.
      li 
        .lista-ol--cuadro__vineta
          span 6
        p
          b Tarifas Promocionales:
          br
          | Son descuentos, que se aplican para fines de promoción del hotel, siguiendo unas políticas y restricciones, Ejemplo: (Tarifas No reembolsables, Menores de 12 años no pagan, Pague 3 noches y hospédate 4).
      li 
        .lista-ol--cuadro__vineta
          span 7
        p
          b Tarifa BAR:
          br
          | Con el aumento de canales de distribución, hubo un momento en que el hotelero perdió el control sobre su precio, era usual que llegaran clientes al hotel que habían encontrado una tarifa inferior a través de un intermediario, que directamente con el hotel. Para dar solución a esta problemática y fortalecer la venta directa y aumentar la transparencia de las tarifas los hoteleros comenzaron a publicar en sus webs la BAR (Best Available Rate) por su acrónimo en inglés. La mejor tarifa disponible garantiza que no se va a encontrar una tarifa inferior en ningún canal de distribución.
          br
          | El manejo de este tipo de tarifas no tiene que ver sólo con el precio, sino con el valor de la tarifa.
      li 
        .lista-ol--cuadro__vineta
          span 8
        p
          b Tarifa Grupo o Evento:
          br
          | Estas tarifas se crean con base en la disponibilidad y las condiciones de mercado del momento en que se pide la cotización. Y aplican para grupos o eventos especiales, por ejemplo, Ferias, Conciertos, Congresos.
      li 
        .lista-ol--cuadro__vineta
          span 9
        p
          b Tarifa Larga Estadía:
          br
          | Aplica para un número mínimo de noches al mes, incluso con alguna frecuencia hay personas que deciden vivir en los hoteles, por las ventajas que ello les proporciona y se catalogan como huéspedes permanentes.
      li 
        .lista-ol--cuadro__vineta
          span 10
        p
          b Paquetes o Planes:
          br
          | Los paquetes son una forma de comercializar productos hoteleros, para brindar a los clientes más servicios, por precios más atractivos. Se puede empaquetar con productos propios o de terceros. Ejemplo: Plan Noche de bodas, Paquete con Alimentación y tours incluidos.
    .tabla-a.color-acento-botones.mb-5
      .color-acento-contenido-3.text-white.p-2.text-center
        h4 ESTRUCTURA TARIFAS PUBLICAS HOTEL EJEMPLO
        h5 Tarifas en pesos Colombianos (COP)
      table.text-center
        thead
          tr
            th.color-primario-claro-2 
              b Encabezado 1
        tbody
          tr
            td $ 299.000
            td 
            td.color-primario-claro-2 
              b ESTANDAR
            td.color-primario-claro-2 
              b DELUXE
            td.color-primario-claro-2 
              b JUNIOR SUITE
            td.color-primario-claro-2 
              b SUITE
          tr
            td.color-primario-claro-2
              .h5 Personal Adicional
            td.color-primario-claro Variación por tipo habitación
            td.color-primario-claro $ 0
            td.color-primario-claro $ 30.000
            td.color-primario-claro $ 50.000
            td.color-primario-claro $ 100.000
          tr
            td.color-gris $30.000
            td.color-gris Nivel
            td.color-gris 2 Pax
            td.color-gris 2 Pax
            td.color-gris 2 Pax
            td.color-gris 2 Pax
          tr.no-border
            td Rack Rate 100%
            td Rack
            td $299.000
            td $329.000
            td $349.000
            td $399.000
          tr
            td.color-gris High Season (71% - 99%)
            td.color-gris A
            td.color-gris $279.000
            td.color-gris $309.000
            td.color-gris $329.000
            td.color-gris $379.000
          tr.no-border
            td Mid Season (31% -70%)
            td B
            td $259.000
            td $289.000
            td $309.000
            td $359.000
          tr
            td.color-gris Low Season (0% -30%)
            td.color-gris C
            td.color-gris $239.000
            td.color-gris $269.000
            td.color-gris $289.000
            td.color-gris $339.000
      p.text-center.fst-italic.my-4
        b La sugerencia es tener hasta 12 niveles tarifarios (Con base en el movimiento y mercado del hotel)
      table.text-center
        tbody
          tr
            td
              b Corporativo y Planes
            td A
            td $169.000
            td $199.000
            td $229.000
            td $259.000
          tr
            td.color-gris 
              b Corporativo y Planes Long Stay
            td.color-gris B
            td.color-gris $149.000
            td.color-gris $179.000
            td.color-gris $209.000
            td.color-gris $239.000
      .h5.text-center.my-4 Promociones y Tarifas Descontadas
      table.text-center
        tbody
          tr.mb-5 
            td.color-gris 
              b Valor Base de BAR para calcular los descuentos
            td.color-gris B
            td.color-gris $ 259.000
            td.color-gris $ 289.000
            td.color-gris $ 309.000
            td.color-gris $ 359.000
          br
          tr.mb-5 
            td.color-gris 
              b No Reembolsable
            td.color-gris Descuento
            td.color-gris ESTANDAR
            td.color-gris DELUXE
            td.color-gris JUNIOR SUITE
            td.color-gris SUITE
          tr.no-border
            td de 0 a 29 dias
            td 35%
            td $ 168.350
            td $ 187.850
            td $ 200.850
            td $ 233.350
          tr.mb-5 
            td.color-gris 
              b Promocion Compra Anticipada +30
            td.color-gris Descuento
            td.color-gris ESTANDAR
            td.color-gris DELUXE
            td.color-gris JUNIOR SUITE
            td.color-gris SUITE
          tr.no-border
            td mas (+) de 30 dias anticipacion
            td 25%
            td $ 194.250
            td $ 216.750
            td $ 231.750
            td $ 269.250
          tr.mb-5 
            td.color-gris 
              b Promoción Long Stay 4+
            td.color-gris Descuento
            td.color-gris ESTANDAR
            td.color-gris DELUXE
            td.color-gris JUNIOR SUITE
            td.color-gris SUITE
          tr.no-border
            td Mas de 5 dias consecutivos
            td 40%
            td $ 155.400
            td $ 173.400
            td $ 185.400
            td $ 215.400
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({}),
}
</script>

<style lang="sass" scoped></style>
