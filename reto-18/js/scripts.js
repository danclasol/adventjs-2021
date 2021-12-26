function fixFiles(files) {
  const result = [];

  files.forEach((element) => {
    if (result.find((i) => i === element)) {
      let counter = 1;

      while (result.find((i) => i === `${element}(${counter})`)) {
        counter++;
      }

      result.push(`${element}(${counter})`);
    } else {
      result.push(element);
    }
  });

  return result;
}

// Test Function
const files = ["photo", "postcard", "photo", "photo", "video"];
fixFiles(files); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ["file", "file", "file", "game", "game"];
fixFiles(files2); // ['file', 'file(1)', 'file(2)', 'game', 'game(1)'];

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ["file", "file(1)", "icon", "icon(1)", "icon(1)"];
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']

//Show results
const result = document.getElementById("result");
result.textContent = fixFiles(['photo', 'postcard', 'photo', 'photo', 'video']);
