// ── V2 Chatbot Logic ──
document.addEventListener('DOMContentLoaded', () => {
    const chatBubble = document.getElementById('chatBubble');
    const chatWindow = document.getElementById('chatWindow');
    const closeChat = document.getElementById('closeChat');
    const minimizeChat = document.getElementById('minimizeChat');
    const fullscreenChat = document.getElementById('fullscreenChat');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatBody = document.getElementById('chatBody');
    const initialMsg = document.getElementById('initialMsg');

    // Contextual Initial Message
    if (initialMsg) {
        if (window.location.pathname.includes('result.html')) {
            initialMsg.textContent = "Halo! Saya melihat hasil analisis kulitmu. Kamu punya beberapa area dehidrasi ringan. Ada yang ingin kamu tanyakan tentang rutinitas yang cocok?";
        }
    }

    // Toggle Window
    if (chatBubble) {
        chatBubble.addEventListener('click', () => {
            chatWindow.classList.add('active');
            chatBubble.style.display = 'none';
        });
    }

    if (closeChat) {
        closeChat.addEventListener('click', () => {
            chatWindow.classList.remove('active');
            chatBubble.style.display = 'flex';
        });
    }

    if (minimizeChat) {
        minimizeChat.addEventListener('click', () => {
            chatWindow.classList.remove('active');
            chatBubble.style.display = 'flex';
        });
    }

    if (fullscreenChat) {
        fullscreenChat.addEventListener('click', () => {
            chatWindow.classList.toggle('fullscreen');
            fullscreenChat.innerHTML = chatWindow.classList.contains('fullscreen') 
                ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>' 
                : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>';
        });
    }

    // Chat Functionality
    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (!text) return;

            // Append User Message
            addMessage('user', text);
            chatInput.value = '';

            // AI Simulated Response
            setTimeout(() => {
                const response = getAIResponse(text);
                addMessage('ai', response);
            }, 1000);
        });
    }

    function addMessage(sender, text) {
        const div = document.createElement('div');
        div.className = `msg ${sender}`;
        div.textContent = text;
        chatBody.appendChild(div);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function getAIResponse(input) {
        const q = input.toLowerCase();
        if (q.includes('halo') || q.includes('hi')) return "Halo, Cantik! Ada yang bisa saya bantu tentang kondisi kulitmu hari ini?";
        if (q.includes('pori')) return "Pori-pori besar biasanya disebabkan produksi sebum berlebih. Kamu bisa coba pakai Niacinamide.";
        if (q.includes('kering')) return "Kulit kering butuh hidrasi mendalam. Jangan lupa pakai pelembap dengan ceramide ya.";
        if (q.includes('mahal')) return "Kecantikan tidak harus mahal, yang penting adalah konsistensi dan kandungan yang tepat!";
        return "Pertanyaan bagus! Saya sarankan kamu cek bagian 'Sains' di aplikasi ini untuk penjelasan medis yang lebih dalam.";
    }
});
