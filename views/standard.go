package views

import "net/http"

func Standard(w http.ResponseWriter, r *http.Request) map[string]interface{} {
	context := map[string]interface{}{}

	context["Title"] = "Standard | Lukslofts"
	return context
}
