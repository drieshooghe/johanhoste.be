package main

import (
	"html/template"
	"log"
	"net/http"
)

func indexHandler(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.New("index").ParseFiles("templates/index.html")
	if err != nil {
		log.Fatal(err)
	}
	content := fetchRemoteContent(r)
	err = tmpl.ExecuteTemplate(w, "index", content)
	if err != nil {
		log.Fatal(err)
	}
}
