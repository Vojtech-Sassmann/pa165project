# PA165 team project - Creatures hunting

[![Build Status](https://travis-ci.org/VECTOUN/pa165project.svg?branch=master)](https://travis-ci.org/VECTOUN/pa165project)

A Java EE school team project.

Team members: 
* Vojtěch Sassmann
* Peter Balčirák
* Jan Gol
* Pavel Vyskočil

Wiki: https://github.com/VECTOUN/pa165project/wiki


# Running the project

`git clone https://github.com/VECTOUN/pa165project.git`
`cd pa165project`
`mvn clean install`
`cd creatures-hunting-rest-with-gui`
`mvn tomcat7:run`

Then the app is located at localhost:8080/pa165

The secured REST is located at localhost:8080/pa165/rest/auth/*
The unsecured REST is located at localhost:8080/pa165/rest/unsecured/*

To test the unsecured rest u can use Curl.

Curl examples:

Get all monsters:
`curl -i -X GET http://localhost:8080/pa165/rest/notsecured/monsters`

Get monster by id:
`curl -i -X GET http://localhost:8080/pa165/rest/notsecured/monsters/4`

Get monster by name:
`curl -i -X GET http://localhost:8080/pa165/rest/notsecured/monsters/filter/name/Zombie`

Create monster:
`curl -X POST -i -H "Content-Type: application/json" --data '{"name":"test","height":155.2,"weight":70.5,"agility":"SLOW"}' http://localhost:8080/pa165/rest/notsecured/monsters/create`

Delete monster:
`curl -i -X DELETE http://localhost:8080/pa165/rest/notsecured/monsters/1`

Update monster:
`curl -i -X PUT -H "Content-Type: application/json" - 40.2}' http://localhost:8080/pa165/rest/notsecured/monsters/2`

Get the most widespread monsters:
`curl -i -X DELETE http://localhost:8080/pa165/rest/notsecured/monsters/filter/mostWidespread`
