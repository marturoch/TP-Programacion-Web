const productos = [
    {
        name:"snacks",
        image:"snack_ppal.jpeg",

    },
    {
        name:"alimentos",
        image:"alimento_ppal.jpeg",

    },
    {
        name:"juguetes",
        image:"juguetes_ppal.jpeg",

    },
    {
        name:"petFind",
        image:"petfind.jpg",
        description:"Descripcion petFind"

    },
    {
        name:"higiene",
        image:"higiene_ppal.png",

    }
]
const servicios = [
    {
        name:"peluqueria",
        image:"peluquera.jpg",
        description:"El precio puede varias dependiendo del tamano de su mascota. Para un mantenimiento superior de su mascota, Dog Care recomienda bano 1 vez al mes, y corte cada 6 semanas."
    },
    {
        name:"paseador",
        image:"paseador.png",
        description:"Paseador particular - $300 la hora"
    },
    {
        name:"adiestrador",
        image:"adiestrador.jpg",
        description:"Servicio de adiestramiento canino particular - $600 la hora. Duracion estimada del curso: 3 meses. Frecuencia: 1 vez por semana. Duracion de clases: 1 hora"

    }
]

const alimentos = [
    {
        name: "ROYAL CANIN MAXI ADULT DERMACONFORT",
        image: "ROYAL-CANIN-MAXI-ADULT-DERMACONFORT.png",
        price: "$5690",
        description: "Alimento completo para perros, adultos y maduros de razas grandes (de 26 a 44 kg) - A partir de los 15 meses de edad - Perros propensos a la irritación cutánea y a los picores- 10kg"
    },
    {
        name: "ROYAL CANIN MAXI ADULT STERILIZED",
        image: "ROYAL-CANIN-MAXI-ADULT-STERILIZED.png",
        price: "$5390",
        description: "Mantenimiento del peso ideal. Para perros adultos castrados de talla grande  -7,5kg"
    },
    {
        name: "ROYAL CANIN MAXI ADULT WEIGHT CARE",
        image: "Royal-Canin-maxi-adult-weight-care.png",
        price: "$5690",
        description: "Ayuda a limitar la ganancia de peso -10kg"
    },
    {
        name: "ROYAL CANIN MEDIUM ADULT DERMACONFORT",
        image: "ROYAL-CANIN-MEDIUM-ADULT-DERMACONFORT.png",
        price: "$5690",
        description: "Alimento para perros adultos y maduros de talla mediana (de 11 a 25 kg) propensos a la irritación cutánea y al prurito. A partir de los 12 meses de edad - 10kg"
    },
    {
        name: "ROYAL CANIN MEDIUM ADULT STERILIZED",
        image: "ROYAL-CANIN-MEDIUM-ADULT-STERILIZED.png",
        price: "$5690",
        description: "Alimento completo para perros adultos y maduros de razas medianas (de 11 a 25 kg) - A partir de los 12 meses de edad - Perros propensos a la irritación cutánea y al picor - 10kg"
    },
    {
        name: "ROYAL CANIN MEDIUM ADULT WEIGHT CARE",
        image: "Royal-Canin-medium-adult-weight-care.png",
        price: "$5690",
        description: "El sobrepeso puede estar asociado a complicaciones en la salud. Si tu perro tiene tendencia a aumentar de peso, podés ayudarlo a mantenerse en forma y bien alimentado. Alimento para perros adultos y maduros de talla mediana (de 11 a 25 kg). A partir de los 12 meses de edad. Recomendado para perros con tendencia al sobrepeso - 10kg"
    },
    {
        name: "PRO PLAN ACTIVE MIND RAZAS MEDIANAS Y GRANDES",
        image: "Pro-Plan-Active-Mind-Razas-Medianas-y-Grandes.png",
        price: "$6790",
        description: "Provee nutrición de avanzada para proteger a los perros mayores de 7 años, manteniéndolos sanos y activos - 13kg"
    },
    {
        name: "PRO PLAN ADULTO RAZAS GRANDES",
        image: "Pro-Plan-Adulto-Raza-Grande.png",
        price: "$6190",
        description: "Provee nutrición de avanzada que ayuda a los perros de razas grandes a mantenerse fuertes y llenos de vitalidad - 15kg"
    },
    {
        name: "PRO PLAN ADULTO RAZAS MEDIANAS",
        image: "Pro-Plan-Adulto-Razas-Medianas.png",
        price: "$6190",
        description: "Provee nutrición de avanzada que ayuda a los perros de razas medianas a mantenerse fuertes y llenos de vitalidad - 15kg"
    },
    {
        name: "PRO PLAN ADULTO RAZAS PEQUEÑAS",
        image: "Pro-Plan-Adulto-Razas-Pequenas.png",
        price: "$3790",
        description: "Provee nutrición de avanzada que ayuda a los perros de razas pequeñas a mantenerse fuertes y llenos de vitalidad - 15kg"
    },
    {
        name: "PRO PLAN PUPPY SMALL BREED",
        image: "Pro-Plan-Puppy-Small-Breed.png",
        price: "$4120",
        description: "Reforzar los sistemas naturales de proteccíon de tu cachorro y  satisfacer las necesidades metabólicas especificas basadas en el tamaño de su raza - 7,5kg "
    },
    {
        name: "PRO PLAN PUPPY LARGE BREED",
        image: "Pro-Plan-Puppy-Large-Breed-1.png",
        price: "$6790",
        description: "Reforzar los sistemas naturales de proteccíon de tu perro y  satisfacer las necesidades metabólicas especificas basadas en el tamaño de su raza - 7,5kg"
    },
    {
        name: "PRO PLAN PUPPY COMPLETE",
        image: "Pro-Plan-Puppy-Medium-Breed.png",
        price: "$6790",
        description:" Alimento balanceado super premium para perros de razas medianas hasta los 15 meses de edad-15kg"
    },
]

const snacks = [
    {
        name: "DONA CHICA",
        image: "dona-chica.png" ,
        price: "$110",
        description: "Comestibles de cuero ideal para la limpieza dental y estomacal. Presentación chico."
    },
    {
        name: "HUESO DE CUERO",
        image: "hueso-de-cuero.png" ,
        price: "$380",
        description:"descripcion snacks"
    },
    {
        name: "MINI ROLL (10 u)",
        image: "mini-roll.png" ,
        price: "$600",
        description:"descripcion snacks"
    },
    {
        name: "PEDIGREE RODEO SABOR CARNE",
        image: "Renders-Rodeo-CARNE.png" ,
        price: "$140",
        description:"snacks irresistible sabon carne, contiene 4 unidades - 70gr"
    },
    {
        name: "PEDIGREE RODEO SABOR POLLO",
        image: "Renders-Rodeo-POLLO.png" ,
        price: "$140",
        description:"snacks irresistible sabon pollo, contiene 4 unidades - 70gr"
    },
    {
        name: "BISCUITS DE POLLO",
        image: "Biscuits-de-Pollo-x-500.png" ,
        price: "$130",
        description:"Biscuits sabor pollo horneadas - 120gr"
    },
    {
        name: "CUIDADO DENTAL DIARIO DENTAL CLEAN (400gr)",
        image: "Cuidado-Dental-Diario-Dental-Clean.png" ,
        price: "$640",
        description:"descripcion snacks"
    },
    {
        name: "CUIDADO DENTAL DIARIO DENTAL MILK STICKS ",
        image: "Cuidado-Dental-Diario-Dental-Milk-Sticks.png" ,
        price: "$640",
        description:"Ayuda a combatir el sarro, fortalece la denticion, textura porosa que limpia profundamente los dientes, libre de subproductos - 400gr"
    },
    {
        name: "CUIDADO DENTAL DIARIO DENTAL STICKS ",
        image: "Cuidado-Dental-Diario-Dental-Sticks.png" ,
        price: "$640",
        description:"Ayuda a combatir el sarro, fortalece dientes y huesos, aporta extra calcio, libre de subproductos - 400gr"
    },
    {
        name: "SNACK SALUDABLE DE POLLO GRILLÉ ",
        image: "Snack-Saludable-de-Pollo-Grille.png" ,
        price: "$800",
        description: "Ingredientes aptos para el consumo humano, libre de soja, libre de subproductos -400gr"
    }
]

const juguetes = [
    {
        name: "juguete para perros KONG Classic",
        image: "kong-classic.png" ,
        price: "$680",
        description: "Es para morder, para aventar, rebotar, jugar, entretener a tu perro y mantenerlo ocupado."

    },
    {
        name: "Juguete KONG Extreme",
        image: "kong-extreme.png" ,
        price: "$680",
        description: "El juguete para perros KONG Extreme es un ejemplo del caucho más resistente de KONG. El KONG Extreme está diseñado para los masticadores más tenaces, aporta beneficios y ayuda a satisfacer las necesidades instintivas de los perros."
    },
    {
        name: "Juguetes KONG Cachorros/Puppy",
        image: "kong-cachorrospuppy.png" ,
        price: "$680"
    },
    {
        name: "Pelota KONG Ball",
        image: "kong-ball.png" ,
        price: "$560"
    },
    {
        name: "Hueso KONG Puppy/Cachorro",
        image: "kong-puppycachorro.png" ,
        price: "$790"
    },
    {
        name: "Ice - Aro Congelado",
        image: "ice-aro-congelado.png" ,
        price: "$1420"
    },
    {
        name: "Soga 5 Nudos",
        image: "soga-nudos.png" ,
        price: "$1580"
    },
]

const higiene = [
    {
        name: "SHAMPOO A BASE DE ALOE & AVENA",
        image: "Shampoo-a-base-de-Aloe-Avena.png",
        price: "$340",
        description: "Para mascotas ha sido formulado para proveer un rápido y prolongado alivio del prurito - 200gr"
    },
    {
        name: "SHAMPOO A BASE DE PEROXIDO DE BENZOLIO",
        image: "Shampoo-a-base-de-Peroxido-de-Benzolio.png",
        price: "$390",
        description: "Se utiliza en Piodermias, Procesos seborreicos oleosos, Foliculitis, Impétigo, Acné felino-200gr"

    },
    {
        name: "SHAMPOO ANTISEBORREICO",
        image: "Shampoo-Antiseborreico.png",
        price: "$340",
        description: "Shampoo potenciado antiseborreico de higiene general, antiséptico, astringente, antienzimático y queratolitico. Sirve para tratamientos contra la microbicida, fungicida y sarna."

    },
    {
        name: "SHAMPOO ANTISEPTICO PH CONTROLADO PARA CACHORROS",
        image: "Shampoo-Antiseptico-ph-Controlado-para-Cachorros.png",
        price: "$260",
        description: "El shampoo para cachorros sirve para la higiene en general de cachorros y animales de piel delicada, dermatitis seca descamativa. Antiséptico y desodorizante. Usado en caninos y felinos, especialmente indicado para expositores."
    },
    {
        name: "SHAMPOO CON ALGAS VITALIZADOR ABRILLANTADOR",
        image: "Shampoo-con-Algas.png",
        price: "$330",
        description: " Shampoo de higiene diaria da brillo y salud al pelaje de tus mascotas, tiene un efecto refrescante y suavizado del pelaje. Proporciona hidratación gracias a sus ingredientes de algas – aloe – avena – menta. Además lo mantiene protegido de pulgas y garrapatas.-250ml"
    },
    {
        name: "SHAMPOO AQUA ECTO GARRAPATICIDA",
        image: "Shampoo-con-Ectol-Garrapaticida.png",
        price: "$330",
        description: "es humectante, y se usa para cachorros (caninos y felinos) mayores de 30 días y adultos cuya dermatitis alérgica por pulgas puedan conducir a dermatosis descamativas - 250ml"
    },
    {
        name: "SHAMPOO DOUBLE CON ENJUAGUE 2 EN 1",
        image: "Shampoo-con-Enjuague-2-en-1.png",
        price: "$340",
        description: "Baños higienicos periodicos. control de garrapatas, pulgas y piojos.en caninos mayores de 4 meses de edad.No usar en cachorros de menos de 4 meses ni en gatos. Repetir el baño cada 7 dias. tres cucharadas soperas son suficientes para realizar el baño de un canino mediano con pelo de mediana longitud.-250ml"
    },
    {
        name: "SHAMPOO CON GLICERINA",
        image: "Shampoo-con-Glicerina.png",
        price: "$260",
        description: "Esencial para lograr una revitalización del manto pilífero.Vitalizador y abrillantador. Caninos y felinos. Dejar actuar 5 minutos. Ph controlado ideal para todo tipo de pieles.Uso como prelavado para posterior uso de shampoo de belleza, tonalizador o tratamiento - 250ml"
    }]

export{
    productos,
    servicios,
    alimentos,
    snacks,
    juguetes,
    higiene
}
