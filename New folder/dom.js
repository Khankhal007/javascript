// DOM manipulation(Document object model)

                      //1. getElementById

// window.addEventListener('load', (event) => {
// const heading = document.getElementById('heading').value = "skill";
// document.getElementById('heading').value = "skill";

// const heading = document.getElementsByTagName('h1');
// const heading = document.getElementsByClassName('test');
// const heading = document.querySelector('.test');
// const heading = document.querySelector('#heading');
// const heading = document.querySelector('.test');
// console.log(heading);

// const heading = document.querySelector('#heading');
// const parent = heading.parentNode;
// console.log(parent);
// const parent = document.querySelector('#heading');
// console.log(parent.childNodes);
// const heading = document.querySelector('#head_1');
// console.log(heading.nextElementSibling);


                    // 3. previousElementSibling

// const heading = document.querySelector('#head_2');
// const subHeading = document.querySelector('#head_2');
// console.log(subHeading.previousElementSibling);    
// console.log(heading)
// heading.innerHTML = 'Web dev is awesome!';
// heading.style.color = 'red';
// heading.style.fontSize = '100px';
// heading.classList.add('title');
// heading.classList.remove('title');

// const heading = document.querySelector('#head_2');
// const subHeading = document.createElement('h3');
// subHeading.innerHTML = 'The Programming Lab';
// heading.insertAdjacentElement('beforeend', subHeading);

       // Create elements
// const heading = document.createElement('h3');
// heading.innerHTML = 'Javascript is awesome!';
// heading.classList.add('title');
// const parent = document.querySelector('#heading');
// parent.appendChild(heading);

// });


                    // Manipulation

      // Create elements
// const heading = document.createElement('h1');
// heading.innerHTML = 'Javascript is awesome!';
// heading.classList.add('title');
// const parent = document.querySelector('.parent');
// parent.appendChild(heading);



// console.log(heading);

 // DOM events
// const button = document.querySelector('#btn');
// const heading = document.querySelector('#heading');

// button.addEventListener('click', function (event) {
//     heading.style.color = 'purple';
//     heading.style.fontSize = '60px';
//     console.log('button clicked', event);
// });