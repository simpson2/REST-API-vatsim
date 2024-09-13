# REST-API-vatsim [![Build Status](https://travis-ci.org/simpson2/REST-API-vatsim.svg?branch=master)](https://travis-ci.org/simpson2/REST-API-vatsim)

This is a RESTful API created to take the [VATSIM JSON data](https://data.vatsim.net/v3/vatsim-data.json)
and provide selected data based on the implemented endpoints

## Current endpoints

* / - confirms server online  
* /vatsim - displays the entire JSON data
* /vatsim/online - displays number of connected pilots and controllers
* /vatsim/voicestatus - displays all possible voice statuses and number of connections for each voice status
* /vatsim/pilots/:remarkSearchParameter - displays pilots, their CID and their remarks whose remarks (partially or fully) contain the remarkSearchParameter word
