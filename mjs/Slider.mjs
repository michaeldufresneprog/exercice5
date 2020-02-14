export class Slider {
    constructor(elmMonSlider, config_slider){
        this.elmMonSlider = elmMonSlider;
        this.list_slide = config_slider.list_slide;
        console.log('slider')
    }
    creerSlider() {

        console.log(this.elmMonSlider.tagName)
        console.log(this.list_slide)
        let elmSlider = document.createElement('div')
        elmSlider.classList.add('slider')
        let elmSlides = document.createElement('div')
        elmSlides.classList.add('slides')
        let k=1
        for (let unSlide of this.list_slide){
            let elmSlide = document.createElement('div')
            var aLink = document.createElement("a");
            aLink.href =  unSlide.href;
            aLink.innerHTML = unSlide.compte;
            var titre = document.createElement("p");
            var sousTitre = document.createElement("p");
            titre.style.zIndex = "2";
            sousTitre.style.zIndex = "2";
            var image = document.createElement("img");                  
            var textnode = document.createTextNode(unSlide.titre);            
            var textSub = document.createTextNode(unSlide.sousTitre);            
            titre.appendChild(textnode);
            sousTitre.appendChild(textSub);
            elmSlider.appendChild(aLink);
            elmSlide.appendChild(titre);
            console.log(elmSlide);
            elmSlide.appendChild(sousTitre);
            image.src = unSlide.img;                            
            elmSlide.appendChild(image);     
            elmSlide.id = 'slides-' + k
            k++
            elmSlides.appendChild(elmSlide)
        }

        elmSlider.appendChild(elmSlides)
        this.elmMonSlider.appendChild(elmSlider)

    }


}