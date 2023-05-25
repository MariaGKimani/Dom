// Change document background color to silver
document.body.style.backgroundColor='silver'

// Change the font color for h1 title tag to
// green
document.getElementById('title').style.color='#076d08'

// Change the font case for h3 title tags to
// uppercase

const h3Elements = document.querySelectorAll('h3');
h3Elements.forEach((h3) => {
  h3.style.textTransform = 'uppercase';
});
// Add one more fruit to the fruits list
const fruit = document.createElement('li')
fruit.appendChild(document.createTextNode('Kiwi'))
document.getElementById('fruList').appendChild(fruit)

// Add one more vegetable to the vegetables
// list
const vegetablle = document.createElement('li')
veg.appendChild(document.createTextNode('Onions'))
document.getElementById('vegList').appendChild(vegetablle)
