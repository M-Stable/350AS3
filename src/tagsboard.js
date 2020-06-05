[].forEach.call(document.getElementsByClassName("tagsboard"), function(f1) {
    let hiddenInput = document.createElement("input"),
      mainInput = document.createElement("input"),
      tags = [];
    hiddenInput.setAttribute("type", "hidden");
    hiddenInput.setAttribute("name", f1.getAttribute("data-name"));
  
    mainInput.setAttribute("type", "text");
    mainInput.classList.add("hashtag-input");
    mainInput.setAttribute("placeholder", "Enter hashtag")
  
    mainInput.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        if (mainInput.value.length > 1) {
          addTag(mainInput.value);
          mainInput.value = "";
        }
      }
    });
  
    f1.appendChild(mainInput);
    f1.appendChild(hiddenInput);
  

    addTag("#report");

    function addTag(tagName) {
      let tag = {
        text: tagName,
        element: document.createElement("span")
      };
  
      tag.element.classList.add("hashtag");
      tag.element.textContent = tag.text;
  
      let closeButton = document.createElement("span");
      closeButton.classList.add("close");
      closeButton.addEventListener("click", function() {
        removeTag(tags.indexOf(tag));
      });
  
      tag.element.appendChild(closeButton);
  
      tags.push(tag);
  
      f1.insertBefore(tag.element, mainInput);
      refreshTags();
    }
  
    function removeTag(index) {
      let tag = tags[index];
      tags.splice(index, 1);
      f1.removeChild(tag.element);
      refreshTags();
    }
  
    function refreshTags() {}
  });
  