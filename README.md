# REST-API-vatsim [![Build Status](https://travis-ci.org/simpson2/REST-API-vatsim.svg?branch=master)](https://travis-ci.org/simpson2/REST-API-vatsim)

This is a RESTful API created to take the [the entire VATSIM JSON data](http://eu.data.vatsim.net/vatsim-data.json)
and provide selected data based on the implemented endpoints

## Current endpoints

* localhost:3000/ - confirms server online  
* localhost:3000/vatsim - displays the entire JSON data
* localhost:3000/vatsim/online - displays number of connected pilots and controllers
* localhost:3000/vatsim/voicestatus - displays all possible voice statuses and number of connections for each voice status
* localhost:3000/vatsim/pilots/:remarkSearchParameter - displays pilots, their CID and their remarks whose remarks (partially or wholly) contain the remarkSearchParameter word.
