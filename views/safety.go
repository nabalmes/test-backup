package views

import "net/http"

func Safety(w http.ResponseWriter, r *http.Request) map[string]interface{} {
	context := map[string]interface{}{}

	context["Title"] = "Safety | Lukslofts"
	return context
}
