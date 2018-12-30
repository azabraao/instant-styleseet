let allClasses = [];
let css = '';
let allElements = document.querySelectorAll('*');

// Getting all the classes names
for (let i = 0; i < allElements.length; i++) {
  let classes = allElements[i].className.toString().split(/\s+/);
  for (let j = 0; j < classes.length; j++) {
    let cls = classes[j];
    if (cls && allClasses.indexOf(cls) === -1)
      allClasses.push(cls);
  }
}

// Creating the css file
allClasses.forEach(classe => {
    css += "."+classe+" \{\n\n\}\n";
});

// Downloading 
download("style.css",css);

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }