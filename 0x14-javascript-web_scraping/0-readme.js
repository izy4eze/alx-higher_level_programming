#!/usr/bin/node

const fs = required('fs');
const filename = process.argv[2];

fs.readFile(filename, 'utf-8', (erro, content) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log(content)
  }
});  
