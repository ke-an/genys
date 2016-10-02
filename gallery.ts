/// <reference path="UInterface/arrow.ts" />
namespace Genys {
    //http://www.typescriptlang.org/docs/handbook/namespaces.html
    class Gallery {
        
        constructor (galleryWindow: HTMLCanvasElement) {
            var readyGalleryWindow: HTMLCanvasElement = this.createWindow(galleryWindow);
            this.addInterfaceElements(readyGalleryWindow);
        }
        
        public createWindow(galleryWindow: HTMLCanvasElement) {
            galleryWindow.width = 200;
            galleryWindow.height = 600;
            var context = galleryWindow.getContext('2d');
            context.fillStyle='#FF0000';
            context.fillRect(20,20,150,100);
            var grd = context.createLinearGradient(0,0,200,0);
            grd.addColorStop(0,'red');
            grd.addColorStop(1,'white');
            return galleryWindow;
        }

        public addInterfaceElements(galleryWindow: HTMLCanvasElement) {
            var interfaceArrow = new Genys.Arrow();
            interfaceArrow.getInterfaceElements();
            
        }
        
    }
    
    // todo - 1.gallery arrows, 2.toolbar   
    window.onload = () => {
        var cnv: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('galleryCanvas');
        //Initiate Gallery Class 
        var gallery = new Gallery(cnv);
    };
    
}