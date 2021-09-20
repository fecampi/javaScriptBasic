
// Create a variable that uses a Windows
// path without escaping the backslashes:
const filePath = String.raw`https://dev.beta.qa.globoi.com/teste/nonecaptcha/votacao/teste-votacao-tv-2aa37965-59bf-4b5c-8078-1cdb77c3b016.ghtml`;

console.log(`The file was uploaded from: ${filePath}`);
// expected output: "The file was uploaded from: C:\Development\profile\aboutme.html"
