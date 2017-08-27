console.log("testing");

/**
 * SVG path for all icons
 */
var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
var milanSVG = "M18.798,16.451l-0.068-0.066v-3.443l-0.138-0.168V9.594l-0.125-0.147L18.046,6.27h-0.104 l-0.274,2.335L17.29,6.27h-0.128l-0.44,3.748l-1.6-1.327V6.015l-0.295-1.937h-0.085l-0.294,1.937v1.748L12.51,6.247v-1.2 l-0.297-3.284h-0.127L11.73,4.668h-0.19l-0.254-2.885H11.14l-0.38,2.842v0.401l-1.052-1.18H9.516l-1.052,1.18V4.625L8.083,1.784 H7.937L7.685,4.668H7.494L7.136,1.763H7.011L6.715,5.048v1.199L4.778,7.763V6.015L4.485,4.078H4.399L4.104,6.015v2.674l-1.6,1.327 l-0.44-3.748H1.936L1.557,8.604L1.285,6.268H1.181l-0.423,3.18L0.631,9.594v3.177L0.495,12.94v3.443l-0.068,0.066H0v1.014h19.225 v-1.014h-0.427V16.451z M15.592,12.412c0,0,0.022-0.188,0.316-0.188c0.292,0,0.34,0.188,0.34,0.188v1.164h-0.656 C15.592,13.576,15.592,12.412,15.592,12.412z M15.905,15.1c0.359,0,0.415,0.229,0.415,0.229v1.123h-0.801v-1.123 C15.519,15.327,15.548,15.1,15.905,15.1z M13.039,10.117c0,0,0.023-0.186,0.317-0.186s0.34,0.186,0.34,0.186v1.166h-0.657 C13.039,11.283,13.039,10.117,13.039,10.117z M13.039,12.412c0,0,0.023-0.188,0.317-0.188s0.34,0.188,0.34,0.188v1.164h-0.657 C13.039,13.576,13.039,12.412,13.039,12.412z M13.353,15.1c0.357,0,0.415,0.229,0.415,0.229v1.123h-0.801v-1.123 C12.967,15.327,12.995,15.1,13.353,15.1z M9.165,7.575c0,0,0.063-0.255,0.464-0.255c0.399,0,0.43,0.255,0.43,0.255v1.487H9.165 V7.575z M9.116,10.909c0,0,0.069-0.283,0.514-0.283s0.479,0.283,0.479,0.283v1.086H9.116V10.909z M9.635,14.284 c0.576,0,0.621,0.367,0.621,0.367v1.801H8.968V14.65C8.968,14.65,9.057,14.284,9.635,14.284z M5.527,10.117 c0,0,0.046-0.186,0.34-0.186s0.318,0.186,0.318,0.186v1.166H5.527V10.117z M5.527,12.412c0,0,0.046-0.188,0.34-0.188 s0.318,0.188,0.318,0.188v1.164H5.527V12.412z M5.87,15.1c0.358,0,0.386,0.229,0.386,0.229v1.123H5.457v-1.123 C5.457,15.327,5.513,15.1,5.87,15.1z M2.975,12.412c0,0,0.048-0.188,0.34-0.188c0.295,0,0.316,0.188,0.316,0.188v1.164H2.975 V12.412z M2.903,15.327c0,0,0.055-0.229,0.415-0.229c0.357,0,0.388,0.229,0.388,0.229v1.123H2.903V15.327z"
var seattleSVG = "M11.811,19.136c-0.221-1.871-1.037-8.879-1.037-10.726c0-1.92,0.633-4.083,0.762-4.557h0.158c0,0,0.387,0,0.568-0.064 c0.102-0.037,0.254-0.127,0.369-0.2h0.402l0.202-0.419h0.15V2.941h-0.436V2.837h0.002c0,0-0.396-0.212-0.924-0.333 c-0.529-0.124-1.011-0.243-1.011-0.243s-0.152-0.107-0.044-0.168c0.108-0.06,0.243-0.136,0.243-0.196c0-0.062,0-0.091,0-0.091 h-0.17c-0.033-0.073-0.103-0.187-0.26-0.296c-0.17-0.12-0.42-0.192-0.569-0.224V0H9.993v1.287C9.843,1.318,9.591,1.39,9.423,1.51 C9.266,1.619,9.195,1.733,9.161,1.805H8.993c0,0,0,0.029,0,0.091c0,0.061,0.134,0.137,0.243,0.196 c0.11,0.062-0.043,0.169-0.043,0.169S8.709,2.38,8.183,2.503C7.655,2.625,7.258,2.837,7.258,2.837v0.104H6.824V3.17h0.245 l0.197,0.419h0.312c0.115,0.072,0.269,0.163,0.369,0.199C8.13,3.854,8.513,3.854,8.513,3.854h0.119 c0.117,0.604,0.65,3.533,0.473,5.786c-0.091,1.16-1.044,7.777-1.295,9.496H6.553v0.802h6.454v-0.802H11.811z M7.69,3.325V3.092 h4.912v0.233H7.69z M8.718,19.136c0.183-1.613,0.842-7.547,0.924-9.771c0.086-2.268-0.381-4.902-0.496-5.511h0.495 c0.023,0.479,0.102,1.904,0.181,3.042C9.906,8.118,10.246,17,10.33,19.137L8.718,19.136L8.718,19.136z M10.393,6.469 c-0.229,0-0.296-2.053-0.309-2.615h0.899C10.948,4.182,10.69,6.472,10.393,6.469z"
var laSVG = "M13.518,8.24l-0.107,0.11v1.167l0.179,0.139l0.226,0.015l0.166-0.111V8.365L13.799,8.24H13.518z M15.904,8.336c-0.098,0-0.264,0.101-0.264,0.101l0.055,1.205l0.152,0.124l0.223,0.015l0.183-0.109V8.504l-0.099-0.111 C16.154,8.392,16.002,8.336,15.904,8.336z M3.567,7.657L3.414,7.794v1.182l0.168,0.11h0.263l0.167-0.097V7.794L3.845,7.657H3.567z M18.486,6.349c-0.609,0-0.9,0.026-1.752,0.101c-0.848,0.076-2.039,0.076-3.084,0.076s-2.26,0.152-2.721,0.077 c-0.463-0.077-1.215,0.1-1.651-0.302C8.842,5.895,8.987,6.224,8.622,6.073C8.259,5.92,8.089,6.022,7.627,5.77 C7.166,5.519,6.849,5.644,6.268,5.72C5.683,5.795,5.102,5.795,4.883,5.795c-0.22,0-0.535-0.024-0.657,0 C4.104,5.82,3.911,5.92,3.814,5.92s-0.34,0.128-0.437,0.178c-0.099,0.05-0.366,0.126-0.486,0.25c-0.122,0.127,0,0-0.122,0.176 c-0.123,0.177-0.168,0-0.269,0.024C2.404,6.575,2.234,6.601,2.113,6.625C1.993,6.65,2.04,6.65,1.895,6.65 c-0.146,0-0.243,0.05-0.486-0.049C1.165,6.499,1.142,6.625,1.045,6.677c-0.099,0.05-0.025,0.075-0.22,0.1 c-0.193,0.025-0.51,0-0.51,0L0,6.752v7.326h19.699V6.374C19.699,6.374,19.093,6.349,18.486,6.349z M2.319,9.754H1.693V8.85h-0.61 v0.903H0.46V7.38h0.623v0.887h0.61V7.38h0.626V9.754z M4.621,9.225L4.022,9.601H3.336l-0.56-0.336V7.552l0.53-0.353h0.772 L4.62,7.561L4.621,9.225L4.621,9.225z M6.779,9.601L5.261,9.559V7.227l0.568,0.027l0.015,1.831L6.78,9.142L6.779,9.601L6.779,9.601 z M8.599,9.712l-1.548-0.11L7.064,7.31l0.598,0.029v1.775L8.6,9.184L8.599,9.712L8.599,9.712z M9.604,9.003V9.78L8.911,9.766 L8.898,8.961L8.312,7.365l0.6,0.028l0.334,0.9l0.331-0.888l0.595,0.041L9.604,9.003z M11.963,10.042h-0.292l-0.317-0.846 l-0.318,0.806h-0.319l-0.402-2.33L10.873,7.7l0.164,0.79L11.2,7.701h0.305l0.265,0.872l0.181-0.833h0.474L11.963,10.042z M14.572,9.78l-0.526,0.333h-0.709L12.77,9.78V8.086l0.525-0.292h0.709l0.568,0.335V9.78z M16.833,9.892l-0.429,0.333l-0.778,0.013 l-0.499-0.359L15.1,8.198l0.486-0.292l0.723,0.015l0.524,0.333V9.892z M19.232,9.616l-0.558,0.333h-1.303l-0.028-2.332l1.277-0.04 l0.61,0.304v1.735H19.232z M18.4,8.061l-0.416,0.015l0.013,1.374c0,0,0.375,0.041,0.444,0.013c0.067-0.026,0.139-0.138,0.139-0.138 s0.016-1.069,0-1.151C18.566,8.09,18.4,8.061,18.4,8.061z"
var bkkSVG = "M17.111,17.367c0.028-0.15,0.024-0.355-0.094-0.58c-0.331-0.635-0.919-0.607-0.919-0.607s-0.104-0.078-0.409-0.367 c-0.307-0.289-0.678-1.062-0.92-1.371c-0.359-0.457-0.684-0.535-0.786-0.551c-0.216-0.242-0.468-0.57-0.645-0.951 c-0.385-0.814-0.486-1.289-0.844-2.715c-0.245-0.971-0.752-1.303-1.047-1.417V8.197h-0.23V7.433h-0.259L9.471,0H9.043l-1.49,7.433 h-0.26v0.765h-0.23v0.61C6.767,8.921,6.26,9.253,6.016,10.225c-0.357,1.426-0.46,1.9-0.841,2.715 c-0.18,0.381-0.432,0.709-0.647,0.951c-0.099,0.016-0.424,0.094-0.784,0.551c-0.241,0.309-0.611,1.082-0.919,1.371 c-0.307,0.289-0.408,0.367-0.408,0.367s-0.589-0.025-0.921,0.607c-0.117,0.225-0.121,0.43-0.095,0.58H0.598v1.145h17.316v-1.145 H17.111z M4.578,14.283l0.227-0.119h8.903l0.229,0.119c0.021,0.002,0.167,0.025,0.37,0.223H4.206 C4.41,14.311,4.557,14.285,4.578,14.283z M3.734,15.176c0.039-0.066,0.078-0.131,0.114-0.191h10.817 c0.036,0.061,0.075,0.125,0.114,0.191c0.029,0.049,0.061,0.1,0.089,0.148H3.644C3.676,15.274,3.703,15.225,3.734,15.176z M3.043,16.143c0.013-0.014,0.026-0.025,0.04-0.039c0.085-0.08,0.171-0.184,0.257-0.301h11.837 c0.084,0.117,0.169,0.221,0.255,0.301c0.014,0.014,0.025,0.025,0.04,0.039H3.043z"
var hkSVG = "M0,4.355v0.458c1.526,1.793,3.714,2.686,5.641,3.125H5.62v6.529H3.867v0.682h11.767v-0.682h-1.752V7.938h-0.021 c1.927-0.439,4.115-1.332,5.642-3.125V4.355H0z M11.169,4.952h1.973V5.73h-1.973C11.169,5.73,11.169,4.952,11.169,4.952z M13.425,10.306v3.871h-1.238v-3.871H13.425z M11.169,5.99h1.973v0.636h-1.973C11.169,6.626,11.169,5.99,11.169,5.99z M11.169,6.887h1.973v0.475c-0.732,0.147-1.416,0.224-1.973,0.263C11.169,7.625,11.169,6.887,11.169,6.887z M8.765,4.952h1.975 V5.73H8.765V4.952z M8.765,5.99h1.975v0.636H8.765V5.99z M8.765,6.887h1.975V7.65C10.246,7.671,9.9,7.664,9.77,7.659L9.751,7.657 L9.73,7.659C9.602,7.664,9.256,7.671,8.765,7.65V6.887z M6.36,4.952h1.973V5.73H6.36V4.952z M6.36,5.99h1.973v0.636H6.36V5.99z M6.36,6.887h1.973v0.738C7.774,7.586,7.097,7.508,6.36,7.361V6.887z M6.059,10.306h1.259v3.871H6.059V10.306z M4.304,4.952H5.93 V5.73H4.304V4.952z M4.304,5.99H5.93v0.636H4.304V5.99z M4.587,6.887H5.93V7.27C5.493,7.168,5.04,7.044,4.587,6.887z M7.976,14.467 V8.871h3.55v5.597h-3.55V14.467z M13.571,7.27V6.887h1.345C14.462,7.044,14.009,7.168,13.571,7.27z M15.196,6.627h-1.625V5.99 h1.625V6.627z M15.196,5.73h-1.625V4.952h1.625V5.73z"

// Map Listener Functions
function clickIcon(event){
    console.log("you clicked an icon");
    var location = event.mapObject.title;
    console.log(location);
//    $('#' + location).addClass("is-active");
    $('.cover-img').hide();
    $('.location-description').hide();
//    $('#cover-' + location).show();
    $('.' + location).show();
}


/**
 * Create the map
 */
var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",

  "listeners": [{
    "event": "clickMapObject",
    "method": clickIcon
  } ],

  "theme": "light",

  "dataProvider": {
    "map": "worldLow",
    "zoomLevel": 2,
    "zoomLongitude": 0,
    "zoomLatitude": 40,

    // These are both the same line; it's just one is for going forward, the other going backward
    "lines": [ {
      "id": "line1",
      "arc": -0.6,
      "alpha": 0.3,
      "latitudes": [34, 22, 13, 45, 47, 34],
      "longitudes": [-118, 114, 100, 9, -122, -118]
    } ],

    "images": [ {
      "svgPath": milanSVG,
      "title": "milan",
      "latitude": 45,
      "longitude": 9,
      "scale": 3,
      "selectable": true
    }, {
      "svgPath": hkSVG,
      "title": "hk",
      "latitude": 22,
      "longitude": 114,
      "scale": 3,
      "selectable": true
    }, {
      "svgPath": laSVG,
      "title": "la",
      "latitude": 34.3,
      "longitude": -118.15,
      "scale": 3,
      "selectable": true
    }, {
      "svgPath": bkkSVG,
      "title": "bkk",
      "latitude": 13,
      "longitude": 100,
      "scale": 3,
      "selectable": true
    }, {
      "svgPath": seattleSVG,
      "title": "seattle",
      "latitude": 47,
      "longitude": -122,
      "scale": 3,
      "selectable": true
    }, {
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#585869",
      "animateAlongLine": true,
      "lineId": "line1",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
      "positionScale": 1.8
    } ]
  },

  "areasSettings": {
    "unlistedAreasColor": "green"
  },

  "imagesSettings": {
    "color": "#585869",
    "rollOverColor": "#585869",
    "selectedColor": "#585869",
    "pauseDuration": 0.2,
    "animationDuration": 3.5,
    "adjustAnimationSpeed": true
  },

  "linesSettings": {
    "color": "#585869",
    "alpha": 0.4
  },

} );

// Other listeners
$(document).ready(function() {
    // Closing the modals
    $('.close-modal').click(function() {
        $(".modal").removeClass("is-active");
    });

    $('.hk').hide();
    $('.bkk').hide();
    $('.milan').hide();
    $('.seattle').hide();

});

