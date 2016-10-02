var Genys;
(function (Genys) {
    var Arrow = (function () {
        function Arrow() {
            this.rawSvgArrow = '<?xml version="1.0" standalone="no"?>' +
                '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"' +
                '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' +
                '<svg viewBox = "0 0 200 200" version = "1.1">' +
                '<circle cx = "100" cy = "100" r = "80" fill = "orange" stroke = "transparent" stroke-width = "0"/>' +
                '</svg>';
            this.svgDocumentArrow = rawSvgArrow;
        }
        Arrow.prototype.getInterfaceElements = function () {
            return this.svgDocumentArrow;
        };
        return Arrow;
    }());
    Genys.Arrow = Arrow;
})(Genys || (Genys = {}));
var Genys;
(function (Genys) {
    var Gallery = (function () {
        function Gallery(galleryWindow) {
            var readyGalleryWindow = this.createWindow(galleryWindow);
            this.addInterfaceElements(readyGalleryWindow);
        }
        Gallery.prototype.createWindow = function (galleryWindow) {
            galleryWindow.width = 200;
            galleryWindow.height = 600;
            var context = galleryWindow.getContext('2d');
            context.fillStyle = '#FF0000';
            context.fillRect(20, 20, 150, 100);
            var grd = context.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, 'red');
            grd.addColorStop(1, 'white');
            return galleryWindow;
        };
        Gallery.prototype.addInterfaceElements = function (galleryWindow) {
            var interfaceArrow = new Genys.Arrow();
            interfaceArrow.getInterfaceElements();
        };
        return Gallery;
    }());
    window.onload = function () {
        var cnv = document.getElementById('galleryCanvas');
        var gallery = new Gallery(cnv);
    };
})(Genys || (Genys = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiVUludGVyZmFjZS9hcnJvdy50cyIsImdhbGxlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxLQUFLLENBZ0JkO0FBaEJELFdBQVUsS0FBSyxFQUFDLENBQUM7SUFFYjtRQUFBO1lBQ0ksZ0JBQVcsR0FDSCx1Q0FBdUM7Z0JBQ3ZDLGdEQUFnRDtnQkFDaEQscURBQXFEO2dCQUNyRCwrQ0FBK0M7Z0JBQy9DLG9HQUFvRztnQkFDcEcsUUFBUSxDQUFDO1lBQ2pCLHFCQUFnQixHQUEwQixXQUFXLENBQUM7UUFJMUQsQ0FBQztRQUhVLG9DQUFvQixHQUEzQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQztRQUNMLFlBQUM7SUFBRCxDQUFDLEFBWkQsSUFZQztJQVpZLFdBQUssUUFZakIsQ0FBQTtBQUVMLENBQUMsRUFoQlMsS0FBSyxLQUFMLEtBQUssUUFnQmQ7QUNmRCxJQUFVLEtBQUssQ0FvQ2Q7QUFwQ0QsV0FBVSxLQUFLLEVBQUMsQ0FBQztJQUViO1FBRUksaUJBQWEsYUFBZ0M7WUFDekMsSUFBSSxrQkFBa0IsR0FBc0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBRU0sOEJBQVksR0FBbkIsVUFBb0IsYUFBZ0M7WUFDaEQsYUFBYSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDMUIsYUFBYSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDM0IsSUFBSSxPQUFPLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QyxPQUFPLENBQUMsU0FBUyxHQUFDLFNBQVMsQ0FBQztZQUM1QixPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQztZQUNsRCxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQztZQUMxQixHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxPQUFPLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3pCLENBQUM7UUFFTSxzQ0FBb0IsR0FBM0IsVUFBNEIsYUFBZ0M7WUFDeEQsSUFBSSxjQUFjLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkMsY0FBYyxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFMUMsQ0FBQztRQUVMLGNBQUM7SUFBRCxDQUFDLEFBekJELElBeUJDO0lBR0QsTUFBTSxDQUFDLE1BQU0sR0FBRztRQUNaLElBQUksR0FBRyxHQUEwQyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRTFGLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQztBQUVOLENBQUMsRUFwQ1MsS0FBSyxLQUFMLEtBQUssUUFvQ2QifQ==