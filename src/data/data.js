import listing1 from "../assets/images/listing/1.jpg";
import listing2 from "../assets/images/listing/2.jpg";
import listing3 from "../assets/images/listing/3.jpg";
import listing4 from "../assets/images/listing/4.jpg";
import listing5 from "../assets/images/listing/5.jpg";
import listing6 from "../assets/images/listing/6.jpg";
import listing7 from "../assets/images/listing/7.jpg";
import listing8 from "../assets/images/listing/8.jpg";
import listing9 from "../assets/images/listing/9.jpg";
import listing10 from "../assets/images/listing/10.jpg";
import listing11 from "../assets/images/listing/11.jpg";
import listing12 from "../assets/images/listing/12.jpg";

import client1 from "../assets/images/client/01.jpg";
import client2 from "../assets/images/client/02.jpg";
import client3 from "../assets/images/client/03.jpg";
import client4 from "../assets/images/client/04.jpg";
import client5 from "../assets/images/client/05.jpg";
import client6 from "../assets/images/client/06.jpg";
import client7 from "../assets/images/client/07.jpg";
import client8 from "../assets/images/client/08.jpg";
import client9 from "../assets/images/client/09.jpg";
import client10 from "../assets/images/client/10.jpg";
import client11 from "../assets/images/client/11.jpg";

import blog1 from "../assets/images/blog/1.jpg";
import blog2 from "../assets/images/blog/2.jpg";
import blog3 from "../assets/images/blog/3.jpg";
import blog4 from "../assets/images/blog/4.jpg";
import blog5 from "../assets/images/blog/5.jpg";
import blog6 from "../assets/images/blog/6.jpg";
import blog7 from "../assets/images/blog/7.jpg";
import blog8 from "../assets/images/blog/8.jpg";
import blog9 from "../assets/images/blog/9.jpg";

import payment1 from "../assets/images/payments/visa.jpg";
import payment2 from "../assets/images/payments/american-express.jpg";
import payment3 from "../assets/images/payments/discover.jpg";
import payment4 from "../assets/images/payments/mastercard.jpg";

import {
  FiShoppingCart,
  FiDribbble,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiGlobe,
  FiYoutube,
  FiHelpCircle,
  FiBookmark,
  FiSettings,
  FiGithub,
  FiGitlab,
  TbSortAscending2,
  LiaUserClockSolid,
} from "../assets/icons/vander";
import { FaRegBuilding } from "react-icons/fa6";

export const topDestination = [
  {
    image: listing1,
    place: "Rome, Italy",
    hotels: "3 Hotels",
  },
  {
    image: listing2,
    place: "Singapore",
    hotels: "3 Hotels",
  },
  {
    image: listing3,
    place: "Paris, France",
    hotels: "3 Hotels",
  },
  {
    image: listing4,
    place: "Goa, India",
    hotels: "3 Hotels",
  },
  {
    image: listing5,
    place: "Whistler, Canada",
    hotels: "3 Hotels",
  },
  {
    image: listing6,
    place: "Lumpur, Malaysia",
    hotels: "3 Hotels",
  },
  {
    image: listing7,
    place: "Sydney, Australia",
    hotels: "3 Hotels",
  },
  {
    image: listing8,
    place: "Virginia Beach",
    hotels: "3 Hotels",
  },
];

export const packages = [
  {
    id: 1,
    image: listing1,
    place: "Guayaquil",
    title:
      "CENTRO CLÍNICO QUIRÚRGICO AMBULATORIO HOSPITAL DEL DÍA NORTE TARQUI - IESS",
    amount: 38,
    type: "Consultorio",
    features: [
      {
        icon: FiGlobe,
        name: "Internet",
        title: "No",
      },
      {
        icon: FaRegBuilding,
        name: "2do Piso",
        title: "Sí",
      },
      {
        icon: TbSortAscending2,
        name: "Ascensor",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Sala de espera",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Parqueo",
        title: "No",
      },
    ],
  },
  {
    id: 2,
    image: listing2,
    place: "Quito",
    title: "CENTRO MÉDICO FAMYSALUD",
    amount: 48,
    type: "Quirofáno",
    features: [
      {
        icon: FiGlobe,
        name: "Internet",
        title: "Sí",
      },
      {
        icon: FaRegBuilding,
        name: "Planta Baja",
        title: "Sí",
      },
      {
        icon: TbSortAscending2,
        name: "Ascensor",
        title: "No",
      },
      {
        icon: LiaUserClockSolid,
        name: "Sala de espera",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Parqueo",
        title: "No",
      },
    ],
  },
  {
    id: 3,
    image: listing3,
    place: "Guayaquil",
    title: "CENTRO MEDICO ALBATROS",
    amount: 58,
    type: "Reuniones",
    features: [
      {
        icon: FiGlobe,
        name: "Internet",
        title: "Sí",
      },
      {
        icon: FaRegBuilding,
        name: "3er Piso",
        title: "Sí",
      },
      {
        icon: TbSortAscending2,
        name: "Ascensor",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Sala de espera",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Parqueo",
        title: "No",
      },
    ],
  },
  {
    id: 4,
    image: listing4,
    place: "Guayaquil",
    title: "CENTRO DE ESPECIALIDADES LETAMENDI",
    amount: 68,
    type: "Consultorio",
    features: [
      {
        icon: FiGlobe,
        name: "Internet",
        title: "Sí",
      },
      {
        icon: FaRegBuilding,
        name: "3er Piso",
        title: "Sí",
      },
      {
        icon: TbSortAscending2,
        name: "Ascensor",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Sala de espera",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Parqueo",
        title: "Si",
      },
    ],
  },
  {
    id: 5,
    image: listing5,
    place: "Guayaquil",
    title: "CENTRO DE ESPECIALIDADES CENTRAL GUAYAS #6 IESS",
    amount: 78,
    type: "Quirofáno",
    features: [
      {
        icon: FiGlobe,
        name: "Internet",
        title: "Sí",
      },
      {
        icon: FaRegBuilding,
        name: "3er Piso",
        title: "Sí",
      },
      {
        icon: TbSortAscending2,
        name: "Ascensor",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Sala de espera",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Parqueo",
        title: "Si",
      },
    ],
  },
  {
    id: 6,
    image: listing6,
    place: "Guayaquil",
    title: "CENTRO DE ESPECIALIDADES MEDICAS BIENESTAR",
    amount: 88,
    type: "Reuniones",
    features: [
      {
        icon: FiGlobe,
        name: "Internet",
        title: "Sí",
      },
      {
        icon: FaRegBuilding,
        name: "3er Piso",
        title: "Sí",
      },
      {
        icon: TbSortAscending2,
        name: "Ascensor",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Sala de espera",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Parqueo",
        title: "No",
      },
    ],
  },
  {
    id: 7,
    image: listing7,
    place: "Guayaquil",
    title: "CENTRO DE ESPECIALIDADES VIRGEN DEL CISNE",
    amount: 38,
    type: "Consultorio",
    features: [
      {
        icon: FiGlobe,
        name: "Internet",
        title: "Sí",
      },
      {
        icon: FaRegBuilding,
        name: "3er Piso",
        title: "Sí",
      },
      {
        icon: TbSortAscending2,
        name: "Ascensor",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Sala de espera",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Parqueo",
        title: "Si",
      },
    ],
  },
  {
    id: 8,
    image: listing8,
    place: "Guayaquil",
    title: "SEMEDIC CENTRO DE ESPECIALIDADES",
    amount: 28,
    type: "Quirofáno",
    features: [
      {
        icon: FiGlobe,
        name: "Internet",
        title: "Sí",
      },
      {
        icon: FaRegBuilding,
        name: "3er Piso",
        title: "Sí",
      },
      {
        icon: TbSortAscending2,
        name: "Ascensor",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Sala de espera",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Parqueo",
        title: "No",
      },
    ],
  },
  {
    id: 9,
    image: listing9,
    place: "Guayaquil",
    title: "CENTRO DE ESPECIALIDADES MÉDICAS SAN JUAN",
    amount: 18,
    type: "Reuniones",
    features: [
      {
        icon: FiGlobe,
        name: "Internet",
        title: "Sí",
      },
      {
        icon: FaRegBuilding,
        name: "3er Piso",
        title: "Sí",
      },
      {
        icon: TbSortAscending2,
        name: "Ascensor",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Sala de espera",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Parqueo",
        title: "Si",
      },
    ],
  },
  {
    id: 10,
    image: listing10,
    place: "Guayaquil",
    title: "CENTRO MÉDICO DE ESPECIALIDADES AUXILIADORA",
    amount: 38,
    type: "Consultorio",
    features: [
      {
        icon: FiGlobe,
        name: "Internet",
        title: "Sí",
      },
      {
        icon: FaRegBuilding,
        name: "3er Piso",
        title: "Sí",
      },
      {
        icon: TbSortAscending2,
        name: "Ascensor",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Sala de espera",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Parqueo",
        title: "Sí",
      },
    ],
  },
  {
    id: 11,
    image: listing11,
    place: "Cuenca",
    title: "CEMAN CENTRO DE ESPECIALIDADES MÉDICAS MANRIQUE",
    amount: 68,
    type: "Quirofáno",
    features: [
      {
        icon: FiGlobe,
        name: "Internet",
        title: "Sí",
      },
      {
        icon: FaRegBuilding,
        name: "3er Piso",
        title: "Sí",
      },
      {
        icon: TbSortAscending2,
        name: "Ascensor",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Sala de espera",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Parqueo",
        title: "No",
      },
    ],
  },
  {
    id: 12,
    image: listing12,
    place: "Quito",
    title: "FUNDACIÓN NAHIM ISAÍAS CENTRO MÉDICO DE ESPECIALIDADES",
    amount: 58,
    type: "Reuniones",
    features: [
      {
        icon: FiGlobe,
        name: "Internet",
        title: "Sí",
      },
      {
        icon: FaRegBuilding,
        name: "3er Piso",
        title: "Sí",
      },
      {
        icon: TbSortAscending2,
        name: "Ascensor",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Sala de espera",
        title: "Sí",
      },
      {
        icon: LiaUserClockSolid,
        name: "Parqueo",
        title: "No",
      },
    ],
  },
];

export const ClientData = [
  {
    image: client1,
    desc: '" Con Doctorjobs, ahora puedo reservar quirófanos y espacios en distintos hospitales sin estar atado a uno solo. Además, me ahorro el estrés de coordinar todo por separado, ya que también puedo contratar el personal necesario y alquilar equipo médico sin buscar por otros lados."',
    name: "Pedro Méndez",
    possition: "Cardiólogo, 54 años",
  },
  {
    image: client2,
    desc: '"No voy a mentir, al principio me costaba adaptarme a la idea de no tener un consultorio fijo. Pero la flexibilidad de poder alquilar por horas me ha dado más libertad para manejar mi tiempo y ver a los pacientes donde les quede más cerca, sin complicaciones de largos traslados."',
    name: "Lucía Fernández",
    possition: "Ginecóloga, 48 años",
  },
  {
    image: client3,
    desc: '" Alquilar por horas me parecía raro al principio, pero me ha permitido ver a más pacientes en diferentes lugares. No tengo que comprometerme con una sola ubicación, y eso hace que pueda organizar mejor mi agenda y ahorrar en costos fijos. "',
    name: "Carla López",
    possition: "Dermatóloga, 32 años",
  },
  {
    image: client4,
    desc: '" El hecho de que los quirófanos cuenten con todos los permisos del Ministerio de Salud del Ecuador es clave. Sabes que estás operando en lugares con todas las normativas al día, y eso te da tranquilidad, algo que en esta profesión es esencial. "',
    name: "Alfonso Ramírez",
    possition: "Cirujano General, 58 años",
  },
  {
    image: client5,
    desc: '" Lo mejor es que si surge algo inesperado, puedo extender mi tiempo en la consulta sin preocuparme por costos extra desproporcionados. La flexibilidad que ofrece Doctorjobs es algo que no conseguí con otros servicios."',
    name: "Ana Campos",
    possition: "Pediatra, 35 años",
  },
  {
    image: client6,
    desc: '" Lo que más valoro es la posibilidad de operar en hospitales diferentes, dependiendo de dónde esté mi paciente. Puedo alquilar equipos, contratar personal médico y todo lo que necesito está en un solo lugar, sin tener que coordinar todo por separado. "',
    name: "Jorge Suárez",
    possition: "Urólogo, 50 años",
  },
  {
    image: client8,
    desc: '"La plataforma es práctica, y eso me ha permitido organizar mi tiempo mucho mejor. Antes tenía que alquilar un consultorio por un mes completo, incluso si no lo usaba todo el tiempo. Con Doctorjobs, solo pago por lo que realmente necesito."',
    name: "Elena González",
    possition: "Nutrióloga, 29 años",
  },
  {
    image: client7,
    desc: '"Antes, organizar una cirugía implicaba coordinar quirófanos, personal y equipos en distintos lugares, lo cual era agotador. Ahora todo lo hago desde un solo sitio, y los quirófanos ya están listos y cumplen con los requisitos de salud."',
    name: "Juan Pablo Estrada",
    possition: "Cirujano Plástico, 45 años",
  },
  {
    image: client9,
    desc: '"Reservar consultorios por horas me ha facilitado atender a más pacientes en diferentes zonas. Lo que más aprecio es que puedo moverme entre ubicaciones sin estar atada a un solo lugar, y eso hace que mis pacientes también se sientan más cómodos."',
    name: "Laura Ortiz",
    possition: "Psicóloga, 27 años",
  },
  {
    image: client10,
    desc: '"Lo bueno de Doctorjobs es que puedo operar de forma flexible y planear mi jornada dependiendo de las necesidades de mis pacientes. Además, la opción de extender mis horas de trabajo y obtener descuentos es un gran beneficio que otros sistemas no ofrecen."',
    name: "Luis Gutiérrez",
    possition: "Neurólogo, 60 años",
  },
];

export const blogData = [
  {
    id: 1,
    image: blog1,
    date: "13th Sep 2024",
    title: "This Spanish city is a feast for the eyes: Travosy",
    desc: "This is required when, for example, the final text is not yet available.",
    tag: "Travel",
  },
  {
    id: 2,
    image: blog2,
    date: "29th Nov 2024",
    title: "New Zealand’s South Island brims with majestic",
    desc: "This is required when, for example, the final text is not yet available.",
    tag: "Tour",
  },
  {
    id: 3,
    image: blog3,
    date: "29th Dec 2024",
    title: "When you visit the Eternal Rome City: Travosy",
    desc: "This is required when, for example, the final text is not yet available.",
    tag: "Tourist",
  },
  {
    id: 4,
    image: blog4,
    date: "13th March 2024",
    title: "My Story When I Backpacked Around The World",
    desc: "This is required when, for example, the final text is not yet available.",
    tag: "Flight",
  },
  {
    id: 5,
    image: blog5,
    date: "5th May 2024",
    title: "Organization of accounting at the enterprise",
    desc: "This is required when, for example, the final text is not yet available.",
    tag: "Arab",
  },
  {
    id: 6,
    image: blog6,
    date: "19th June 2024",
    title: "Three of the Best Day Trips to Make from Francisco",
    desc: "This is required when, for example, the final text is not yet available.",
    tag: "Dubai",
  },
  {
    id: 7,
    image: blog7,
    date: "20th June 2024",
    title: "Why Do People Travel ? Reasons People Travel in 2023",
    desc: "This is required when, for example, the final text is not yet available.",
    tag: "Maldivas",
  },
  {
    id: 8,
    image: blog8,
    date: "31st Aug 2024",
    title: "Jungles In Australia: Vermont’s Rugged, Retro Ski Mountain",
    desc: "This is required when, for example, the final text is not yet available.",
    tag: "News",
  },
  {
    id: 9,
    image: blog9,
    date: "1st Sep 2024",
    title: "Traveller Visiting Ice Cave With Amazing Eye-catching Scenes",
    desc: "This is required when, for example, the final text is not yet available.",
    tag: "Packages",
  },
];

export const footerSocial = [
  {
    icon: FiShoppingCart,
    link: "https://1.envato.market/travosy-react",
  },
  {
    icon: FiDribbble,
    link: "https://dribbble.com/shreethemes",
  },
  {
    icon: FiLinkedin,
    link: "http://linkedin.com/company/shreethemes",
  },
  {
    icon: FiFacebook,
    link: "https://www.facebook.com/shreethemes",
  },
  {
    icon: FiInstagram,
    link: "https://www.instagram.com/shreethemes",
  },
  {
    icon: FiTwitter,
    link: "https://twitter.com/shreethemes",
  },
  {
    icon: FiMail,
    link: "mailto:support@shreethemes.in",
  },
];

export const footerCompany = [
  {
    name: "Nosotros",
    link: "/aboutus",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Team",
    link: "/team",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
  {
    name: "Blog",
    link: "/blogs",
  },
  {
    name: " Login",
    link: "/login",
  },
];

export const placeImage = [
  listing1,
  listing2,
  listing3,
  listing4,
  listing5,
  listing6,
  listing7,
  listing8,
  listing9,
  listing10,
  listing11,
  listing2,
  listing3,
  listing4,
];

export const faqData = [
  {
    id: 1,
    title:
      "¿Qué servicios están incluidos en el alquiler de consultorios y quirófanos?",
    desc: "Nuestros espacios incluyen consultorios y quirófanos completamente funcionales, equipados según tus necesidades. Dependiendo del lugar que elijas, podrás acceder a opciones básicas o avanzadas, con comodidades como mobiliario, aire acondicionado, conexión a internet y más. Además, tienes la posibilidad de alquilar equipos médicos adicionales o contratar personal especializado según el tipo de servicio que desees ofrecer.",
  },
  {
    id: 2,
    title:
      "¿Puedo alquilar un consultorio o quirófano por horas o días específicos?",
    desc: "Sí, puedes alquilar tanto consultorios como quirófanos por el tiempo que necesites, ya sea por horas o por días completos. Esto te permite planificar mejor tu agenda y optimizar costos, utilizando el espacio solo cuando lo requieras para tus consultas, cirugías o reuniones médicas.",
  },
  {
    id: 3,
    title:
      "¿Puedo solicitar equipos médicos o personal adicional cuando alquilo un espacio?",
    desc: "Absolutamente. Nuestra plataforma te permite, además de alquilar el espacio, solicitar equipos médicos especializados o personal de apoyo como enfermeros o asistentes quirúrgicos. Esto garantiza que tengas todo lo que necesitas para atender a tus pacientes de manera eficiente, sin importar si es para una consulta o una intervención quirúrgica.",
  },
  {
    id: 4,
    title: "¿Cuál es el proceso para reservar un consultorio o quirófano?",
    desc: "Reservar un espacio es fácil. Simplemente elige el consultorio o quirófano que más se ajuste a tus necesidades, selecciona el día y la hora, y confirma la reserva. Si necesitas equipos adicionales o personal médico, puedes agregarlos durante el proceso de reserva. Una vez confirmada, recibirás todos los detalles de la reserva en tu correo electrónico.",
  },
  {
    id: 5,
    title: "¿Hay Estacionamiento disponible para mis pacientes?",
    desc: "La mayoría de nuestros consultorios y quirófanos cuentan con Parqueo para pacientes. Te recomendamos verificar la disponibilidad de este servicio al momento de hacer tu reserva para asegurarte de que tus pacientes tengan la mejor experiencia posible.",
  },
  {
    id: 6,
    title:
      "¿Qué medidas de seguridad e higiene se implementan en los consultorios y quirófanos?",
    desc: "Todos nuestros espacios cumplen con las normativas vigentes del Ministerio de Salud Pública de Ecuador, garantizando que tanto los consultorios como los quirófanos se mantengan bajo estrictos protocolos de higiene y seguridad. Además, se realizan desinfecciones frecuentes y el equipamiento es esterilizado después de cada uso.",
  },
  {
    id: 7,
    title:
      "¿Puedo elegir el tipo de consultorio o quirófano según mi presupuesto?",
    desc: "Sí, puedes elegir entre una variedad de consultorios y quirófanos que se ajusten a tu presupuesto. Ya sea que busques un espacio más sencillo o uno completamente equipado con tecnología avanzada, tenemos opciones para todas las necesidades y presupuestos.",
  },
  {
    id: 8,
    title: "¿Qué sucede si necesito cancelar o modificar una reserva?",
    desc: "Entendemos que las circunstancias pueden cambiar, por lo que puedes modificar o cancelar tu reserva bajo ciertas condiciones. Las políticas de cancelación pueden variar dependiendo del espacio reservado, por lo que te recomendamos revisar los términos al hacer la reserva.",
  },
  {
    id: 9,
    title:
      "¿Cómo puedo asegurarme de que el equipo o personal solicitado estará disponible?",
    desc: "Nuestra plataforma garantiza la disponibilidad de equipos y personal médico en el momento de la reserva. Te confirmaremos la disponibilidad inmediatamente y nos aseguraremos de que todo esté listo para cuando lo necesites.",
  },
];

export const teamData = [
  {
    image: client4,
    name: "Jack John",
    possition: "Agente",
  },
  {
    image: client5,
    name: "Krista John",
    possition: "Agente",
  },
  {
    image: client6,
    name: "Roger Jackson",
    possition: "Agente",
  },
  {
    image: client7,
    name: "Johnny English",
    possition: "Agente",
  },
];

export const paymentData = [
  {
    image: payment1,
    title: "Visa ending in 4578",
    date: "Expires in 13/03/2024",
  },
  {
    image: payment2,
    title: "American Express ending in 4578",
    date: "Expires in 05/05/2024",
  },
  {
    image: payment3,
    title: "Discover ending in 4578",
    date: "Expires in 19/06/2024",
  },
  {
    image: payment4,
    title: "Master Card ending in 4578",
    date: "Expires in 20/06/2024",
  },
];

export const userSocialData = [
  {
    icon: FiTwitter,
    name: "Twitter",
    placeHolder: "Twitter Profile Name",
    desc: "Add your Twitter username (e.g. jesus).",
  },
  {
    icon: FiFacebook,
    name: "Facebook",
    placeHolder: "Facebook Profile Name",
    desc: "Add your Facebook username (e.g. jesus).",
  },
  {
    icon: FiInstagram,
    name: "Instagram",
    placeHolder: "Instagram Profile Name",
    desc: "Add your Instagram username (e.g. jesus).",
  },
  {
    icon: FiLinkedin,
    name: "Linkedin",
    placeHolder: "Linkedin Profile Name",
    desc: "Add your Linkedin username (e.g. jesus).",
  },
  {
    icon: FiYoutube,
    name: "Youtube",
    placeHolder: "Youtube url",
    desc: "Add your Youtube url.",
  },
];

export const helpAbout = [
  {
    icon: FiHelpCircle,
    title: "FAQs",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    link: "/helpcenter-faqs",
  },
  {
    icon: FiBookmark,
    title: "Guides / Support",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    link: "/helpcenter-guides",
  },
  {
    icon: FiSettings,
    title: "Support Request",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    link: "/helpcenter-support",
  },
];

export const guidesData = [
  {
    title: "Getting started",
    subData: [
      "Deciding to purchase",
      "List your space",
      "Landing an experience or adventure",
      "Top uses questions",
    ],
  },
  {
    title: "Your calendar",
    subData: [
      "Pricing & availability",
      "Booking settings",
      "Responding to enquiries & requests",
      "Snoozing or deactivating your listing",
    ],
  },
  {
    title: "Your listings",
    subData: [
      "Updating your listing",
      "Neighbourhoods",
      "Listing photos & photography",
      "Travosy Plus",
      "API-connected software",
    ],
  },
  {
    title: "How payouts work",
    subData: [
      "Getting paid",
      "Adding payout info",
      "Your payout status",
      "Donations",
      "Taxes",
    ],
  },
  {
    title: "Your reservations",
    subData: [
      "Travosy safely",
      "Travosy Experiences and Adventures",
      "Changing a reservation",
      "Cancelling a reservation",
      "Long-term reservations",
    ],
  },
  {
    title: "Reservation help",
    subData: ["Help with a reservation or guest", "Guest cancellations"],
  },
  {
    title: "Your account",
    subData: [
      "Your profile",
      "Account security",
      "Identification & verifications",
      "Reviews",
      "Superhost status",
    ],
  },
];

export const restrictions = [
  "Digital Marketing Solutions for Tomorrow",
  "Our Talented & Experienced Marketing Agency",
  "Create your own skin to match your brand",
  "Digital Marketing Solutions for Tomorrow",
  "Our Talented & Experienced Marketing Agency",
  "Create your own skin to match your brand",
];

export const blogSocial = [
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiYoutube,
  FiGitlab,
];
