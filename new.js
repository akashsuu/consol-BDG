 // Loop through each menu item and create a list item with a link
            menuItems.forEach(function(item) {
                var li = document.createElement("li");
                var a = document.createElement("a");
                a.textContent = item.text;
                a.href = item.link;
                li.appendChild(a);
                menuContainer.appendChild(li);
            });
 // Loop through each menu item and create a list item with a link
 menuItems.forEach(function(item) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.textContent = item.text;
    a.href = item.link;
    li.appendChild(a);
    menuContainer.appendChild(li);
});
