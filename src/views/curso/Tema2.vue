<template lang="pug">
.curso-main-container
  BannerInterno(titulo="2. Portafolio de servicios")
  .container.tarjeta--blanca.p-4.p-md-5.mb-5
    p El portafolio de servicios es un documento preparado por una empresa, organización o individuo en el que se describen los servicios que ofrece, 
      b detalla los límites y ofrecimientos del proveedor 
      b-none para todos los clientes y áreas de mercado a los que sirve.
    br
    p Se trata de una lista detallada de los servicios que ofrece la empresa, 
      b su función es informar a los posibles clientes sobre las ventajas y beneficios de contratar 
      b-none a la empresa.
    br
    p Los portafolios de servicios funcionan como tarjetas de presentación para dar a conocer la empresa, 
      b pueden ser documentos físicos o digitales.
    
    .video.mb-5.mt-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/mkIdPKBfpXc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p El portafolio de servicios incluye diversos apartados, cada uno de estos suministra información sobre un aspecto de la empresa como nombre, años de trayectoria, socios, objetivos, misión y visión, proveedores, clientes, información de contacto, entre otros (Carvajal, 2016).
    
    #t_2_1.h2.mt-5 2.1 Estructura
    .row
      .col-lg-5
        p.p-col Una vez establecida la diferencia entre las categorías y los servicios que se podrían incluir en cada una de ellas, 
          b se hace mención al componente estratégico del portafolio de servicios de la organización, 
          b-none el cual deberá contar con una adecuada categorización de los servicios, pues el fin primordial del portafolio de servicios consiste en identificar el valor brindado por cada uno de los servicios y si su aporte al negocio genera un valor agregado, satisfacción al usuario o aumento en las ganancias percibidas.
        br
        p.p-col Esta fase de categorización deberá incluir un análisis de cada servicio identificado, 
            b indicando el componente de ajuste al portafolio de servicios, 
            b-none así como la recomendación de la categoría del servicio (Castro, 2018).
      .col-lg-7
        img.img-col(src="@/assets/curso/tema-2/svg/img1.svg")
    p.mt-3   Finalmente, se elaborará el Portafolio de servicios con al menos 10 servicios identificados, priorizados y categorizados respectivamente, 
      b en esta etapa se incluirá el nivel en detalle para cada servicio establecido, 
      b-none teniendo en cuenta aspectos preliminares a desarrollar para cada servicio en el portafolio:
    div.div-box-general-2
      div.div-box
        img.img-box(src="@/assets/curso/tema-2/svg/img2.svg")
        h6.text-center.mt-3 Descripción del servicio.
      div.div-box
        img.img-box(src="@/assets/curso/tema-2/svg/img3.svg")
        h6.text-center.mt-3 Alcance del servicio.
      div.div-box
        img.img-box(src="@/assets/curso/tema-2/svg/img4.svg")
        h6.text-center.mt-3 Beneficios percibidos por el servicio.
      div.div-box
        img.img-box(src="@/assets/curso/tema-2/svg/img5.svg")
        h6.text-center.mt-3 Impacto del uso del servicio
      div.div-box
        img.img-box(src="@/assets/curso/tema-2/svg/img6.svg")
        h6.text-center.mt-3 Procedimiento para la utilización del servicio.
      div.div-box
        img.img-box(src="@/assets/curso/tema-2/svg/img7.svg")
        h6.text-center.mt-3 Vinculación con otros servicios.

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
