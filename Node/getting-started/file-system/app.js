const fs = require('fs');
//fs to interact with file system
//https://nodejs.dev/learn/the-nodejs-fs-module

try {
  fs.renameSync('before.json', 'after.json');
  //done
} catch (err) {
  console.error(err);
}

//WRITE files
//writefile or writefilesync

// const content = 'Some content!'

// fs.writeFile('/Users/joe/test.txt', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //file written successfully
// })

const content = 'Some content!';

try {
  fs.writeFileSync('/Users/joe/test.txt', content);
  //file written successfully
} catch (err) {
  console.error(err);
}

fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, (err) => {});
//modifies default with flag
//r+ reading/writing
//w+ open file for reading/writing, positioning stream at beginning of file and creates file if doesn't exist
//a opens for writing(not reading), end of file
//a+ like a but also reading

//Append to a file
//fs.appendFile() (and its fs.appendFileSync() counterpart):

const content = 'Some content!';

fs.appendFile('file.log', content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  //done!
});

//READ file
//fs.readFile or fs.readFileSync

// fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) => {
// if (err) {
//   console.error(err)
//   return
// }
// console.log(data)
//   })

const fs = require('fs');

try {
  const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
