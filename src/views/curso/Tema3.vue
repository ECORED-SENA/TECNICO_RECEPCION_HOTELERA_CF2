<template lang="pug">
.curso-main-container
  BannerInterno(titulo="3. Reservas")
  .container.tarjeta--blanca.p-4.p-md-5.mb-5
    .imagen.mt-5
      img(src="@/assets/curso/tema-3/jpg/img1.jpg")
    p.mt-3 La empresa hotelera capta sus ingresos en los productos y servicios que genera para vender, la venta de habitaciones es la razón de ser del hotel, así como también  el área que  mayores ganancias genera.
    br
    p Una reservación 
      b es un acuerdo, verbal o escrito, que se establece entre el hotel y una persona natural o jurídica, 
      b-none donde el primero se compromete a realizar una prestación de alojamiento y demás servicios en una fecha preestablecida y por un periodo determinado; y el segundo, a recibir la prestación del servicio en la fecha reservada y  a realizar el pago del servicio, con consecuencia de penalización por cancelación.
    #t_3_1.h2.mt-5 3.1 Objetivo de la gestión de reservas
    .video.mb-5.mt-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/sBDvcLGFD3Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row
      .col-lg-5
        p.p-enfasis La gestión de reservas tiene como objetivo 
          b llevar un control permanente y actualizado de la ocupación del establecimiento hotelero, 
          b-none teniendo en cuenta las entradas del día, habitaciones ocupadas, de salidas, cancelaciones de reservas, clientes no show, entre otros.
      .col-lg-7
        div.div-box-general-2
          p Requiere de acciones que permitan promover la venta  de habitaciones y conocer el comportamiento de la ocupación en el transcurso de un año, mediante  la elaboración de gráficas de ocupación mensual, 
            b con el fin de implementar las estrategias de ventas en determinados periodos, 
            b-none para lo cual es necesario  el manejo de un sistema de reservaciones y el conocimiento del servicio, la disponibilidad, tarifas, paquetes y promociones; también depende de la habilidad del agente de reservas, para lograr atraer al cliente y efectuar la venta. 
    #t_3_2.h2.mt-5 3.2 Componentes
    p Un PNR (Passenger Name Record) contiene los detalles de la reserva del pasajero o huésped, en relación con el viaje o permanencia en el hotel y 
      b sus componentes se denominan elementos, estos pueden ser obligatorios, OMC y tarifa.
    div.rp2.mt-5 
      h4 Elementos obligatorios:
      img.img-info(src="@/assets/curso/tema-3/svg/img1.svg")
    div.rp2.mt-3 
      h4 Elementos MCO:
      img.img-info(src="@/assets/curso/tema-3/svg/img2.svg")
    div.rp2.mt-3 
      h4 Elemento tarifa:
      img.img-info(src="@/assets/curso/tema-3/svg/img3.svg")
    p.mt-5 Cuando se crea una reserva se pueden ingresar los elementos en cualquier orden, todos los elementos son numerados consecutivamente.
    #t_3_3.h2 3.3  Tipos
    p Se pueden distinguir:
    div.i-general.mt-5 
      div.div-gradient 
          div.c-card
            img.img-cards.mt-1(src="@/assets/curso/tema-3/svg/img4.svg")
            h3.h1i.mt-3 Reservas individuales
            p.mt-3 Aquellas realizadas de forma independiente para un número de personas inferior a 10. Puede proceder de un cliente particular, o haber sido realizadas por una agencia de viajes o una empresa.
      div.div-gradient 
          div.c-card
            img.img-cards.mt-1(src="@/assets/curso/tema-3/svg/img5.svg")
            h3.h1i.mt-3 Reservas para grupos
            p.mt-3 Se considera grupo a partir de 10 personas que viajan juntas o tienen un nexo común y se alojan en el hotel en el mismo período de tiempo. Se reserva con antelación mediante un contrato entre el hotel y la agencia o empresa, o entre el hotel y el responsable del grupo, por el número de habitaciones bloqueadas.
      div.div-gradient 
          div.c-card
            img.img-cards.mt-1(src="@/assets/curso/tema-3/svg/img6.svg")
            h3.h1i.mt-3 Confirmadas o no garantizadas
            p.mt-3 Son reservaciones provenientes de particulares o intermediarios, en las cuales no media ninguna garantía. El hotel fija una hora límite de chek-in que usualmente son las 18:00 horas, después de la cual, si los huéspedes no se presentan, la reservación se da de baja.
      div.div-gradient 
          div.c-card
            img.img-cards.mt-1(src="@/assets/curso/tema-3/svg/img7.svg")
            h3.h1i.mt-3 Garantizadas
            p.mt-3 Una reservación garantizada significa que el hotel, si los huéspedes no se presentan en la fecha estipulada, le cobrará el importe correspondiente a una noche de alojamiento. Para garantizar la reserva de una habitación, se tiene que consignar el 50% del valor total de la estadía. Además, se puede garantizar a través de tarjetas de crédito, o cartas de las empresas.
      div.div-gradient 
          div.c-card
            img.img-cards.mt-1(src="@/assets/curso/tema-3/svg/img8.svg")
            h3.h1i.mt-3 Tentativas
            p.mt-3 Cuando el cliente hace una reserva de prueba en temporada alta, el hotel le hace un seguimiento continuo, porque él debe ver la disponibilidad de habitaciones para reservar definitivamente o no.
    #t_3_4.h2 3.4 Estados
    p.mt-3 Este aspecto presenta tres opciones diferentes:
    div.rp2.mt-2 
          img.img-rp2(src="@/assets/curso/tema-1/svg/img14.svg")
          p.p2 Si la reserva se confirma, se marca la casilla correspondiente (OK).
    div.rp2.mt-2 
          img.img-rp2(src="@/assets/curso/tema-1/svg/img14.svg")
          p.p2 En el caso que la reserva no pueda confirmarse o no se ha garantizado mediante algo que el hotelero puede demandar, se puede solicitar la garantía y mientras se hace efectiva, la reserva queda bajo petición o solicitada (RQ).
    div.rp2.mt-2 
          img.img-rp2(src="@/assets/curso/tema-1/svg/img14.svg")
          p.p2 Por último, puede darse el caso de que no exista disponibilidad en el momento de la reserva, pero el cliente prefiera esperar hasta que se produzca una cancelación  o alguna habitación sea liberada, se marca como lista de espera (WL).
    #t_3_5.h2.mt-5 3.5 Convenciones de estados de habitaciones
    p.mt-3.p-enfasis En los hoteles el estado de habitaciones se guía por códigos o abreviaturas  que 
      b facilitan la elaboración de reportes de estado de habitaciones, 
      b-none algunos hoteles utilizan convenciones en inglés y otros en español:
    div.div-tables
      img.table-1(src="@/assets/curso/tema-3/svg/img15.svg")
      img.table-2(src="@/assets/curso/tema-3/svg/img16.svg")
    .imagen.mt-5
      img(src="@/assets/curso/tema-3/jpg/img2.jpg")

    #t_3_6.h2.mt-5 3.6 Procedimiento para reservar
    .row
      .col-lg-6
        p.p-enfasis El proceso de reserva es aquel por medio del cual, un huésped 
          b solicita que se le garantice una habitación 
          b-none para determinada fecha y hora, considerando las condiciones y necesidades,
        p expresada por el huésped, este proceso es muy completo porque se obtiene la información de  los datos del huésped: nombre, contacto, tipo de habitación, fecha y hora de  llegada, tiempo de permanencia, fecha de salida, entre otros.
        br
        p Las reservas llevan asociados una serie de procedimientos en los que 
          b se basa su recepción, aceptación y confirmación y en algunos casos su modificación o cancelación.
        br
        p El procedimiento para atender las reservaciones que lleguen por los diferentes medios de comunicación: plataformas de reservas, reservas para grupos, agencias de viajes, manejar dinero proveniente de depósitos para garantizar las reservas; teniendo en cuenta los siguientes ítems:
      .col-lg-6
        div.div-box2
          img.img-box(src="@/assets/curso/tema-3/svg/img9.svg")
          h6 Manejo de solicitudes de reserva.
        div.div-box2.mt-3
          img.img-box(src="@/assets/curso/tema-3/svg/img10.svg")
          h6 Control de disponibilidad de habitaciones por medio del rack.
        div.div-box2.mt-3
          img.img-box(src="@/assets/curso/tema-3/svg/img11.svg")
          h6 Determinar la disponibilidad de fecha, hora y tarifas.
        div.div-box2.mt-3
          img.img-box(src="@/assets/curso/tema-3/svg/img12.svg")
          h6 Toma de reserva manual o mediante software.
        div.div-box2.mt-3
          img.img-box(src="@/assets/curso/tema-3/svg/img13.svg")
          h6 Archivar y documentar la reserva.
    #t_3_7.h2.mt-5 3.7 Control de disponibilidad
    p Consiste en comprobar una vez que se recibe una solicitud de reserva, las posibilidades para garantizar su aceptación. Este control se realiza mediante la consulta de los medios que se disponga para ello, manualmente se realizará a partir del  planning de reservas.
    br
    p El planning se define como la representación gráfica del estado de reserva y disponibilidad del establecimiento hotelero, por tanto, debe facilitar la cantidad de habitaciones libres y ocupadas para cada tipo y  fechas específicas. Así mismo, debe reflejar información acerca del estado de los cupos y habitaciones bloqueadas.
    div.i-general-1.mt-5 
      div.div-gradient-1 
          div.c-card-1
            img.img-cards.mt-1(src="@/assets/curso/tema-3/svg/img14.svg")
            h3.h1i.mt-3 El planning nominal.
            p.mt-3 Es el más indicado para pequeños establecimientos, en los que resulta posible realizar la reserva y asignación de la habitación en un mismo momento. Es  una planilla en la que se incorporan las fechas del mes y la numeración de las habitaciones, puede ir acompañada de información relativa a sus características, los servicios  y  la ubicación.
      div.div-gradient-2 
          div.c-card-1
            img.img-cards.mt-1(src="@/assets/curso/tema-3/svg/img14.svg")
            h3.h1i.mt-3 El planning numérico.
            p.mt-3 Su utilización es válida para establecimientos de cualquier tamaño, pero está especialmente pensado para hoteles con mucho movimiento.
      div.div-gradient-3 
          div.c-card-1
            img.img-cards.mt-1(src="@/assets/curso/tema-3/svg/img14.svg")
            h3.h1i.mt-3 El planning forecast.
            p.mt-3 Se utiliza en hoteles de gran capacidad y notable movimiento de entradas y salidas, generalmente motivado por una estancia media muy baja, de escaso uso en la actualidad, se configura para impresos mensuales.
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
