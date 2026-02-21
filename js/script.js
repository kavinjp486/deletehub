const apps = [

    // SOCIAL MEDIA
    { name: "Instagram", category: "Social Media", popular: true,
      deleteUrl: "https://www.instagram.com/accounts/remove/request/permanent/",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=instagram.com" },

    { name: "Facebook", category: "Social Media", popular: true,
      deleteUrl: "https://www.facebook.com/help/delete_account",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=facebook.com" },

    { name: "Twitter / X", category: "Social Media", popular: true,
      deleteUrl: "https://help.twitter.com/en/managing-your-account/how-to-deactivate-twitter-account",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=x.com" },

    { name: "Snapchat", category: "Social Media", popular: true,
      deleteUrl: "https://accounts.snapchat.com/accounts/delete_account",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=snapchat.com" },

    { name: "TikTok", category: "Social Media", popular: true,
      deleteUrl: "https://support.tiktok.com/en/account-and-privacy/deleting-an-account",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=tiktok.com" },

    { name: "LinkedIn", category: "Social Media", popular: false,
      deleteUrl: "https://www.linkedin.com/help/linkedin/answer/63/closing-your-linkedin-account",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=linkedin.com" },

    { name: "Reddit", category: "Social Media", popular: false,
      deleteUrl: "https://www.reddit.com/settings/",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=reddit.com" },

    // MESSAGING
    { name: "WhatsApp", category: "Messaging", popular: true,
      deleteUrl: "https://faq.whatsapp.com/695452672097795/",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=whatsapp.com" },

    { name: "Telegram", category: "Messaging", popular: false,
      deleteUrl: "https://my.telegram.org/auth",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=telegram.org" },

    { name: "Discord", category: "Messaging", popular: false,
      deleteUrl: "https://support.discord.com/hc/en-us/articles/212500837",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=discord.com" },

    // ENTERTAINMENT
    { name: "Netflix", category: "Entertainment", popular: true,
      deleteUrl: "https://help.netflix.com/en/node/407",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=netflix.com" },

    { name: "Spotify", category: "Entertainment", popular: true,
      deleteUrl: "https://support.spotify.com/us/article/close-account/",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=spotify.com" },

    { name: "YouTube", category: "Entertainment", popular: true,
      deleteUrl: "https://support.google.com/accounts/answer/32046",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=youtube.com" },

    { name: "Disney+", category: "Entertainment", popular: false,
      deleteUrl: "https://help.disneyplus.com/",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=disneyplus.com" },

    // E-COMMERCE
    { name: "Amazon", category: "E-Commerce", popular: true,
      deleteUrl: "https://www.amazon.com/gp/help/customer/display.html?nodeId=201983410",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=amazon.com" },

    { name: "Flipkart", category: "E-Commerce", popular: true,
      deleteUrl: "https://www.flipkart.com/helpcentre",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=flipkart.com" },

    { name: "eBay", category: "E-Commerce", popular: false,
      deleteUrl: "https://www.ebay.com/help/account/closing-account",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=ebay.com" },

    // TRAVEL
    { name: "Uber", category: "Travel", popular: true,
      deleteUrl: "https://help.uber.com/riders/article/delete-my-uber-account",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=uber.com" },

    { name: "Airbnb", category: "Travel", popular: false,
      deleteUrl: "https://www.airbnb.com/help/article/432",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=airbnb.com" },

    // DATING
    { name: "Tinder", category: "Dating", popular: true,
      deleteUrl: "https://www.help.tinder.com/hc/en-us/articles/115003341343",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=tinder.com" },

    { name: "Bumble", category: "Dating", popular: false,
      deleteUrl: "https://bumble.com/help/how-do-i-delete-my-account",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=bumble.com" },

    // FINANCE
    { name: "PayPal", category: "Finance", popular: true,
      deleteUrl: "https://www.paypal.com/us/smarthelp/article/how-do-i-close-my-paypal-account",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=paypal.com" },

    { name: "Google Pay", category: "Finance", popular: false,
      deleteUrl: "https://support.google.com/pay/answer/7644069",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=pay.google.com" }
];

apps.sort((a, b) => b.popular - a.popular);

const grid = document.getElementById("app-grid");
const searchInput = document.getElementById("search");
const categoryContainer = document.getElementById("category-buttons");

let currentCategory = "All";

function renderApps(appList) {
    grid.innerHTML = "";

    appList.forEach(app => {
        const card = document.createElement("div");
        card.className = "app-card";

        card.innerHTML = `
    <div class="logo-wrapper">
        <img src="${app.logo}" alt="${app.name}">
    </div>
    <h3>${app.name}</h3>
`;

        card.addEventListener("click", () => {

    // Track clicks locally
    const clicks = JSON.parse(localStorage.getItem("clicks")) || {};
    clicks[app.name] = (clicks[app.name] || 0) + 1;
    localStorage.setItem("clicks", JSON.stringify(clicks));

    // Open official deletion page
    window.open(app.deleteUrl, "_blank");

});

        grid.appendChild(card);
    });
}

function applyFilters() {
    const query = searchInput.value.toLowerCase();

    const filtered = apps.filter(app => {
        const matchesSearch = app.name.toLowerCase().includes(query);
        const matchesCategory =
            currentCategory === "All" || app.category === currentCategory;
        return matchesSearch && matchesCategory;
    });

    renderApps(filtered);
}

function generateCategories() {
    const categories = ["All", ...new Set(apps.map(app => app.category))];

    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.textContent = cat;
        btn.className = "category-btn";

        if (cat === "All") btn.classList.add("active");

        btn.addEventListener("click", () => {
            currentCategory = cat;
            document.querySelectorAll(".category-btn")
                .forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            applyFilters();
        });

        categoryContainer.appendChild(btn);
    });
}

searchInput.addEventListener("input", applyFilters);

generateCategories();
renderApps(apps);


card.addEventListener("click", () => {

    const clicks = JSON.parse(localStorage.getItem("clicks")) || {};

    clicks[app.name] = (clicks[app.name] || 0) + 1;

    localStorage.setItem("clicks", JSON.stringify(clicks));

    window.location.href = `app.html?name=${slugify(app.name)}`;
});

function renderTrending() {
    const clicks = JSON.parse(localStorage.getItem("clicks")) || {};

    const sorted = Object.entries(clicks)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(entry => entry[0]);

    const trendingApps = apps.filter(app => sorted.includes(app.name));

    const trendingGrid = document.getElementById("trending-grid");
    if (!trendingGrid) return;

    trendingGrid.innerHTML = "";

    trendingApps.forEach(app => {
        const card = document.createElement("div");
        card.className = "app-card";

        card.innerHTML = `
            <div class="logo-wrapper">
                <img src="${app.logo}" alt="${app.name}">
            </div>
            <h3>${app.name}</h3>
        `;

        trendingGrid.appendChild(card);
    });
}
renderTrending();