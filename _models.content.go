package main

type Content struct {
	HomeHandle         string `json:"home_handle"`
	HomeTitle          string `json:"home_title"`
	HomeContent        string `json:"home_content"`
	AboutHandle        string `json:"about_handle"`
	AboutTitle         string `json:"about_title"`
	AboutContent       string `json:"about_content"`
	ServicesHandle     string `json:"services_handle"`
	ServicesTitle      string `json:"services_title"`
	ServicesContent    string `json:"services_content"`
	DisclaimerHandle   string `json:"disclaimer_handle"`
	DisclaimerTitle    string `json:"disclaimer_title"`
	DisclaimerContent  string `json:"disclaimer_content"`
	Mby                string `json:"_mby"`
	By                 string `json:"_by"`
	Four04Handle       string `json:"404_handle"`
	Four04Title        string `json:"404_title"`
	Four04Content      string `json:"404_content"`
	TestimonialsHandle string `json:"testimonials_handle"`
	TestimonialsTitle  string `json:"testimonials_title"`
	ContactHandle      string `json:"contact_handle"`
	ContactTitle       string `json:"contact_title"`
}