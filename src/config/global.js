export const global = {
  programaFormacion: 'Técnico en Servicios de Recepción Hotelera',
  componenteFormativo: 'Gestión de reservas hoteleras.',
  descripcionCurso:
    '¡Bienvenido al componente formativo 2 Gestión de Reservas Hoteleras, que ha sido diseñado para que usted conozca los servicios turísticos e interactúe dentro del sistema turístico, identificando los elementos que lo integran  y la importancia que tienen en el desarrollo de la industria hotelera.',
  imagenBannerPrincipal: require('@/assets/curso/banner-principal/banner-princiapal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/banner-principal/fondo-banner-principal.svg'),
}

export const menuPrincipal = {
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
          titulo: 'Características.',
          hash: 't_1_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.2',
          titulo: 'Tipos',
          hash: 't_1_2',
        },
      ],
    },
    {
      nombreRuta: 'tema2',
      icono: 'far fa-file-alt',
      numero: '2',
      titulo: 'Portafolio de servicios',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '2.1',
          titulo: 'Estructura',
          hash: 't_2_1',
        },
      ],
    },
    {
      nombreRuta: 'tema3',
      icono: 'far fa-file-alt',
      numero: '3',
      titulo: 'Reservas',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '3.1',
          titulo: 'Objetivo de la gestión de reservas',
          hash: 't_3_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.2',
          titulo: 'Componentes',
          hash: 't_3_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.3',
          titulo: 'Tipos',
          hash: 't_3_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.4',
          titulo: 'Estados',
          hash: 't_3_4',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.5',
          titulo: 'Convenciones de estados de habitaciones',
          hash: 't_3_5',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.6',
          titulo: 'Procedimiento para reservar',
          hash: 't_3_6',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.7',
          titulo: 'Control de disponibilidad',
          hash: 't_3_7',
        },
      ],
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
        {
          icono: 'far fa-file-alt',
          numero: '4.3',
          titulo: 'Sistemas de reserva',
          hash: 't_4_3',
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
          titulo: 'Tipos',
          hash: 't_5_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '5.2',
          titulo: 'Planes',
          hash: 't_5_2',
        },
      ],
    },
  ],
  subMenu: [
    {
      nombreRuta: 'actividad',
      icono: 'far fa-question-circle',
      titulo: 'Actividad didáctica',
      desarrolloContenidos: true,
    },
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
}

export const creditos = {
  liderEquipo: {
    nombre: 'Maria Camila Garcia Santamaria',
    cargo: 'Líder del equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Responsable del equipo',
      centro: 'Centro Industrial Del Diseño Y La Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Tania Yaneth Ramírez Benítez',
      cargo: 'Soporte organizacional',
      centro: 'CENTRO DE COMERCIO Y SERVICIOS',
      regional: 'Regional Tolima',
    },
    {
      nombre: '',
      cargo: 'Experta temática',
      centro: 'Centro Agropecuario de Buga',
      regional: 'Regional valle',
    },
    {
      nombre: '',
      cargo: 'Experto temático',
      centro: 'Centro de Gestión Industrial',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: '',
      cargo: 'Experto temático',
      centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
    },
    {
      nombre: '',
      cargo: 'Experto temático',
      centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
    },
    {
      nombre: '',
      cargo: 'Experto temático',
      centro: 'Deutsche Gesellschaft für',
      regional: 'Internationale Zusammenarbeit (GIZ)',
    },
    {
      nombre: '',
      cargo: 'Diseñador instruccional',
      centro: 'Centro para la Industria y la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: '',
      cargo: 'Evaluador instruccional',
      centro: 'Centro de Diseño y Metrología',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Martha Isabel Martínez Vargas',
      cargo: 'Revisora de estilo',
      centro: 'Centro Industrial Del Diseño Y La Manufactura',
      regional: 'Regional Santander',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Soporte organizacional',
    },
    {
      nombre: ['Yuly Rey'],
      cargo: 'Diseño web y Producción Audiovisual',
    },
    {
      nombre: 'Camilo Andres Bolaño Rey',
      cargo: 'Desarrollo Front-End',
    },
    {
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: 'Milady Tatiana Villamil Castellanos',
      cargo: ['Desarrollo front-end', 'Validación de recursos'],
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Boullon, R. C. (2006). Planificación del Espacio Turístico. Ciudad de México: Editorial Trillas. Obtenido de',
    link:
      'https://d1wqtxts1xzle7.cloudfront.net/52281375/0107-planificacion-del-espacio-turistico-roberto-c-ballon.pdf?1490316133=&response-content-disposition=inline%3B+filename%3DPLANIFICACION_DEL_ESPACIO_TuRISTICO.pdf&Expires=1602090604&Signature=Tj3mbU9dZo6Jguw',
  },
  {
    referencia:
      'Fondo Nacional de Turismo - FONTUR. República de Colombia. Bogotá D.C. (2020). FONTUR Colombia Co. Obtenido de',
    link: 'https://www.fontur.com.co/interactue/glosario/63',
  },
  {
    referencia:
      'Harpersbazaar. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx.',
    link:
      'https://www.harpersbazaar.mx/belleza/salud-y-bienestar/la-ropa-que-eliges-afecta-a-tu-estado-de-animo-y-cerebro-segun-expertos/',
  },
  {
    referencia:
      'Fondo Nacional de Turismo -FONTUR. (2003). https://www.fontur.com.co/interactue/glosario/63. (AyMsoft, Productor) Obtenido de',
    link: 'https://www.fontur.com.co/interactue/glosario/63',
  },
  {
    referencia:
      'Instituto Distrital de Turismo. ANATO Asociación Colombiana de Agencias de Viajes y Turismo. (2007). http://www.bogotaturismo.gov.co/sites/default/files/MANUAL_DISENO_DE_PAQUETES_TURISTICOS.pdf. Obtenido de',
    link:
      'http://www.bogotaturismo.gov.co/sites/default/files/MANUAL_DISENO_DE_PAQUETES_TURISTICOS.pdf',
  },
  {
    referencia:
      'Novas, N. C. (2006). Promoción y Venta de Servicios Turísticos (1a. Edición ed.). La Habana, Cuba: Ideas propias, Editorial Vigo. Obtenido de',
    link:
      'https://books.google.es/books?hl=es&lr=lang_es&id=GDIxq8Zsj_0C&oi=fnd&pg=PT17&dq=servicios+tur%C3%ADsticos&ots=Jj3VGMN5Eb&sig=MIvPLT-isymBOaC2QekruTGjnSo#v=onepage&q=servicios%20tur%C3%ADsticos&f=false',
  },
  {
    referencia:
      'Pavón, C. R. (2012). Promoción y comercialización de productos y servicios turísticos locales. Málaga: IC Editorial.',
  },
]

export const glosario = [
  {
    termino: 'Agencias de Viajes',
    significado:
      'Son las empresas comercializadoras, debidamente constituidas por personas naturales o jurídicas que se dediquen profesionalmente a vender planes turísticos (Fondo Nacional de Turismo -FONTUR, 2003)',
  },
  {
    termino: 'Calidad',
    significado:
      'Es el resultado de un proceso que implica la satisfacción de todas las necesidades, exigencias y expectativas legítimas de los consumidores respecto de los productos y servicios, a un precio aceptable, de conformidad con las condiciones contractuales mutuamente aceptadas y con los factores subyacentes que determinan la calidad: seguridad, higiene, accesibilidad, transparencia, autenticidad y armonía de una actividad turística preocupada por su entorno humano y natural.',
  },
  {
    termino: 'Demanda turística',
    significado:
      'Es el número de personas que viajan o desean viajar para utilizar instalaciones turísticas y servicios lejos de sus lugares de trabajo o residencia.',
  },
  {
    termino: 'Establecimiento de Alojamiento',
    significado:
      'El conjunto de bienes destinados por una persona natural o jurídica a prestar el servicio de alojamiento no permanente inferior a 30 días con o sin alimentación y servicios básicos y/o complementarios o accesorios de alojamiento, mediante contrato de hospedaje, el cual es un contrato de arrendamiento, de carácter comercial y de adhesión, que una empresa dedicada a ésta actividad celebra con el propósito principal de prestar alojamiento a otra persona denominada huésped, mediante el pago del precio respectivo día a día, por un plazo inferior a 30 días',
  },
  {
    termino: 'Guía de Turismo:',
    significado:
      'Se considera guía de turismo a la persona natural que presta servicios profesionales en el área de guionaje o guianza turística, cuyas funciones hacia el turista, viajero o pasajero son las de orientar, conducir, instruir y asistir durante la ejecución del servicio contratado, que esté inscrita en el Registro Nacional de Turismo, previa obtención de la correspondiente tarjeta profesional como guía de turismo, otorgada por la entidad u organismo que el gobierno designe.',
  },
  {
    termino: 'Oferta turísticaDiseño',
    significado:
      'Conjunto de bienes y servicios turísticos que los productores del sector están dispuestos a ofrecer a determinados precios.',
  },
  {
    termino: 'Operador profesional de congresos, ferias y convenciones',
    significado:
      'Son las personas naturales o jurídicas legalmente constituidas que se dediquen a la organización de certámenes como congresos, convenciones, ferias, seminarios y reuniones similares, en sus etapas de gerenciamiento, planeación, promoción y realización, así como a la asesoría y/o producción de estos certámenes en forma total o parcial.',
  },
  {
    termino: 'Portafolios de Servicios',
    significado:
      'Documento que las empresas, organizaciones o trabajadores independientes entrega a sus clientes para informar sobre los servicios ofrecidos y sobre otros datos importantes.',
  },
  {
    termino: 'Prestador de servicios turísticos',
    significado:
      'Es toda persona natural o jurídica que habitualmente proporcione, intermedie o contrate directa o indirectamente con el turista, la prestación de los servicios turísticos, el cual se encuentra obligado a inscribirse en el Registro Nacional de Turismo antes de iniciar sus operaciones.',
  },
  {
    termino: 'Servicios ',
    significado:
      'Los servicios son el resultado de una actividad productiva que cambia las condiciones de las unidades que los consumen o que facilita el intercambio de productos o de activos financieros.',
  },
  {
    termino: 'Servicios turísticos',
    significado:
      'Se describen como el resultado de las funciones, acciones y actividades que, ejecutadas coordinadamente, por el sujeto receptor, permiten satisfacer al turista, hacer uso óptimo de las facilidades o industria turística y darle valor económico a los atractivos o recursos turísticos',
  },
  {
    termino: 'Servucción',
    significado:
      'Neologismo referido al marketing, a partir de la suma de dos palabras: servicio (serv) y producción (acción), es el proceso creativo de un servicio, mediante la combinación de los elementos físicos y humanos que conforman el servicio en la relación cliente-empresa, necesaria para su prestación. Revisar tamaño de letra.',
  },
  {
    termino: 'Turismo',
    significado:
      'Comprende las actividades que realizan las personas durante sus viajes y estancias en lugares distintos al de su entorno habitual, por un período consecutivo inferior a un año y mayor a un día, con fines de ocio, por negocios o por otros motivos.',
  },
]

export const complementario = [
  {
    texto:
      'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
    tipo: 'Video',
    link: 'https://www.google.com/',
  },
  {
    texto:
      'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
    tipo: 'Página web',
    link: 'https://www.google.com/',
  },
  {
    texto:
      'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
    tipo: 'Artículo científico',
    link: 'https://www.google.com/',
  },
  {
    texto: 'Economía de Rosquilla. (s.f.).',
    tipo: 'Página web',
    link: 'https://www.google.com/',
  },
  {
    texto: '2 minutos para entender el desarrollo sostenible – Spanish',
    tipo: 'Video',
    link: 'https://www.google.com/',
  },
]