# REST-API-vatsim [![Build Status](https://travis-ci.org/simpson2/REST-API-vatsim.svg?branch=master)](https://travis-ci.org/simpson2/REST-API-vatsim)

This is a RESTful API created to take the [the entire VATSIM JSON data](http://eu.data.vatsim.net/vatsim-data.json)
and provide selected data based on the implemented endpoints

## Current endpoints

* / - confirms server online  
* /vatsim - displays the entire JSON data
* /vatsim/online - displays number of connected pilots and controllers
* /vatsim/voicestatus - displays all possible voice statuses and number of connections for each voice status
* /vatsim/pilots/:remarkSearchParameter - displays pilots, their CID and their remarks whose remarks (partially or wholly) contain the remarkSearchParameter word.
