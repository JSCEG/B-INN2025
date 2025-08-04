const spacesData = [
    {
        id: 1,
        title: "Departamento en Acapulco de Juárez",
        price: "$2,910 MXN",
        rating: "4.98",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
        category: "oficinas",
        location: "Acapulco de Juárez, México",
        guests: 4,
        bedrooms: 2,
        beds: 3,
        baths: 2,
        host: "Juan Pérez",
        host_avatar: "https://via.placeholder.com/50x50?text=Host",
        description: "Esta es una descripción detallada de la propiedad. Aquí puedes hablar sobre sus características únicas, el ambiente, lo que la hace especial, y cualquier otra información relevante para los huéspedes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        amenities: ["Wifi", "Cocina", "Aire Acondicionado", "Piscina"],
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1502672260266-fe1065d95d33?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop"
        ],
        reviews: [
            { user: "Ana G.", date: "Julio 2025", text: "¡Una estancia maravillosa! La propiedad es hermosa y el anfitrión muy amable." },
            { user: "Carlos R.", date: "Junio 2025", text: "Excelente ubicación y muy limpio. ¡Definitivamente volvería!" }
        ]
    },
    {
        id: 2,
        title: "Condominio en Acapulco de Juárez",
        price: "$2,794 MXN",
        rating: "5.0",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
        category: "oficinas",
        location: "Acapulco de Juárez, México",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        host: "María López",
        host_avatar: "https://via.placeholder.com/50x50?text=Host",
        description: "Condominio moderno y acogedor con vistas espectaculares. Ideal para parejas o viajeros de negocios. Cerca de las principales atracciones y restaurantes. Disfruta de la tranquilidad y el confort.",
        amenities: ["Wifi", "Cocina", "Aire Acondicionado"],
        images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1502672260266-fe1065d95d33?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop"
        ],
        reviews: [
            { user: "Pedro S.", date: "Agosto 2025", text: "Un lugar increíble, superó mis expectativas. Muy recomendable." }
        ]
    },
    {
        id: 3,
        title: "Departamento en Acapulco de Juárez",
        price: "$4,189 MXN",
        rating: "4.76",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
        category: "estacionamientos",
        location: "Acapulco de Juárez, México",
        guests: 6,
        bedrooms: 3,
        beds: 4,
        baths: 2.5,
        host: "Roberto G.",
        host_avatar: "https://via.placeholder.com/50x50?text=Host",
        description: "Amplio departamento ideal para familias o grupos grandes. Cuenta con todas las comodidades para una estancia placentera. Ubicado en una zona tranquila y segura.",
        amenities: ["Wifi", "Cocina", "Estacionamiento", "Lavadora"],
        images: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1502672260266-fe1065d95d33?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop"
        ],
        reviews: [
            { user: "Laura M.", date: "Julio 2025", text: "Muy cómodo y espacioso. Perfecto para nuestras vacaciones familiares." }
        ]
    },
    {
        id: 4,
        title: "Condominio en Acapulco de Juárez",
        price: "$2,828 MXN",
        rating: "4.87",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
        category: "eventos",
        location: "Acapulco de Juárez, México",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        host: "Sofía P.",
        host_avatar: "https://via.placeholder.com/50x50?text=Host",
        description: "Condominio con excelente ubicación y todas las comodidades. Ideal para una escapada romántica o un viaje de negocios. Disfruta de la cercanía a la playa y los mejores restaurantes.",
        amenities: ["Wifi", "Cocina", "Aire Acondicionado", "TV"],
        images: [
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1502672260266-fe1065d95d33?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop"
        ],
        reviews: [
            { user: "Diego F.", date: "Agosto 2025", text: "Muy bonito lugar, tal como se describe. La comunicación con la anfitriona fue excelente." }
        ]
    },
    {
        id: 5,
        title: "Condominio en Acapulco de Juárez",
        price: "$5,528 MXN",
        rating: "4.85",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
        category: "eventos",
        location: "Acapulco de Juárez, México",
        guests: 8,
        bedrooms: 4,
        beds: 6,
        baths: 3,
        host: "Gabriela V.",
        host_avatar: "https://via.placeholder.com/50x50?text=Host",
        description: "Lujoso condominio con amplios espacios y todas las comodidades para eventos especiales o reuniones familiares. Disfruta de la piscina privada y las impresionantes vistas al mar.",
        amenities: ["Wifi", "Cocina gourmet", "Piscina", "Jacuzzi", "Área de eventos"],
        images: [
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1502672260266-fe1065d95d33?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop"
        ],
        reviews: [
            { user: "Fernando L.", date: "Julio 2025", text: "El lugar perfecto para nuestro evento, todo salió de maravilla. Muy recomendado." }
        ]
    },
    {
        id: 6,
        title: "Alojamiento vacacional en Acapulco de Juárez",
        price: "$2,968 MXN",
        rating: "4.94",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
        category: "especiales",
        location: "Acapulco de Juárez, México",
        guests: 3,
        bedrooms: 2,
        beds: 2,
        baths: 1.5,
        host: "Ricardo M.",
        host_avatar: "https://via.placeholder.com/50x50?text=Host",
        description: "Acogedor alojamiento vacacional con todo lo necesario para una estancia relajante. Disfruta de la cercanía a la playa y las actividades acuáticas. Ideal para familias pequeñas.",
        amenities: ["Wifi", "Cocina", "Acceso a la playa", "Estacionamiento"],
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1502672260266-fe1065d95d33?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop"
        ],
        reviews: [
            { user: "Elena C.", date: "Agosto 2025", text: "Un lugar muy agradable y tranquilo. Perfecto para descansar y disfrutar del mar." }
        ]
    },
    {
        id: 7,
        title: "Residencia en Acapulco de Juárez",
        price: "$4,202 MXN",
        rating: "4.86",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
        category: "especiales",
        location: "Acapulco de Juárez, México",
        guests: 10,
        bedrooms: 5,
        beds: 7,
        baths: 4,
        host: "Daniel S.",
        host_avatar: "https://via.placeholder.com/50x50?text=Host",
        description: "Impresionante residencia con todas las comodidades de lujo. Ideal para grandes grupos o eventos exclusivos. Disfruta de la privacidad y el confort en un entorno espectacular.",
        amenities: ["Wifi", "Cocina gourmet", "Piscina privada", "Cine en casa", "Gimnasio"],
        images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1502672260266-fe1065d95d33?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop",
            "https://images.unsplash.com/photo-1505691935518-a777b0270f09?w=150&h=100&fit=crop"
        ],
        reviews: [
            { user: "Isabel G.", date: "Julio 2025", text: "Una experiencia inolvidable, la casa es espectacular y el servicio impecable." }
        ]
    },
    // APARTAMENTOS
    {
        id: 8,
        title: "Apartamento moderno en Zona Rosa",
        price: "$1,850 MXN",
        rating: "4.92",
        image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=400&h=300&fit=crop",
        category: "apartamentos",
        location: "Ciudad de México, México",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        host: "Carmen R.",
        host_avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
        description: "Apartamento moderno en el corazón de la Zona Rosa. Perfecto para explorar la ciudad.",
        amenities: ["Wifi", "Cocina", "Aire Acondicionado", "Gym"],
        images: [
            "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1502672260266-fe1065d95d33?w=150&h=100&fit=crop"
        ],
        reviews: [
            { user: "Miguel A.", date: "Agosto 2025", text: "Excelente ubicación y muy cómodo." }
        ]
    },
    {
        id: 9,
        title: "Apartamento con vista al mar",
        price: "$3,200 MXN",
        rating: "4.88",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
        category: "apartamentos",
        location: "Cancún, México",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 2,
        host: "Andrea M.",
        host_avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        description: "Hermoso apartamento frente al mar con todas las comodidades.",
        amenities: ["Wifi", "Cocina", "Piscina", "Playa privada"],
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop"
        ],
        reviews: [
            { user: "José L.", date: "Julio 2025", text: "Las vistas son increíbles, muy recomendado." }
        ]
    },
    {
        id: 10,
        title: "Apartamento céntrico en Polanco",
        price: "$2,400 MXN",
        rating: "4.95",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
        category: "apartamentos",
        location: "Ciudad de México, México",
        guests: 3,
        bedrooms: 1,
        beds: 2,
        baths: 1,
        host: "Fernando K.",
        host_avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        description: "Elegante apartamento en Polanco, cerca de restaurantes y museos.",
        amenities: ["Wifi", "Cocina", "Aire Acondicionado", "Seguridad 24h"],
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop"
        ],
        reviews: [
            { user: "Patricia S.", date: "Agosto 2025", text: "Perfecto para explorar la ciudad." }
        ]
    },
    // CASAS
    {
        id: 11,
        title: "Casa familiar en Coyoacán",
        price: "$2,800 MXN",
        rating: "4.91",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
        category: "casas",
        location: "Ciudad de México, México",
        guests: 6,
        bedrooms: 3,
        beds: 4,
        baths: 2,
        host: "Alejandra P.",
        host_avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
        description: "Acogedora casa familiar en el histórico barrio de Coyoacán.",
        amenities: ["Wifi", "Cocina completa", "Jardín", "Estacionamiento"],
        images: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop"
        ],
        reviews: [
            { user: "Roberto C.", date: "Julio 2025", text: "Casa muy cómoda y bien ubicada." }
        ]
    },
    {
        id: 12,
        title: "Casa de playa en Puerto Vallarta",
        price: "$4,500 MXN",
        rating: "4.97",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
        category: "casas",
        location: "Puerto Vallarta, México",
        guests: 8,
        bedrooms: 4,
        beds: 5,
        baths: 3,
        host: "Carlos V.",
        host_avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
        description: "Espectacular casa frente al mar con piscina privada.",
        amenities: ["Wifi", "Cocina gourmet", "Piscina", "Acceso directo a playa"],
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=500&fit=crop"
        ],
        reviews: [
            { user: "María F.", date: "Agosto 2025", text: "Una casa de ensueño, perfecta para vacaciones." }
        ]
    },
    {
        id: 13,
        title: "Casa colonial en San Miguel de Allende",
        price: "$3,600 MXN",
        rating: "4.89",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
        category: "casas",
        location: "San Miguel de Allende, México",
        guests: 5,
        bedrooms: 3,
        beds: 3,
        baths: 2,
        host: "Isabella R.",
        host_avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        description: "Hermosa casa colonial con arquitectura tradicional mexicana.",
        amenities: ["Wifi", "Cocina", "Patio", "Chimenea"],
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop"
        ],
        reviews: [
            { user: "David M.", date: "Julio 2025", text: "Lugar mágico con mucha historia." }
        ]
    },
    // VILLAS
    {
        id: 14,
        title: "Villa de lujo en Los Cabos",
        price: "$8,900 MXN",
        rating: "4.99",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop",
        category: "villas",
        location: "Los Cabos, México",
        guests: 12,
        bedrooms: 6,
        beds: 8,
        baths: 5,
        host: "Rodrigo S.",
        host_avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        description: "Villa de lujo con vistas espectaculares al océano Pacífico.",
        amenities: ["Wifi", "Cocina gourmet", "Piscina infinita", "Spa", "Chef privado"],
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=500&fit=crop"
        ],
        reviews: [
            { user: "Valentina L.", date: "Agosto 2025", text: "Una experiencia de lujo incomparable." }
        ]
    },
    {
        id: 15,
        title: "Villa tropical en Tulum",
        price: "$6,200 MXN",
        rating: "4.94",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
        category: "villas",
        location: "Tulum, México",
        guests: 8,
        bedrooms: 4,
        beds: 5,
        baths: 4,
        host: "Camila T.",
        host_avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
        description: "Villa tropical rodeada de selva con cenote privado.",
        amenities: ["Wifi", "Cocina", "Cenote privado", "Yoga deck", "Bicicletas"],
        images: [
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop"
        ],
        reviews: [
            { user: "Sebastián G.", date: "Julio 2025", text: "Conexión perfecta con la naturaleza." }
        ]
    },
    // LOFTS
    {
        id: 16,
        title: "Loft industrial en Roma Norte",
        price: "$2,100 MXN",
        rating: "4.87",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
        category: "lofts",
        location: "Ciudad de México, México",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        host: "Mateo A.",
        host_avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
        description: "Loft de estilo industrial en el trendy barrio de Roma Norte.",
        amenities: ["Wifi", "Cocina", "Aire Acondicionado", "Terraza"],
        images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
        ],
        reviews: [
            { user: "Sofía H.", date: "Agosto 2025", text: "Diseño increíble y muy bien ubicado." }
        ]
    },
    {
        id: 17,
        title: "Loft con vista panorámica",
        price: "$3,800 MXN",
        rating: "4.93",
        image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=400&h=300&fit=crop",
        category: "lofts",
        location: "Guadalajara, México",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 2,
        host: "Emilio R.",
        host_avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        description: "Loft moderno con vistas panorámicas de la ciudad.",
        amenities: ["Wifi", "Cocina", "Balcón", "Gym del edificio"],
        images: [
            "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=500&fit=crop"
        ],
        reviews: [
            { user: "Lucía P.", date: "Julio 2025", text: "Las vistas son espectaculares." }
        ]
    },
    // ESTUDIOS
    {
        id: 18,
        title: "Estudio acogedor en Condesa",
        price: "$1,200 MXN",
        rating: "4.85",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
        category: "estudios",
        location: "Ciudad de México, México",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        host: "Natalia V.",
        host_avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        description: "Estudio acogedor perfecto para una escapada urbana.",
        amenities: ["Wifi", "Kitchenette", "Aire Acondicionado"],
        images: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop"
        ],
        reviews: [
            { user: "Andrés M.", date: "Agosto 2025", text: "Pequeño pero muy funcional." }
        ]
    },
    {
        id: 19,
        title: "Estudio minimalista en Playa del Carmen",
        price: "$1,800 MXN",
        rating: "4.90",
        image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=300&fit=crop",
        category: "estudios",
        location: "Playa del Carmen, México",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        host: "Diego F.",
        host_avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
        description: "Estudio minimalista a pasos de la playa.",
        amenities: ["Wifi", "Kitchenette", "Piscina", "Cerca de la playa"],
        images: [
            "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=500&fit=crop"
        ],
        reviews: [
            { user: "Valeria C.", date: "Julio 2025", text: "Perfecto para una escapada romántica." }
        ]
    },
    // MÁS OFICINAS
    {
        id: 20,
        title: "Oficina ejecutiva en Santa Fe",
        price: "$1,500 MXN",
        rating: "4.82",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop",
        category: "oficinas",
        location: "Ciudad de México, México",
        guests: 4,
        bedrooms: 0,
        beds: 0,
        baths: 1,
        host: "Ricardo L.",
        host_avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        description: "Oficina moderna en el distrito financiero de Santa Fe.",
        amenities: ["Wifi de alta velocidad", "Sala de juntas", "Café", "Estacionamiento"],
        images: [
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=500&fit=crop"
        ],
        reviews: [
            { user: "Ana B.", date: "Agosto 2025", text: "Excelente para reuniones de trabajo." }
        ]
    },
    {
        id: 21,
        title: "Coworking en Polanco",
        price: "$800 MXN",
        rating: "4.78",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop",
        category: "oficinas",
        location: "Ciudad de México, México",
        guests: 2,
        bedrooms: 0,
        beds: 0,
        baths: 1,
        host: "Mónica S.",
        host_avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
        description: "Espacio de coworking moderno y colaborativo.",
        amenities: ["Wifi", "Impresora", "Café ilimitado", "Salas de llamadas"],
        images: [
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=500&fit=crop"
        ],
        reviews: [
            { user: "Pablo R.", date: "Julio 2025", text: "Ambiente muy productivo." }
        ]
    },
    // MÁS ESTACIONAMIENTOS
    {
        id: 22,
        title: "Estacionamiento cubierto Centro",
        price: "$200 MXN",
        rating: "4.65",
        image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=400&h=300&fit=crop",
        category: "estacionamientos",
        location: "Ciudad de México, México",
        guests: 1,
        bedrooms: 0,
        beds: 0,
        baths: 0,
        host: "Jorge M.",
        host_avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
        description: "Estacionamiento seguro en el centro histórico.",
        amenities: ["Seguridad 24h", "Cubierto", "Cámaras", "Acceso fácil"],
        images: [
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&h=500&fit=crop"
        ],
        reviews: [
            { user: "Carmen G.", date: "Agosto 2025", text: "Muy seguro y bien ubicado." }
        ]
    },
    {
        id: 23,
        title: "Cochera privada en Roma",
        price: "$150 MXN",
        rating: "4.70",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        category: "estacionamientos",
        location: "Ciudad de México, México",
        guests: 1,
        bedrooms: 0,
        beds: 0,
        baths: 0,
        host: "Luis A.",
        host_avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        description: "Cochera privada en edificio residencial.",
        amenities: ["Acceso controlado", "Techado", "Vigilancia"],
        images: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop"
        ],
        reviews: [
            { user: "Teresa H.", date: "Julio 2025", text: "Perfecto para estancias largas." }
        ]
    },
    // VIP/PREMIUM EXCLUSIVE SPACES
    {
        id: 24,
        title: "Villa Presidencial Los Cabos",
        price: "$15,000 MXN",
        rating: "5.0",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop",
        category: "villas",
        location: "Los Cabos, México",
        guests: 16,
        bedrooms: 8,
        beds: 12,
        baths: 10,
        host: "Alejandro Elite",
        host_avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        description: "Villa presidencial de ultra lujo con servicio de mayordomo 24/7.",
        amenities: ["Chef privado", "Mayordomo", "Spa privado", "Helipuerto", "Yate incluido"],
        isVIP: true,
        isPremium: true,
        exclusiveLevel: "PLATINUM",
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=500&fit=crop"
        ],
        reviews: [
            { user: "VIP Guest", date: "Agosto 2025", text: "Una experiencia incomparable de lujo absoluto." }
        ]
    },
    {
        id: 25,
        title: "Penthouse Exclusivo Polanco",
        price: "$12,500 MXN",
        rating: "4.99",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
        category: "apartamentos",
        location: "Ciudad de México, México",
        guests: 8,
        bedrooms: 4,
        beds: 6,
        baths: 5,
        host: "Sofia Premium",
        host_avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
        description: "Penthouse de lujo con terraza privada y vista panorámica de la ciudad.",
        amenities: ["Terraza privada", "Jacuzzi", "Cine privado", "Concierge", "Valet parking"],
        isVIP: true,
        isPremium: true,
        exclusiveLevel: "GOLD",
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop"
        ],
        reviews: [
            { user: "Premium Member", date: "Julio 2025", text: "Servicio excepcional y vistas increíbles." }
        ]
    },
    {
        id: 26,
        title: "Oficina Ejecutiva Premium",
        price: "$5,000 MXN",
        rating: "4.97",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop",
        category: "oficinas",
        location: "Santa Fe, México",
        guests: 12,
        bedrooms: 0,
        beds: 0,
        baths: 3,
        host: "Corporate Elite",
        host_avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
        description: "Oficina ejecutiva de lujo con servicios premium incluidos.",
        amenities: ["Asistente ejecutiva", "Sala de juntas premium", "Catering", "Chofer", "Wifi empresarial"],
        isVIP: true,
        isPremium: false,
        exclusiveLevel: "SILVER",
        images: [
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=500&fit=crop"
        ],
        reviews: [
            { user: "Business VIP", date: "Agosto 2025", text: "Perfecto para reuniones de alto nivel." }
        ]
    }
];