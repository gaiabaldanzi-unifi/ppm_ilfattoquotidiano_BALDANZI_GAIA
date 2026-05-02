document.addEventListener('DOMContentLoaded', function() {
    const btnMenu = document.getElementById('apri-menu');
    const iconaMenu = document.getElementById('icona-menu');
    const menuLaterale = document.getElementById('menu-laterale');
    const overlaySchermo = document.getElementById('overlay');
    const btnMondo = document.getElementById('btn-mondo-fq');
    const submenuMondo = document.getElementById('submenu-mondo');
    const frecciaMondo = document.getElementById('freccia-mondo');
    const logoBarElement = document.getElementById('logo-bar');
    const miniLogoTop = document.getElementById('mini-logo');
    const topicsBarTop = document.querySelector('.topics-bar');

    function chiudiMenuLaterale() {
        if (!menuLaterale || !overlaySchermo || !iconaMenu) return;
        menuLaterale.classList.remove('aperto');
        overlaySchermo.style.display = 'none';
        iconaMenu.src = "https://st.ilfattoquotidiano.it/wp-content/themes/ifq-2025/assets/img/fq-www/icon-menu-desktop.svg";
    }

    if (btnMenu && menuLaterale && overlaySchermo && iconaMenu) {
        btnMenu.addEventListener('click', () => {
            const isOpen = menuLaterale.classList.contains('aperto');
            if (!isOpen) {
                menuLaterale.classList.add('aperto');
                overlaySchermo.style.display = 'block';
                iconaMenu.src = "https://st.ilfattoquotidiano.it/wp-content/themes/ifq-2025/assets/img/fq-www/icon-close.svg";
            } else {
                chiudiMenuLaterale();
            }
        });
    }

    if (overlaySchermo) {
        overlaySchermo.addEventListener('click', chiudiMenuLaterale);
    }

    window.addEventListener('scroll', () => {
        if (!miniLogoTop) return;
        if (window.scrollY > 150) {
            miniLogoTop.classList.add('mini-logo-visibile');
        } else {
            miniLogoTop.classList.remove('mini-logo-visibile');
        }
    });

    if (btnMondo && submenuMondo && frecciaMondo && logoBarElement && topicsBarTop) {
        btnMondo.addEventListener('click', (e) => {
            e.preventDefault();
            const isSlimMode = window.innerWidth <= 860;
            submenuMondo.classList.toggle('aperto');
            frecciaMondo.classList.toggle('ruota-freccia');

            if (!isSlimMode) {
                const isOpening = submenuMondo.classList.contains('aperto');
                logoBarElement.style.paddingTop = isOpening ? '100px' : '55px';
                topicsBarTop.style.top = isOpening ? '100px' : '55px';
            } else {
                logoBarElement.style.paddingTop = '';
                topicsBarTop.style.top = '';
            }
        });
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 860 && logoBarElement && topicsBarTop) {
            logoBarElement.style.paddingTop = '';
            topicsBarTop.style.top = '';
        }
    });

    function gestisciTendinaContenuti(idBottone, idGriglia) {
        const btn = document.getElementById(idBottone);
        const grid = document.getElementById(idGriglia);

        if (!btn || !grid) return;

        btn.addEventListener('click', () => {
            grid.classList.toggle('chiuso');
            const isChiuso = grid.classList.contains('chiuso');
            const testo = btn.querySelector('.testo-btn');
            const freccia = btn.querySelector('.freccia-icon');

            if (testo) testo.textContent = isChiuso ? 'Mostra' : 'Nascondi';
            if (freccia) freccia.style.transform = isChiuso ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    }

    gestisciTendinaContenuti('toggle-video', 'video-grid-container');
    gestisciTendinaContenuti('toggle-blog', 'blog-grid-container');
});

