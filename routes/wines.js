
var wines = populateWineList();

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving wine: ' + id);
    res.send('end-point not implemented');
};

exports.findAll = function(req, res) {
    console.log('Retrieving all items.');
    res.send(wines);
};

exports.addWine = function(req, res) {
    var wine = req.body;
    console.log('Adding wine: ' + JSON.stringify(wine));
    res.send('end-point not implemented');
};

exports.updateWine = function(req, res) {
    var id = req.params.id;
    var wine = req.body;
    console.log('Updating wine: ' + id);
    console.log(JSON.stringify(wine));
    res.send('end-point not implemented');
}

exports.deleteWine = function(req, res) {
    var id = req.params.id;
    console.log('Deleting wine: ' + id);
    res.send('end-point not implemented');
};

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
function populateWineList() {

    return [
        {
            name: "CHATEAU DE SAINT COSME",
            year: "2009",
            grapes: "Grenache / Syrah",
            country: "France",
            region: "Southern Rhone",
            description: "The aromas of fruit and spice...",
            picture: "saint_cosme.jpg"
        },
        {
            name: "LAN RIOJA CRIANZA",
            year: "2006",
            grapes: "Tempranillo",
            country: "Spain",
            region: "Rioja",
            description: "A resurgence of interest in boutique vineyards...",
            picture: "lan_rioja.jpg"
        }];
};