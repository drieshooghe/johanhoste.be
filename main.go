package main

import (
	"net/http"

	"github.com/gorilla/mux"
	"google.golang.org/appengine"
)

func init() {

	const entrypoint string = "index.html"
	const staticDir string = "dist"

	r := mux.NewRouter()

	// Serve static files directly.
	r.PathPrefix("/dist").Handler(http.FileServer(http.Dir(staticDir)))

	// Handle all routes with indexhandler.
	r.HandleFunc("/", IndexHandler(entrypoint))

	// Spin up server.
	http.Handle("/", r)

}

func main() {
	appengine.Main() // Starts the server to receive requests
}
