
/* colocar o css aq dentro dos arquivos css e colocar um "display: none;" para todas as divs*/

//////////////* Conteudos de troca de efeitos //////////////*/

const body = document.getElementById('body');

const ChangeToDefaultPage = document.getElementById('changeToDefaultPage');
const ChangeToGlassmorphism = document.getElementById('changeToGlassmorphism');
const changeToSimpleEffects = document.getElementById('changeToSimpleEffects');
const changeToCardsEffects = document.getElementById('changeToCardsEffects');
const ChangeToMouseEffects = document.getElementById('changeToMouseEffects');

const changeToStickyBar = document.getElementById('changeToStickyBar');

const DefaultPage = document.getElementById('footerDesign');
const GlassMorphism = document.getElementById('GlassMorphism');
const SimpleEffects = document.getElementById('SimpleEffects');
const CardsEffects = document.getElementById('CardsEffects');
const MouseEffects = document.getElementById('MouseEffects');

const StickyBar = document.getElementById('stickyBar');

ChangeToDefaultPage.onclick = function() {
    body.classList.toggle('bodyDefault');
    body.classList.remove('bodyStickyBar');

    DefaultPage.style.display = "grid";
    GlassMorphism.style.display = "none";
    SimpleEffects.style.display = "none";
    CardsEffects.style.display = "none";
    MouseEffects.style.display = "none";
    
    StickyBar.style.display = "none";
}

changeToCardsEffects.onclick = function() {
    body.classList.remove('bodyStickyBar');
    body.classList.remove('bodyDefault');

    CardsEffects.style.display = "flex";
    DefaultPage.style.display = "none";
    GlassMorphism.style.display = "none";
    MouseEffects.style.display = "none";
    SimpleEffects.style.display = "none";

    StickyBar.style.display = "none";
}

ChangeToGlassmorphism.onclick = function() {
    body.classList.remove('bodyStickyBar');
    body.classList.remove('bodyDefault');

    GlassMorphism.style.display = "flex";
    DefaultPage.style.display = "none";
    SimpleEffects.style.display = "none";
    CardsEffects.style.display = "none";
    MouseEffects.style.display = "none";

    StickyBar.style.display = "none";
}

ChangeToMouseEffects.onclick = function() {
    body.classList.remove('bodyStickyBar');
    body.classList.remove('bodyDefault');

    MouseEffects.style.display = "flex";
    DefaultPage.style.display = "none";
    GlassMorphism.style.display = "none";
    SimpleEffects.style.display = "none";
    CardsEffects.style.display = "none";

    StickyBar.style.display = "none";
}

changeToStickyBar.onclick = function() {
    body.classList.toggle('bodyStickyBar');
    body.classList.remove('bodyDefault');

    StickyBar.style.display = "block";
    DefaultPage.style.display = "none";
    GlassMorphism.style.display = "none";
    SimpleEffects.style.display = "none";
    MouseEffects.style.display = "none";

    CardsEffects.style.display = "none";
}

changeToSimpleEffects.onclick = function() {
    body.classList.remove('bodyStickyBar');
    body.classList.remove('bodyDefault');

    SimpleEffects.style.display = "flex";
    DefaultPage.style.display = "none";
    GlassMorphism.style.display = "none";
    CardsEffects.style.display = "none";
    MouseEffects.style.display = "none";

    StickyBar.style.display = "none";
}

//////////////* Outros conteudos dos efeitos //////////////*/

const ToggleIcon = document.getElementById('toggleicon');
const SideBar = document.getElementById('sidebar');
const SideBarUl = document.getElementById('sidebarul');

ToggleIcon.onclick = function() {
    ToggleIcon.classList.toggle('active');
    SideBar.classList.toggle('active');
}

SideBarUl.addEventListener("click", function() {
    if(ToggleIcon.classList.contains('active')) {
        ToggleIcon.classList.toggle('active');
        SideBar.classList.toggle('active');
    }

});
