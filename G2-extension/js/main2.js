function handleExportSketchFiles() {
    const exportSketchFilesButton = document.getElementById('generateTechPack');
    const sizeRangeDropdown = document.getElementById('sizeRangeDropdown');
    const colorwaysDropdown = document.getElementById('colorwaysDropdown');
    const automaticFormattingToggle = document.getElementById('automaticFormattingToggle');

    exportSketchFilesButton.addEventListener('click', function () {
        const selectedSizeRange = sizeRangeDropdown.value;
        const selectedColorways = colorwaysDropdown.value;
        const isAutomaticFormattingEnabled = automaticFormattingToggle.checked;
        exportSketchToComputer(selectedSizeRange, selectedColorways, isAutomaticFormattingEnabled);
    });
}

function exportSketchToComputer(sizeRange, colorways, isAutomaticFormattingEnabled) {
    const exportFolderPath = "Downloads";

    if (app && app.activeDocument) {
        try {
            const exportFile = new File(exportFolderPath + "/fashion_sketch.pdf");

            // Create PDF export options
            const pdfSaveOpts = new PDFSaveOptions();
            pdfSaveOpts.compatibility = PDFCompatibility.ACROBAT5;
            pdfSaveOpts.generateThumbnails = true;
            pdfSaveOpts.preserveEditability = true;

            if (isAutomaticFormattingEnabled) {
            }

            app.activeDocument.saveAs(exportFile, pdfSaveOpts);

            alert(`Fashion sketch exported successfully as a PDF.\nSize Range: ${sizeRange}\nColorways: ${colorways}`);
        } catch (e) {
            alert("Error exporting fashion sketch: " + e.message);
        }
    } else {
        alert("Adobe Illustrator is not available or no active fashion sketch document.");
    }
}

function handleAutomaticFormattingToggle() {
    const automaticFormattingToggle = document.getElementById('automaticFormattingToggle');

    automaticFormattingToggle.addEventListener('change', function () {
        const isAutomaticFormattingEnabled = automaticFormattingToggle.checked;
        if (isAutomaticFormattingEnabled) {
        } else {
        }
    });
}

function handlePreSetCroquis() {
    const preSetCroquisDropdown = document.getElementById('preSetCroquisDropdown');
    preSetCroquisDropdown.addEventListener('change', function () {
        const selectedTemplate = preSetCroquisDropdown.value;
        applyCroquisTemplate(selectedTemplate);
    });
}

function applyCroquisTemplate(templateName) {
    alert(`Applied croquis template: ${templateName}`);
}

function handleSmartZoomTool() {
    const smartZoomToggle = document.getElementById('smartZoomToggle');
    smartZoomToggle.addEventListener('change', function () {
        const isSmartZoomEnabled = smartZoomToggle.checked;
        if (isSmartZoomEnabled) {
            enableSmartZoom();
        } else {
            disableSmartZoom();
        }
    });
}

function enableSmartZoom() {
    alert("Smart Zoom Tool enabled.");
}

function disableSmartZoom() {
    alert("Smart Zoom Tool disabled.");
}

// Function to handle Symmetry Tool
function handleSymmetryTool() {
    const symmetryToggle = document.getElementById('symmetryToggle');
    symmetryToggle.addEventListener('change', function () {
        const isSymmetryEnabled = symmetryToggle.checked;
        if (isSymmetryEnabled) {
            enableSymmetryTool();
        } else {
            disableSymmetryTool();
        }
    });
}

function enableSymmetryTool() {
    alert("Symmetry Tool enabled.");
}

function disableSymmetryTool() {
    alert("Symmetry Tool disabled.");
}

function handlePreloadedGraphicStyles() {
    const graphicStylesDropdown = document.getElementById('graphicStylesDropdown');
    graphicStylesDropdown.addEventListener('change', function () {
        const selectedStyle = graphicStylesDropdown.value;
        applyGraphicStyle(selectedStyle);
    });
}

function applyGraphicStyle(styleName) {
    alert(`Applied graphic style: ${styleName}`);
}

function handleColorwaysDropdown() {
    const colorwaysDropdown = document.getElementById('colorwaysDropdown');
    const colorPaletteDropdown = document.getElementById('colorPaletteDropdown');
    const colorVariationSliders = document.querySelector('.color-variation-sliders');

    colorwaysDropdown.addEventListener('change', function () {
        const selectedColorway = colorwaysDropdown.value;

        if (selectedColorway === 'custom') {
            colorPaletteDropdown.classList.remove('hidden');
            colorVariationSliders.classList.remove('hidden');
        } else {
            colorPaletteDropdown.classList.add('hidden');
            colorVariationSliders.classList.add('hidden');
        }
    });
}

function handleColorSwatches() {
    const addCustomColorButton = document.getElementById('addCustomColorButton');

    addCustomColorButton.addEventListener('click', function () {
        alert("Added custom color");
    });
}

function handleColorPalettePicker() {
    const colorPaletteDropdown = document.getElementById('colorPaletteDropdown');

    colorPaletteDropdown.addEventListener('change', function () {
        const selectedPalette = colorPaletteDropdown.value;

        applyColorPaletteToSketch(selectedPalette);
    });
}

function applyColorPaletteToSketch(palette) {
    alert(`Applied color palette: ${palette}`);
}

function handleColorVariationSliders() {
    const hueSlider = document.getElementById('hueSlider');
    const saturationSlider = document.getElementById('saturationSlider');
    const brightnessSlider = document.getElementById('brightnessSlider');
    const opacitySlider = document.getElementById('opacitySlider');

    hueSlider.addEventListener('input', function () {
        const hueValue = hueSlider.value;

        adjustHueInSketch(hueValue);
    });

    saturationSlider.addEventListener('input', function () {
        const saturationValue = saturationSlider.value;

        adjustSaturationInSketch(saturationValue);
    });

    brightnessSlider.addEventListener('input', function () {
        const brightnessValue = brightnessSlider.value;

     
        adjustBrightnessInSketch(brightnessValue);
    });

    opacitySlider.addEventListener('input', function () {
        const opacityValue = opacitySlider.value;


        adjustOpacityInSketch(opacityValue);
    });
}

function adjustHueInSketch(hueValue) {

    alert(`Adjusted hue to: ${hueValue}`);
}

function adjustSaturationInSketch(saturationValue) {

    alert(`Adjusted saturation to: ${saturationValue}`);
}

function adjustBrightnessInSketch(brightnessValue) {

    alert(`Adjusted brightness to: ${brightnessValue}`);
}

function adjustOpacityInSketch(opacityValue) {
 
    alert(`Adjusted opacity to: ${opacityValue}`);
}


document.addEventListener('DOMContentLoaded', function () {
    handleExportSketchFiles();
    handleAutomaticFormattingToggle();
    handlePreSetCroquis();
    handleSmartZoomTool();
    handleSymmetryTool();
    handlePreloadedGraphicStyles();
    handleColorSwatches();
    handleColorPalettePicker();
    handleColorVariationSliders();
    handleColorwaysDropdown();
});
