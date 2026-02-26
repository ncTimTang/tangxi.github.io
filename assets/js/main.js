function setup_theme() {
    const htmlstore = document.body.querySelector("htmlstore");
    const saved = localStorage.getItem('theme');
    if(saved === 'dark') document.body.classList.add('dark');
    const theme_btns = document.body.querySelectorAll('.btn-theme');

    const icons = htmlstore.querySelector(".icons");
    const icon_sun = icons.querySelector(".icon_sun").innerHTML;
    const icon_moon = icons.querySelector(".icon_moon").innerHTML;

    function toggle_theme(ele) {
        const isDark = document.body.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        ele.innerHTML = isDark ? icon_sun : icon_moon;
    }

    for (let ele of theme_btns) {
        let isDark = (saved === 'dark');
        ele.innerHTML = isDark ? icon_sun : icon_moon;
        ele.addEventListener('click', ()=>{toggle_theme(ele)});
    }
}

function setup_sidebar() {
    const sidebar = document.body.querySelector(".sidebar");
    sidebar.querySelector(".name").innerHTML = CONFIG["name"];
    sidebar.querySelector(".bio").innerHTML = CONFIG["bio"];
    sidebar.querySelector(".location span").innerHTML = CONFIG["contact"]["location"];

    sidebar.querySelector(".mailto").href = CONFIG["contact"]["mail"];
    sidebar.querySelector(".github").href = CONFIG["contact"]["github"];
    sidebar.querySelector(".huggingface").href = CONFIG["contact"]["huggingface"];
    sidebar.querySelector(".google").href = CONFIG["contact"]["google"];
    sidebar.querySelector(".orcid").href = CONFIG["contact"]["orcid"];

    sidebar.querySelector(".avatar").src = CONFIG["avatar"]["avatar"];
    sidebar.querySelector(".banner .wechat img").src = CONFIG["contact"]["wechat"];

    const banner = sidebar.querySelector('.banner');
    banner.addEventListener('click', () => {
        for (let ele of banner.querySelectorAll(".banner-item")) {
            ele.style.display = 'none';
        }
        banner.style.display = 'none';
    })

    const btn_wechat = sidebar.querySelector(".links-list .wechat");
    btn_wechat.addEventListener('click', (e)=> {
        banner.querySelector(".wechat").style.display = 'inline-block';
        banner.style.display = 'unset';
        e.preventDefault();
    })
}

function setup_aboutme() {
    const htmlstore = document.body.querySelector("htmlstore");
    const profile = document.body.querySelector(".main .section .profile");
    profile.querySelector(".info .n1").innerHTML = CONFIG["given_name"];
    profile.querySelector(".info .n2").innerHTML = CONFIG["family_name"];
    profile.querySelector(".info .detail").innerHTML = CONFIG["aboutme"];
    profile.querySelector(".photo .avatar").src = CONFIG["avatar"]["photo"];
    profile.querySelector(".photo .avatar").width = CONFIG["avatar"]["photo_width"];
    profile.querySelector(".photo .avatar").height = CONFIG["avatar"]["photo_height"];
}

function setup_secs(name, item_list) {
    if (item_list === undefined) return
    const htmlstore = document.body.querySelector("htmlstore");
    const publication_template = htmlstore.querySelector(".publications").innerHTML;
    const publications = document.body.querySelector(".main " + name + " .cards");
    function build_pub(data) {
        ele = document.createElement("div");
        ele.innerHTML = publication_template;
        ele.querySelector(".icon").src = data["icon"];
        ele.querySelector(".detail .title").innerHTML = data["title"];
        ele.querySelector(".detail .author").innerHTML = data["author"];
        ele.querySelector(".detail .pub").innerHTML = data["pub"];
        ele.querySelector(".detail .link").innerHTML = data["link"];
        return ele.innerHTML;
    }
    publications.innerHTML = item_list.map(build_pub).join('');
}

function setup_footer(){
    const year = document.body.querySelector('.footer .year');
    const now = new Date();
    year.innerText = now.getFullYear();
}

function main() {
    setup_theme();
    setup_sidebar();
    setup_aboutme();
    
    if ("news" in CONFIG) {
        setup_secs("#sec_news .container", CONFIG["news"]);
    } else {
        document.body.querySelector(".nav_news").style.display = "none";
        document.body.querySelector("#sec_news").style.display = "none";
    }

    if ("experiences" in CONFIG) {
        setup_secs("#sec_experience .container", CONFIG["experiences"]);
    } else {
        document.body.querySelector(".nav_experience").style.display = "none";
        document.body.querySelector("#sec_experience").style.display = "none";
    }

    if ("publications" in CONFIG) {
        setup_secs("#sec_publication .container", CONFIG["publications"]);
    } else {
        document.body.querySelector(".nav_publication").style.display = "none";
        document.body.querySelector("#sec_publication").style.display = "none";
    }

    if ("projects" in CONFIG) {
        setup_secs("#sec_project .container", CONFIG["projects"]);
    } else {
        document.body.querySelector(".nav_project").style.display = "none";
        document.body.querySelector("#sec_project").style.display = "none";
    }
    setup_footer();
}



