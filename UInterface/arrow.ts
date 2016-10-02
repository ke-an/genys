namespace Genys {
    
    export class Arrow implements SVGAElement {        
        rawSvgArrow:string = 
                '<?xml version="1.0" standalone="no"?>' +
                '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"' + 
                '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' +      
                '<svg viewBox = "0 0 200 200" version = "1.1">' +
                '<circle cx = "100" cy = "100" r = "80" fill = "orange" stroke = "transparent" stroke-width = "0"/>' +
                '</svg>';
        svgDocumentArrow:SVGElement = <SVGElement>rawSvgArrow;
        public getInterfaceElements()  { 
            return this.svgDocumentArrow;
        }    
    }

}
