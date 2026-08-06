import {
    Bike,
    Gamepad2,
    Gift,
    Smartphone,
    Store,
    Ticket,
} from "lucide-react";

export const luckyDrawConfig = {
    title: "The Mega Lucky Draw",
    description:
        "Spend PKR 990 or more in a single order and receive an exclusive entry code for a chance to win exciting prizes.",
    minimumOrder: 990,

    /*
        Use this format:
        YYYY-MM-DDTHH:mm:ss+05:00

        Current example:
        15 September 2026 at 8:00 PM Pakistan time
    */
    drawDate: "2026-09-15T20:00:00+05:00",

    announcementText:
        "Winners will be announced live on 15 September 2026.",

    cta: {
        label: "Visit Us Today",
        href: "#contact",
    },
};

export const luckyDrawPrizes = [
    {
        id: 1,
        title: "Honda Activa 7G",
        description:
            "Grand prize city scooter for stylish and comfortable daily travel.",
        quantity: 1,
        label: "Grand Prize",
        icon: Bike,
        featured: true,
    },
    {
        id: 2,
        title: "Honda SP 125 Bike",
        description:
            "A premium commuter motorcycle built for comfort and performance.",
        quantity: 1,
        label: "Grand Prize",
        icon: Bike,
        featured: true,
    },
    {
        id: 3,
        title: "PlayStation 5 Slim",
        description:
            "Next-generation entertainment and gaming console.",
        quantity: 1,
        label: "Popular Prize",
        icon: Gamepad2,
        featured: false,
    },
    {
        id: 4,
        title: "iPhone 17 Pro Max",
        description:
            "Premium flagship smartphone for one lucky winner.",
        quantity: 1,
        label: "Premium Prize",
        icon: Smartphone,
        featured: false,
    },
    {
        id: 5,
        title: "PKR 10,000 Gift Cards",
        description:
            "Gift vouchers redeemable for café and shopping experiences.",
        quantity: 5,
        label: "Multiple Winners",
        icon: Ticket,
        featured: false,
    },
    {
        id: 6,
        title: "Surprise Bumper Box",
        description:
            "A mystery collection of premium technology and Boba O'Clock merchandise.",
        quantity: 1,
        label: "Mystery Prize",
        icon: Gift,
        featured: false,
    },
];

export const luckyDrawRules = [
    {
        id: 1,
        title: "Place a qualifying order",
        description: "Spend at least PKR 990 in one bill.",
        icon: Store,
    },
    {
        id: 2,
        title: "Receive your entry code",
        description:
            "Collect your official lucky draw coupon or entry code.",
        icon: Ticket,
    },
    {
        id: 3,
        title: "Keep your coupon safe",
        description:
            "The winning coupon must be presented when claiming a prize.",
        icon: Gift,
    },
];