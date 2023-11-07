// Function to handle Exporting Sketch Files
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

// Function to handle exporting sketch to the computer
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

            // Customize export based on the "Automatic Formatting" option
            if (isAutomaticFormattingEnabled) {
                // Apply automatic formatting logic
                // For example, adjust the page layout, add grids, etc.
            }

            // Save the active document as a PDF
            app.activeDocument.saveAs(exportFile, pdfSaveOpts);

            alert(`Fashion sketch exported successfully as a PDF.\nSize Range: ${sizeRange}\nColorways: ${colorways}`);
        } catch (e) {
            alert("Error exporting fashion sketch: " + e.message);
        }
    } else {
        alert("Adobe Illustrator is not available or no active fashion sketch document.");
    }
}

// Function to handle the Automatic Formatting Toggle
function handleAutomaticFormattingToggle() {
    const automaticFormattingToggle = document.getElementById('automaticFormattingToggle');

    automaticFormattingToggle.addEventListener('change', function () {
        const isAutomaticFormattingEnabled = automaticFormattingToggle.checked;
        if (isAutomaticFormattingEnabled) {
            // Handle logic when automatic formatting is enabled
        } else {
            // Handle logic when automatic formatting is disabled
        }
    });
}

// Function to handle Pre-Set Croquis
function handlePreSetCroquis() {
    const preSetCroquisDropdown = document.getElementById('preSetCroquisDropdown');
    preSetCroquisDropdown.addEventListener('change', function () {
        const selectedTemplate = preSetCroquisDropdown.value;
        applyCroquisTemplate(selectedTemplate);
    });
}

function applyCroquisTemplate(templateName) {
    // Replace with your logic to apply the selected croquis template to the fashion sketch
    alert(`Applied croquis template: ${templateName}`);
}

// Function to handle Smart Zoom Tool
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
    // Replace with your logic to enable the Smart Zoom Tool
    alert("Smart Zoom Tool enabled.");
}

function disableSmartZoom() {
    // Replace with your logic to disable the Smart Zoom Tool
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
    // Replace with your logic to enable the Symmetry Tool
    alert("Symmetry Tool enabled.");
}

function disableSymmetryTool() {
    // Replace with your logic to disable the Symmetry Tool
    alert("Symmetry Tool disabled.");
}

// Function to handle Preloaded Graphic Styles
function handlePreloadedGraphicStyles() {
    const graphicStylesDropdown = document.getElementById('graphicStylesDropdown');
    graphicStylesDropdown.addEventListener('change', function () {
        const selectedStyle = graphicStylesDropdown.value;
        applyGraphicStyle(selectedStyle);
    });
}

function applyGraphicStyle(styleName) {
    // Replace with your logic to apply the selected graphic style to the fashion sketch
    alert(`Applied graphic style: ${styleName}`);
}

// Function to show/hide Color Swatches elements based on Colorways dropdown
function handleColorwaysDropdown() {
    const colorwaysDropdown = document.getElementById('colorwaysDropdown');
    const colorPaletteDropdown = document.getElementById('colorPaletteDropdown');
    const colorVariationSliders = document.querySelector('.color-variation-sliders');

    colorwaysDropdown.addEventListener('change', function () {
        const selectedColorway = colorwaysDropdown.value;

        if (selectedColorway === 'custom') {
            // Show Color Swatches elements
            colorPaletteDropdown.classList.remove('hidden');
            colorVariationSliders.classList.remove('hidden');
        } else {
            // Hide Color Swatches elements
            colorPaletteDropdown.classList.add('hidden');
            colorVariationSliders.classList.add('hidden');
        }
    });
}

// Function to handle Color Swatches
function handleColorSwatches() {
    const addCustomColorButton = document.getElementById('addCustomColorButton');

    addCustomColorButton.addEventListener('click', function () {
        // Implement the logic to add a custom color
        alert("Added custom color");
    });
}

// Function to handle Color Palette Picker
function handleColorPalettePicker() {
    const colorPaletteDropdown = document.getElementById('colorPaletteDropdown');

    colorPaletteDropdown.addEventListener('change', function () {
        const selectedPalette = colorPaletteDropdown.value;

        // Handle logic to apply the selected color palette to the fashion sketch
        applyColorPaletteToSketch(selectedPalette);
    });
}

function applyColorPaletteToSketch(palette) {
    // Replace with your logic to apply the selected color palette to the fashion sketch
    alert(`Applied color palette: ${palette}`);
}

// Function to handle Color Variation Sliders
function handleColorVariationSliders() {
    const hueSlider = document.getElementById('hueSlider');
    const saturationSlider = document.getElementById('saturationSlider');
    const brightnessSlider = document.getElementById('brightnessSlider');
    const opacitySlider = document.getElementById('opacitySlider');

    hueSlider.addEventListener('input', function () {
        const hueValue = hueSlider.value;

        // Handle logic to adjust the hue of the colors in the fashion sketch
        adjustHueInSketch(hueValue);
    });

    saturationSlider.addEventListener('input', function () {
        const saturationValue = saturationSlider.value;

        // Handle logic to adjust the saturation of the colors in the fashion sketch
        adjustSaturationInSketch(saturationValue);
    });

    brightnessSlider.addEventListener('input', function () {
        const brightnessValue = brightnessSlider.value;

        // Handle logic to adjust the brightness of the colors in the fashion sketch
        adjustBrightnessInSketch(brightnessValue);
    });

    opacitySlider.addEventListener('input', function () {
        const opacityValue = opacitySlider.value;

        // Handle logic to adjust the opacity of the colors in the fashion sketch
        adjustOpacityInSketch(opacityValue);
    });
}

function adjustHueInSketch(hueValue) {
    // Replace with your logic to adjust the hue of the colors in the fashion sketch
    alert(`Adjusted hue to: ${hueValue}`);
}

function adjustSaturationInSketch(saturationValue) {
    // Replace with your logic to adjust the saturation of the colors in the fashion sketch
    alert(`Adjusted saturation to: ${saturationValue}`);
}

function adjustBrightnessInSketch(brightnessValue) {
    // Replace with your logic to adjust the brightness of the colors in the fashion sketch
    alert(`Adjusted brightness to: ${brightnessValue}`);
}

function adjustOpacityInSketch(opacityValue) {
    // Replace with your logic to adjust the opacity of the colors in the fashion sketch
    alert(`Adjusted opacity to: ${opacityValue}`);
}

// Call the functions to initialize the UI elements
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
