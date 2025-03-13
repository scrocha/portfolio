console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

let navLinks = $$("nav a");

let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);

if (currentLink) {
    currentLink.classList.add("current");
}

let pages = [
    {url: "", title: "Sobre Mim"},
    {url: "projects/", title: "Projetos"},
    {url: "resume/", title: "Currículo"},
    {url: "contact/", title: "Contato"}
];

const ARE_WE_HOME = document.documentElement.classList.contains("home");

let h1 = document.createElement("h1");
h1.textContent = document.title;
document.body.prepend(h1);

let nav = document.createElement("nav");
document.body.insertBefore(nav, h1.nextSibling);

for (let p of pages) {
    let url = p.url;
    let title = p.title;
    
    if (!ARE_WE_HOME && !url.startsWith("http")) {
        url = "../" + url;
    }
    
    nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>`);
    if (location.pathname.includes(url)) {
        document.title = title;
    }
}