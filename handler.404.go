package main

import (
	"html/template"
	"log"
	"net/http"
)

func notFoundHandler(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.New("").ParseFiles("templates/base.html", "templates/404.html")
	if err != nil {
		log.Fatal(err)
	}
	content := fetchLocalContent("404.json")
	err = tmpl.ExecuteTemplate(w, "base", content)
	if err != nil {
		log.Fatal(err)
	}
}
