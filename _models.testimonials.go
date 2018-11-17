package main

type Testimonials struct {
	Fields struct {
		Name struct {
			Name     string        `json:"name"`
			Type     string        `json:"type"`
			Localize bool          `json:"localize"`
			Options  []interface{} `json:"options"`
		} `json:"name"`
		Testimonial struct {
			Name     string        `json:"name"`
			Type     string        `json:"type"`
			Localize bool          `json:"localize"`
			Options  []interface{} `json:"options"`
		} `json:"testimonial"`
		Images struct {
			Name     string        `json:"name"`
			Type     string        `json:"type"`
			Localize bool          `json:"localize"`
			Options  []interface{} `json:"options"`
		} `json:"images"`
	} `json:"fields"`

	Entries []struct {
		ID          string `json:"_id"`
		Name        string `json:"name"`
		Testimonial string `json:"testimonial"`
		Images      []struct {
			Meta struct {
				Title string `json:"title"`
				Asset string `json:"asset"`
			} `json:"meta"`
			Path string `json:"path"`
		} `json:"images"`
		Mby      string        `json:"_mby"`
		By       string        `json:"_by"`
		Modified int           `json:"_modified"`
		Created  int           `json:"_created"`
		Children []interface{} `json:"children"`
	} `json:"entries"`
	Total int `json:"total"`
}
