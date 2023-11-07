
const uploadedSketchFiles = [];


function populateCroquisDropdown() {
  const croquisDropdown = document.getElementById('preset-croquis');
  const croquisTemplates = ['Template 1', 'Template 2', 'Template 3'];


  croquisDropdown.innerHTML = '';

  for (let i = 0; i < croquisTemplates.length; i++) {
    const template = croquisTemplates[i];
    const option = document.createElement('option');
    option.value = template;
    option.text = template;
    croquisDropdown.appendChild(option);
  }
}

function handleFileUpload() {
  const fileInput = document.getElementById('upload-sketch-file');
  const uploadedFilesList = document.getElementById('uploaded-files-list');
  const uploadedFilesDropdown = document.getElementById('uploaded-sketch-files');

  fileInput.addEventListener('change', function () {
    uploadedFilesList.innerHTML = '';

    for (let i = 0; i < fileInput.files.length; i++) {
      const fileName = fileInput.files[i].name;
      uploadedSketchFiles.push(fileName);

      const li = document.createElement('li');
      li.textContent = fileName;
      uploadedFilesList.appendChild(li);

      populateCroquisDropdown();

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
function toggleSymmetrySettings() {
  const symmetryCheckbox = document.getElementById('symmetry-tool');
  const symmetrySettings = document.getElementById('symmetry-settings');

  symmetryCheckbox.addEventListener('change', function () {
    symmetrySettings.style.display = symmetryCheckbox.checked ? 'block' : 'none';
  
  });
}


function customizeSmartZoomSettings() {
  const smartZoomCheckbox = document.getElementById('smart-zoom');
  const smartZoomSettings = document.getElementById('smart-zoom-settings');
  const zoomLevelInput = document.getElementById('zoom-level');
  const panSpeedInput = document.getElementById('pan-speed');
  const zoomLevelValueLabel = document.getElementById('zoom-level-value');
  const panSpeedValueLabel = document.getElementById('pan-speed-value');

  smartZoomCheckbox.addEventListener('change', function () {
    smartZoomSettings.style.display = smartZoomCheckbox.checked ? 'block' : 'none';
   
  });

  
  zoomLevelInput.addEventListener('input', function () {

    const zoomLevelValue = zoomLevelInput.value;
    zoomLevelValueLabel.textContent = zoomLevelValue;
  
  });

  panSpeedInput.addEventListener('input', function () {

    const panSpeedValue = panSpeedInput.value;
    panSpeedValueLabel.textContent = panSpeedValue;
  
  });
}


function populateGraphicStylesDropdown() {

  const userUploadedStyles = ['User Style 1', 'User Style 2', 'User Style 3'];

  const graphicStylesDropdown = document.getElementById('graphic-styles');

  graphicStylesDropdown.innerHTML = '';

  userUploadedStyles.forEach(style => {
    const option = document.createElement('option');
    option.value = style;
    option.text = style;
    graphicStylesDropdown.appendChild(option);
  });
}

function handleExportAndSharing() {
 
}

function handleUserDocumentation() {
  const userDocumentationLink = document.getElementById('userDocumentation');

  userDocumentationLink.addEventListener('click', function (e) {
    e.preventDefault();

  });
}


populateCroquisDropdown();


handleFileUpload();
toggleSymmetrySettings();
customizeSmartZoomSettings();
populateGraphicStylesDropdown();
handleExportAndSharing();
handleUserDocumentation();
