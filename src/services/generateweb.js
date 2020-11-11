generateweb = (filename) => {
    console.log("Creating HTML exemple")
    const fs = require('fs');
    const path = require('path');

    //var htmlContent = `<html>${teste}</html>`;
    var htmlContent = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="author" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <title>${filename}</title>
    
        <link rel="stylesheet" type="text/css" href="../build/potree/potree.css">
        <link rel="stylesheet" type="text/css" href="../libs/jquery-ui/jquery-ui.min.css">
        <link rel="stylesheet" type="text/css" href="../libs/openlayers3/ol.css">
        <link rel="stylesheet" type="text/css" href="../libs/spectrum/spectrum.css">
        <link rel="stylesheet" type="text/css" href="../libs/jstree/themes/mixed/style.css">
    </head>
    
    <body>
        <script src="../libs/jquery/jquery-3.1.1.min.js"></script>
        <script src="../libs/spectrum/spectrum.js"></script>
        <script src="../libs/jquery-ui/jquery-ui.min.js"></script>
        <script src="../libs/three.js/build/three.min.js"></script>
        <script src="../libs/three.js/extra/lines.js"></script>
        <script src="../libs/other/BinaryHeap.js"></script>
        <script src="../libs/tween/tween.min.js"></script>
        <script src="../libs/d3/d3.js"></script>
        <script src="../libs/proj4/proj4.js"></script>
        <script src="../libs/openlayers3/ol.js"></script>
        <script src="../libs/i18next/i18next.js"></script>
        <script src="../libs/jstree/jstree.js"></script>
        <script src="../build/potree/potree.js"></script>
        <script src="../libs/plasio/js/laslaz.js"></script>
    
        <!-- INCLUDE ADDITIONAL DEPENDENCIES HERE -->
        <!-- INCLUDE SETTINGS HERE -->
    
        <div class="potree_container" style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px; ">
            <div id="potree_render_area" style="background-image: url('../build/potree/resources/images/background.jpg');">
            </div>
            <div id="potree_sidebar_container"> </div>
        </div>
    
        <script>
    
            window.viewer = new Potree.Viewer(document.getElementById("potree_render_area"));
    
            viewer.setEDLEnabled(true);
            viewer.setFOV(60);
            viewer.setPointBudget(1 * 1000 * 1000);
            viewer.loadSettingsFromURL();
    
            viewer.setDescription("Loading Octree of LAS files");
    
            viewer.loadGUI(() => {
                viewer.setLanguage('en');
                $("#menu_appearance").next().show();
                //viewer.toggleSidebar();
            });
    
            // Sigeom
    
            let url = "/var/www/html/potree-senai/pointclouds/${filename}/metadata.json";
            Potree.loadPointCloud(url).then(e => {
                let pointcloud = e.pointcloud;
                let material = pointcloud.material;
    
                material.activeAttributeName = "rgba";
                material.minSize = 2;
                material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
    
                viewer.scene.addPointCloud(pointcloud);
                viewer.fitToScreen();
            });
    
        </script>
    
    
    </body>
    
    </html>
    `;

    //test to mkdir in potree
    // fs.mkdir(path.join('./src/uploads/', `${filename}`), (err) => {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log('Directory created successfully!');
    // });

    fs.writeFile(`./var/www/html/potree-senai/examples/${filename}.html`, htmlContent, (error) => { /* handle error */ });

}


module.exports = generateweb;