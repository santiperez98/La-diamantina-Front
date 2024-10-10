// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Definición de las traducciones
const resources = {
  en: {
    translation: {
      "Productos": "Products",
      "La mina": "The Mine",
      "La empresa": "The Company",
      "Contacto": "Contact",
      "¡Contáctanos!": "Contact Us",
      "Para más información, no dudes en escribirnos.": "For more information, feel free to write to us.",
      "Calidad Insuperable": "Unmatched Quality: Discover the process behind our sharpening stones.",
      "Innovación en Cada Detalle": "Innovation in Every Detail: The excellence in manufacturing that sets us apart.",
      "Experiencia y Compromiso": "Experience and Commitment: Meet the team that makes our products possible.",
      "82 Años de Tradición": "82 Years of Tradition",
      "Desde su fundación, La Diamantina ha sido sinónimo de calidad en la explotación minera y la manufactura de piedras de afilar.": "Since its foundation, La Diamantina has been synonymous with quality in mining and the manufacture of sharpening stones.",
      "Planta Industrial Propia": "Own Industrial Plant",
      "La planta en San Rafael, Mendoza, procesa el mineral extraído, garantizando la mejor calidad en cada etapa.": "The plant in San Rafael, Mendoza, processes the extracted mineral, ensuring the best quality at every stage.",
      "Yacimiento Propio": "Own Deposit",
      "La mina \"La Diamantina\" es la única concesión minera de piedras de afilar en Argentina, con una trayectoria de más de seis décadas.": "\"La Diamantina\" mine is the only mining concession for sharpening stones in Argentina, with a history of over six decades.",
      "Sobre Nosotros": "About Us",
      "En La Diamantina, nos dedicamos a la fabricación de piedras de afilar de la más alta calidad, garantizando un producto que cumple con los más altos estándares de la industria. Nuestra experiencia y compromiso con la excelencia nos posicionan como líderes en el mercado.": "At La Diamantina, we are dedicated to manufacturing high-quality sharpening stones, ensuring a product that meets the highest industry standards. Our experience and commitment to excellence position us as leaders in the market.",
      "+ Sobre La Diamantina": "+ About La Diamantina",
      "¿Qué Hacemos?": "What Do We Do?",
      "Manufactura de piedras de afilar de alta calidad.": "Manufacturing of high-quality sharpening stones.",
      "Uso de materias primas seleccionadas.": "Use of selected raw materials.",
      "Proceso de producción innovador.": "Innovative production process.",
      "Equipo profesional altamente capacitado.": "Highly trained professional team.",
      "Elige tu piedra de afilar.": "Choose your sharpening stone.",
      "Añade al carrito.": "Add to cart.",
      "Completa el proceso de pago.": "Complete the checkout process.",
      "Recibe tu pedido en casa.": "Receive your order at home.",
      "Pasos para Comprar": "Steps to Purchase",
      "¡Contáctanos!": "Contact Us!",
      "Para más información, no dudes en escribirnos.": "For more information, feel free to write to us.",
      "Enviar Mensaje": "Send Message",
      "La Mina": "The Mine",
      "La Empresa": "The Company",
      "Contacto": "Contact",
      "Acerca de Mí": "About Me",
      "Contacto:": "Contact:",
      "WhatsApp": "WhatsApp",
      "Todos los derechos reservados.": "All rights reserved."
      // Añade aquí el resto de las traducciones
    }
  },
  pt: {
    translation: {
      "Productos": "Produtos",
      "La mina": "A Mina",
      "La empresa": "A Empresa",
      "Contacto": "Contato",
      "¡Contáctanos!": "Entre em contato!",
      "Para más información, no dudes en escribirnos.": "Para mais informações, não hesite em nos escrever.",
      "Calidad Insuperable": "Qualidade Inigualável: Descubra o processo por trás de nossas pedras de afiar.",
      "Innovación en Cada Detalle": "Inovação em Cada Detalhe: A excelência na fabricação que nos distingue.",
      "Experiencia y Compromiso": "Experiência e Compromisso: Conheça a equipe que torna nossos produtos possíveis.",
      "82 Años de Tradición": "82 Anos de Tradição",
      "Desde su fundación, La Diamantina ha sido sinónimo de calidad en la explotación minera y la manufactura de piedras de afilar.": "Desde sua fundação, La Diamantina tem sido sinônimo de qualidade na exploração mineral e na fabricação de pedras de afiar.",
      "Planta Industrial Propia": "Planta Industrial Própria",
      "La planta en San Rafael, Mendoza, procesa el mineral extraído, garantizando la mejor calidad en cada etapa.": "A planta em San Rafael, Mendoza, processa o mineral extraído, garantindo a melhor qualidade em cada etapa.",
      "Yacimiento Propio": "Depósito Próprio",
      "La mina \"La Diamantina\" es la única concesión minera de piedras de afilar en Argentina, con una trayectoria de más de seis décadas.": "A mina \"La Diamantina\" é a única concessão mineradora de pedras de afiar na Argentina, com uma trajetória de mais de seis décadas.",
      "Sobre Nosotros": "Sobre Nós",
      "En La Diamantina, nos dedicamos a la fabricación de piedras de afilar de la más alta calidad, garantizando un producto que cumple con los más altos estándares de la industria. Nuestra experiencia y compromiso con la excelencia nos posicionan como líderes en el mercado.": "Na La Diamantina, dedicamo-nos à fabricação de pedras de afiar de alta qualidade, garantindo um produto que atende aos mais altos padrões da indústria. Nossa experiência e compromisso com a excelência nos posicionam como líderes de mercado.",
      "+ Sobre La Diamantina": "+ Sobre A Diamantina",
      "¿Qué Hacemos?": "O Que Fazemos?",
      "Manufactura de piedras de afilar de alta calidad.": "Fabricação de pedras de afiar de alta qualidade.",
      "Uso de materias primas seleccionadas.": "Uso de matérias-primas selecionadas.",
      "Proceso de producción innovador.": "Processo de produção inovador.",
      "Equipo profesional altamente capacitado.": "Equipe profissional altamente qualificada.",
        "Elige tu piedra de afilar.": "Escolha sua pedra de afiar.",
        "Añade al carrito.": "Adicione ao carrinho.",
        "Completa el proceso de pago.": "Complete o processo de pagamento.",
        "Recibe tu pedido en casa.": "Receba seu pedido em casa.",
        "Pasos para Comprar": "Passos para Comprar",
        "¡Contáctanos!": "Entre em contato conosco!",
        "Para más información, no dudes en escribirnos.": "Para mais informações, não hesite em nos escrever.",
        "Enviar Mensaje": "Enviar Mensagem",
        "La Mina": "A Mina",
  "La Empresa": "A Empresa",
  "Contacto": "Contato",
  "Acerca de Mí": "Sobre Mim",
  "Contacto:": "Contato:",
  "WhatsApp": "WhatsApp",
  "Todos los derechos reservados.": "Todos os direitos reservados."
      
      // Añade aquí el resto de las traducciones
    }
  },
  it: {
    translation: {
      "Productos": "Prodotti",
      "La mina": "La Miniera",
      "La empresa": "L'azienda",
      "Contacto": "Contatto",
      "¡Contáctanos!": "Contattaci!",
      "Para más información, no dudes en escribirnos.": "Per ulteriori informazioni, non esitare a contattarci.",
      "Calidad Insuperable": "Qualità Incomparabile: Scopri il processo dietro le nostre pietre per affilare.",
      "Innovación en Cada Detalle": "Innovazione in Ogni Dettaglio: L'eccellenza nella produzione che ci distingue.",
      "Experiencia y Compromiso": "Esperienza e Impegno: Incontra il team che rende possibili i nostri prodotti.",
      "82 Años de Tradición": "82 Anni di Tradizione",
      "Desde su fundación, La Diamantina ha sido sinónimo de calidad en la explotación minera y la manufactura de piedras de afilar.": "Sin dalla sua fondazione, La Diamantina è sinonimo di qualità nell'estrazione mineraria e nella produzione di pietre per affilare.",
      "Planta Industrial Propia": "Impianto Industriale Proprietario",
      "La planta en San Rafael, Mendoza, procesa el mineral extraído, garantizando la mejor calidad en cada etapa.": "L'impianto di San Rafael, Mendoza, lavora il minerale estratto, garantendo la massima qualità in ogni fase.",
      "Yacimiento Propio": "Deposito Proprietario",
      "La mina \"La Diamantina\" es la única concesión minera de piedras de afilar en Argentina, con una trayectoria de más de seis décadas.": "La miniera \"La Diamantina\" è l'unica concessione mineraria di pietre per affilare in Argentina, con una storia di oltre sei decenni.",
      "Sobre Nosotros": "Chi Siamo",
      "En La Diamantina, nos dedicamos a la fabricación de piedras de afilar de la más alta calidad, garantizando un producto que cumple con los más altos estándares de la industria. Nuestra experiencia y compromiso con la excelencia nos posicionan como líderes en el mercado.": "Alla La Diamantina, ci dedichiamo alla produzione di pietre per affilare di altissima qualità, garantendo un prodotto che soddisfa i più elevati standard di settore. La nostra esperienza e il nostro impegno per l'eccellenza ci posizionano come leader nel mercato.",
      "+ Sobre La Diamantina": "+ Su La Diamantina",
      "¿Qué Hacemos?": "Cosa Facciamo?",
      "Manufactura de piedras de afilar de alta calidad.": "Produzione di pietre per affilare di alta qualità.",
      "Uso de materias primas seleccionadas.": "Uso di materie prime selezionate.",
      "Proceso de producción innovador.": "Processo di produzione innovativo.",
      "Equipo profesional altamente capacitado.": "Team professionale altamente qualificato.",
        "Elige tu piedra de afilar.": "Scegli la tua pietra per affilare.",
        "Añade al carrito.": "Aggiungi al carrello.",
        "Completa el proceso de pago.": "Completa il processo di pagamento.",
        "Recibe tu pedido en casa.": "Ricevi il tuo ordine a casa.",
        "Pasos para Comprar": "Passi per Acquistare",
        "¡Contáctanos!": "Contattaci!",
        "Para más información, no dudes en escribirnos.": "Per ulteriori informazioni, non esitare a contattarci.",
        "Enviar Mensaje": "Invia Messaggio",
        "La Mina": "La Miniera",
        "La Empresa": "L'Azienda",
        "Contacto": "Contatto",
        "Acerca de Mí": "Chi Sono",
        "Contacto:": "Contatto:",
        "WhatsApp": "WhatsApp",
        "Todos los derechos reservados.": "Tutti i diritti riservati."
      
      
      // Añade aquí el resto de las traducciones
    }
  },
  de: {
    translation: {
      "Productos": "Produkte",
      "La mina": "Die Mine",
      "La empresa": "Das Unternehmen",
      "Contacto": "Kontakt",
      "¡Contáctanos!": "Kontaktiere uns!",
      "Para más información, no dudes en escribirnos.": "Für weitere Informationen zögere nicht, uns zu schreiben.",
      "Calidad Insuperable": "Unübertroffene Qualität: Entdecken Sie den Prozess hinter unseren Schleifsteinen.",
      "Innovación en Cada Detalle": "Innovation in Jedes Detail: Die Exzellenz in der Herstellung, die uns auszeichnet.",
      "Experiencia y Compromiso": "Erfahrung und Engagement: Lernen Sie das Team kennen, das unsere Produkte möglich macht.",
      "82 Años de Tradición": "82 Jahre Tradition",
      "Desde su fundación, La Diamantina ha sido sinónimo de calidad en la explotación minera y la manufactura de piedras de afilar.": "Seit seiner Gründung steht La Diamantina für Qualität im Bergbau und in der Herstellung von Schleifsteinen.",
      "Planta Industrial Propia": "Eigene Industrieanlage",
      "La planta en San Rafael, Mendoza, procesa el mineral extraído, garantizando la mejor calidad en cada etapa.": "Das Werk in San Rafael, Mendoza, verarbeitet das geförderte Mineral und gewährleistet die beste Qualität in jeder Phase.",
      "Yacimiento Propio": "Eigene Lagerstätte",
      "La mina \"La Diamantina\" es la única concesión minera de piedras de afilar en Argentina, con una trayectoria de más de seis décadas.": "Die Mine \"La Diamantina\" ist die einzige Bergbaulizenz für Schleifsteine in Argentinien und hat eine Geschichte von über sechs Jahrzehnten.",
      "Sobre Nosotros": "Über Uns",
      "En La Diamantina, nos dedicamos a la fabricación de piedras de afilar de la más alta calidad, garantizando un producto que cumple con los más altos estándares de la industria. Nuestra experiencia y compromiso con la excelencia nos posicionan como líderes en el mercado.": "Bei La Diamantina widmen wir uns der Herstellung von hochwertigen Schleifsteinen und gewährleisten ein Produkt, das den höchsten Standards der Branche entspricht. Unsere Erfahrung und unser Engagement für Exzellenz positionieren uns als Marktführer.",
      "+ Sobre La Diamantina": "+ Über La Diamantina",
      "¿Qué Hacemos?": "Was Machen Wir?",
      "Manufactura de piedras de afilar de alta calidad.": "Herstellung von hochwertigen Schleifsteinen.",
      "Uso de materias primas seleccionadas.": "Verwendung ausgewählter Rohstoffe.",
      "Proceso de producción innovador.": "Innovativer Produktionsprozess.",
      "Equipo profesional altamente capacitado.": "Hochqualifiziertes Fachteam.",
        "Elige tu piedra de afilar.": "Wählen Sie Ihren Schleifstein.",
        "Añade al carrito.": "In den Warenkorb legen.",
        "Completa el proceso de pago.": "Schließen Sie den Zahlungsvorgang ab.",
        "Recibe tu pedido en casa.": "Erhalten Sie Ihre Bestellung nach Hause.",
        "Pasos para Comprar": "Schritte zum Kauf",
        "¡Contáctanos!": "Kontaktiere uns!",
        "Para más información, no dudes en escribirnos.": "Für weitere Informationen zögere nicht, uns zu schreiben.",
        "Enviar Mensaje": "Nachricht senden",
        "La Mina": "Die Mine",
        "La Empresa": "Das Unternehmen",
        "Contacto": "Kontakt",
        "Acerca de Mí": "Über Mich",
        "Contacto:": "Kontakt:",
        "WhatsApp": "WhatsApp",
        "Todos los derechos reservados.": "Alle Rechte vorbehalten."
      
      
      // Añade aquí el resto de las traducciones
    }
  },
  es: {
    translation: {
      "Productos": "Productos",
      "La mina": "La mina",
      "La empresa": "La empresa",
      "Contacto": "Contacto",
      "¡Contáctanos!": "¡Contáctanos!",
      "Para más información, no dudes en escribirnos.": "Para más información, no dudes en escribirnos.",
      "Calidad Insuperable": "Calidad Insuperable: Descubre el proceso detrás de nuestras piedras de afilar.",
      "Innovación en Cada Detalle": "Innovación en Cada Detalle: La excelencia en la manufactura que nos distingue.",
      "Experiencia y Compromiso": "Experiencia y Compromiso: Conoce al equipo que hace posible nuestros productos.",
      "82 Años de Tradición": "82 Años de Tradición",
      "Desde su fundación, La Diamantina ha sido sinónimo de calidad en la explotación minera y la manufactura de piedras de afilar.": "Desde su fundación, La Diamantina ha sido sinónimo de calidad en la explotación minera y la manufactura de piedras de afilar.",
      "Planta Industrial Propia": "Planta Industrial Propia",
      "La planta en San Rafael, Mendoza, procesa el mineral extraído, garantizando la mejor calidad en cada etapa.": "La planta en San Rafael, Mendoza, procesa el mineral extraído, garantizando la mejor calidad en cada etapa.",
      "Yacimiento Propio": "Yacimiento Propio",
      "La mina \"La Diamantina\" es la única concesión minera de piedras de afilar en Argentina, con una trayectoria de más de seis décadas.": "La mina \"La Diamantina\" es la única concesión minera de piedras de afilar en Argentina, con una trayectoria de más de seis décadas.",
      "Sobre Nosotros": "Sobre Nosotros",
      "En La Diamantina, nos dedicamos a la fabricación de piedras de afilar de la más alta calidad, garantizando un producto que cumple con los más altos estándares de la industria. Nuestra experiencia y compromiso con la excelencia nos posicionan como líderes en el mercado.": "En La Diamantina, nos dedicamos a la fabricación de piedras de afilar de la más alta calidad, garantizando un producto que cumple con los más altos estándares de la industria. Nuestra experiencia y compromiso con la excelencia nos posicionan como líderes en el mercado.",
      "+ Sobre La Diamantina": "+ Sobre La Diamantina",
      "¿Qué Hacemos?": "¿Qué Hacemos?",
      "Manufactura de piedras de afilar de alta calidad.": "Manufactura de piedras de afilar de alta calidad.",
      "Uso de materias primas seleccionadas.": "Uso de materias primas seleccionadas.",
      "Proceso de producción innovador.": "Proceso de producción innovador.",
      "Equipo profesional altamente capacitado.": "Equipo profesional altamente capacitado.",
      "Elige tu piedra de afilar.": "Elige tu piedra de afilar.",
      "Añade al carrito.": "Añade al carrito.",
      "Completa el proceso de pago.": "Completa el proceso de pago.",
      "Recibe tu pedido en casa.": "Recibe tu pedido en casa.",
      "Pasos para Comprar": "Pasos para Comprar",
      "¡Contáctanos!": "¡Contáctanos!",
      "Para más información, no dudes en escribirnos.": "Para más información, no dudes en escribirnos.",
      "Enviar Mensaje": "Enviar Mensaje",
      "La Mina": "La Mina",
      "La Empresa": "La Empresa",
      "Contacto": "Contacto",
      "Acerca de Mí": "Acerca de Mí",
      "Contacto:": "Contacto:",
      "WhatsApp": "WhatsApp",
      "Todos los derechos reservados.": "Todos los derechos reservados."
      // Añade aquí el resto de las traducciones
    }
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // idioma por defecto
    fallbackLng: 'es', // idioma de respaldo
    interpolation: {
      escapeValue: false, // react ya hace el escape
    },
  });

export default i18n;
