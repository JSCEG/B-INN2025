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
    }
];