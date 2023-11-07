// Maintain a list of uploaded sketch files
const uploadedSketchFiles = [];

// Function to populate the Pre-Set Croquis dropdown
function populateCroquisDropdown() {
  const croquisDropdown = document.getElementById('preset-croquis');

  // Clear existing options
  croquisDropdown.innerHTML = '';

  // Get the list of uploaded sketch files
  const uploadedFiles = uploadedSketchFiles;

  // Iterate through uploaded files and add them as options
  for (let i = 0; i < uploadedFiles.length; i++) {
    const file = uploadedFiles[i];
    const option = document.createElement('option');
    option.value = file;
    option.text = file;
    croquisDropdown.appendChild(option);
  }
}

// Function to handle file uploads
function handleFileUpload() {
  const fileInput = document.getElementById('upload-sketch-file');
  const uploadedFilesList = document.getElementById('uploaded-files-list');
  const uploadedFilesDropdown = document.getElementById('uploaded-sketch-files');

  fileInput.addEventListener('change', function () {
    uploadedFilesList.innerHTML = '';

    for (let i = 0; i < fileInput.files.length; i++) {
      const fileName = fileInput.files[i].name;
      uploadedSketchFiles.push(fileName); // Add to the list of uploaded files

      const li = document.createElement('li');
      li.textContent = fileName;
      uploadedFilesList.appendChild(li);

      // Call the function to populate the Pre-Set Croquis dropdown for each uploaded file
      populateCroquisDropdown();

      // Update the "Uploaded Sketch Files" dropdown for each uploaded file
      const defaultOption = document.createElement('option');
      defaultOption.value = "";
      defaultOption.disabled = true;
      defaultOption.selected = true;
      defaultOption.text = "Select a Sketch File";
      uploadedFilesDropdown.appendChild(defaultOption);

      const option = document.createElement('option');
      option.value = fileName;
      option.text = fileName;
      uploadedFilesDropdown.appendChild(option);
    }
  });
}

// Function to toggle Symmetry Tool settings based on checkbox state
function toggleSymmetrySettings() {
  const symmetryCheckbox = document.getElementById('symmetry-tool');
  const symmetrySettings = document.getElementById('symmetry-settings');

  symmetryCheckbox.addEventListener('change', function () {
    symmetrySettings.style.display = symmetryCheckbox.checked ? 'block' : 'none';
    // Implement your code to enable or customize the Symmetry Tool here
  });
}

// Function to customize Smart Zoom Tool settings
function customizeSmartZoomSettings() {
  const smartZoomCheckbox = document.getElementById('smart-zoom');
  const smartZoomSettings = document.getElementById('smart-zoom-settings');
  const zoomLevelInput = document.getElementById('zoom-level');
  const panSpeedInput = document.getElementById('pan-speed');
  const zoomLevelValueLabel = document.getElementById('zoom-level-value');
  const panSpeedValueLabel = document.getElementById('pan-speed-value');

  smartZoomCheckbox.addEventListener('change', function () {
    smartZoomSettings.style.display = smartZoomCheckbox.checked ? 'block' : 'none';
    // Implement your code to enable or customize the Smart Zoom Tool here
  });

  // Add event listeners to input elements to update settings
  zoomLevelInput.addEventListener('input', function () {
    // Update the zoom level setting
    const zoomLevelValue = zoomLevelInput.value;
    zoomLevelValueLabel.textContent = zoomLevelValue;
    // Implement your code to apply the zoom level setting here
  });

  panSpeedInput.addEventListener('input', function () {
    // Update the pan speed setting
    const panSpeedValue = panSpeedInput.value;
    panSpeedValueLabel.textContent = panSpeedValue;
    // Implement your code to apply the pan speed setting here
  });
}

// Function to populate the Preloaded Graphic Styles dropdown
function populateGraphicStylesDropdown() {
  // Replace the static graphicStyles with an array of user-uploaded styles
  const userUploadedStyles = ['User Style 1', 'User Style 2', 'User Style 3'];

  // Get the graphicStylesDropdown element
  const graphicStylesDropdown = document.getElementById('graphic-styles');

  // Clear existing options
  graphicStylesDropdown.innerHTML = '';

  // Iterate through userUploadedStyles and add them as options
  userUploadedStyles.forEach(style => {
    const option = document.createElement('option');
    option.value = style;
    option.text = style;
    graphicStylesDropdown.appendChild(option);
  });
}

// Function to handle Export and Sharing
function handleExportAndSharing() {
  const exportButton = document.getElementById('export-sketch-button');
  const exportModal = document.getElementById('export-modal');
  const closeExportModalButton = document.getElementById('close-export-modal');

  exportButton.addEventListener('click', function () {
    exportModal.style.display = 'block';
    // Execute the JSX script here when the export button is clicked
    // Example: executeMyExportScript();
  });

  closeExportModalButton.addEventListener('click', function () {
    exportModal.style.display = 'none';
  });
}

// Function to handle User Documentation
function handleUserDocumentation() {
  const userDocumentationLink = document.getElementById('www.youtube.com');

  userDocumentationLink.addEventListener('click', function (e) {
    e.preventDefault();
    // Implement your code to open user documentation, tutorials, or a help center within the extension
  });
}

// Call the function to handle file uploads
handleFileUpload();

// Call the other functions for extension options
toggleSymmetrySettings();
customizeSmartZoomSettings();
populateGraphicStylesDropdown();
handleExportAndSharing();
handleUserDocumentation();

