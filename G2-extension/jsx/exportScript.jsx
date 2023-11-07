// exportScript.jsx
var exportFolder = new Folder("C:\Program Files\Adobe\Adobe Illustrator 2022\Support Files\Required\CEP\extensions\UISamples\jsx");
var exportOptions = new ExportOptionsSVG();
exportOptions.embedRasterImages = true;
exportOptions.cssProperties = SVGCSSPropertyLocation.PRESENTATIONATTRIBUTES;
exportOptions.fontSubsetting = SVGFontSubsetting.None;
exportOptions.documentEncoding = SVGDocumentEncoding.UTF8;
exportOptions.saveMultipleArtboards = true;

var documents = app.documents;
if (documents.length > 0) {
    var activeDocument = documents[0];
    var fileName = "exported_sketch.svg";

    // Save the document as SVG
    activeDocument.exportFile(new File(exportFolder + "/" + fileName), ExportType.SVG, exportOptions);
}
