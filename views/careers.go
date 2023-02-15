package views

import "net/http"

func Careers(w http.ResponseWriter, r *http.Request) map[string]interface{} {
	context := map[string]interface{}{}

	context["Title"] = "Careers | Lukslofts"
	return context
}
