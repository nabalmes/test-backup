package views

import "net/http"

func Gallery(w http.ResponseWriter, r *http.Request) map[string]interface{} {
	context := map[string]interface{}{}

	context["Title"] = "Gallery | Lukslofts"
	return context
}
