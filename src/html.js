/*eslint-disable max-len */
export default (manifest, body, state) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-54709608-2"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments) }
          gtag('js', new Date());
          gtag('config', 'UA-54709608-2');
        </script>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="A full, up-to-date schedule of classes, social dances, and events in the greater Seattle area for dances in the swing family, including Lindy Hop, Balboa, Blues, and Shag.">
        <meta name="keywords" content="swing,swing dance,swing dancing,dancing,lindy,lindy hop,charleston,balboa,blues,shag,jazz,partner dance,ballroom,vintage,seattle,washington,capitol hill,fremont,redmond,queen anne">

        <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700|Lobster" rel="stylesheet">
        <link href="${manifest["main.css"]}" rel="stylesheet">
        <title>Swing Dance Seattle</title>
      </head>
      <body>
        <div id="root">${body}</div>

        <script>
          window.APP_STATE = ${JSON.stringify(state)};
        </script>
        <script src="${manifest["runtime.js"]}"></script>
        <script src="${manifest["vendors.js"]}"></script>
        <script src="${manifest["main.js"]}"></script>
      </body>
    </html>
  `;
};
