const fs = require("fs");

const files = fs
  .readdirSync("tt")
  .filter(name => !name.includes("svg"))
  .map(filename => fs.readFileSync("tt/" + filename, "utf-8"))
  .map(fileContent => {
      const [,id] = fileContent.match(/id="(.*)"/)
      const [D_PATH_D] = fileContent.match(/d="(M [\s\d.,\w]*)"/mg)
      return {id, d: D_PATH_D.slice(3, -1).replace(/\n/g,'').replace(/  /g,'')}
  })
  .forEach(({id, d}) => {
      const content = fs.readFileSync('components/interactiveMap/regions/test copy.tsx', 'utf-8');
      const fileContent = content.replace('%ID%', id).replace('%D_PATH_D%',d);
      fs.writeFileSync(`components/interactiveMap/regions/${id.replace(' #', '')}.tsx`, fileContent)
  })
