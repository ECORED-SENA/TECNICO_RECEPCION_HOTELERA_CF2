<template lang="pug">
.curso-main-container
  BannerInterno(titulo="1. Servicios Turísticos")
  .container.tarjeta--blanca.p-4.p-md-5.mb-5
    .imagen.mt-5
      img(src="@/assets/curso/tema-1/img1.svg")
    .row.mt-5
      .col-lg-6.col-md-12
        p.mt-5 Al hablar de servicios turísticos nos referimos a los bienes y servicios ofrecidos por las empresas del mercado turístico y que satisfacen las necesidades de los turistas en la organización de viajes y mediante el disfrute de estos; 
          b de esta forma el servicio turístico está directamente encargado de satisfacer la demanda turística 
          b-none de personas que se desplazan de un lugar a otro, con el fin de hacer actividades ajenas a su rutina (turísticas).
        br
        p El turismo se fundamenta en un sistema de relaciones entre el sujeto (turista) y el objeto (destino, prestadores, organización). Para el turista, el turismo es el conjunto de servicios que le son facilitados por los prestadores de servicios turísticos y para estos el turista es el destinatario de los servicios que ofrece.
      .col-lg-6.col-md-12
        .imagen.bt-5
          img(src="@/assets/curso/tema-1/img2.svg")

    #t_1_1.pb-5.h2 tema 1.1
      
    .pb-5(v-for="item of 15")
      

    #t_1_2.pb-5.h2 tema 1.2
    .pb-5(v-for="item of 15")
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
