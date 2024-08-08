// const { injectManifest } = require("workbox-build");
import { injectManifest } from "workbox-build";

let workboxConfig = {
    swSrc: "src/service-worker.js",
    swDest: "dist/sw.js",
    globPatterns: ["index.html", "*.css", "*.js"],
};

injectManifest(workboxConfig).then(() => {
    console.log(`Generated ${workboxConfig.swDest}`);
});
