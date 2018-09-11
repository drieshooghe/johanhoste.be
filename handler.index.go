package main

import (
	"html/template"
	"log"
	"net/http"
)

func indexHandler(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.New("").ParseFiles("templates/base.html", "templates/index.html")
	if err != nil {
		log.Fatal(err)
	}
	content := fetchRemoteContent(r)
	err = tmpl.ExecuteTemplate(w, "base", content)
	if err != nil {
		log.Fatal(err)
	}
}
