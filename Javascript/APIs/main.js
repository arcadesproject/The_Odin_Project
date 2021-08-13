const img = document.getElementById('image');
const button = document.getElementById('new');
const search = document.getElementById('search');

// function newImg(input = 'error 404') {
//   fetch(
//     `https://api.giphy.com/v1/gifs/translate?api_key=AnQ1mlCxEbQt1XqjwPTGTIIZK8MQhfQu&s=${input}`,
//     {
//       mode: 'cors',
//     },
//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (response) {
//       img.src = response.data.images.original.url;
//       img.dataset.info = `${input}`;
//     })
//     .catch(function (error) {
//       newImg();
//       console.log(error);
//     });
// }

async function newImg(input = 'error 404') {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=AnQ1mlCxEbQt1XqjwPTGTIIZK8MQhfQu&s=${input}`,
    {
      mode: 'cors',
    },
  );
  const data = await response
    .json()
    .then(function (response) {
      img.src = response.data.images.original.url;
      img.dataset.info = `${input}`;
    })
    .catch(function (error) {
      newImg();
      console.log(error);
    });
}

button.addEventListener('click', function () {
  const name = img.dataset.info;
  newImg(name);
});

search.addEventListener('input', function (e) {
  const { value } = e.target;
  newImg(`${value}`);
});

newImg('cats');
