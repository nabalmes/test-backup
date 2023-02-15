package views

import "net/http"

func Cafẽ(w http.ResponseWriter, r *http.Request) map[string]interface{} {
	context := map[string]interface{}{}

	context["Title"] = "Cafe | Lukslofts"
	return context
}
