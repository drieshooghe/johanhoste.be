package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"google.golang.org/appengine"
	"google.golang.org/appengine/urlfetch"
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

type httpResponse struct {
	status string
	body   interface{}
}

type apiData struct {
	Meta    interface{}
	General interface{}
	Content interface{}
	// Testimonials interface{}
}

func fetchRemoteContent(r *http.Request) interface{} {

	var mChan = make(chan httpResponse)
	var gChan = make(chan httpResponse)
	var cChan = make(chan httpResponse)
	// var tChan = make(chan httpResponse)

	metaURL := "http://" + os.Getenv("API_HOST") + "/api/singletons/get/meta?token=" + os.Getenv("API_TOKEN")
	generalURL := "http://" + os.Getenv("API_HOST") + "/api/singletons/get/general?token=" + os.Getenv("API_TOKEN")
	contentURL := "http://" + os.Getenv("API_HOST") + "/api/collections/get/page?token=" + os.Getenv("API_TOKEN")
	// testimonialURL := "http://" + os.Getenv("API_HOST") + "/api/collections/get/testimonial?token=" + os.Getenv("API_TOKEN")

	go makeGetRequest(r, metaURL, mChan)
	go makeGetRequest(r, generalURL, gChan)
	go makeGetRequest(r, contentURL, cChan)
	// go makeGetRequest(r, testimonialURL, cChan)

	var Data = apiData{
		Meta:    (<-mChan).body,
		General: (<-gChan).body,
		Content: (<-cChan).body,
		// Testimonials: (<-tChan).body,
	}

	return Data
}

func makeGetRequest(r *http.Request, url string, ch chan<- httpResponse) {
	ctx := appengine.NewContext(r)
	client := urlfetch.Client(ctx)
	resp, err := client.Get(url)
	if err != nil {
		log.Fatal(err)
	}

	content, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatal(err)
	}

	var data interface{}
	err = json.Unmarshal(content, &data)
	if err != nil {
		log.Fatal(err)
	}
	ch <- httpResponse{resp.Status, data}
}
