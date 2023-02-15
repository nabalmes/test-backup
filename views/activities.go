package views

import "net/http"

func Activities(w http.ResponseWriter, r *http.Request) map[string]interface{} {
	context := map[string]interface{}{}

	context["Title"] = "Activities | Lukslofts"
	return context
}
