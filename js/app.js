(function() {
    var app = angular.module('conference', []);
    //Controller in change of what is displayed to user
    app.controller('DisplayedToUser', function () {
        this.stage = 1;
        this.updateStage = function(stageNum) {
            this.stage = stageNum;
        };
    });

    //Controller in charge of api calls/data assoicated with top 10 cities
    app.controller('TopTenController', function () {
        this.data = [ {
            "destination" : "RIC",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-23",
            "price" : "82.20",
            "airline" : "B6"
        }, {
            "destination" : "EWR",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-09",
            "price" : "112.20",
            "airline" : "B6"
        }, {
            "destination" : "CLE",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-16",
            "price" : "116.20",
            "airline" : "NK"
        }, {
            "destination" : "PHL",
            "departure_date" : "2015-09-06",
            "return_date" : "2015-09-11",
            "price" : "124.20",
            "airline" : "B6"
        }, {
            "destination" : "DTT",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-16",
            "price" : "126.02",
            "airline" : "NK"
        }, {
            "destination" : "BUF",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-14",
            "price" : "126.20",
            "airline" : "US"
        }, {
            "destination" : "CHS",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-23",
            "price" : "135.20",
            "airline" : "UA"
        }, {
            "destination" : "SAV",
            "departure_date" : "2015-09-06",
            "return_date" : "2015-09-22",
            "price" : "135.20",
            "airline" : "UA"
        }, {
            "destination" : "BWI",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-22",
            "price" : "136.20",
            "airline" : "B6"
        }, {
            "destination" : "PIT",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-09",
            "price" : "136.20",
            "airline" : "US"
        }, {
            "destination" : "WAS",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-16",
            "price" : "136.20",
            "airline" : "B6"
        }, {
            "destination" : "IAD",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-09",
            "price" : "140.20",
            "airline" : "UA"
        }, {
            "destination" : "DCA",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-21",
            "price" : "150.20",
            "airline" : "US"
        }, {
            "destination" : "ATL",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-17",
            "price" : "156.20",
            "airline" : "NK"
        }, {
            "destination" : "CHI",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-10",
            "price" : "156.20",
            "airline" : "NK"
        }, {
            "destination" : "ORD",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-16",
            "price" : "156.20",
            "airline" : "NK"
        }, {
            "destination" : "CLT",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-15",
            "price" : "174.70",
            "airline" : "B6"
        }, {
            "destination" : "FLL",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-16",
            "price" : "176.20",
            "airline" : "NK"
        }, {
            "destination" : "JFK",
            "departure_date" : "2015-09-11",
            "return_date" : "2015-09-16",
            "price" : "176.20",
            "airline" : "US"
        }, {
            "destination" : "CAE",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-23",
            "price" : "183.20",
            "airline" : "DL"
        }, {
            "destination" : "MDW",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-14",
            "price" : "183.20",
            "airline" : "DL"
        }, {
            "destination" : "MYR",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-23",
            "price" : "186.20",
            "airline" : "NK"
        }, {
            "destination" : "ROC",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-14",
            "price" : "189.23",
            "airline" : "B6"
        }, {
            "destination" : "SYR",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-10",
            "price" : "189.23",
            "airline" : "B6"
        }, {
            "destination" : "CAK",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-16",
            "price" : "191.20",
            "airline" : "DL"
        }, {
            "destination" : "PBI",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-11",
            "price" : "193.20",
            "airline" : "DL"
        }, {
            "destination" : "BNA",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-29",
            "price" : "199.70",
            "airline" : "DL"
        }, {
            "destination" : "JAX",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-15",
            "price" : "207.95",
            "airline" : "B6"
        }, {
            "destination" : "TPA",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-14",
            "price" : "209.20",
            "airline" : "DL"
        }, {
            "destination" : "FAY",
            "departure_date" : "2015-09-12",
            "return_date" : "2015-09-15",
            "price" : "212.70",
            "airline" : "DL"
        }, {
            "destination" : "FMY",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-15",
            "price" : "213.20",
            "airline" : "DL"
        }, {
            "destination" : "RSW",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-15",
            "price" : "213.20",
            "airline" : "DL"
        }, {
            "destination" : "MIA",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-21",
            "price" : "217.20",
            "airline" : "DL"
        }, {
            "destination" : "DAB",
            "departure_date" : "2015-09-11",
            "return_date" : "2015-09-15",
            "price" : "225.20",
            "airline" : "DL"
        }, {
            "destination" : "MLB",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-14",
            "price" : "225.20",
            "airline" : "DL"
        }, {
            "destination" : "OAJ",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-23",
            "price" : "225.20",
            "airline" : "DL"
        }, {
            "destination" : "LAN",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-14",
            "price" : "227.20",
            "airline" : "UA"
        }, {
            "destination" : "ORF",
            "departure_date" : "2015-09-12",
            "return_date" : "2015-09-15",
            "price" : "227.70",
            "airline" : "US"
        }, {
            "destination" : "MCO",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-15",
            "price" : "228.20",
            "airline" : "B6"
        }, {
            "destination" : "ORL",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-10",
            "price" : "228.20",
            "airline" : "B6"
        }, {
            "destination" : "BMI",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-15",
            "price" : "233.20",
            "airline" : "DL"
        }, {
            "destination" : "MLI",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-16",
            "price" : "233.20",
            "airline" : "UA"
        }, {
            "destination" : "PHF",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-22",
            "price" : "248.20",
            "airline" : "AA"
        }, {
            "destination" : "FNT",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-16",
            "price" : "251.20",
            "airline" : "DL"
        }, {
            "destination" : "CMH",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-12",
            "price" : "252.20",
            "airline" : "US"
        }, {
            "destination" : "MKE",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-23",
            "price" : "252.20",
            "airline" : "DL"
        }, {
            "destination" : "GSP",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-09-22",
            "price" : "254.70",
            "airline" : "DL"
        }, {
            "destination" : "HOU",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-16",
            "price" : "260.20",
            "airline" : "UA"
        }, {
            "destination" : "IAH",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-16",
            "price" : "260.20",
            "airline" : "UA"
        }, {
            "destination" : "ALB",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-15",
            "price" : "261.20",
            "airline" : "US"
        }, {
            "destination" : "LAS",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-15",
            "price" : "266.20",
            "airline" : "NK"
        }, {
            "destination" : "BTR",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-13",
            "price" : "267.20",
            "airline" : "UA"
        }, {
            "destination" : "GPT",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-10",
            "price" : "267.20",
            "airline" : "UA"
        }, {
            "destination" : "CHA",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-15",
            "price" : "273.20",
            "airline" : "DL"
        }, {
            "destination" : "MSY",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-29",
            "price" : "275.20",
            "airline" : "UA"
        }, {
            "destination" : "AVL",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-23",
            "price" : "280.20",
            "airline" : "UA"
        }, {
            "destination" : "MCI",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-23",
            "price" : "283.20",
            "airline" : "US"
        }, {
            "destination" : "MKC",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-09",
            "price" : "283.20",
            "airline" : "US"
        }, {
            "destination" : "ILM",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-10",
            "price" : "284.20",
            "airline" : "US"
        }, {
            "destination" : "PHX",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-14",
            "price" : "289.20",
            "airline" : "DL"
        }, {
            "destination" : "MSP",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-09",
            "price" : "290.20",
            "airline" : "NK"
        }, {
            "destination" : "GSO",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-23",
            "price" : "294.20",
            "airline" : "US"
        }, {
            "destination" : "STT",
            "departure_date" : "2015-09-06",
            "return_date" : "2015-09-13",
            "price" : "298.60",
            "airline" : "US"
        }, {
            "destination" : "STL",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-15",
            "price" : "301.20",
            "airline" : "DL"
        }, {
            "destination" : "BTV",
            "departure_date" : "2015-09-17",
            "return_date" : "2015-09-23",
            "price" : "303.20",
            "airline" : "UA"
        }, {
            "destination" : "DSM",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-10",
            "price" : "303.20",
            "airline" : "UA"
        }, {
            "destination" : "PDX",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-16",
            "price" : "303.20",
            "airline" : "NK"
        }, {
            "destination" : "YTO",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-12",
            "price" : "303.51",
            "airline" : "PD"
        }, {
            "destination" : "PSE",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-09",
            "price" : "304.12",
            "airline" : "B6"
        }, {
            "destination" : "DAY",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-19",
            "price" : "308.20",
            "airline" : "US"
        }, {
            "destination" : "TLH",
            "departure_date" : "2015-09-06",
            "return_date" : "2015-09-09",
            "price" : "309.20",
            "airline" : "B6"
        }, {
            "destination" : "HSV",
            "departure_date" : "2015-09-06",
            "return_date" : "2015-09-14",
            "price" : "310.20",
            "airline" : "US"
        }, {
            "destination" : "CID",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-21",
            "price" : "312.20",
            "airline" : "DL"
        }, {
            "destination" : "SGF",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-19",
            "price" : "312.20",
            "airline" : "UA"
        }, {
            "destination" : "SHV",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-14",
            "price" : "312.20",
            "airline" : "DL"
        }, {
            "destination" : "SAN",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-23",
            "price" : "316.20",
            "airline" : "AS"
        }, {
            "destination" : "ICT",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-17",
            "price" : "317.20",
            "airline" : "DL"
        }, {
            "destination" : "FYV",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-21",
            "price" : "318.20",
            "airline" : "UA"
        }, {
            "destination" : "SDF",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-16",
            "price" : "319.20",
            "airline" : "UA"
        }, {
            "destination" : "MEM",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-16",
            "price" : "321.70",
            "airline" : "US"
        }, {
            "destination" : "DEN",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-15",
            "price" : "322.20",
            "airline" : "UA"
        }, {
            "destination" : "AUS",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-16",
            "price" : "323.20",
            "airline" : "DL"
        }, {
            "destination" : "YYZ",
            "departure_date" : "2015-09-11",
            "return_date" : "2015-09-12",
            "price" : "323.85",
            "airline" : "UA"
        }, {
            "destination" : "PSP",
            "departure_date" : "2015-09-25",
            "return_date" : "2015-10-05",
            "price" : "327.20",
            "airline" : "VX"
        }, {
            "destination" : "SAC",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-09-25",
            "price" : "329.20",
            "airline" : "UA"
        }, {
            "destination" : "BHM",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-16",
            "price" : "330.20",
            "airline" : "US"
        }, {
            "destination" : "BOI",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-28",
            "price" : "331.20",
            "airline" : "UA"
        }, {
            "destination" : "SLC",
            "departure_date" : "2015-09-06",
            "return_date" : "2015-09-08",
            "price" : "333.20",
            "airline" : "B6"
        }, {
            "destination" : "CUN",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-09",
            "price" : "333.51",
            "airline" : "AM"
        }, {
            "destination" : "BQN",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-23",
            "price" : "338.08",
            "airline" : "NK"
        }, {
            "destination" : "ABQ",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-24",
            "price" : "339.20",
            "airline" : "UA"
        }, {
            "destination" : "COS",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-29",
            "price" : "340.70",
            "airline" : "DL"
        }, {
            "destination" : "OAK",
            "departure_date" : "2015-09-11",
            "return_date" : "2015-09-14",
            "price" : "342.20",
            "airline" : "B6"
        }, {
            "destination" : "EUG",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-28",
            "price" : "343.20",
            "airline" : "UA"
        }, {
            "destination" : "MFR",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-14",
            "price" : "343.20",
            "airline" : "UA"
        }, {
            "destination" : "CVG",
            "departure_date" : "2015-09-19",
            "return_date" : "2015-09-26",
            "price" : "344.20",
            "airline" : "UA"
        }, {
            "destination" : "TYS",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-25",
            "price" : "344.20",
            "airline" : "US"
        }, {
            "destination" : "RNO",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-14",
            "price" : "345.20",
            "airline" : "UA"
        }, {
            "destination" : "PNS",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-10",
            "price" : "346.20",
            "airline" : "US"
        }, {
            "destination" : "SJC",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-29",
            "price" : "347.20",
            "airline" : "AS"
        }, {
            "destination" : "MEX",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-11",
            "price" : "347.55",
            "airline" : "AM"
        }, {
            "destination" : "JAN",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-14",
            "price" : "349.20",
            "airline" : "US"
        }, {
            "destination" : "PLS",
            "departure_date" : "2015-09-06",
            "return_date" : "2015-09-08",
            "price" : "352.60",
            "airline" : "US"
        }, {
            "destination" : "ONT",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-16",
            "price" : "356.70",
            "airline" : "UA"
        }, {
            "destination" : "SJU",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-10",
            "price" : "357.00",
            "airline" : "US"
        }, {
            "destination" : "STI",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-16",
            "price" : "358.20",
            "airline" : "NK"
        }, {
            "destination" : "BUR",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-14",
            "price" : "359.20",
            "airline" : "UA"
        }, {
            "destination" : "SFO",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-15",
            "price" : "359.20",
            "airline" : "DL"
        }, {
            "destination" : "ISP",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-16",
            "price" : "360.20",
            "airline" : "US"
        }, {
            "destination" : "OMA",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-16",
            "price" : "360.70",
            "airline" : "UA"
        }, {
            "destination" : "LEX",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-14",
            "price" : "362.20",
            "airline" : "US"
        }, {
            "destination" : "SNA",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-28",
            "price" : "363.20",
            "airline" : "AS"
        }, {
            "destination" : "EYW",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-23",
            "price" : "369.20",
            "airline" : "B6"
        }, {
            "destination" : "LGB",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-30",
            "price" : "369.20",
            "airline" : "DL"
        }, {
            "destination" : "PAP",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-10",
            "price" : "371.46",
            "airline" : "NK"
        }, {
            "destination" : "MSN",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-19",
            "price" : "373.20",
            "airline" : "UA"
        }, {
            "destination" : "LAX",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-09",
            "price" : "374.20",
            "airline" : "AS"
        }, {
            "destination" : "NAS",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-09",
            "price" : "374.60",
            "airline" : "US"
        }, {
            "destination" : "MBJ",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-08",
            "price" : "379.07",
            "airline" : "NK"
        }, {
            "destination" : "YUL",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-15",
            "price" : "379.95",
            "airline" : "AA"
        }, {
            "destination" : "MOB",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-23",
            "price" : "380.70",
            "airline" : "US"
        }, {
            "destination" : "MLM",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-16",
            "price" : "381.07",
            "airline" : "US"
        }, {
            "destination" : "TUL",
            "departure_date" : "2015-09-26",
            "return_date" : "2015-09-29",
            "price" : "381.20",
            "airline" : "US"
        }, {
            "destination" : "YOW",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-10",
            "price" : "383.36",
            "airline" : "US"
        }, {
            "destination" : "GRB",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-14",
            "price" : "385.20",
            "airline" : "US"
        }, {
            "destination" : "HRL",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-09",
            "price" : "385.20",
            "airline" : "UA"
        }, {
            "destination" : "YMQ",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-16",
            "price" : "385.61",
            "airline" : "AA"
        }, {
            "destination" : "YHZ",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-15",
            "price" : "385.62",
            "airline" : "US"
        }, {
            "destination" : "LIT",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-23",
            "price" : "386.20",
            "airline" : "US"
        }, {
            "destination" : "OKC",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-24",
            "price" : "386.20",
            "airline" : "US"
        }, {
            "destination" : "TUS",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-15",
            "price" : "387.20",
            "airline" : "DL"
        }, {
            "destination" : "YVR",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-23",
            "price" : "387.78",
            "airline" : "UA"
        }, {
            "destination" : "ABE",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-14",
            "price" : "391.20",
            "airline" : "US"
        }, {
            "destination" : "BGR",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-14",
            "price" : "391.20",
            "airline" : "US"
        }, {
            "destination" : "SAT",
            "departure_date" : "2015-09-12",
            "return_date" : "2015-09-16",
            "price" : "391.20",
            "airline" : "US"
        }, {
            "destination" : "PVR",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-08",
            "price" : "393.04",
            "airline" : "AM"
        }, {
            "destination" : "ELP",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-14",
            "price" : "393.20",
            "airline" : "UA"
        }, {
            "destination" : "SBA",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-09",
            "price" : "393.20",
            "airline" : "UA"
        }, {
            "destination" : "SBN",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-14",
            "price" : "395.20",
            "airline" : "UA"
        }, {
            "destination" : "BJX",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-09-25",
            "price" : "395.95",
            "airline" : "AM"
        }, {
            "destination" : "HPN",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-21",
            "price" : "396.70",
            "airline" : "US"
        }, {
            "destination" : "GDL",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-09",
            "price" : "398.37",
            "airline" : "AM"
        }, {
            "destination" : "MZT",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-09-24",
            "price" : "398.93",
            "airline" : "AM"
        }, {
            "destination" : "LBB",
            "departure_date" : "2015-09-12",
            "return_date" : "2015-09-15",
            "price" : "399.20",
            "airline" : "UA"
        }, {
            "destination" : "HAR",
            "departure_date" : "2015-09-12",
            "return_date" : "2015-09-19",
            "price" : "400.20",
            "airline" : "US"
        }, {
            "destination" : "AUA",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-09",
            "price" : "405.10",
            "airline" : "UA"
        }, {
            "destination" : "MFE",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-16",
            "price" : "409.20",
            "airline" : "UA"
        }, {
            "destination" : "CUR",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-15",
            "price" : "410.60",
            "airline" : "US"
        }, {
            "destination" : "STX",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-18",
            "price" : "412.10",
            "airline" : "US"
        }, {
            "destination" : "SJO",
            "departure_date" : "2015-09-17",
            "return_date" : "2015-09-22",
            "price" : "413.93",
            "airline" : "DL"
        }, {
            "destination" : "VPS",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-14",
            "price" : "414.20",
            "airline" : "US"
        }, {
            "destination" : "BDA",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-09-24",
            "price" : "415.25",
            "airline" : "DL"
        }, {
            "destination" : "MSO",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-28",
            "price" : "417.20",
            "airline" : "UA"
        }, {
            "destination" : "PTY",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-30",
            "price" : "418.10",
            "airline" : "NK"
        }, {
            "destination" : "BGI",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-16",
            "price" : "418.80",
            "airline" : "AA"
        }, {
            "destination" : "YQB",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-16",
            "price" : "419.65",
            "airline" : "US"
        }, {
            "destination" : "SXM",
            "departure_date" : "2015-09-06",
            "return_date" : "2015-09-11",
            "price" : "424.51",
            "airline" : "US"
        }, {
            "destination" : "SDQ",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-15",
            "price" : "424.60",
            "airline" : "DL"
        }, {
            "destination" : "POS",
            "departure_date" : "2015-09-25",
            "return_date" : "2015-09-29",
            "price" : "425.98",
            "airline" : "BW"
        }, {
            "destination" : "PUJ",
            "departure_date" : "2015-09-06",
            "return_date" : "2015-09-09",
            "price" : "435.20",
            "airline" : "US"
        }, {
            "destination" : "BLI",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-21",
            "price" : "439.20",
            "airline" : "AS"
        }, {
            "destination" : "SLU",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-10-03",
            "price" : "439.61",
            "airline" : "AA"
        }, {
            "destination" : "LIR",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-23",
            "price" : "443.42",
            "airline" : "DL"
        }, {
            "destination" : "ZIH",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-09",
            "price" : "446.56",
            "airline" : "AM"
        }, {
            "destination" : "GUA",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-16",
            "price" : "448.18",
            "airline" : "NK"
        }, {
            "destination" : "SAP",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-22",
            "price" : "455.57",
            "airline" : "NK"
        }, {
            "destination" : "ANC",
            "departure_date" : "2015-09-06",
            "return_date" : "2015-09-14",
            "price" : "458.50",
            "airline" : "UA"
        }, {
            "destination" : "GND",
            "departure_date" : "2015-09-24",
            "return_date" : "2015-09-27",
            "price" : "464.08",
            "airline" : "B6"
        }, {
            "destination" : "YYJ",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-11",
            "price" : "464.43",
            "airline" : "AC"
        }, {
            "destination" : "KIN",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-18",
            "price" : "466.67",
            "airline" : "US"
        }, {
            "destination" : "VER",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-20",
            "price" : "466.67",
            "airline" : "DL"
        }, {
            "destination" : "YWG",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-25",
            "price" : "468.94",
            "airline" : "UA"
        }, {
            "destination" : "AGU",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-16",
            "price" : "469.82",
            "airline" : "DL"
        }, {
            "destination" : "BZE",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-09-30",
            "price" : "472.85",
            "airline" : "DL"
        }, {
            "destination" : "RTB",
            "departure_date" : "2015-09-19",
            "return_date" : "2015-09-26",
            "price" : "473.57",
            "airline" : "DL"
        }, {
            "destination" : "TGU",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-10",
            "price" : "473.57",
            "airline" : "US"
        }, {
            "destination" : "MGA",
            "departure_date" : "2015-09-24",
            "return_date" : "2015-09-28",
            "price" : "474.60",
            "airline" : "DL"
        }, {
            "destination" : "FSD",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-14",
            "price" : "474.70",
            "airline" : "US"
        }, {
            "destination" : "QRO",
            "departure_date" : "2015-09-25",
            "return_date" : "2015-10-01",
            "price" : "475.58",
            "airline" : "US"
        }, {
            "destination" : "MID",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-10",
            "price" : "477.08",
            "airline" : "AM"
        }, {
            "destination" : "SLP",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-14",
            "price" : "478.61",
            "airline" : "DL"
        }, {
            "destination" : "DRO",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-15",
            "price" : "479.20",
            "airline" : "US"
        }, {
            "destination" : "POP",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-10",
            "price" : "482.20",
            "airline" : "B6"
        }, {
            "destination" : "YYC",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-24",
            "price" : "482.33",
            "airline" : "DL"
        }, {
            "destination" : "CZM",
            "departure_date" : "2015-09-26",
            "return_date" : "2015-09-30",
            "price" : "489.92",
            "airline" : "UA"
        }, {
            "destination" : "GCM",
            "departure_date" : "2015-09-06",
            "return_date" : "2015-09-08",
            "price" : "491.42",
            "airline" : "US"
        }, {
            "destination" : "FAI",
            "departure_date" : "2015-09-25",
            "return_date" : "2015-09-26",
            "price" : "501.50",
            "airline" : "DL"
        }, {
            "destination" : "BZN",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-13",
            "price" : "504.70",
            "airline" : "UA"
        }, {
            "destination" : "MDE",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-12",
            "price" : "505.60",
            "airline" : "B6"
        }, {
            "destination" : "BOG",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-10",
            "price" : "507.60",
            "airline" : "B6"
        }, {
            "destination" : "BIL",
            "departure_date" : "2015-09-25",
            "return_date" : "2015-09-29",
            "price" : "508.70",
            "airline" : "UA"
        }, {
            "destination" : "SAL",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-21",
            "price" : "516.73",
            "airline" : "NK"
        }, {
            "destination" : "YEA",
            "departure_date" : "2015-09-24",
            "return_date" : "2015-09-28",
            "price" : "516.81",
            "airline" : "UA"
        }, {
            "destination" : "LRM",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-30",
            "price" : "520.20",
            "airline" : "B6"
        }, {
            "destination" : "FPO",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-12",
            "price" : "521.60",
            "airline" : "B6"
        }, {
            "destination" : "LIM",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-17",
            "price" : "531.34",
            "airline" : "B6"
        }, {
            "destination" : "RAP",
            "departure_date" : "2015-09-12",
            "return_date" : "2015-09-19",
            "price" : "532.20",
            "airline" : "UA"
        }, {
            "destination" : "LIS",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-10-08",
            "price" : "533.03",
            "airline" : "S4"
        }, {
            "destination" : "GGT",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-13",
            "price" : "537.18",
            "airline" : "US"
        }, {
            "destination" : "MHH",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-18",
            "price" : "537.60",
            "airline" : "US"
        }, {
            "destination" : "ACA",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-15",
            "price" : "572.65",
            "airline" : "AM"
        }, {
            "destination" : "ASE",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-09-23",
            "price" : "579.20",
            "airline" : "UA"
        }, {
            "destination" : "JAC",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-15",
            "price" : "579.20",
            "airline" : "US"
        }, {
            "destination" : "OAX",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-14",
            "price" : "583.53",
            "airline" : "AM"
        }, {
            "destination" : "UIO",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-10",
            "price" : "586.43",
            "airline" : "AM"
        }, {
            "destination" : "HUX",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-09",
            "price" : "587.30",
            "airline" : "AM"
        }, {
            "destination" : "DOM",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-16",
            "price" : "601.60",
            "airline" : "AA"
        }, {
            "destination" : "REK",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-10-07",
            "price" : "605.34",
            "airline" : "WW"
        }, {
            "destination" : "LED",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-29",
            "price" : "610.33",
            "airline" : "UA"
        }, {
            "destination" : "DXB",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-15",
            "price" : "630.74",
            "airline" : "UA"
        }, {
            "destination" : "CLO",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-22",
            "price" : "632.50",
            "airline" : "CM"
        }, {
            "destination" : "ZLO",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-09-24",
            "price" : "633.46",
            "airline" : "AM"
        }, {
            "destination" : "ZCL",
            "departure_date" : "2015-09-06",
            "return_date" : "2015-09-16",
            "price" : "657.80",
            "airline" : "AM"
        }, {
            "destination" : "BJS",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-15",
            "price" : "659.76",
            "airline" : "AA"
        }, {
            "destination" : "BAQ",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-15",
            "price" : "667.54",
            "airline" : "CM"
        }, {
            "destination" : "OPO",
            "departure_date" : "2015-09-24",
            "return_date" : "2015-10-06",
            "price" : "669.14",
            "airline" : "TK"
        }, {
            "destination" : "CPH",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-10-02",
            "price" : "672.06",
            "airline" : "WW"
        }, {
            "destination" : "SNN",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-30",
            "price" : "673.33",
            "airline" : "DL"
        }, {
            "destination" : "SKB",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-09",
            "price" : "678.60",
            "airline" : "B6"
        }, {
            "destination" : "EIS",
            "departure_date" : "2015-09-26",
            "return_date" : "2015-10-03",
            "price" : "678.82",
            "airline" : "B6"
        }, {
            "destination" : "LAP",
            "departure_date" : "2015-09-25",
            "return_date" : "2015-09-30",
            "price" : "680.41",
            "airline" : "AM"
        }, {
            "destination" : "ANU",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-09-28",
            "price" : "681.60",
            "airline" : "AA"
        }, {
            "destination" : "RAK",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-13",
            "price" : "684.41",
            "airline" : "IB"
        }, {
            "destination" : "LUX",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-21",
            "price" : "687.87",
            "airline" : "TK"
        }, {
            "destination" : "TLL",
            "departure_date" : "2015-09-17",
            "return_date" : "2015-09-22",
            "price" : "692.07",
            "airline" : "TK"
        }, {
            "destination" : "OGG",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-14",
            "price" : "693.06",
            "airline" : "DL"
        }, {
            "destination" : "RIX",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-21",
            "price" : "694.05",
            "airline" : "TK"
        }, {
            "destination" : "OSL",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-29",
            "price" : "698.60",
            "airline" : "TK"
        }, {
            "destination" : "HEL",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-29",
            "price" : "701.36",
            "airline" : "TK"
        }, {
            "destination" : "STO",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-29",
            "price" : "701.58",
            "airline" : "TK"
        }, {
            "destination" : "GOT",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-29",
            "price" : "701.62",
            "airline" : "TK"
        }, {
            "destination" : "LWO",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-10-01",
            "price" : "702.96",
            "airline" : "TK"
        }, {
            "destination" : "TRN",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-21",
            "price" : "705.15",
            "airline" : "TK"
        }, {
            "destination" : "MLA",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-26",
            "price" : "705.23",
            "airline" : "TK"
        }, {
            "destination" : "EAP",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-22",
            "price" : "708.70",
            "airline" : "TK"
        }, {
            "destination" : "CTA",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-22",
            "price" : "709.69",
            "airline" : "TK"
        }, {
            "destination" : "CUE",
            "departure_date" : "2015-09-11",
            "return_date" : "2015-09-16",
            "price" : "710.02",
            "airline" : "CM"
        }, {
            "destination" : "FAO",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-10-08",
            "price" : "711.90",
            "airline" : "S4"
        }, {
            "destination" : "GEO",
            "departure_date" : "2015-09-12",
            "return_date" : "2015-09-14",
            "price" : "712.80",
            "airline" : "AA"
        }, {
            "destination" : "AMS",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-20",
            "price" : "714.20",
            "airline" : "TK"
        }, {
            "destination" : "BRU",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-10-07",
            "price" : "715.42",
            "airline" : "TK"
        }, {
            "destination" : "MSQ",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-10-05",
            "price" : "715.81",
            "airline" : "TK"
        }, {
            "destination" : "LHR",
            "departure_date" : "2015-09-11",
            "return_date" : "2015-09-12",
            "price" : "716.58",
            "airline" : "BA"
        }, {
            "destination" : "BOD",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-15",
            "price" : "717.84",
            "airline" : "TK"
        }, {
            "destination" : "ALA",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-29",
            "price" : "718.72",
            "airline" : "TK"
        }, {
            "destination" : "SKG",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-15",
            "price" : "718.79",
            "airline" : "TK"
        }, {
            "destination" : "TLS",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-22",
            "price" : "720.48",
            "airline" : "TK"
        }, {
            "destination" : "MRS",
            "departure_date" : "2015-09-17",
            "return_date" : "2015-09-23",
            "price" : "722.07",
            "airline" : "TK"
        }, {
            "destination" : "BRI",
            "departure_date" : "2015-09-13",
            "return_date" : "2015-09-23",
            "price" : "729.26",
            "airline" : "TK"
        }, {
            "destination" : "PSA",
            "departure_date" : "2015-09-13",
            "return_date" : "2015-09-20",
            "price" : "731.31",
            "airline" : "TK"
        }, {
            "destination" : "BIO",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-28",
            "price" : "732.07",
            "airline" : "TK"
        }, {
            "destination" : "GOA",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-10-07",
            "price" : "732.40",
            "airline" : "TK"
        }, {
            "destination" : "BLQ",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-21",
            "price" : "732.74",
            "airline" : "TK"
        }, {
            "destination" : "VCE",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-10-07",
            "price" : "733.94",
            "airline" : "TK"
        }, {
            "destination" : "GVA",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-22",
            "price" : "735.07",
            "airline" : "TK"
        }, {
            "destination" : "PRN",
            "departure_date" : "2015-09-17",
            "return_date" : "2015-09-21",
            "price" : "736.68",
            "airline" : "TK"
        }, {
            "destination" : "DUB",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-10-01",
            "price" : "737.24",
            "airline" : "TK"
        }, {
            "destination" : "BON",
            "departure_date" : "2015-09-12",
            "return_date" : "2015-09-19",
            "price" : "739.10",
            "airline" : "UA"
        }, {
            "destination" : "MIL",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-30",
            "price" : "741.73",
            "airline" : "TK"
        }, {
            "destination" : "WAW",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-10-07",
            "price" : "742.66",
            "airline" : "TK"
        }, {
            "destination" : "NAP",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-30",
            "price" : "743.31",
            "airline" : "TK"
        }, {
            "destination" : "CAI",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-10-05",
            "price" : "743.70",
            "airline" : "TK"
        }, {
            "destination" : "CTU",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-15",
            "price" : "744.20",
            "airline" : "AA"
        }, {
            "destination" : "HAM",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-29",
            "price" : "746.95",
            "airline" : "TK"
        }, {
            "destination" : "NCE",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-23",
            "price" : "748.03",
            "airline" : "TK"
        }, {
            "destination" : "CGN",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-28",
            "price" : "748.19",
            "airline" : "TK"
        }, {
            "destination" : "ZRH",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-22",
            "price" : "748.69",
            "airline" : "TK"
        }, {
            "destination" : "MAD",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-10-08",
            "price" : "748.97",
            "airline" : "TK"
        }, {
            "destination" : "ROM",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-10-06",
            "price" : "749.51",
            "airline" : "TK"
        }, {
            "destination" : "BRE",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-14",
            "price" : "749.63",
            "airline" : "TK"
        }, {
            "destination" : "FCO",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-30",
            "price" : "749.96",
            "airline" : "TK"
        }, {
            "destination" : "LYS",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-29",
            "price" : "750.57",
            "airline" : "TK"
        }, {
            "destination" : "ODS",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-29",
            "price" : "750.76",
            "airline" : "TK"
        }, {
            "destination" : "STR",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-29",
            "price" : "750.83",
            "airline" : "TK"
        }, {
            "destination" : "NUE",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-09-26",
            "price" : "751.09",
            "airline" : "TK"
        }, {
            "destination" : "DUS",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-30",
            "price" : "754.27",
            "airline" : "TK"
        }, {
            "destination" : "HAJ",
            "departure_date" : "2015-09-17",
            "return_date" : "2015-09-23",
            "price" : "754.62",
            "airline" : "TK"
        }, {
            "destination" : "TIA",
            "departure_date" : "2015-09-24",
            "return_date" : "2015-09-30",
            "price" : "755.05",
            "airline" : "TK"
        }, {
            "destination" : "BAK",
            "departure_date" : "2015-09-24",
            "return_date" : "2015-09-30",
            "price" : "759.84",
            "airline" : "TK"
        }, {
            "destination" : "LJU",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-28",
            "price" : "760.59",
            "airline" : "TK"
        }, {
            "destination" : "LTO",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-12",
            "price" : "763.99",
            "airline" : "AS"
        }, {
            "destination" : "PAR",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-22",
            "price" : "767.63",
            "airline" : "TK"
        }, {
            "destination" : "BCN",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-29",
            "price" : "770.25",
            "airline" : "TK"
        }, {
            "destination" : "FRA",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-10-07",
            "price" : "772.38",
            "airline" : "TK"
        }, {
            "destination" : "HKG",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-09-24",
            "price" : "776.05",
            "airline" : "AC"
        }, {
            "destination" : "VIE",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-29",
            "price" : "776.96",
            "airline" : "TK"
        }, {
            "destination" : "BER",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-29",
            "price" : "778.31",
            "airline" : "TK"
        }, {
            "destination" : "PRG",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-29",
            "price" : "779.97",
            "airline" : "TK"
        }, {
            "destination" : "HAN",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-14",
            "price" : "781.58",
            "airline" : "JL"
        }, {
            "destination" : "KIV",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-26",
            "price" : "783.31",
            "airline" : "TK"
        }, {
            "destination" : "BEY",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-10-07",
            "price" : "783.34",
            "airline" : "TK"
        }, {
            "destination" : "MUC",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-28",
            "price" : "783.83",
            "airline" : "TK"
        }, {
            "destination" : "SRZ",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-09-25",
            "price" : "784.50",
            "airline" : "CM"
        }, {
            "destination" : "BUH",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-14",
            "price" : "788.78",
            "airline" : "TK"
        }, {
            "destination" : "BUD",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-16",
            "price" : "788.80",
            "airline" : "TK"
        }, {
            "destination" : "SJJ",
            "departure_date" : "2015-09-17",
            "return_date" : "2015-09-22",
            "price" : "795.21",
            "airline" : "TK"
        }, {
            "destination" : "LPA",
            "departure_date" : "2015-09-26",
            "return_date" : "2015-10-08",
            "price" : "795.29",
            "airline" : "S4"
        }, {
            "destination" : "BEG",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-14",
            "price" : "799.13",
            "airline" : "TK"
        }, {
            "destination" : "FUK",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-17",
            "price" : "800.70",
            "airline" : "CX"
        }, {
            "destination" : "TLV",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-10-05",
            "price" : "801.76",
            "airline" : "TK"
        }, {
            "destination" : "KOA",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-08",
            "price" : "803.07",
            "airline" : "DL"
        }, {
            "destination" : "BHX",
            "departure_date" : "2015-09-25",
            "return_date" : "2015-09-27",
            "price" : "805.15",
            "airline" : "UA"
        }, {
            "destination" : "SVQ",
            "departure_date" : "2015-09-24",
            "return_date" : "2015-10-08",
            "price" : "808.61",
            "airline" : "S4"
        }, {
            "destination" : "NGO",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-10",
            "price" : "814.12",
            "airline" : "CX"
        }, {
            "destination" : "TYO",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-10",
            "price" : "814.53",
            "airline" : "CX"
        }, {
            "destination" : "MAN",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-09-28",
            "price" : "814.57",
            "airline" : "TK"
        }, {
            "destination" : "OKA",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-13",
            "price" : "816.48",
            "airline" : "CX"
        }, {
            "destination" : "IZM",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-16",
            "price" : "816.56",
            "airline" : "TK"
        }, {
            "destination" : "LIH",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-16",
            "price" : "819.08",
            "airline" : "AS"
        }, {
            "destination" : "SKP",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-15",
            "price" : "819.68",
            "airline" : "TK"
        }, {
            "destination" : "DOH",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-19",
            "price" : "820.71",
            "airline" : "KL"
        }, {
            "destination" : "SHA",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-18",
            "price" : "824.38",
            "airline" : "UA"
        }, {
            "destination" : "GLA",
            "departure_date" : "2015-09-25",
            "return_date" : "2015-10-02",
            "price" : "824.68",
            "airline" : "FI"
        }, {
            "destination" : "LPB",
            "departure_date" : "2015-09-24",
            "return_date" : "2015-10-01",
            "price" : "825.10",
            "airline" : "AA"
        }, {
            "destination" : "VRN",
            "departure_date" : "2015-09-26",
            "return_date" : "2015-10-08",
            "price" : "826.29",
            "airline" : "UA"
        }, {
            "destination" : "SAO",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-21",
            "price" : "828.24",
            "airline" : "DL"
        }, {
            "destination" : "ZAG",
            "departure_date" : "2015-09-17",
            "return_date" : "2015-09-22",
            "price" : "838.45",
            "airline" : "TK"
        }, {
            "destination" : "FOR",
            "departure_date" : "2015-09-17",
            "return_date" : "2015-10-02",
            "price" : "842.17",
            "airline" : "JJ"
        }, {
            "destination" : "TBS",
            "departure_date" : "2015-09-24",
            "return_date" : "2015-09-30",
            "price" : "848.61",
            "airline" : "TK"
        }, {
            "destination" : "BAH",
            "departure_date" : "2015-09-17",
            "return_date" : "2015-09-23",
            "price" : "849.32",
            "airline" : "TK"
        }, {
            "destination" : "TUN",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-09-26",
            "price" : "849.49",
            "airline" : "TK"
        }, {
            "destination" : "DMM",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-22",
            "price" : "849.68",
            "airline" : "TK"
        }, {
            "destination" : "CAN",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-29",
            "price" : "850.75",
            "airline" : "NH"
        }, {
            "destination" : "BOM",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-15",
            "price" : "859.90",
            "airline" : "TK"
        }, {
            "destination" : "SEL",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-19",
            "price" : "863.71",
            "airline" : "CA"
        }, {
            "destination" : "AYT",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-14",
            "price" : "866.16",
            "airline" : "TK"
        }, {
            "destination" : "TAS",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-10-06",
            "price" : "867.86",
            "airline" : "TK"
        }, {
            "destination" : "MNL",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-15",
            "price" : "875.63",
            "airline" : "CA"
        }, {
            "destination" : "RUH",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-28",
            "price" : "877.00",
            "airline" : "EK"
        }, {
            "destination" : "CCS",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-16",
            "price" : "882.12",
            "airline" : "CM"
        }, {
            "destination" : "BGO",
            "departure_date" : "2015-09-26",
            "return_date" : "2015-10-05",
            "price" : "883.83",
            "airline" : "FI"
        }, {
            "destination" : "KRT",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-29",
            "price" : "884.67",
            "airline" : "TK"
        }, {
            "destination" : "EVN",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-10-06",
            "price" : "887.13",
            "airline" : "EK"
        }, {
            "destination" : "LCA",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-27",
            "price" : "887.87",
            "airline" : "SU"
        }, {
            "destination" : "FLR",
            "departure_date" : "2015-09-26",
            "return_date" : "2015-10-05",
            "price" : "888.63",
            "airline" : "KL"
        }, {
            "destination" : "VLN",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-23",
            "price" : "891.46",
            "airline" : "CM"
        }, {
            "destination" : "KWI",
            "departure_date" : "2015-09-24",
            "return_date" : "2015-09-30",
            "price" : "895.75",
            "airline" : "TK"
        }, {
            "destination" : "ORK",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-14",
            "price" : "896.22",
            "airline" : "UA"
        }, {
            "destination" : "GYE",
            "departure_date" : "2015-09-24",
            "return_date" : "2015-09-30",
            "price" : "896.59",
            "airline" : "CM"
        }, {
            "destination" : "MAA",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-12",
            "price" : "897.92",
            "airline" : "KL"
        }, {
            "destination" : "ABZ",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-22",
            "price" : "902.13",
            "airline" : "UA"
        }, {
            "destination" : "BKK",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-11",
            "price" : "909.79",
            "airline" : "CA"
        }, {
            "destination" : "JKT",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-16",
            "price" : "914.39",
            "airline" : "UA"
        }, {
            "destination" : "NBO",
            "departure_date" : "2015-09-24",
            "return_date" : "2015-09-26",
            "price" : "921.86",
            "airline" : "KL"
        }, {
            "destination" : "FOC",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-14",
            "price" : "926.79",
            "airline" : "CA"
        }, {
            "destination" : "SHE",
            "departure_date" : "2015-09-12",
            "return_date" : "2015-09-19",
            "price" : "926.80",
            "airline" : "CA"
        }, {
            "destination" : "JED",
            "departure_date" : "2015-09-17",
            "return_date" : "2015-09-23",
            "price" : "931.64",
            "airline" : "LH"
        }, {
            "destination" : "BHZ",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-15",
            "price" : "933.35",
            "airline" : "JJ"
        }, {
            "destination" : "ASU",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-21",
            "price" : "941.00",
            "airline" : "DL"
        }, {
            "destination" : "TPE",
            "departure_date" : "2015-09-11",
            "return_date" : "2015-09-14",
            "price" : "944.07",
            "airline" : "DL"
        }, {
            "destination" : "TAO",
            "departure_date" : "2015-09-17",
            "return_date" : "2015-09-22",
            "price" : "944.20",
            "airline" : "DL"
        }, {
            "destination" : "FLN",
            "departure_date" : "2015-09-18",
            "return_date" : "2015-09-22",
            "price" : "946.22",
            "airline" : "US"
        }, {
            "destination" : "ABV",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-13",
            "price" : "949.38",
            "airline" : "TK"
        }, {
            "destination" : "SZX",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-19",
            "price" : "951.80",
            "airline" : "CA"
        }, {
            "destination" : "JNB",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-22",
            "price" : "954.12",
            "airline" : "BA"
        }, {
            "destination" : "JTR",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-23",
            "price" : "959.31",
            "airline" : "LX"
        }, {
            "destination" : "AUH",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-12",
            "price" : "960.30",
            "airline" : "KL"
        }, {
            "destination" : "BFS",
            "departure_date" : "2015-09-17",
            "return_date" : "2015-09-22",
            "price" : "964.75",
            "airline" : "UA"
        }, {
            "destination" : "BSB",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-29",
            "price" : "965.95",
            "airline" : "JJ"
        }, {
            "destination" : "ITO",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-15",
            "price" : "966.26",
            "airline" : "HA"
        }, {
            "destination" : "PMO",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-09-28",
            "price" : "966.85",
            "airline" : "DL"
        }, {
            "destination" : "ADD",
            "departure_date" : "2015-09-17",
            "return_date" : "2015-09-23",
            "price" : "968.99",
            "airline" : "ET"
        }, {
            "destination" : "CPT",
            "departure_date" : "2015-09-26",
            "return_date" : "2015-10-06",
            "price" : "975.29",
            "airline" : "LH"
        }, {
            "destination" : "HYD",
            "departure_date" : "2015-09-26",
            "return_date" : "2015-10-02",
            "price" : "976.37",
            "airline" : "AF"
        }, {
            "destination" : "GDN",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-30",
            "price" : "986.81",
            "airline" : "UA"
        }, {
            "destination" : "TCI",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-23",
            "price" : "995.64",
            "airline" : "VS"
        }, {
            "destination" : "BLR",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-13",
            "price" : "997.58",
            "airline" : "DL"
        }, {
            "destination" : "DEL",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-13",
            "price" : "998.43",
            "airline" : "UA"
        }, {
            "destination" : "KHH",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-28",
            "price" : "998.72",
            "airline" : "JL"
        }, {
            "destination" : "DLA",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-29",
            "price" : "1003.47",
            "airline" : "TK"
        }, {
            "destination" : "DAR",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-21",
            "price" : "1010.36",
            "airline" : "EK"
        }, {
            "destination" : "BRS",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-15",
            "price" : "1012.44",
            "airline" : "EI"
        }, {
            "destination" : "ALC",
            "departure_date" : "2015-09-25",
            "return_date" : "2015-09-29",
            "price" : "1013.42",
            "airline" : "EI"
        }, {
            "destination" : "REC",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-21",
            "price" : "1015.74",
            "airline" : "DL"
        }, {
            "destination" : "PMI",
            "departure_date" : "2015-09-25",
            "return_date" : "2015-10-03",
            "price" : "1016.65",
            "airline" : "EI"
        }, {
            "destination" : "LUN",
            "departure_date" : "2015-09-24",
            "return_date" : "2015-09-28",
            "price" : "1019.99",
            "airline" : "ET"
        }, {
            "destination" : "RGN",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-11",
            "price" : "1022.66",
            "airline" : "CA"
        }, {
            "destination" : "ACC",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-16",
            "price" : "1027.98",
            "airline" : "BA"
        }, {
            "destination" : "MVD",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-28",
            "price" : "1047.60",
            "airline" : "JJ"
        }, {
            "destination" : "CLJ",
            "departure_date" : "2015-09-19",
            "return_date" : "2015-09-21",
            "price" : "1051.78",
            "airline" : "AZ"
        }, {
            "destination" : "BUE",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-15",
            "price" : "1056.13",
            "airline" : "AM"
        }, {
            "destination" : "DKR",
            "departure_date" : "2015-09-17",
            "return_date" : "2015-09-22",
            "price" : "1057.99",
            "airline" : "TK"
        }, {
            "destination" : "HRE",
            "departure_date" : "2015-09-24",
            "return_date" : "2015-09-28",
            "price" : "1060.03",
            "airline" : "ET"
        }, {
            "destination" : "JRO",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-22",
            "price" : "1077.10",
            "airline" : "TK"
        }, {
            "destination" : "MRU",
            "departure_date" : "2015-09-17",
            "return_date" : "2015-09-22",
            "price" : "1077.75",
            "airline" : "AF"
        }, {
            "destination" : "DBV",
            "departure_date" : "2015-09-26",
            "return_date" : "2015-10-09",
            "price" : "1079.42",
            "airline" : "EI"
        }, {
            "destination" : "IBZ",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-12",
            "price" : "1085.23",
            "airline" : "EI"
        }, {
            "destination" : "SCL",
            "departure_date" : "2015-09-12",
            "return_date" : "2015-09-18",
            "price" : "1103.60",
            "airline" : "US"
        }, {
            "destination" : "LHE",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-13",
            "price" : "1104.20",
            "airline" : "TK"
        }, {
            "destination" : "ISB",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-15",
            "price" : "1104.27",
            "airline" : "TK"
        }, {
            "destination" : "CEB",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-14",
            "price" : "1110.70",
            "airline" : "CX"
        }, {
            "destination" : "GOI",
            "departure_date" : "2015-09-17",
            "return_date" : "2015-10-02",
            "price" : "1121.57",
            "airline" : "AF"
        }, {
            "destination" : "WRO",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-22",
            "price" : "1136.28",
            "airline" : "SN"
        }, {
            "destination" : "POZ",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-15",
            "price" : "1137.40",
            "airline" : "UA"
        }, {
            "destination" : "COK",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-12",
            "price" : "1140.31",
            "airline" : "AF"
        }, {
            "destination" : "KTW",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-21",
            "price" : "1141.80",
            "airline" : "UA"
        }, {
            "destination" : "PNH",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-10-05",
            "price" : "1146.39",
            "airline" : "MU"
        }, {
            "destination" : "RBA",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-22",
            "price" : "1151.13",
            "airline" : "DL"
        }, {
            "destination" : "CWB",
            "departure_date" : "2015-09-15",
            "return_date" : "2015-09-22",
            "price" : "1152.98",
            "airline" : "JJ"
        }, {
            "destination" : "SEZ",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-15",
            "price" : "1153.00",
            "airline" : "EK"
        }, {
            "destination" : "KHI",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-15",
            "price" : "1154.20",
            "airline" : "TK"
        }, {
            "destination" : "RZE",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-23",
            "price" : "1160.84",
            "airline" : "AC"
        }, {
            "destination" : "AMD",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-13",
            "price" : "1163.63",
            "airline" : "EK"
        }, {
            "destination" : "TSR",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-19",
            "price" : "1164.03",
            "airline" : "KL"
        }, {
            "destination" : "TRV",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-17",
            "price" : "1173.57",
            "airline" : "QR"
        }, {
            "destination" : "DAC",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-22",
            "price" : "1174.87",
            "airline" : "TK"
        }, {
            "destination" : "CCU",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-12",
            "price" : "1204.65",
            "airline" : "AF"
        }, {
            "destination" : "COR",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-14",
            "price" : "1212.53",
            "airline" : "JJ"
        }, {
            "destination" : "DPS",
            "departure_date" : "2015-09-23",
            "return_date" : "2015-09-29",
            "price" : "1215.14",
            "airline" : "DL"
        }, {
            "destination" : "KTM",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-14",
            "price" : "1231.81",
            "airline" : "QR"
        }, {
            "destination" : "HKT",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-12",
            "price" : "1234.84",
            "airline" : "CA"
        }, {
            "destination" : "MDZ",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-27",
            "price" : "1257.03",
            "airline" : "LA"
        }, {
            "destination" : "ULN",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-10-06",
            "price" : "1258.32",
            "airline" : "TK"
        }, {
            "destination" : "FNA",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-30",
            "price" : "1267.08",
            "airline" : "UA"
        }, {
            "destination" : "EBL",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-19",
            "price" : "1323.14",
            "airline" : "UA"
        }, {
            "destination" : "CNX",
            "departure_date" : "2015-09-06",
            "return_date" : "2015-09-09",
            "price" : "1344.24",
            "airline" : "CZ"
        }, {
            "destination" : "SPU",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-22",
            "price" : "1346.24",
            "airline" : "LH"
        }, {
            "destination" : "DVO",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-28",
            "price" : "1360.45",
            "airline" : "SQ"
        }, {
            "destination" : "NAN",
            "departure_date" : "2015-09-22",
            "return_date" : "2015-09-24",
            "price" : "1363.64",
            "airline" : "FJ"
        }, {
            "destination" : "WLG",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-23",
            "price" : "1412.06",
            "airline" : "VA"
        }, {
            "destination" : "AKL",
            "departure_date" : "2015-09-07",
            "return_date" : "2015-09-22",
            "price" : "1415.68",
            "airline" : "VA"
        }, {
            "destination" : "CHC",
            "departure_date" : "2015-09-17",
            "return_date" : "2015-09-22",
            "price" : "1446.07",
            "airline" : "FJ"
        }, {
            "destination" : "BPN",
            "departure_date" : "2015-09-14",
            "return_date" : "2015-09-28",
            "price" : "1447.81",
            "airline" : "SQ"
        }, {
            "destination" : "BDQ",
            "departure_date" : "2015-09-12",
            "return_date" : "2015-09-14",
            "price" : "1507.46",
            "airline" : "IB"
        }, {
            "destination" : "SYD",
            "departure_date" : "2015-09-08",
            "return_date" : "2015-09-23",
            "price" : "1531.64",
            "airline" : "VA"
        }, {
            "destination" : "MEL",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-22",
            "price" : "1532.08",
            "airline" : "UA"
        }, {
            "destination" : "PPT",
            "departure_date" : "2015-09-10",
            "return_date" : "2015-09-12",
            "price" : "1595.10",
            "airline" : "QF"
        }, {
            "destination" : "ADL",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-10-01",
            "price" : "1689.19",
            "airline" : "NZ"
        }, {
            "destination" : "CNS",
            "departure_date" : "2015-09-09",
            "return_date" : "2015-09-23",
            "price" : "1726.66",
            "airline" : "QF"
        }, {
            "destination" : "PER",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-09-27",
            "price" : "1772.55",
            "airline" : "EK"
        }, {
            "destination" : "MLW",
            "departure_date" : "2015-09-21",
            "return_date" : "2015-09-29",
            "price" : "1968.28",
            "airline" : "UA"
        }, {
            "destination" : "BOB",
            "departure_date" : "2015-09-16",
            "return_date" : "2015-09-21",
            "price" : "2028.45",
            "airline" : "QF"
        }, {
            "destination" : "GUM",
            "departure_date" : "2015-09-24",
            "return_date" : "2015-10-01",
            "price" : "2031.89",
            "airline" : "UA"
        } ];
    });
})();