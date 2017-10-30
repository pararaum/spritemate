function init() 
{    

    let config = 
    {
      version: 1.14,
      sprite_x: 24,
      sprite_y: 21,
      palettes: {
              "colodore": 
              [
                "#000000","#ffffff","#813338","#75cec8",
                "#8e3c97","#56ac4d","#2e2c9b","#edf171",
                "#8e5029","#553800","#c46c71","#4a4a4a",
                "#7b7b7b","#a9ff9f","#706deb","#b2b2b2"
              ],
              "pepto":
              [
                "#000000","#ffffff","#67372d","#73a3b1",
                "#6e3e83","#5b8d48","#362976","#b7c576",
                "#6c4f2a","#423908","#98675b","#444444",
                "#6c6c6c","#9dd28a","#6d5fb0","#959595"
              ],
              "custom":
              [
                "#000000","#ffffff","#813338","#75cec8",
                "#8e3c97","#56ac4d","#2e2c9b","#edf171",
                "#8e5029","#553800","#c46c71","#4a4a4a",
                "#7b7b7b","#a9ff9f","#706deb","#b2b2b2"
              ]},
      selected_palette: "pepto",
      zoom_editor: 18,
      zoom_preview: 5,
      zoom_list: 4,
      display_grid: true
    };

    let sprite_app = new App(config);
}
