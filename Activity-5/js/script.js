// Mock database of VSCode extensions
const vscodeExtensions = [
  {
    name: "ESLint",
    url: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
    description: "Integrates ESLint into VSCode to support linting and code quality maintenance.",
    author: "Dirk Baeumer",
    downloads: 28569032,
    stars: 4.7,
    logo: "images/ESLent"
  },
  {
    name: "GitLens",
    url: "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",
    description: "GitLens supercharges the built-in Git capabilities of VSCode.",
    author: "Eric Amodio",
    downloads: 12014563,
    stars: 5.0,
    logo: "images/len"
  }
];

// Constructor Function
function Extension(data) {
  this.name = data.name;
  this.url = data.url;
  this.description = data.description;
  this.author = data.author;
  this.downloads = data.downloads;
  this.stars = data.stars;
  this.logo = data.logo;

  // Method to format download numbers
  this.getFormattedDownloads = function() {
    return this.downloads.toLocaleString();
  };
}

// Function to populate extension data into the DOM dynamically
function renderExtensionData(extensionData, index) {
  document.getElementById(`extension-name-${index}`).textContent = extensionData.name;
  document.getElementById(`extension-url-${index}`).href = extensionData.url;
  document.getElementById(`extension-description-${index}`).textContent = extensionData.description;
  document.getElementById(`extension-author-${index}`).textContent = `Author: ${extensionData.author}`;
  document.getElementById(`extension-downloads-${index}`).textContent = `Downloads: ${extensionData.getFormattedDownloads()}`;
  document.getElementById(`extension-stars-${index}`).textContent = `Stars: ${extensionData.stars} / 5`;
  document.getElementById(`extension-logo-${index}`).src = extensionData.logo;
}

// Main function: load article and extension data
function loadArticleData() {
  document.getElementById("article-title").textContent = "The Top 2 VSCode Extensions for Developers";
  document.getElementById("author").textContent = "Author: Jane Doe";
  document.getElementById("date").textContent = "Published: October 5, 2023";

  // Populate extensions
  const extension1 = new Extension(vscodeExtensions[0]);
  const extension2 = new Extension(vscodeExtensions[1]);

  renderExtensionData(extension1, 1); // First extension
  renderExtensionData(extension2, 2); // Second extension
}

// Trigger the main function after page load
loadArticleData();