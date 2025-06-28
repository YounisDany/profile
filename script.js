// Projects data
const projects = [
    { url: "https://semo.vercel.app", title: "Semo", description: "تطبيق ويب تفاعلي", category: "web", createdAt: 1750955519152 },
    { url: "https://photo.vercel.app", title: "Photo", description: "معرض صور تفاعلي", category: "web", createdAt: 1750789659908 },
    { url: "https://mswq.vercel.app", title: "MSWQ", description: "منصة إدارة المحتوى", category: "web", createdAt: 1750414774924 },
    { url: "https://mnki.vercel.app", title: "MNKI", description: "تطبيق إدارة المهام", category: "app", createdAt: 1748508076836 },
    { url: "https://my-shop.vercel.app", title: "My Shop", description: "متجر إلكتروني متكامل", category: "ecommerce", createdAt: 1748317442205 },
    { url: "https://mnkib.vercel.app", title: "MNKIB", description: "نظام إدارة المكتبات", category: "web", createdAt: 1748101880011 },
    { url: "https://saudi.vercel.app", title: "Saudi", description: "موقع خدمات سعودي", category: "web", createdAt: 1748067081959 },
    { url: "https://botfateen.vercel.app", title: "Bot Fateen", description: "بوت ذكي للمساعدة", category: "app", createdAt: 1747892276201 },
    { url: "https://puzzel.vercel.app", title: "Puzzle", description: "لعبة ألغاز تفاعلية", category: "app", createdAt: 1747671649659 },
    { url: "https://image-puzzle-game.vercel.app", title: "Image Puzzle Game", description: "لعبة ترتيب الصور", category: "app", createdAt: 1747666528476 },
    { url: "https://puzzelfun.vercel.app", title: "Puzzle Fun", description: "مجموعة ألعاب ألغاز", category: "app", createdAt: 1747663495427 },
    { url: "https://voicemenu.vercel.app", title: "Voice Menu", description: "قائمة صوتية تفاعلية", category: "app", createdAt: 1747288228360 },
    { url: "https://col.vercel.app", title: "COL", description: "منصة تعليمية", category: "web", createdAt: 1746900023406 },
    { url: "https://lina.vercel.app", title: "Lina", description: "موقع شخصي أنيق", category: "web", createdAt: 1746590515610 },
    { url: "https://waber.vercel.app", title: "Waber", description: "تطبيق توصيل", category: "app", createdAt: 1746217078122 },
    { url: "https://cybersecurity.vercel.app", title: "Cybersecurity", description: "موقع أمن المعلومات", category: "web", createdAt: 1746131561201 },
    { url: "https://tawasl.vercel.app", title: "Tawasl", description: "منصة التواصل", category: "web", createdAt: 1746076436035 },
    { url: "https://bank.vercel.app", title: "Bank", description: "نظام مصرفي", category: "web", createdAt: 1745878769220 },
    { url: "https://saw.vercel.app", title: "SAW", description: "أداة تحليل البيانات", category: "app", createdAt: 1745623617443 },
    { url: "https://invoice.vercel.app", title: "Invoice", description: "نظام الفواتير", category: "web", createdAt: 1745449374574 },
    { url: "https://rehamai.vercel.app", title: "Reham AI", description: "مساعد ذكي", category: "app", createdAt: 1745338897965 },
    { url: "https://neom.vercel.app", title: "NEOM", description: "موقع مشروع نيوم", category: "web", createdAt: 1745034905643 },
    { url: "https://travel.vercel.app", title: "Travel", description: "موقع سياحة وسفر", category: "web", createdAt: 1745032685267 },
    { url: "https://zaafoor.vercel.app", title: "Zaafoor", description: "موقع شركة زافور", category: "web", createdAt: 1745029968583 },
    { url: "https://khadamat.vercel.app", title: "Khadamat", description: "منصة الخدمات", category: "web", createdAt: 1744999781590 },
    { url: "https://ser.vercel.app", title: "SER", description: "نظام إدارة الموارد", category: "web", createdAt: 1744868813226 },
    { url: "https://aitadawl.vercel.app", title: "AI Tadawl", description: "منصة تداول ذكية", category: "app", createdAt: 1744862897639 },
    { url: "https://manage.vercel.app", title: "Manage", description: "نظام إدارة شامل", category: "web", createdAt: 1744819531677 },
    { url: "https://nour.vercel.app", title: "Nour", description: "موقع شخصي", category: "web", createdAt: 1744788014105 },
    { url: "https://learn.vercel.app", title: "Learn", description: "منصة تعليمية", category: "web", createdAt: 1744651082523 },
    { url: "https://horizon.vercel.app", title: "Horizon", description: "متجر إلكتروني", category: "ecommerce", createdAt: 1684688144120 },
    { url: "https://chat.vercel.app", title: "Chat", description: "تطبيق محادثة", category: "app", createdAt: 1684593351927 }
];

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const projectsGrid = document.getElementById('projects-grid');
const loadMoreBtn = document.getElementById('load-more');
const filterBtns = document.querySelectorAll('.filter-btn');
const chatbotBtn = document.getElementById('chatbot-btn');
const chatbotPopup = document.getElementById('chatbot-popup');
const closeChatbot = document.getElementById('close-chatbot');
const chatbotInput = document.getElementById('chatbot-input');
const sendMessage = document.getElementById('send-message');
const chatbotMessages = document.getElementById('chatbot-messages');
const contactForm = document.getElementById('contact-form');

// State
let currentFilter = 'all';
let displayedProjects = 0;
const projectsPerPage = 9;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeProjects();
    setupEventListeners();
    setupScrollAnimations();
});

// Mobile Navigation
hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Projects functionality
function initializeProjects() {
    displayedProjects = 0;
    projectsGrid.innerHTML = '';
    loadProjects();
}

function loadProjects() {
    const filteredProjects = currentFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === currentFilter);
    
    const projectsToShow = filteredProjects.slice(displayedProjects, displayedProjects + projectsPerPage);
    
    projectsToShow.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
    
    displayedProjects += projectsToShow.length;
    
    // Hide load more button if all projects are displayed
    if (displayedProjects >= filteredProjects.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <div class="project-image">
            <i class="fas fa-globe"></i>
            <div class="project-overlay">
                <div class="project-links">
                    <a href="${project.url}" target="_blank" class="project-link">
                        <i class="fas fa-external-link-alt"></i> عرض
                    </a>
                </div>
            </div>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                <span class="project-tag">${getCategoryName(project.category)}</span>
                <span class="project-tag">${formatDate(project.createdAt)}</span>
            </div>
        </div>
    `;
    return card;
}

function getCategoryName(category) {
    const categories = {
        'web': 'موقع ويب',
        'app': 'تطبيق',
        'ecommerce': 'متجر إلكتروني'
    };
    return categories[category] || 'مشروع';
}

function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.getFullYear().toString();
}

// Filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        // Update current filter
        currentFilter = this.dataset.filter;
        
        // Reset and reload projects
        initializeProjects();
    });
});

// Load more functionality
loadMoreBtn.addEventListener('click', loadProjects);

// Chatbot functionality
function setupEventListeners() {
    chatbotBtn.addEventListener('click', toggleChatbot);
    closeChatbot.addEventListener('click', closeChatbotPopup);
    sendMessage.addEventListener('click', sendChatMessage);
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
    
    // Contact form
    contactForm.addEventListener('submit', handleContactForm);
}

function toggleChatbot() {
    chatbotPopup.classList.toggle('active');
}

function closeChatbotPopup() {
    chatbotPopup.classList.remove('active');
}

function sendChatMessage() {
    const message = chatbotInput.value.trim();
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    chatbotInput.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const response = generateBotResponse(message);
        addMessage(response, 'bot');
    }, 1000);
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = text;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function generateBotResponse(userMessage) {
    const responses = {
        'مرحبا': 'مرحباً بك! كيف يمكنني مساعدتك اليوم؟',
        'من أنت': 'أنا مساعد ذكي لموقع يونس ضاعني. يمكنني مساعدتك في معرفة المزيد عن مهاراته ومشاريعه.',
        'المشاريع': 'يونس لديه أكثر من 162 مشروع مكتمل في مجالات مختلفة مثل تطوير المواقع والتطبيقات والمتاجر الإلكترونية.',
        'المهارات': 'يونس متخصص في HTML, CSS, JavaScript, PHP, Python, React, MySQL وأدوات التصميم مثل Photoshop و Illustrator.',
        'التواصل': 'يمكنك التواصل مع يونس عبر البريد الإلكتروني: Younisdany0@gmail.com أو الهاتف: +967772670025',
        'الخبرة': 'يونس لديه أكثر من 3 سنوات خبرة في تطوير المواقع والتطبيقات، مع 514+ مساهمة في GitHub.',
        'التعليم': 'يونس حاصل على دبلوم عالي في الحاسوب وأكمل العديد من الدورات التدريبية في البرمجة والتصميم.',
        'الخدمات': 'يونس يقدم خدمات تطوير المواقع، التطبيقات، المتاجر الإلكترونية، تصميم المنشورات، وإدارة وسائل التواصل الاجتماعي.'
    };
    
    // Simple keyword matching
    for (const [keyword, response] of Object.entries(responses)) {
        if (userMessage.includes(keyword)) {
            return response;
        }
    }
    
    return 'شكراً لك على سؤالك. يمكنك تصفح الموقع لمعرفة المزيد عن يونس ومشاريعه، أو التواصل معه مباشرة.';
}

// Contact form handling
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> تم الإرسال بنجاح!';
        contactForm.reset();
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }, 2000);
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.skill-category, .project-card, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'rgba(30, 41, 59, 0.1)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Particle background effect
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(6, 182, 212, 0.5);
            border-radius: 50%;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
}

// Initialize particles
createParticles();

