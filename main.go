package main

import (
	"net/http"

	"github.com/gorilla/mux"
	"google.golang.org/appengine"
)

func init() {
	r := mux.NewRouter()
	r.HandleFunc("/", indexHandler)
	http.Handle("/", r)
}

func main() {
	appengine.Main() // Starts the server to receive requests
}
