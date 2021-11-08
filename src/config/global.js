export default {
  global: {
    componenteFormativo: 'Gestión de reservas hoteleras',
    descripcionCurso:
      '¡Bienvenido al componente formativo 2 Gestión de Reservas Hoteleras! Este componente ha sido diseñado para que usted conozca los servicios turísticos e interactúe dentro del sistema turístico, identificando los elementos que lo integran y la importancia que tienen en el desarrollo de la industria hotelera. Contiene temáticas que le proporcionarán los conocimientos necesarios para el desarrollo de habilidades, destrezas y capacidades en cuanto a la prestación de servicios turísticos, en el área de recepción y reservas de un hotel.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    // fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Servicios Turísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Sistema Turístico',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Producto turístico',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Características',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Tipos',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Portafolio de servicios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Reservas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Área de Reservas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Funciones',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Cualidades del personal de reservas',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Tarifas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tarifas Hoteleras',
            hash: 't_5_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Boullon, R. C. (2006). Planificación del Espacio Turístico. Ciudad de México: Editorial Trillas.',
      link:
        'http://prepacihuatlan.sems.udg.mx/sites/default/files/planificaciondelespacioturisticorobertoc.boullon.pdf',
    },
    {
      referencia: 'Fondo Nacional de Turismo. (6 de 4 de 2021). FONTUR.',
      link: 'https://fontur.com.co/es/glosario?q=es/glosario',
    },
    {
      referencia:
        'Instituto Distrital de Turismo. ANATO Asociación Colombiana de Agencias de Viajes y Turismo. (2007).',
      link: 'https://anato.org/',
    },
    {
      referencia:
        'Novas, N. C. (2006). Promoción y Venta de Servicios Turísticos (1a. Edición ed.). La Habana, Cuba: Ideas propias, Editorial Vigo.',
      link: 'https://issuu.com/ideaspropiaseditorial/docs/978-84-9839-101-5',
    },
    {
      referencia:
        'Pavón, C. R. (2012). Promoción y comercialización de productos y servicios turísticos locales. Málaga: IC Editorial.',
      link:
        'http://descargas.pntic.mec.es/mentor/visitas/promocion_comercializacion_productos_servicioslocales.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Agencias de Viajes',
      significado:
        'son las empresas comercializadoras, debidamente constituidas por personas naturales o jurídicas que se dediquen profesionalmente a vender planes turísticos (Fondo Nacional de Turismo -FONTUR, 2003)',
    },
    {
      termino: 'Calidad',
      significado:
        'es el resultado de un proceso que implica la satisfacción de todas las necesidades, exigencias y expectativas legítimas de los consumidores respecto de los productos y servicios, a un precio aceptable, de conformidad con las condiciones contractuales mutuamente aceptadas y con los factores subyacentes que determinan la calidad: seguridad, higiene, accesibilidad, transparencia, autenticidad y armonía de una actividad turística preocupada por su entorno humano y natural.',
    },
    {
      termino: 'Demanda turística',
      significado:
        'es el número de personas que viajan o desean viajar para utilizar instalaciones turísticas y servicios lejos de sus lugares de trabajo o residencia.',
    },
    {
      termino: 'Establecimiento de Alojamiento',
      significado:
        'el conjunto de bienes destinados por una persona natural o jurídica a prestar el servicio de alojamiento no permanente inferior a 30 días con o sin alimentación y servicios básicos y/o complementarios o accesorios de alojamiento, mediante contrato de hospedaje, el cual es un contrato de arrendamiento, de carácter comercial y de adhesión, que una empresa dedicada a ésta actividad celebra con el propósito principal de prestar alojamiento a otra persona denominada huésped, mediante el pago del precio respectivo día a día, por un plazo inferior a 30 días',
    },
    {
      termino: 'Guía de Turismo',
      significado:
        'se considera guía de turismo a la persona natural que presta servicios profesionales en el área de guionaje o guianza turística, cuyas funciones hacia el turista, viajero o pasajero son las de orientar, conducir, instruir y asistir durante la ejecución del servicio contratado, que esté inscrita en el Registro Nacional de Turismo, previa obtención de la correspondiente tarjeta profesional como guía de turismo, otorgada por la entidad u organismo que el gobierno designe.',
    },
    {
      termino: 'Oferta turística',
      significado:
        'conjunto de bienes y servicios turísticos que los productores del sector están dispuestos a ofrecer a determinados precios.',
    },
    {
      termino: 'Operador profesional de congresos, ferias y convenciones',
      significado:
        'son las personas naturales o jurídicas legalmente constituidas que se dediquen a la organización de certámenes como congresos, convenciones, ferias, seminarios y reuniones similares, en sus etapas de gerenciamiento, planeación, promoción y realización, así como a la asesoría y/o producción de estos certámenes en forma total o parcial.',
    },
    {
      termino: 'Portafolios de Servicios',
      significado:
        'documento que las empresas, organizaciones o trabajadores independientes entregan a sus clientes para informar sobre los servicios ofrecidos y sobre otros datos importantes.',
    },
    {
      termino: 'Prestador de servicios turísticos',
      significado:
        'es toda persona natural o jurídica que habitualmente proporcione, intermedie o contrate directa o indirectamente con el turista, la prestación de los servicios turísticos, el cual se encuentra obligado a inscribirse en el Registro Nacional de Turismo antes de iniciar sus operaciones.',
    },
    {
      termino: 'Servicios ',
      significado:
        'los servicios son el resultado de una actividad productiva que cambia las condiciones de las unidades que los consumen o que facilita el intercambio de productos o de activos financieros.',
    },
    {
      termino: 'Servicios turísticos',
      significado:
        'se describen como el resultado de las funciones, acciones y actividades que, ejecutadas coordinadamente, por el sujeto receptor, permiten satisfacer al turista, hacer uso óptimo de las facilidades o industria turística y darle valor económico a los atractivos o recursos turísticos',
    },
    {
      termino: 'Servucción',
      significado:
        'neologismo referido al marketing, a partir de la suma de dos palabras: servicio (serv) y producción (acción), es el proceso creativo de un servicio, mediante la combinación de los elementos físicos y humanos que conforman el servicio en la relación cliente-empresa, necesaria para su prestación. Revisar tamaño de letra.',
    },
    {
      termino: 'Turismo',
      significado:
        'comprende las actividades que realizan las personas durante sus viajes y estancias en lugares distintos al de su entorno habitual, por un período consecutivo inferior a un año y mayor a un día, con fines de ocio, por negocios o por otros motivos.',
    },
  ],
  complementario: [
    {
      texto:
        'Asistencia Administrativa. (agosto 23 de 2021). Portafolio de servicios',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GFSftLP2LrE',
    },
    {
      texto: 'Colombiatravel. (abril 28, 2019). Sabrosura (Video).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vroVY5dThec',
    },
    {
      texto: 'FONTUR Colombia Co (2020) Glosario de terminología de Turismo',
      tipo: 'Sitio Web',
      link: 'https://fontur.com.co/es/glosario?q=es/glosario',
    },
    {
      texto:
        'Instituto Distrital de Turismo, ANATO – Asociación Colombiana de Agencias de Viajes (2006) Manual Diseño de productos Turísticos',
      tipo: 'Página web',
      descarga: '/downloads/MANUAL_DISENO_DE_PAQUETES_TURISTICOS.pdf',
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=I4wj61hScUQ',
    },
    {
      texto: 'Ministerio de Desarrollo Económico. (1996). Ley 300 de 1996.',
      tipo: 'PDF',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8634#:~:text=Formulaci%C3%B3n%20de%20la%20pol%C3%ADtica%20y,las%20regiones%20y%20entidades%20territoriales.',
    },
    {
      texto:
        'Visión Gerencial. Marysela Coromoto Morillo Moreno (2011) Turismo y producto turístico.Evolución, conceptos, componentes y clasificación',
      tipo: 'Artículo',
      link: 'https://www.redalyc.org/pdf/4655/465545890011.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo',
        centro:
          'Centro Industrial Del Diseño Y La Manufactura Regional Santander',
      },
      {
        nombre: 'Amparo Virginia Moreno Cantero',
        cargo: 'Experto temático',
        centro: 'Centro de Servicios y Gestión Empresarial',
      },
      {
        nombre: 'Leidy Carolina Arias Aguirre',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología.',
      },
      {
        nombre: 'Gloria Esperanza Ortiz Russi',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Diseño y Metrología.',
      },
      {
        nombre: 'Harbey Castelblanco Muñoz',
        cargo: 'Experto temático',
        centro: 'Centro Nacional Colombo Alemán - Atlántico',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica.',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisora de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: [
          'Camilo Andrés Villamizar Lizcano',
          'Victor Raúl Cárdernas Cáceres',
          'Wilson Andres Arenales Cáceres',
          '',
        ],
        cargo: 'Producción Audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez '],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Camilo Andres Bolaño Rey '],
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Rafael Augusto Mantilla López'],
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: ['Validación de recursos'],
        centro: 'Centro de comercio y servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: ['Validación de recursos'],
        centro: 'Centro de comercio y servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación de recursos'],
        centro: 'Centro de comercio y servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
