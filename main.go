package main

import (
	"net/http"

	"github.com/gorilla/mux"
	"google.golang.org/appengine"
)

func init() {

	const entrypoint string = "index.html"
	const staticDir string = "static"

	r := mux.NewRouter()

	// Serve static files directly.
	r.PathPrefix("/static").Handler(http.FileServer(http.Dir(staticDir)))

	// Handle all routes with indexhandler.
	r.PathPrefix("/").HandlerFunc(IndexHandler(entrypoint))

	// Spin up server.
	http.Handle("/", r)

}

func main() {
	appengine.Main() // Starts the server to receive requests
}
