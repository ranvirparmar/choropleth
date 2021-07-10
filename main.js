let jsondata = [];

let states = [
    {
        "name": "Alabama",
        "abbreviation": "AL", 
        'pop':490318,
        'emp':322318
    },
    {
        "name": "Alaska",
        "abbreviation": "AK",
        'pop':732545,
        'emp':533318

    },
    {
        "name": "American Samoa",
        "abbreviation": "AS",
        'pop':535641,
        'emp':422318
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ",
        'pop':732787,
        'emp':322318
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR",
        'pop':917825,
        'emp':522318
    },
    {
        "name": "California",
        "abbreviation": "CA",
        'pop':395122,
        'emp':142318
    },
    {
        "name": "Colorado",
        "abbreviation": "CO",
        'pop':575873,
        'emp':422318
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT",
        'pop':356528,
        'emp':152318
    },
    {
        "name": "Delaware",
        "abbreviation": "DE",
        'pop':973764,
        'emp':322318
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC",
        'pop':370574,
        'emp':523181
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM",
        'pop':323232,
        'emp':122318
    },
    {
        "name": "Florida",
        "abbreviation": "FL",
        'pop':214777,
        'emp':122318
    },
    {
        "name": "Georgia",
        "abbreviation": "GA",
        'pop':1961742,
        'emp':1332318
    },
    {
        "name": "Guam",
        "abbreviation": "GU",
        'pop':1265718,
        'emp':1022318
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI",
        'pop':141587,
        'emp':122318
    },
    {
        "name": "Idaho",
        "abbreviation": "ID",
        'pop':478706,
        'emp':322318
    },
    {
        "name": "Illinois",
        "abbreviation": "IL",
        'pop':1222671,
        'emp':1122318
    },
    {
        "name": "Indiana",
        "abbreviation": "IN",
        'pop':432423,
        'emp':422318
    },
    {
        "name": "Iowa",
        "abbreviation": "IA",
        'pop':627322,
        'emp':322318
    },
    {
        "name": "Kansas",
        "abbreviation": "KS",
        'pop':134534,
        'emp':122318
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY",
        'pop':424133,
        'emp':422318
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA",
        'pop':466487,
        'emp':421318
    },
    {
        "name": "Maine",
        "abbreviation": "ME",
        'pop':735442,
        'emp':253181
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH",
        'pop':3234232,
        'emp':1294318
    },
    {
        "name": "Maryland",
        "abbreviation": "MD",
        'pop':967342,
        'emp':782318
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA",
        'pop':346456,
        'emp':166318
    },
    {
        "name": "Michigan",
        "abbreviation": "MI",
        'pop':154545,
        'emp':131877
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN",
        'pop':5774566,
        'emp':722318
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS",
        'pop':843435,
        'emp':577318
    },
    {
        "name": "Missouri",
        "abbreviation": "MO",
        'pop':535466,
        'emp':422318
    },
    {
        "name": "Montana",
        "abbreviation": "MT",
        'pop':867587,
        'emp':522318
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE",
        'pop':909939,
        'emp':557778
    },
    {
        "name": "Nevada",
        "abbreviation": "NV",
        'pop':323233,
        'emp':122318
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH",
        'pop':445454,
        'emp':222318
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ",
        'pop':4665543,
        'emp':1723181
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM",
        'pop':845460,
        'emp':322318
    },
    {
        "name": "New York",
        "abbreviation": "NY",
        'pop':843535,
        'emp':623181
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC",
        'pop':545345,
        'emp':178318
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND",
        'pop':223333,
        'emp':152318
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP",
        'pop':511232,
        'emp':223181
    },
    {
        "name": "Ohio",
        "abbreviation": "OH",
        'pop':916800,
        'emp':732318
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK",
        'pop':356971,
        'emp':223181
    },
    {
        "name": "Oregon",
        "abbreviation": "OR",
        'pop':421737,
        'emp':223181
    },
    {
        "name": "Palau",
        "abbreviation": "PW",
        'pop':5009935,
        'emp':5223181
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA",
        'pop':1280989,
        'emp':1162318
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR",
        'pop':1319694,
        'emp':1033181
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI",
        'pop':1096123,
        'emp':96123
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC",
        'pop':884659,
        'emp':162318
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD",
        'pop':545443,
        'emp':243181
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN",
        'pop':823374,
        'emp':322318
    },
    {
        "name": "Texas",
        "abbreviation": "TX",
        'pop':295881,
        'emp':223182
    },
    {
        "name": "Utah",
        "abbreviation": "UT",
        'pop':320558,
        'emp':143184
    },
    {
        "name": "Vermont",
        "abbreviation": "VT",
        'pop':623989,
        'emp':184444
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI",
        'pop':104194,
        'emp':223141
    },
    {
        "name": "Virginia",
        "abbreviation": "VA",
        'pop':853519,
        'emp':318441
    },
    {
        "name": "Washington",
        "abbreviation": "WA",
        'pop':761493,
        'emp':601493
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV",
        'pop':179217,
        'emp':122318
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI",
        'pop':582244,
        'emp':322318
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY",
        'pop':5787593,
        'emp':653318
    }
];


var colorDensity = d3.scaleSequential()
                        .domain(d3.extent(states, d=> (d.emp/d.pop)))
                        .interpolator(d3.interpolateGreens);

parentFunction();

function parentFunction() {
        fetch('./states.geojson')
                .then(function(resp){
                    return resp.json();
                })
                .then(function(data){
                    createStates(data);
                });
}

function createStates(statedata) {
    let width = 1000;
    let height = 970;

    let projection = d3.geoMercator();

    let path = d3.geoPath()
                 .projection(projection);

    let svg = d3.select('#chart').append('svg')                 
                .attr('width', width)
                .attr('height', height)
                .attr('transform', 'scale(2.5)')

        svg.append('text')
            .attrs({
                'id':'maintext',
                'x':750,
                'y':310,
                'font-size': 14,
                'font-family':'sans-serif',
                'font-weight':1000
            })
            .text("");                


     function update() {
        let paths = svg.selectAll('path')
                        .data(statedata.features)
                        .join(
                            enter => enter.append('path')
                                .attr('id', (d,i) =>"statepth"+i)
                                .attr('d', path)
                                .attr('stroke', 'black')
                                .attr('stroke-width', 0.1)
                                .attr('transform', 'scale(3,3)'),
                            update => update                                
                        )
                        .call(path => path.transition().duration(200).attr('fill', (d)=>{
                               return getStateT(d.properties["NAME"]);
                        }))
                        .on('mouseover', function(d){
                            let stateTotal = states.filter(function(item){
                                return item.name == d.properties["NAME"];
                            });

                            d3.select("#maintext")
                                .attr('font-size', '15')
                                .text(d.properties["NAME"] + " " + Math.floor((stateTotal[0].emp/stateTotal[0].pop) * 100) + "%");
                        })
                        .on('mouseout', function(d){
                            d3.select("#maintext")
                                .attr('font-size', '14')
                                .text("")    
                        })
     }

        update();               

}

function getStateT(stateName) {
    let stateTotal = states.filter(function(item){          
        return item.name == stateName;
    });

    if(stateTotal[0] == undefined) {
        return;
    }else {
          return colorDensity(stateTotal[0].emp/stateTotal[0].pop);
    }
}
