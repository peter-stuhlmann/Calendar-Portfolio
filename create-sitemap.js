const fs = require('fs');
const path = require('path');

// Path to the products.tsx file
const productsFilePath = path.join(__dirname, '/src/app/data/products.tsx');

// Path to the sitemap.xml file
const sitemapFilePath = path.join(__dirname, '/public/sitemap.xml');

// URL of your website
const baseUrl = 'https://kalender.lol';

// Function to create the sitemap
const createSitemap = (products) => {
  let sitemapContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemapContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  // Find the newest published date among products
  const newestDate = products.reduce((latest, product) => {
    const productDate = new Date(product.published.replace(' ', 'T') + 'Z');
    return productDate > latest ? productDate : latest;
  }, new Date(0)); // Initialize with earliest possible date

  // Convert the newest date to ISO string and then to the required format
  const formattedNewestDate = newestDate.toISOString();

  // Adding the homepage with the newest publication date
  sitemapContent += `  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${formattedNewestDate}</lastmod>
    <priority>1.0</priority>
  </url>\n`;

  // Adding the product pages
  products.forEach((product) => {
    // Adjusting the date format to ISO 8601
    const productDate = new Date(product.published.replace(' ', 'T') + 'Z');
    const formattedDate = productDate.toISOString();
    sitemapContent += `  <url>
    <loc>${baseUrl}/${product.slug}</loc>
    <lastmod>${formattedDate}</lastmod>
    <priority>0.5</priority>
    <image:image>
      <image:loc>${baseUrl}/img/${product.year}/${product.id}_0.jpg</image:loc>
      <image:title>${product.title}</image:title>
      <image:caption>${product.shortDescription}</image:caption>
    </image:image>
  </url>\n`;
  });

  sitemapContent += '</urlset>';

  return sitemapContent;
};

// Reading products from the file and creating sitemap.xml
fs.readFile(productsFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Extracting products from the file
  // It is assumed that the file is formatted as correct JavaScript or TypeScript
  // and that the products are stored in a variable named "products"
  const productsMatch = data.match(/const products: Product\[\] = (\[.*?\]);/s);
  if (!productsMatch) {
    console.error('Could not extract products from the file.');
    return;
  }

  const products = eval(productsMatch[1]);

  // Creating the sitemap
  const sitemap = createSitemap(products);

  // Writing the sitemap to file
  fs.writeFile(sitemapFilePath, sitemap, (err) => {
    if (err) {
      console.error('Error writing the sitemap:', err);
    } else {
      console.log('Sitemap successfully created:', sitemapFilePath);
    }
  });
});
