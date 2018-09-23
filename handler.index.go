package main

import (
	"encoding/json"
	"html/template"
	"log"
	"net/http"
)

// Custom template functions
var customTmplFuncs = template.FuncMap{
	"objectify": func(v interface{}, n string) template.JS {
		varValue, _ := json.Marshal(v)
		return `const ` + template.JS(n) + ` = ` + template.JS(varValue) + `;`
	},
}

// IndexHandler is the catch-all request handler for the application.
func IndexHandler(entrypoint string) func(w http.ResponseWriter, r *http.Request) {
	fn := func(w http.ResponseWriter, r *http.Request) {
		tmpl, err := template.New("index").Funcs(customTmplFuncs).ParseFiles(entrypoint)
		if err != nil {
			log.Fatal(err)
		}

		// Fetch pages content
		content := fetchRemoteContent(r)

		err = tmpl.ExecuteTemplate(w, "index", content)
		if err != nil {
			log.Fatal(err)
		}
	}

	return http.HandlerFunc(fn)
}
