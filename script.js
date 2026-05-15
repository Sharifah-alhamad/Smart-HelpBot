const qaData = [

    { q: "hi", a: "Hello! How can I help you today?" },
    { q: "hello", a: "Hi there! Welcome to Pro Design." },
    { q: "what is pro design", a: "Pro Design is a system for planning and calibrating security and surveillance systems using advanced 3D technology." },
    { q: "features", a: "It offers 3D design, security budgeting, and intuitive planning capabilities." },

    { q: "اهلين", a: "أهلاً بك! كيف يمكنني مساعدتك اليوم؟" },
    { q: "مرحبا", a: "مرحباً بك في برو ديزاين." },
    { q: "ما هو برو ديزاين", a: "برو ديزاين هو نظام لتخطيط ومعايرة أنظمة الأمن والمراقبة باستخدام تقنيات ثلاثية الأبعاد متقدمة." },
    { q: "المميزات", a: "يوفر التصميم ثلاثي الأبعاد، إدارة ميزانية الأمن، وأدوات تخطيط ذكية." }
];

function toggleChat() {
    const chatBox = document.getElementById("chatBox");
    if (chatBox.style.display === "none" || chatBox.style.display === "") {
        chatBox.style.display = "flex"; 
    } else {
        chatBox.style.display = "none";
    }
}

function sendMessage() {
    const userInput = document.getElementById("userInput");
    const query = userInput.value.trim();

    if (query === "") return; 

    appendMessage(query, 'user');
    userInput.value = ""; 

    setTimeout(() => {
        const botResponse = getBotResponse(query);
        appendMessage(botResponse, 'bot');
    }, 800);
}

function getBotResponse(userQuery) {
    const cleanQuery = userQuery.toLowerCase().trim();

    const found = qaData.find(item => 
        item.q.toLowerCase() === cleanQuery || item.q.toLowerCase().includes(cleanQuery)
    );

    if (found) {
        return found.a;
    } else {
        return "Sorry, I couldn't find an answer to that. / عذراً، لم أجد إجابة لهذا السؤال.";
    }
}

function appendMessage(text, className) {
    const chatBody = document.getElementById("chatBody");
    const messageDiv = document.createElement("div");
    
    messageDiv.classList.add("message", className); 
    messageDiv.innerText = text;
    
    chatBody.appendChild(messageDiv);
    
    chatBody.scrollTop = chatBody.scrollHeight;
}

function handleKey(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}


