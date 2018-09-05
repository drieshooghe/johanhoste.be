package main

import (
	"net/http"

	"github.com/gorilla/mux"
	"google.golang.org/appengine"
)

const templatePath string = "./templates/"
const contentPath string = "./content/"

func init() {
	r := mux.NewRouter()
	r.HandleFunc("/", indexHandler)
	r.NotFoundHandler = http.HandlerFunc(notFoundHandler)
	http.Handle("/", r)
}

func main() {
	appengine.Main() // Starts the server to receive requests
}
