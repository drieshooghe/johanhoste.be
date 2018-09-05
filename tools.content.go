package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
)

func fetchLocalContent(jsonPath string) interface{} {

	content, _ := ioutil.ReadFile(jsonPath)
	var data interface{}
	err := json.Unmarshal(content, &data)
	if err != nil {
		log.Fatal(err)
	}

	return data
}
