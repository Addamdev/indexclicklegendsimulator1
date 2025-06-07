// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Notification messages array
const notifications = [
    "الحمدلله على كل نعمة",
    "اللهم صل على سيدنا محمد",
    "سبحان الله وبحمده",
    "لا إله إلا الله",
    "استغفر الله العظيم",
    "اللهم بارك لنا في ما رزقتنا",
    "اللهم اهدنا واهد بنا",
    "اللهم ارزقنا من فضلك",
    "اللهم اغفر لنا وارحمنا",
    "اللهم اجعلنا من عبادك الصالحين",
    "اللهم صل وسلم على نبينا محمد",
    "سبحان الله والحمدلله ولا إله إلا الله والله أكبر",
    "اللهم إني أسألك العفو والعافية",
    "اللهم إني أعوذ بك من الهم والحزن",
    "اللهم إني أعوذ بك من العجز والكسل",
    "اللهم إني أعوذ بك من الجبن والبخل",
    "اللهم إني أعوذ بك من غلبة الدين وقهر الرجال",
    "اللهم إني أعوذ بك من فتنة النار وعذاب النار",
    "اللهم إني أعوذ بك من فتنة القبر وعذاب القبر",
    "اللهم إني أعوذ بك من فتنة المحيا والممات",
    "اللهم إني أعوذ بك من فتنة المسيح الدجال",
    "اللهم إني أعوذ بك من شر ما عملت ومن شر ما لم أعمل",
    "اللهم إني أعوذ بك من شر نفسي وشر الشيطان وشركه",
    "اللهم إني أعوذ بك من شر ما خلق وذرأ وبرأ",
    "اللهم إني أعوذ بك من شر كل ذي شر لا أطيق شره",
    "اللهم إني أعوذ بك من شر كل ذي شر أنت آخذ بناصيته",
    "اللهم إني أعوذ بك من شر كل ذي شر أنت آخذ بناصيته إن ربي على صراط مستقيم",
    "اللهم إني أعوذ بك من شر كل ذي شر أنت آخذ بناصيته إن ربي على صراط مستقيم إن ربي على صراط مستقيم"
];

// Function to show notification
function showNotification() {
    // Create notification element if it doesn't exist
    let notification = document.getElementById('floating-notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'floating-notification';
        document.body.appendChild(notification);
    }

    // Get random message
    const message = notifications[Math.floor(Math.random() * notifications.length)];
    
    // Update notification content
    notification.textContent = message;
    
    // Add show class for animation
    notification.classList.add('show');
    
    // Remove show class after animation
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Start notification cycle
setInterval(showNotification, 5000);

// Show first notification after 2 seconds
setTimeout(showNotification, 2000);

// Pet data with detailed information
const pets = [
    // Samurai Overlord Variants
    {
        id: 1,
        name: "Samurai Overlord",
        price: 14,
        image: "https://i.ibb.co/DD8m280c/2025-06-07-182842-removebg-preview.png",
        description: "حيوان الساموراي الذي يملك سيف الكاتانا الحاد.",
        rarity: "Mythical",
        variant: "Normal"
    },
    {
        id: 2,
        name: "Samurai Overlord",
        price: 17,
        image: "https://i.ibb.co/DD8m280c/2025-06-07-182842-removebg-preview.png",
        description: "حيوان الساموراي لامع, الذي يملك سيف الكاتانا الحاد.",
        rarity: "Mythical",
        variant: "Shiny"
    },
    {
        id: 3,
        name: "Samurai Overlord",
        price: 21,
        image: "https://i.ibb.co/DD8m280c/2025-06-07-182842-removebg-preview.png",
        description: "حيوان الساموراي قوس قزح, الذي يملك سيف الكاتانا الحاد.",
        rarity: "Mythical",
        variant: "Rainbow"
    },

    // Ancient Overlord Variants
    {
        id: 4,
        name: "Ancient Overlord",
        price: 16,
        image: "https://i.ibb.co/Wv0gKgz6/2025-06-07-183000-removebg-preview.png",
        description: "الطائر المدرع ويتميز بقوة جسدية عالية تمنحه التصدي.",
        rarity: "Mythical",
        variant: "Normal"
    },
    {
        id: 5,
        name: "Ancient Overlord",
        price: 20,
        image: "https://i.ibb.co/Wv0gKgz6/2025-06-07-183000-removebg-preview.png",
        description: "الطائر المدرع لامع, ويتميز بقوة جسدية عالية تمنحه التصدي.",
        rarity: "Mythical",
        variant: "Shiny"
    },
    {
        id: 6,
        name: "Ancient Overlord",
        price: 27,
        image: "https://i.ibb.co/Wv0gKgz6/2025-06-07-183000-removebg-preview.png",
        description: "الطائر المدرع قوس قزح, ويتميز بقوة جسدية عالية تمنحه التصدي.",
        rarity: "Mythical",
        variant: "Rainbow"
    },

    // 1M Easter Butterfly Variants
    {
        id: 1,
        name: "1M Easter Butterfly",
        price: 10,
        image: "https://i.ibb.co/LDkj3RWV/2025-06-07-171149-removebg-preview.png",
        description: "فراشة وردية من ايفينت الاستر لونها لامع ويسحر العيون.",
        rarity: "Legendary",
        variant: "Normal"
    },
    {
        id: 2,
        name: "1M Easter Butterfly",
        price: 11,
        image: "https://i.ibb.co/LDkj3RWV/2025-06-07-171149-removebg-preview.png",
        description: "فراشة وردية لامع, من ايفينت الاستر لونها لامع ويسحر العيون.",
        rarity: "Legendary",
        variant: "Shiny"
    },
    {
        id: 3,
        name: "1M Easter Butterfly",
        price: 17,
        image: "https://i.ibb.co/LDkj3RWV/2025-06-07-171149-removebg-preview.png",
        description: "فراشة وردية قوس قزح, من ايفينت الاستر لونها لامع ويسحر العيون.",
        rarity: "Legendary",
        variant: "Rainbow"
    },

    // 1M Easter Immortal Variants
    {
        id: 4,
        name: "1M Easter Immortal",
        price: 11,
        image: "https://i.ibb.co/QFj4md77/2025-06-07-180033-removebg-preview-1.png",
        description: "حجر وردي يتجمع عليه بتات ايفينت الاستر ويكونون طاقة قوية.",
        rarity: "Legendary",
        variant: "Normal"
    },
    {
        id: 5,
        name: "1M Easter Immortal",
        price: 12,
        image: "https://i.ibb.co/QFj4md77/2025-06-07-180033-removebg-preview-1.png",
        description: "حجر وردي لامع, يتجمع عليه بتات ايفينت الاستر ويكونون طاقة قوية.",
        rarity: "Legendary",
        variant: "Shiny"
    },
    {
        id: 6,
        name: "1M Easter Immortal",
        price: 18,
        image: "https://i.ibb.co/QFj4md77/2025-06-07-180033-removebg-preview-1.png",
        description: "حجر وردي قوس قزح, يتجمع عليه بتات ايفينت الاستر ويكونون طاقة قوية.",
        rarity: "Legendary",
        variant: "Rainbow"
    },

    // Wind Elemental Variants
    {
        id: 1,
        name: "Wind Elemental",
        price: 2,
        image: "https://cdn.discordapp.com/attachments/1379457025272058007/1380152587453726760/image-removebg-preview_-_2025-05-27T152351.png?ex=6842d6c2&is=68418542&hm=bd5eb5d35783db054f154a1be42b431196d35071da0672c94f18344b963aa59b&",
        description: "تنين الرياح النادر الذي يمتاز بخفة حركته وقدرته على التحليق وسط العواصف.",
        rarity: "Legendary",
        variant: "Normal"
    },
    {
        id: 2,
        name: "Wind Elemental",
        price: 5,
        image: "https://cdn.discordapp.com/attachments/1379457025272058007/1380152587453726760/image-removebg-preview_-_2025-05-27T152351.png?ex=6842d6c2&is=68418542&hm=bd5eb5d35783db054f154a1be42b431196d35071da0672c94f18344b963aa59b&",
        description: "تنين الرياح اللامع، يتألق تحت ضوء الشمس ويتميز بهجمات هوائية قوية.",
        rarity: "Legendary",
        variant: "Shiny"
    },
    {
        id: 3,
        name: "Wind Elemental",
        price: 7,
        image: "https://cdn.discordapp.com/attachments/1379457025272058007/1380152587453726760/image-removebg-preview_-_2025-05-27T152351.png?ex=6842d6c2&is=68418542&hm=bd5eb5d35783db054f154a1be42b431196d35071da0672c94f18344b963aa59b&",
        description: "تنين الرياح قوس قزح، يمتلك طاقة من كل عناصر الرياح السحرية.",
        rarity: "Legendary",
        variant: "Rainbow"
    },

    // Samurai Ninja Variants
    {
        id: 4,
        name: "Samurai Ninja",
        price: 3,
        image: "https://cdn.discordapp.com/attachments/1379457025272058007/1379822753787547720/image-removebg-preview_-_2025-05-27T152337.png?ex=68424c54&is=6840fad4&hm=53e1ba614b88865a3f903c6f9d4e883ee50da6f611f778c02f0ed710f90248d7&",
        description: "محارب أسطوري يجمع بين شجاعة الساموراي ودهاء النينجا في معركة واحدة.",
        rarity: "Legendary",
        variant: "Normal"
    },
    {
        id: 5,
        name: "Samurai Ninja",
        price: 6,
        image: "https://cdn.discordapp.com/attachments/1379457025272058007/1379822753787547720/image-removebg-preview_-_2025-05-27T152337.png?ex=68424c54&is=6840fad4&hm=53e1ba614b88865a3f903c6f9d4e883ee50da6f611f778c02f0ed710f90248d7&",
        description: "ساموراي لامع، درعه المتوهج يربك الأعداء ويعكس الهجمات.",
        rarity: "Legendary",
        variant: "Shiny"
    },
    {
        id: 6,
        name: "Samurai Ninja",
        price: 8,
        image: "https://cdn.discordapp.com/attachments/1379457025272058007/1379822753787547720/image-removebg-preview_-_2025-05-27T152337.png?ex=68424c54&is=6840fad4&hm=53e1ba614b88865a3f903c6f9d4e883ee50da6f611f778c02f0ed710f90248d7&",
        description: "نينجا قوس قزح، يتنقل بين العوالم بسرعة الضوء ويطلق هجمات متعددة الألوان.",
        rarity: "Legendary",
        variant: "Rainbow"
    },

    // Sand Phoenix Variants
    {
        id: 7,
        name: "Sand Phoenix",
        price: 4,
        image: "https://cdn.discordapp.com/attachments/1379457025272058007/1379823014643761162/image-removebg-preview_-_2025-05-27T152305.png?ex=68424c92&is=6840fb12&hm=3b4bd2a7ce79efb87338d81ad45d2d4cf0244e8eb6b0f1f81695cf3a13b44d38&",
        description: "طائر الفينيق الرملي الذي يولد من الصحراء ويبعث النور من تحت الرماد.",
        rarity: "Legendary",
        variant: "Normal"
    },
    {
        id: 8,
        name: "Sand Phoenix",
        price: 7,
        image: "https://cdn.discordapp.com/attachments/1379457025272058007/1379823014643761162/image-removebg-preview_-_2025-05-27T152305.png?ex=68424c92&is=6840fb12&hm=3b4bd2a7ce79efb87338d81ad45d2d4cf0244e8eb6b0f1f81695cf3a13b44d38&",
        description: "فينيق رملي لامع، ينبعث من اللهيب الساطع ليحرق خصومه.",
        rarity: "Legendary",
        variant: "Shiny"
    },
    {
        id: 9,
        name: "Sand Phoenix",
        price: 10,
        image: "https://cdn.discordapp.com/attachments/1379457025272058007/1379823014643761162/image-removebg-preview_-_2025-05-27T152305.png?ex=68424c92&is=6840fb12&hm=3b4bd2a7ce79efb87338d81ad45d2d4cf0244e8eb6b0f1f81695cf3a13b44d38&",
        description: "فينيق الصحراء قوس قزح، يحيي الرمال بألوان ساحرة ويجدد الحياة.",
        rarity: "Legendary",
        variant: "Rainbow"
    },

    // Cyber Elemental Variants
    {
        id: 10,
        name: "Cyber Elemental",
        price: 5,
        image: "https://cdn.discordapp.com/attachments/1379457025272058007/1379823248190996580/image-removebg-preview_-_2025-05-27T145642.png?ex=68424cca&is=6840fb4a&hm=031420f7166f9d8282ef7598a66b3aabfa1d4d2bea6fc5d2bc9391c2dcf80164&",
        description: "عنصر الظل السيبراني، يجمع بين التقنية والظلام في هجمات سريعة وخفية.",
        rarity: "Legendary",
        variant: "Normal"
    },
    {
        id: 11,
        name: "Cyber Elemental",
        price: 8,
        image: "https://cdn.discordapp.com/attachments/1379457025272058007/1379823248190996580/image-removebg-preview_-_2025-05-27T145642.png?ex=68424cca&is=6840fb4a&hm=031420f7166f9d8282ef7598a66b3aabfa1d4d2bea6fc5d2bc9391c2dcf80164&",
        description: "عنصر لامع من الظل السيبراني، يطلق شرارات طاقة إلكترونية فتاكة.",
        rarity: "Legendary",
        variant: "Shiny"
    },
    {
        id: 12,
        name: "Cyber Elemental",
        price: 12,
        image: "https://cdn.discordapp.com/attachments/1379457025272058007/1379823248190996580/image-removebg-preview_-_2025-05-27T145642.png?ex=68424cca&is=6840fb4a&hm=031420f7166f9d8282ef7598a66b3aabfa1d4d2bea6fc5d2bc9391c2dcf80164&",
        description: "عنصر قوس قزح السيبراني، طاقته متعددة الألوان تخترق الأكوان الرقمية.",
        rarity: "Legendary",
        variant: "Rainbow"
    },

    // Tiki Crab Variants
    {
        id: 13,
        name: "Tiki Crab",
        price: 6,
        image: "https://media.discordapp.net/attachments/1317872175159443498/1380248349533274265/image-removebg-preview_-_2025-05-27T144404.685.png?ex=68432ff2&is=6841de72&hm=b4efa806e3ba0813f6614f1b2d42be6bc24cf49e9e32e66c10abaa4efee5d50c&=&format=webp&quality=lossless&width=327&height=256",
        description: "سلطعون البحر الذي يمتلك قوة كبيرة في معصميه.",
        rarity: "Legendary",
        variant: "Normal"
    },
    {
        id: 14,
        name: "Tiki Crab",
        price: 7,
        image: "https://media.discordapp.net/attachments/1317872175159443498/1380248349533274265/image-removebg-preview_-_2025-05-27T144404.685.png?ex=68432ff2&is=6841de72&hm=b4efa806e3ba0813f6614f1b2d42be6bc24cf49e9e32e66c10abaa4efee5d50c&=&format=webp&quality=lossless&width=327&height=256",
        description: "سلطعون البحر لامع, سلطعون البحر الذي يمتلك قوة كبيرة في معصميه.",
        rarity: "Legendary",
        variant: "Shiny"
    },
    {
        id: 15,
        name: "Tiki Crab",
        price: 13,
        image: "https://media.discordapp.net/attachments/1317872175159443498/1380248349533274265/image-removebg-preview_-_2025-05-27T144404.685.png?ex=68432ff2&is=6841de72&hm=b4efa806e3ba0813f6614f1b2d42be6bc24cf49e9e32e66c10abaa4efee5d50c&=&format=webp&quality=lossless&width=327&height=256",
        description: "سلطعون البحر قوس قزح, سلطعون البحر الذي يمتلك قوة كبيرة في معصميه.",
        rarity: "Legendary",
        variant: "Rainbow"
    },

    // Volcanic Overlord Variants
    {
        id: 16,
        name: "Volcanic Overlord",
        price: 7,
        image: "https://media.discordapp.net/attachments/1317872175159443498/1380286982235881583/image-removebg-preview_-_2025-05-27T143820.406-removebg-preview.png?ex=684353ed&is=6842026d&hm=8cc19c8918bd9d177ca5659a419ecf5f8e257110fb295d7c6525c30e14ac2e8a&=&format=webp&quality=lossless&width=287&height=168",
        description: "تنين ناري يعيش في البراكين ويستطيع التاقلم في هذه البيئة.",
        rarity: "Legendary",
        variant: "Normal"
    },
    {
        id: 17,
        name: "Volcanic Overlord",
        price: 8,
        image: "https://media.discordapp.net/attachments/1317872175159443498/1380286982235881583/image-removebg-preview_-_2025-05-27T143820.406-removebg-preview.png?ex=684353ed&is=6842026d&hm=8cc19c8918bd9d177ca5659a419ecf5f8e257110fb295d7c6525c30e14ac2e8a&=&format=webp&quality=lossless&width=287&height=168",
        description: "تنين ناري لامع, تنين ناري يعيش في البراكين ويستطيع التاقلم في هذه البيئة.",
        rarity: "Legendary",
        variant: "Shiny"
    },
    {
        id: 18,
        name: "Volcanic Overlord",
        price: 14,
        image: "https://media.discordapp.net/attachments/1317872175159443498/1380286982235881583/image-removebg-preview_-_2025-05-27T143820.406-removebg-preview.png?ex=684353ed&is=6842026d&hm=8cc19c8918bd9d177ca5659a419ecf5f8e257110fb295d7c6525c30e14ac2e8a&=&format=webp&quality=lossless&width=287&height=168",
        description: "تنين ناري قوس قزح, تنين ناري يعيش في البراكين ويستطيع التاقلم في هذه البيئة.",
        rarity: "Legendary",
        variant: "Rainbow"
    },

    // Jurassic Butterfly Variants
    {
        id: 19,
        name: "Jurassic Butterfly",
        price: 8,
        image: "https://media.discordapp.net/attachments/1317872175159443498/1380305994256748696/image-removebg-preview_1.png?ex=684365a1&is=68421421&hm=e349d34de6b2cfaa62b9c3138de63b1afbc1f7b1987434a2a97fcb2f327c929d&=&format=webp&quality=lossless&width=466&height=434",
        description: "فراشة من عصر الدايناصورات القديم تتميز بجناحاها ولونها المميز.",
        rarity: "Legendary",
        variant: "Normal"
    },
    {
        id: 20,
        name: "Jurassic Butterfly",
        price: 9,
        image: "https://media.discordapp.net/attachments/1317872175159443498/1380305994256748696/image-removebg-preview_1.png?ex=684365a1&is=68421421&hm=e349d34de6b2cfaa62b9c3138de63b1afbc1f7b1987434a2a97fcb2f327c929d&=&format=webp&quality=lossless&width=466&height=434",
        description: "فراشة من عصر الدايناصورات لامع, فراشة من عصر الدايناصورات القديم تتميز بجناحاها ولونها المميز.",
        rarity: "Legendary",
        variant: "Shiny"
    },
    {
        id: 21,
        name: "Jurassic Butterfly",
        price: 15,
        image: "https://media.discordapp.net/attachments/1317872175159443498/1380305994256748696/image-removebg-preview_1.png?ex=684365a1&is=68421421&hm=e349d34de6b2cfaa62b9c3138de63b1afbc1f7b1987434a2a97fcb2f327c929d&=&format=webp&quality=lossless&width=466&height=434",
        description: "فراشة من عصر الدايناصورات قوس قزح, فراشة من عصر الدايناصورات القديم تتميز بجناحاها ولونها المميز.",
        rarity: "Legendary",
        variant: "Rainbow"
    },

    // Divine Guardian Variants
    {
        id: 22,
        name: "Divine Guardian",
        price: 9,
        image: "https://media.discordapp.net/attachments/1317872175159443498/1380308016011808819/image-removebg-preview_3.png?ex=68436783&is=68421603&hm=9f83bc1aad0a2465eb28d40ce4414f7547d609476471b5e8bd83a3876bab9cc6&=&format=webp&quality=lossless&width=471&height=429",
        description: "طائر يتميز بجناح ابيض ويتميز بسرعته في التحليق.",
        rarity: "Legendary",
        variant: "Normal"
    },
    {
        id: 23,
        name: "Divine Guardian",
        price: 10,
        image: "https://media.discordapp.net/attachments/1317872175159443498/1380308016011808819/image-removebg-preview_3.png?ex=68436783&is=68421603&hm=9f83bc1aad0a2465eb28d40ce4414f7547d609476471b5e8bd83a3876bab9cc6&=&format=webp&quality=lossless&width=471&height=429",
        description: "طائر يتميز بنجاح ابيضة لامع, طائر يتميز بجناح ابيض ويتميز بسرعته في التحليق.",
        rarity: "Legendary",
        variant: "Shiny"
    },
    {
        id: 24,
        name: "Divine Guardian",
        price: 16,
        image: "https://media.discordapp.net/attachments/1317872175159443498/1380308016011808819/image-removebg-preview_3.png?ex=68436783&is=68421603&hm=9f83bc1aad0a2465eb28d40ce4414f7547d609476471b5e8bd83a3876bab9cc6&=&format=webp&quality=lossless&width=471&height=429",
        description: "طائر يتميز بنجاح ابيضة قوس قزح, طائر يتميز بجناح ابيض ويتميز بسرعته في التحليق.",
        rarity: "Legendary",
        variant: "Rainbow"
    }
];

// Function to create a pet card
function createPetCard(pet) {
    const card = document.createElement('div');
    card.className = `pet-card ${pet.variant.toLowerCase()}`;
    card.onclick = () => showPetDetails(pet.id);
    
    card.innerHTML = `
        <div class="variant-badge ${pet.variant.toLowerCase()}">${pet.variant}</div>
        <img src="${pet.image}" alt="${pet.name}" class="pet-image" onerror="this.src='https://via.placeholder.com/300x300?text=No+Image'">
        <div class="pet-info">
            <h3 class="pet-name">${pet.name}</h3>
            <div class="pet-price">
                <img src="https://cdn.discordapp.com/attachments/1379457025272058007/1379809308736487554/image-removebg-preview.png?ex=68423fce&is=6840ee4e&hm=600ec5dd41f6b675f71362fcf8de6997bf4e43b61f5dcaa7e279166f62530d42&" alt="Token">
                <span>${pet.price.toLocaleString()}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Function to show pet details
function showPetDetails(petId) {
    const pet = pets.find(p => p.id === petId);
    if (!pet) return;

    const modal = document.getElementById('petModal');
    const detailsContainer = document.getElementById('petDetails');
    
    detailsContainer.innerHTML = `
        <div class="pet-details-header">
            <img src="${pet.image}" alt="${pet.name}" class="pet-details-image">
            <div class="pet-details-info">
                <h2 class="pet-details-name">${pet.name}</h2>
                <p class="pet-details-description">${pet.description}</p>
                <div class="pet-details-meta">
                    <span class="pet-rarity">${pet.rarity}</span>
                    ${pet.variant ? `<span class="pet-variant ${pet.variant.toLowerCase()}">${pet.variant}</span>` : ''}
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('petModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Function to sort pets
function sortPets(pets, sortType) {
    switch(sortType) {
        case 'price-asc':
            return [...pets].sort((a, b) => a.price - b.price);
        case 'price-desc':
            return [...pets].sort((a, b) => b.price - a.price);
        case 'rarity':
            const rarityOrder = { 'Legendary': 3, 'Epic': 2, 'Rare': 1, 'Common': 0 };
            return [...pets].sort((a, b) => rarityOrder[b.rarity] - rarityOrder[a.rarity]);
        default:
            return pets;
    }
}

// Function to render all pets
function renderPets(petsToRender = pets) {
    const petsGrid = document.getElementById('petsGrid');
    if (!petsGrid) return;
    
    petsGrid.innerHTML = '';
    petsToRender.forEach((pet, index) => {
        const card = createPetCard(pet);
        card.classList.add('animate');
        card.style.animationDelay = `${index * 0.1}s`;
        petsGrid.appendChild(card);
    });

    // Initialize AOS for new elements
    AOS.refresh();
}

// Function to update statistics
function updateStats() {
    const totalPets = pets.length;
    const shinyPets = pets.filter(pet => pet.variant === 'Shiny').length;
    const rainbowPets = pets.filter(pet => pet.variant === 'Rainbow').length;

    // Animate numbers
    animateNumber('totalPets', totalPets);
    animateNumber('shinyPets', shinyPets);
    animateNumber('rainbowPets', rainbowPets);
}

// Function to animate number counting
function animateNumber(elementId, target) {
    const element = document.getElementById(elementId);
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = target / steps;
    let current = 0;
    let step = 0;

    const interval = setInterval(() => {
        step++;
        current = Math.min(Math.floor(stepValue * step), target);
        element.textContent = current.toLocaleString();
        
        if (step >= steps) {
            clearInterval(interval);
        }
    }, duration / steps);
}

// Initialize the page
window.addEventListener('load', () => {
    updateStats();
    renderPets();

    // Setup search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredPets = pets.filter(pet => 
                pet.name.toLowerCase().includes(searchTerm)
            );
            renderPets(filteredPets);
        });
    }

    // Setup sort functionality
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            const sortedPets = sortPets(pets, e.target.value);
            renderPets(sortedPets);
        });
    }

    // Close the modal when clicking outside the content
    document.getElementById('petModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    });

    // Close the modal when pressing the Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});
