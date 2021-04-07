<template lang="pug">
.curso-main-container
  BannerInterno(titulo="5. Tarifas")
  .container.tarjeta--blanca.p-4.p-md-5.mb-5
    .imagen.mt-5
      img(src="@/assets/curso/tema-5/jpg/img1.jpg")
      p.mt-5 Los hoteles manejan diferentes tarifas, para diversos tipos de clientes. El mercado turístico como cualquier otro mercado se rige por el libre juego de la oferta y la demanda, en ese sentido cualquier hotel u organización puede ofrecer sus servicios bajo estos principios; así mismo los conceptos de temporadas  alta y baja demanda, si se trata de baja demanda los precios tenderán a la reducción y si es de alta demanda obligará al incremento.
    .row
      .col-lg-5
        div.div-box-general-3
          p.p-enfasis Generalmente los hoteles aplican las tarifas ya establecidas por ventas a las reservaciones que se generen por parte de compañías, agencias de viajes, líneas aéreas o dependencias gubernamentales (Fernández, 2011).
      .col-lg-7
        img.img-box(src="@/assets/curso/tema-5/jpg/img2.jpg")
        p.mt-2 Muchos elementos influyen en la determinación de tarifas de una habitación.  Categoría del hotel. Tipo de hotel. Temporada. Día de la semana. Tiempo de estancia. Ubicación del hotel. Ubicación dentro del hotel. Tamaño de la habitación. Plan de alimentación. Tarifas promocionales. Tipo de cambio y si el cliente hace parte de un grupo.
    
    #t_5_1.h2 5.1 Tipos
    ul
      li
        h5 Tarifa oficial o Rack (Rack Rate)
        p Es la tarifa minorista oficial  pública y se aplica en épocas de alta ocupación.
      li
        h5 Tarifa BAR (Best Available Rate)
        p Mejor tarifa disponible del día, suelen ser precios flexibles, basados en descuentos sobre la tarifa rack, según las condiciones del mercado.

      li
        h5 Tarifa Promocional
        p Cualquier tarifa especial o paquete que se ofrece por tiempo limitado y en ocasiones anclada a un evento especial para incrementar la venta de habitaciones.

      li
        h5 Tarifa de agencias para reservas individuales
        p Puede ser la tarifa rack o BAR neta, es decir, con la comisión de la agencia ya descontada, se pueden dar los precios brutos, sin descontar la comisión.
      li
        h5 Tarifa Corporativa
        p Tarifa especial acordada para viajeros de negocios y  empresas, cuyo precio está en función del número de habitaciones anuales, es confidencial sujeta a las condiciones de un contrato.
      li
        h5 Tarifa Preferencial
        p Es una corporativa con precios muy reducidos para empresas que generan gran volumen de negocio para el hotel, son revisadas anualmente y están sujetas al nivel de facturación acordado.
      li
        h5 Tarifa FIT (Foreign International Travel)
        p Es una tarifa para agencias mayoristas internacionales, a precios muy reducidos, y que suele incluir varios servicios (media pensión o pensión completa).
      li
        h5 Tarifa Grupal
        p son acordadas con las agencias mayoristas y minoristas, en función de la facturación de la agencia y de las condiciones del grupo.
      li
        h5 Tarifa de compra anticipada
        p Especial para pasajeros que puedan cambiar la flexibilidad de su viaje por una tarifa con descuento adicional.  
      li
        h5 Tarifa de Día
        p Especial para viajeros que solo ocuparan la habitación durante el día.
      li
        h5 Tarifa profesional
        p Solo se otorga a ciertos profesionales como personal de aerolíneas, militares, agentes de viajes, diplomáticos, clérigos.
      li
        h5 Tarifa de la tercera edad
        p Descuento que se ofrece al adulto mayor, cada hotel maneja su política en cuanto a la edad (más de 55, 60 y 65 años).
      li
        h5 Tarifa de fin de semana
        p Diferente a las tarifas normales entre semana, puede ser menor o más alta y varia de un hotel a otro.
      li
        h5 Paquetes de Estancia
        p Son tarifas que engloban un conjunto de servicios con un único precio final para ser  vendidos, igual que la tarifa oficial, durante todo un año y con diferente precio por temporada.
      li
        h5 Ofertas y Promociones
        p Se crean para incentivar la venta en momentos de baja ocupación, son similares a los paquetes, pero con una vigencia más corta y con precios más bajos que los establecidos en la tarifa oficial.
      li
        h5 Gratuidad
        p Alojamiento gratuito para clientes, clientes potenciales, clientes descontentos. Normalmente es decisión del director del establecimiento.
    #t_5_2.h2.mt-5 5.2 Planes
    p.mt- Generalmente, el precio que pagamos por el hospedaje en un establecimiento de alojamiento incluye un conjunto de servicios dentro del “plan de alojamiento” que hemos contratado, entre estos se encuentra los servicios de alimentación, entretenimiento y los básicos incluidos en el alojamiento como el descanso y la limpieza.
    div.rp2.mt-2 
          img.img-rp3(src="@/assets/curso/tema-5/svg/img1.svg")
          div.text.my-auto
            h5.p2 Plan Europeo
            p.p2 Tarifa de hotel que incluye la habitación sin ningún alimento.
    div.rp2.mt-2 
          img.img-rp3(src="@/assets/curso/tema-5/svg/img2.svg")
          div.text.my-auto
            h5.p2 Plan Continental.
            p.p2 Incluye el servicio de habitación además de un desayuno básico (pan tostado, mantequilla, mermelada y jugo de naranja, café o té). 
            br
            p.p2 Muchos hoteles en la actualidad han cambiado este plan incluyendo desayunos más completos o incluyendo un servicio de buffet para la primera comida del día
    div.rp2.mt-2 
          img.img-rp3(src="@/assets/curso/tema-5/svg/img3.svg")
          div.text.my-auto
            h5.p2 Plan Americano.
            p.p2 Tarifa de hotel que incluye el alojamiento y  tres comidas al día (desayuno, almuerzo y cena). Se conoce como pensión completa o alojamiento completo. 
    div.rp2.mt-2 
          img.img-rp3(src="@/assets/curso/tema-5/svg/img4.svg")
          div.text.my-auto
            h5.p2 Plan Americano Modificado.
            p.p2 Incluye la habitación, el desayuno y una de las comidas (almuerzo o cena), queda a elección del huésped.
    div.rp2.mt-2 
          img.img-rp3(src="@/assets/curso/tema-5/svg/img5.svg")
          div.text.my-auto
            h5.p2 Plan Todo Incluido.
            p.p2 Es uno de los planes más populares, pues por un solo precio incluye las tres comidas del día, snacks, bocadillos y bebidas. Es común en centros vacacionales, resorts y cadenas hoteleras. También conocido como All Inclusive o plan Absolute.
    div.rp2.mt-2 
          img.img-rp3(src="@/assets/curso/tema-5/svg/img6.svg")
          div.text.my-auto
            h5.p2 Bed & Breakfast (B&B).
            p.p2 Ofrece una habitación con desayuno completo (cama y desayuno). 
    
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
