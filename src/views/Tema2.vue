<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Portafolio de servicios

    p.mb-5 Es un documento preparado por una empresa, organización o individuo en el que se describen los servicios que ofrece, detalla los límites y ofrecimientos del proveedor para todos los clientes y áreas de mercado a los que sirve.
      br
      br
      | Se trata de una lista detallada de los servicios que ofrece la empresa, su función es informar a los posibles clientes sobre las ventajas y beneficios de contratar a la empresa.
      br
      br
      | Los portafolios de servicios funcionan como tarjetas de presentación para dar a conocer la empresa, pueden ser documentos físicos o digitales.
      br
      br
      | El portafolio de servicios incluye diversos apartados, cada uno de estos suministra información sobre un aspecto de la empresa como nombre, años de trayectoria, socios, objetivos, misión y visión, proveedores, clientes, información de contacto, entre otros (Carvajal, 2016).
      br
      br
      | Le recomendamos analizar el video “Portafolio de servicios”, el cual resume las características principales de este portafolio. El enlace se encuentra en el material complementario.

    figure.mb-5
      .video
        iframe(
          width='560',
          height='315',
          src='https://www.youtube.com/embed/mkIdPKBfpXc',
          title='YouTube video player',
          frameborder='0',
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
          allowfullscreen
        ) 
      figcaption Definición del Portafolio

    .row.mb-5 
      .col-lg-7
        .h5 Estructura del Portafolio de Servicios
        p.mb-5 Una vez establecida la diferencia entre las categorías y los servicios que se podrían incluir en cada una de ellas, se hace mención al componente estratégico del portafolio de servicios de la organización, el cual deberá contar con una adecuada categorización de los servicios, pues el fin primordial del portafolio de servicios consiste en identificar el valor brindado por cada uno de los servicios y si su aporte al negocio genera un valor agregado, satisfacción al usuario o aumento en las ganancias percibidas.
          br
          br
          | Esta fase de categorización deberá incluir un análisis de cada servicio identificado, indicando el componente de ajuste al portafolio de servicios, así como la recomendación de la categoría del servicio (Castro, 2018).
          br
          br
          | Finalmente, se elaborará el Portafolio de servicios con al menos 10 servicios identificados, priorizados y categorizados respectivamente, en esta etapa se incluirá el nivel en detalle para cada servicio establecido, teniendo en cuenta aspectos preliminares a desarrollar para cada servicio en el portafolio.
      .col-lg-5
        figure.mb-3
          img(
            src='@/assets/curso/img8.svg',
            alt='Texto que describa la imagen'
          )

    .cuadros-iconos
      .cuadros.color-primario-claro.p-3
        figure.mb-3
          img.m-auto(
            src='@/assets/curso/img9.svg',
            alt='Texto que describa la imagen',
            style='width: 88px'
          )
        .text-center.px-3 
          p.mb-0
            b Descripción del servicio.
      .cuadros.color-acento-contenido-claro.p-3
        figure.mb-3
          img.m-auto(
            src='@/assets/curso/img10.svg',
            alt='Texto que describa la imagen',
            style='width: 88px'
          )
        .text-center.px-3 
          p.mb-0
            b Alcance del servicio.
      .cuadros.color-primario-claro.p-3
        figure.mb-3
          img.m-auto(
            src='@/assets/curso/img11.svg',
            alt='Texto que describa la imagen',
            style='width: 88px'
          )
        .text-center.px-3 
          p.mb-0
            b Beneficios percibidos por el servicio.
      .cuadros.color-acento-contenido-claro.p-3
        figure.mb-3
          img.m-auto(
            src='@/assets/curso/img12.svg',
            alt='Texto que describa la imagen',
            style='width: 88px'
          )
        .text-center.px-3 
          p.mb-0
            b Impacto del uso del servicio
      .cuadros.color-primario-claro.p-3
        figure.mb-3
          img.m-auto(
            src='@/assets/curso/img13.svg',
            alt='Texto que describa la imagen',
            style='width: 88px'
          )
        .text-center.px-3 
          p.mb-0
            b Procedimiento para la utilización del servicio.
      .cuadros.color-acento-contenido-claro.p-3
        figure.mb-3
          img.m-auto(
            src='@/assets/curso/img14.svg',
            alt='Texto que describa la imagen',
            style='width: 88px'
          )
        .text-center.px-3 
          p.mb-0
            b Vinculación con otros servicios.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
