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
        price: 5690,
        description:"descripcion"
    },
    {
        name: "ROYAL CANIN MAXI ADULT STERILIZED",
        image: "ROYAL-CANIN-MAXI-ADULT-STERILIZED.png",
        price: 5390,
        description:"descripcion snacks"
    },
    {
        name: "ROYAL CANIN MAXI ADULT WEIGHT CARE",
        image: "Royal-Canin-maxi-adult-weight-care.png",
        price: 5690,
        description:"descripcion snacks"
    },
    {
        name: "ROYAL CANIN MEDIUM ADULT DERMACONFORT",
        image: "ROYAL-CANIN-MEDIUM-ADULT-DERMACONFORT.png",
        price: 5690,
        description:"descripcion snacks"
    },
    {
        name: "ROYAL CANIN MEDIUM ADULT STERILIZED",
        image: "ROYAL-CANIN-MEDIUM-ADULT-STERILIZED.png",
        price: 5690,
        description:"descripcion snacks"
    },
    {
        name: "ROYAL CANIN MEDIUM ADULT WEIGHT CARE",
        image: "Royal-Canin-medium-adult-weight-care.png",
        price: 5690,
        description:"descripcion snacks"
    },
    {
        name: "PRO PLAN ACTIVE MIND RAZAS MEDIANAS Y GRANDES",
        image: "Pro-Plan-Active-Mind-Razas-Medianas-y-Grandes.png",
        price: 6790,
        description:"descripcion snacks"
    },
    {
        name: "PRO PLAN ADULTO RAZAS GRANDES",
        image: "Pro-Plan-Adulto-Raza-Grande.png",
        price: 6190,
        description:"descripcion snacks"
    },
    {
        name: "PRO PLAN ADULTO RAZAS MEDIANAS",
        image: "Pro-Plan-Adulto-Razas-Medianas.png",
        price: 6190,
        description:"descripcion snacks"
    },
    {
        name: "PRO PLAN ADULTO RAZAS PEQUEÑAS",
        image: "Pro-Plan-Adulto-Razas-Pequenas.png",
        price: 3790,
        description:"descripcion snacks"
    },
    {
        name: "PRO PLAN PUPPY SMALL BREED",
        image: "Pro-Plan-Puppy-Small-Breed.png",
        price: 4120,
        description:"descripcion snacks"
    },
    {
        name: "PRO PLAN PUPPY LARGE BREED",
        image: "Pro-Plan-Puppy-Large-Breed-1.png",
        price: 6790,
        description:"descripcion snacks"
    },
    {
        name: "PRO PLAN PUPPY COMPLETE",
        image: "Pro-Plan-Puppy-Medium-Breed.png",
        price: 6790,
        description:"descripcion snacks"
    },
]

const snacks = [
    {
        name: "DONA CHICA",
        image: "dona-chica.png" ,
        price: 110,
        description:"descripcion snacks"
    },
    {
        name: "HUESO DE CUERO",
        image: "hueso-de-cuero.png" ,
        price: 380,
        description:"descripcion snacks"
    },
    {
        name: "MINI ROLL (10 u)",
        image: "mini-roll.png" ,
        price: 600,
        description:"descripcion snacks"
    },
    {
        name: "PEDIGREE RODEO SABOR CARNE",
        image: "Renders-Rodeo-CARNE.png" ,
        price: 140,
        description:"snacks irresistible sabon carne, contiene 4 unidades-70grs"
    },
    {
        name: "PEDIGREE RODEO SABOR POLLO",
        image: "Renders-Rodeo-POLLO.png" ,
        price: 140,
        description:"snacks irresistible sabon pollo, contiene 4 unidades-70grs"
    },
    {
        name: "BISCUITS DE POLLO (120gr)",
        image: "Biscuits-de-Pollo-x-500.png" ,
        price: 130,
        description:"descripcion snacks"
    },
    {
        name: "CUIDADO DENTAL DIARIO DENTAL CLEAN (400gr)",
        image: "Cuidado-Dental-Diario-Dental-Clean.png" ,
        price: 640,
        description:"descripcion snacks"
    },
    {
        name: "CUIDADO DENTAL DIARIO DENTAL MILK STICKS (400gr)",
        image: "Cuidado-Dental-Diario-Dental-Milk-Sticks.png" ,
        price: 640,
        description:"descripcion snacks"
    },
    {
        name: "CUIDADO DENTAL DIARIO DENTAL STICKS (400gr)",
        image: "Cuidado-Dental-Diario-Dental-Sticks.png" ,
        price: 640,
        description:"descripcion snacks"
    },
    {
        name: "SNACK SALUDABLE DE POLLO GRILLÉ (400gr)",
        image: "Snack-Saludable-de-Pollo-Grille.png" ,
        price: 800,
        description:"descripcion snacks"
    }
]

const juguetes = [
    {
        name: "juguete para perros KONG Classic",
        image: "kong-classic.png" ,
        price: 680
    },
    {
        name: "Juguete KONG Extreme",
        image: "kong-extreme.png" ,
        price: 680
    },
    {
        name: "Juguetes KONG Cachorros/Puppy",
        image: "kong-cachorrospuppy.png" ,
        price: 680
    },
    {
        name: "Pelota KONG Ball",
        image: "kong-ball.png" ,
        price: 560
    },
    {
        name: "Hueso KONG Puppy/Cachorro",
        image: "kong-puppycachorro.png" ,
        price: 790
    },
    {
        name: "Ice - Aro Congelado",
        image: "ice-aro-congelado.png" ,
        price: 1420
    },
    {
        name: "Soga 5 Nudos",
        image: "soga-nudos.png" ,
        price: 1580
    },
]

const higiene = [
    {
        name: "SHAMPOO A BASE DE ALOE & AVENA",
        image: "Shampoo-a-base-de-Aloe-Avena.png",
        price: 340
    },
    {
        name: "SHAMPOO A BASE DE PEROXIDO DE BENZOLIO",
        image: "Shampoo-a-base-de-Peroxido-de-Benzolio.png",
        price: 390
    },
    {
        name: "SHAMPOO ANTISEBORREICO",
        image: "Shampoo-Antiseborreico.png",
        price: 340
    },
    {
        name: "SHAMPOO ANTISEPTICO PH CONTROLADO PARA CACHORROS",
        image: "Shampoo-Antiseptico-ph-Controlado-para-Cachorros.png",
        price: 260
    },
    {
        name: "SHAMPOO CON ALGAS VITALIZADOR ABRILLANTADOR",
        image: "Shampoo-con-Algas.png",
        price: 330
    },
    {
        name: "SHAMPOO AQUA ECTO GARRAPATICIDA",
        image: "Shampoo-con-Ectol-Garrapaticida.png",
        price: 330
    },
    {
        name: "SHAMPOO DOUBLE CON ENJUAGUE 2 EN 1",
        image: "Shampoo-con-Enjuague-2-en-1.png",
        price: 340
    },
    {
        name: "SHAMPOO CON GLICERINA",
        image: "Shampoo-con-Glicerina.png",
        price: 260
    }
]

export{
    productos,
    servicios,
    alimentos,
    snacks,
    juguetes,
    higiene
}
