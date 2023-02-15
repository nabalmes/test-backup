package views

import "net/http"

func Location(w http.ResponseWriter, r *http.Request) map[string]interface{} {
	context := map[string]interface{}{}

	context["Title"] = "Location | Lukslofts"
	return context
}
