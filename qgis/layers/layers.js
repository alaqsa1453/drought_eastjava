var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_GridRisikoKekeringan_1 = new ol.format.GeoJSON();
var features_GridRisikoKekeringan_1 = format_GridRisikoKekeringan_1.readFeatures(json_GridRisikoKekeringan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GridRisikoKekeringan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GridRisikoKekeringan_1.addFeatures(features_GridRisikoKekeringan_1);
var lyr_GridRisikoKekeringan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GridRisikoKekeringan_1, 
                style: style_GridRisikoKekeringan_1,
                popuplayertitle: "Grid Risiko Kekeringan",
                interactive: true,
    title: 'Grid Risiko Kekeringan<br />\
    <img src="styles/legend/GridRisikoKekeringan_1_0.png" /> 0,156 - 0,443<br />\
    <img src="styles/legend/GridRisikoKekeringan_1_1.png" /> 0,443 - 0,477<br />\
    <img src="styles/legend/GridRisikoKekeringan_1_2.png" /> 0,477 - 0,503<br />\
    <img src="styles/legend/GridRisikoKekeringan_1_3.png" /> 0,503 - 0,532<br />\
    <img src="styles/legend/GridRisikoKekeringan_1_4.png" /> 0,532 - 0,747<br />'
        });
var format_DesaPetani_2 = new ol.format.GeoJSON();
var features_DesaPetani_2 = format_DesaPetani_2.readFeatures(json_DesaPetani_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaPetani_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaPetani_2.addFeatures(features_DesaPetani_2);
var lyr_DesaPetani_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaPetani_2, 
                style: style_DesaPetani_2,
                popuplayertitle: "Desa Petani",
                interactive: true,
    title: 'Desa Petani<br />\
    <img src="styles/legend/DesaPetani_2_0.png" /> 0 - 0,0088<br />\
    <img src="styles/legend/DesaPetani_2_1.png" /> 0,0088 - 0,0197<br />\
    <img src="styles/legend/DesaPetani_2_2.png" /> 0,0197 - 0,0343<br />\
    <img src="styles/legend/DesaPetani_2_3.png" /> 0,0343 - 0,0644<br />\
    <img src="styles/legend/DesaPetani_2_4.png" /> 0,0644 - 1<br />'
        });
var format_idn_admbnda_adm2_bps_20200401_3 = new ol.format.GeoJSON();
var features_idn_admbnda_adm2_bps_20200401_3 = format_idn_admbnda_adm2_bps_20200401_3.readFeatures(json_idn_admbnda_adm2_bps_20200401_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_idn_admbnda_adm2_bps_20200401_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_idn_admbnda_adm2_bps_20200401_3.addFeatures(features_idn_admbnda_adm2_bps_20200401_3);
var lyr_idn_admbnda_adm2_bps_20200401_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_idn_admbnda_adm2_bps_20200401_3, 
                style: style_idn_admbnda_adm2_bps_20200401_3,
                popuplayertitle: "idn_admbnda_adm2_bps_20200401",
                interactive: false,
                title: '<img src="styles/legend/idn_admbnda_adm2_bps_20200401_3.png" /> idn_admbnda_adm2_bps_20200401'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GridRisikoKekeringan_1.setVisible(true);lyr_DesaPetani_2.setVisible(true);lyr_idn_admbnda_adm2_bps_20200401_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GridRisikoKekeringan_1,lyr_DesaPetani_2,lyr_idn_admbnda_adm2_bps_20200401_3];
lyr_GridRisikoKekeringan_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'IK1': 'IK1', 'IK2': 'IK2', 'IK3': 'IK3', 'R1': 'R1', 'R2': 'R2', 'R3': 'R3', 'area': 'area', });
lyr_DesaPetani_2.set('fieldAliases', {'fid': 'fid', 'Desa': 'Desa', 'Kode Desa': 'Kode Desa', 'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Jumlah Petani': 'Jumlah Petani', 'IRK1': 'IRK1', 'IRK2': 'IRK2', 'IRK3': 'IRK3', 'Indeks Risiko Temporal': 'Indeks Risiko Temporal', });
lyr_idn_admbnda_adm2_bps_20200401_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_GridRisikoKekeringan_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'IK1': 'TextEdit', 'IK2': 'TextEdit', 'IK3': 'TextEdit', 'R1': 'TextEdit', 'R2': 'TextEdit', 'R3': 'TextEdit', 'area': 'TextEdit', });
lyr_DesaPetani_2.set('fieldImages', {'fid': 'TextEdit', 'Desa': 'TextEdit', 'Kode Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Jumlah Petani': 'Range', 'IRK1': 'TextEdit', 'IRK2': 'TextEdit', 'IRK3': 'TextEdit', 'Indeks Risiko Temporal': 'TextEdit', });
lyr_idn_admbnda_adm2_bps_20200401_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_GridRisikoKekeringan_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'inline label - visible with data', 'IK1': 'inline label - visible with data', 'IK2': 'inline label - visible with data', 'IK3': 'inline label - visible with data', 'R1': 'inline label - visible with data', 'R2': 'inline label - visible with data', 'R3': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_DesaPetani_2.set('fieldLabels', {'fid': 'hidden field', 'Desa': 'inline label - visible with data', 'Kode Desa': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Kabupaten': 'inline label - visible with data', 'Jumlah Petani': 'inline label - visible with data', 'IRK1': 'inline label - visible with data', 'IRK2': 'inline label - visible with data', 'IRK3': 'inline label - visible with data', 'Indeks Risiko Temporal': 'inline label - visible with data', });
lyr_idn_admbnda_adm2_bps_20200401_3.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_idn_admbnda_adm2_bps_20200401_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});