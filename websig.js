const apiKey = 'pk.eyJ1IjoicmFmYW1lbmRvbmNhMTgiLCJhIjoiY2t4ajhpeWRyMHViZjJwdWJlaGlreDVwMyJ9.WV9Pvj_-eymnoA52IeMk3w'

const map = L.map('map').setView([41.155975, -8.622727], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);


// Pop-up 
var gnrsim = L.icon ({
    iconUrl: 'gnr.png',
    iconSize: [30, 20],
    iconAnchor: [50, 50],
    popupAnchor: [-38, -60]
})

var pjsim = L.icon ({
    iconUrl: 'pj.png',
    iconSize: [25, 25],
    iconAnchor: [50, 50],
    popupAnchor: [-38, -60]
})

var pspsim = L.icon ({
    iconUrl: 'vtf.png',
    iconSize: [50, 40],
    iconAnchor: [50, 50],
    popupAnchor: [-35, -55]
})

var prissim = L.icon ({
    iconUrl: 'pris.png',
    iconSize: [35, 35],
    iconAnchor: [50, 50],
    popupAnchor: [-30, -60]
})
// Add Marker
var comdgnr = L.marker([41.147303, -8.617178], {icon: gnrsim}),
    gnrBF = L.marker([41.144878, -8.625872], {icon: gnrsim}),
    pj = L.marker([41.169258, -8.594654], {icon: pjsim}),
    ep = L.marker([41.169255, -8.594381], {icon: prissim}),
    psp1 = L.marker([41.146700, -8.592154], {icon: pspsim}),
    psp2 = L.marker([41.146700, -8.592154], {icon: pspsim}),
    psp3 = L.marker([41.153374, -8.646465], {icon: pspsim}),
    psp4 = L.marker([41.141709, -8.614673], {icon: pspsim}), 
    psp5 = L.marker([41.142906, -8.609289], {icon: pspsim}),
    psp6 = L.marker([41.146626, -8.592352], {icon: pspsim}),
    psp7 = L.marker([41.169395, -8.612839], {icon: pspsim}),
    psp8 = L.marker([41.156047, -8.622728], {icon: pspsim}),
    psp9 = L.marker([41.149500, -8.625799], {icon: pspsim}),
    psp10 = L.marker([41.152233, -8.675085], {icon: pspsim}),
    psp11 = L.marker([41.171331, -8.671491], {icon: pspsim}),
    psp12 = L.marker([41.176705, -8.643784], {icon: pspsim}),
    psp13 = L.marker([41.160357, -8.581123], {icon: pspsim}),
    psp14 = L.marker([41.163431, -8.608636], {icon: pspsim}),
    psp15 = L.marker([41.164902, -8.590014], {icon: pspsim}),
    psp16 = L.marker([41.152765, -8.614278], {icon: pspsim});

// Add Pop-up
let image1 = `
<h3>Comando Territorial GNR </h3>
<div style="text-align:center">
    <img width="150" height="150"src="image1.jpg"/>
</div>
<h4>Morada: Rua do Carmo - 4050-164 Porto</h4>
<h4>Telefone: 223399600</h4>
`
comdgnr.bindPopup(image1);

let image2 = `
<h3>GNR - Brigada Fiscal do Porto</h3>
<div style="text-align:center">
<img width="150" height="150"src="image2.jpg"/>
</div>
<h4>Morada: Rua de Monchique nº 47 - 4050-394 Porto</h4>
<h4>Telefone: n/d</h4>
`
gnrBF.bindPopup(image2);

let image3 = `
<h3>Polícia Judiciária</h3>
<div style="text-align:center">
<img width="150" height="150"src="image3.jpg"/>
</div>
<h4>Morada: Rua Assis Vaz nº 113 - 4200-096 Porto </h4>
<h4>Telefone: 225582000</h4>
`
pj.bindPopup(image3);

let image4 = `
<h3>Estabelecimento Prisional anexo à PJ</h3>
<div style="text-align:center">
<img width="150" height="150"src="image4.jpg"/>
</div>
<h4>Morada: Rua Assis Vaz nº 113 - 4200-096 Porto </h4>
<h4>Telefone: 225021796 </h4>
`
ep.bindPopup(image4);

let image5 = `
<h3>Esqª Bonfim- Int/Fisc Policial-1ª Divisão</h3>
<div style="text-align:center">
<img width="150" height="150"src="image5.jpg"/>
</div>
<h4>Morada: Rua do Heroísmo nº 218 - 4300-255 Porto </h4>
<h4>Telefone: 225898930</h4>
`
psp1.bindPopup(image5);

let image6 = `
<h3>1ª e 7ª Esqª Investigação Criminal-Trânsito</h3>
<div style="text-align:center">
<img width="150" height="150"src="image5.jpg"/>
</div>
<h4>Morada: Rua do Heroísmo nº 218 - 4300-255 Porto</h4>
<h4>Telefone: 225898930 </h4>
`
psp2.bindPopup(image6);

let image7 = `
<h3>Unidade de Polícia Técnica Forense do Porto</h3>
<div style="text-align:center">
<img width="150" height="150"src="image7.jpg"/>
</div>
<h4>Morada: Rua Júlio Lourenço Pinto nº129 - 4150-004 Porto</h4>
<h4>Telefone: 225323520</h4>
`
psp3.bindPopup(image7);

let image8 = `
<h3>9ª Esqª - Infante D. Henrique</h3>
<div style="text-align:center">
<img width="150" height="150"src="image8.jpg"/>
</div>
<h4>Morada: Praça do Infante D Henrique - 4050-116 Porto</h4>
<h4>Telefone: 222073370</h4>
`
psp4.bindPopup(image8);

let image9 = `
<h3>Comando Metropolitano</h3>
<div style="text-align:center">
<img width="150" height="150"src="image9.jpg"/>
</div>
<h4>Morada: Largo Primeiro de Dezembro - 4000-098 Porto</h4>
<h4>Telefone: 222092000</h4>
`
psp5.bindPopup(image9);

let image10 = `
<h3>1ª Divisão Policial/ Divisão Trânsito</h3>
<div style="text-align:center">
<img width="150" height="150"src="image10.jpg"/>
</div>
<h4>Morada: Rua do Heroísmo nº 218 - 4300-255 Porto</h4>
<h4>Telefone: 225898930</h4>
`
psp6.bindPopup(image10);

let image11 = `
<h3>Esqª do Bom Pastor</h3>
<div style="text-align:center">
<img width="150" height="150"src="image11.png"/>
</div>
<h4>Morada: Rua de Vale Formoso nº  469 - 4200-510 Porto</h4>
<h4>Telefone: 225574900</h4>
`
psp7.bindPopup(image11);

let image12 = `
<h3>Esqª de Turismo-12ª Esqª Cedofeita</h3>
<div style="text-align:center">
<img width="150" height="150"src="image12.jpg"/>
</div>
<h4>Morada: Praça de Pedro Nunes nº 16 - 4050-466 Porto</h4>
<h4>Telefone: 222073640</h4>
`
psp8.bindPopup(image12);

let image13 = `
<h3>2ª Divisão Policial</h3>
<div style="text-align:center">
<img width="150" height="150"src="image13.jpg"/>
</div>
<h4>Morada: Rua de Júlio Dinis nº 63 - 4050-323 Porto</h4>
<h4>Telefone: 226071230</h4>
`
psp9.bindPopup(image13);

let image14 = `
<h3>15ª Esqª - Foz</h3>
<div style="text-align:center">
<img width="150" height="150"src="image14.png"/>
</div>
<h4>Morada: Rua Monsenhor Manuel Marinho nº 9 - 4150-482 Porto</h4>
<h4>Telefone: 226153010</h4>
`
psp10.bindPopup(image14);

let image15 = `
<h3>Esqª de Aldoar- Esqª Int/Fisc Policial-2ª Div</h3>
<div style="text-align:center">
<img width="150" height="150"src="image15.jpg"/>
</div>
<h4>Morada: Rua da Vilarinha, nº 1150 - 4100-513 Porto</h4>
<h4>Telefone: 226153000</h4>
`
psp11.bindPopup(image15);

let image16 = `
<h3>18ª Esqª - VISO</h3>
<div style="text-align:center">
<img width="150" height="150"src="image16.jpg"/>
</div>
<h4>Morada: Rua Central do Viso nº 106 - 4250-206 Porto</h4>
<h4>Telefone: 228349340</h4>
`
psp12.bindPopup(image16);

let image17 = `
<h3>4ª Esqª - Corujeira- Int/Fisc Policial-3ª Divisão</h3>
<div style="text-align:center">
<img width="150" height="150"src="image17.jpg"/>
</div>
<h4>Morada: Rua São Roque da Lameira nº 1564 - 4350-315 Porto</h4>
<h4>Telefone: 225193680</h4>
`
psp13.bindPopup(image17);

let image18 = `
<h3>Divisão de Investigação Criminal do Porto</h3>
<div style="text-align:center">
<img width="150" height="150"src="image18.jpg"/>
</div>
<h4>Morada: Rua do Cantor Zeca Afonso - 4200-534 Porto</h4>
<h4>Telefone: 222046460</h4>
`
psp14.bindPopup(image18);

let image19 = `
<h3>3ª Esqª Investigação Criminal do Porto</h3>
<div style="text-align:center">
<img width="150" height="150"src="image19.jpg"/>
</div>
<h4>Morada: Rua de Naulila, nº 206 -  4200-412 Porto</h4>
<h4>Telefone: 225087776</h4>
`
psp15.bindPopup(image19);

let image20 = `
<h3>Esqª Investigação Criminal-Porto (Sede)</h3>
<div style="text-align:center">
<img width="150" height="150"src="image20.jpg"/>
</div>
<h4>Morada: Rua dos Bragas, nº 61 - 4050-123 Porto</h4>
<h4>Telefone: 222046460</h4>
`
psp16.bindPopup(image20);

// Group Layers
var gnr = L.layerGroup([comdgnr,gnrBF]);
var pjud = L.layerGroup([pj]);
var estp = L.layerGroup([ep]);
var psp = L.layerGroup([psp1,psp2,psp3,psp4,psp5,psp6,psp7,psp8,psp9,psp10,psp11,psp12,psp13,psp14,psp15,psp16]);

// Google Map Layer
googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
googleStreets.addTo(map);

// Satelite Layer
googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}),
googleSat.addTo(map);
/// variavel densidade
var concelho;
concelho = L.geoJSON(poligono,{
    style:style,
});

var criminalidade;
criminalidade = L.geoJSON(crime,{
    style:DensidedeCrime});

var porto = L.geoJSON(municipio,{
    style:Concelhocor
});
porto.addTo(map)
//// cor densidaade
function CorDensidade(d) {
    return d >= 97742  ? '#662506' :
    d > 40000 ? '#AA3C03' :
    d > 25000 ? '#E1640E':
    d > 16000  ? '#FE9929' :
    d > 5000   ? '#FECE65' :
    d > 1000   ? '#FFF0AE' :
    d >= 0   ? '#FFFFE5' :
             '';
}

function corCrime(d) {
    return d >= 2413  ? '#F50000' :
    d > 747 ? '#F16500' :
    d > 528  ? '#EDC600' :
    d > 191   ? '#AFEA00' :
    d > 0   ? '#4CE600' :
              '';
}
/// Atribuir cor à densidade
function style(feature) {
    return {
        fillOpacity: 1,
        weight: 2,
        dashArray: '1', 
        color: CorDensidade(feature.properties.Densidade),

        
    };
}
///
function Concelhocor(feature) {
    return {
        fillOpacity: 0.2,
        weight: 2,
        color: 'grey',
        dashArray: '1',  
    };
}
function DensidedeCrime(feature) {
    return {
        color: corCrime(feature.properties.Total_f),
        fillOpacity: 0.5,
        weight: 2,
        dashArray: '1',  
        
    };
}

var overlays = {
    "Guarda Nacional Republicana": gnr,
    "Polícia de Segurança Pública": psp,
    "Polícia Judiciária": pjud,
    "Estabelecimento Prisional": estp,
    "Densidade Populacional": concelho,
    "Criminalidade Registada pela PSP entre 2009 e 2018": criminalidade
};
    
//// Legenda
//// Adicionar legenda apenas quando layer está ativa 
map.on('overlayadd', function(eventLayer){
    if (eventLayer.name === 'Densidade Populacional'){
      map.addControl(legend);
    } 
});
map.on('overlayremove', function(eventLayer){
    if (eventLayer.name === 'Densidade Populacional'){
         map.removeControl(legend);
    } 
});
map.on('overlayadd', function(eventLayer){
    if (eventLayer.name === 'Criminalidade Registada pela PSP entre 2009 e 2018'){
      map.addControl(legend2);
    } 
});

map.on('overlayremove', function(eventLayer){
    if (eventLayer.name === 'Criminalidade Registada pela PSP entre 2009 e 2018'){
         map.removeControl(legend2);
    } 
}); 
////Legenda Densidade
var legend =L.control({position: 'bottomright'});
    legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 1000, 5000, 16000, 25000, 40000, 97742],
        labels = [];

    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
       '<i style="background:' + CorDensidade(grades[i] + 1) + '"></i> ' +
        grades[i] + (grades[i +1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }
        return div;
    };
///// Legenda Crimes
var legend2 =L.control({position: 'bottomright'});
    legend2.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 191, 528, 747, 2413],
        labels = [];

    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
       '<i style="background:' + corCrime(grades[i] + 1) + '"></i> ' +
        grades[i] + (grades[i +1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }
        return div;
    };


// Layers
var baseLayers = {
    "Satelite": googleSat,
    "Google Maps": googleStreets,
};





L.control.layers(baseLayers, overlays).addTo(map);
L.control.scale().addTo(map);
