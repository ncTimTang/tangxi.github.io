(function(){
    const root = document.documentElement;
    const body = document.body;
    const saved = localStorage.getItem('theme');
    if(saved === 'dark') body.classList.add('dark');
    const theme_btns = body.querySelectorAll('.btn-theme')

    function toggle_theme(ele) {
        const isDark = body.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        ele.innerHTML = isDark ? '<svg class="h-4 w-4" data-testid="geist-icon" fill="none" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2"></path><path d="M12 21v2"></path><path d="M4.22 4.22l1.42 1.42"></path><path d="M18.36 18.36l1.42 1.42"></path><path d="M1 12h2"></path><path d="M21 12h2"></path><path d="M4.22 19.78l1.42-1.42"></path><path d="M18.36 5.64l1.42-1.42"></path></svg>' : '<svg class="h-4 w-4" data-testid="geist-icon" fill="none" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>';
    }

    for (let ele of theme_btns) {
        ele.addEventListener('click', ()=>{toggle_theme(ele)});
    }


    const banner = body.querySelector('.banner');
    banner.addEventListener('click', () => {
        for (let ele of banner.querySelectorAll(".banner-item")) {
            ele.style.display = 'none';
        }
        banner.style.display = 'none';
    })

    const btn_wechat = body.querySelector(".links-list .wechat");
    btn_wechat.addEventListener('click', (e)=> {
        banner.querySelector(".wechat").style.display = 'inline-block';
        banner.style.display = 'unset';
        e.preventDefault();
    })


})();
