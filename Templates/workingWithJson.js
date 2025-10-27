// CORE Modules
const http = require("http");
const url = require("url");
const fs = require("fs");

const PORT = 3000;

const htmlContent = fs.readFileSync("./Home.html", "utf-8");

const products = JSON.parse(fs.readFileSync("../Data/products.json", "utf-8"));
const productListHtml = fs.readFileSync("./Product-List.html", "utf-8");
const productDetailHtml = fs.readFileSync("./Product-Details.html", "utf-8");

// CUSTOM Module (USER-Defined Module)
const replaceHtml = require("../Modules/replaceHtml.js");

const server = http.createServer((req, res) => {
  //   console.log("REquest ", req.url);
  //   if (req.url === "/.well-known/appspecific/com.chrome.devtools.json") {
  //     res.writeHead(204, { "Content-Type": "image/x-icon" });
  //     return res.end();
  //   }
  let { query, pathname: path } = url.parse(req.url, true);
  console.log("Query ", query);
  // console.log(path);

  if (path === "/" || path.toLocaleLowerCase() === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "This is my custom header",
    });
    res.end(htmlContent.replace("{{%CONTENT%}}", "This is Home Page!"));
  } else if (path === "/home" || path.toLocaleLowerCase() === "/home") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "This is my custom header",
    });
    res.end(htmlContent.replace("{{%CONTENT%}}", "This is Home Page!"));
  } else if (path === "/about" || path.toLocaleLowerCase() === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "This is my custom header",
    });
    res.end(htmlContent.replace("{{%CONTENT%}}", "This is About Page!"));
  } else if (path === "/contact" || path.toLocaleLowerCase() === "/contact") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "This is my custom header",
    });
    res.end(htmlContent.replace("{{%CONTENT%}}", "This is Contact Page!"));
  } else if (path === "/products" || path.toLocaleLowerCase() === "/products") {
    if (!query.id) {
      let parsedProductsHtml = products.map((prod) => {
        return replaceHtml(productListHtml, prod);
      });
      res.writeHead(200, {
        "Content-Type": "text/html",
        "my-header": "This is my custom header",
      });
      res.end(htmlContent.replace("{{%CONTENT%}}", parsedProductsHtml));
    } else {
      let id = query.id;
      console.log("id ", id);
      let product = products[id];
      console.log("Product ", product);
      let particularProductContent = replaceHtml(productDetailHtml, product);
      res.writeHead(200, {
        "Content-Type": "text/html",
        "my-header": "This is my custom header",
      });
      res.end(htmlContent.replace("{{%CONTENT%}}", particularProductContent));
    }
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
      "my-header": "This is my custom header",
    });
    res.end(
      htmlContent.replace("{{%CONTENT%}}", "Error 404 : Page Not Found!")
    );
  }
});

server.listen(PORT, () => console.log(`Server is listening at PORT : ${PORT}`));
