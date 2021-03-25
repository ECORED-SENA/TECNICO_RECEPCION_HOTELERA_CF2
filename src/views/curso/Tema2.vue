<template lang="pug">
.curso-main-container
  BannerInterno(titulo="Tema 2 Lorem ipsum dolor sit amet, consectetur")
  .container.tarjeta--blanca.p-4.p-md-5.mb-5
    
    #t_2_1.pb-5.h2 tema 2.1
    .pb-5(v-for="item of 15")

    #t_2_2.pb-5.h2 tema 2.2
    .pb-5(v-for="item of 15")
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
